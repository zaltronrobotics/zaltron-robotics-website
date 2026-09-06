import React from 'react';
import { solutions } from '../data/solutions';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export function Solutions() {
  return (
    <>
      <Seo 
        title="Solutions & Target Applications | ZALTRON ROBOTICS" 
        description="Explore envisioned real-world deployment domains for the ZALTRON robotics ecosystem: logistics, inspection, agriculture, and academic testbeds."
      />

      <main className="section-spacing bg-grid-tech">
        <div className="container">
          <SectionHeader 
            eyebrow="APPLICATION DOMAINS"
            title="Engineered for Practical Utility"
            description="Our robotic platforms are designed with clear target applications in mind. Explore where specialized ZALTRON machines are envisioned to deliver tangible real-world value."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4rem' }}>
            {solutions.map((sol) => (
              <div key={sol.id} className="card-tech" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="eyebrow">{sol.eyebrow}</span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {sol.systemsInvolved.map((sys, idx) => (
                      <span key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--accent-blue)', background: 'var(--accent-blue-light)', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{sol.title}</h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
                  {sol.tagline}
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '820px' }}>
                  {sol.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    ANTICIPATED OPERATIONAL BENEFITS:
                  </span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem', marginTop: '0.75rem' }}>
                    {sol.benefits.map((b, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={16} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ padding: '0.75rem 1rem', background: 'var(--bg-surface-elevated)', borderRadius: '2px', borderLeft: '2px solid var(--accent-blue)', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                  DISCLAIMER: {sol.statusDisclaimer}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button to="/contact" variant="primary" size="lg">
              Discuss Potential Collaborations
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
