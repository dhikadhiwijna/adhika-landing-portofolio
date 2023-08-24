//framer motion
import { motion } from "framer-motion";

//variants
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
    // transition: {
    //   duration: 1,
    // },
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
    // transition: {
    //   duration: 1,
    // },
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#196b58]"
      />

      <motion.div
        variants={transitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-[#196b58]/60"
      />

      <motion.div
        variants={transitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-10 h-screen w-screen bg-[#196b58]/90"
      />
    </>
  );
};

export default Transition;
