import React from 'react'
import ecomimg from '../images/pngwing.com.png'
import proing from '../images/pngwing.com1.png'
import webimg from '../images/pngwing.com (1).png'

function Card2({service}) {
  return (
    <div className='container' ref={service}>
        <h1 style={{fontSize:"50px",color:"white",marginTop:"2%"}}>Our Services</h1>

        <hr  style={{background: 'white',color: 'white',height: '3px',margin: "0px",opacity: "100%"}}/>
    <div className='row'>
        <div className='col-sm' style={{alignItems:"center"}}>
            <div style={{height:"400px",
                        marginTop:"3%",
                        width:"100%",
                        position:"relative",
                        backgroundColor:"#49d3f5"
                        }}>
                <img id='logo' style={{height:"60%", width:"50%", filter:"invert(1)"}} src={ecomimg}/>
                <h3 style={{fontSize:"300%"}}>E-Commerce</h3>
            </div>
        </div>
        <div className='col-sm px-3' style={{padding:"0px"}}>
            <p style={{color:"white",marginTop:"10%",fontSize:"40px"}}>We build full-fledge ecommerce websites with features like product listing, product searching and sorting, product pages,user account management, order management, payment gateway, etc.</p>
        </div>
    </div>


    <div className='row'>
        <div className='col-sm' style={{alignItems:"center"}}>
            <div style={{height:"400px",
                        marginTop:"3%",
                        width:"100%",
                        position:"relative",
                        backgroundColor:"#c170fa"
                        }}>
                <img id='logo1' style={{height:"60%", width:"50%", filter:"invert(1)"}} src={proing}/>
                <h3 style={{fontSize:"300%"}}>professionals website</h3>
            </div>
        </div>
        <div className='col-sm px-3' style={{padding:"0px"}}>
            <p style={{color:"white",marginTop:"10%",fontSize:"40px"}}>We build websites for professionals like doctors, artists, contractors, bloggers and small businesses. With a good website, someone can scale their bussiness rapidly</p>
        </div>
    </div>


    <div className='row'>
        <div className='col-sm' style={{alignItems:"center"}}>
            <div style={{height:"400px",
                        marginTop:"3%",
                        width:"100%",
                        position:"relative",
                        backgroundColor:"#fa7070"
                        }}>
                <img id='logo2' style={{height:"60%", width:"50%", filter:"invert(1)"}} src={webimg}/>
                <h3 style={{fontSize:"300%"}}>Web Apps</h3>
            </div>
        </div>
        <div className='col-sm px-3' style={{padding:"0px"}}>
            <p style={{color:"white",marginTop:"10%",fontSize:"40px"}}>We can create any kind of web application according to our client's needs with a strong backend, scalable architecture and new-age technologies</p>
        </div>
    </div>


    </div>
  )
}

export default Card2