import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import '../Xterminal/xterm.scss';

const XTerminal = () => {
    const terminalRef = useRef(null);

    useEffect(() => {
        const terminal = new Terminal();
        terminal.open(terminalRef.current);

        // Start the simulation when the component mounts
        simulateGenact(terminal);

        return () => terminal.dispose();
    }, []);

    const simulateGenact = (terminal) => {
        // Define some simulated commands and outputs as examples
const commands = [
    "$ initiate connection protocol",
    "Scanning for open ports...",
    "Open port found. Establishing connection...",
    "$ authenticate user",
    "Using exploit to bypass authentication...",
    "Authentication bypassed. Accessing system...",
    "$ elevate privileges",
    "Exploiting kernel vulnerability for root access...",
    "Privileges escalated to root.",

    "$ secure shell activated",
    "Launching secure shell...",
    "SSH session established.",

    "$ audit system vulnerabilities",
    "Auditing system for potential vulnerabilities...",
    "Vulnerabilities identified. Generating report...",

    "$ implement security measures",
    "Patching identified vulnerabilities...",
    "Security enhancements deployed. System secured.",

    "Beginning data integrity verification...",
    "R2VuZXJhdGluZyBsb2dzIGZvciBhdWRpdCB0cmFpbC4uLg==",
    "VmVyaWZ5aW5nIHN5c3RlbSBpbnRlZ3JpdHkuLi4=",
    "U3lzdGVtIGludGVncml0eSB2ZXJpZmllZC4gQWxsIGNsZWFyLg==",
    "Q2xvc2luZyBjb25uZWN0aW9uLiBTZXNzaW9uIGNvbXBsZXRlLg==",

    "Backdoor audit complete.",
];

        let currentCommand = 0;

        const displayNextCommand = () => {
            if (currentCommand < commands.length) {
                const command = commands[currentCommand];
                terminal.writeln(command);
                currentCommand++;

                // Randomize the delay for more realistic simulation
                const delay = Math.random() * 2000 + 500; // Between 500ms and 2500ms
                setTimeout(displayNextCommand, delay);
            } else {
                // Loop or finish simulation
                terminal.writeln('$ backdoor established.');
                // Uncomment below to loop
                currentCommand = 0;
                setTimeout(displayNextCommand, 2000);
            }
        };

        // Start displaying commands
        setTimeout(displayNextCommand, 1000); // Initial start delay
    };

    return <div ref={terminalRef} style={{ height: '100%', width: '100%' }} />;
};

export default XTerminal;
