import { useEffect, useState } from "react";

export const TypingText = ({
    text,
    speed = 12,
    onComplete,
}) => {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index++;

            setDisplayed(text.slice(0, index));

            if (index >= text.length) {
                clearInterval(interval);
                onComplete?.();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, onComplete]);

    return (
        <span>
            {displayed}
            <span className="animate-pulse text-primary">▋</span>
        </span>
    );
};