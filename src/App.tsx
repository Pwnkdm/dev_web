import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import { Cards } from "./components/ui/cards";
import AnimatedHeader from "./components/ui/animateHeader";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { LinkPreview } from "./components/ui/link-preview";
// import Drag from "./components/FallowPointer";

function App() {
  // bg-white dark:
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <div className="h-screen bg-black overflow-auto">
      <Navbar />
      <Logo />
      <div className="p-8">
        {/* <Drag /> */}
        <Hero />
        <Cards />
        <AnimatedHeader
          text="Tech Stacks."
          align="left"
          headerAnimationDuration={1.5} // Header will animate for 1.5 seconds
          lineAnimationDuration={1} // Line will animate for 1 second
          headerAnimationDelay={5} // Header will appear 0.5 seconds after the page loads
          lineAnimationDelay={1} // Line will appear 1 second after the header
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="fast"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
        <AnimatedHeader
          text="Contact Me."
          align="right"
          headerAnimationDuration={1.5} // Header will animate for 1.5 seconds
          lineAnimationDuration={1} // Line will animate for 1 second
          headerAnimationDelay={5} // Header will appear 0.5 seconds after the page loads
          lineAnimationDelay={1} // Line will appear 1 second after the header
        />
      </div>
    </div>
  );
}

export default App;
