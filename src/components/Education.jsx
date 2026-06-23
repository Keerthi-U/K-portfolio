import './Education.css'
import graduation from '../assets/Image/graduation.png'
const educationItems = [
  {
    id: 1,
    years: '2013-2016',
    title: 'B.sc [Computer Science]',
    description: 'DKM Womens College Vellore.',
  },
  {
    id: 2,
    years: '2014-2015',
    title: 'Master of Computer Application',
    description: 'C. Abdul Hakeem College of Engineering & Technology.',
  },
]

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="edu-list">
          {educationItems.map(item => (
            <div key={item.id} className="edu-item">
              <div className="edu-icon">
                <span><img src={graduation} alt="" /></span>
              </div>
              <div className="edu-details">
                <p className="edu-years">{item.years}</p>
                <h3 className="edu-title">{item.title}</h3>
                <p className="edu-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
