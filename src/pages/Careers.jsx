import React, { useState } from 'react';
import { site } from '../config/site';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Users, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', discipline: 'Robotics Engineering', portfolio: '', note: '' });

  const disciplines = [
    { title: 'Robotics & Control Systems', desc: 'Kinematics, trajectory generation, closed-loop PID control, dynamic stabilization' },
    { title: 'Embedded Systems & RTOS', desc: 'ESP32 firmware, C/C++, hardware interrupt optimization, motor driver circuits' },
    { title: 'Computer Vision & SLAM', desc: 'Spatial occupancy mapping, OpenCV, sensor fusion (optical + sonar + IMU)' },
    { title: 'Physical Artificial Intelligence', desc: 'Machine learning for robotics, edge compute inference, natural language command pipelines' },
    { title: 'Mechanical Engineering & CAD', desc: 'Chassis design, modular mounting brackets, 3D prototyping, thermal dissipation' },
    { title: 'Web & Distributed Systems', desc: 'Fleet telemetry dashboards, real-time WebSockets, low-latency UI architecture' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Seo 
        title="Careers & Talent | ZALTRON ROBOTICS" 
        description="ZALTRON ROBOTICS is growing toward a multidisciplinary robotics and AI engineering team. Express your interest in joining our mission."
      />

      <main className="section-spacing bg-grid-tech">
        <div className="container">
          <SectionHeader 
            eyebrow="JOIN THE EXPEDITION"
            title="Growing Toward a Multidisciplinary Robotics Team"
            description="We are laying the foundation for a focused engineering culture where software, electrical, and mechanical disciplines converge. We welcome expressions of interest from engineers passionate about physical intelligence."
          />

          {/* Disciplines Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {disciplines.map((d, idx) => (
              <div key={idx} className="card-tech" style={{ padding: '2rem' }}>
                <span className="eyebrow" style={{ fontSize: '0.625rem', marginBottom: '0.5rem' }}>
                  DISCIPLINE 0{idx + 1}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{d.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{d.desc}</p>
              </div>
            ))}
          </div>

          {/* Talent Expression of Interest Box */}
          <div className="card-tech" style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem', background: 'var(--bg-surface)' }}>
            <span className="eyebrow">EXPRESSION OF INTEREST</span>
            <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Connect with ZALTRON Engineering
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Whether you are an embedded firmware hacker, mechanical designer, or computer vision researcher, let us know what you build.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={42} color="var(--accent-blue)" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Interest Received</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '460px', margin: '0 auto 1.5rem' }}>
                  Thank you for reaching out. Please also feel free to send code repositories, CAD portfolios, or CVs directly to <a href={`mailto:${site.email}`} style={{ color: 'var(--accent-blue)' }}>{site.email}</a>.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-sm">
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                      Full Name *
                    </label>
                    <input 
                      required 
                      className="modal-input" 
                      style={{ width: '100%' }}
                      placeholder="Ada Lovelace"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                      Email Address *
                    </label>
                    <input 
                      required 
                      type="email"
                      className="modal-input" 
                      style={{ width: '100%' }}
                      placeholder="ada@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                      Primary Discipline *
                    </label>
                    <select 
                      className="modal-input"
                      style={{ width: '100%', background: 'var(--bg-surface-elevated)', color: 'var(--text-primary)' }}
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    >
                      {disciplines.map(d => <option key={d.title} value={d.title}>{d.title}</option>)}
                      <option value="Other">Other Multidisciplinary</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                      GitHub / Portfolio Link
                    </label>
                    <input 
                      className="modal-input" 
                      style={{ width: '100%' }}
                      placeholder="https://github.com/yourhandle"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    What have you built? (Hardware / Firmware / AI)
                  </label>
                  <textarea 
                    rows={4}
                    className="modal-input"
                    style={{ width: '100%' }}
                    placeholder="Tell us about robotic projects, embedded microcontrollers, or algorithms you've developed..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                  Submit Expression of Interest
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
