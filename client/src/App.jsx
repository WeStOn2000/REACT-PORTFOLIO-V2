'Use strict'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  Routes, Route } from "react-router-dom";
import  Home  from "./components/Home";
import Header from "./components/Header";



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 200,     
      once: true,
    });
  }, []);

  return (
      <div>
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </main>
      </div>
  );
};

export default App;

