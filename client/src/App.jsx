"use strict";

import { Routes, Route } from "react";

//Importing components
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

//Exports and displays Routes & pages to the Dom 
 export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path="/Abput" element= {<About/>}  />
         <Route path = '/Projects' element= { <Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};


