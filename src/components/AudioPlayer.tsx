import { useState, useEffect } from "react";
import { FaVolumeMute } from "react-icons/fa";
import Lottie from "lottie-react";

const AudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const [audio] = useState(() => new Audio("/inspiring-optimistic.mp3")); // Ensure correct path

  // Load Lottie animation dynamically
  useEffect(() => {
    fetch("/Animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  // Handle user interaction for autoplay
  useEffect(() => {
    const handleUserInteraction = async () => {
      try {
        await audio.play();
        audio.loop = true;
        console.log("Audio playing...");
      } catch (err) {
        console.error("Autoplay blocked:", err);
      }
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  // Toggle mute/unmute
  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
    audio.muted = !isMuted;
  };

  return (
    <div className="fixed top-4 right-5 flex flex-col items-center justify-center p-0 bg-opacity-30 rounded-lg shadow-lg bg-black">
      <button
        onClick={toggleMute}
        className="flex items-center justify-center p-0 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300 w-10 h-10"
      >
        {isMuted ? (
          <FaVolumeMute className="text-2xl" />
        ) : (
          animationData && (
            <Lottie
              className="w-10 h-10"
              animationData={animationData}
              loop={true}
            />
          )
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
