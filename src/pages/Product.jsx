import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';
import Magnetic from '../components/Magnetic';
import Tilt from '../components/Tilt';
import './Product.css';

const steps = [
  {
    number: '01',
    title: 'Connect LinkedIn',
    description: 'Link your LinkedIn profile once. Finch imports your skills, experience, and education to build a rich candidate profile automatically.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><rect x="8" y="4" width="32" height="40" rx="4" stroke="var(--orange)" strokeWidth="2.5"/><circle cx="24" cy="18" r="6" stroke="var(--orange)" strokeWidth="2"/><path d="M14 36c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    number: '02',
    title: 'Browse & Match',
    description: 'Search for roles by pasting a LinkedIn URL or entering keywords. Finch\'s matching algorithm scores each job against your profile.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><circle cx="20" cy="20" r="14" stroke="var(--orange)" strokeWidth="2.5"/><path d="M30 30l12 12" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round"/><path d="M14 20h12M20 14v12" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/></svg>
    ),
  },
  {
    number: '03',
    title: 'AI Tailors Your Materials',
    description: 'In under 10 seconds, Finch generates a role-specific resume and personalized cover letter — ATS-optimized and formatted in LaTeX.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><rect x="6" y="4" width="36" height="40" rx="4" stroke="var(--orange)" strokeWidth="2.5"/><line x1="14" y1="14" x2="34" y2="14" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"/><line x1="14" y1="20" x2="30" y2="20" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/><line x1="14" y1="26" x2="26" y2="26" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" opacity="0.4"/><path d="M32 35l2 2 4-4" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    number: '04',
    title: 'Extension Autofills',
    description: 'The Chrome extension detects Greenhouse, Lever, or Workday. It fills every field, uploads your PDF, and pauses at the final review.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="32" rx="4" stroke="var(--orange)" strokeWidth="2.5"/><path d="M4 16h40" stroke="var(--orange)" strokeWidth="2"/><circle cx="10" cy="12" r="1.5" fill="var(--orange)"/><circle cx="16" cy="12" r="1.5" fill="var(--orange)" opacity="0.6"/><circle cx="22" cy="12" r="1.5" fill="var(--orange)" opacity="0.4"/><rect x="12" y="22" width="24" height="4" rx="2" fill="var(--orange)" opacity="0.2"/><rect x="12" y="30" width="16" height="4" rx="2" fill="var(--orange)" opacity="0.15"/></svg>
    ),
  },
  {
    number: '05',
    title: 'You Review & Submit',
    description: 'Finch always stops at the final review page. You check everything, then click submit. Every application is intentional.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="var(--orange)" strokeWidth="2.5"/><path d="M16 24l6 6 12-12" stroke="var(--orange)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
];

const ResumeSimulation = () => (
  <div className="sim-resume">
    <div className="sim-pane">
      <div className="sim-pane-title">Job Description</div>
      <div className="sim-line mid"></div>
      <div className="sim-line short"></div>
      <div className="sim-line"></div>
      <div className="sim-line short"></div>
    </div>
    <div className="sim-pane">
      <div className="sim-pane-title">Finch Resume</div>
      <div className="sim-line short"></div>
      <div className="sim-line sim-keyword"></div>
      <div className="sim-line short sim-keyword"></div>
      <div className="sim-line mid"></div>
      <div className="sim-scanner"></div>
    </div>
  </div>
);

const CoverLetterSimulation = () => (
  <div className="sim-cl">
    <div className="sim-cl-header">
      <div className="sim-pane-title" style={{margin: 0}}>Cover Letter Editor</div>
      <div className="sim-cl-dropdown">Tone: Professional ▼</div>
    </div>
    <div className="sim-cl-body">
      <div className="sim-typing-line"></div>
      <div className="sim-typing-line"></div>
      <div className="sim-typing-line"></div>
      <div className="sim-typing-line"></div>
      <div className="sim-typing-line"></div>
    </div>
  </div>
);

const AutofillSimulation = () => (
  <div className="sim-form">
    <div className="sim-form-header">
      <div className="sim-form-title">Workday Application</div>
      <div className="sim-btn">Autofill with Finch</div>
    </div>
    <div className="sim-input">
      <span className="sim-input-label">First Name</span>
      <div className="sim-filled-val"></div>
      <div className="sim-check"></div>
    </div>
    <div className="sim-input">
      <span className="sim-input-label">LinkedIn URL</span>
      <div className="sim-filled-val"></div>
      <div className="sim-check"></div>
    </div>
    <div className="sim-input">
      <span className="sim-input-label">Resume Upload</span>
      <div className="sim-filled-val"></div>
      <div className="sim-check"></div>
    </div>
  </div>
);

const DashboardSimulation = () => (
  <div className="sim-dash">
    <div className="sim-col">
      <div className="sim-col-title">Applied (34)</div>
      <div className="sim-card"></div>
      <div className="sim-card moving"></div>
      <div className="sim-card"></div>
    </div>
    <div className="sim-col">
      <div className="sim-col-title">Interview (5)</div>
      <div className="sim-card"></div>
    </div>
    <div className="sim-col">
      <div className="sim-col-title">Offer (1)</div>
      <div className="sim-card"></div>
    </div>
  </div>
);

const features = [
  {
    title: 'ATS-Optimized Resumes',
    description: 'Every resume is tailored to the specific job description. Keywords extracted, bullets rewritten, formatting perfected. Your resume passes ATS filters before a recruiter ever sees it.',
    detail: 'Powered by LangChain + LaTeX',
    align: 'left',
    simulation: <ResumeSimulation />,
  },
  {
    title: 'Personalized Cover Letters',
    description: 'Not a template — a real, role-specific cover letter that connects your experience to the job requirements. Choose your tone: formal, conversational, or balanced.',
    detail: 'Tone controls included',
    align: 'right',
    simulation: <CoverLetterSimulation />,
  },
  {
    title: 'One-Click Form Autofill',
    description: 'The Chrome extension detects ATS application pages and fills every field — personal info, work history, education, file uploads — all from your Finch profile.',
    detail: 'Greenhouse · Lever · Workday',
    align: 'left',
    simulation: <AutofillSimulation />,
  },
  {
    title: 'Application Dashboard',
    description: 'Track every application in one place. See your tailored resumes, cover letters, ATS alignment scores, and application status — all organized by role.',
    detail: 'Complete visibility',
    align: 'right',
    simulation: <DashboardSimulation />,
  },
];



export default function Product() {
  const [activeStep, setActiveStep] = useState(0);


  return (
    <main className="product-page">
      {/* ===== HERO ===== */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <span className="section-label">How It Works</span>
            <h1>From LinkedIn to <span className="gradient-text">Interview</span></h1>
            <p className="product-hero-subtitle">
              Five steps. Under 60 seconds. Every application tailored, every form filled, every submission intentional.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STEPPER ===== */}
      <section className="section stepper-section" id="steps">
        <div className="container">
          <div className="stepper">
            <div className="stepper-nav">
              {steps.map((step, i) => (
                <button
                  key={i}
                  className={`stepper-dot ${i === activeStep ? 'active' : ''} ${i < activeStep ? 'completed' : ''}`}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Step ${i + 1}: ${step.title}`}
                >
                  <span className="dot-number">{step.number}</span>
                  <span className="dot-label">{step.title}</span>
                </button>
              ))}
              <div className="stepper-line">
                <div className="stepper-line-fill" style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}></div>
              </div>
            </div>
            <AnimateOnScroll>
              <div className="stepper-content">
                <div className="stepper-icon">
                  {steps[activeStep].icon}
                </div>
                <div className="stepper-text">
                  <span className="stepper-step-label">Step {steps[activeStep].number}</span>
                  <h3>{steps[activeStep].title}</h3>
                  <p>{steps[activeStep].description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== FEATURE SHOWCASE ===== */}
      <section className="section feature-showcase" id="feature-details">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <span className="section-label">Features</span>
              <h2>Built to <span className="gradient-text">Win You Interviews</span></h2>
            </div>
          </AnimateOnScroll>
          <div className="showcase-list">
            {features.map((feat, i) => (
              <AnimateOnScroll key={i}>
                <div className={`showcase-row ${feat.align}`}>
                  <div className="showcase-visual">
                    <div className="showcase-mockup">
                      <div className="mockup-bar">
                        <span className="mockup-dot"></span>
                        <span className="mockup-dot"></span>
                        <span className="mockup-dot"></span>
                      </div>
                      {feat.simulation}
                    </div>
                  </div>
                  <div className="showcase-info">
                    <h3>{feat.title}</h3>
                    <p>{feat.description}</p>
                    <span className="showcase-detail">{feat.detail}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>



      {/* ===== FINAL CTA ===== */}
      <section className="section final-cta" id="cta">
        <div className="container">
          <AnimateOnScroll>
            <div className="cta-card">
              <h2>Ready to Land More Interviews?</h2>
              <p>Join thousands of students who are applying smarter, not harder.</p>
              <div className="cta-buttons">
                <Magnetic strength={0.4}>
                  <Link to="/signup" className="btn btn-primary btn-lg" id="final-signup-btn">
                    Sign Up Free
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <a href="#" className="btn btn-outline-white btn-lg" id="final-extension-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                    Download Extension
                  </a>
                </Magnetic>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
