import AudioPlayer from "./AudioPlayer";
import { SparklesCore } from "./ui/sparkles";

const Navbar = () => {
  return (
    <nav className={`bg-transparent p-4 w-fit`}>
      <div className="flex items-center justify-between">
        <AudioPlayer />
      </div>
    </nav>
  );
};

export default Navbar;
