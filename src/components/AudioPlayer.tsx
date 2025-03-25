// import React, { useState, useEffect } from "react";
// import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; // Using react-icons for volume icons

// const AudioPlayer = () => {
//   const [isMuted, setIsMuted] = useState(false); // State to track mute/unmute status
//   const [audio] = useState(new Audio("/audio/tune.mp3")); // Replace with your audio file path

//   useEffect(() => {
//     // Automatically play the audio when the component mounts
//     audio.play();
//     audio.loop = true; // Loop the audio

//     return () => {
//       // Cleanup: stop the audio when the component unmounts
//       audio.pause();
//       audio.currentTime = 0;
//     };
//   }, [audio]);

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//     audio.muted = !isMuted; // Toggle mute status
//   };

//   return (
//     <div className="audio-player-container">
//       <audio
//         id="background-audio"
//         src="https://musicsesame.com/station/lovers-in-paris/"
//         autoPlay
//         loop
//         muted={isMuted}
//         allow="autoplay"
//       />
//       <div className="audio-controls">
//         <button onClick={toggleMute} className="mute-button">
//           {isMuted ? (
//             <FaVolumeMute className="volume-icon" />
//           ) : (
//             <FaVolumeUp className="volume-icon" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AudioPlayer;

import { useState, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; // Using react-icons for volume icons

const AudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(false); // State to track mute/unmute status
  const [audio] = useState(new Audio("/src/assets/inspiring-optimistic.mp3")); // Replace with your audio file path

  useEffect(() => {
    const handleUserInteraction = () => {
      audio.play(); // Try to play the audio
      audio.loop = true; // Loop the audio
      // Remove the event listener once the user has interacted
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };

    // Add event listeners for user interaction to trigger audio play
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audio.muted = !isMuted; // Toggle mute status
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center justify-center p-4 bg-opacity-70 rounded-lg shadow-lg bg-black">
      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="flex items-center justify-center p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300"
      >
        {isMuted ? (
          <FaVolumeMute className="text-2xl" />
        ) : (
          <FaVolumeUp className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
