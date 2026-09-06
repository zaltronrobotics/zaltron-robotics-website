import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Radio, Shield, Navigation, Truck, Wrench, Sparkles, HeartPulse, Sprout, Wind, Zap, Network } from 'lucide-react';
import { robots } from '../../data/robots';
import { StatusBadge } from '../ui/StatusBadge';

// Map icon by role
const getRoleIcon = (role) => {
  switch (role) {
    case 'COMMAND': return Cpu;
    case 'EXPLORE': return Navigation;
    case 'PROTECT': return Shield;
    case 'DELIVER': return Truck;
    case 'MANIPULATE': return Wrench;
    case 'MAINTAIN': return Sparkles;
    case 'ASSIST': return HeartPulse;
    case 'AGRI': return Sprout;
    case 'AERIAL': return Wind;
    case 'HOME BASE': return Zap;
    case 'CENTRAL NETWORK': return Network;
    default: return Radio;
  }
};

export function EcosystemNetwork() {
  const [activeSlug, setActiveSlug] = useState('zaltron-v1');
  const activeRobot = robots.find(r => r.slug === activeSlug) || robots[0];

  // Surround satellites around the core Hub and Flagship V1
  const orbitalRobots = robots.filter(r => r.slug !== 'hub' && r.slug !== 'zaltron-v1');

  return (
    <div className="ecosystem-container">
      {/* Desktop Orbital Interactive Diagram */}
      <div className="ecosystem-desktop">
        {/* Orbital rings */}
        <div className="eco-ring inner" />
        <div className="eco-ring outer" />

        {/* Central Core: ZALTRON HUB */}
        <Link 
          to="/robots/hub"
          className="eco-core-node"
          onMouseEnter={() => setActiveSlug('hub')}
          onFocus={() => setActiveSlug('hub')}
          style={{ zIndex: 6 }}
        >
          <Network size={24} color="#0099ff" style={{ marginBottom: 4 }} />
          <h3>HUB</h3>
          <span>CENTRAL NET</span>
        </Link>

        {/* Flagship V1 (Upper Inner Anchor) */}
        <Link
          to="/robots/zaltron-v1"
          className={`eco-satellite-node ${activeSlug === 'zaltron-v1' ? 'active' : ''}`}
          style={{
            top: '16%',
            left: '50%',
            transform: `translate(-50%, -50%) ${activeSlug === 'zaltron-v1' ? 'scale(1.15)' : ''}`,
            borderColor: 'var(--accent-blue)',
            background: '#091522'
          }}
          onMouseEnter={() => setActiveSlug('zaltron-v1')}
          onFocus={() => setActiveSlug('zaltron-v1')}
        >
          <Cpu size={18} color="#0099ff" />
          <b>V1</b>
          <small>FLAGSHIP</small>
        </Link>

        {/* Circular positioning for surrounding 9 robots */}
        {orbitalRobots.map((robot, idx) => {
          // Calculate angle for 9 satellites around outer/inner rings
          const angle = (idx / orbitalRobots.length) * 2 * Math.PI - Math.PI / 2 + 0.35;
          const radius = idx % 2 === 0 ? 250 : 220; // Staggered radii to prevent overlap
          const x = 50 + (radius / 3.4) * Math.cos(angle);
          const y = 50 + (radius / 3.4) * Math.sin(angle);
          const IconComponent = getRoleIcon(robot.role);

          return (
            <Link
              key={robot.slug}
              to={`/robots/${robot.slug}`}
              className={`eco-satellite-node ${activeSlug === robot.slug ? 'active' : ''}`}
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: `translate(-50%, -50%) ${activeSlug === robot.slug ? 'scale(1.15)' : ''}`
              }}
              onMouseEnter={() => setActiveSlug(robot.slug)}
              onFocus={() => setActiveSlug(robot.slug)}
            >
              <IconComponent size={16} color="var(--accent-blue)" />
              <b>{robot.name.replace('ZALTRON ', '')}</b>
              <small>{robot.role}</small>
            </Link>
          );
        })}

        {/* Active Node Detail Card (Floating in bottom corner on desktop) */}
        <div 
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '1.5rem',
            maxWidth: '380px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-muted)',
            padding: '1.5rem',
            borderRadius: '4px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span className="eyebrow">{activeRobot.role}</span>
            <StatusBadge status={activeRobot.status} />
          </div>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{activeRobot.name}</h3>
          <p style={{ fontSize: '0.875rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            {activeRobot.summary}
          </p>
          <Link 
            to={`/robots/${activeRobot.slug}`} 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.75rem', 
              color: 'var(--accent-blue)',
              textTransform: 'uppercase' 
            }}
          >
            <span>Explore {activeRobot.name}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Mobile Structured Responsive List */}
      <div className="ecosystem-mobile">
        {robots.map((robot) => {
          const IconComponent = getRoleIcon(robot.role);
          return (
            <Link
              key={robot.slug}
              to={`/robots/${robot.slug}`}
              className="card-tech"
              style={{ padding: '1.5rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ padding: '0.5rem', background: 'var(--bg-surface-elevated)', borderRadius: '4px' }}>
                    <IconComponent size={20} color="var(--accent-blue)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem' }}>{robot.name}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-blue)' }}>{robot.role}</span>
                  </div>
                </div>
                <StatusBadge status={robot.status} />
              </div>
              <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{robot.summary}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                <span>View System Architecture</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
