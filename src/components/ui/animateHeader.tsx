import { motion } from "framer-motion";
import React from "react";

interface AnimatedHeaderProps {
  text: string;
  className?: string;
  align?: "left" | "right";
  lineColor?: string; // Use bg-* classes like "bg-gray-500/30"
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const lineVariants = {
  hidden: { width: "0%" }, // Explicitly set unit
  visible: {
    width: "100%",
    transition: { duration: 0.9, ease: "easeOut", delay: 0.9 }, // Increased duration
  },
};

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  text,
  className = "",
  align = "left",
  lineColor = "bg-gray-500/30",
}) => {
  return (
    <div
      className={`flex items-center w-full ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      {align === "right" && (
        <motion.div
          className={`h-1 ${lineColor}`} // Removed flex-1 to avoid conflict
          style={{ maxWidth: "100%" }} // Optional: limit line length
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        />
      )}

      <motion.h2
        className={`text-4xl font-bold text-white ${className} ${
          align === "right" ? "ml-4" : "mr-4"
        }`}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        {text}
      </motion.h2>

      {align === "left" && (
        <motion.div
          className={`h-1 ${lineColor}`} // Removed flex-1
          style={{ maxWidth: "100%" }} // Optional: limit line length
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        />
      )}
    </div>
  );
};

export default AnimatedHeader;
