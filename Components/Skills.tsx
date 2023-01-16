import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-2-[2000px] px:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm ">
        hover over for all
      </h3>

      <motion.div
        className="grid grid-cols-4 gap-5"
        variants={container}
        initial="hidden"
        animate="visible"
        whileInView={{
          opacity: 1,
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15].map((index) => (
          <motion.div key={index} className="item" variants={item}>
            <Skill directionLeft={index % 2 == 0 ? true : false} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
