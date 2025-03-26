import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

const Logo = () => {
  // Animation variants for the brackets and text
  const bracketVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <div className="flex items-center justify-center ">
      <div className=" w-[fit] flex flex-col items-center justify-center overflow-hidden rounded-md ">
        <div className="flex items-center space-x-2">
          {/* Left Bracket */}
          <motion.span
            className="text-3xl text-white"
            variants={bracketVariants}
            initial="hidden"
            animate="visible"
          >
            &lt;
          </motion.span>

          {/* Text */}
          <motion.span
            className="text-3xl font-mono font-bold bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            PwnKdm
          </motion.span>

          {/* Right Bracket */}
          <motion.span
            className="text-3xl text-white"
            variants={bracketVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="text-indigo-500">/</span>&gt;
          </motion.span>
        </div>
        <div className="w-[40rem] h-5 relative bg-transparent">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
