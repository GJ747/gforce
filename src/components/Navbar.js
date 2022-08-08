import React from 'react'

function Navbar({fun,service,aboutus,getquate,contact}) {
  return (
    <div id='navbar' className='container px-0' style={{marginTop:"1%",border:"solid 2px white", borderRadius:"8px"}}>
        <div className='row mx-auto'>
            <div className='col-3 text-center' onClick={() => {fun(aboutus.current)}}><h4 style={{color:"white",marginTop:"4px" }}>About Us</h4></div>
            <div className='col-3 text-center' onClick={() => {fun(service.current)}}><h4 style={{color:"white",marginTop:"4px" }}>Services</h4></div>
            <div className='col-3 text-center' onClick={() => {fun(getquate.current)}}><h4 style={{color:"white",marginTop:"4px" }}>Get Quote</h4></div>
            <div className='col-3 text-center' onClick={() => {fun(contact.current)}}><h4 style={{color:"white",marginTop:"4px" }}>Contact Us</h4></div>
        </div>
    </div>
  )
}

export default Navbar