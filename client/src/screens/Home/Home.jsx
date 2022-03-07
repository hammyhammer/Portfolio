import React from 'react'
import homecss from './Home.module.css'
import Layout from '../../components/Layout/Layout'
import AboutMe from '../AboutMe/AboutMe.jsx'
import Projects from '../Projects/Projects'
import Icons from '../../components/Icons/Icons'
export default function Home() {
  return (
    <Layout>
      <div className={homecss.home_body}>
        <div className={homecss.welcome}>
          Hampton Jacobs
        </div>
        <div className={homecss.traits}><p className={homecss.driven}>Driven</p><p>{"\u2022"}</p><p className={homecss.creative}>Creative</p><p>{"\u2022"}</p><p className={homecss.software}>Software Developer</p> </div>

        <Projects />
        <AboutMe />

        {/* <div className={homecss.work}>
          <button>My Work</button>
        </div>
        <div className={homecss.me}>
          <button>Get To Know Me</button>
        </div> */}
        {/* <Icons /> */}
      </div>

    </Layout>
  )
}
