import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function about({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -90,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      className=" flex flex-col relative text-center md:text-left md:flex-row h-screen  max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        about
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          className="-mb-20 md:mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-90 md:h-95 xl:w-[800px] xl:h-[600px]"
          src="/images/me.jpg "
          height={500}
          width={500}
        ></Image>
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          here is a{" "}
          <span className="underline decoration-[#E30B5C]">little</span>{" "}
          background.{" "}
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eum
          labore accusamus incidunt hic perspiciatis accusantium eaque placeat
          nemo, a qui dolorum autem, necessitatibus maiores nostrum delectus
          nulla illum. Consequatur?
        </p>
      </div>
    </motion.div>
  );
}
