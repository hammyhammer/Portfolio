import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink to="/"><button>Home</button></NavLink>
      <NavLink to="/"><button>Portfolio</button></NavLink>
    </div>
  )
}
