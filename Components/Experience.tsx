import React from "react";
import { motion } from "framer-motion";
import Experiencecard from "./Experiencecard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Experience
      </h3>
      {/* Experience Card  */}
      <div className="scrollbar-thin scroll-track-gray-400/20 scrollbar-thumb-[#E30B5C] w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <Experiencecard />
        <Experiencecard />
        <Experiencecard />
        <Experiencecard />
      </div>
    </div>
  );
}
