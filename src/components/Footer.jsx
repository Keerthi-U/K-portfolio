import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <h3 className="footer-logo">Keerthiga U</h3>
          <p className="footer-desc">
            Frontend &amp; Full-Stack Developer passionate about building responsive,
            user-friendly web applications using React JS, JavaScript, PHP, and WordPress.
          </p>
          <p className="footer-contact">📞 +91 7010729077</p>
          <p className="footer-contact">📧 keerthiiachu173@gmail.com</p>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/keerthiga-u-82109a1a0" target="_blank" rel="noreferrer" title="LinkedIn">💼</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">🐙</a>
            <a href="mailto:keerthiiachu173@gmail.com" title="Email">✉️</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* CTA */}
        <div className="footer-cta-col">
          <h4 className="footer-col-title">Let's work together!</h4>
          <p className="footer-cta-text">I'm open to freelance projects and full-time opportunities.</p>
          <a
            href="#contact"
            className="btn-primary footer-btn"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }}
            style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
          >
            Hire Me
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Keerthiga U. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
