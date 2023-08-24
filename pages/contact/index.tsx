import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import { useMousePosition } from "@/components/UseMousePosition";
import Head from "next/head";
import ParticlesContainer from "@/components/ParticlesContainer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Adhika | Connect page</title>
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/favicon.ico" />
        <meta name="This is connect page" content="This is connect page" />
      </Head>
      <div className="h-screen bg-primary/40">
        <div className="container mx-auto flex h-full items-center justify-center py-32 text-center xl:text-left">
          <div className="flex w-full max-w-[700px] flex-col">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              Lets <span className="text-accent">connect</span>
            </motion.h2>

            <motion.form
              variants={fadeIn("up", 0.4)}
              target="_blank"
              initial="hidden"
              animate="show"
              exit="hidden"
              method="POST"
              action={"https://formsubmit.co/adiwijna@gmail.com"}
            >
              <div className="flex w-full flex-col gap-6">
                <div className="flex w-full gap-x-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input"
                    name="name"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input lowercase"
                    name="email"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input"
                  name="subject"
                  required
                />
                <textarea
                  placeholder="Message"
                  className="input h-40 lowercase"
                  name="message"
                  rows={5}
                  required
                ></textarea>
                <button className="btn group flex max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent">
                  <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                    Let&apos;s talk
                  </span>
                  <BsArrowRight className="absolute -translate-y-[120%] text-[22px] text-accent opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 -z-0 h-1/4 w-full">
          <ParticlesContainer />
        </div>
      </div>
    </>
  );
};

export default Contact;
