import Head from "next/head";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { imageAsset } from "@/public";
import Image from "next/image";
import { dataOtherProjects, dataProjects } from "@/data/data";
import { DataProjects } from "@/types";
import Link from "next/link";
import { useRef } from "react";
import { useMousePosition } from "@/components/UseMousePosition";

const Work = () => {
  return (
    <>
      <Head>
        <title>Adhika | Project page</title>
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/favicon.ico" />
        <meta name="This is project page" content="This is project page" />
      </Head>
      <main className="h-full">
        <div className="flex flex-col items-center justify-center pt-48">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="container flex items-center"
          >
            <h2 className="text-3xl text-secondary">Some Things I’ve Built</h2>
            <div className=" ml-5 h-px flex-1 bg-tertiary" />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="container flex h-full flex-col"
          >
            {dataProjects.map((item, index) => (
              <CardProject
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                tech={item.tech}
                index={index}
              />
            ))}
          </motion.div>

          <div className="container flex items-center">
            <h2 className="text-3xl text-secondary">
              Other Noteworthy Project
            </h2>
            <div className=" ml-5 h-px flex-1 bg-tertiary" />
          </div>
          <div className="container mb-40 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {dataOtherProjects.map((item, index) => (
              <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex h-full flex-col items-center justify-center p-5"
                key={index}
              >
                <div className="w-full rounded-md bg-black shadow-sm shadow-black">
                  <Image
                    className="h-full w-full rounded-md bg-cover shadow-lg shadow-black"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="mt-5 flex flex-col items-center justify-center gap-y-2">
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-xl text-secondary transition-all duration-300 hover:text-accent"
                  >
                    {item.title}
                  </Link>
                  <p className="text-center text-tertiary">
                    {item.description}
                  </p>
                  <ul className="flex flex-wrap justify-center gap-2">
                    {item.tech.map((items, indexTech) => (
                      <li
                        className="rounded-xl border-accent bg-accent/20 px-3 py-1 text-center text-sm text-accent"
                        key={indexTech}
                      >
                        {items}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;

// Card Project Widget
const CardProject = ({
  title,
  description,
  image,
  link,
  tech,
  index,
}: DataProjects) => {
  return (
    <div className="my-5 h-full">
      <div className="container relative mx-auto flex h-80 max-w-4xl flex-col items-center justify-center md:items-start">
        <h4 className="hidden text-sm text-accent md:block">
          Featured Projects
        </h4>
        <div className="hidden w-full max-w-xl md:block">
          <div className="my-2">
            {link !== null ? (
              <Link
                href={link}
                className="text-xl text-white transition-all duration-300 hover:text-accent"
                target="_blank"
              >
                {title}
              </Link>
            ) : (
              <h1 className="text-xl text-white">{title}</h1>
            )}
          </div>
          <div
            // style={{ backgroundColor: "#0d2447" }}
            className="relative top-0 z-10 w-full rounded-md bg-primary/70 p-10 shadow-md shadow-black backdrop-blur-sm xl:h-max"
          >
            <div>{description}</div>
          </div>
          <div className="w-3/4">
            <ul className="mt-4 flex w-full flex-wrap gap-3">
              {tech.map((item, indexTech) => (
                <li
                  className="rounded-xl border-accent bg-accent/20 px-3 py-1 text-center text-sm text-accent"
                  key={indexTech}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative md:absolute md:right-0 md:top-0 md:translate-y-5">
          <Image
            className="h-auto w-96 rounded-md bg-cover shadow-md shadow-black"
            src={image}
            alt={title}
          />
          <div className="absolute left-0 top-0 h-full w-full rounded-md bg-black bg-opacity-50 md:hidden">
            <div className="p-5">
              <h4 className="text-sm text-accent">Featured Projects</h4>
              {link !== null ? (
                <Link
                  href={link}
                  className="text-xl text-white  transition-all duration-300 hover:text-accent"
                  target="_blank"
                >
                  {title}
                </Link>
              ) : (
                <h1 className="text-xl text-white">{title}</h1>
              )}
              <div className="flex flex-col justify-center">
                <div>{description}</div>
                <ul className="flex flex-wrap gap-2">
                  {tech.map((item, indexTech) => (
                    <li
                      className="rounded-xl pr-3 text-sm font-light text-accent/90"
                      key={indexTech}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
