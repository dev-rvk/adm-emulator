"use client";

import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import { useEffect, useRef } from "react";
import { getTheme } from "@fluentui/react";

interface TerminalProps {
    onTerminalReady: (terminal: Terminal) => void;
}

export default function XTerminal({ onTerminalReady }: TerminalProps) {
    const terminalRef = useRef<HTMLDivElement>(null);
    const terminalInstance = useRef<Terminal | null>(null);
    const fitAddonRef = useRef<FitAddon | null>(null);
    const theme = getTheme();

    useEffect(() => {
        const initTerminal = () => {
            if (!terminalRef.current || terminalInstance.current) return;

            const terminal = new Terminal({
                fontFamily: "Menlo, Monaco, 'Courier New', monospace",
                theme: {
                    background: theme.palette.black,
                    foreground: theme.palette.white,
                },
                convertEol: true,
                cursorBlink: true,
                allowTransparency: true,
                scrollback: 1000,
            });

            const fitAddon = new FitAddon();
            terminal.loadAddon(fitAddon);
            fitAddonRef.current = fitAddon;
            terminalInstance.current = terminal;

            terminal.open(terminalRef.current);

            // Delay fit to ensure proper initialization
            setTimeout(() => {
                try {
                    fitAddonRef.current?.fit();
                    onTerminalReady(terminal);
                } catch (error) {
                    console.error("Fit error:", error);
                }
            }, 100);

            // Handle resize
            const handleResize = () => {
                try {
                    fitAddonRef.current?.fit();
                } catch (error) {
                    console.error("Resize fit error:", error);
                }
            };

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
                terminal.dispose();
            };
        };

        initTerminal();
    }, [onTerminalReady, theme.palette.black, theme.palette.white]);

    return (
        <div
            ref={terminalRef}
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: theme.palette.black,
                padding: "4px",
            }}
        />
    );
}
