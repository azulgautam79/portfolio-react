import { useEffect, useRef, useState } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import {
    COMMAND_NAMES,
    COMMAND_DESCRIPTIONS,
    executeCommand,
} from "./commands";

const INITIAL_HISTORY = [
    {
        type: "system",
        content: "Welcome to Lemon Gautam's terminal.",
    },
    {
        type: "system",
        content: 'Type "help" to see available commands.',
    },
];

export const Terminal = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState(INITIAL_HISTORY);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current?.focus();
    // }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop =
                terminalRef.current.scrollHeight;
        }
    }, [output]);

    const addOutput = (item) => {
        setOutput((previous) => [...previous, item]);
    };

    const scrollToSection = (sectionId) => {
        document
            .getElementById(sectionId)
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    const runCommand = (rawInput) => {
        const command = rawInput.trim().toLowerCase();

        if (!command) {
            return;
        }

        addOutput({
            type: "command",
            content: command,
        });

        setCommandHistory((previous) => {
            if (previous[previous.length - 1] === command) {
                return previous;
            }

            return [...previous, command];
        });

        setHistoryIndex(-1);

        if (command === "clear") {
            setOutput([]);
            return;
        }

        const result = executeCommand(command);

        addOutput(result);

        if (result.type === "navigation") {
            setTimeout(() => {
                scrollToSection(result.target);
            }, 200);
        }

        if (result.type === "link") {
            window.open(
                result.url,
                "_blank",
                "noopener,noreferrer"
            );
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            runCommand(input);
            setInput("");

            return;
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();

            if (commandHistory.length === 0) {
                return;
            }

            const index =
                historyIndex === -1
                    ? commandHistory.length - 1
                    : Math.max(historyIndex - 1, 0);

            setHistoryIndex(index);
            setInput(commandHistory[index]);

            return;
        }

        if (event.key === "ArrowDown") {
            event.preventDefault();

            if (historyIndex === -1) {
                return;
            }

            const index = historyIndex + 1;

            if (index >= commandHistory.length) {
                setHistoryIndex(-1);
                setInput("");
                return;
            }

            setHistoryIndex(index);
            setInput(commandHistory[index]);

            return;
        }

        if (event.key === "Tab") {
            event.preventDefault();

            const value = input.toLowerCase();

            if (!value) {
                return;
            }

            const matches = COMMAND_NAMES.filter((command) =>
                command.startsWith(value)
            );

            if (matches.length === 1) {
                setInput(matches[0]);
            }
        }

        if (event.key === "Escape") {
            setInput("");
            setHistoryIndex(-1);
        }
    };

    const renderOutput = (item, index) => {
        if (item.type === "command") {
            return (
                <div key={index} className="flex gap-2 mb-3">
                    <span className="text-primary shrink-0">
                        lemon@portfolio:~$
                    </span>

                    <span>{item.content}</span>
                </div>
            );
        }

        if (item.type === "links") {
            return (
                <div key={index} className="mb-4 space-y-2">
                    {item.links.map((link) => (
                        <div key={link.label}>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                {link.label}
                            </a>

                            <span className="text-muted-foreground">
                                {" → "}
                                {link.url}
                            </span>
                        </div>
                    ))}
                </div>
            );
        }

        const outputClass =
            item.type === "error"
                ? "text-red-400"
                : item.type === "system"
                    ? "text-muted-foreground"
                    : "text-foreground";

        return (
            <pre
                key={index}
                className={`whitespace-pre-wrap leading-relaxed mb-4 ${outputClass}`}
            >
                {item.content}
            </pre>
        );
    };

    return (
        <section
            id="terminal"
            aria-labelledby="terminal-heading"
            className="py-24 px-6"
        >
            <div className="container mx-auto max-w-5xl">
                {/* Section Heading */}

                <div className="mb-10 text-center">
                    <p className="text-sm text-primary uppercase tracking-[0.25em] mb-3">
                        Interactive Terminal
                    </p>

                    <h2
                        id="terminal-heading"
                        className="text-3xl md:text-4xl font-bold"
                    >
                        Explore My Portfolio
                    </h2>

                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                        Navigate my portfolio using the command line.
                    </p>
                </div>

                {/* Terminal */}

                <div
                    className="
            rounded-2xl
            overflow-hidden
            border border-primary/20
            bg-black/80
            shadow-2xl
            backdrop-blur-xl
          "
                    onClick={() => inputRef.current?.focus()}
                >
                    {/* Header */}

                    <div
                        className="
              flex
              items-center
              gap-2
              px-4
              py-3
              border-b
              border-white/10
            "
                    >
                        <span className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                        <span className="w-3 h-3 rounded-full bg-green-500" />

                        <div className="flex items-center gap-2 ml-4 text-sm text-muted-foreground">
                            <TerminalIcon className="w-4 h-4" />

                            <span>lemon@portfolio:~</span>
                        </div>
                    </div>

                    {/* Body */}

                    <div
                        ref={terminalRef}
                        className="
              h-[460px]
              overflow-y-auto
              p-5
              md:p-6
              font-mono
              text-sm
              scrollbar-thin
            "
                    >
                        {output.map(renderOutput)}

                        {/* Input */}

                        <div className="flex items-center gap-2">
                            <span className="text-primary shrink-0">
                                lemon@portfolio:~$
                            </span>

                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(event) => {
                                    setInput(event.target.value);
                                    setHistoryIndex(-1);
                                }}
                                onKeyDown={handleKeyDown}
                                className="
                  flex-1
                  min-w-0
                  bg-transparent
                  outline-none
                  text-foreground
                  caret-primary
                "
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                                aria-label="Terminal command input"
                            />
                        </div>
                    </div>
                </div>

                {/* Help */}

                <div className="mt-4 flex justify-center gap-4 text-xs text-muted-foreground">
                    <span>
                        <kbd className="px-1.5 py-0.5 rounded bg-muted">
                            Tab
                        </kbd>{" "}
                        autocomplete
                    </span>

                    <span>
                        <kbd className="px-1.5 py-0.5 rounded bg-muted">
                            ↑ ↓
                        </kbd>{" "}
                        history
                    </span>

                    <span>
                        <kbd className="px-1.5 py-0.5 rounded bg-muted">
                            Esc
                        </kbd>{" "}
                        clear input
                    </span>
                </div>

                {/* Command suggestions */}

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {COMMAND_NAMES.slice(0, 8).map((command) => (
                        <button
                            key={command}
                            onClick={() => {
                                setInput(command);
                                inputRef.current?.focus();
                            }}
                            className="
                px-3
                py-1.5
                rounded-lg
                border
                border-primary/10
                bg-primary/5
                text-xs
                text-muted-foreground
                hover:text-primary
                hover:border-primary/30
                transition-colors
              "
                            title={COMMAND_DESCRIPTIONS[command]}
                        >
                            {command}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};