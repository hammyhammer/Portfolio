import React from 'react'
import homecss from './Home.module.css'
import Layout from '../../components/Layout/Layout'
// import AboutMe from '../AboutMe/AboutMe.jsx'
export default function Home() {
  return (
    <Layout>
      <div className={homecss.home_body}>
        <div className={homecss.welcome}>
          Hello! I am Hampton, and I am a web developer.
        </div>
        <img src="" />

        {/* <AboutMe /> */}
      </div>

    </Layout>
  )
}
