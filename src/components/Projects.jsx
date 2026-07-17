import './Projects.css'

const featuredProjects = [
  {
    id: 1,
    title: 'Medicare Healthcare System',
    description:
      'Full-stack healthcare appointment management system where patients book appointments, admins manage doctors and dashboards, and doctors receive notifications through a separate portal login.',
    tags: ['React', 'Context API', 'JSON Server', 'REST API', 'Vercel', 'Render'],
    emoji: '🏥',
    live: 'https://medi-care-beryl-six.vercel.app/',
    github: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Store',
    description:
      'Full-featured e-commerce platform with product listings, category filters, search, shopping cart, user authentication, and Stripe checkout with reusable components.',
    tags: ['React', 'Redux', 'Stripe', 'Router', 'Context API'],
    emoji: '🛒',
    live: 'https://nature-project-kjs.netlify.app/',
    github: '#',
  },
]

const otherProjects = [
  {
    id: 3,
    title: 'Gracious Express',
    description: 'Dynamic and responsive PHP web application with jQuery frontend and PHP backend.',
    icon: '📦',
    link: '',
    tags: ['PHP', 'jQuery', 'MySQL'],
  },
  {
    id: 4,
    title: 'LightUp Temple',
    description: 'Interactive WordPress web app with custom UI/UX design, plugin integration, and performance optimization.',
    icon: '🛕',
    link: 'http://lightuptemples.com/',
    tags: ['WordPress', 'HTML', 'CSS', 'JS'],
  },
]

const Projects = ({ setPage }) => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {/* Featured React Projects */}
        <div className="projects-featured">
          {featuredProjects.map(project => (
            <div key={project.id} className="featured-card">
              <div className="featured-card-header">
                <span className="featured-emoji">{project.emoji}</span>
                <div className="featured-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="featured-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="featured-title">{project.title}</h3>
              <p className="featured-desc">{project.description}</p>
              <div className="featured-links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary featured-link">
                    Live Demo ↗
                  </a>
                )}
                {project.github && project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline featured-link">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="projects-grid">
          {otherProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-detals">
                <p className="project-icon">{project.icon}</p>
                {project.link && (
                  <a href={project.link} className="project-link-icon" target="_blank" rel="noopener noreferrer">🔗</a>
                )}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags-small">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag-sm">{tag}</span>
                ))}
              </div>
            </div>
          ))}

          {/* React mini-projects card */}
          <div className="project-card react-card">
            <div className="project-detals">
              <p className="project-icon">⚛️</p>
              <button
                className="see-all-btn btn-primary"
                onClick={() => {
                  setPage('projects')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                See All
              </button>
            </div>
            <h3 className="project-title">More React Projects</h3>
            <p className="project-desc">
              12+ React mini-projects — Birthday Tracker, Food Menu, Tours App, E-Commerce, Medicare, Password Generator, and more.
            </p>
            <div className="project-tags-small">
              <span className="project-tag-sm">React</span>
              <span className="project-tag-sm">Hooks</span>
              <span className="project-tag-sm">API</span>
              <span className="project-tag-sm">Redux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
