import './Projects.css'

const projects = [
  { id: 1, title: 'Personal Guidance', description: 'We are here to give you a personal detailed direction towards your future and we give the best advice.', icon: '🧭', featured: true },
  { id: 2, title: 'Personal Guidance', description: 'We are here to give you a personal detailed direction towards your future and we give the best advice.', icon: '📦' },
  { id: 3, title: 'Personal Guidance', description: 'We are here to give you a personal detailed direction towards your future and we give the best advice.', icon: '📦' },
  { id: 4, title: 'Personal Guidance', description: 'We are here to give you a personal detailed direction towards your future and we give the best advice.', icon: '📦' },
]

const Projects = ({ setPage }) => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Projects</h2>
          <button className="btn-outline" onClick={() => { setPage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            View All →
          </button>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
