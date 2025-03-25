import { motion } from "motion/react";
import { FlipWords } from "./ui/flip-words";
// import { Spotlight } from "./ui/spotlight";
// import { TextRevealCard } from "./ui/text-reveal-card";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Hero = () => {
  const words1 = [
    { text: "Hi," },
    { text: "my" },
    { text: "name" },
    { text: "is.", className: "text-blue-500 dark:text-blue-500" },
  ];
  const words = ["Web.", "Mobile."];

  return (
    <div className="relative w-fit border-2 text-white flex flex-col items-center justify-center px-6 py-10 sm:py-16 ">
      {/* <Spotlight /> */}

      {/* Typewriter Effect */}
      <div className="w-full max-w-[40rem] px-4 mx-auto">
        <TypewriterEffectSmooth
          cursorClassName="hidden"
          className="text-sm text-center sm:text-base md:text-lg"
          words={words1}
        />
      </div>

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-center leading-tight">
        <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
          PawanRaje Kadam.
        </span>
      </h1>

      {/* Flip Words Animation */}
      <div className="h-[8rem] flex justify-center items-center px-4">
        <p className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-400">
          I build things for the <FlipWords words={words} />
        </p>
      </div>

      {/* Text Reveal Card */}
      {/* <div className="flex items-center justify-center w-full">
        <TextRevealCard
          className="bg-transparent border-0"
          text="You know the business"
          revealText="I know the chemistry"
        />
      </div> */}

      {/* Bio Section */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: "circOut",
        }}
        className="text-gray-300 mt-10 text-center leading-relaxed w-full max-w-[50rem] px-4 sm:px-0 mx-auto"
      >
        Hey there! 👋 I'm a passionate{" "}
        <span className="text-white font-semibold">MERN Stack Developer</span>{" "}
        who loves building intuitive and dynamic web applications. With a strong
        focus on{" "}
        <span className="text-white font-semibold">
          React, Next.js, and UI/UX
        </span>
        , I bring ideas to life through sleek designs and seamless interactions.
        <br />
        <br />
        Whether it's crafting smooth animations with{" "}
        <span className="text-white font-semibold">Framer Motion</span> or
        managing state like a pro with{" "}
        <span className="text-white font-semibold">Redux</span>, I thrive on
        creating engaging user experiences. Let's build something amazing
        together! 🚀
      </motion.p>
    </div>
  );
};

export default Hero;
