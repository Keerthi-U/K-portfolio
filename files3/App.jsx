import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './components/ProjectsPage'
import './styles/global.css'

function App() {
  const [page, setPage] = useState('home') // 'home' | 'projects'

  return (
    <div className="app">
      <Navbar setPage={setPage} currentPage={page} />
      {page === 'projects' ? (
        <ProjectsPage />
      ) : (
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Projects setPage={setPage} />
          <Testimonials />
          <Contact />
        </>
      )}
      <Footer setPage={setPage} />
    </div>
  )
}

export default App
