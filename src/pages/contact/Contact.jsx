import style from "./Contact.module.css";
import { useState } from "react";
import { Maincard } from "../../components/smallComps/maincard/Maincard";
import { Animateroute } from "../../components/Animateroute";
import myPrjects from "../../assets/image/myProjects.gif";
import aboutMe from "../../assets/image/mySkills.gif";
import axios from "axios";

function Contact() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendStatus, setSendStatus] = useState("");

  const sendEmai = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://porftolio-api.vercel.app/email/",
        {
          subject: subject,
          body: `From: ${email}
          Message : ${message}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSendStatus(response.data.message);
      setSubject("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("ERRoR", error);
    }
  };

  return (
    <Animateroute>
      <section className={style.mianContactCont}>
        <div className={style.contactHeade}>
          <h1>Let's Talk</h1>
        </div>
        <div className={style.contactForm}>
          <form onSubmit={sendEmai}>
            <div>
              <label htmlFor="text">Subject</label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                type="text"
                id="text"
                placeholder="What Do You Need"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                placeholder="Your Email For Contact"
                required
              />
            </div>
            <div>
              <label htmlFor="textarea">Message</label>
              <textarea
                id="textarea"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Type..."
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
            {sendStatus !== "" ? <p>{sendStatus}!</p> : null}
          </form>
        </div>
        <div className={style.contactFoot}>
          <Maincard
            title="Projects"
            link="/projects"
            background={myPrjects}
            size="small"
          />
          <Maincard
            title="About Me"
            link="/about"
            background={aboutMe}
            size="small"
          />
        </div>
      </section>
    </Animateroute>
  );
}

export default Contact;
