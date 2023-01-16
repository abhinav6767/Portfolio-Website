import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <div className=" scrollbar-thin scroll-track-gray-400/20 scrollbar-thumb-[#E30B5C] relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {/* projects */}
        {projects.map((project) => (
          <div
            key={project}
            className=" w-screen  flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen  "
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
            >
              <Image
                alt="image"
                src="/images/Product-img.jpg"
                width={500}
                height={500}
              ></Image>
            </motion.div>
            <div className=" space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center ">
                <>
                  {" "}
                  <span className="underline decoration-[#E30B5C] ">
                    <>Case study {Projects}</>
                  </span>{" "}
                </>
                ups clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                exercitationem itaque placeat minima incidunt dolor dolorum
                nisi, rerum, possimus quas veritatis voluptatem tenetur eligendi
                magnam maiores ullam at impedit fuga!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#E30B5C]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
