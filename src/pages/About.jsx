import React from 'react';
import { site } from '../config/site';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { ShieldCheck, Cpu, Code2, Users, Compass, Eye } from 'lucide-react';

export function About() {
  const principles = [
    {
      title: 'Physical Grounding Over Hype',
      desc: 'We reject marketing hyperbole. Robotics is bound by physics, inertia, friction, and power dissipation. We measure progress by functional mechanical and algorithmic milestones.'
    },
    {
      title: 'Deterministic Safety First',
      desc: 'High-level AI can hallucinate; low-level motor controllers must never do so. We strictly isolate real-time hardware watchdogs from non-deterministic neural networks.'
    },
    {
      title: 'Heterogeneous Specialization',
      desc: 'One universal humanoid is an inefficient answer to specialized tasks. We build purpose-engineered form factors unified by a central fleet coordination intelligence layer.'
    },
    {
      title: 'Transparent Veracity',
      desc: 'We never fabricate customer logos, fake team credentials, artificial specifications, or simulated mass production. What you see is what is currently being researched or prototyped.'
    }
  ];

  return (
    <>
      <Seo 
        title="About ZALTRON ROBOTICS | Mission, Vision & Engineering Principles" 
        description="Learn about ZALTRON ROBOTICS: our mission to build intelligent machines for real-world challenges and our engineering principles."
      />

      <main className="section-spacing bg-grid-tech">
        <div className="container">
          <SectionHeader 
            eyebrow="ABOUT ZALTRON ROBOTICS"
            title="Building Intelligent Machines Grounded in Physical Reality"
            description="ZALTRON ROBOTICS is an emerging robotics and artificial intelligence initiative focused on combining intelligent software with practical physical systems."
          />

          {/* Mission & Vision Split */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div className="card-tech" style={{ padding: '2.5rem' }}>
              <span className="eyebrow" style={{ fontSize: '0.6875rem' }}>OUR MISSION</span>
              <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                Machines for Real-World Challenges.
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                To design and build intelligent machines that operate safely and capably alongside people—taking on hazardous, repetitive, or complex physical tasks through perception, autonomy, and robust mechanical engineering.
              </p>
            </div>

            <div className="card-tech" style={{ padding: '2.5rem' }}>
              <span className="eyebrow" style={{ fontSize: '0.6875rem' }}>OUR VISION</span>
              <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                The Connected Robotics Ecosystem.
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                To pioneer an interconnected family of specialized robots—from reconnaissance scouts and payload carriers to precision manipulators and aerial observers—orchestrated by shared intelligence and unified environmental awareness.
              </p>
            </div>
          </div>

          {/* Engineering Principles */}
          <div style={{ marginBottom: '4rem' }}>
            <SectionHeader 
              eyebrow="OUR FOUNDATION"
              title="Core Engineering Principles"
              description="How we approach the discipline of building autonomous hardware."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {principles.map((p, idx) => (
                <div key={idx} className="card-tech" style={{ padding: '2rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <h4 style={{ fontSize: '1.2rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Long-term Direction & India Origin */}
          <div className="card-tech" style={{ padding: '3rem', background: 'var(--bg-surface)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <span className="eyebrow">GLOBAL AMBITION // ROOTED IN INDIA</span>
                <h3 style={{ fontSize: '1.85rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                  An Independent Engineering Initiative
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
                  ZALTRON ROBOTICS was founded in India as an engineering-led robotics endeavor. We believe world-class robotics systems can be conceived, engineered, and prototyped with resourcefulness, rigorous simulation, and clear physical purpose.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                  <Button to="/robots/zaltron-v1" variant="primary">
                    Explore Flagship V1
                  </Button>
                  <Button to="/careers" variant="secondary">
                    Join Our Mission
                  </Button>
                </div>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-surface-elevated)', borderRadius: '2px', border: '1px solid var(--border-muted)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                  VERIFIED DIRECTORY DETAILS
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>
                  <div><span style={{ color: 'var(--text-muted)' }}>ORGANIZATION:</span> {site.companyName}</div>
                  <div><span style={{ color: 'var(--text-muted)' }}>PRIMARY DOMAIN:</span> Robotics, AI & Automation</div>
                  <div><span style={{ color: 'var(--text-muted)' }}>LOCATION:</span> India</div>
                  <div><span style={{ color: 'var(--text-muted)' }}>PRIMARY CONTACT:</span> {site.email}</div>
                  <div><span style={{ color: 'var(--text-muted)' }}>OPEN REPOSITORY:</span> github.com/zaltronrobotics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
