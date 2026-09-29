import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🇮🇳 BharatSense
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/analyze">Analyze</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/regional">Regional</Link>
        <Link to="/trends">Trends</Link>
        <Link to="/comparison">Comparison</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar