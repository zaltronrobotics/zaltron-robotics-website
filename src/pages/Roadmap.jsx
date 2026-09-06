import React from 'react';
import { roadmapMilestones } from '../data/roadmap';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { CheckCircle, Clock, Compass } from 'lucide-react';

export function Roadmap() {
  return (
    <>
      <Seo 
        title="Development Roadmap | ZALTRON ROBOTICS" 
        description="The transparent development roadmap of ZALTRON ROBOTICS across current prototype validation, upcoming autonomy integration, and future coordinated fleet ecosystems."
      />

      <main className="section-spacing bg-grid-tech">
        <div className="container">
          <SectionHeader 
            eyebrow="STRATEGIC DIRECTION"
            title="Development Roadmap"
            description="We reject arbitrary marketing deadlines in favor of transparent, milestones-driven progression: NOW (active chassis & compute bench testing), NEXT (SLAM autonomy & edge vision), and FUTURE (the multi-agent coordinated ecosystem)."
          />

          {/* Desktop & Mobile Responsive Timeline */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
            {roadmapMilestones.map((milestone, idx) => (
              <div 
                key={milestone.phase} 
                className="card-tech" 
                style={{ 
                  padding: '2.5rem',
                  borderColor: milestone.phase === 'NOW' ? 'var(--accent-blue)' : 'var(--border-subtle)',
                  background: milestone.phase === 'NOW' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 800, color: 'var(--accent-blue)', letterSpacing: '0.08em' }}>
                    // {milestone.phase}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)', border: '1px solid var(--border-muted)', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>
                    {milestone.phaseLabel}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {milestone.theme}
                </h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block', marginBottom: '1.5rem' }}>
                  STATUS: {milestone.status}
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {milestone.items.map((item, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        padding: '1rem', 
                        background: 'var(--bg-base)', 
                        border: '1px solid var(--border-subtle)', 
                        borderRadius: '2px' 
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <h4 style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{item.title}</h4>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--accent-blue)' }}>
                          {item.status}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button href="https://github.com/zaltronrobotics" variant="primary">
              Track Engineering Commits on GitHub
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
