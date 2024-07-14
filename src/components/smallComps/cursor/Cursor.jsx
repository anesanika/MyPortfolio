import style from "./Cursor.module.css";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";

export const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 800, damping: 50, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 800, damping: 50, mass: 0.5 });

  const cursroAnim = useAnimation();

  useEffect(() => {
    const hoverable = document.querySelectorAll("#hoverable");

    console.log(hoverable);

    hoverable.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursroAnim.start({ transform: " scale(2)" });
      });
      el.addEventListener("mouseleave", () => {
        cursroAnim.start({ transform: "scale(1)" });
      });
    });
    return () => {
      hoverable.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursroAnim.start({ transform: "scale(2)" });
        });
        el.addEventListener("mouseleave", () => {
          cursroAnim.start({ transform: "scale(1)" });
        });
      });
    };
  }, [cursroAnim]);

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
          left: springX,
          top: springY,
        }}
        className={style.cursorOutline}
        animate={cursroAnim}
      />
    </>
  );
};
