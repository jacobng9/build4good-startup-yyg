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
  },
  {
    name: 'Jose Tirado-R',
    role: 'CTO & Co-founder',
    bio: 'Industrial Engineering, Texas A&M. Systems thinking, operations, and analytical problem-solving.',
    email: 'jmtirador@tamu.edu',
    image: '/images/jose.jpeg',
    linkedin: 'https://www.linkedin.com/in/jose-tirado-r/',
  },
  {
    name: 'Carlos Luna Peña',
    role: 'CTO & Co-founder',
    bio: 'CS (Cybersecurity minor, Statistics emphasis), Texas A&M. Built original backend. Python, LangChain, LaTeX generation, LinkedIn scraping.',
    email: 'carlunpen@tamu.edu',
    image: '/images/carlos.jpeg',
    linkedin: 'https://www.linkedin.com/in/carlos-luna-pena/',
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
