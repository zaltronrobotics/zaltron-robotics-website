import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { X, ChevronRight, ExternalLink, MessageSquareText } from 'lucide-react';
import { site } from '../../config/site';
import { robots } from '../../data/robots';
import { Button } from '../ui/Button';

export function MobileMenu({ isOpen, onClose, onOpenAsk }) {
  const drawerRef = useRef(null);

  // Close on ESC and lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-label="Mobile Navigation"
      onClick={onClose}
    >
      <div 
        ref={drawerRef} 
        className="mobile-drawer"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '380px',
          background: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-muted)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 250,
          overflowY: 'auto',
          padding: '1.5rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="nav-brand">
            <img src={site.logoUrl} alt="Logo" width="32" height="32" />
            <span className="nav-brand-name">{site.brandName}</span>
          </div>
          <button 
            onClick={onClose} 
            aria-label="Close menu" 
            style={{ padding: '0.5rem', color: 'var(--text-primary)', background: 'none', border: 'none' }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          <NavLink 
            to="/" 
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.75rem 0',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)'
            })}
          >
            <span>Home</span>
            <ChevronRight size={16} />
          </NavLink>

          <NavLink 
            to="/robots" 
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.75rem 0',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)'
            })}
          >
            <span>Robots Ecosystem</span>
            <ChevronRight size={16} />
          </NavLink>

          <NavLink 
            to="/technology" 
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.75rem 0',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)'
            })}
          >
            <span>Technology</span>
            <ChevronRight size={16} />
          </NavLink>

          <NavLink 
            to="/solutions" 
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.75rem 0',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)'
            })}
          >
            <span>Solutions</span>
            <ChevronRight size={16} />
          </NavLink>

          <NavLink 
            to="/research" 
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.75rem 0',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)'
            })}
          >
            <span>Research</span>
            <ChevronRight size={16} />
          </NavLink>

          <NavLink 
            to="/roadmap" 
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.75rem 0',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)'
            })}
          >
            <span>Roadmap</span>
            <ChevronRight size={16} />
          </NavLink>

          <NavLink 
            to="/about" 
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.75rem 0',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)'
            })}
          >
            <span>About</span>
            <ChevronRight size={16} />
          </NavLink>

          <NavLink 
            to="/careers" 
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.75rem 0',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)'
            })}
          >
            <span>Careers</span>
            <ChevronRight size={16} />
          </NavLink>

          <NavLink 
            to="/journal" 
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.75rem 0',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)'
            })}
          >
            <span>Journal</span>
            <ChevronRight size={16} />
          </NavLink>

          <NavLink 
            to="/contact" 
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.75rem 0',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)'
            })}
          >
            <span>Contact</span>
            <ChevronRight size={16} />
          </NavLink>
        </div>

        {/* Quick Robot List */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>Ecosystem Quick Links</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
            {robots.map(r => (
              <Link
                key={r.slug}
                to={`/robots/${r.slug}`}
                onClick={onClose}
                style={{
                  padding: '0.5rem',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem'
                }}
              >
                <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{r.name}</div>
                <div style={{ color: 'var(--accent-blue)', fontSize: '0.58rem' }}>{r.role}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: 'auto' }}>
          <button 
            onClick={() => { onClose(); onOpenAsk(); }} 
            className="btn btn-secondary" 
            style={{ width: '100%' }}
          >
            <MessageSquareText size={16} />
            <span>Ask ZALTRON</span>
          </button>
          
          <Button 
            to="/robots/zaltron-v1" 
            onClick={onClose} 
            variant="primary" 
            style={{ width: '100%' }}
          >
            Explore Flagship V1
          </Button>

          <a 
            href={site.social.GitHub} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary" 
            style={{ width: '100%' }}
          >
            <span>Visit GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
