import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

function Quate({getquate}) {
    const [toSend,setToSend] = useState({
        firstName : "",
        lastName: "",
        email: "",
        message: ""
    })
    
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      }

      const onSubmit = (e) => {
        e.preventDefault();
        setShowMessage(true)
        send(
            'service_akfbywm',
            'template_ervoflj',
            toSend,
            'xi0reQJrLkJlDX_wB'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
          
      };

  return (
    <div className=" container" ref={getquate} style={{position:"relative"}}>
            <div style={{marginTop:'30px'}} >
            <h1 style={{fontSize:"50px",color:"white",marginTop:"2%"}}>Get Quate</h1>
            <hr  style={{background: 'white',color: 'white',height: '3px',margin: "0px",opacity: "100%"}}/>
            <div id="contact"  style={{marginTop:"30px",position:"relative"}}>
            <form onSubmit={onSubmit}>
                    <div class="row">
                        <div class=" col-md-6 input-group-lg">
                        <label for="inputEmail4">First name</label>
                        <input name='firstName' value={toSend.firstName} onChange={handleChange} type="text" class="form-control input-lg" id="inputEmail4" placeholder="Alex"/>
                        </div>
                        <div class=" col-md-6 input-group-lg">
                        <label for="inputPassword4">Last name</label>
                        <input name='lastName' value={toSend.lastName} onChange={handleChange} type="text" class="form-control input-lg" id="inputPassword4" placeholder="Bloggs"/>
                        </div>
                    </div>
                    <div class="form-group input-group-lg">
                        <label for="inputAddress" style={{marginTop:'30px'}}>Email address</label>
                        <input name='email' value={toSend.email} onChange={handleChange} type="email" class="form-control" id="inputAddress" placeholder="alex.bloggs@email.com"/>
                    </div>
                    <div class="form-group input-group-lg">
                        <label for="inputAddress2" style={{marginTop:'30px'}}>Your message</label>
                        <textarea name='message' value={toSend.message} onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Please enter your message"></textarea>
                    </div>
                    <div style={{marginTop:"20px",}}>
                    <button id="b1" type='submit' className="btn btn-outline-warning" style={{fontSize:'30px',width:"200px"}}>Submit</button>
                    </div>    
            </form>
            </div>
            </div>
    { showMessage  && <div id='popup'>
                <p>Hello {toSend.firstName} we get your request</p>
                <p>Thank you for giving us the opportunity to serve you. We will contact you within 24 hours.</p>
                <button className='btn btn-outline-info mx-auto' style={{fontSize:"23px"}} onClick={()=>{setShowMessage(false)}}>Close</button>
            </div>
    }           
        </div>
      
  )
}

export default Quate