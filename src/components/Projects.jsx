import './Projects.css'

const projects = [
  {
    id: 2,
    title: 'GRACIOUS EXPRESS',
    description: 'Resolved 500+ bugs across JavaScript, jQuery, HTML, CSS, and PHP. Maintained dynamic features and improved application performance, stability, and user experience.',
    icon: '📦',
    link: '',
  },
  {
    id: 3,
    title: 'LIGHTUP TEMPLE',
    description: 'Created custom templates with tailored design and functionality using HTML, CSS, JavaScript, and jQuery, ensuring a dynamic and user-friendly interface.',
    icon: '🛕',
    link: 'http://lightuptemples.com/',
  },
  {
    id: 4,
    title: 'REACT JS PROJECTS',
    description: 'Collection of React.js projects showcasing reusable components, hooks, state management, API integration, filtering, sliders, and interactive user experiences.',
    icon: '⚛️',
    link: '',
    isReactProjects: true,
  },
]

const Projects = ({ setPage }) => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">

          {/* First card - featured intro card */}
          <div className="project-card featured intro-card">
            <div className="intro-card-content">
              <span className="intro-icon">💻</span>
              <h3 className="intro-title">My Work</h3>
              <p className="intro-desc">
                3+ years of building responsive web apps using React JS, 
                JavaScript, PHP & WordPress. Here are some highlights.
              </p>
              <div className="intro-stats">
                <div className="stat">
                  <span className="stat-num">3+</span>
                  <span className="stat-label">Years Exp</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <span className="stat-num">500+</span>
                  <span className="stat-label">Bugs Fixed</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <span className="stat-num">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other project cards */}
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-detals">
                <p className="project-icon">{project.icon}</p>
                {project.link && (
                  <a href={project.link} className="project-link-icon" target="_blank" rel="noopener noreferrer">🔗</a>
                )}
                {project.isReactProjects && (
                  <button
                    className="see-all-btn btn-primary"
                    onClick={() => {
                      setPage('projects')
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    See All
                  </button>
                )}
              </div>
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
