import style from "./About.module.css";
import { Listcard } from "../../components/smallComps/listcard/Listcard";
import { Animateroute } from "../../components/Animateroute";
import { Maincard } from "../../components/smallComps/maincard/Maincard";
import { Link } from "react-router-dom";
import myProjects from "../../assets/image/myProjects.gif";
import contacMe from "../../assets/image/emailSend.webp";

function About() {
  return (
    <Animateroute>
      <section className={style.mainAboutCont}>
        <div className={style.aboutTitle}>
          <h1>About Me</h1>
        </div>
        <div className={style.aboutMain}>
          <div>
            <Listcard title="Education">
              <ul>
                <li>
                  <h2>Front End Developer</h2>
                  <p>
                    6 month lerning Font-End development in{" "}
                    <Link target="blank" to="https://web4you.academy/">
                      web4you.academy
                    </Link>{" "}
                    2023
                  </p>
                </li>
              </ul>
            </Listcard>
          </div>
          <div>
            <Listcard title="Experience">
              <ul>
                <li>
                  <h2>Development</h2>
                  <p>
                    I became interested in coding in 2017 and started making
                    games in Unity using C#. Later, I began learning Python on
                    my own, and then JavaScript as a school subject, which led
                    me to explore Front-End development.
                  </p>
                </li>
                <li>
                  <h2>Front-End</h2>
                  <p>
                    I started learning Front-End development in 2019 with HTML,
                    CSS, and JavaScript, along with some JavaScript and CSS
                    frameworks (Bootstrap, jQuery, SCSS/SASS). After a few
                    months, I moved on to ReactJS and have been continually
                    learning more ever since.
                  </p>
                </li>
                <li>
                  <h2>Back-End</h2>
                  <p>
                    In 2022, I became interested in Back-End development and
                    started with PHP for a few months. Currently, I am learning
                    Django (Python) and the Django Rest Framework.
                  </p>
                </li>
              </ul>
            </Listcard>
          </div>
        </div>
        <div className={style.aboutFoot}>
          <Maincard
            size="small"
            background={myProjects}
            link="/projects"
            title="My Projects"
          />
          <Maincard
            size="small"
            background={contacMe}
            link="/contact"
            title="Contact Me"
          />
        </div>
      </section>
    </Animateroute>
  );
}
export default About;
