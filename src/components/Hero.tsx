
import { motion } from "motion/react";
const Hero = () => {
  return (
    <div className="text-white text-center m-auto flex flex-col p-4">
      <h1 className="text-2xl font-semibold text-white text-start">
        Hi, my name is <br />
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
          Pawanraje Kadam.
        </span>{" "}
        <br />
        <span className="text-2xl md:text-[3rem] font-bold mt-1 leading-none ">
          I build things for the web.
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: "circOut",
        }}
        className="text-gray-300 mt-10 text-start leading-relaxed w-[50%] md:w-[90%] sm:w-[100%]"
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
