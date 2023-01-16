import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Experiencecard({}: Props) {
  return (
    <article className="overflow-hidden  cursor-pointer transition-opacity duration-200 opacity-40 hover:opacity-100 snap-center bg-[#292929] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[900px]">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center">
          <Image
            alt="image"
            className="   w-32 h-32 rounded-full object-center object-cover md:rounded-full xl:w-[200px] xl:h-[200opx]"
            src={"/images/Toyota-logo-min.png"}
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="px-0 md:px-10 ">
          <h4 className=" text-4xl font-light uppercase ">CEo of papafam </h4>
          <p className="font-bold text-2xl mt-1">Papafam</p>
          <div className="flex space-x-2 my-2"></div>
          <p className="uppercase py-5 text-gray-300">Started woeking</p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summery points</li>
            <li>Summery points</li>
            <li>Summery points</li>
            <li>Summery points</li>
            <li>Summery points</li>
          </ul>
        </div>
      </motion.div>
    </article>
  );
}
