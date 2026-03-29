import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Magnetic from './Magnetic';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-nav">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" aria-label="Finch Home">
          <img src="/finch-logo-icon.png" alt="Finch" className="logo-icon" />
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/product" className={`nav-link ${location.pathname === '/product' ? 'active' : ''}`}>Product</Link>
          <Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}>FAQ</Link>
          <div className="navbar-actions-mobile">
            <button onClick={toggleTheme} className="theme-toggle" id="theme-toggle-mobile" aria-label="Toggle dark mode">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <Link to="/signup" className="btn btn-primary btn-sm">Sign Up Free</Link>
          </div>
        </div>

        <div className="navbar-actions">
          <button onClick={toggleTheme} className="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
            <span className="theme-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
          </button>
          <Magnetic strength={0.3}>
            <Link to="/signup" className="btn btn-primary btn-sm" id="navbar-signup-btn">
              Sign Up Free
            </Link>
          </Magnetic>
        </div>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
    </nav>
  );
}
