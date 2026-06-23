import './Testimonials.css'

const users = [
  { id: 1, name: 'User Name', role: 'Developer', avatar: 'U1' },
  { id: 2, name: 'User Name', role: 'Designer', avatar: 'U2' },
  { id: 3, name: 'User Name', role: 'Manager', avatar: 'U3' },
  { id: 4, name: 'User Name', role: 'Client', avatar: 'U4' },
]

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title" style={{ color: '#ffffff' }}>My Users</h2>
        <div className="users-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <div className="user-avatar">{user.avatar}</div>
              <p className="user-name">{user.name}</p>
              <p className="user-role">{user.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
