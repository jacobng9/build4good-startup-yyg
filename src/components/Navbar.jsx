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
          <svg viewBox="0 0 40 40" className="logo-icon" aria-hidden="true">
            <circle cx="20" cy="20" r="18" fill="var(--orange)" />
            <path d="M12 24 C12 18, 16 12, 24 10 C22 14, 22 18, 24 22 C20 20, 16 22, 12 24Z" fill="white" />
            <circle cx="22" cy="14" r="2" fill="var(--navy)" />
          </svg>
          <span className="logo-text">finch</span>
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/product" className={`nav-link ${location.pathname === '/product' ? 'active' : ''}`}>Product</Link>
          <div className="navbar-actions-mobile">
            <button onClick={toggleTheme} className="theme-toggle" id="theme-toggle-mobile" aria-label="Toggle dark mode">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <a href="#signup" className="btn btn-primary btn-sm">Sign Up Free</a>
          </div>
        </div>

        <div className="navbar-actions">
          <button onClick={toggleTheme} className="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
            <span className="theme-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
          </button>
          <Magnetic strength={0.3}>
            <a href="#signup" className="btn btn-primary btn-sm" id="navbar-signup-btn">
              Sign Up Free
            </a>
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
