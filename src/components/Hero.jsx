import './Hero.css'
import myImg from '../assets/Image/my-img.png'

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Decorative shapes */}
      <div className="shape-circle" style={{ width: 50, height: 50, top: '20%', left: '18%' }} />
      <div className="shape-square" style={{ width: 24, height: 24, top: '35%', left: '55%', transform: 'rotate(20deg)' }} />
      <div className="shape-circle" style={{ width: 32, height: 32, top: '25%', right: '12%' }} />
      <div className="shape-square" style={{ width: 36, height: 60, bottom: '18%', right: '10%' }} />
      <div className="shape-square" style={{ width: 28, height: 28, bottom: '22%', left: '20%' }} />

      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-heading">
            <span className="highlight">Keerthiga U</span>
          </h1>
          <h2 className="hero-role">Frontend &amp; Full-Stack Developer</h2>
          <p className="hero-description">
            3+ years of experience building responsive, high-performance web applications
            with <strong>React JS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>,
            and <strong>WordPress</strong>. Proven track record of leading projects end-to-end,
            resolving 500+ production bugs, and shipping clean, user-centric UI.
          </p>
          <div className="hero-buttons">
            <a
              href="/Keerthiga_U_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              📄 Download Resume
            </a>
            <button
              className="btn-outline"
              onClick={() => {
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Projects
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={myImg} alt="Keerthiga U - Frontend Developer" />
        </div>
      </div>
    </section>
  )
}

export default Hero
