import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './components/ProjectsPage'
import './styles/global.css'

function App() {
  const [page, setPage] = useState('home')

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
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
