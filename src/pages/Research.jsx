import React from 'react';
import { researchAreas } from '../data/research';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Sparkles, FlaskConical, AlertCircle, FileText } from 'lucide-react';

export function Research() {
  return (
    <>
      <Seo 
        title="Research & Experiments | ZALTRON ROBOTICS" 
        description="Active research directions in Physical AI, SLAM odometry, Human-Robot Interaction, and heterogeneous fleet coordination."
      />

      <main className="section-spacing bg-grid-tech">
        <div className="container">
          <SectionHeader 
            eyebrow="LABS & EXPERIMENTS"
            title="Scientific Inquiry in the Physical World"
            description="Our research prioritizes empirical verification over speculative hype. Explore our active research questions, hardware testbeds, and experimental hypotheses."
          />

          {/* Research Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {researchAreas.map((area) => (
              <div key={area.id} className="card-tech" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="eyebrow" style={{ fontSize: '0.625rem' }}>{area.eyebrow}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)', background: 'var(--accent-blue-light)', padding: '0.25rem 0.6rem', borderRadius: '2px' }}>
                    {area.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>{area.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>{area.summary}</p>

                {/* Research Hypothesis */}
                <div style={{ padding: '1rem', background: 'var(--bg-surface-elevated)', borderRadius: '2px', borderLeft: '2px solid var(--accent-blue)', marginBottom: '1.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>CORE HYPOTHESIS:</span>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-primary)', marginTop: '0.25rem', fontStyle: 'italic' }}>
                    "{area.hypothesis}"
                  </p>
                </div>

                {/* Methods */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>EXPERIMENTAL METHODS:</span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.4rem' }}>
                    {area.methods.map((m, idx) => (
                      <li key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                        • {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                  <b>STAGE:</b> {area.statusHonest}
                </div>
              </div>
            ))}
          </div>

          {/* Elegant State: Peer-Reviewed Publications & Lab Notes */}
          <div className="card-tech" style={{ padding: '3rem', textAlign: 'center', maxWidth: '780px', margin: '0 auto', background: 'var(--bg-surface)' }}>
            <FlaskConical size={32} color="var(--accent-blue)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Research Archive Is Taking Shape</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 1.5rem' }}>
              We do not publish fabricated papers or claim false peer review. As our empirical testbed experiments on ZALTRON V1 and Scout conclude, technical whitepapers and open datasets will be released directly through our GitHub repository.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Button href="https://github.com/zaltronrobotics" variant="secondary">
                Follow Technical Repositories
              </Button>
              <Button to="/journal" variant="primary">
                Read Engineering Journal
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
