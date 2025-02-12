import {
    DefaultButton,
    Dialog,
    Dropdown,
    IDropdownOption,
    PrimaryButton,
    ProgressIndicator,
    Stack,
    StackItem,
    TextField,
    Text,
    Icon,
} from "@fluentui/react";
import {
    Adb,
    AdbDaemonDevice,
    AdbDaemonTransport,
    AdbPacketData,
    AdbPacketInit,
} from "@yume-chan/adb";
import AdbWebCredentialStore from "@yume-chan/adb-credential-web";
import AdbDaemonDirectSocketsDevice from "@yume-chan/adb-daemon-direct-sockets";
import AdbDaemonWebSocketDevice from "@yume-chan/adb-daemon-ws";
import {
    Consumable,
    InspectStream,
    ReadableStream,
    WritableStream,
    pipeFrom,
} from "@yume-chan/stream-extra";
import { observer } from "mobx-react-lite";
import { use, useCallback, useEffect, useMemo, useState } from "react";
import { GLOBAL_STATE } from "../state";
import { CommonStackTokens, Icons } from "../utils";
import { useRouter } from "next/router";
import { AdbDaemonWebUsbDeviceManager } from "@yume-chan/adb-daemon-webusb";
import { AdbUsbTransport, getClientId } from "../utils/adb-usb-transport";
import { config } from "config";

const serverUrl = config.TANGO_BACKEND_MANAGER_URL;

const DropdownStyles = { dropdown: { width: "100%" } };

const CredentialStore = new AdbWebCredentialStore();

function ConnectCore(): JSX.Element | null {
    const [selected, setSelected] = useState<AdbDaemonDevice | undefined>();
    const [connecting, setConnecting] = useState(false);
    const [usbSupported, setUsbSupported] = useState(true);
    const [usbDeviceList, setUsbDeviceList] = useState<AdbDaemonDevice[]>([]);
    const [connectingEmulator, setConnectingEmulator] = useState<
        Boolean | undefined
    >();
    const handleSelectedChange = (
        e: React.FormEvent<HTMLDivElement>,
        option?: IDropdownOption,
    ) => {
        setSelected(option?.data as AdbDaemonDevice);
    };

    const updateUsbDeviceList = useCallback(async () => {
        try {
            const devices: AdbDaemonDevice[] =
                await AdbDaemonWebUsbDeviceManager.BROWSER!.getDevices();
            setUsbDeviceList(devices);
            return devices;
        } catch (error: any) {
            setUsbSupported(false);
            GLOBAL_STATE.showErrorDialog(` Browser not Supported ${error}`);
        }
    }, []);

    const [wsUrlUSB, setWsUrlUSB] = useState<string>("");

    const [isConnecting, setIsConnecting] = useState(false);
    const connectUsbDevice = useCallback(async () => {
        if (isConnecting) return;
        setIsConnecting(true);
        console.log("connecting....");
        console.log("WebSocket URL:", wsUrlUSB); // Log the value of wsUrlUSB before using it
        if (!wsUrlUSB) {
            console.log("WebSocket URL is not set");
            throw new Error("WebSocket URL is not set");
        }
        const device = new Adb(new AdbUsbTransport({ wsUrl: wsUrlUSB }));
        console.log("Device:", device);
        const url = new URL(wsUrlUSB);

        try {
            console.log("URL content:", wsUrlUSB);
            console.log("URL length:", wsUrlUSB?.length);
            console.log(device);
            GLOBAL_STATE.setDevice(undefined, device);

            const serialParam = url.searchParams.get("serial");

            if (!serialParam) {
                throw new Error("Serial parameter not found in URL");
            }

            const clientId = getClientId();

            // Notify backend that the device is connected
            await fetch(`${serverUrl}/connected`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clientId,
                    serial: serialParam,
                }),
            });

            device.disconnected.then(async () => {
                console.log("Device disconnected");
                await dispose(serialParam);
            });

            console.log(GLOBAL_STATE.adb);
            console.log("Device serial:", serial);
        } catch (e: any) {
            if (e instanceof TypeError && e.message.includes("Invalid URL")) {
                console.warn("Invalid WebSocket URL provided:", wsUrlUSB);
                // Don't show error dialog for invalid URL
                return;
            }
            console.log(e);
            GLOBAL_STATE.showErrorDialog(e);
        } finally {
            setIsConnecting(false);
        }

        async function dispose(deviceSerial: string) {
            // Close the AdbUsbTransport instance
            try {
                await device.transport.close();
            } catch (e) {
                console.error("Error closing transport:", e);
            }
            GLOBAL_STATE.setDevice(undefined, undefined);
            const clientId = getClientId();

            // Notify backend that the device is disconnected
            await fetch(`${serverUrl}/disconnected`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clientId,
                    serial: deviceSerial,
                }),
            });
        }
    }, [wsUrlUSB, isConnecting, setIsConnecting]);

    const router = useRouter();
    const { type, wsUrl, serial } = router.query;

    // Handle initial websocket URL setup
    useEffect(() => {
        if (!type || !wsUrl || typeof wsUrl !== "string") {
            return;
        }
        console.log("wsUrl:", wsUrl);

        const connectionType = type.toString().toUpperCase();
        const serialValue = typeof serial === "string" ? serial : undefined;

        // Set the serial in GLOBAL_STATE if available
        if (serialValue) {
            GLOBAL_STATE.setSerial(serialValue);
        }
        if (
            (connectionType === "EMULATOR" || connectionType === "WIFI") &&
            !GLOBAL_STATE.adb
        ) {
            // Handle emulator/wifi connection
            const device = new AdbDaemonWebSocketDevice(wsUrl);
            setWebSocketDeviceList((list) => {
                const existingDevice = list.find((d) => d.serial === wsUrl);
                if (!existingDevice) {
                    return [...list, device];
                }
                return list;
            });
            setSelected(device);
            setConnectingEmulator(true);
        } else if (connectionType === "USB" && !GLOBAL_STATE.adb) {
            // Handle USB connection
            try {
                setWsUrlUSB(decodeURIComponent(wsUrl));
                console.log("wsUrlUSB set to:", decodeURIComponent(wsUrl));
            } catch (error) {
                console.error("Error processing WebSocket URL:", error);
                GLOBAL_STATE.showErrorDialog("Invalid WebSocket URL");
            }
        }
    }, [type, wsUrl, serial]);

    useEffect(() => {
        if (wsUrlUSB) {
            connectUsbDevice();
        }
    }, [wsUrlUSB]);

    useEffect(() => {
        if (
            connectingEmulator &&
            selected &&
            !GLOBAL_STATE.adb &&
            !isConnecting
        ) {
            connect().then(() => {});
        }
    });

    // Hide UI when auto-connecting
    let showConnectUI = !wsUrl || !!GLOBAL_STATE.adb;

    const [webSocketDeviceList, setWebSocketDeviceList] = useState<
        AdbDaemonWebSocketDevice[]
    >([]);
    useEffect(() => {
        const savedList = localStorage.getItem("ws-backend-list");
        if (!savedList) {
            return;
        }

        const parsed = JSON.parse(savedList) as { address: string }[];
        setWebSocketDeviceList(
            parsed.map((x) => new AdbDaemonWebSocketDevice(x.address)),
        );
    }, []);

    const addWebSocketDevice = useCallback(() => {
        const address = window.prompt("Enter the address of WebSockify server");
        if (!address) {
            return;
        }
        setWebSocketDeviceList((list) => {
            const copy = list.slice();
            copy.push(new AdbDaemonWebSocketDevice(address));
            globalThis.localStorage.setItem(
                "ws-backend-list",
                JSON.stringify(copy.map((x) => ({ address: x.serial }))),
            );
            return copy;
        });
    }, []);

    const [tcpDeviceList, setTcpDeviceList] = useState<
        AdbDaemonDirectSocketsDevice[]
    >([]);
    useEffect(() => {
        if (!AdbDaemonDirectSocketsDevice.isSupported()) {
            return;
        }

        const savedList = localStorage.getItem("tcp-backend-list");
        if (!savedList) {
            return;
        }

        const parsed = JSON.parse(savedList) as {
            address: string;
            port: number;
        }[];
        setTcpDeviceList(
            parsed.map(
                (x) => new AdbDaemonDirectSocketsDevice(x.address, x.port),
            ),
        );
    }, []);

    const addTcpDevice = useCallback(() => {
        const host = window.prompt("Enter the address of device");
        if (!host) {
            return;
        }

        const port = window.prompt("Enter the port of device", "5555");
        if (!port) {
            return;
        }

        const portNumber = Number.parseInt(port, 10);

        setTcpDeviceList((list) => {
            const copy = list.slice();
            copy.push(new AdbDaemonDirectSocketsDevice(host, portNumber));
            globalThis.localStorage.setItem(
                "tcp-backend-list",
                JSON.stringify(
                    copy.map((x) => ({
                        address: x.host,
                        port: x.port,
                    })),
                ),
            );
            return copy;
        });
    }, []);

    const connect = useCallback(async () => {
        if (!selected) {
            return;
        }

        setConnecting(true);

        let readable: ReadableStream<AdbPacketData>;
        let writable: WritableStream<Consumable<AdbPacketInit>>;
        try {
            const streams = await selected.connect();

            // Use `InspectStream`s to intercept and log packets
            readable = streams.readable.pipeThrough(
                new InspectStream((packet) => {
                    GLOBAL_STATE.appendLog("in", packet);
                }),
            );

            writable = pipeFrom(
                streams.writable,
                new InspectStream((packet: Consumable<AdbPacketInit>) => {
                    GLOBAL_STATE.appendLog("out", packet.value);
                }),
            );

            const serial = GLOBAL_STATE.serial;
            const clientId = getClientId();

            // Notify backend that the device is connected
            await fetch(`${serverUrl}/connected`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clientId,
                    serial,
                }),
            });
        } catch (e: any) {
            GLOBAL_STATE.showErrorDialog(e);
            setConnecting(false);
            return;
        }

        async function dispose() {
            // Adb won't close the streams,
            // so manually close them.
            try {
                await readable.cancel();
            } catch {}
            try {
                await writable.close();
            } catch {}
            GLOBAL_STATE.setDevice(undefined, undefined);

            const serial = GLOBAL_STATE.serial;
            const clientId = getClientId();

            // Notify backend that the device is disconnected
            await fetch(`${serverUrl}/disconnected`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clientId,
                    serial,
                }),
            });
        }

        try {
            const device = new Adb(
                await AdbDaemonTransport.authenticate({
                    serial: selected.serial,
                    connection: { readable, writable },
                    credentialStore: CredentialStore,
                }),
            );

            device.disconnected.then(
                async () => {
                    await dispose();
                },
                async (e) => {
                    GLOBAL_STATE.showErrorDialog(e);
                    await dispose();
                },
            );

            GLOBAL_STATE.setDevice(selected, device);
        } catch (e: any) {
            GLOBAL_STATE.showErrorDialog(e);
            await dispose();
        } finally {
            setConnecting(false);
        }
    }, [selected]);

    const disconnect = useCallback(async () => {
        try {
            const serial = GLOBAL_STATE.serial;
            const clientId = getClientId();
            setSelected(undefined);
            await GLOBAL_STATE.adb!.close();
            console.log("WebSocket connection closed from frontend");

            // Notify backend that the device is disconnected
            await fetch(`${serverUrl}/disconnected`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clientId,
                    serial,
                }),
            });
        } catch (e: any) {
            GLOBAL_STATE.showErrorDialog(e);
        }
    }, []);

    const deviceList = useMemo(
        () =>
            ([] as AdbDaemonDevice[]).concat(
                webSocketDeviceList,
                usbDeviceList,
                tcpDeviceList,
            ),
        [webSocketDeviceList, usbDeviceList, tcpDeviceList],
    );

    const deviceOptions = useMemo(() => {
        return deviceList.map((device) => ({
            key: device.serial,
            text: `${device.serial} ${device.name ? `(${device.name})` : ""}`,
            data: device,
        }));
    }, [deviceList]);

    useEffect(() => {
        setSelected((old) => {
            if (old) {
                const current = deviceList.find(
                    (device) => device.serial === old.serial,
                );
                if (current) {
                    return current;
                }
            }

            return deviceList.length ? deviceList[0] : undefined;
        });
    }, [deviceList]);

    const addUsbDevice = useCallback(async () => {
        try {
            const [device] = await Promise.all([
                AdbDaemonWebUsbDeviceManager.BROWSER!.requestDevice(),
            ]);
            setSelected(device);
            await updateUsbDeviceList();
        } catch (e: any) {
            setUsbSupported(false);
            GLOBAL_STATE.showErrorDialog("Browser does not support WebADB");
        }
    }, [updateUsbDeviceList]);

    const addMenuProps = useMemo(() => {
        const items = [];

        if (usbSupported) {
            items.push({
                key: "usb",
                text: "USB",
                onClick: addUsbDevice,
            });
        }

        items.push({
            key: "websocket",
            text: "WebSocket",
            onClick: addWebSocketDevice,
        });

        if (AdbDaemonDirectSocketsDevice.isSupported()) {
            items.push({
                key: "direct-sockets",
                text: "Direct Sockets TCP",
                onClick: addTcpDevice,
            });
        }

        return {
            items,
        };
    }, [usbSupported, addUsbDevice, addWebSocketDevice, addTcpDevice]);

    return (
        <>
            {showConnectUI && (
                <Stack tokens={{ childrenGap: 8, padding: "0 0 8px 8px" }}>
                    {!GLOBAL_STATE.adb ? (
                        <>
                            <Dropdown
                                disabled={!!GLOBAL_STATE.adb}
                                label="Available devices"
                                placeholder="No available devices"
                                options={deviceOptions}
                                styles={DropdownStyles}
                                dropdownWidth={300}
                                selectedKey={selected?.serial}
                                onChange={handleSelectedChange}
                            />
                            <Stack horizontal tokens={CommonStackTokens}>
                                <StackItem grow shrink>
                                    <PrimaryButton
                                        iconProps={{
                                            iconName: Icons.PlugConnected,
                                        }}
                                        text="Connect"
                                        disabled={!selected}
                                        primary={!!selected}
                                        styles={{ root: { width: "100%" } }}
                                        onClick={connect}
                                    />
                                </StackItem>
                                <StackItem grow shrink>
                                    <DefaultButton
                                        iconProps={{
                                            iconName: Icons.AddCircle,
                                        }}
                                        text="Add"
                                        split
                                        splitButtonAriaLabel="Add other connection type"
                                        menuProps={addMenuProps}
                                        disabled={!usbSupported}
                                        primary={!selected}
                                        styles={{ root: { width: "100%" } }}
                                        onClick={addUsbDevice}
                                    />
                                </StackItem>
                            </Stack>

                            <Stack horizontal tokens={CommonStackTokens}>
                                <StackItem grow shrink>
                                    <TextField
                                        placeholder="WebSocket URL"
                                        value={wsUrlUSB}
                                        onChange={(e, newValue) =>
                                            setWsUrlUSB(newValue || "")
                                        }
                                    />
                                </StackItem>
                                <StackItem align="end">
                                    <PrimaryButton
                                        iconProps={{
                                            iconName: Icons.PlugConnected,
                                        }}
                                        text="Connect"
                                        disabled={!wsUrlUSB}
                                        onClick={connectUsbDevice}
                                    />
                                </StackItem>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Stack
                                horizontal
                                verticalAlign="center"
                                tokens={{ childrenGap: 8 }}
                                styles={{
                                    root: {
                                        padding: "8px",
                                        backgroundColor: "white",
                                        borderRadius: "2px",
                                    },
                                }}
                            >
                                <Icon
                                    iconName={Icons.PhoneCheckmarkRegular}
                                    styles={{
                                        root: {
                                            fontSize: 20,
                                            fontWeight: 600,
                                            color: "#0078d4",
                                        },
                                    }}
                                />
                                <Text
                                    styles={{
                                        root: {
                                            paddingTop: "6px",
                                            fontWeight: 600,
                                            color: "#0078d4",
                                        },
                                    }}
                                >
                                    {`Device Connected: ${GLOBAL_STATE.serial}`}
                                </Text>
                            </Stack>
                            <DefaultButton
                                iconProps={{ iconName: Icons.PlugDisconnected }}
                                text="Disconnect"
                                onClick={disconnect}
                            />
                        </>
                    )}
                </Stack>
            )}

            <Dialog
                hidden={!connecting}
                dialogContentProps={{
                    title: "Connecting...",
                    subText: "Please authorize the connection on your device",
                }}
            >
                <ProgressIndicator />
            </Dialog>
        </>
    );
}
export const Connect = observer(ConnectCore);
