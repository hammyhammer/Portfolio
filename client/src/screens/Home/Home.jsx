import React from 'react'
import homecss from './Home.module.css'
import Layout from '../../components/Layout/Layout'
export default function Home() {
  return (
    <Layout>
      <div className={homecss.home_body}>
        <div className={homecss.welcome}>
          Hampton Jacobs. {<br />} Software Developer.
        </div>

        <div className={homecss.work}>
          <button>My Work</button>
        </div>
        <div className={homecss.me}>
          <button>Get To Know Me</button>
        </div>
      </div>

    </Layout>
  )
}
