import React from 'react'
import img from "../images/743340.jpg"

function Header() {
  return (
    <div className='container' id='container'>
        <img id='img' src={img} />
        <h1 id='heading' >Gforce Web Developer</h1>
    </div>
  )
}

export default Header