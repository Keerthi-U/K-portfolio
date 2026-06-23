import './Experience.css'
import workexp from '../assets/Image/work-exp.png'
import workexp1 from '../assets/Image/work-exp1.png'

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container ">
        <div className="experience-grid">
  <div className="exp-illustration">
          {/* Replace with your illustration */}
          <img src={workexp} alt="Experience" />
        </div>
           <div className="exp-content">
          <div className="shape-circle" style={{ width: 50, height: 50, top: '10%', left: '-5%', position: 'absolute', opacity: 0.3 }} />
          <div className="shape-square" style={{ width: 22, height: 22, top: '20%', right: '5%', position: 'absolute', opacity: 0.3 }} />

          <h2 className="section-title">Experience</h2>
          <div className="edu-details">
              <h3 className="edu-title">Colan infotech private limited</h3>
                <p className="edu-years">2021 jan - 2024 april</p>
              
            
              </div>
          <p className="exp-description">
          Experienced PHP, WordPress, and React Developer with expertise in developing, maintaining, and optimizing web applications and WooCommerce websites. Skilled in bug fixing, feature development, performance optimization, API integration, and responsive UI development. Strong experience collaborating with cross-functional teams to deliver high-quality, user-friendly solutions and ensure smooth project deployment and maintenance.

          </p>
         
        </div>
        </div>
      

          <div className="experience-grid">
    

 <div className="exp-content">
          <div className="shape-circle" style={{ width: 50, height: 50, top: '10%', left: '-5%', position: 'absolute', opacity: 0.3 }} />
          <div className="shape-square" style={{ width: 22, height: 22, top: '20%', right: '5%', position: 'absolute', opacity: 0.3 }} />

          <div className="edu-details">
              <h3 className="edu-title"><p>vSplash Techlabs Private Limited</p></h3>
                
              
            <p className="edu-years">2025 Nov - 2026 Feb</p>
              </div>
          <p className="exp-description">
        Worked extensively on WordPress website development and maintenance, creating responsive and user-friendly websites using HTML, CSS, JavaScript, and WordPress. Experienced in theme customization, plugin integration, bug fixing, and website optimization. Focused on improving functionality, performance, and user experience while ensuring smooth website operation.


          </p>
        
        </div>
           <div className="exp-illustration">
          {/* Replace with your illustration */}
          <img src={workexp1} alt="Experience" />
        </div>
      </div>
       
      </div>
     
    </section>
  )
}

export default Experience
  