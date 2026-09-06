import React from 'react';
import { Link } from 'react-router-dom';
import { site } from '../../config/site';
import { robots } from '../../data/robots';

export function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <Link to="/" className="nav-brand" aria-label="ZALTRON ROBOTICS Home">
              <img 
                src={site.logoUrl} 
                alt="ZALTRON ROBOTICS official logo" 
                className="nav-logo-img" 
                width="36" 
                height="36" 
              />
              <div className="nav-brand-text">
                <span className="nav-brand-name">{site.brandName}</span>
                <span className="nav-brand-sub">ROBOTICS</span>
              </div>
            </Link>
            <p>
              ZALTRON ROBOTICS is an emerging robotics and artificial intelligence initiative developing intelligent autonomous machines and the ZALTRON ecosystem.
            </p>
            <div style={{ marginTop: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-blue)' }}>
              {site.tagline}
            </div>
          </div>

          {/* Products Col */}
          <div className="footer-col">
            <h4>Ecosystem</h4>
            <ul>
              <li><Link to="/robots/zaltron-v1">ZALTRON V1 (Flagship)</Link></li>
              <li><Link to="/robots/scout">ZALTRON Scout</Link></li>
              <li><Link to="/robots/guard">ZALTRON Guard</Link></li>
              <li><Link to="/robots/carrier">ZALTRON Carrier</Link></li>
              <li><Link to="/robots/arm">ZALTRON Arm</Link></li>
              <li><Link to="/robots">View All 11 Systems →</Link></li>
            </ul>
          </div>

          {/* Technology & Research Col */}
          <div className="footer-col">
            <h4>Technology</h4>
            <ul>
              <li><Link to="/technology">Systems Architecture</Link></li>
              <li><Link to="/research">Research & Experiments</Link></li>
              <li><Link to="/solutions">Application Domains</Link></li>
              <li><Link to="/roadmap">Development Roadmap</Link></li>
              <li><Link to="/journal">Engineering Journal</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About ZALTRON</Link></li>
              <li><Link to="/careers">Careers & Team</Link></li>
              <li><Link to="/contact">Technical Inquiries</Link></li>
              <li><Link to="/privacy">Privacy Notice</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Verified Social Col */}
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href={site.social.GitHub} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={site.social.YouTube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href={site.social.X} target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
              <li><a href={site.social.LinkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={site.social.Instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={site.social.Reddit} target="_blank" rel="noopener noreferrer">Reddit</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © 2026 {site.companyName}. All rights reserved. 
            <span style={{ marginLeft: '1rem', color: 'var(--accent-blue)' }}>ORIGIN: INDIA</span>
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
