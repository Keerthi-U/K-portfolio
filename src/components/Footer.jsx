import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <h3 className="footer-logo">Keerthiga U</h3>
          <p className="footer-desc">
            Frontend Developer passionate about building responsive, 
            user-friendly web applications using React JS, JavaScript, 
            PHP, and WordPress.
          </p>
          <p className="footer-contact">+91 7010729077</p>
          <p className="footer-contact">keerthiiachu173@gmail.com</p>
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">💼</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">🐙</a>
            <a href="mailto:keerthiiachu173@gmail.com" title="Email">📧</a>
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="footer-newsletter">
          <h4 className="footer-col-title">Let's work together!</h4>
          <input type="email" placeholder="Your Email" className="footer-input" />
          <button className="btn-primary footer-btn">Subscribe</button>
          <button
            className="btn-primary footer-btn"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Hire me
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Keerthiga U. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
