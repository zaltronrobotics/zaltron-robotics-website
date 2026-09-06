import React from 'react';

export function RobotHeroVisual({ mini = false, className = '' }) {
  return (
    <div className={`robot-visual-container ${mini ? 'mini' : ''} ${className}`} role="img" aria-label="ZALTRON V1 Flagship Robot Architecture Visualization">
      {/* HUD Top Bar */}
      <div className="visual-hud-top">
        <span>SYS // V1-PROTOTYPE</span>
        <span className="visual-hud-status">ACTIVE DEV</span>
      </div>

      {/* Responsive Scalable SVG Robot */}
      <div className="robot-svg-wrapper">
        <div className="scan-beam" aria-hidden="true" />

        <svg
          className="robot-svg"
          viewBox="0 0 400 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Ambient Radial Backlight */}
          <circle cx="200" cy="240" r="160" fill="url(#coreGlow)" opacity="0.4" />

          {/* Antenna & Beacon */}
          <line x1="200" y1="40" x2="200" y2="90" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="200" cy="38" r="6" fill="#0099ff" />
          <circle cx="200" cy="38" r="12" stroke="#0099ff" strokeWidth="1.5" opacity="0.6" strokeDasharray="3 3" />

          {/* Neck Mount & Swivel */}
          <rect x="175" y="175" width="50" height="24" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <line x1="185" y1="187" x2="215" y2="187" stroke="#0099ff" strokeWidth="1.5" />

          {/* Head Unit */}
          <rect x="110" y="85" width="180" height="96" rx="28" fill="#0c131d" stroke="#334155" strokeWidth="2.5" />
          <path d="M125 105 H275" stroke="#1e293b" strokeWidth="1.5" />

          {/* Optical Sensor Eyes (Dual Camera Perception) */}
          <g transform="translate(140, 118)">
            <circle cx="18" cy="18" r="18" fill="#05070a" stroke="#0099ff" strokeWidth="2" />
            <circle cx="18" cy="18" r="10" fill="#0099ff" opacity="0.8" />
            <circle cx="15" cy="15" r="4" fill="#ffffff" />
          </g>

          <g transform="translate(224, 118)">
            <circle cx="18" cy="18" r="18" fill="#05070a" stroke="#0099ff" strokeWidth="2" />
            <circle cx="18" cy="18" r="10" fill="#0099ff" opacity="0.8" />
            <circle cx="21" cy="15" r="4" fill="#ffffff" />
          </g>

          {/* Ultrasonic Sonar Array Visor */}
          <rect x="160" y="156" width="80" height="12" rx="3" fill="#16202c" stroke="#0099ff" strokeWidth="1" />
          <circle cx="175" cy="162" r="3" fill="#38bdf8" />
          <circle cx="200" cy="162" r="3" fill="#38bdf8" />
          <circle cx="225" cy="162" r="3" fill="#38bdf8" />

          {/* Main Chassis / Faceted Body */}
          <polygon
            points="120,200 280,200 310,340 90,340"
            fill="#0f1722"
            stroke="#334155"
            strokeWidth="2.5"
          />
          {/* Internal Panel Layer */}
          <polygon
            points="135,215 265,215 290,325 110,325"
            fill="#090e15"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* Core Brand Badge Display */}
          <rect x="145" y="240" width="110" height="42" rx="4" fill="#05070a" stroke="#0099ff" strokeWidth="1" />
          <text x="200" y="258" fill="#f8fafc" fontSize="11" fontFamily="var(--font-mono)" fontWeight="600" textAnchor="middle" letterSpacing="0.1em">ZALTRON</text>
          <text x="200" y="272" fill="#0099ff" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.16em">V1 // CORE</text>

          {/* Status Indicator LEDs */}
          <circle cx="130" cy="235" r="3" fill="#0099ff" />
          <circle cx="130" cy="250" r="3" fill="#38bdf8" />
          <circle cx="130" cy="265" r="3" fill="#64748b" />

          <circle cx="270" cy="235" r="3" fill="#0099ff" />
          <circle cx="270" cy="250" r="3" fill="#38bdf8" />
          <circle cx="270" cy="265" r="3" fill="#64748b" />

          {/* Heavy-Duty Locomotion Wheels (Left & Right) */}
          <g id="left-wheel">
            <rect x="62" y="295" width="45" height="115" rx="14" fill="#0c1117" stroke="#475569" strokeWidth="3" />
            <line x1="62" y1="320" x2="107" y2="320" stroke="#1e293b" strokeWidth="2" />
            <line x1="62" y1="352" x2="107" y2="352" stroke="#1e293b" strokeWidth="2" />
            <line x1="62" y1="385" x2="107" y2="385" stroke="#1e293b" strokeWidth="2" />
            <circle cx="84" cy="352" r="10" fill="#1e293b" stroke="#0099ff" strokeWidth="1.5" />
          </g>

          <g id="right-wheel">
            <rect x="293" y="295" width="45" height="115" rx="14" fill="#0c1117" stroke="#475569" strokeWidth="3" />
            <line x1="293" y1="320" x2="338" y2="320" stroke="#1e293b" strokeWidth="2" />
            <line x1="293" y1="352" x2="338" y2="352" stroke="#1e293b" strokeWidth="2" />
            <line x1="293" y1="385" x2="338" y2="385" stroke="#1e293b" strokeWidth="2" />
            <circle cx="315" cy="352" r="10" fill="#1e293b" stroke="#0099ff" strokeWidth="1.5" />
          </g>

          {/* Under-Chassis Ground Illumination */}
          <ellipse cx="200" cy="425" rx="140" ry="14" fill="url(#groundGlow)" />

          {/* Gradient Definitions */}
          <defs>
            <radialGradient id="coreGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
              <stop offset="0%" stopColor="#0099ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#05070a" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="groundGlow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#0099ff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0099ff" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* HUD Bottom Bar */}
      <div className="visual-hud-bottom">
        <span>ARCH // DUAL-TIER RTOS</span>
        <span>TELEMETRY: 2.4GHz</span>
      </div>
    </div>
  );
}
