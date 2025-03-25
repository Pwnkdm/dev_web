import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Drag from "./components/FallowPointer";

function App() {
  // bg-white dark:
  return (
    <div className="h-screen bg-black overflow-auto">
      <Navbar />
      <div className="p-8">
        {/* <Drag /> */}
        <Hero />
      </div>
    </div>
  );
}

export default App;
