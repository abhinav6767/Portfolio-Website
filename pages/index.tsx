import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import styles from "../styles/Home.module.css";
import Hero from "../Components/Hero";
import About from "../Components/about";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import ContactMe from "../Components/ContactMe";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-[rgb(36,36,36,36)] scrollbar scroll-track-gray-400/20 scrollbar-thumb-[#E30B5C] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 ">
      <Head>
        <title>My Portfolio </title>
      </Head>

      <Header />

      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
        {/*  about */}
      </section>

      <section id="experience" className="snap-center">
        <Experience />
        {/* Experince */}
      </section>
      <section id="skills" className="snap-start">
        <Skills />
        {/* Skills */}
      </section>
      <section id="project" className="snap-start">
        {/* Project */}
        <Projects />
      </section>

      <section id="contactMe" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/images/footer.png"
              height={200}
              width={100}
              className="rounded-full grayscale hover:hrayscale-0"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
