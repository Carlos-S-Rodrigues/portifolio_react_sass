import React, {useState, useEffect} from 'react'
import './style.scss'


function Header() {
  const [ activeLink, setActiveLink] = useState('home')

  const [ scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return() => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value)
  }

  return (
    <nav className={scrolled ? 'scrolled':""}>
      <div className="logo">
        <p>Carlos Rodrigues</p>
      </div>
      <ul>
        <li><a href="/" className={activeLink === 'aboutme' ? 'active navvbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('aboutme')}>About Me</a></li>
        <li><a href="/myjobs" className={activeLink === 'myjobs' ? 'active navvbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('myjobs')}>My Jobs</a></li>
        <li><a href="/contact" className={activeLink === 'contact' ? 'active navvbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')}>Contact</a></li>
      </ul>
      
    </nav>
    
  )
}

export default Header