import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css'; // Import the xterm.css for default styling
import '../Xterminal/xterm.scss';

const XTerminal = () => {
    const terminalRef = useRef(null);

    useEffect(() => {
        const terminal = new Terminal();
        terminal.open(terminalRef.current);

        terminal.writeln('➜  Network: use --host to expose\n');

        // You can customize the prompt and handle commands here
        terminal.onData(data => {
            switch (data) {
                case '\r': // Enter key
                    // Process commands here
                    terminal.write('\r\n$ ');
                    break;
                default: // Other keys
                    terminal.write(data);
            }
        });

        return () => terminal.dispose();
    }, []);

    return <div ref={terminalRef} style={{ height: '100%', width: '100%' }} />;
};

export default XTerminal;
