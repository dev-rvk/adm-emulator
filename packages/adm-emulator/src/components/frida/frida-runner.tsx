"use client";

import { useState, useEffect, useRef } from "react";
import {
    Stack,
    StackItem,
    Dropdown,
    type IDropdownOption,
    TextField,
    PrimaryButton,
    DefaultButton,
    Dialog,
    DialogType,
    DialogFooter,
    type IIconProps,
    mergeStyleSets,
    type IStackTokens,
    type IStackStyles,
    getTheme,
    Text,
} from "@fluentui/react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import dynamic from "next/dynamic";
import { GLOBAL_STATE } from "../../state";
import { config } from "@dev-rvk/adm-config";

const XTerminalNoSSR = dynamic(() => import("./terminal"), {
    ssr: false,
    loading: () => <div className="terminal-loading">Loading terminal...</div>,
});

const BASE_URL = config.FRIDA_SERVER_URL;

const playIcon: IIconProps = { iconName: "Play" };
const stopIcon: IIconProps = { iconName: "Stop" };
const editIcon: IIconProps = { iconName: "Edit" };
const downloadIcon: IIconProps = { iconName: "Download" };

const theme = getTheme();

const styles = mergeStyleSets({
    container: {
        padding: 20,
        maxWidth: 800,
        margin: "0 auto",
    },
    terminalContainer: {
        height: 400,
        marginTop: 20,
        border: `1px solid ${theme.palette.neutralLight}`,
        borderRadius: theme.effects.roundedCorner2,
        padding: "10px",
        backgroundColor: theme.palette.black,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
    },
    editor: {
        width: "100%",
        height: 300,
        border: `1px solid ${theme.palette.neutralLight}`,
        borderRadius: theme.effects.roundedCorner2,
        padding: 10,
    },
    section: {
        marginBottom: 20,
    },
    disabledSection: {
        opacity: 0.6,
        pointerEvents: "none",
    },
    horizontalContainer: {
        display: "flex",
        gap: "10px",
        alignItems: "flex-end", // This aligns items at the bottom
    },
    flexItem: {
        flex: 1,
    },
    buttonContainer: {
        display: "flex",
        gap: "10px",
        marginTop: "20px",
    },
});

const stackTokens: IStackTokens = {
    childrenGap: 10,
};

const stackStyles: Partial<IStackStyles> = {
    root: {
        width: "100%",
    },
};

export default function FridaScriptRunner() {
    const deviceSerial = GLOBAL_STATE.serial;

    const [scripts, setScripts] = useState<IDropdownOption[]>([]);
    const [selectedScript, setSelectedScript] = useState<string | undefined>();
    const [targetPackageDefault, setTargetPackageDefault] = useState("");
    const [targetPackageCustom, setTargetPackageCustom] = useState("");
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [customScript, setCustomScript] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const [isServerRunning, setIsServerRunning] = useState(false);
    const [logs, setLogs] = useState("");
    const [hasLogs, setHasLogs] = useState(false);
    const terminalRef = useRef<Terminal | null>(null);
    const logsRef = useRef("");

    useEffect(() => {
        fetchScripts();
        // Try to start Frida server when component mounts
        startFridaServer();
        return () => {
            if (isRunning) stopFridaProcess();
        };
    }, [isRunning]);

    const handleTerminalReady = (terminal: Terminal) => {
        terminalRef.current = terminal;
        terminalRef.current.onData((data) => {
            setLogs((prev) => prev + data);
            logsRef.current += data;
        });
    };

    const fetchScripts = async () => {
        try {
            const response = await fetch(`${BASE_URL}/scripts`);
            const data = await response.json();
            setScripts(
                data.map((script: string) => ({ key: script, text: script })),
            );
        } catch (error) {
            console.error("Error fetching scripts:", error);
        }
    };

    const startFridaServer = async () => {
        try {
            const response = await fetch(`${BASE_URL}/start-server`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    serial: deviceSerial,
                }),
            });
            const result = await response.json();
            if (result.status === "success") {
                setIsServerRunning(true);
            }
        } catch (error) {
            console.error("Error starting Frida server:", error);
        }
    };

    const executeScript = async (type: "default" | "custom") => {
        const target =
            type === "default" ? targetPackageDefault : targetPackageCustom;
        if (!target) {
            alert("Please enter a target package name");
            return;
        }

        const payload = {
            script: type === "default" ? selectedScript : customScript,
            type,
            target,
            serial: deviceSerial,
        };

        try {
            setIsRunning(true);
            // Reset logs when starting new execution
            setLogs("");
            logsRef.current = "";
            setHasLogs(false);
            if (terminalRef.current) {
                terminalRef.current.clear();
            }

            const response = await fetch(`${BASE_URL}/execute`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);

            const reader = response.body!.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                const text = decoder.decode(value);
                terminalRef.current?.write(text);
                setLogs((prev) => prev + text);
                logsRef.current += text;
            }
        } catch (error) {
            console.error("Script execution error:", error);
            terminalRef.current?.write(`\r\nError: ${error}\r\n`);
        } finally {
            setIsRunning(false);
            // Set hasLogs to true only if there are actual logs
            setHasLogs(logsRef.current.length > 0);
        }
    };

    const stopFridaProcess = async () => {
        try {
            await fetch(`${BASE_URL}/stop`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ serial: deviceSerial }),
            });
            setIsRunning(false);
        } catch (error) {
            console.error("Error stopping Frida process:", error);
        }
    };

    const downloadLogs = () => {
        const blob = new Blob([logsRef.current], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `frida-logs-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    const CompactInfoDisplay = ({
        scriptName,
        targetPackage,
    }: {
        deviceSerial: string;
        scriptName: string;
        targetPackage: string;
    }) => (
        <Stack
            horizontal
            tokens={{ childrenGap: 20 }}
            styles={{ root: { marginBottom: 10 } }}
        >
            <Text styles={{ root: { fontFamily: "monospace" } }}>
                Device: {deviceSerial}
            </Text>
            <Text styles={{ root: { fontFamily: "monospace" } }}>
                Script: {scriptName || "N/A"}
            </Text>
            <Text styles={{ root: { fontFamily: "monospace" } }}>
                Target: {targetPackage || "N/A"}
            </Text>
        </Stack>
    );

    return (
        <Stack className={styles.container} tokens={stackTokens}>
            {!isRunning ? (
                <>
                    {/* Remove TextField for device serial */}

                    <StackItem className={styles.section}>
                        <PrimaryButton
                            text="Start Frida Server"
                            onClick={startFridaServer}
                            iconProps={playIcon}
                            disabled={isServerRunning || !deviceSerial}
                        />
                    </StackItem>

                    <div
                        className={
                            !isServerRunning ? styles.disabledSection : ""
                        }
                    >
                        <StackItem className={styles.section}>
                            <div className={styles.horizontalContainer}>
                                <div className={styles.flexItem}>
                                    <Dropdown
                                        label="Select a script"
                                        placeholder="Choose a script"
                                        options={scripts}
                                        selectedKey={selectedScript}
                                        onChange={(_, option) =>
                                            setSelectedScript(
                                                option?.key as string,
                                            )
                                        }
                                    />
                                </div>
                                <div className={styles.flexItem}>
                                    <TextField
                                        label="Target Package (Default Script)"
                                        value={targetPackageDefault}
                                        onChange={(_, newValue) =>
                                            setTargetPackageDefault(
                                                newValue || "",
                                            )
                                        }
                                    />
                                </div>
                            </div>

                            <div className={styles.buttonContainer}>
                                <PrimaryButton
                                    text="Execute Default Script"
                                    onClick={() => executeScript("default")}
                                    disabled={
                                        !selectedScript ||
                                        !targetPackageDefault ||
                                        isRunning
                                    }
                                    iconProps={playIcon}
                                />
                                <DefaultButton
                                    text="Open Script Editor"
                                    onClick={() => setIsEditorOpen(true)}
                                    iconProps={editIcon}
                                />
                                {!isRunning && hasLogs && (
                                    <DefaultButton
                                        text="Download Logs"
                                        onClick={downloadLogs}
                                        iconProps={downloadIcon}
                                    />
                                )}
                            </div>
                        </StackItem>

                        {isRunning && (
                            <StackItem className={styles.section}>
                                <Stack horizontal tokens={{ childrenGap: 10 }}>
                                    <DefaultButton
                                        text="Stop Frida Process"
                                        onClick={stopFridaProcess}
                                        iconProps={stopIcon}
                                    />
                                    {hasLogs && (
                                        <DefaultButton
                                            text="Download Logs"
                                            onClick={downloadLogs}
                                            iconProps={downloadIcon}
                                        />
                                    )}
                                </Stack>
                            </StackItem>
                        )}
                    </div>
                </>
            ) : (
                <Stack>
                    <CompactInfoDisplay
                        deviceSerial={deviceSerial || " "}
                        scriptName={
                            selectedScript || customScript || "Custom Script"
                        }
                        targetPackage={
                            targetPackageDefault || targetPackageCustom
                        }
                    />
                    <DefaultButton
                        text="Stop Frida Process"
                        onClick={stopFridaProcess}
                        iconProps={stopIcon}
                        styles={{ root: { marginBottom: 10 } }}
                    />
                    {hasLogs && (
                        <DefaultButton
                            text="Download Logs"
                            onClick={downloadLogs}
                            iconProps={downloadIcon}
                            styles={{
                                root: { marginLeft: 10, marginBottom: 10 },
                            }}
                        />
                    )}
                </Stack>
            )}

            <StackItem className={styles.terminalContainer}>
                <XTerminalNoSSR onTerminalReady={handleTerminalReady} />
            </StackItem>

            <Dialog
                hidden={!isEditorOpen}
                onDismiss={() => setIsEditorOpen(false)}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: "Custom Script Editor",
                }}
                modalProps={{
                    isBlocking: false,
                    styles: { main: { maxWidth: 800 } },
                }}
            >
                <Stack tokens={stackTokens}>
                    <TextField
                        label="Target Package (Custom Script)"
                        value={targetPackageCustom}
                        onChange={(_, newValue) =>
                            setTargetPackageCustom(newValue || "")
                        }
                    />
                    <TextField
                        label="Custom Script"
                        multiline
                        rows={10}
                        value={customScript}
                        onChange={(_, newValue) =>
                            setCustomScript(newValue || "")
                        }
                        className={styles.editor}
                    />
                </Stack>
                <DialogFooter>
                    <PrimaryButton
                        text="Execute Custom Script"
                        onClick={() => {
                            executeScript("custom");
                            setIsEditorOpen(false);
                        }}
                        disabled={!customScript || !targetPackageCustom}
                    />
                    <DefaultButton
                        text="Cancel"
                        onClick={() => setIsEditorOpen(false)}
                    />
                </DialogFooter>
            </Dialog>
        </Stack>
    );
}
