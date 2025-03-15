import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle smooth scrolling to sections on the home page
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();

    // If clicking the platform name, navigate to home and scroll to top
    if (!sectionId) {
      navigate('/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setMenuOpen(false);
      return;
    }

    // If we're on the home page, scroll to the section
    if (window.location.pathname === '/' || window.location.pathname === '') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
      }
    } else {
      // If we're not on the home page, navigate to home and then scroll
      navigate(`/#${sectionId}`);
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        {/* Left side of the navbar - Platform Name - Now using React Router Link */}
        <div className="nav-left">
          <Link to="/"
            className="platform-name"
            onClick={(e) => scrollToSection(null, e)}
            aria-label="Go to homepage">
            NeuroVision
          </Link>
        </div>

        {/* Right side of the navbar - Menu Links */}
        <div className="nav-right">
          <div className="nav-links">
            <a href="#products"
              className="nav-item"
              onClick={(e) => scrollToSection('products', e)}>
              What We Do?
            </a>

            {/* Updated link for About page */}
            <Link to="/about"
              className="nav-item"
              onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile menu (shown when menuOpen is true) */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#products" onClick={(e) => scrollToSection('products', e)}>
            Products
          </a>

          {/* Updated link for About page in mobile menu */}
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <a href="#contactUs" onClick={(e) => scrollToSection('contactUs', e)}>
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;