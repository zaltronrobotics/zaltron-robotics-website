import React from 'react';

export function StatusBadge({ status, className = '' }) {
  if (!status) return null;

  const norm = status.toUpperCase();
  let category = 'concept';

  if (norm.includes('ACTIVE') || norm.includes('DEV')) {
    category = 'active';
  } else if (norm.includes('PROTO')) {
    category = 'active';
  } else if (norm.includes('FUTURE') || norm.includes('PLAN')) {
    category = 'future';
  }

  return (
    <span className={`status-badge ${category} ${className}`}>
      {status}
    </span>
  );
}
