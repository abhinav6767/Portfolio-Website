import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {
  directionLeft: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        src="/images/pp-logo.png"
        className="rounded-full border border-gray-500  object-cover w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        initial={{ x: directionLeft ? -200 : 200 }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      ></motion.img>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl fon-bold text-black opacity-100 ">100%</p>
        </div>
      </div>
    </div>
  );
}
