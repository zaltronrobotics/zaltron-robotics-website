import React, { useState } from 'react';
import { robots } from '../data/robots';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { RobotCard } from '../components/cards/RobotCard';

export function Robots() {
  const [filter, setFilter] = useState('ALL');

  const filteredRobots = filter === 'ALL'
    ? robots
    : robots.filter(r => r.statusCategory === filter.toLowerCase() || (filter === 'ACTIVE' && r.statusCategory === 'active'));

  return (
    <>
      <Seo
        title="Robots Ecosystem | ZALTRON ROBOTICS"
        description="Explore the full family of specialized intelligent machines in the ZALTRON robotics ecosystem."
      />

      <main className="section-spacing bg-grid-tech">
        <div className="container">
          <SectionHeader
            eyebrow="THE ZALTRON ECOSYSTEM"
            title="Specialized Machines. One Coordinated Family."
            description="From our flagship command platform to agile reconnaissance rovers, dexterous arms, and central network orchestration—explore every system being researched and architected at ZALTRON ROBOTICS."
          />

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {['ALL', 'ACTIVE', 'CONCEPT', 'FUTURE'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-secondary'}`}
              >
                {f === 'ALL' ? 'ALL SYSTEMS (11)' : f}
              </button>
            ))}
          </div>

          {/* Responsive Robot Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.75rem' }}>
            {filteredRobots.map((robot, idx) => (
              <RobotCard key={robot.slug} robot={robot} index={idx} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
