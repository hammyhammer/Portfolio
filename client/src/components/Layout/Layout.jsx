import React from 'react'
import Navbar from '../Nav/Navbar'
import Footer from '../Footer/Footer'

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
