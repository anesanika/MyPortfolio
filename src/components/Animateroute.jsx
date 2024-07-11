import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const animation = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};
const responsAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const Animateroute = (props) => {
  const [windwoWidth, setWidnowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizer = () => {
      setWidnowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizer);

    return () => {
      window.removeEventListener("resize", resizer);
    };
  }, [windwoWidth]);

  return (
    <motion.div
      variants={windwoWidth < 800 ? responsAnimation : animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );
};
