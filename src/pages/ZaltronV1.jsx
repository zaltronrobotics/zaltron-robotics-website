import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Eye, Radio, Mic, Wifi, Shield, Disc, ArrowRight, Layers, Terminal, AlertCircle } from 'lucide-react';
import { site } from '../config/site';
import { robots } from '../data/robots';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { StatusBadge } from '../components/ui/StatusBadge';
import { RobotHeroVisual } from '../components/visual/RobotHeroVisual';
import { PerceptionStack } from '../components/visual/PerceptionStack';
import { ExplorationCanvas } from '../components/visual/ExplorationCanvas';
import { HardwareExploded } from '../components/visual/HardwareExploded';
import { MemoryToggle } from '../components/visual/MemoryToggle';

export function ZaltronV1() {
  const v1 = robots.find(r => r.slug === 'zaltron-v1') || robots[0];

  return (
    <>
      <Seo
        title="ZALTRON V1 | The Flagship Intelligent Machine"
        description="Explore the architecture, perception stack, dual-tier intelligence, and development status of ZALTRON V1, the flagship platform in the ZALTRON ecosystem."
      />

      <main>
        {/* =================================================================
            1. HERO & OVERVIEW
            ================================================================= */}
        <section className="hero-section bg-grid-tech bg-radial-glow" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
          <div className="container hero-grid">
            <div className="hero-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span className="eyebrow">COMMAND PLATFORM // Z-01</span>
                <StatusBadge status={v1.status} />
              </div>
              <h1 style={{ marginBottom: '1.25rem' }}>
                ZALTRON V1
              </h1>
              <p style={{ fontSize: '1.35rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
                {v1.tagline}
              </p>
              <p className="hero-lead">
                The primary physical intelligence platform in the ZALTRON ecosystem, engineered as a modular testbed for research into real-world perception, dual-tier AI control, autonomous SLAM exploration, and human-robot collaboration.
              </p>

              <div className="hero-actions">
                <Button to="#intelligence" variant="primary">
                  Explore Architecture
                </Button>
                <Button to="#exploration" variant="secondary">
                  Exploration Mode Simulation
                </Button>
              </div>
            </div>

            <div className="hero-visual-wrapper">
              <RobotHeroVisual />
            </div>
          </div>
        </section>

        {/* =================================================================
            2. INTELLIGENCE & AI ARCHITECTURE
            ================================================================= */}
        <section id="intelligence" className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="container">
            <SectionHeader
              eyebrow="COMPUTATIONAL ARCHITECTURE"
              title="Dual-Tier Intelligence: Edge AI + RTOS Microcontroller"
              description="To reconcile heavy neural perception with microsecond-deterministic motor safety, ZALTRON V1 distributes computation between an Edge Host and an ESP32 microcontroller."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
              {/* High-Level Tier */}
              <div className="card-tech">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>TIER 01 // HIGH-LEVEL AI</span>
                  <Cpu size={18} color="var(--accent-blue)" />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Host / Edge Computer</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                  Executes compute-intensive convolutional vision pipelines, natural language parsing, acoustic intent processing, and global pathfinding algorithms.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <li>• High-Resolution Optical Perception</li>
                  <li>• Voice Command Recognition & Synthesis</li>
                  <li>• Global Topological Navigation (A*)</li>
                  <li>• Dynamic World Model Synthesis</li>
                </ul>
              </div>

              {/* Wireless Telemetry Bridge */}
              <div className="card-tech" style={{ padding: '2rem', background: '#08121d', borderColor: 'var(--accent-blue)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>BRIDGE // TELEMETRY PROTOCOL</span>
                  <Wifi size={18} color="var(--accent-blue)" />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Low-Latency Wi-Fi Link</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                  High-frequency structured packet streams exchange rotational velocity vectors, ultrasonic sweeps, IMU metrics, and emergency halt heartbeats.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <li>• UDP/TCP Packet Serialization</li>
                  <li>• Dynamic Latency Monitoring</li>
                  <li>• Heartbeat Timeout Safety Watchdog</li>
                  <li>• Bidirectional Telemetry Stream</li>
                </ul>
              </div>

              {/* Low-Level Tier */}
              <div className="card-tech" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>TIER 02 // DETERMINISTIC RTOS</span>
                  <Shield size={18} color="var(--accent-blue)" />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>ESP32 Microcontroller</h3>
                <p style={{ fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                  Dedicated to microsecond-precise PWM motor modulation, encoder interrupt handling, servo scanning sweeps, and immediate physical fail-safes.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <li>• Sub-Millisecond Hardware Interrupts</li>
                  <li>• Closed-Loop Dual Motor Control</li>
                  <li>• Ultrasonic Arc Sweeper Servo Control</li>
                  <li>• Hardware Watchdog Auto-Halt</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. PERCEPTION & SENSOR ARCHITECTURE
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-base)' }}>
          <div className="container">
            <PerceptionStack />
          </div>
        </section>

        {/* =================================================================
            4. VOICE INTERACTION & WAKE PHRASE CONCEPT
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span className="eyebrow">HUMAN-ROBOT INTERACTION // SPEECH</span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
                  Natural Acoustic Command Pipeline.
                </h2>
                <p style={{ marginBottom: '1.25rem' }}>
                  ZALTRON V1 investigates intuitive speech interaction for hands-free collaborative control. Acoustic feeds are parsed locally to extract high-level directional directives and status queries.
                </p>

                <div style={{ padding: '1.25rem', background: 'var(--bg-surface-elevated)', borderRadius: '4px', borderLeft: '3px solid var(--accent-blue)', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>
                    EXPERIMENTAL WAKE PHRASE NOTE
                  </span>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    The internal prototype testbed initially explored "Hey IRIS" as an experimental wake phrase. The permanent company and platform brand is strictly <b>ZALTRON ROBOTICS</b> and <b>ZALTRON V1</b>. Future iterations will adopt unified ZALTRON vocal protocols.
                  </p>
                </div>
              </div>

              {/* Acoustic Waveform & Command Visualizer */}
              <div className="card-tech">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span className="eyebrow">VOCAL TELEMETRY INTERFACE</span>
                  <Mic size={18} color="var(--accent-blue)" />
                </div>

                {/* Simulated Audio Waveform */}
                <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4px', padding: '1rem', background: '#04070b', borderRadius: '2px', marginBottom: '1.5rem' }}>
                  {[24, 45, 18, 60, 85, 30, 92, 40, 75, 55, 30, 80, 95, 60, 40, 25, 70, 50, 30, 20].map((h, i) => (
                    <div
                      key={i}
                      className="waveform-bar"
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background: 'var(--accent-blue)',
                        borderRadius: '1px',
                        animationDelay: `${i * 0.08}s`
                      }}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                    <span>INTENT EXTRACTION:</span>
                    <span style={{ color: 'var(--text-primary)' }}>NAVIGATE_TO_WAYPOINT</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                    <span>CONFIDENCE THRESHOLD:</span>
                    <span style={{ color: 'var(--accent-blue)' }}>94.2%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                    <span>AUDIO FEEDBACK:</span>
                    <span style={{ color: 'var(--text-primary)' }}>SYNTHESIZED VOCAL ACK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            5. PRIVACY & OPT-IN MEMORY
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-base)' }}>
          <div className="container">
            <MemoryToggle />
          </div>
        </section>

        {/* =================================================================
            6. EXPLORATION MODE & SLAM
            ================================================================= */}
        <section id="exploration" className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="container">
            <SectionHeader
              eyebrow="AUTONOMOUS NAVIGATION"
              title="Exploration Mode: Dynamic SLAM & Occupancy Mapping"
              description="A live interactive visualization demonstrating how ZALTRON V1 builds 2D spatial maps of unfamiliar environments using radial raycasting and obstacle detection."
            />

            <ExplorationCanvas />
          </div>
        </section>

        {/* =================================================================
            7. EXPERIMENTAL HARDWARE EXPLODED VIEW
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-base)' }}>
          <div className="container">
            <HardwareExploded />
          </div>
        </section>

        {/* =================================================================
            8. DEVELOPMENT STATUS & HONEST BENCHMARKS
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="container">
            <SectionHeader
              eyebrow="TRANSPARENT STATUS"
              title="Current Milestone: Prototype Bench Testing"
              description="ZALTRON ROBOTICS prioritizes engineering veracity over marketing claims. Here is our exact development progress."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              <div className="card-tech" style={{ padding: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>STAGE 01</span>
                <h4 style={{ fontSize: '1.1rem', marginTop: '0.4rem', color: 'var(--accent-blue)' }}>Concept Design</h4>
                <p style={{ fontSize: '0.8125rem', marginTop: '0.5rem' }}>Ecosystem architecture and dual-tier compute separation modeled.</p>
                <span style={{ marginTop: '1rem', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: '#10b981' }}>COMPLETED</span>
              </div>

              <div className="card-tech" style={{ padding: '1.5rem', borderColor: 'var(--accent-blue)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>STAGE 02</span>
                <h4 style={{ fontSize: '1.1rem', marginTop: '0.4rem', color: 'var(--text-primary)' }}>Prototype Chassis</h4>
                <p style={{ fontSize: '0.8125rem', marginTop: '0.5rem' }}>Dual DC motors, L298N driver, ultrasonic servo gimbal, ESP32 RTOS testbed.</p>
                <span style={{ marginTop: '1rem', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--accent-blue)' }}>ACTIVE TESTING</span>
              </div>

              <div className="card-tech" style={{ padding: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>STAGE 03</span>
                <h4 style={{ fontSize: '1.1rem', marginTop: '0.4rem', color: 'var(--text-muted)' }}>On-Device Vision</h4>
                <p style={{ fontSize: '0.8125rem', marginTop: '0.5rem' }}>Integration of onboard neural compute accelerators and SLAM optimization.</p>
                <span style={{ marginTop: '1rem', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-muted)' }}>UPCOMING</span>
              </div>

              <div className="card-tech" style={{ padding: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>STAGE 04</span>
                <h4 style={{ fontSize: '1.1rem', marginTop: '0.4rem', color: 'var(--text-muted)' }}>Multi-Robot Mesh</h4>
                <p style={{ fontSize: '0.8125rem', marginTop: '0.5rem' }}>Coordination protocols with ZALTRON Hub, Scout, and Guard platforms.</p>
                <span style={{ marginTop: '1rem', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-muted)' }}>FUTURE VISION</span>
              </div>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--bg-surface-elevated)', borderRadius: '4px', border: '1px solid var(--border-muted)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <AlertCircle size={24} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                <b>Integrity Commitment:</b> ZALTRON V1 is currently in prototype testing. We do not claim commercial availability, mass manufacturing certification, or industrial deployment.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================
            9. CALL TO ACTION
            ================================================================= */}
        <section className="section-spacing bg-radial-glow" style={{ borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '780px' }}>
            <span className="eyebrow">ECOSYSTEM INTEGRATION</span>
            <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', marginTop: '1rem', marginBottom: '1.5rem' }}>
              Built as the Flagship. Connected to the Family.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
              Discover how ZALTRON V1 collaborates with specialized units across our entire robotics catalog.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Button to="/robots" variant="primary" size="lg">
                Explore the Robot Ecosystem
              </Button>
              <a
                href={site.social.GitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Inspect Code on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
