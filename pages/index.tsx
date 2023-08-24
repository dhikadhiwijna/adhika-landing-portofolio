import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useEffect, useState } from "react";
import { useMousePosition } from "@/components/UseMousePosition";
import Head from "next/head";

const Home = () => {
  const mousePosition = useMousePosition();

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
  };

  return (
    <>
      <Head>
        <title>Adhika | Home Page</title>
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/favicon.ico" />
        <meta name="This is home page" content="This is home page" />
      </Head>
      <div className="h-full bg-primary/60">
        <div className="h-screen w-full">
          <motion.div
            variants={variants}
            animate="default"
            className="absolute top-0 h-4 w-4 rounded-full border-2 border-accent"
            style={{
              transform: `translate(${mousePosition.x / 100}px, ${
                mousePosition.y / 100
              }px)`,
            }}
          />
          <div className="container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left">
            <p className="mb-4 text-xl text-accent">Hi, my name is</p>

            <motion.h1
              className="relative z-50 text-6xl font-bold text-secondary"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <div className="absolute left-0 top-0 hidden h-1/2 w-1/2 rounded-full text-white transition-all duration-300 hover:-left-1 hover:-top-1 xl:block">
                Adhika Adhiwijna<span className="text-accent">.</span>
              </div>
              <div className="text-white xl:text-accent">
                Adhika Adhiwijna<span className="text-accent">.</span>
              </div>
            </motion.h1>

            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 text-tertiary"
            >
              I build web and mobile app.
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl"
            >
              I’m a software engineer specializing in building exceptional
              digital experiences. Currently, I’m focused on building
              accessible, human-centered products at Argon Group.
            </motion.p>

            <div className="relative flex justify-center xl:hidden">
              <ProjectsBtn />
            </div>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 h-full w-[1200px]">
          <ParticlesContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
