import React, { useState } from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

export function MemoryToggle() {
  const [memoryOptIn, setMemoryOptIn] = useState(false);

  return (
    <div className="memory-privacy-card">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <ShieldCheck size={18} color="var(--accent-blue)" />
          <span className="eyebrow">ETHICAL ARCHITECTURE // PRINCIPLE</span>
        </div>
        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
          Opt-In Memory & Ephemeral Perception
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '540px' }}>
          Autonomous sensory data should belong to the operator. In ZALTRON V1, persistent memory retention is disabled by default: camera streams and voice transcripts process ephemerally in RAM and are never permanently recorded unless explicitly requested.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', background: 'var(--bg-surface-elevated)', padding: '1.25rem 1.75rem', borderRadius: '4px', border: '1px solid var(--border-muted)', minWidth: '200px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {memoryOptIn ? <Lock size={15} color="var(--accent-blue)" /> : <EyeOff size={15} color="var(--text-muted)" />}
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', fontWeight: 600, color: memoryOptIn ? 'var(--accent-blue)' : 'var(--text-muted)' }}>
            MEMORY {memoryOptIn ? 'ENABLED' : 'OFF'}
          </span>
        </div>

        <div 
          className={`memory-toggle-switch ${memoryOptIn ? 'active' : ''}`}
          onClick={() => setMemoryOptIn(!memoryOptIn)}
          role="switch"
          aria-checked={memoryOptIn}
          aria-label="Toggle Opt-In Memory Simulation"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setMemoryOptIn(!memoryOptIn); }}
        >
          <div className="memory-toggle-knob" />
        </div>

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-dim)', textAlign: 'center' }}>
          {memoryOptIn ? 'Operator Permission Granted' : 'Default Ephemeral Buffer'}
        </span>
      </div>
    </div>
  );
}
