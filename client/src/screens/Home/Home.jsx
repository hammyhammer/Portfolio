import React from 'react'
import homecss from './Home.module.css'
import Layout from '../../components/Layout/Layout'
import AboutMe from '../AboutMe/AboutMe.jsx'
import selfie from '/Users/hamptonjacobs/thunder_ga/portfolio/Portfolio/client/images/images/Propic_org copy.png'
export default function Home() {
  return (
    <Layout>
      <div className={homecss.home_body}>
        <div className={homecss.welcome}>
          Hello {<br />} I am Hampton. <br /> Software Developer.

        </div>
        <AboutMe />
        <img src={selfie} alt="Hampton" />

        {/* <AboutMe /> */}
      </div>

    </Layout>
  )
}
