import style from "./Cursor.module.css";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 800, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 800, damping: 50 });

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className={style.cursorOutline}
      />
    </>
  );
};
