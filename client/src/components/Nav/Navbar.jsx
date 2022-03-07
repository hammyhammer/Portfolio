import { NavLink } from "react-router-dom";
import navcss from './Navbar.module.css';
import resume from '../../assets/resume/jacobs-resume.pdf'

export default function Navbar() {
  return (
    <div className={navcss.nav}>
      <div className={navcss.links}>
        <NavLink className={navcss.individual_links} to="/">Home</NavLink>
        <NavLink className={navcss.individual_links} to="#about-me">About me</NavLink>
        <NavLink className={navcss.individual_links} to={resume}>Resume</NavLink>
      </div>
    </div>
  )
}
