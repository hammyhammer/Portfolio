import navcss from './Navbar.module.css';
import resume from '../../assets/resume/jacobs-resume.pdf'

export default function Navbar() {
  return (
    <div className={navcss.nav}>
      <div className={navcss.links}>
        <a className={navcss.individual_links} href="#home">Projects</a>
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
