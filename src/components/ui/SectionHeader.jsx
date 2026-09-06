import React from 'react';

export function SectionHeader({ eyebrow, title, description, centered = false, className = '' }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
}
