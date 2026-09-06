import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Navigation, Shield, Truck, Wrench, Sparkles, HeartPulse, Sprout, Wind, Zap, Network } from 'lucide-react';
import { StatusBadge } from '../ui/StatusBadge';

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
    default: return Cpu;
  }
};

export function RobotCard({ robot, index }) {
  const Icon = getRoleIcon(robot.role);
  const isFeatured = robot.slug === 'zaltron-v1';

  return (
    <Link 
      to={`/robots/${robot.slug}`} 
      className={`card-tech ${isFeatured ? 'featured' : ''}`}
      style={{
        gridColumn: isFeatured ? 'span 2' : 'span 1',
        minHeight: '290px',
        justifyContent: 'space-between'
      }}
    >
      <div>
        {/* Card Header with Role & Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Icon size={16} color="var(--accent-blue)" />
            <span className="eyebrow" style={{ fontSize: '0.625rem' }}>
              {robot.code || `Z-0${index + 1}`} // {robot.role}
            </span>
          </div>
          <StatusBadge status={robot.status} />
        </div>

        {/* Name & Tagline */}
        <h3 style={{ fontSize: isFeatured ? '2rem' : '1.35rem', marginBottom: '0.35rem' }}>
          {robot.name}
        </h3>
        <p style={{ fontSize: '0.8125rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
          {robot.tagline}
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {robot.summary}
        </p>
      </div>

      {/* Footer Link */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {isFeatured ? 'FLAGSHIP PLATFORM' : 'ECOSYSTEM SPEC'}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
          <span>Explore</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}
