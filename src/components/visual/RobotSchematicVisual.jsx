import React from 'react';

export function RobotSchematicVisual({ robot, className = '' }) {
  if (!robot) return null;

  const renderSchematic = () => {
    switch (robot.slug) {
      case 'scout':
        return (
          <svg viewBox="0 0 360 320" fill="none" className="robot-svg">
            <ellipse cx="180" cy="270" rx="120" ry="12" fill="url(#blueGroundGlow)" />
            {/* Rover Chassis */}
            <rect x="70" y="150" width="220" height="75" rx="12" fill="#0e1724" stroke="#334155" strokeWidth="2" />
            <line x1="90" y1="185" x2="270" y2="185" stroke="#1e293b" strokeWidth="1.5" />
            {/* Top Scanning LiDAR Turret */}
            <rect x="150" y="110" width="60" height="40" rx="6" fill="#16202c" stroke="#0099ff" strokeWidth="1.5" />
            <circle cx="180" cy="128" r="10" fill="#05070a" stroke="#0099ff" strokeWidth="1.5" />
            <circle cx="180" cy="128" r="4" fill="#38bdf8" />
            {/* Forward Rangefinder Beams */}
            <line x1="205" y1="128" x2="310" y2="95" stroke="#0099ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="205" y1="128" x2="320" y2="128" stroke="#0099ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
            <line x1="205" y1="128" x2="310" y2="160" stroke="#0099ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            {/* High-Traction Wheels */}
            <rect x="50" y="195" width="50" height="70" rx="12" fill="#080b0f" stroke="#475569" strokeWidth="2.5" />
            <rect x="155" y="205" width="50" height="60" rx="12" fill="#080b0f" stroke="#475569" strokeWidth="2.5" />
            <rect x="260" y="195" width="50" height="70" rx="12" fill="#080b0f" stroke="#475569" strokeWidth="2.5" />
            <text x="180" y="172" fill="#94a3b8" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.12em">SCOUT // SLAM RECON</text>
          </svg>
        );

      case 'guard':
        return (
          <svg viewBox="0 0 360 320" fill="none" className="robot-svg">
            <ellipse cx="180" cy="285" rx="110" ry="12" fill="url(#blueGroundGlow)" />
            {/* Perimeter Shielded Outer Casing */}
            <path d="M120 250 L100 130 L180 80 L260 130 L240 250 Z" fill="#0c1420" stroke="#334155" strokeWidth="2" />
            {/* Dual Optical & Thermal Sensor Dome */}
            <circle cx="180" cy="140" r="32" fill="#05070a" stroke="#0099ff" strokeWidth="2" />
            <circle cx="180" cy="140" r="16" fill="#0099ff" opacity="0.4" />
            <circle cx="180" cy="140" r="6" fill="#ffffff" />
            {/* 360 Radar Sweep Wave */}
            <ellipse cx="180" cy="140" rx="75" ry="35" stroke="#0099ff" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            {/* Lower Heavy Track Base */}
            <rect x="90" y="240" width="180" height="40" rx="10" fill="#080b0f" stroke="#475569" strokeWidth="2" />
            <text x="180" y="205" fill="#38bdf8" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.14em">GUARD // PERIMETER SEC</text>
          </svg>
        );

      case 'carrier':
        return (
          <svg viewBox="0 0 360 320" fill="none" className="robot-svg">
            <ellipse cx="180" cy="275" rx="130" ry="12" fill="url(#blueGroundGlow)" />
            {/* Heavy Flatbed Cargo Deck */}
            <rect x="50" y="140" width="260" height="28" rx="4" fill="#16202c" stroke="#0099ff" strokeWidth="1.5" />
            {/* Low-Clearance Chassis */}
            <rect x="65" y="168" width="230" height="65" rx="6" fill="#0a0f16" stroke="#334155" strokeWidth="2" />
            {/* Cargo Tie-Down Brackets */}
            <line x1="90" y1="135" x2="90" y2="140" stroke="#0099ff" strokeWidth="2" />
            <line x1="180" y1="135" x2="180" y2="140" stroke="#0099ff" strokeWidth="2" />
            <line x1="270" y1="135" x2="270" y2="140" stroke="#0099ff" strokeWidth="2" />
            {/* Heavy Mecanum Drive Units */}
            <rect x="60" y="215" width="55" height="50" rx="10" fill="#06090d" stroke="#475569" strokeWidth="2" />
            <rect x="245" y="215" width="55" height="50" rx="10" fill="#06090d" stroke="#475569" strokeWidth="2" />
            <text x="180" y="200" fill="#94a3b8" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.15em">CARRIER // 250KG TRANSIT</text>
          </svg>
        );

      case 'arm':
        return (
          <svg viewBox="0 0 360 320" fill="none" className="robot-svg">
            <ellipse cx="180" cy="285" rx="90" ry="10" fill="url(#blueGroundGlow)" />
            {/* Swivel Base */}
            <rect x="130" y="250" width="100" height="30" rx="6" fill="#0a0f16" stroke="#334155" strokeWidth="2" />
            <circle cx="180" cy="245" r="16" fill="#16202c" stroke="#0099ff" strokeWidth="1.5" />
            {/* Lower Articulated Link */}
            <line x1="180" y1="245" x2="140" y2="160" stroke="#334155" strokeWidth="14" strokeLinecap="round" />
            <circle cx="140" cy="160" r="12" fill="#0099ff" />
            {/* Upper Articulated Link */}
            <line x1="140" y1="160" x2="220" y2="90" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
            <circle cx="220" cy="90" r="10" fill="#0099ff" />
            {/* Parallel Gripper End-Effector */}
            <path d="M220 90 L250 80 L255 65" stroke="#38bdf8" strokeWidth="3" fill="none" />
            <path d="M220 90 L250 100 L255 115" stroke="#38bdf8" strokeWidth="3" fill="none" />
            <text x="180" y="270" fill="#94a3b8" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.1em">ARM // 6-DOF DEXTERITY</text>
          </svg>
        );

      case 'clean':
        return (
          <svg viewBox="0 0 360 320" fill="none" className="robot-svg">
            <ellipse cx="180" cy="275" rx="120" ry="12" fill="url(#blueGroundGlow)" />
            {/* Sleek Aerodynamic Disc Chassis */}
            <rect x="60" y="160" width="240" height="85" rx="35" fill="#0c1420" stroke="#334155" strokeWidth="2" />
            {/* Scrubbing & Filtration Chamber */}
            <ellipse cx="120" cy="230" rx="35" ry="12" fill="#070c12" stroke="#0099ff" strokeWidth="1.5" />
            <ellipse cx="240" cy="230" rx="35" ry="12" fill="#070c12" stroke="#0099ff" strokeWidth="1.5" />
            {/* Fluid Indicator Light Strip */}
            <line x1="100" y1="180" x2="260" y2="180" stroke="#0099ff" strokeWidth="2" strokeLinecap="round" />
            <text x="180" y="210" fill="#cbd5e1" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.12em">CLEAN // AUTONOMOUS CARE</text>
          </svg>
        );

      case 'med':
        return (
          <svg viewBox="0 0 360 320" fill="none" className="robot-svg">
            <ellipse cx="180" cy="285" rx="100" ry="12" fill="url(#blueGroundGlow)" />
            {/* Compliant Organic Tower */}
            <rect x="120" y="110" width="120" height="150" rx="30" fill="#0c1522" stroke="#334155" strokeWidth="2" />
            {/* Gentle Friendly Display Visor */}
            <rect x="135" y="130" width="90" height="42" rx="12" fill="#04070a" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="160" cy="151" r="5" fill="#38bdf8" />
            <circle cx="200" cy="151" r="5" fill="#38bdf8" />
            {/* Soft Ambient Radiance Ring */}
            <ellipse cx="180" cy="200" rx="35" ry="10" stroke="#0099ff" strokeWidth="1.5" opacity="0.6" />
            <text x="180" y="245" fill="#94a3b8" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.1em">MED // ASSISTIVE CONCEPT</text>
          </svg>
        );

      case 'farm':
        return (
          <svg viewBox="0 0 360 320" fill="none" className="robot-svg">
            <ellipse cx="180" cy="285" rx="130" ry="12" fill="url(#blueGroundGlow)" />
            {/* High-Clearance Portal Suspension */}
            <path d="M80 260 L80 140 L280 140 L280 260" stroke="#334155" strokeWidth="10" fill="none" strokeLinecap="square" />
            {/* Elevated Central Crop Sensing Module */}
            <rect x="120" y="110" width="120" height="60" rx="8" fill="#0b121c" stroke="#0099ff" strokeWidth="1.5" />
            {/* Downward Soil & Multispectral Probe */}
            <line x1="180" y1="170" x2="180" y2="245" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="180" cy="248" r="4" fill="#0099ff" />
            {/* Large All-Terrain Ag Wheels */}
            <rect x="60" y="220" width="40" height="65" rx="12" fill="#06090e" stroke="#475569" strokeWidth="2.5" />
            <rect x="260" y="220" width="40" height="65" rx="12" fill="#06090e" stroke="#475569" strokeWidth="2.5" />
            <text x="180" y="145" fill="#94a3b8" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.12em">FARM // CROP SCOUTING</text>
          </svg>
        );

      case 'sky':
        return (
          <svg viewBox="0 0 360 320" fill="none" className="robot-svg">
            <ellipse cx="180" cy="280" rx="90" ry="8" fill="url(#blueGroundGlow)" opacity="0.3" />
            {/* Aerodynamic Carbon Frame */}
            <circle cx="180" cy="140" r="32" fill="#0c1420" stroke="#0099ff" strokeWidth="2" />
            {/* Hex Rotor Booms */}
            <line x1="180" y1="140" x2="90" y2="90" stroke="#334155" strokeWidth="4" />
            <line x1="180" y1="140" x2="270" y2="90" stroke="#334155" strokeWidth="4" />
            <line x1="180" y1="140" x2="70" y2="170" stroke="#334155" strokeWidth="4" />
            <line x1="180" y1="140" x2="290" y2="170" stroke="#334155" strokeWidth="4" />
            {/* Rotor Circles */}
            <circle cx="90" cy="90" r="24" stroke="#0099ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
            <circle cx="270" cy="90" r="24" stroke="#0099ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
            <circle cx="70" cy="170" r="24" stroke="#0099ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
            <circle cx="290" cy="170" r="24" stroke="#0099ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
            {/* Gimbal Camera Pod */}
            <circle cx="180" cy="155" r="10" fill="#040609" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="180" y="215" fill="#38bdf8" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.14em">SKY // VOLUMETRIC AERIAL</text>
          </svg>
        );

      case 'dock':
        return (
          <svg viewBox="0 0 360 320" fill="none" className="robot-svg">
            {/* Precision Ground Charging Pad */}
            <path d="M40 260 L90 190 L270 190 L320 260 Z" fill="#0c1420" stroke="#334155" strokeWidth="2" />
            {/* Magnetic Guidance Track */}
            <line x1="180" y1="195" x2="180" y2="255" stroke="#0099ff" strokeWidth="3" strokeDasharray="6 4" />
            {/* Vertical Diagnostic Staging Tower */}
            <rect x="130" y="70" width="100" height="120" rx="4" fill="#080e15" stroke="#0099ff" strokeWidth="1.5" />
            {/* Telemetry Status Bar */}
            <rect x="150" y="90" width="60" height="8" rx="2" fill="#0099ff" />
            <rect x="150" y="105" width="40" height="8" rx="2" fill="#38bdf8" />
            <text x="180" y="150" fill="#94a3b8" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.12em">DOCK // 48V INDUCTIVE</text>
          </svg>
        );

      case 'hub':
        return (
          <svg viewBox="0 0 360 320" fill="none" className="robot-svg">
            <ellipse cx="180" cy="285" rx="100" ry="10" fill="url(#blueGroundGlow)" />
            {/* Central Network Mainframe Tower */}
            <rect x="110" y="60" width="140" height="210" rx="8" fill="#09111b" stroke="#334155" strokeWidth="2" />
            {/* High-Throughput Routing Core */}
            <rect x="130" y="90" width="100" height="40" rx="4" fill="#04070a" stroke="#0099ff" strokeWidth="1.5" />
            <circle cx="150" cy="110" r="4" fill="#0099ff" />
            <circle cx="180" cy="110" r="4" fill="#38bdf8" />
            <circle cx="210" cy="110" r="4" fill="#0099ff" />
            {/* Fleet Mesh Pulse Lines */}
            <line x1="70" y1="110" x2="110" y2="110" stroke="#0099ff" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="250" y1="110" x2="290" y2="110" stroke="#0099ff" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="180" y1="35" x2="180" y2="60" stroke="#0099ff" strokeWidth="2" />
            <circle cx="180" cy="30" r="6" fill="#0099ff" />
            <text x="180" y="180" fill="#38bdf8" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="0.14em">HUB // MULTI-AGENT MESH</text>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`robot-visual-container ${className}`} role="img" aria-label={`${robot.name} Technical Schematic`}>
      <div className="visual-hud-top">
        <span>SYS // {robot.code}</span>
        <span className="visual-hud-status">{robot.status}</span>
      </div>

      <div className="robot-svg-wrapper">
        <div className="scan-beam" aria-hidden="true" />
        {renderSchematic()}
        <defs>
          <radialGradient id="blueGroundGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#0099ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#05070a" stopOpacity="0" />
          </radialGradient>
        </defs>
      </div>

      <div className="visual-hud-bottom">
        <span>ROLE // {robot.role}</span>
        <span>STATUS // {robot.status}</span>
      </div>
    </div>
  );
}
