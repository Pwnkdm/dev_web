import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
// import Drag from "./components/FallowPointer";

function App() {
  // bg-white dark:
  return (
    <div className="h-screen bg-black overflow-auto">
      <Navbar />
      <Logo />
      <div className="p-8">
        {/* <Drag /> */}
        <Hero />
      </div>
    </div>
  );
}

export default App;
