import React, { useState } from 'react';
import { site } from '../config/site';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Mail, CheckCircle2, Send, ExternalLink } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', organization: '', area: 'General Robotics Inquiry', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Contact & Technical Inquiries | ZALTRON ROBOTICS"
        description="Connect with ZALTRON ROBOTICS for technical inquiries, research collaborations, and engineering discussions."
      />

      <main className="section-spacing bg-grid-tech">
        <div className="container">
          <SectionHeader
            eyebrow="COMMUNICATION CHANNELS"
            title="Tell Us What You're Building"
            description="Whether you are an academic researcher, hardware engineer, or automation specialist, we welcome technical inquiries and collaborative dialogue."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
            {/* Direct Channels */}
            <div>
              <div className="card-tech" style={{ marginBottom: '2rem' }}>
                <span className="eyebrow">DIRECT TELEMETRY</span>
                <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                  Primary Email
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  For direct correspondence, research exchange, or media requests, email our primary inbox:
                </p>
                <a
                  href={`mailto:${site.email}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(0.78rem, 3.5vw, 0.95rem)',
                    color: 'var(--accent-blue)',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-surface-elevated)',
                    borderRadius: '2px',
                    border: '1px solid var(--border-muted)',
                    maxWidth: '100%',
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-all'
                  }}
                >
                  <Mail size={16} style={{ flexShrink: 0 }} />
                  <span>{site.email}</span>
                </a>
              </div>

              {/* Verified Networks */}
              <div className="card-tech">
                <span className="eyebrow">VERIFIED REPOSITORIES & NETWORKS</span>
                <h3 style={{ fontSize: '1.35rem', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
                  Official Channels
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>
                  {Object.entries(site.social).map(([name, url]) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-surface-elevated)',
                        borderRadius: '2px',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <span>{name}</span>
                      <ExternalLink size={14} color="var(--accent-blue)" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Inquiry Form */}
            <div className="card-tech" style={{ background: 'var(--bg-surface)' }}>
              <span className="eyebrow">STRUCTURED INQUIRY</span>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                Send a Message
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={48} color="var(--accent-blue)" style={{ margin: '0 auto 1.25rem' }} />
                  <h4 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Message Staged</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                    Thank you for your note. As this website operates as a static client, please also reach out directly to our email: <a href={`mailto:${site.email}`} style={{ color: 'var(--accent-blue)' }}>{site.email}</a>.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-sm">
                    Compose Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                      Name *
                    </label>
                    <input
                      required
                      className="modal-input"
                      style={{ width: '100%' }}
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      className="modal-input"
                      style={{ width: '100%' }}
                      placeholder="name@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                      Organization / Affiliation (Optional)
                    </label>
                    <input
                      className="modal-input"
                      style={{ width: '100%' }}
                      placeholder="Lab, University, or Company"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                      Project / Focus Area
                    </label>
                    <select
                      className="modal-input"
                      style={{ width: '100%', background: 'var(--bg-surface-elevated)', color: 'var(--text-primary)' }}
                      value={form.area}
                      onChange={(e) => setForm({ ...form, area: e.target.value })}
                    >
                      <option value="General Robotics Inquiry">General Robotics Inquiry</option>
                      <option value="ZALTRON V1 Flagship Collaboration">ZALTRON V1 Flagship Collaboration</option>
                      <option value="Research & Academic Collaboration">Research & Academic Collaboration</option>
                      <option value="SLAM & Computer Vision">SLAM & Computer Vision</option>
                      <option value="Hardware & Firmware Feedback">Hardware & Firmware Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="modal-input"
                      style={{ width: '100%' }}
                      placeholder="Describe your inquiry, project scope, or technical questions..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                    <span>Transmit Message</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
