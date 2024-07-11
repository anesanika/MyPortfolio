import style from "./Portfoliocard.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Portfoliocard = (props) => {
  return (
    <div className={style.portfolioCardCont}>
      <div className={style.imageText}>
        <div className={style.portfolioImage}>
          <LazyLoadImage
            src={props.image}
            alt={props.title + props.description}
            width="120px"
            height="120px"
            effect="blur"
          />
        </div>
        <div className={style.protfolioText}>
          <h2>{props.title}</h2>
          <p>{props.date}</p>
          <p>{props.description}</p>
        </div>
      </div>
      <Link target="blank" to={props.link}>
        <IoIosArrowRoundForward />
      </Link>
    </div>
  );
};
