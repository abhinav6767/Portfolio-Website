import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function BackgroundCircle({}: Props) {
  return (
    <div className="opacity-40">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 3,
        }}
        className="relative flex justify-center items-center "
      >
        <div className="absolute  border border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
        <div className="rounded-full border border-[#333333] h-[300px] w-[300px] mt-52 absolute " />
        <div className="rounded-full border border-[#333333] h-[500px] w-[500px] mt-52 absolute " />
        <div className="rounded-full border border-[#E30B5C] h-[650px] w-[650px] mt-52 absolute animate-pulse" />
        <div className="rounded-full border border-[#333333] h-[800px] w-[800px] mt-52 absolute " />
      </motion.div>
    </div>
  );
}
