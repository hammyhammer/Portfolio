import React from 'react'
import Layout from '../../components/Layout/Layout'
import projectcss from './Projects.module.css';
import dynamic from '../../assets/images/dynamic.png';
import gameterest from '../../assets/images/gameterest.png';
import self_check from '../../assets/images/bmi.png';

export default function Projects() {
  return (
    <div className={projectcss.whole}>
      <h2 className={projectcss.header}>My Projects</h2>
      <div>
        <h5 className={projectcss.title}>Dynamic</h5>
        <p className={projectcss.description}>A fitness journal where users can record notes of exercises they have done.</p>
        <a href="https://621f874f3bd9090007f373bb--quizzical-jang-12a296.netlify.app/">
          <img className={projectcss.image} src={dynamic} alt="dynamic page" />
        </a>
        <p className={projectcss.skills}>
          React.js | Ruby on Rails | JavaScript | Component Styling
        </p>
      </div>

      <div>
        <h5 className={projectcss.title}>Gameterest</h5>
        <p className={projectcss.description}>A platform where users can leave reviews and favorite videogames.</p>
        <a href="https://gameterest2.herokuapp.com/">
          <img className={projectcss.image} src={gameterest} alt="gameterest page" />
        </a>
        <p className={projectcss.skills}>
          Mongoose | MongoDB | Express | React.js | JavaScript | Component Styling
        </p>
        {/* <a href="https://github.com/Jacobdye99/Gameterest_BackEnd">Backend Repo</a>
        <a href="https://github.com/Elvedin123/gametrest-frontend">Frontend Repo</a> */}

      </div>
      <div>
        <h5 className={projectcss.title}>Self-Check</h5>

        <p className={projectcss.description}>Users can take a series of self-assessment health exams to gain insight to their health.</p>
        <a href="https://61e6d494910579b53712d385--unruffled-hermann-51aab3.netlify.app/">
          <img className={projectcss.image} src={self_check} alt="self-check page" />
        </a>
        <p className={projectcss.skills}>Airtable | React.js | Javascript | CSS | HTML</p>
        {/* <a href="https://github.com/hammyhammer/bmi-calculator">Repo</a> */}
      </div>

    </div>
  )
}
