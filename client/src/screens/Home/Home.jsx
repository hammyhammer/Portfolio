import React from 'react'
import homecss from './Home.module.css'
import Layout from '../../components/Layout/Layout'
export default function Home() {
  return (
    <Layout>
      <div className={homecss.home_body}>
        <div className={homecss.welcome}>
          Welcome. I am Hampton, and I am a web developer.
        </div>

      </div>

    </Layout>
  )
}
