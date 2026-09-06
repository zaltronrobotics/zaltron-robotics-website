import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Radio, Shield, Navigation, Terminal, Compass, Layers, Sparkles } from 'lucide-react';
import { site } from '../config/site';
import { robots } from '../data/robots';
import { techArchitecture } from '../data/technology';
import { researchAreas } from '../data/research';
import { roadmapMilestones } from '../data/roadmap';
import { journalArticles } from '../data/journal';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { StatusBadge } from '../components/ui/StatusBadge';
import { RobotHeroVisual } from '../components/visual/RobotHeroVisual';
import { EcosystemNetwork } from '../components/visual/EcosystemNetwork';
import { PerceptionStack } from '../components/visual/PerceptionStack';
import { ExplorationCanvas } from '../components/visual/ExplorationCanvas';
import { RobotCard } from '../components/cards/RobotCard';

export function Home() {
  const flagship = robots.find(r => r.slug === 'zaltron-v1') || robots[0];

  return (
    <>
      <Seo
        title={`${site.companyName} | Robotics, AI & Automation`}
        description="ZALTRON ROBOTICS develops intelligent robots, autonomous systems and AI-driven machines designed to solve real-world problems."
      />

      <main>
        {/* =================================================================
            CHAPTER 01: HERO
            ================================================================= */}
        <section className="hero-section bg-grid-tech bg-radial-glow">
          <div className="container hero-grid">
            {/* Hero Copy */}
            <div className="hero-content">
              <span className="eyebrow">{site.companyName} // AUTONOMOUS SYSTEMS</span>
              <h1>
                INTELLIGENT MACHINES.<br />
                BUILT FOR THE <span className="accent">REAL WORLD.</span>
              </h1>
              <p className="hero-lead">
                ZALTRON ROBOTICS develops intelligent robotic systems that combine high-level artificial intelligence, dynamic perception, physical autonomy, and dependable real-time control.
              </p>

              <div className="hero-actions">
                <Button to="/robots/zaltron-v1" variant="primary" size="lg">
                  Explore ZALTRON V1
                </Button>
                <Button to="/robots" variant="secondary" size="lg">
                  Explore the Ecosystem
                </Button>
              </div>

              {/* Verified Hardware & Project Telemetry */}
              <div className="hero-telemetry">
                <div className="telemetry-item">
                  <span className="telemetry-val">ZALTRON V1</span>
                  <span className="telemetry-lbl">Flagship Platform</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-val">11 SYSTEMS</span>
                  <span className="telemetry-lbl">Coordinated Family</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-val">ESP32 + EDGE AI</span>
                  <span className="telemetry-lbl">Dual-Tier Control</span>
                </div>
              </div>
            </div>

            {/* Hero Robot Responsive Visual */}
            <div className="hero-visual-wrapper">
              <RobotHeroVisual />
            </div>
          </div>
        </section>

        {/* =================================================================
            CHAPTER 02: WHAT IS ZALTRON?
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span className="eyebrow">THE ZALTRON PHILOSOPHY</span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
                  Machines Grounded in Physics and Practical Utility.
                </h2>
                <p style={{ marginBottom: '1.25rem' }}>
                  We believe that the next leap in artificial intelligence will not take place inside isolated server farms, but in physical bodies that navigate, perceive, and interact with the physical world.
                </p>
                <p>
                  ZALTRON is engineered around physical reality: separating compute-heavy spatial models from deterministic, microsecond-accurate microcontroller loops to guarantee stability, safety, and operational reliability.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div className="card-tech" style={{ padding: '1.75rem' }}>
                  <Cpu size={22} color="var(--accent-blue)" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Physical AI</h4>
                  <p style={{ fontSize: '0.8125rem' }}>Bridging machine learning reasoning with actual mechanical torque and mobility.</p>
                </div>
                <div className="card-tech" style={{ padding: '1.75rem' }}>
                  <Navigation size={22} color="var(--accent-blue)" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Spatial Autonomy</h4>
                  <p style={{ fontSize: '0.8125rem' }}>Constructing topological maps and avoiding obstacles in unstructured rooms.</p>
                </div>
                <div className="card-tech" style={{ padding: '1.75rem' }}>
                  <Shield size={22} color="var(--accent-blue)" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Deterministic Control</h4>
                  <p style={{ fontSize: '0.8125rem' }}>Microsecond motor response and fail-safe safety watchdogs running on RTOS.</p>
                </div>
                <div className="card-tech" style={{ padding: '1.75rem' }}>
                  <Radio size={22} color="var(--accent-blue)" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Ecosystem Mesh</h4>
                  <p style={{ fontSize: '0.8125rem' }}>Decentralized communication linking specialized units through ZALTRON Hub.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            CHAPTER 03: FLAGSHIP SPOTLIGHT — ZALTRON V1
            ================================================================= */}
        <section className="section-spacing bg-radial-glow">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '3.5rem', alignItems: 'center' }}>
              <div>
                <span className="eyebrow">FLAGSHIP PLATFORM // Z-01</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem', marginBottom: '1rem' }}>
                  <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)' }}>ZALTRON V1</h2>
                  <StatusBadge status={flagship.status} />
                </div>
                <p style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  The central physical platform for perception, voice interaction, autonomous exploration, and system coordination.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  ZALTRON V1 serves as the testing ground for our core technologies: differential mobile locomotion, ultrasonic arc sweeping, optical vision streaming, and low-latency Wi-Fi telemetry to external neural compute hosts.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
                  {flagship.capabilities.slice(0, 6).map((cap, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-blue)' }}>0{i+1}</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button to="/robots/zaltron-v1" variant="primary">
                    Deep Dive ZALTRON V1
                  </Button>
                  <Button to="/technology" variant="secondary">
                    View Architecture
                  </Button>
                </div>
              </div>

              {/* Hardware Spec Panel */}
              <div className="card-tech" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                  <span className="eyebrow">BENCHMARK // TESTBED</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>PROTOTYPE METRICS</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {flagship.specsHonest.map((spec, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.65rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{spec.label}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-primary)', textAlign: 'right' }}>{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bg-surface-elevated)', borderRadius: '2px', borderLeft: '2px solid var(--accent-blue)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>CURRENT STATUS NOTE</span>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    Actively tested in lab indoor environments. Software-in-the-loop simulation runs in parallel with real-world chassis validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            CHAPTER 04: THE INTELLIGENT ECOSYSTEM
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-base)' }}>
          <div className="container">
            <SectionHeader
              eyebrow="THE ZALTRON NETWORK"
              title="One Intelligent Ecosystem. Specialized Machines."
              description="Rather than forcing a single machine to perform every contradictory task, ZALTRON is designed as a family of specialized robots operating as nodes in a unified coordination network."
              centered
            />

            <EcosystemNetwork />

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Button to="/robots" variant="secondary">
                View Complete 11-System Product Catalog
              </Button>
            </div>
          </div>
        </section>

        {/* =================================================================
            CHAPTER 05: PERCEPTION STACK
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="container">
            <PerceptionStack />
          </div>
        </section>

        {/* =================================================================
            CHAPTER 06: EXPLORATION MODE & SLAM
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-base)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span className="eyebrow">R&D DIRECTION // AUTONOMOUS SLAM</span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
                  Exploration Mode: Mapping Unfamiliar Worlds.
                </h2>
                <p style={{ marginBottom: '1.25rem' }}>
                  Before a machine can take purposeful action, it must understand where it stands. Exploration Mode allows the robot to sweep unknown indoor spaces, cast sensor rays, and generate probabilistic 2D occupancy grids.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {['SCAN: Ultrasonic arc sweep detects radial obstacle boundaries',
                    'LOCALIZE: Wheel encoders and 6-DOF IMU track relative displacement',
                    'MAP: Occupancy cells update probabilities of free space vs solid walls',
                    'NAVIGATE: Collision-free A* path calculated toward target objectives'
                  ].map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>
                      <span style={{ color: 'var(--accent-blue)' }}>→</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                <Button to="/technology" variant="secondary">
                  Explore Autonomy Research
                </Button>
              </div>

              {/* Interactive SLAM Canvas */}
              <div>
                <ExplorationCanvas />
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            CHAPTER 07: SENSE → UNDERSTAND → PLAN → ACT → LEARN
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="container">
            <SectionHeader
              eyebrow="TECHNICAL LIFECYCLE"
              title="The Sense-Understand-Plan-Act-Learn Pipeline"
              description="A systematic architectural flow turning raw physical inputs into calibrated motor execution and continuous simulation refinement."
              centered
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {techArchitecture.map((item) => (
                <div key={item.step} className="card-tech" style={{ padding: '1.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>
                    PHASE {item.step}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '0.65rem' }}>
                    {item.phase}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
                    {item.summary}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    {item.bullets.slice(0, 2).map((b, i) => (
                      <li key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                        • {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            CHAPTER 08: RESEARCH PILLARS
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-base)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <span className="eyebrow">RESEARCH & EXPERIMENTATION</span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem' }}>
                  Active Engineering Thrusts
                </h2>
              </div>
              <Button to="/research" variant="secondary">
                View All Research
              </Button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {researchAreas.map((res) => (
                <div key={res.id} className="card-tech">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="eyebrow" style={{ fontSize: '0.625rem' }}>{res.eyebrow}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--accent-blue)', background: 'var(--accent-blue-light)', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>
                      {res.status}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{res.title}</h3>
                  <p style={{ fontSize: '0.8125rem', marginBottom: '1.25rem' }}>{res.summary}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                    STATUS: {res.statusHonest}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            CHAPTER 09: ROADMAP
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="container">
            <SectionHeader
              eyebrow="DEVELOPMENT HORIZON"
              title="From Foundation to Coordinated Fleet"
              description="Our transparent engineering trajectory across current validation, upcoming autonomy integration, and future ecosystem expansion."
              centered
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {roadmapMilestones.map((ms) => (
                <div key={ms.phase} className="card-tech">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--accent-blue)' }}>
                      PHASE // {ms.phase}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                      {ms.status}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                    {ms.theme}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {ms.items.map((it, idx) => (
                      <div key={idx} style={{ padding: '0.75rem', background: 'var(--bg-surface-elevated)', borderRadius: '2px', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                          <b style={{ fontSize: '0.8125rem' }}>{it.title}</b>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--accent-blue)' }}>{it.status}</span>
                        </div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{it.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Button to="/roadmap" variant="secondary">
                View Complete Engineering Roadmap
              </Button>
            </div>
          </div>
        </section>

        {/* =================================================================
            CHAPTER 10: JOURNAL PREVIEW
            ================================================================= */}
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-base)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <span className="eyebrow">ENGINEERING JOURNAL</span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem' }}>
                  Technical Logs & Insights
                </h2>
              </div>
              <Button to="/journal" variant="secondary">
                Read All Articles
              </Button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
              {journalArticles.map((art) => (
                <Link key={art.slug} to="/journal" className="card-tech">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>
                      {art.category}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                      {art.readTime}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {art.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {art.excerpt}
                  </p>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                    <span>Read Technical Log</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            CHAPTER 11: CINEMATIC FINAL CTA
            ================================================================= */}
        <section className="section-spacing bg-radial-glow" style={{ borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <span className="eyebrow">THE FUTURE IN MOTION</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', marginTop: '1rem', marginBottom: '1.5rem' }}>
              THE MACHINES ARE ONLY THE BEGINNING.
            </h2>
            <p style={{ fontSize: '1.1875rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              ZALTRON ROBOTICS is committed to continuous, transparent iteration. As we refine ZALTRON V1 and shape the broader robotics ecosystem, follow our code, designs, and experiments.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Button to="/robots/zaltron-v1" variant="primary" size="lg">
                Explore ZALTRON V1
              </Button>
              <a
                href={site.social.GitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Follow on GitHub
              </a>
              <Button to="/contact" variant="secondary" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
