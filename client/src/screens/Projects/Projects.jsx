import projectcss from './Projects.module.css';
import { IoIosFitness } from 'react-icons/io';
import { BsController } from "react-icons/bs";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiBoltSpellCast } from "react-icons/gi";

export default function Projects() {
  return (
    <div className={projectcss.whole} id="projects">
      <h2 className={projectcss.header}>Projects</h2>
      <div className={projectcss.divider}></div>

      <div className={projectcss.dynamic}>
        <p className={projectcss.description}>A full stack fitness journal application built with Ruby on Rails on the backend, and with React on the frontend using styled components. Visitors can create an account or continue as a guest, where they can record notes on the exercises they have done.</p>
        <div className={projectcss.link_space}>
          <a className={projectcss.link} href="https://dynamic-fitness.netlify.app/" target="_blank" rel="noreferrer">
            <h5 className={projectcss.title_dynamic}>Dynamic</h5>

            <div className={projectcss.icon_dynamic}> <IoIosFitness size={98} /> </div>{/* <img className={projectcss.image} src={dynamic} alt="dynamic page" /> */}
          </a>

        </div>
        <p className={projectcss.skills}>
          React.js | Ruby on Rails | JavaScript | CSS | HTML | Component Styling <br /> <a className={projectcss.dynamic} href="https://github.com/hammyhammer/dynamic" target="_blank" rel="noreferrer">Github Repo</a>
        </p>
        <div className={projectcss.divider}></div>
      </div>
      <div className={projectcss.gameterest}>
        <p className={projectcss.description}>A full stack video game interest application built with Mongoose, MongoDB, and Express on the backend, and with React on the frontend. Visitors can create an account and favorite and comment on games. Guests can view comments and games.</p>
        <div className={projectcss.link_space}>
          <a className={projectcss.link} href="https://gameterest2.herokuapp.com/" target="_blank" rel="noreferrer" >

            <h5 className={projectcss.title_gameterest}>Gameterest</h5>
            <div className={projectcss.icon_gameterest}> <BsController size={98} /> </div> {/* <img className={projectcss.image} src={gameterest} alt="gameterest page" /> */}
          </a>
        </div>
        <p className={projectcss.skills}>
          Mongoose | MongoDB | Express | React.js | JavaScript | Component Styling <br /> <a className={projectcss.gameterest} href="https://github.com/Elvedin123/gametrest-frontend" target="_blank" rel="noreferrer">Frontend Repo</a> | <a className={projectcss.gameterest} href="https://github.com/Jacobdye99/Gameterest_BackEnd" target="_blank" rel="noreferrer">Backend Repo</a>


        </p>
        <div className={projectcss.divider}></div>

      </div>
      <div className={projectcss.selfcheck}>

        <p className={projectcss.description}>A frontend application built with React, Javascript, CSS, and HTML. Visitors can take a series of self-assessment health exams to gain insight to their health.</p>
        <div className={projectcss.link_space}>
          <a className={projectcss.link} href="https://self-check.netlify.app/" target="_blank" rel="noreferrer">

            <h5 className={projectcss.title_selfcheck}>Self-Check</h5>

            <div className={projectcss.icon_selfcheck}> <MdOutlineHealthAndSafety size={98} /> </div>
            {/* <img className={projectcss.image} src={self_check} alt="self-check page" /> */}
          </a>
        </div>
        <p className={projectcss.skills}>Airtable | React.js | Javascript | CSS | HTML <br /> <a className={projectcss.selfcheck} href="https://github.com/hammyhammer/bmi-calculator" target="_blank" rel="noreferrer">Github Repo</a></p>
        {/* <a href="https://github.com/hammyhammer/bmi-calculator">Repo</a> */}
        <div className={projectcss.divider}></div>

      </div>

      <div className={projectcss.oracle}>

        <p className={projectcss.description}>An application where Dungeons and Dragons enthusiasts can quickly get information on spells and cantrips to make combat go more smoothly. Built with Javascript, CSS, and HTML</p>
        <div className={projectcss.link_space}>
          <a className={projectcss.link} href="https://hammyhammer.github.io/Oracle-DnD_Spell_Reference/" target="_blank" rel="noreferrer">
            <h5 className={projectcss.title_oracle}>Oracle</h5>

            <div className={projectcss.icon_oracle}> <GiBoltSpellCast size={98} /> </div>
            {/* <img className={projectcss.image} src={self_check} alt="self-check page" /> */}
          </a>
        </div>
        <p className={projectcss.skills}> Javascript | CSS | HTML
          {/* <img className={projectcss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" />
          <img className={projectcss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css3" />
          <img className={projectcss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html5" /> */}
          <br />
          <a className={projectcss.oracle} href="https://github.com/hammyhammer/Oracle-DnD_Spell_Reference" target="_blank" rel="noreferrer">Github Repo</a></p>
        {/* <a href="https://github.com/hammyhammer/bmi-calculator">Repo</a> */}
        <div className={projectcss.divider}></div>

      </div>

    </div>
  )
}
