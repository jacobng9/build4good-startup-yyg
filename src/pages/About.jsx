import { useState } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import Magnetic from '../components/Magnetic';
import Tilt from '../components/Tilt';
import './About.css';

const team = [
  {
    name: 'Nicanor Garza-Zazueta',
    role: 'CEO & Co-founder',
    bio: 'Industrial Distribution Engineering, Texas A&M. Meloy Fellows Grant recipient. Drives strategy, sales, and team building.',
    email: 'nicanor14gz@tamu.edu',
    image: '/images/nicanor.png',
    linkedin: 'https://www.linkedin.com/in/nicanor14gz/',
    instagram: 'https://www.instagram.com/nicanor14gz/',
  },
  {
    name: 'Jose Tirado-R',
    role: 'CTO & Co-founder',
    bio: 'Industrial Engineering, Texas A&M. Systems thinking, operations, and analytical problem-solving.',
    email: 'jmtirador@tamu.edu',
    image: '/images/jose.jpeg',
    linkedin: 'https://www.linkedin.com/in/jose-tirado-r/',
    instagram: 'https://www.instagram.com/josetirador/',
  },
  {
    name: 'Carlos Luna Peña',
    role: 'CTO & Co-founder',
    bio: 'CS (Cybersecurity minor, Statistics emphasis), Texas A&M. Built original backend. Python, LangChain, LaTeX generation, LinkedIn scraping.',
    email: 'carlunpen@tamu.edu',
    image: '/images/carlos.jpeg',
    linkedin: 'https://www.linkedin.com/in/carlos-luna-pena/',
    instagram: 'https://www.instagram.com/carlunpen/',
  },
];

export default function About() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <main className="about-page">
      {/* ===== HERO ===== */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="section-label">Our Story</span>
            <h1>Built by Students, <span className="gradient-text">for Students</span></h1>
            <p className="about-hero-subtitle">
              Finch was born from frustration. We know the pain of mass-applying because we lived it.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ORIGIN STORY ===== */}
      <section className="section origin">
        <div className="container">
          <div className="origin-grid">
            <AnimateOnScroll>
              <div className="origin-story">
                <h2>The Founding Moment</h2>
                <p>
                  It started with Carlos. Midway through his junior year at Texas A&M, he'd submitted 
                  over 120 internship applications. He spent 25 minutes on each one — tailoring his resume 
                  by hand, writing cover letters from scratch, and filling out the same forms over and over.
                </p>
                <p>
                  His response rate? Under 4%. More than 100 hours of work for a handful of automated 
                  rejection emails. He knew there had to be a better way.
                </p>
                <p>
                  So he built one. Carlos prototyped the first version of Finch's AI resume engine in a 
                  weekend — a LangChain pipeline that took a job description and his LinkedIn profile, 
                  then generated a tailored resume in seconds. When he showed Nicanor and Jose, they 
                  immediately saw the potential. Finch was born.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={2}>
              <div className="origin-values">
                <Tilt className="value-card">
                  <h4>Mission</h4>
                  <p>Eliminate the inefficiency of job applications so students can focus on what matters — finding the right role and preparing to excel.</p>
                </Tilt>
                <Tilt className="value-card">
                  <h4>Vision</h4>
                  <p>A world where every qualified student gets a fair shot at their dream internship — regardless of how many hours they can spend applying.</p>
                </Tilt>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== TARGET AUDIENCE ===== */}
      <section className="section audience-section">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <span className="section-label">Who We Serve</span>
              <h2>Built for <span className="gradient-text">Ambitious Students</span></h2>
            </div>
          </AnimateOnScroll>
          <div className="audience-grid">
            <AnimateOnScroll delay={1}>
              <Tilt className="audience-card glass-card">
                <h4>The Carpet Bomber</h4>
                <p>150+ applications, 3% response rate. Applies everywhere but nothing sticks. Needs Finch to reduce volume and increase targeting.</p>
              </Tilt>
            </AnimateOnScroll>
            <AnimateOnScroll delay={2}>
              <Tilt className="audience-card glass-card">
                <h4>The Selective Applier</h4>
                <p>Strong resume, 10–15 top-choice roles. Spends 45 min per app tailoring manually. Needs Finch for speed without sacrificing quality.</p>
              </Tilt>
            </AnimateOnScroll>
            <AnimateOnScroll delay={3}>
              <Tilt className="audience-card glass-card">
                <h4>The First-Timer</h4>
                <p>Never applied before and intimidated by the process. Needs Finch as a guide to understand what a great application looks like.</p>
              </Tilt>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="section team-section" id="team">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <span className="section-label">The Team</span>
              <h2>Meet the <span className="gradient-text">Founders</span></h2>
              <p>Three Aggies united by a shared frustration and a vision for better outcomes.</p>
            </div>
          </AnimateOnScroll>
          <div className="team-grid">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i + 1}>
                <Tilt className="team-card">
                  <div className="team-photo">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-photo-link" aria-label={`${member.name} on LinkedIn`}>
                      <img src={member.image} alt={member.name} />
                      <div className="team-photo-overlay"></div>
                    </a>
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <span className="team-role">{member.role}</span>
                    <p>{member.bio}</p>
                    <a href={`mailto:${member.email}`} className="team-email">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      {member.email}
                    </a>
                    <div className="team-social-links">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label={`${member.name} on LinkedIn`}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label={`${member.name} on Instagram`}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </Tilt>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPONSORS ===== */}
      <section className="section sponsors" id="sponsors">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <span className="section-label">Supported By</span>
              <h2>Our Sponsors</h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="sponsors-bar">
              <div className="sponsor-item">
                <a href="https://aggiex.org/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                  <div className="sponsor-logo-placeholder">AggieX</div>
                </a>
              </div>
              <div className="sponsor-item">
                <a href="https://www.aggiescreate.com/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                  <div className="sponsor-logo-placeholder">Aggies Create</div>
                </a>
              </div>
              <div className="sponsor-item">
                <a href="https://engineering.tamu.edu/student-life/eep/index.html" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                  <div className="sponsor-logo-placeholder">Meloy Entrepreneurship</div>
                </a>
              </div>
            </div>
            <p className="sponsors-note">Texas A&M University</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <span className="section-label">Get In Touch</span>
              <h2>Contact Us</h2>
              <p>Have a question, partnership idea, or just want to say hi? We'd love to hear from you.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="contact-wrapper">
              {submitted ? (
                <div className="contact-success" id="contact-success">
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      className={`input-field ${errors.name ? 'error' : ''}`}
                      value={form.name}
                      onChange={(e) => { setForm({...form, name: e.target.value}); setErrors({...errors, name: ''}); }}
                      placeholder="Your name"
                    />
                    {errors.name && <span className="input-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      className={`input-field ${errors.email ? 'error' : ''}`}
                      value={form.email}
                      onChange={(e) => { setForm({...form, email: e.target.value}); setErrors({...errors, email: ''}); }}
                      placeholder="you@example.com"
                    />
                    {errors.email && <span className="input-error">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      className={`input-field ${errors.message ? 'error' : ''}`}
                      value={form.message}
                      onChange={(e) => { setForm({...form, message: e.target.value}); setErrors({...errors, message: ''}); }}
                      placeholder="Tell us what's on your mind..."
                    />
                    {errors.message && <span className="input-error">{errors.message}</span>}
                  </div>
                  <Magnetic strength={0.2}>
                    <button type="submit" className="btn btn-primary btn-lg" id="contact-submit">
                      Send Message
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                    </button>
                  </Magnetic>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
