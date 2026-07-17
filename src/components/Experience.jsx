import './Experience.css'
import workexp from '../assets/Image/work-exp.png'
import workexp1 from '../assets/Image/work-exp1.png'

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        {/* Job 1 */}
        <div className="experience-grid">
          <div className="exp-illustration">
            <img src={workexp} alt="Colan Infotech" />
          </div>
          <div className="exp-content">
            <h3 className="exp-company">Colan Infotech Private Limited</h3>
            <p className="exp-role">Software Engineer</p>
            <p className="exp-years">Jan 2021 — Apr 2024 · Vellore, TN</p>
            <ul className="exp-bullets">
              <li>Led frontend development for VirtualStaff, IMF, and LightUp projects — delivering responsive, cross-device compatible applications.</li>
              <li>Managed end-to-end WooCommerce website development from scratch through UAT, including change requests and defect resolution.</li>
              <li>Identified and resolved <strong>500+ production bugs</strong> across HTML/CSS, JavaScript/jQuery, and PHP layers.</li>
              <li>Optimized WordPress websites for SEO and page speed, significantly improving load times and user engagement.</li>
              <li>Created and optimized email templates, conducted code reviews, and mentored junior developers.</li>
              <li>Collaborated with designers and QA teams to deliver high-quality applications aligned with project deadlines.</li>
            </ul>
          </div>
        </div>

        {/* Job 2 */}
        <div className="experience-grid reverse">
          <div className="exp-content">
            <h3 className="exp-company">vSplash Techlabs Private Limited</h3>
            <p className="exp-role">WordPress Developer</p>
            <p className="exp-years">Nov 2025 — Feb 2026 · Remote</p>
            <ul className="exp-bullets">
              <li>Developed and customized WordPress websites with responsive design using HTML, CSS, and JavaScript.</li>
              <li>Performed theme customization, plugin integration, and UI/UX enhancements for improved user experience.</li>
              <li>Resolved design and functionality bugs to ensure smooth and stable website performance.</li>
            </ul>
          </div>
          <div className="exp-illustration">
            <img src={workexp1} alt="vSplash" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
