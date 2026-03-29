import { useState, useRef } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './FAQ.css';

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

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { q: 'How does Finch tailor my resume?', a: 'Finch uses AI to analyze the job description and match it with your LinkedIn profile data. It generates a role-specific resume with optimized keywords, reformatted experience bullets, and ATS-compatible formatting — all in under 10 seconds.' },
    { q: 'Which job platforms does the Chrome extension work with?', a: 'The Finch extension currently supports Greenhouse, Lever, and Workday — the three most common ATS platforms used by major tech companies and Fortune 500 employers. We\'re actively expanding platform support.' },
    { q: 'Does Finch auto-submit my applications?', a: 'No — Finch always stops at the final review page. You review everything the extension has filled in, then you click submit yourself. You stay in control of every single application.' },
    { q: 'Is my LinkedIn data safe?', a: 'Absolutely. Your data is used only to generate tailored application materials. We never sell or share your data with third parties. We follow best practices for data security and have a clear privacy policy.' },
    { q: 'Can I use Finch for free?', a: 'We\'re currently in early access and finalizing our pricing. Sign up for the waitlist to get notified when we launch — early members will receive exclusive founding member benefits.' },
    { q: 'What makes Finch different from mass-apply tools?', a: 'Mass-apply tools optimize for volume — they blast hundreds of generic applications. Finch optimizes for quality. Every application is tailored to the specific role, giving you a higher probability of landing an interview with fewer total applications.' },
    { q: 'Which schools can use Finch?', a: 'We\'re launching first at Texas A&M University, but Finch is available to any student. We plan to expand with university partnerships to additional R1 engineering schools soon.' },
  ];

  return (
    <main>
      <section className="section faq-page-section" id="faq">
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
