import React from 'react';
import { roadmapMilestones } from '../data/roadmap';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Clock, Compass, GitCommit } from 'lucide-react';

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
            eyebrow="STRATEGIC DIRECTION // MILESTONES"
            title="Development Roadmap"
            description="We reject arbitrary marketing deadlines in favor of transparent, milestones-driven progression: NOW (active chassis & compute bench testing), NEXT (SLAM autonomy & edge vision), and FUTURE (the multi-agent coordinated ecosystem)."
          />

          {/* Connected Engineering Progression Ribbon (Desktop Horizontal / Mobile Vertical) */}
          <div style={{ position: 'relative', marginBottom: '5rem' }}>
            {/* Desktop Progression Rail */}
            <div className="roadmap-rail-grid">
              {roadmapMilestones.map((milestone, idx) => (
                <div key={milestone.phase} style={{ position: 'relative' }}>
                  {/* Pipeline Milestone Header Pip */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '2px solid var(--border-muted)', position: 'relative' }}>
                    <div
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: milestone.phase === 'NOW' ? 'var(--accent-blue)' : 'var(--bg-surface-elevated)',
                        border: `2px solid ${milestone.phase === 'NOW' ? 'var(--accent-blue-hover)' : 'var(--text-muted)'}`,
                        boxShadow: milestone.phase === 'NOW' ? '0 0 12px var(--accent-blue)' : 'none',
                        flexShrink: 0
                      }}
                    />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', fontWeight: 800, color: milestone.phase === 'NOW' ? 'var(--accent-blue)' : 'var(--text-primary)', letterSpacing: '0.1em' }}>
                      PHASE 0{idx + 1} // {milestone.phase}
                    </span>
                    <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)', padding: '0.15rem 0.45rem', borderRadius: '2px' }}>
                      {milestone.status}
                    </span>
                  </div>

                  {/* Milestone Card */}
                  <div
                    className="card-tech"
                    style={{
                      padding: '2rem',
                      minHeight: '440px',
                      borderColor: milestone.phase === 'NOW' ? 'var(--accent-blue)' : 'var(--border-subtle)',
                      background: milestone.phase === 'NOW' ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)'
                    }}
                  >
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                      {milestone.theme}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-dim)', display: 'block', marginBottom: '1.5rem' }}>
                      HORIZON: {milestone.phaseLabel}
                    </span>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
                      {milestone.items.map((item, i) => (
                        <div
                          key={i}
                          style={{
                            padding: '0.85rem 1rem',
                            background: 'var(--bg-base)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '2px'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                            <h4 style={{ fontSize: '0.8125rem', color: 'var(--text-primary)' }}>{item.title}</h4>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--accent-blue)' }}>
                              {item.status}
                            </span>
                          </div>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
