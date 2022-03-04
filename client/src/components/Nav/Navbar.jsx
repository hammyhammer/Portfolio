import { NavLink } from "react-router-dom";
import navcss from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={navcss.nav}>
      <div className={navcss.links}>
        <NavLink className={navcss.individual_links} to="/">Home</NavLink>
        <NavLink className={navcss.individual_links} to="/about-me">About me</NavLink>
        <NavLink className={navcss.individual_links} to='/projects'>Projects</NavLink>
      </div>
    </div>
  )
}
