import { useEffect, useState } from "react";
import style from "./Maincard.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const Maincard = (props) => {
  const [windwoWidth, setWidnowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeDeispay = () => {
      setWidnowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeDeispay);

    return () => {
      window.removeEventListener("resize", resizeDeispay);
    };
  }, [windwoWidth]);

  const cardSizes = {
    large: {
      width: "100%",
      height: windwoWidth < 850 ? "250px" : "500px",
      display: "grid",
      placeItems: "center",
    },
    medium: {
      width: "100%",
      height: "250px",
    },
    small: {
      width: "50%",
      height: "250px",
    },
  };
  const selectedSize = cardSizes[props.size] || cardSizes.medium;

  return (
    <div className={style.mainCardCont} style={selectedSize}>
      <img src={props.background} alt={props.title} loading="lazy" />
      <p style={props.size === "large" ? { fontSize: "40px" } : null}>
        {props.title}
      </p>
      <Link to={props.link}>
        <IoIosArrowRoundForward />
      </Link>
    </div>
  );
};
