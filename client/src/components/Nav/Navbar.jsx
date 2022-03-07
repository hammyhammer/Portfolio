import { NavLink } from "react-router-dom";
import navcss from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={navcss.nav}>
      <div className={navcss.links}>
        <NavLink className={navcss.individual_links} to="/">Home</NavLink>
        <a className={navcss.individual_links} href="#about-me">About Me</a>
        <a className={navcss.individual_links} href="#resume">Resume</a>
      </div>
    </div>
  )
}
