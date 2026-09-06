import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Crosshair } from 'lucide-react';

export function ExplorationCanvas() {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);
  const [coveragePct, setCoveragePct] = useState(14);
  const [robotPos, setRobotPos] = useState({ x: 120, y: 180, angle: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Fixed internal resolution for consistent simulation
    const width = 600;
    const height = 360;
    canvas.width = width;
    canvas.height = height;

    // Virtual Obstacles (Walls & Room Interior)
    const obstacles = [
      { x: 30, y: 30, w: 540, h: 10 }, // Top Wall
      { x: 30, y: 320, w: 540, h: 10 }, // Bottom Wall
      { x: 30, y: 30, w: 10, h: 300 }, // Left Wall
      { x: 560, y: 30, w: 10, h: 300 }, // Right Wall
      { x: 180, y: 110, w: 80, h: 80 }, // Center Column
      { x: 360, y: 190, w: 90, h: 60 }  // Storage Box
    ];

    // Grid representation for mapped coverage
    const gridCols = 30;
    const gridRows = 18;
    const cellW = width / gridCols;
    const cellH = height / gridRows;
    const mapped = Array(gridRows).fill(null).map(() => Array(gridCols).fill(false));

    // Robot state
    let rx = 120;
    let ry = 180;
    let heading = 0.4;
    let speed = 1.2;
    let beamAngle = 0;
    let totalMapped = 0;

    const render = () => {
      // Background
      ctx.fillStyle = '#030508';
      ctx.fillRect(0, 0, width, height);

      // Render Technical Grid
      ctx.strokeStyle = '#0e1622';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += cellW) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += cellH) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render Mapped Coverage Cells
      ctx.fillStyle = 'rgba(0, 153, 255, 0.09)';
      for (let r = 0; r < gridRows; r++) {
        for (let c = 0; c < gridCols; c++) {
          if (mapped[r][c]) {
            ctx.fillRect(c * cellW + 1, r * cellH + 1, cellW - 2, cellH - 2);
          }
        }
      }

      // Render Obstacles (Physical Walls)
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1.5;
      obstacles.forEach(obs => {
        ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
        ctx.strokeRect(obs.x, obs.y, obs.w, obs.h);
      });

      // Update robot motion if running
      if (isRunning) {
        beamAngle += 0.08;
        
        // Dynamic bounce locomotion
        rx += Math.cos(heading) * speed;
        ry += Math.sin(heading) * speed;

        // Boundary reflection
        if (rx < 60 || rx > width - 70) {
          heading = Math.PI - heading + (Math.random() * 0.4 - 0.2);
        }
        if (ry < 60 || ry > height - 70) {
          heading = -heading + (Math.random() * 0.4 - 0.2);
        }

        // Mark current grid cell as mapped
        const curC = Math.floor(rx / cellW);
        const curR = Math.floor(ry / cellH);
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = curR + dr;
            const nc = curC + dc;
            if (nr >= 0 && nr < gridRows && nc >= 0 && nc < gridCols) {
              if (!mapped[nr][nc]) {
                mapped[nr][nc] = true;
                totalMapped++;
              }
            }
          }
        }
      }

      // Draw Sensor Raycast Fan (Simulated Sonar / LiDAR Arc)
      const numRays = 16;
      const fov = Math.PI / 2.2;
      const startAngle = heading - fov / 2;
      const stepAngle = fov / numRays;

      ctx.lineWidth = 1;
      for (let i = 0; i < numRays; i++) {
        const curRayAngle = startAngle + i * stepAngle;
        const maxRange = 110;
        const targetX = rx + Math.cos(curRayAngle) * maxRange;
        const targetY = ry + Math.sin(curRayAngle) * maxRange;

        ctx.strokeStyle = 'rgba(0, 153, 255, 0.35)';
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(targetX, targetY);
        ctx.stroke();

        // Contact point glow
        ctx.fillStyle = '#0099ff';
        ctx.beginPath();
        ctx.arc(targetX, targetY, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Robot Body
      ctx.save();
      ctx.translate(rx, ry);
      ctx.rotate(heading);

      // Chassis
      ctx.fillStyle = '#0c1420';
      ctx.strokeStyle = '#0099ff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Heading Pointer
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(16, 0);
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const interval = setInterval(() => {
      const pct = Math.min(100, Math.floor((totalMapped / (gridCols * gridRows)) * 100));
      setCoveragePct(pct);
      setRobotPos({ x: Math.round(rx), y: Math.round(ry), angle: Math.round((heading * 180) / Math.PI) });
    }, 500);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div className="slam-simulation-box">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <span className="eyebrow">CONCEPT SIMULATION // SLAM 2D</span>
          <h4 style={{ fontSize: '1.1rem', marginTop: '0.25rem' }}>Topological Occupancy Grid Mapping</h4>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={() => setIsRunning(!isRunning)} 
            className="btn btn-secondary btn-sm"
            aria-label={isRunning ? 'Pause Simulation' : 'Play Simulation'}
          >
            {isRunning ? <Pause size={13} /> : <Play size={13} />}
            <span>{isRunning ? 'Pause' : 'Resume'}</span>
          </button>
        </div>
      </div>

      <canvas ref={canvasRef} className="slam-canvas" />

      <div className="slam-controls">
        <div className="slam-stats">
          <span>COORDINATES: <b>X:{robotPos.x} Y:{robotPos.y}</b></span>
          <span>HEADING: <b>{robotPos.angle}°</b></span>
          <span>ESTIMATED COVERAGE: <b>{coveragePct}%</b></span>
        </div>
        <div style={{ color: 'var(--text-dim)', fontSize: '0.6875rem' }}>
          RADIAL RAYCAST: 16 BEAMS • INVERSE SENSOR MODEL: ACTIVE
        </div>
      </div>
    </div>
  );
}
