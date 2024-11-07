"use strict";
import { ABOUT_TEXT } from "../constants";
import About from "../assets/about.jpeg";

const about = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" data-aos="fade-up" >
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Image Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:p-8">
          <img className="rounded-2xl w-3/4 lg:w-2/3" src={About} alt="about" />
        </div>

        {/* Text Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start lg:p-8">
          <p className="my-2 max-w-xl py-6 text-center lg:text-left">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default about;
