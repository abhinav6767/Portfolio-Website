import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi , The Name's Abhinav Saxena",
      "Traveler",
      "<Developer/>",
      "Content Creator",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center text-center overflow-hidden justify-center">
      <BackgroundCircle />
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
        }}
        transition={{
          default: {
            ease: [0, 0.71, 0.2, 1.01, 1],
            duration: 3,
          },

          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Image
          className="relative rounded-full h-32 w-32 mx-auto object-cover "
          src="/images/me.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </motion.div>
      <div className="z-20">
        <h2 className="uppercase text-sm text-gray-500 pb-2 tracking-[15px] ">
          Sofweare Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="">{text}</span>
          <Cursor cursorColor="#E30B5C" />
        </h1>
        <div className="mt-4">
          <Link href="#about">
            <button className="herobuttons">About</button>
          </Link>
          <Link href="#experience">
            <button className="herobuttons">Experience</button>
          </Link>
          <Link href="#skills ">
            <button className="herobuttons">Skills</button>
          </Link>
          <Link href="#project">
            <button className="herobuttons">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
