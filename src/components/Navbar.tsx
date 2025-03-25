import AudioPlayer from "./AudioPlayer";
import { SparklesCore } from "./ui/sparkles";

const Navbar = () => {
  return (
    <nav className={`bg-transparent p-4`}>
      <div className="flex items-center justify-between">
        {/* Logo */}

        <div className=" w-[150px] flex flex-col items-center justify-center overflow-hidden rounded-md ">
          <h1 className="text-2xl font-bold text-center  relative z-20 bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
            <span>Pwn</span>
            <span className="">Kdm</span>
          </h1>
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

        {/* Spacer to push the toggle to the right */}
        <div className="flex-grow"></div>

        <AudioPlayer />
      </div>
    </nav>
  );
};

export default Navbar;
