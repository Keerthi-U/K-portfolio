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
  { name: 'React JS',   icon: `${reactjs}`, percent: 75 },
  { name: 'PHP',        icon: `${php}`, percent: 75 },
  { name: 'MySQL',      icon: `${mysql}`, percent: 70 },
  { name: 'AWS',        icon: '☁️', percent: 70 },
]

const gitBubbles = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React JS', 'PHP', 'WordPress']
const awsBubbles = ['S3', 'GitHub Actions', 'EC2', 'Lambda']
const floatingBadges = [
  { name: 'aws', left: 160, top: 90,  color: 'teal',   duration: 3.4 },
  { name: 'S3',  left: 195, top: 115, color: 'orange', duration: 3.8 },
  // add more here later, e.g.:
  // { name: 'EC2', left: 130, top: 120, color: 'orange', duration: 3.2 },
]

const Skills = () => {
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
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
        </div>

        {/* <div className="skills-right">
          <div className="dual-orbits">
           
            <div className="orbit-wrap">
              <div className="orbit-container orbit-git">
                <div className="orbit-ring" />
                    <div className="orbit-ring" />
                <div className="orbit-center orbit-center-git">
                  <span className="orbit-center-icon">🔀</span>
                  <span className="orbit-center-label">Git</span>
                </div>
                {gitBubbles.map((tech, i) => (
                  <div key={tech} className={`orbit-bubble git-bubble git-bubble-${i}`}>{tech}</div>
                ))}
              </div>
              <p className="orbit-title">Development</p>
            </div>

          </div>
        </div> */}

        <div className="orbit-container orbit-git">
                <div className="orbit-ring" />
                <div className="orbit-ring-inner" />
                <div className="orbit-center orbit-center-git">
                  <span className="orbit-center-icon">🔀</span>
                  <span className="orbit-center-label">Git</span>
                </div>

                {/* small floating aws badge, behind the rings */}
            
    {floatingBadges.map((badge, i) => (
                  <div
                    key={badge.name}
                    className={`orbit-float-badge orbit-float-badge--${badge.color}`}
                    style={{
                      left: `${badge.left}px`,
                      top: `${badge.top}px`,
                      animationDuration: `${badge.duration}s`,
                    }}
                  >
                    {badge.name}
                  </div>
                ))}
                {gitBubbles.map((tech, i) => (
                  <div key={tech} className={`orbit-bubble git-bubble git-bubble-${i}`}>{tech}</div>
                ))}
              </div>
      </div>
    </section>
  )
}

export default Skills
