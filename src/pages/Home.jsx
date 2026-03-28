import { useState, useEffect, useRef } from 'react';
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

function FAQItem({ question, answer, isOpen, onClick }) {
  const contentRef = useRef(null);
  
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
        <span>{question}</span>
        <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className="faq-answer"
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px' }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);
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

  const faqs = [
    { q: 'How does Finch tailor my resume?', a: 'Finch uses AI to analyze the job description and match it with your LinkedIn profile data. It generates a role-specific resume with optimized keywords, reformatted experience bullets, and ATS-compatible formatting — all in under 10 seconds.' },
    { q: 'Which job platforms does the Chrome extension work with?', a: 'The Finch extension currently supports Greenhouse, Lever, and Workday — the three most common ATS platforms used by major tech companies and Fortune 500 employers. We\'re actively expanding platform support.' },
    { q: 'Does Finch auto-submit my applications?', a: 'No — Finch always stops at the final review page. You review everything the extension has filled in, then you click submit yourself. You stay in control of every single application.' },
    { q: 'Is my LinkedIn data safe?', a: 'Absolutely. Your data is used only to generate tailored application materials. We never sell or share your data with third parties. We follow best practices for data security and have a clear privacy policy.' },
    { q: 'Can I use Finch for free?', a: 'Yes! Our Starter plan begins at just $3.99/month for 15 applications. We also offer one-time trial bundles starting at $1.99 for 5 applications so you can try Finch risk-free before committing.' },
    { q: 'What makes Finch different from mass-apply tools?', a: 'Mass-apply tools optimize for volume — they blast hundreds of generic applications. Finch optimizes for quality. Every application is tailored to the specific role, giving you a higher probability of landing an interview with fewer total applications.' },
    { q: 'Which schools can use Finch?', a: 'We\'re launching first at Texas A&M University, but Finch is available to any student. We plan to expand with university partnerships to additional R1 engineering schools soon.' },
  ];

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
              <a href="#signup" className="btn btn-primary btn-lg" id="hero-signup-btn">
                Sign Up Free
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="#" className="btn btn-secondary btn-lg" id="hero-extension-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                Download Extension
              </a>
            </Magnetic>
          </div>
          <div className="hero-trust">
            <span>🎓 Built at Texas A&M</span>
            <span className="trust-divider">·</span>
            <span>⚡ Under 60s per application</span>
            <span className="trust-divider">·</span>
            <span>🛡️ You always submit manually</span>
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
                <div className="problem-icon">📋</div>
                <h4>Generic Applications</h4>
                <p>Same resume, same cover letter, every job. ATS systems filter you out before a human ever sees your name.</p>
              </Tilt>
            </AnimateOnScroll>
            <AnimateOnScroll delay={2}>
              <Tilt className="problem-card" tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div className="problem-icon">⏳</div>
                <h4>20–30 Minutes Each</h4>
                <p>Manually filling forms, uploading documents, re-entering the same data. Every. Single. Time.</p>
              </Tilt>
            </AnimateOnScroll>
            <AnimateOnScroll delay={3}>
              <Tilt className="problem-card" tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div className="problem-icon">👻</div>
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
                    <div className="success-icon">🎉</div>
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

      {/* ===== FAQ ===== */}
      <section className="section faq" id="faq">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <span className="section-label">FAQ</span>
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about Finch.</p>
            </div>
          </AnimateOnScroll>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={Math.min(i + 1, 5)}>
                <FAQItem
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFAQ === i}
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
