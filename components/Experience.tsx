import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import { dataExperience } from "@/data/data";
import { DataDetail, DataEducation } from "@/types";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DataDetail) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0"
    >
      <LiIcon />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text2xl font-bold capitalize">
          {position}&nbsp;
          <a
            target="_blank"
            className="capitalize text-accent"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span>{time}</span> | <span>{address}</span>
        {work && (
          <ul className="mt-4 list-outside list-disc text-tertiary">
            {work.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </li>
  );
};

const DetailEducation = ({ school, time, address, info }: DataEducation) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0"
    >
      <LiIcon />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-xl font-bold capitalize text-accent">
          {school}&nbsp;
        </h3>
        <span>{time}</span> | <span>{address}</span>
        <p className="w-full font-medium">{info}</p>
      </motion.div>
    </li>
  );
};

interface DetailListProps {
  title: string;
  dataDetail?: DataDetail[];
  dataEducation?: DataEducation[];
}

const AboutWidget = ({ title, dataDetail, dataEducation }: DetailListProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="container my-24">
      <div className="mb-24 flex w-full items-center">
        <h2 className="text-5xl text-secondary">{title}</h2>
        <div className=" ml-5 h-px flex-1 bg-tertiary" />
      </div>
      <div ref={ref} className="relative mx-auto w-[75%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-8 h-full w-[4px] origin-top bg-white"
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <ul className="ml-4 flex w-full flex-col items-start justify-between">
            {dataDetail?.map((d, i) => <Details key={i} {...d} />)}
            {dataEducation?.map((d, i) => <DetailEducation key={i} {...d} />)}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default AboutWidget;
