import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`rn-nav${scrolled ? ' rn-nav--scrolled' : ''}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <span className="rn-nav__logo">RN<span className="dot">.</span></span>
        <ul className="rn-nav__links d-none d-md-flex list-unstyled mb-0 gap-4">
          <li><a href="#about">About</a></li>
          <li><a href="#how-i-work">Process</a></li>
          <li><a href="#case-studies">Work</a></li>
        </ul>
        <a
          href="https://github.com/Rime6"
          target="_blank"
          rel="noreferrer"
          className="rn-nav__cta"
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  )
}