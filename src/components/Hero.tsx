const Hero = () => {
  return (
    <div className="text-white text-center m-auto border-2 flex flex-col p-2">
      <h1 className="text-2xl font-semibold text-white text-start">
        Hi, my name is <br />
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-tr from-teal-300 to-indigo-400 bg-clip-text text-transparent">
          Pawanraje Kadam.
        </span>{" "}
        <br />
        <span className="text-2xl md:text-[3rem] font-bold mt-1 leading-none ">
          I build things for the web.
        </span>
      </h1>
      <p className="text-gray-400 mt-10 text-start">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni
        eum maxime culpa? Magni praesentium eligendi ullam molestiae, atque
        assumenda at aut esse quasi, veniam minus, quibusdam iste. Totam, dolor.{" "}
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni
        eum maxime culpa? Magni praesentium eligendi ullam molestiae, atque
        assumenda at aut esse quasi, veniam minus, quibusdam iste. Totam, dolor.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni
        eum maxime culpa? Magni praesentium eligendi ullam molestiae, atque
        assumenda at aut esse quasi, veniam minus, quibusdam iste. Totam, dolor.
      </p>
    </div>
  );
};

export default Hero;
