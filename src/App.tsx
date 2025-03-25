import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const [count, setCount] = useState(0);

  // bg-white dark:
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <div className="p-8">
        <Hero />
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
