'use strict'
import {RiReactjsLine } from "react-icons/ri";
import { RiDatabase2Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiNodeTree } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiGitBranchLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";


const tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">TECH STACK</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiDatabase2Line className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodeTree className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Line className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiGitBranchLine className="text-7xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiGithubLine className="text-7xl text-neutral-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssLine className="text-7xl text-blue-400" />
        </div>
      </div>
    </div>
  )
}

export default tech