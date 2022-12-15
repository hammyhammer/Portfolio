import aboutcss from "./AboutMe.module.css";
import me from '../../assets/images/me.png'
// import resume from '../../assets/resume/jacobs_resume.pdf'
import Skills from "../Skills/Skills";
export default function AboutMe() {
  return (
    <div className={aboutcss.whole} id="about-me">
      <div className={aboutcss.aboutme_container}>
        <div className={aboutcss.left_side}>
          <h5 className={aboutcss.header}>Hi, I'm Hampton Jacobs. Driven, creative software Developer</h5>
          <p className={aboutcss.intro}>
            Through collaboration and initiative, I bring teammates together to problem solve and complete challenging tasks. My background in athletics and coaching gives me strengths in leadership, concise communication, adaptability, teamwork, and an empathetic mindset in team settings. When faced with a difficult problem, I see it as an opportunity for me to learn and to ask questions to expand my knowledge.
          </p>
          <div className={aboutcss.header}>Available Skills</div>
          <Skills />
        </div>
        <img className={aboutcss.me} src={me} alt="Hampton" />

      </div>
      {/* 
      <div className={aboutcss.resume_space}>
        <a
          className={aboutcss.resume}
          href={resume}
          target="blank"
          id="resume"
        >
          My Resume
        </a>
      </div> */}

    </div >
  )
}
