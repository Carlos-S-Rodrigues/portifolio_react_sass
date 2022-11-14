import React from 'react'
import './style.scss'


function Header() {
  return (
    <header>
      <div className="logo">
        <p>Carlos Rodrigues</p>
      </div>
      <ul>
        <li><a href="#">About Me</a></li>
        <li><a href="#">My Jobs</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </header>
  )
}

export default Header