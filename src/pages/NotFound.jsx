import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/layout/Seo';
import { Button } from '../components/ui/Button';
import { AlertTriangle } from 'lucide-react';

export function NotFound() {
  return (
    <>
      <Seo 
        title="404 // Coordinate Not Found | ZALTRON ROBOTICS" 
        description="The requested robotic trajectory or node does not exist."
      />

      <main className="section-spacing bg-grid-tech" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--bg-surface-elevated)', borderRadius: '50%', marginBottom: '1.5rem', border: '1px solid var(--border-muted)' }}>
            <AlertTriangle size={36} color="var(--accent-blue)" />
          </div>

          <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
            STATUS 404 // TRAJECTORY FAULT
          </span>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
            System Coordinate Not Found.
          </h1>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            The spatial route or system module you requested is not mapped in the ZALTRON network topology.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/" variant="primary">
              Return to Command Base
            </Button>
            <Button to="/robots" variant="secondary">
              View Robot Catalog
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
