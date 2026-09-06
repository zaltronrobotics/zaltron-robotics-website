export const techArchitecture = [
  {
    step: '01',
    phase: 'SENSE',
    title: 'High-Density Sensory Ingestion',
    summary: 'Capturing the raw physical reality through dual-band optical sensors, ultrasonic sonar arrays, inertial measurement units, and audio microphones.',
    bullets: [
      'Raw camera streaming for optical perception',
      'Millimeter-precision ultrasonic distance arrays',
      '6-axis inertial measurement unit (IMU) telemetry',
      'Directional microphone array for acoustic localization'
    ]
  },
  {
    step: '02',
    phase: 'UNDERSTAND',
    title: 'Perceptual Synthesis & World Modeling',
    summary: 'Fusing asynchronous sensor feeds into a spatial-temporal environment representation, filtering sensor noise and tracking dynamic obstacles.',
    bullets: [
      'Multi-modal sensor fusion algorithms',
      'Occupancy grid representation & depth clustering',
      'Natural language command parsing and intent extraction',
      'Real-time obstacle classification (static vs dynamic)'
    ]
  },
  {
    step: '03',
    phase: 'PLAN',
    title: 'Autonomous Trajectory & Task Reasoning',
    summary: 'Translating high-level operator intents or autonomous objectives into collision-free kinematics and task execution trees.',
    bullets: [
      'Global A* & Dijkstra topological path calculation',
      'Local dynamic window obstacle avoidance',
      'Finite state machine (FSM) & behavior tree execution',
      'Resource and battery reserve optimization'
    ]
  },
  {
    step: '04',
    phase: 'ACT',
    title: 'Microsecond Motor & Hardware Control',
    summary: 'Executing velocity vectors and joint kinematics with closed-loop encoder feedback and hardware-level safety interrupts.',
    bullets: [
      'ESP32 deterministic real-time motor driver control',
      'PWM velocity regulation with encoder closed-loop tuning',
      'Sub-millisecond emergency stop safety interlocks',
      'Smooth S-curve acceleration profiles to protect chassis'
    ]
  },
  {
    step: '05',
    phase: 'LEARN',
    title: 'Continuous Simulation & Parameter Tuning',
    summary: 'Evaluating physical run telemetry against digital simulations to refine PID parameters, SLAM thresholds, and vision weights.',
    bullets: [
      'Telemetry logging for post-run telemetry audit',
      'Software-in-the-loop (SITL) simulation regression',
      'Iterative perception threshold calibration',
      'Opt-in knowledge accumulation without privacy invasion'
    ]
  }
];

export const techPillars = [
  {
    id: 'ai-reasoning',
    title: 'Physical Artificial Intelligence',
    eyebrow: 'INTELLIGENCE',
    description: 'Bridging the divide between digital neural processing and real-world mechanics. Our architecture separates heavy AI reasoning onto edge computation nodes while delegating real-time motor commands to microcontrollers.'
  },
  {
    id: 'computer-vision',
    title: 'Real-Time Computer Vision',
    eyebrow: 'PERCEPTION',
    description: 'Optical perception tuned for dynamic spatial understanding, surface segmentation, boundary tracking, and visual odometry without reliance on continuous cloud connectivity.'
  },
  {
    id: 'slam-navigation',
    title: 'SLAM & Spatial Mapping',
    eyebrow: 'AUTONOMY',
    description: 'Simultaneous Localization and Mapping research designed to construct topological grids of unfamiliar rooms, track robot coordinates, and plan optimal point-to-point traversal.'
  },
  {
    id: 'embedded-systems',
    title: 'Deterministic Embedded Control',
    eyebrow: 'HARDWARE',
    description: 'Reliable real-time control built around the ESP32 microcontroller architecture, ensuring millisecond motor response, hardware watchdog protection, and clean sensor polling.'
  },
  {
    id: 'voice-interaction',
    title: 'Human-Robot Interaction (HRI)',
    eyebrow: 'INTERACTION',
    description: 'Natural speech processing and audio status indicators engineered for intuitive human collaboration. Designed with local wake processing and clear privacy safeguards.'
  },
  {
    id: 'multi-robot-mesh',
    title: 'Multi-Agent Mesh Coordination',
    eyebrow: 'ECOSYSTEM',
    description: 'Decentralized communication protocol allowing robots in the ZALTRON family to negotiate spatial priorities, share environmental maps, and coordinate payload handoffs.'
  }
];
