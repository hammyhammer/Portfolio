import React from 'react'
import homecss from './Home.module.css'
import Layout from '../../components/Layout/Layout'
import AboutMe from '../AboutMe/AboutMe.jsx'
import Projects from '../Projects/Projects'
// import selfie from '/Users/hamptonjacobs/thunder_ga/portfolio/Portfolio/client/images/images/Propic_org copy.png'
export default function Home() {

  const handleNavigate = (event) => {

  }

  return (
    <Layout>
      <div className={homecss.home_body}>
        <div className={homecss.welcome}>
          Hampton Jacobs {<br />} Software Developer.
        </div>

        <div className={homecss.work}>
          <button>See My Work</button>
        </div>
        <div className={homecss.me}>
          <button>Get To Know Me</button>
        </div>
      </div>

    </Layout>
  )
}
