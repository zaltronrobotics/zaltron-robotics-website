import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, MessageSquareText, ExternalLink } from 'lucide-react';
import { site } from '../../config/site';
import { robots } from '../../data/robots';
import { Button } from '../ui/Button';

export function Navbar({ onOpenAsk, onOpenMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
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

        {/* Desktop Nav Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          {/* Products with Dropdown */}
          <div className="nav-dropdown-wrapper">
            <NavLink to="/robots" className="nav-link">
              Products <ChevronDown size={14} />
            </NavLink>
            <div className="nav-dropdown-menu">
              {robots.map((robot) => (
                <Link 
                  key={robot.slug} 
                  to={`/robots/${robot.slug}`} 
                  className="dropdown-item"
                >
                  <div className="dropdown-item-content">
                    <h4>
                      {robot.name} 
                      <span>{robot.role}</span>
                    </h4>
                    <p>{robot.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/technology" className="nav-link">
            Technology
          </NavLink>
          <NavLink to="/solutions" className="nav-link">
            Solutions
          </NavLink>
          <NavLink to="/research" className="nav-link">
            Research
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </nav>

        {/* Action CTAs */}
        <div className="nav-actions">
          <button 
            onClick={onOpenAsk} 
            className="btn btn-secondary btn-sm"
            aria-label="Ask ZALTRON"
            title="Ask ZALTRON verified knowledge base"
          >
            <MessageSquareText size={14} />
            <span>Ask ZALTRON</span>
          </button>

          <a 
            href={site.social.GitHub} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary btn-sm"
            aria-label="GitHub Repository"
          >
            <span>GitHub</span>
            <ExternalLink size={12} />
          </a>

          <Button to="/robots/zaltron-v1" variant="primary" size="sm">
            Explore V1
          </Button>

          <button 
            className="mobile-nav-toggle" 
            onClick={onOpenMobileMenu}
            aria-label="Open mobile navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
