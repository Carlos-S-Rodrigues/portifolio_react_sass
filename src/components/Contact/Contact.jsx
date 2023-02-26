import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import {VscGithub} from 'react-icons/vsc'
import {AiOutlineLinkedin} from 'react-icons/ai'
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
      <h2 className='contact-headlines'>Here some places you can find me and have a nice conversation</h2>

      
      <div className="contact-wrapper" id='contact'>
        <div className="social-wrapper">
          <div className='social-media'>
            <AiOutlineLinkedin className='social-icon' size={25}/>
            <a href="https://www.linkedin.com/in/carlos-rodrigues-a98444b9/" target="_blank">Linkedin</a>
          </div>
          <div className='social-media'>
            <div className='learn-more'>
              
                <VscGithub className='social-icon' size={25}/>
              
              <a className='button-text' href="https://github.com/Carlos-S-Rodrigues" target="_blank">Github</a>
            </div>
          </div>
        </div>
      
        <form className='form-wrapper' ref={form} onSubmit={sendEmail}>
          <label className='label'>Name</label>
          <input className='input-box' type="text" name="user_name"  placeholder="Your Name" required />
          <label className='label'>Email</label>
          <input className='input-box' type="email" name="user_email" placeholder="Your Email" required/>
          <label className='label'>Message</label>
          <textarea className='txt-message' name="message" placeholder="Your message..." required/>
          <input className='input-submit' type="submit" value="Send message" />
        </form>
      </div>  


    </>
  )
}

export default Contact