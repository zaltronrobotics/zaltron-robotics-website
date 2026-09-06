import React from 'react';
import { site } from '../config/site';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';

export function Legal({ type = 'privacy' }) {
  const isTerms = type === 'terms';

  return (
    <>
      <Seo
        title={`${isTerms ? 'Terms of Use' : 'Privacy Notice'} | ZALTRON ROBOTICS`}
        description={`Official ${isTerms ? 'Terms of Use' : 'Privacy Notice'} for ZALTRON ROBOTICS.`}
      />

      <main className="section-spacing bg-grid-tech">
        <div className="container" style={{ maxWidth: '820px' }}>
          <SectionHeader
            eyebrow="LEGAL NOTICE // POLICY"
            title={isTerms ? 'Terms of Use' : 'Privacy Notice'}
            description={`Last updated: August 2026. Official governance guidelines for ${site.companyName}.`}
          />

          <div className="card-tech" style={{ padding: '3rem', background: 'var(--bg-surface)' }}>
            {isTerms ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>1. Informational & Research Purpose</h3>
                <p>
                  This website is operated by {site.companyName} to document ongoing engineering research, conceptual designs, software architectures, and prototype testbeds. Content published herein does not constitute a binding commercial offer, product warranty, or guarantee of commercial manufacturing availability.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>2. Intellectual Property & Brand Integrity</h3>
                <p>
                  The ZALTRON brand name, ZALTRON ROBOTICS trademark, official logo, original schematics, CAD models, code, and editorial text are intellectual property of ZALTRON ROBOTICS. Open-source repositories linked on GitHub are governed by their respective repository licenses.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>3. Disclaimer of Specifications</h3>
                <p>
                  All specifications, capabilities, and timelines designated as CONCEPT, RESEARCH, or PROTOTYPE reflect developmental goals and software simulation targets. Physical production specifications may vary upon subsequent hardware revision.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>4. Contact</h3>
                <p>
                  For inquiries regarding intellectual property or legal permissions, contact <a href={`mailto:${site.email}`} style={{ color: 'var(--accent-blue)' }}>{site.email}</a>.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>1. Privacy-First Philosophy</h3>
                <p>
                  At ZALTRON ROBOTICS, we believe privacy is an intrinsic architectural requirement, not an afterthought. This website does not use invasive third-party tracking cookies or sell personal data.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>2. Information We Receive</h3>
                <p>
                  If you choose to transmit a message through our contact forms or email us directly at {site.email}, we use the information you provide (name, email address, message body) solely to respond to your specific inquiry.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>3. Robotics Telemetry & Ephemeral Processing</h3>
                <p>
                  In accordance with our hardware design principles, sensory inputs from ZALTRON testbeds (such as optical cameras and audio microphones) process ephemerally in RAM. We do not maintain unencrypted remote surveillance databanks.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>4. Contact</h3>
                <p>
                  For privacy-related inquiries, reach out to <a href={`mailto:${site.email}`} style={{ color: 'var(--accent-blue)' }}>{site.email}</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
