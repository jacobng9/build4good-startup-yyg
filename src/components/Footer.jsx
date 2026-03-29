import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleShare = () => {
    const url = 'https://applyfinch.com';
    const text = 'Check out Finch — AI-powered internship applications that actually get you interviews!';
    if (navigator.share) {
      navigator.share({ title: 'Finch', text, url });
    } else {
      navigator.clipboard.writeText(`${text} ${url}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/finch-logo-icon.png" alt="Finch Logo" className="footer-logo-icon" />
            </Link>
            <p className="footer-tagline">Fewer Applications. More Interviews.</p>
          </div>

          <div className="footer-column">
            <h4>Product</h4>
            <Link to="/product">How It Works</Link>
            <a href="https://applyfinch.com" target="_blank" rel="noopener noreferrer">Chrome Extension</a>
            <a href="https://applyfinch.com" target="_blank" rel="noopener noreferrer">AI Resume Builder</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/about#team">Our Team</Link>
            <Link to="/about#contact">Contact</Link>
            <a href="https://applyfinch.com" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </div>

          <div className="footer-column">
            <h4>Get Started</h4>
            <a href="https://applyfinch.com" target="_blank" rel="noopener noreferrer">Sign Up Free</a>
            <a href="https://applyfinch.com" target="_blank" rel="noopener noreferrer">Download Extension</a>
            <button onClick={handleShare} className="share-link">Share with a Friend</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Finch. All rights reserved.</p>
          <p className="footer-sponsors">
            Sponsored by <strong>AggieX</strong> · <strong>Aggies Create</strong> · <strong>Meloy Entrepreneurship</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
