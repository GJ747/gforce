import React from 'react'

function AboutUs({aboutus}) {
  return (
    <div className='container' ref={aboutus}>
        <h1 style={{fontSize:"50px",color:"white",marginTop:"2%"}}>About Us</h1>
        <hr  style={{background: 'white',color: 'white',height: '3px',margin: "0px",opacity: "100%"}}/>
        <div style={{backgroundColor:"#bee3eb", marginTop:"10px", padding:"30px"}}>
        <p style={{color:"#022f38",marginTop:"1%",fontSize:"40px"}}>Hello, I am Gaurav Joshi and we are a team of professionals who are passionate about technology. We love to solve problems in businesses with the help of technology. Our goal is 100% client satisfaction. We offer high-quality services at a competitive price.</p>
        <p style={{color:"#022f38",marginTop:"1%",fontSize:"40px"}}>Our company is situated in Bhilwara, Rajasthan, India. We started it in December 2021 with the vision of helping businesses grow in a digital economy. The digital world is highly competitive, so to grow in it you need new innovative ideas and technologies to implement them.</p>
        </div>
    </div>
  )
}

export default AboutUs