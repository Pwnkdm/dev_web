import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  // bg-white dark:
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <div className="p-8">
        <Hero />
      </div>
    </div>
  );
}

export default App;
