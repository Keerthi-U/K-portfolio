import { useState } from 'react'
import './ProjectsPage.css'

const projects = [
  {
    id: 1,
    title: 'Birthday Buddy',
    description: 'Track and manage birthdays of your friends and family with reminders.',
    tags: ['React', 'Hooks'],
    color: '#1e3a3a',
    emoji: '🎂',
    github: '#',
    live: 'https://birthday-count-reactjs.netlify.app/',
  },
{
  id: 2,
  title: 'Tours App',
  description: 'A React.js tour booking web app displaying tour packages with pricing. Deployed via Netlify with CI/CD, and separately built an AWS CodePipeline (CodeBuild + S3) for automated deployment practice.',
  tags: ['React', 'API', 'AWS (CodePipeline, CodeBuild, S3'],
  color: '#1a2a3a',
  emoji: '🌍',
  github: '#',
  live: 'https://tour-kjs.netlify.app/',
  pipelineImage: '/images/aws-pipeline.png',   // 👈 add this line
},
  {
    id: 3,
    title: 'Reviews Slider',
    description: 'Auto-rotating testimonial slider with manual controls.',
    tags: ['React', 'CSS'],
    color: '#1e3a2a',
    emoji: '⭐',
    github: '#',
    live: 'https://review-sliders.netlify.app/',
  },
  {
    id: 4,
    title: 'Accordion FAQ',
    description: 'Expandable FAQ accordion built with React useState toggle.',
    tags: ['React', 'Hooks'],
    color: '#2a1e3a',
    emoji: '📋',
    github: '#',
    live: 'https://accordion-reacttjs.netlify.app/',
  },
  {
    id: 5,
    title: 'Food Menu',
    description: 'Filter-based food menu with category tabs and dynamic rendering.',
    tags: ['React', 'Filter'],
    color: '#3a2a1e',
    emoji: '🍔',
    github: '#',
    live: 'https://menu-react-k.netlify.app/',
  },
  // {
  //   id: 6,
  //   title: 'Tabs Component',
  //   description: 'Job experience tabs fetched from API with dynamic switching.',
  //   tags: ['React', 'API'],
  //   color: '#1e2a3a',
  //   emoji: '💼',
  //   github: '#',
  //   live: '#',
  // },
  {
    id: 7,
    title: 'Image Slider',
    description: 'Smooth image carousel slider with prev/next navigation.',
    tags: ['React', 'CSS'],
    color: '#1e3a3a',
    emoji: '🖼️',
    github: '#',
    live: 'https://slider-kjs.netlify.app/',
  },
  // {
  //   id: 8,
  //   title: 'Color Generator',
  //   description: 'Generate shades and tints of any color with hex codes.',
  //   tags: ['React', 'CSS'],
  //   color: '#3a1e2a',
  //   emoji: '🎨',
  //   github: '#',
  //   live: '#',
  // },
  {
    id: 9,
    title: 'Grocery Bud',
    description: 'Add, edit, and delete grocery items with localStorage persistence.',
    tags: ['React', 'localStorage'],
    color: '#1a3a1a',
    emoji: '🛒',
    github: '#',
    live: 'https://grocery-kjs.netlify.app/',
  },
  // {
  //   id: 10,
  //   title: 'Navbar',
  //   description: 'Responsive navbar with hamburger menu and smooth transitions.',
  //   tags: ['React', 'Responsive'],
  //   color: '#1e2a2a',
  //   emoji: '📌',
  //   github: '#',
  //   live: '#',
  // },
  // {
  //   id: 11,
  //   title: 'Sidebar & Modal',
  //   description: 'Reusable sidebar and modal using React Context API.',
  //   tags: ['React', 'Context'],
  //   color: '#2a1e1e',
  //   emoji: '🗂️',
  //   github: '#',
  //   live: '#',
  // },
  // {
  //   id: 12,
  //   title: 'Cart App',
  //   description: 'Shopping cart with add/remove and total price calculation.',
  //   tags: ['React', 'useReducer'],
  //   color: '#1e3a2a',
  //   emoji: '🛍️',
  //   github: '#',
  //   live: '#',
  // },
  {
    id: 13,
    title: 'Unsplash Images',
    description: 'Search and display images using the Unsplash API.',
    tags: ['React', 'API'],
    color: '#1a1a3a',
    emoji: '📷',
    github: '#',
    live: 'https://unsplashapiimage-kjs.netlify.app/',
  },
  // {
  //   id: 14,
  //   title: 'Mix Master',
  //   description: 'Cocktail search app using TheCocktailDB API with React Router.',
  //   tags: ['React', 'Router', 'API'],
  //   color: '#3a1a1a',
  //   emoji: '🍹',
  //   github: '#',
  //   live: '#',
  // },
  {
    id: 15,
    title: 'E-Commerce',
    description: 'Full-featured e-commerce store with cart, filters, and Stripe checkout.',
    tags: ['React', 'Redux', 'Stripe'],
    color: '#1e1e3a',
    emoji: '🛒',
    github: '#',
    live: 'https://nature-project-kjs.netlify.app/',
  },
  // {
  //   id: 16,
  //   title: 'Github Users',
  //   description: 'Search GitHub profiles and display repos, followers, and stats.',
  //   tags: ['React', 'GitHub API'],
  //   color: '#1a2a1a',
  //   emoji: '🐙',
  //   github: '#',
  //   live: '#',
  // },
   {
  id: 17,
  title: 'Password Generator',
  description: 'Generate strong, secure passwords with custom length, uppercase, lowercase, numbers, and special characters using React state and controlled inputs.',
  tags: ['React', 'Hooks', 'useState'],
  color: '#1a1a3a',
  emoji: '🔐',
  github: '#',
  live: 'https://password-generate-kjs.netlify.app/',
},
 {
  id: 18,
  title: 'Medicare Healthcare Management System',
  description: 'A full-stack healthcare appointment management system where patients can book appointments, admins can manage doctors and patient details from the dashboard, and doctors receive appointment notifications through their separate portal login. Built with React, JSON Server API, and deployed using Vercel with backend API hosted on Render.',
  tags: ['React', 'Context API', 'JSON Server', 'REST API', 'Vercel', 'Render'],
  color: '#1a1a3a',
  emoji: '🏥',
  github: '#',
  live: 'https://medi-care-git-main-vzkeerthi.vercel.app/'
}
  
  
]

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))]

const ProjectsPage = () => {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeTag))

  return (
    <div className="projects-page">
      {/* Hero */}
      <div className="pp-hero">
        <div className="pp-hero-shapes">
          <div className="pp-circle c1" />
          <div className="pp-circle c2" />
          <div className="pp-square s1" />
          <div className="pp-square s2" />
        </div>
        <div className="container pp-hero-content">
          <div className="pp-hero-text">
            <p className="pp-label">Portfolio</p>
            <h1 className="pp-title">React <span>Projects</span></h1>
            <p className="pp-subtitle">
              A collection of React apps I built while learning and practicing —
              from hooks and context to API integrations and full-stack projects.
            </p>
            <div className="pp-hero-btns">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-primary">
                GitHub Profile ↗
              </a>
              <a href="#pp-grid" className="btn-outline">View Projects</a>
            </div>
          </div>
          <div className="pp-hero-badge">
            <div className="badge-ring">
              <span className="badge-count">{projects.length}</span>
              <span className="badge-label">Projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="pp-filters" id="pp-grid">
        <div className="container">
          <div className="filter-tags">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-tag ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <p className="results-count">{filtered.length} project{filtered.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      {/* Grid */}
      <div className="pp-grid-section">
        <div className="container">
          <div className="pp-grid">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="pp-card"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="pp-card-preview" style={{ background: project.color }}>
                  <span className="pp-card-emoji">{project.emoji}</span>
                </div>
                <div className="pp-card-body">

                  <div className="pp-card-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="pp-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="pp-card-title">{project.title}</h3>
                  <p className="pp-card-desc">{project.description}</p>
                  {project.pipelineImage && (
                    <div className="pp-pipeline-shot">
                      <img src={project.pipelineImage} alt="AWS CI/CD Pipeline" />
                      <span className="pp-pipeline-caption">AWS CodePipeline — CI/CD deployment</span>
                    </div>
                  )}
                  <div className="pp-card-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="pp-link github">
                      GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="pp-link live">
                      Live Demo ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pp-cta">
        <div className="container pp-cta-inner">
          <h2>Want to work together?</h2>
          <p>I'm open to freelance projects and full-time opportunities.</p>
          <button
            className="btn-primary"
            onClick={() => {
              window.location.hash = '#/'
              setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)
            }}
          >
            Contact Me
          </button>
          <p className="footer-contact ptt">+91 7010729077</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
