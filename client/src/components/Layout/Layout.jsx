import React from 'react'
import Navbar from '../Nav/Navbar'

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <div>
        {props.children}
      </div>
    </div>
  )
}
