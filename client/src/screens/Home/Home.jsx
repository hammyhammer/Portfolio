import React from 'react'
import homecss from './Home.module.css'
import Layout from '../../components/Layout/Layout'
import AboutMe from '../AboutMe/AboutMe.jsx'
import Projects from '../Projects/Projects'
export default function Home() {
  return (
    <Layout>
      <div className={homecss.home_body}>
        <div className={homecss.welcome}>
          Hampton Jacobs. {<br />} Software Developer.
        </div>
        <Projects />
        {/* <AboutMe /> */}

        {/* <div className={homecss.work}>
          <button>My Work</button>
        </div>
        <div className={homecss.me}>
          <button>Get To Know Me</button>
        </div> */}
      </div>

    </Layout>
  )
}
