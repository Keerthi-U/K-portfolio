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
          <p className="hero-greeting">Hello!</p>
          <h1 className="hero-heading">
            I am <span className="highlight animate-[text-fadeIn_2.1s_ease-in_infinite]" >Keerthiga U,</span>
            <br />WEB Developer
          </h1>
          <p className="hero-description">
          3+ years of hands-on experience in frontend and full-stack web development. 
Skilled in building responsive, high-performance web apps with React JS, 
JavaScript, PHP, and WordPress. Proven track record of resolving 500+ bugs, 
leading projects end-to-end, and collaborating with cross-functional teams.

          </p>
          <div className="hero-buttons">
           <button
  className="btn-primary"
  onClick={() => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }}
>
  Hire me
</button>
            {/* <button className="btn-outline">Hire me</button> */}
          </div>
        </div>

        <div className="hero-image">
          {/* Replace src with your actual photo */}
          <img src={myImg} alt="Profile" />
        </div>
      </div>
    </section>
  )
}

export default Hero
