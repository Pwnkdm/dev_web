import { motion } from "motion/react";
import { FlipWords } from "./ui/flip-words";
// import { Spotlight } from "./ui/spotlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import AnimatedHeader from "./ui/animateHeader";

const Hero = () => {
  const words1 = [
    {
      text: "Hi,",
      className: "text-neutral-500 text-sm sm:text-base md:text-lg lg:text-xl",
    },
    {
      text: "my",
      className: "text-neutral-500 text-sm sm:text-base md:text-lg lg:text-xl",
    },
    {
      text: "name",
      className: "text-neutral-500 text-sm sm:text-base md:text-lg lg:text-xl",
    },
    {
      text: "is",
      className:
        "text-blue-500 dark:text-blue-500 text-sm sm:text-base md:text-lg lg:text-xl",
    },
  ];

  const words = ["Web.", "Mobile."];

  return (
    <div className="relative w-full text-white flex flex-col items-center justify-center px-6">
      {/* <Spotlight /> */}

      {/* Typewriter Effect */}
      <div className="w-fit max-w-[40rem] px-4 mx-auto">
        <TypewriterEffectSmooth
          cursorClassName="hidden"
          className="text-sm sm:text-base md:text-lg dark:text-white mb-0 text-center "
          words={words1}
        />
      </div>

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mt-6">
        <motion.span
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3, ease: "easeIn" }}
          className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent"
        >
          PawanRaje Kadam.
        </motion.span>
      </h1>

      {/* Flip Words Animation */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4, ease: "easeIn" }}
        className="h-[4rem] flex justify-center items-center text-center mt-4"
      >
        <p className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-400 px-5">
          I build things for the <FlipWords words={words} />
        </p>
      </motion.div>

      {/* Bio Section */}
      <AnimatedHeader text="About" lineColor="bg-neutral-500" align="left" />
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          duration: 1,
          delay: 5,
          ease: "circOut",
        }}
        className="text-gray-300 mt-10 text-center leading-relaxed w-full max-w-[50rem] px-4 sm:px-6 mx-auto"
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
