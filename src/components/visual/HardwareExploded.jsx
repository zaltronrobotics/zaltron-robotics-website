import React, { useState } from 'react';
import { Cpu, Zap, Wifi, Eye, Volume2, Disc, ShieldCheck } from 'lucide-react';

export function HardwareExploded() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      title: '01 // High-Level Perception & Audio',
      icon: Eye,
      components: 'HD Optical Sensor • Audio Microphone • LCD Status Display',
      description: 'Ingests environmental visual feed and vocal acoustic commands, providing user feedback via onboard display.',
      tier: 'Edge Perception Tier'
    },
    {
      title: '02 // Sensor Gimbal & Sonar Mount',
      icon: Eye,
      components: 'Ultrasonic Sonar Array • SG90 Precision Sweep Servo',
      description: 'Servo-actuated rotational panning for obstacle sweep scans across a 180° frontal arc, generating distance vectors.',
      tier: 'Sensor Actuation'
    },
    {
      title: '03 // Microcontroller & Control Logic',
      icon: Cpu,
      components: 'ESP32 Dual-Core RTOS • L298N Dual H-Bridge Motor Driver',
      description: 'Dedicated deterministic real-time microcontroller managing PWM frequency, emergency interrupts, and motor driver logic.',
      tier: 'Deterministic Core'
    },
    {
      title: '04 // Locomotion & Drive Subsystem',
      icon: Disc,
      components: 'Dual High-Torque DC Geared Motors • Optical Wheel Encoders • All-Terrain Rubber Treads',
      description: 'Differential steering drive mechanism providing tight zero-radius turns and precise wheel tick odometry.',
      tier: 'Mechanical Locomotion'
    },
    {
      title: '05 // Power Regulation & Telemetry',
      icon: Zap,
      components: 'High-Discharge Lithium Pack • 5V/3.3V Step-Down Regulators • 802.11b/g/n Wi-Fi Antenna',
      description: 'Isolated dual-rail power circuit preventing motor inductive spikes from resetting sensitive digital logic and Wi-Fi transmission.',
      tier: 'Electrical & Telemetry'
    }
  ];

  return (
    <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '2.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <span className="eyebrow">PHYSICAL STACK BREAKDOWN</span>
            <h3 style={{ fontSize: '1.75rem', marginTop: '0.4rem' }}>Experimental Prototype Architecture</h3>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)', border: '1px solid var(--border-muted)', padding: '0.35rem 0.75rem', borderRadius: '2px' }}>
            STATUS: ACTIVE PROTOTYPE TESTBED
          </span>
        </div>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Documenting the active component layers of the physical ZALTRON V1 testbed.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {layers.map((layer, idx) => {
          const Icon = layer.icon;
          const isSelected = activeLayer === idx;

          return (
            <div
              key={idx}
              onClick={() => setActiveLayer(idx)}
              style={{
                background: isSelected ? 'var(--bg-surface-active)' : 'var(--bg-surface-elevated)',
                border: `1px solid ${isSelected ? 'var(--accent-blue)' : 'var(--border-subtle)'}`,
                padding: '1.5rem',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                boxShadow: isSelected ? '0 0 20px var(--accent-blue-light)' : 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: isSelected ? 'var(--accent-blue)' : 'var(--text-muted)' }}>
                  {layer.tier}
                </span>
                <Icon size={16} color={isSelected ? 'var(--accent-blue)' : 'var(--text-muted)'} />
              </div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {layer.title}
              </h4>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-blue)', marginBottom: '0.65rem' }}>
                {layer.components}
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {layer.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
