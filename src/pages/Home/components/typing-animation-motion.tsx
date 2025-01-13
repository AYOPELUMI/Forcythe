import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: string; // The text to animate
  animateBy: "letter" | "word"; // Animation style: by letter or by word
  opacityFade?: boolean; // Use opacity for fade-in
  delay?: number; // Delay before animation starts (default: 0s)
  duration?: number; // Animation duration per element (default: 0.3s)
  className?: string; // Additional styling class
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  animateBy = "letter",
  opacityFade = true,
  delay = 0,
  duration = 0.3,
  className = "",
}) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    // Split text into words or letters
    const splitText = animateBy === "word" ? text.split(" ") : [...text];
    setItems(splitText);
  }, [text, animateBy]);

  return (
    <h1 className={className} style={{ display: "inline-block" }}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: opacityFade ? 0 : 1,
            y: opacityFade ? 10 : 0,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * duration,
            duration,
            ease: "easeOut",
          }}
          style={{
            display: "inline-block",
            whiteSpace: "pre", // Preserve spaces for word animation
          }}
        >
          {item}
          {animateBy === "word" && index < items.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </h1>
  );
};

export default TypingAnimation;
