import React from 'react'
import Layout from '../../components/Layout/Layout'
import projectcss from './Projects.module.css';
export default function Projects() {
  return (
    <div className={projectcss.whole}>
      <div>
        Dynamic
        <p>React app that allows users to accord their training.</p>
        <p>
          React, Ruby on Rails, JavaScript, Component Styling
        </p>
        <a href="https://github.com/hammyhammer/dynamic">Repo</a>
        <a href="https://621f874f3bd9090007f373bb--quizzical-jang-12a296.netlify.app/">Deployed Link</a>
      </div>
      <div>
        Gameterest
        <p>A platform where users can leave reviews and favorite videogames.</p>
        <p>
          React, Mongoose, MongoDB, Express, Component Styling.
        </p>
        <a href="https://github.com/Jacobdye99/Gameterest_BackEnd">Backend Repo</a>
        <a href="https://github.com/Elvedin123/gametrest-frontend">Frontend Repo</a>
        <a href="https://gameterest2.herokuapp.com/">Deployed Link</a>
      </div>
      <div>
        Self-Check
        <p>A react app where users can take a series of self-assessment health exams to gain insight to their health.</p>
        <p>Javascript, CSS, HTML</p>
        <a href="https://github.com/hammyhammer/bmi-calculator">Repo</a>
        <a href="https://61e6d494910579b53712d385--unruffled-hermann-51aab3.netlify.app/">Deployed Site</a>
      </div>
    </div>
  )
}
