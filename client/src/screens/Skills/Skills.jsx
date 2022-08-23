import React from 'react'
import skillscss from './Skills.module.css'

export default function Skills() {
  return (
    <div className={skillscss.all_icons}>
      <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" />
      <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css3" />
      <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html5" />
      <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" />
      {/* <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="gitHub" /> */}
      <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="mongoDB" />
      <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" alt="ruby" />
      <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" alt="rails" />
      <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt="git" />
      <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="node.js" />
      <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" alt="postgresql" />
      <img className={skillscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" alt="heroku" />
    </div>
  )
}