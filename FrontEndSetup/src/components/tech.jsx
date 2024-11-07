"use strict";
import { RiReactjsLine } from "react-icons/ri";
import { RiDatabase2Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiNodeTree } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiGitBranchLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";

const tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" data-aos="fade-right" >
      <h2 className="my-20 text-center text-4xl">TECH STACK</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-hover">
          <RiReactjsLine className="tech-icon text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-hover">
          <RiDatabase2Line className="tech-icon text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-hover">
          <RiJavascriptLine className="tech-icon text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-hover">
          <RiNodeTree className="tech-icon text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-hover">
          <RiHtml5Line className="tech-icon text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-hover">
          <RiGitBranchLine className="tech-icon text-7xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-hover">
          <RiGithubLine className="tech-icon text-7xl text-neutral-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:animate-hover">
          <RiTailwindCssLine className="tech-icon text-7xl text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default tech;
