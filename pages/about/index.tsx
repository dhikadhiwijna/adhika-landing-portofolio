import AboutWidget from "@/components/Experience";
import { dataEducation, dataExperience } from "@/data/data";
import { imageAsset } from "@/public";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>Adhika | About Page</title>
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/favicon.ico" />
        <meta name="This is about page" content="This is about page" />
      </Head>
      <main className="h-full">
        <div className="flex h-3/6 flex-col items-center justify-center pt-48">
          <div className="container grid w-full  grid-cols-2 gap-16 md:grid-cols-8">
            <div className="col-span-5 flex flex-col items-start justify-start">
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-5 flex w-full items-center"
              >
                <h2 className="text-5xl text-secondary">About Me</h2>
                <div className=" ml-5 h-px flex-1 bg-tertiary" />
              </motion.div>
              <motion.p
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-tertiary"
              >
                Hi, My name is Adhika Adhiwijna and I enjoy creating things that
                live on the internet. My interest in software development
                started back in 2021. I am a self-taught Full Stack web and
                mobile developer from Indonesia. My passion for software started
                when I was finished my college after seeing the potential ofK
                software to change the world.
                <br />
                <br />
                Fast-forward to today, and I&rsquo;ve had the privilege of
                working at some tech companies in Indonesia. My main focus these
                days is building accessible, inclusive products and digital
                experiences at Argon Group for a variety of clients.
                <br />
                <br />
                Here are a few technologies I&rsquo;ve been working with
                recently:
                <br />
                <br />
                <ul className="custom-list grid grid-cols-2 gap-4">
                  <li>JavaScript (ES6+)</li>
                  <li>Typescript</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Next.js</li>
                  <li>Flutter</li>
                  <li>Node.js</li>
                  <li>Laravel</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                </ul>
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="group relative col-span-3 h-max"
            >
              <div className="relative left-0 top-0 transition-all duration-300  group-hover:-left-2 group-hover:-top-2">
                <div className="absolute left-0 top-0 z-20 hidden w-full rounded-md bg-accent opacity-20 group-hover:bg-accent/0 md:flex md:h-[210px] lg:h-[275px] xl:h-[354px]" />
                <Image
                  className="relative z-10 h-auto w-60 rounded-md md:w-full"
                  src={imageAsset.profileImage}
                  alt="Muhammad Adhika Adhiwijna"
                  width={700}
                  height={700}
                />
              </div>

              <div className="absolute left-3 top-3 z-0 hidden w-full rounded-md border-2 border-accent transition-all duration-300 group-hover:right-5 group-hover:top-5 md:block md:h-[210px]  lg:h-[275px] xl:h-[350px]" />
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col items-center"
        >
          <AboutWidget dataDetail={dataExperience} title="Experience" />
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col items-center pb-96"
        >
          <AboutWidget dataEducation={dataEducation} title="Education" />
        </motion.div>
      </main>
    </>
  );
};

export default About;
