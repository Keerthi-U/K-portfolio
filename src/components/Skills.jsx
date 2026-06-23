import { useEffect, useRef, useState } from 'react'
import './Skills.css'
import html from '../assets/Image/html.png'
import css from '../assets/Image/css.png'
import js from '../assets/Image/js.png'
import reactjs from '../assets/Image/reactjs.png'
import php from '../assets/Image/php.png'
import mysql from '../assets/Image/mysql.png'

const skills = [
  { name: 'HTML',       icon: `${html}`, percent: 90 },
  { name: 'CSS',        icon: `${css}`, percent: 85 },
  { name: 'JavaScript', icon: `${js}`, percent: 80 },
  { name: 'React js',      icon: `${reactjs}`, percent: 75 },
  { name: 'Php',     icon: `${php}`, percent: 75 },
  { name: 'MySql',        icon: `${mysql}`, percent: 70 },
]

const techBubbles = ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'React js', 'PHP', 'Wordpress']

const Skills = () => {
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect() // only animate once
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills" id="about" ref={sectionRef}>
      <div className="container skills-grid">
        <div className="skills-left">
          <h2 className="section-title">Skills</h2>
          <div className="skill-bars">
            {skills.map((skill, i) => (
              <div key={skill.name} className="skill-row">
                <span className="skill-icon"><img src={skill.icon} /></span>
                <div className="skill-bar-wrap">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: animate ? `${skill.percent}%` : '0%',
                      transitionDelay: `${i * 0.30}s`,
                    }}
                  />
                </div>
                <span className="skill-percent">{skill.percent}%</span>
              </div>
            ))}
          </div>
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{ marginTop: '32px', display: 'inline-block', textDecoration: 'none' }}
          >
            Check on GITHUB
          </a> */}
        </div>

        <div className="skills-right">
          <div className="bubbles-container">
            <div className="bubble-center">Git</div>
            {techBubbles.map((tech, i) => (
              <div key={tech} className={`bubble bubble-${i}`}>{tech}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
