import Head from "next/head";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Image from "next/image";
import { dataOtherProjects, dataProjects } from "@/data/data";
import { DataProjects } from "@/types";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { useAnalytics } from "@/data/firebase-config";
import { logEvent } from "firebase/analytics";
import { BiLinkExternal } from "react-icons/bi";

const Work = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const analytics = useAnalytics();

  const handleLinkClick = (link: string, value: number) => {
    logEvent(analytics, "view_item", {
      items: [
        {
          item_id: value.toString(),
          item_name: link,
          item_category: "link",
        },
      ],
    });
  };

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
            {dataProjects.map((item, index) => {
              return isMobile ? (
                <MobileCardProject
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  link={item.link}
                  tech={item.tech}
                  index={index}
                  onClick={() => handleLinkClick(item.title, index)}
                />
              ) : (
                <WebCardProject
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  link={item.link}
                  tech={item.tech}
                  index={index}
                  onClick={() => handleLinkClick(item.title, index)}
                />
              );
            })}
          </motion.div>

          <div className="container flex items-center pt-20">
            <h2 className="text-3xl text-secondary">
              Other Noteworthy Project
            </h2>
            <div className=" ml-5 h-px flex-1 bg-tertiary" />
          </div>
          <div className="container mb-40 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {dataOtherProjects.map((item, index) => (
              <MobileCardProject
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                tech={item.tech}
                index={index}
                onClick={() => handleLinkClick(item.title, index)}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;

const WebCardProject = ({
  title,
  description,
  image,
  link,
  tech,
  onClick,
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
                className="flex items-center text-xl text-white transition-all duration-300 hover:text-accent"
                target="_blank"
                onClick={onClick}
              >
                {title}
                <span className="pl-2">
                  <BiLinkExternal />
                </span>
              </Link>
            ) : (
              <h1 className="text-xl text-white">{title}</h1>
            )}
          </div>
          <div className="relative top-0 z-10 w-full rounded-md bg-primary/70 p-10 shadow-md shadow-black backdrop-blur-sm xl:h-max">
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
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

const MobileCardProject = ({
  title,
  description,
  image,
  link,
  tech,
  index,
  onClick,
}: DataProjects) => {
  return (
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
          src={image}
          alt={title}
          width={700}
          height={700}
        />
      </div>
      <div className="mt-5 flex flex-col items-center justify-center gap-y-2">
        {link !== null ? (
          <Link
            href={link}
            className="flex items-center text-xl text-white transition-all duration-300 hover:text-accent"
            target="_blank"
            onClick={onClick}
          >
            {title}
            <span className="pl-2">
              <BiLinkExternal />
            </span>
          </Link>
        ) : (
          <h1 className="text-xl text-white">{title}</h1>
        )}
        <p className="text-center text-tertiary">{description}</p>
        <ul className="flex flex-wrap justify-center gap-2">
          {tech.map((items, indexTech) => (
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
  );
};
