import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = ({ setPage, currentPage }) => {
  const [active, setActive] = useState('home')

  const links = [
    { label: 'Home',     id: 'home' },
    { label: 'About',    id: 'about' },
    { label: 'Education',id: 'education' },
    { label: 'Contact',  id: 'contact' },
  ]

  const handleClick = (e, id) => {
    e.preventDefault()
    setPage('home')
    setActive(id)
    setTimeout(() => {
      const section = document.getElementById(id)
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const handleProjectsClick = (e) => {
    e.preventDefault()
    setPage('projects')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
      <div className="nav-links">
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
        <a
          href="#projects"
          className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
          onClick={handleProjectsClick}
        >
          Projects
        </a>
      </div>
      <button
        className="btn-primary hire-btn"
        onClick={(e) => handleClick(e, 'contact')}
      >
        Hire Me
      </button>
    </nav>
  )
}

export default Navbar
