import aboutcss from "./AboutMe.module.css";
import me from '../../assets/images/me.png'
import resume from '../../assets/resume/jacobs_resume.pdf'
import Skills from "../Skills/Skills";
export default function AboutMe() {
  return (
    <div className={aboutcss.whole} id="about-me">
      <div className={aboutcss.header}>About me</div>
      <img className={aboutcss.me} src={me} alt="Hampton" />
      <div className={aboutcss.branding}>
        I am a software developer located in the DC metro area. With a background in athletic development,
        I thrive in team based environments where cooperation and communication is
        imperative. After coaching with young athletes, I have learned to love
        and appreciate the process of reaching a common goal.
      </div>
      <div className={aboutcss.header}>Skills</div>
      <Skills />
      <div className={aboutcss.resume_space}>
        <a
          className={aboutcss.resume}
          href={resume}
          target="blank"
          id="resume"
        >
          My Resume
        </a>
      </div>

    </div >
  )
}
