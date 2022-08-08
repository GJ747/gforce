import React from 'react'

function Contact({contact}) {
  return (
    <div className='container' style={{padding:"10px"}} ref={contact}>
        <h1 style={{fontSize:"50px",color:"white",marginTop:"2%"}}>Contact Us</h1>
        <hr  style={{background: 'white',color: 'white',height: '3px',margin: "0px",opacity: "100%"}}/>
        
        <div className='row mx-auto' style={{backgroundColor:"#6361cf", marginTop:"2%"}}>
          <div className='col-sm' >
            <div className="d-flex flex-row ">
                <p id='p'  className='p-2 ' style={{color:"white", marginBottom:"0px"}} >Contact No. -</p>
                <a id='a' className='p-2 ' href='tel:+91 8094484803' style={{color:"white",fontSize:"30px", textDecoration:"none"}}>+91-8094484803</a>
            </div>
            <div className="d-flex flex-row  ">
                <p id='p' className='p-2 ' style={{color:"white",margin:"0%",padding:"0px"}} >Email -</p>
                <a className='p-2 ' href='mailto:gauravjoshi747@gmail.com' style={{padding:"0px",color:"white",marginTop:"7px",fontSize:"30px", textDecoration:"none"}}>gauravjoshi747@gmail.com</a>
            </div>
          </div>
          <div className='col-sm'>
            <p id='p' style={{color:"white",margin:"0%",textAlign:"right"}} >Address</p>
            <p style={{color:"white",margin:"0%",fontSize:"30px",textAlign:"right"}}>Manikya nagar,Bhilwara</p>
            <p style={{color:"white",margin:"0%",fontSize:"30px",textAlign:"right"}}>311001, Rajasthan</p>
          </div>
        </div>
    </div>
  )
}

export default Contact