import React, { useState } from 'react'
import './contact.css'
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {

    const [showMessage,setShowMessage]=useState(false)

    function reloading(){
        window.location.reload();
    }
    
    function submitContact(){
        setShowMessage(true);
        setTimeout(reloading,3000);
    }

  return (
    <>
    <br />
    <h3 style={{textAlign: "center"}}>Contact Form</h3><br />

    <div className="container" style={{borderRadius: "10px", backgroundColor: "#cfcfcf", padding: "20px"}}>
      <form id="formContact">
      <label for="fname">First Name</label><br />
      <input className="inp" type="text" id="fname" name="firstname" placeholder="Enter your first name" /><br/>

      <label for="lname">Last Name</label><br />
      <input type="text" className="inp" id="lname" name="lastname" placeholder="Enter your last name" /><br/>

      <label for="Email">Email</label><br/>
      <input type="text" className="inp" id="email" name="Email" placeholder="Enter your email"/><br/>

      <label for="subject">Subject</label><br/>
      <textarea id="subject" className="ta" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea><br/>

      <input type="button" className="sub" onClick={submitContact} value="Submit" /><div id="here"></div>

      {showMessage &&
      <div>
        <p className="alert alert-success" style={{marginTop: "1%", width: "80%"}}><strong>Success!</strong> Your contact information has been submited.</p>
      </div>
      } 

      </form>
    </div>

    <div className="icons">
      <a href="https://www.facebook.com/magdalena.georgieva.756/" target="_blank" style={{textDecoration: "none"}} className="fa fa-facebook"><FacebookIcon/></a>
      <a  href="mailto: geomagde@gmail.com" style={{textDecoration: "none"}} target="_blank" className="fa fa-google"><GoogleIcon/></a>
      <a href="https://www.instagram.com/magdalenageorgieva_/" style={{textDecoration: "none"}} target="_blank" className="fa fa-instagram"><InstagramIcon/></a>
    </div>
    </>
  )
}

export default Contact