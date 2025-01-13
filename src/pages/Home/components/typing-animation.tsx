import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const TypingEffectWithColor = () => {
    const [text, setText] = useState('');
    const fullText = 'We build products that shape a better future ';
    const typingSpeed = 100; // Adjust typing speed (in milliseconds)

    // Spring for controlling the opacity
    const opacitySpring = useSpring({
        opacity: text.length > 0 ? 1 : 0,
        config: { tension: 180, friction: 12 },
    });

    useEffect(() => {
        let index = 0;

        const intervalId = setInterval(() => {
            setText((prevText) => {
                if (index < fullText.length) {
                    index += 1;
                    return fullText.slice(0, index);
                } else {
                    clearInterval(intervalId); // Stop once all text is typed
                    return prevText;
                }
            });
        }, typingSpeed);

        return () => clearInterval(intervalId); // Clean up on unmount
    }, []);

    return (
        <animated.div style={opacitySpring}>
            <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7 text-wrap">
                <>
                    {text.split(' ').map((word, idx) => (
                        <>
                            {/* Apply colors to specific parts */}
                            {word === 'products' ? (
                                <span className="text-accent">{word}</span>
                            ) : (
                                word
                            )}
                            {idx < text.split(' ').length - 1 && <> </>}
                        </>
                    ))}
                </>
            </h1>
        </animated.div>
    );
};

export default TypingEffectWithColor;
