import { useState } from 'react'

function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-left">
          <img src="/vercel-logo.svg" alt="Vercel Logo" className="logo" />
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#templates">Templates</a>
            <a href="#integrations">Integrations</a>
            <a href="#customers">Customers</a>
            <a href="#pricing">Pricing</a>
          </div>
        </div>
        <div className="nav-right">
          <a href="#contact">Contact</a>
          <a href="#login" className="login">Login</a>
          <button className="signup-btn">Sign Up</button>
        </div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#features">Features</a>
          <a href="#templates">Templates</a>
          <a href="#integrations">Integrations</a>
          <a href="#customers">Customers</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="#login">Login</a>
          <button className="signup-btn">Sign Up</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar