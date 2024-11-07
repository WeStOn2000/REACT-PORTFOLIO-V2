import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Importing the components
import Nav from "./components/nav";
import Profile from "./components/profile";
import About from "./components/about";
import Tech from "./components/tech";
import XP from "./components/Xp";
import Projects from "./components/Projects";
import Contact from "./components/contact";

export default function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,          // Offset from the element's top
      duration: 600,        // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: false,          // Set to false to animate on both scroll down and up
      mirror: true,         // Animations will repeat on scroll up
    });
  }, []);
  

  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300
    selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Nav />
        <Profile />
        <About />
        <Tech />
        <XP />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
