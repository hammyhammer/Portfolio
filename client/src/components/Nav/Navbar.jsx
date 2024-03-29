import navcss from './Navbar.module.css';
import resume from '../../assets/resume/jacobs_resume.pdf'

export default function Navbar() {
  return (
    <div className={navcss.nav}>

      <div className={navcss.links}>
        <span className={navcss.name}>Hampton Jacobs</span>
        <a className={navcss.individual_links} href="#projects">Projects</a>
        <a className={navcss.individual_links} href="#about-me">About Me</a>
        <a
          className={navcss.individual_links}
          href={resume}
          target="blank"
          id="resume"
        >Resume</a>
      </div>
    </div>
  )
}
