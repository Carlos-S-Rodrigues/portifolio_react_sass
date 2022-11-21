import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import './style.scss'




function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm (import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
    });

 
  }    
  return (
    <>
      <form className='form-wrapper' ref={form} onSubmit={sendEmail}>
        <label className='label'>Name</label>
        <input className='input-box' type="text" name="user_name"  placeholder="Your Name" required />
        <label className='label'>Email</label>
        <input className='input-box' type="email" name="user_email" placeholder="Your Email" required/>
        <label className='label'>Message</label>
        <textarea className='txt-message' name="message" placeholder="Your message..." required/>
        <input className='input-submit' type="submit" value="Send" />
      </form>


    </>
  )
}

export default Contact