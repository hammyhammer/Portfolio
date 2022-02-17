import { NavLink } from "react-router-dom";
import navcss from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={navcss.nav}>
      <NavLink to="/"><button>Home</button></NavLink>
      <NavLink to="/about-me"><button>About me</button></NavLink>
    </div>
  )
}
