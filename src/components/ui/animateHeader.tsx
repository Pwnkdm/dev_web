import { motion } from "framer-motion";
import React from "react";

interface AnimatedHeaderProps {
  text: string;
  className?: string;
  align?: "left" | "right";
  lineColor?: string; // Use bg-* classes like "bg-gray-500/30"
  headerAnimationDuration?: number; // Time in seconds for the header animation
  lineAnimationDuration?: number; // Time in seconds for the line animation
  headerAnimationDelay?: number; // Delay in seconds before header becomes visible
  lineAnimationDelay?: number; // Delay in seconds before line becomes visible
}

const headerVariants = (duration: number, delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration, ease: "easeOut", delay: delay },
  },
});

const lineVariants = (duration: number, delay: number) => ({
  hidden: { width: "0%" }, // Explicitly set unit
  visible: {
    width: "100%",
    transition: { duration: duration, ease: "easeOut", delay: delay },
  },
});

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  text,
  className = "",
  align = "left",
  lineColor = "bg-gray-500/30",
  headerAnimationDuration = 0.9, // Default 0.9 seconds if not provided
  lineAnimationDuration = 0.9, // Default 0.9 seconds if not provided
  headerAnimationDelay = 0, // Default no delay for the header
  lineAnimationDelay = 0, // Default no delay for the line
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
          variants={lineVariants(
            lineAnimationDuration,
            headerAnimationDelay + lineAnimationDelay
          )}
        />
      )}

      <motion.h2
        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white ${className} ${
          align === "right" ? "ml-4" : "mr-4"
        }`}
        initial="hidden"
        animate="visible"
        variants={headerVariants(headerAnimationDuration, headerAnimationDelay)}
      >
        {text}
      </motion.h2>

      {align === "left" && (
        <motion.div
          className={`h-1 ${lineColor}`} // Removed flex-1
          style={{ maxWidth: "100%" }} // Optional: limit line length
          initial="hidden"
          animate="visible"
          variants={lineVariants(
            lineAnimationDuration,
            headerAnimationDelay + lineAnimationDelay
          )}
        />
      )}
    </div>
  );
};

export default AnimatedHeader;
