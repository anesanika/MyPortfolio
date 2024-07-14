import { useEffect, useState, useCallback } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { RiHome5Line, RiSuitcaseLine, RiFolder2Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";

export const Navbar = () => {
  const [monthNames, setMonthNames] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const getCurrentDateProps = useCallback(() => {
    const date = new Date();
    return {
      time: [date.getHours(), date.getMinutes()],
      month: monthNames[date.getMonth()],
      date: date.getDate(),
      year: date.getFullYear(),
    };
  }, [monthNames]);

  const [dateProps, setDateProps] = useState(getCurrentDateProps);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateProps(getCurrentDateProps());
    }, 1000);

    return () => clearInterval(timer);
  }, [getCurrentDateProps]);

  return (
    <nav className={style.mainNav}>
      <div className={style.navTime}>
        <h2>
          {dateProps.time[0].toString().padStart(2, "0")}:
          {dateProps.time[1].toString().padStart(2, "0")} {dateProps.month}{" "}
          {dateProps.date}, {dateProps.year}
        </h2>
      </div>
      <div className={style.navLink}>
        <NavLink
          id="hoverable"
          title="Home"
          className={({ isActive }) => (isActive ? style.active : null)}
          to="MyPortfolio/"
        >
          <RiHome5Line />
        </NavLink>
        <NavLink
          id="hoverable"
          title="About"
          className={({ isActive }) => (isActive ? style.active : null)}
          to="/about"
        >
          <RiSuitcaseLine />
        </NavLink>
        <NavLink
          id="hoverable"
          title="Projects"
          className={({ isActive }) => (isActive ? style.active : null)}
          to="/projects"
        >
          <RiFolder2Line />
        </NavLink>
        <NavLink
          id="hoverable"
          title="Contact"
          className={({ isActive }) => (isActive ? style.active : null)}
          to="/contact"
        >
          <FaRegPenToSquare />
        </NavLink>
      </div>
    </nav>
  );
};
