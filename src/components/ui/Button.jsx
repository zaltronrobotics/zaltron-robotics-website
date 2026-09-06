import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Button({ 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon = true, 
  className = '', 
  ...props 
}) {
  const classes = `btn btn-${variant} ${size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : ''} ${className}`;
  
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={size === 'sm' ? 14 : 16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
