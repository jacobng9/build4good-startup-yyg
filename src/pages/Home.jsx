import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';
import Magnetic from '../components/Magnetic';
import Tilt from '../components/Tilt';
import { useScrollAnimation, useCountUp } from '../hooks/useAnimations';
import './Home.css';

function StatCounter({ end, suffix = '', label }) {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const [count, start] = useCountUp(end, 2000);

  useEffect(() => {
    if (isVisible) start();
  }, [isVisible, start]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setEmail('');
  };

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
          <div className="hero-grid-bg"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Now accepting early access signups
          </div>
          <h1>
            Turn Applications Into{' '}
            <span className="gradient-text">Interviews</span>
          </h1>
          <p className="hero-subtitle">
            AI-tailored resumes, instant cover letters, and one-click ATS autofill.
            Apply to internships in under 60 seconds — without sacrificing quality.
          </p>
          <div className="hero-ctas">
            <Magnetic strength={0.4}>
              <Link to="/signup" className="btn btn-primary btn-lg" id="hero-signup-btn">
                Sign Up Free
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="#" className="btn btn-secondary btn-lg" id="hero-extension-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                Download Extension
              </a>
            </Magnetic>
          </div>
          <div className="hero-trust">
            <span>Built at Texas A&M</span>
            <span className="trust-divider">·</span>
            <span>Under 60s per application</span>
            <span className="trust-divider">·</span>
            <span>You always submit manually</span>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM / SOLUTION ===== */}
      <section className="section problem-solution" id="problem">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <span className="section-label">The Problem</span>
              <h2>Mass-Applying Doesn't Work</h2>
              <p>Students submit 100–200 applications per cycle with generic materials. The result? Low response rates, wasted time, and constant ghosting.</p>
            </div>
          </AnimateOnScroll>
          <div className="problem-grid">
            <AnimateOnScroll delay={1}>
              <Tilt className="problem-card" tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <h4>Generic Applications</h4>
                <p>Same resume, same cover letter, every job. ATS systems filter you out before a human ever sees your name.</p>
              </Tilt>
            </AnimateOnScroll>
            <AnimateOnScroll delay={2}>
              <Tilt className="problem-card" tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <h4>20–30 Minutes Each</h4>
                <p>Manually filling forms, uploading documents, re-entering the same data. Every. Single. Time.</p>
              </Tilt>
            </AnimateOnScroll>
            <AnimateOnScroll delay={3}>
              <Tilt className="problem-card" tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <h4>Zero Feedback</h4>
                <p>You never know why you got rejected. No feedback loop, no way to improve, just silence.</p>
              </Tilt>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll>
            <div className="solution-bridge">
              <div className="bridge-line"></div>
              <div className="bridge-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" width="28" height="28"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </div>
              <div className="bridge-line"></div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="section-header">
              <span className="section-label">The Solution</span>
              <h2>Finch: <span className="gradient-text">Quality Over Quantity</span></h2>
              <p>AI-optimized applications that match you to roles, tailor your materials, and autofill forms — in seconds.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar" id="stats">
        <div className="container">
          <div className="stats-grid">
            <StatCounter end={60} suffix="s" label="Per Application" />
            <StatCounter end={3} suffix="" label="ATS Platforms" />
            <StatCounter end={10} suffix="s" label="Resume Generation" />
            <StatCounter end={100} suffix="%" label="You Control Submit" />
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section features" id="features">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <span className="section-label">Features</span>
              <h2>Everything You Need to <span className="gradient-text">Land Interviews</span></h2>
              <p>Three powerful tools working together in one seamless workflow.</p>
            </div>
          </AnimateOnScroll>
          <div className="features-grid">
            <AnimateOnScroll delay={1}>
              <Tilt className="feature-card glass-card">
                <div className="feature-icon-wrap">
                  <svg viewBox="0 0 48 48" fill="none"><rect x="6" y="4" width="36" height="40" rx="4" stroke="var(--orange)" strokeWidth="2.5" fill="none"/><line x1="14" y1="14" x2="34" y2="14" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"/><line x1="14" y1="20" x2="30" y2="20" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/><line x1="14" y1="26" x2="26" y2="26" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" opacity="0.4"/><circle cx="35" cy="35" r="10" fill="var(--orange)" opacity="0.15"/><path d="M32 35l2 2 4-4" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3>AI Resume Tailoring</h3>
                <p>Your resume, rewritten for every role. ATS-optimized keywords, reformatted bullets, and LaTeX-quality formatting — generated in under 10 seconds.</p>
                <div className="feature-tag">LangChain + LaTeX</div>
              </Tilt>
            </AnimateOnScroll>
            <AnimateOnScroll delay={2}>
              <Tilt className="feature-card glass-card">
                <div className="feature-icon-wrap">
                  <svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="32" rx="4" stroke="var(--orange)" strokeWidth="2.5" fill="none"/><circle cx="24" cy="24" r="8" stroke="var(--orange)" strokeWidth="2" fill="none"/><path d="M30 18l6-6" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"/><path d="M12 36h6v-8" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/></svg>
                </div>
                <h3>Chrome Extension Autofill</h3>
                <p>Detects Greenhouse, Lever, and Workday applications. Fills every field, uploads your PDF, and pauses at the final review — you always submit.</p>
                <div className="feature-tag">Manifest V3</div>
              </Tilt>
            </AnimateOnScroll>
            <AnimateOnScroll delay={3}>
              <Tilt className="feature-card glass-card">
                <div className="feature-icon-wrap">
                  <svg viewBox="0 0 48 48" fill="none"><rect x="8" y="4" width="32" height="40" rx="4" stroke="var(--orange)" strokeWidth="2.5" fill="none"/><circle cx="24" cy="18" r="6" stroke="var(--orange)" strokeWidth="2" fill="none"/><path d="M14 36c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
                </div>
                <h3>LinkedIn Integration</h3>
                <p>Connect once, apply everywhere. Finch imports your profile — skills, experience, education — to build a rich candidate profile automatically.</p>
                <div className="feature-tag">OAuth + Profile Sync</div>
              </Tilt>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== DEMO ===== */}
      <section className="section demo-section" id="demo">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <span className="section-label">See It In Action</span>
              <h2>Watch <span className="gradient-text">Finch Work</span></h2>
              <p>From LinkedIn to submitted application in under 60 seconds. See how Finch transforms your job search workflow.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={1}>
            <div className="demo-video-wrapper">
              <div className="demo-browser-frame">
                <div className="demo-browser-bar">
                  <div className="demo-browser-dots">
                    <span className="demo-dot red"></span>
                    <span className="demo-dot yellow"></span>
                    <span className="demo-dot green"></span>
                  </div>
                  <div className="demo-browser-url">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M12 2L12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    <span>applyfinch.com/demo</span>
                  </div>
                </div>
                <div className="demo-video-container">
                  <div className="demo-placeholder">
                    <div className="demo-play-btn">
                      <svg viewBox="0 0 24 24" fill="var(--white)" width="32" height="32">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="demo-placeholder-content">
                      <div className="demo-screen-mockup">
                        <div className="demo-mock-sidebar">
                          <div className="demo-mock-logo"></div>
                          <div className="demo-mock-nav-item active"></div>
                          <div className="demo-mock-nav-item"></div>
                          <div className="demo-mock-nav-item"></div>
                        </div>
                        <div className="demo-mock-main">
                          <div className="demo-mock-header"></div>
                          <div className="demo-mock-cards">
                            <div className="demo-mock-card">
                              <div className="demo-mock-card-line w80"></div>
                              <div className="demo-mock-card-line w60"></div>
                              <div className="demo-mock-card-tag"></div>
                            </div>
                            <div className="demo-mock-card highlight">
                              <div className="demo-mock-card-line w80"></div>
                              <div className="demo-mock-card-line w60"></div>
                              <div className="demo-mock-card-tag"></div>
                            </div>
                            <div className="demo-mock-card">
                              <div className="demo-mock-card-line w80"></div>
                              <div className="demo-mock-card-line w60"></div>
                              <div className="demo-mock-card-tag"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="demo-coming-soon">Full demo video coming soon</span>
                  </div>
                </div>
              </div>
              <div className="demo-features-row">
                <div className="demo-feature-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" width="18" height="18"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  <span>Under 60 seconds</span>
                </div>
                <div className="demo-feature-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" width="18" height="18"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>You always review</span>
                </div>
                <div className="demo-feature-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" width="18" height="18"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  <span>Your data stays safe</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== WAITLIST / EMAIL CAPTURE ===== */}
      <section className="section waitlist" id="signup">
        <div className="container">
          <AnimateOnScroll>
            <div className="waitlist-card">
              <div className="waitlist-content">
                <span className="section-label">Early Access</span>
                <h2>Join the Waitlist</h2>
                <p>Be the first to know when Finch launches. Get early access and exclusive pricing for founding members.</p>
                {submitted ? (
                  <div className="waitlist-success" id="waitlist-success">
                    <h3>You're on the list!</h3>
                    <p>We'll email you when Finch is ready to launch.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="waitlist-form" id="waitlist-form">
                    <div className="input-group">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                        placeholder="you@tamu.edu"
                        className={`input-field ${emailError ? 'error' : ''}`}
                        id="waitlist-email"
                      />
                      <button type="submit" className="btn btn-primary" id="waitlist-submit">
                        Join Waitlist
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </button>
                    </div>
                    {emailError && <span className="input-error">{emailError}</span>}
                    <span className="waitlist-note">No spam, ever. Unsubscribe anytime.</span>
                  </form>
                )}
              </div>
              <div className="waitlist-decoration">
                <div className="deco-ring ring-1"></div>
                <div className="deco-ring ring-2"></div>
                <div className="deco-ring ring-3"></div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

    </main>
  );
}
