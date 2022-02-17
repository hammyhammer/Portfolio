import { NavLink } from "react-router-dom";
import navcss from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={navcss.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-me">About me</NavLink>
    </div>
  )
}
