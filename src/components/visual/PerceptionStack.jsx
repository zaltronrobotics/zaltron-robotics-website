import React from 'react';
import { Camera, Radio, Mic, Compass, Cpu, Layers } from 'lucide-react';

export function PerceptionStack() {
  const inputs = [
    { icon: Camera, name: 'Optical Camera', desc: 'Object contours, surface boundary detection, visual odometry' },
    { icon: Radio, name: 'Ultrasonic Array', desc: 'Millimeter-accurate obstacle clearance distances' },
    { icon: Mic, name: 'Acoustic Array', desc: 'Voice command intent capture & acoustic localization' },
    { icon: Compass, name: '6-DOF IMU', desc: 'Real-time pitch, roll, yaw & dead-reckoning acceleration' }
  ];

  return (
    <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '2.5rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
        <span className="eyebrow">SYSTEM ARCHITECTURE</span>
        <h3 style={{ fontSize: '1.85rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
          The Multi-Modal Perception Pipeline
        </h3>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
          How ZALTRON V1 synthesizes asynchronous sensor feeds into a coherent real-time world model.
        </p>
      </div>

      {/* Layer 1: Sensor Ingestion */}
      <div style={{ marginBottom: '1.5rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          01 // RAW SENSORY FEEDS
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.75rem' }}>
          {inputs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-muted)',
                  padding: '1.25rem',
                  borderRadius: '2px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Icon size={16} color="var(--accent-blue)" />
                  <h4 style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{item.name}</h4>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Downward Conduit */}
      <div style={{ textAlign: 'center', margin: '1rem 0', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
        ↓ ASYNCHRONOUS FUSION BUS (ESP32 ↔ WI-FI ↔ HOST) ↓
      </div>

      {/* Layer 2: Perceptual Synthesis Engine */}
      <div style={{ background: '#07121d', border: '1px solid var(--accent-blue)', padding: '1.5rem', borderRadius: '4px', textAlign: 'center', marginBottom: '1.5rem', boxShadow: '0 0 25px var(--accent-blue-light)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Cpu size={18} color="var(--accent-blue)" />
          <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Perceptual Synthesis Engine</h4>
        </div>
        <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto' }}>
          Extended Kalman Filtering • Coordinate Transformation • Occupancy Grid Updating • Natural Language Parsing
        </p>
      </div>

      {/* Downward Conduit */}
      <div style={{ textAlign: 'center', margin: '1rem 0', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
        ↓ CONTINUOUS STATE STREAM ↓
      </div>

      {/* Layer 3: Dynamic World Model */}
      <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-muted)', padding: '1.5rem', borderRadius: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={20} color="var(--accent-blue)" />
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Coherent Spatial World Model</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Real-time 2D grid representation + dynamic obstacle tracks + trajectory safety envelope</p>
            </div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)', background: 'var(--accent-blue-light)', padding: '0.35rem 0.65rem', borderRadius: '2px', border: '1px solid var(--border-muted)' }}>
            CYCLE: 20ms UPDATE RATE
          </span>
        </div>
      </div>
    </div>
  );
}
