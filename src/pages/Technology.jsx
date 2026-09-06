import React from 'react';
import { techArchitecture, techPillars } from '../data/technology';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { PerceptionStack } from '../components/visual/PerceptionStack';
import { ExplorationCanvas } from '../components/visual/ExplorationCanvas';

export function Technology() {
  return (
    <>
      <Seo 
        title="Technology & Architecture | ZALTRON ROBOTICS" 
        description="Explore the engineering foundations behind ZALTRON ROBOTICS: Physical AI, deterministic embedded control, computer vision, and autonomous SLAM."
      />

      <main className="section-spacing bg-grid-tech">
        <div className="container">
          <SectionHeader 
            eyebrow="SYSTEMS & ARCHITECTURE"
            title="The Engineering Behind ZALTRON"
            description="Robotics is the ultimate multidisciplinary discipline. We combine real-time microcontroller firmware, spatial computer vision, physical AI reasoning, and decentralized fleet mesh networking."
          />

          {/* Technology Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '5rem' }}>
            {techPillars.map((pillar) => (
              <div key={pillar.id} className="card-tech">
                <span className="eyebrow" style={{ fontSize: '0.625rem', marginBottom: '0.75rem' }}>
                  {pillar.eyebrow}
                </span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Section: The 5-Phase Technical Pipeline */}
          <SectionHeader 
            eyebrow="EXECUTION LIFECYCLE"
            title="Sense • Understand • Plan • Act • Learn"
            description="Our closed-loop pipeline for transforming raw photons and ultrasonic reflections into deterministic physical torque."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '5rem' }}>
            {techArchitecture.map((stage) => (
              <div key={stage.step} className="card-tech" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                    PHASE {stage.step} // {stage.phase}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                    DETERMINISTIC PIPELINE
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{stage.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>{stage.summary}</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  {stage.bullets.map((b, idx) => (
                    <div key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--accent-blue)', marginRight: '0.5rem' }}>•</span>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demonstrations */}
          <div style={{ marginBottom: '5rem' }}>
            <PerceptionStack />
          </div>

          <div>
            <ExplorationCanvas />
          </div>
        </div>
      </main>
    </>
  );
}
