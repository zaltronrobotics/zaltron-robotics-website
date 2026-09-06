import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Cpu, Radio, Shield, Navigation, Terminal, AlertCircle } from 'lucide-react';
import { robots, robotBySlug } from '../data/robots';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { StatusBadge } from '../components/ui/StatusBadge';
import { ZaltronV1 } from './ZaltronV1';

export function RobotDetail() {
  const { slug } = useParams();
  const robot = robotBySlug(slug);

  if (!robot) {
    return <Navigate to="/robots" replace />;
  }

  // If V1, render the comprehensive flagship page
  if (robot.slug === 'zaltron-v1') {
    return <ZaltronV1 />;
  }

  // Find next/prev robot for navigation
  const currentIndex = robots.findIndex(r => r.slug === robot.slug);
  const prevRobot = robots[(currentIndex - 1 + robots.length) % robots.length];
  const nextRobot = robots[(currentIndex + 1) % robots.length];

  return (
    <>
      <Seo 
        title={`${robot.name} | ${robot.role} | ZALTRON ROBOTICS`}
        description={robot.description}
      />

      <main>
        {/* Header Section */}
        <section className="hero-section bg-grid-tech bg-radial-glow" style={{ minHeight: 'auto', paddingBottom: '3.5rem' }}>
          <div className="container">
            <div style={{ marginBottom: '1.5rem' }}>
              <Link 
                to="/robots" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.75rem', 
                  color: 'var(--text-muted)' 
                }}
              >
                <ArrowLeft size={14} />
                <span>BACK TO ROBOTS ECOSYSTEM</span>
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span className="eyebrow">{robot.code} // {robot.role}</span>
              <StatusBadge status={robot.status} />
            </div>

            <h1 style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)', marginBottom: '0.75rem' }}>
              {robot.name}
            </h1>

            <p style={{ fontSize: '1.35rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>
              {robot.tagline}
            </p>

            <p className="hero-lead" style={{ maxWidth: '780px' }}>
              {robot.description}
            </p>

            <div className="hero-actions">
              <Button to="/contact" variant="primary">
                Inquire About {robot.name}
              </Button>
              <Button to="/robots/zaltron-v1" variant="secondary">
                View Flagship ZALTRON V1
              </Button>
            </div>
          </div>
        </section>

        {/* Intended Capabilities & Specs */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
              {/* Capabilities */}
              <div>
                <SectionHeader 
                  eyebrow="R&D DIRECTION"
                  title="Intended Capabilities"
                  description="Core functional characteristics and conceptual hardware architecture being explored for this platform."
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {robot.capabilities.map((cap, i) => (
                    <div 
                      key={i} 
                      className="card-tech" 
                      style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', fontSize: '0.8125rem' }}>0{i+1}</span>
                      <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Honest Concept Specifications */}
              <div>
                <SectionHeader 
                  eyebrow="TECHNICAL ATTRIBUTES"
                  title="Architectural Specifications"
                  description="System class and target engineering parameters under design study."
                />

                <div className="card-tech" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {robot.specsHonest.map((spec, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{spec.label}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-primary)', textAlign: 'right' }}>{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-surface-elevated)', borderRadius: '2px', borderLeft: '3px solid var(--accent-blue)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <AlertCircle size={15} color="var(--accent-blue)" />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>DEVELOPMENT TRANSPARENCY</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      This platform is currently marked <b>{robot.status}</b>. Capabilities describe engineering directions and simulation goals rather than certified production hardware.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Potential Use Cases & Ecosystem Integration */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-base)' }}>
          <div className="container">
            <SectionHeader 
              eyebrow="APPLICATION DOMAINS"
              title={`Target Applications for ${robot.name}`}
              description="Where this specialized robotic platform is envisioned to create meaningful real-world utility."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
              {robot.useCases.map((uc, i) => (
                <div key={i} className="card-tech" style={{ padding: '1.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>APPLICATION 0{i+1}</span>
                  <h4 style={{ fontSize: '1.15rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>{uc}</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Evaluated through hardware-in-the-loop simulation, kinematic models, and field trials.
                  </p>
                </div>
              ))}
            </div>

            {/* Next / Prev Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '1rem' }}>
              <Link 
                to={`/robots/${prevRobot.slug}`} 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}
              >
                <ArrowLeft size={16} />
                <span>PREVIOUS: {prevRobot.name}</span>
              </Link>

              <Link 
                to={`/robots/${nextRobot.slug}`} 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-blue)' }}
              >
                <span>NEXT: {nextRobot.name}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
