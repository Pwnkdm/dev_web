import { useState, useEffect } from "react";
import { FaVolumeMute } from "react-icons/fa";
import Lottie from "lottie-react";
import musicAnimation from "../../public/Animation.json";
import audiomp3 from "../../public/inspiring-optimistic.mp3";

const AudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [audio] = useState(new Audio(audiomp3));

  useEffect(() => {
    const handleUserInteraction = () => {
      audio.play().catch((err) => console.log("Autoplay blocked:", err));
      audio.loop = true;
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };

    audio.addEventListener("canplaythrough", handleUserInteraction);
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      audio.removeEventListener("canplaythrough", handleUserInteraction);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audio.muted = !isMuted;
  };

  return (
    <div className="fixed top-4 right-5 flex flex-col items-center justify-center p-0 bg-opacity-30 rounded-lg shadow-lg bg-black">
      <button
        onClick={toggleMute}
        className="flex items-center justify-center p-0 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300 w-10 h-10"
      >
        {isMuted ? (
          <FaVolumeMute />
        ) : (
          <Lottie
            className="text-4xl"
            animationData={musicAnimation}
            loop={true}
          />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
