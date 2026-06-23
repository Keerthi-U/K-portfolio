import { useState, useEffect } from 'react'
import './Navbar.css'
const links = [
  { label: 'Home',      id: 'home' },
  { label: 'About',     id: 'about' },
  { label: 'Experience',     id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact',   id: 'contact' },
]



const Navbar = ({ setPage, currentPage }) => {
  const [active, setActive]     = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (e, id) => {
    e.preventDefault()
    setPage('home')
    setActive(id)
    setMenuOpen(false)
    setTimeout(() => {
      const section = document.getElementById(id)
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  // Close menu on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (!e.target.closest('.navbar')) setMenuOpen(false)
    }
    document.addEventListener('click', handleOutside)
    return () => document.removeEventListener('click', handleOutside)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (currentPage !== 'home') return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [currentPage])

  return (
    <nav className="navbar">
      {/* Logo */}
      <div
        className="nav-logo"
        onClick={(e) => handleClick(e, 'home')}
      >
   【K】ꫀꫀ᥅ꪻꫝ꠸ ⋆
      </div>

      {/* Desktop links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-link ${currentPage === 'home' && active === id ? 'active' : ''}`}
            onClick={(e) => handleClick(e, id)}
          >
            {label}
          </a>
        ))}
        {/* Hire Me inside mobile menu too */}
        <button
          className="btn-primary hire-btn-mobile"
          onClick={(e) => handleClick(e, 'contact')}
        >
          Hire Me
        </button>
      </div>

      {/* Desktop Hire Me */}
      <button
        className="btn-primary hire-btn"
        onClick={(e) => handleClick(e, 'contact')}
      >
        Hire Me
      </button>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen) }}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}

export default Navbar
