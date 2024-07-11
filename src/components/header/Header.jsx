import style from "./Header.module.css";
import profile from "../../assets/image/profile-sticker.png";
import { Mylink } from "../smallComps/mylink/Mylink";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation().pathname;
  const HeaderText = {
    "/MyPortfolio/":
      "Welcome to my website! I am Nika from Georgia. I hope you enjoy exploring this site",

    "/about": `
    Hi, I'm Nika from Georgia. I am a Front-End Developer with aspirations of becoming a Full-Stack Developer. This page is dedicated to sharing more about my background and experiences with you. Currently, I am focusing on learning Back-End development...
    `,
    "/projects":
      "These are the projects I have created. While they showcase my skills, I am capable of developing more complex and advanced websites.",

    "/contact":
      "If you have made it to this page, you have likely explored most of my website. I invite you to get in touch with me! Let’s collaborate and create something amazing!",
  };

  return (
    <header className={style.header}>
      <div className={style.fixeDivCont}>
        <div>
          <div className={style.headerImage}>
            <img src={profile} alt={style.ProfilePic} />
            <div className={style.imageName}>
              <h1>NIKA A.</h1>
              <p>Web Developer</p>
            </div>
          </div>
          <div className={style.headerAbout}>
            <p>{HeaderText[location]}</p>
          </div>
        </div>
        <div className={style.headerFoot}>
          <div className={style.headerSocs}>
            <Mylink link="https://www.linkedin.com/in/anesiani-nika-a282342a0/">
              <CiLinkedin />
            </Mylink>
            <Mylink link="https://www.instagram.com/nikaanesiani/">
              <CiInstagram />
            </Mylink>
            <Mylink link="https://github.com/AnesaNika">
              <RiGithubLine />
            </Mylink>
          </div>
          <div className={style.headerFootText}>
            <h4>© by Anesa with ReactJs</h4>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
