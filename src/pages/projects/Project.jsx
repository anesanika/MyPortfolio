import style from "./Project.module.css";
import { Animateroute } from "../../components/Animateroute.jsx";
import { Portfoliocard } from "../../components/portfoliocard/Portfoliocard.jsx";
import axios from "axios";
import { Maincard } from "../../components/smallComps/maincard/Maincard.jsx";
import aboutMe from "../../assets/image/mySkills.gif";
import contactMe from "../../assets/image/emailSend.webp";
import { useEffect, useState } from "react";

function Project() {
  const [projects, setProjects] = useState([]);
  const [mapLoading, setMapLoading] = useState(true);

  useEffect(() => {
    const featchProjects = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/projects/");
        setProjects(response.data);
        setMapLoading(false);
      } catch (error) {
        console.error(`Request Error : ${error}`);
        setMapLoading(false);
      }
    };
    featchProjects();
  }, []);

  return (
    <Animateroute>
      <div className={style.projectsCont}>
        <div className={style.prjectHead}>
          <h1>My Projects</h1>
        </div>

        <div className={style.allProjects}>
          {mapLoading ? (
            <h1
              style={{ textAlign: "center", color: "#fff", fontSize: "30px" }}
            >
              Loading Projects
            </h1>
          ) : (
            projects.map((element) => (
              <Portfoliocard
                key={element.id}
                date={element.date}
                title={element.title}
                description={element.category}
                image={element.image}
                link={element.link}
              />
            ))
          )}
        </div>

        <div className={style.projectFoot}>
          <Maincard
            title="About Me!"
            background={aboutMe}
            link="/about"
            size="small"
          />
          <Maincard
            title="Get In Touch !"
            background={contactMe}
            link="/contact"
            size="small"
          />
        </div>
      </div>
    </Animateroute>
  );
}

export default Project;
