import style from "./Mylink.module.css";
import { Link } from "react-router-dom";

export const Mylink = (props) => {
  return (
    <Link target="blank" className={style.myLink} to={props.link}>
      {props.children}
    </Link>
  );
};
