import React from 'react'
import './style.scss'

function Hero() {
  return (
    <>
      <div className="hero-wrapper" id="aboutMe">
        <section className="hero">
          <h1 className="hero-title">Who am i?</h1>
          <p className="sub">
            I'm <strong>Carlos Rodrigues</strong>, Graphic Designer & Frontend Developer.
          </p>
          <p className='sub'>
            What motivates me to work with technology is the fact that it can <strong>improve people's lives</strong>, change points of view and show new possibilities.
          </p>
          <p className='sub'>
            Constantly evolving to <strong>bring quality content</strong> around the world in the best way I can.
          </p>
          <p className='sub'>
            Fast learner, I'm <strong>always ready for new challenges!</strong>
          </p>
        </section>
      </div>
      
    </>
  )
}

export default Hero