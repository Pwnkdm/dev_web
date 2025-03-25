import { useState } from "react";
import "./App.css";
import { HeroHighlightDemo } from "./components/HeroHighlight";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroHighlightDemo />{" "}
    </>
  );
}

export default App;
