import style from "./Home.module.css";
import { Maincard } from "../../components/smallComps/maincard/Maincard";
import { Animateroute } from "../../components/Animateroute";
import emailSend from "../../assets/image/emailSend.webp";
import portfolioImg from "../../assets/image/myProjects.gif";
import mySkills from "../../assets/image/mySkills.gif";

function Home() {
  return (
    <Animateroute>
      <main className={style.main}>
        <div className={style.homeLeft}>
          <Maincard
            size="large"
            link="/projects"
            background={portfolioImg}
            title="My Projects"
          />
        </div>
        <div className={style.homeRight}>
          <Maincard title="My Skills" background={mySkills} link="/about" />
          <Maincard
            size="large"
            title="Contact"
            link="/contact"
            background={emailSend}
          />
        </div>
      </main>
    </Animateroute>
  );
}

export default Home;
