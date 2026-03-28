import { useState } from 'react';
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

const features = [
  {
    title: 'ATS-Optimized Resumes',
    description: 'Every resume is tailored to the specific job description. Keywords extracted, bullets rewritten, formatting perfected. Your resume passes ATS filters before a recruiter ever sees it.',
    detail: 'Powered by LangChain + LaTeX',
    align: 'left',
  },
  {
    title: 'Personalized Cover Letters',
    description: 'Not a template — a real, role-specific cover letter that connects your experience to the job requirements. Choose your tone: formal, conversational, or balanced.',
    detail: 'Tone controls included',
    align: 'right',
  },
  {
    title: 'One-Click Form Autofill',
    description: 'The Chrome extension detects ATS application pages and fills every field — personal info, work history, education, file uploads — all from your Finch profile.',
    detail: 'Greenhouse · Lever · Workday',
    align: 'left',
  },
  {
    title: 'Application Dashboard',
    description: 'Track every application in one place. See your tailored resumes, cover letters, ATS alignment scores, and application status — all organized by role.',
    detail: 'Complete visibility',
    align: 'right',
  },
];

const monthlyPlans = [
  { name: 'Starter', price: '$3.99', period: '/mo', apps: '15 apps/mo', desc: 'A few targeted roles', popular: false },
  { name: 'Core', price: '$6.99', period: '/mo', apps: '40 apps/mo', desc: 'Actively recruiting weekly', popular: true },
  { name: 'Pro', price: '$9.99', period: '/mo', apps: '75 apps/mo', desc: 'Going hard this season', popular: false },
  { name: 'Max', price: '$12.99', period: '/mo', apps: '120 apps/mo', desc: 'Everything competitive', popular: false },
];

const bundles = [
  { name: 'Trial', price: '$1.99', apps: '5 apps', desc: 'Try before committing' },
  { name: 'Standard', price: '$4.99', apps: '20 apps', desc: 'Specific list, no subscription' },
  { name: 'Plus', price: '$8.99', apps: '50 apps', desc: 'One big push' },
];

export default function Product() {
  const [activeStep, setActiveStep] = useState(0);
  const [pricingTab, setPricingTab] = useState('monthly');

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
                      <div className="mockup-content">
                        <div className="mockup-line w-80"></div>
                        <div className="mockup-line w-60"></div>
                        <div className="mockup-line w-70"></div>
                        <div className="mockup-line w-50"></div>
                        <div className="mockup-accent"></div>
                      </div>
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

      {/* ===== PRICING ===== */}
      <section className="section pricing-section" id="pricing">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <span className="section-label">Pricing</span>
              <h2>Plans That <span className="gradient-text">Scale With You</span></h2>
              <p>Start free, upgrade when you're ready. Cancel anytime.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="pricing-tabs">
              <button
                className={`pricing-tab ${pricingTab === 'monthly' ? 'active' : ''}`}
                onClick={() => setPricingTab('monthly')}
                id="tab-monthly"
              >
                Monthly Plans
              </button>
              <button
                className={`pricing-tab ${pricingTab === 'bundles' ? 'active' : ''}`}
                onClick={() => setPricingTab('bundles')}
                id="tab-bundles"
              >
                One-Time Bundles
              </button>
            </div>
          </AnimateOnScroll>

          {pricingTab === 'monthly' ? (
            <div className="pricing-grid monthly">
              {monthlyPlans.map((plan, i) => (
                <AnimateOnScroll key={plan.name} delay={i + 1}>
                  <Tilt className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                    {plan.popular && <span className="popular-badge">Most Popular</span>}
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price">
                      <span className="price-amount">{plan.price}</span>
                      <span className="price-period">{plan.period}</span>
                    </div>
                    <span className="plan-apps">{plan.apps}</span>
                    <p className="plan-desc">{plan.desc}</p>
                    <a href="#signup" className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-sm`}>
                      Get Started
                    </a>
                  </Tilt>
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            <div className="pricing-grid bundles">
              {bundles.map((bundle, i) => (
                <AnimateOnScroll key={bundle.name} delay={i + 1}>
                  <Tilt className="pricing-card">
                    <h3 className="plan-name">{bundle.name}</h3>
                    <div className="plan-price">
                      <span className="price-amount">{bundle.price}</span>
                      <span className="price-period">one-time</span>
                    </div>
                    <span className="plan-apps">{bundle.apps}</span>
                    <p className="plan-desc">{bundle.desc}</p>
                    <a href="#signup" className="btn btn-secondary btn-sm">
                      Buy Now
                    </a>
                  </Tilt>
                </AnimateOnScroll>
              ))}
            </div>
          )}
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
                  <a href="#signup" className="btn btn-primary btn-lg" id="final-signup-btn">
                    Sign Up Free
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
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
