import React from 'react'
import Layout from '../../components/Layout/Layout'
import projectcss from './Projects.module.css';
export default function Projects() {
  return (
    <Layout>
      <div className={projectcss.whole}>
        <div>
          Dynamic
          <p>
            React, Ruby on Rails, JavaScript, Component Styling
          </p>
          <a href="https://github.com/hammyhammer/dynamic">Repo</a>
          <a href="https://621f874f3bd9090007f373bb--quizzical-jang-12a296.netlify.app/">Deployed Link</a>
        </div>
        <div>
          Gameterest
          <p>
            React, Mongoose, MongoDB, Express, Component Styling.
          </p>
          <a href="https://github.com/Jacobdye99/Gameterest_BackEnd">Backend Repo</a>
          <a href="https://github.com/Elvedin123/gametrest-frontend">Frontend Repo</a>
          <a href="https://gameterest2.herokuapp.com/">Deployed Link</a>
        </div>
        <div>
          Oracle
          <p>Javascript, CSS, HTML</p>
          <a href="https://github.com/hammyhammer/Oracle-DnD_Spell_Reference">Repo</a>
          <a href="https://hammyhammer.github.io/Oracle-DnD_Spell_Reference/">Deployed Site</a>
        </div>
      </div>
    </Layout>
  )
}
