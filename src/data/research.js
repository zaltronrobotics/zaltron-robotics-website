export const researchAreas = [
  {
    id: 'slam-odometry',
    title: 'Visual-Inertial SLAM & Occupancy Mapping',
    eyebrow: 'MAPPING RESEARCH',
    status: 'ACTIVE EXPERIMENT',
    summary: 'Investigating lightweight SLAM algorithms capable of running on constrained edge computers to yield high-fidelity 2D and 2.5D spatial occupancy maps.',
    hypothesis: 'Can sensor fusion between monocular camera keypoints, ultrasonic sweeps, and IMU dead-reckoning eliminate drift in low-cost robotics platforms?',
    methods: [
      'Extended Kalman Filter (EKF) sensor fusion',
      'Ultrasonic radial range boundary tracing',
      'Raycasting occupancy grid updates',
      'Keypoint corner feature tracking'
    ],
    statusHonest: 'Currently in software simulation and preliminary ESP32 sensor sweep validation.'
  },
  {
    id: 'hri-voice',
    title: 'Low-Latency Wake Word & Intent Pipelines',
    eyebrow: 'HRI RESEARCH',
    status: 'PROTOTYPE TESTING',
    summary: 'Designing an intuitive audio command loop that processes spoken operator commands, parses intents, and triggers physical maneuvers safely.',
    hypothesis: 'Can local acoustic preprocessing eliminate reliance on third-party cloud engines for basic directional robotics commands?',
    methods: [
      'Local wake phrase detection pipeline',
      'Phoneme energy thresholding in noise environments',
      'Finite vocabulary command parsing',
      'Acoustic feedback confirmations'
    ],
    statusHonest: 'Bench-tested on development PC connected wirelessly to prototype hardware.'
  },
  {
    id: 'distributed-mesh',
    title: 'Heterogeneous Fleet Coordination Protocols',
    eyebrow: 'NETWORK RESEARCH',
    status: 'CONCEPT STUDY',
    summary: 'Evaluating communication topologies for heterogeneous robotic systems (command units, rovers, manipulators) operating in Wi-Fi-challenged settings.',
    hypothesis: 'How can peer-to-peer peer discovery ensure continuous operation when the primary base station or central access point drops offline?',
    methods: [
      'Lightweight UDP broadcast beaconing',
      'Decentralized state vector synchronization',
      'Conflict-free Replicated Data Types (CRDTs) for maps',
      'Prioritized collision avoidance signaling'
    ],
    statusHonest: 'Algorithmic design and packet modeling phase.'
  },
  {
    id: 'adaptive-motion',
    title: 'Closed-Loop Odometry & Traction Control',
    eyebrow: 'LOCOMOTION RESEARCH',
    status: 'ACTIVE EXPERIMENT',
    summary: 'Analyzing wheel slip, surface friction variations, and motor driver heating under continuous directional shifts.',
    hypothesis: 'Can encoder pulse counting combined with IMU linear acceleration detect surface slip in real time and dynamically throttle PWM output?',
    methods: [
      'Encoder tick differentiation',
      'IMU longitudinal acceleration correlation',
      'Adaptive PWM scaling curves',
      'Ramp-up torque limiting'
    ],
    statusHonest: 'Physical breadboard prototype testing on ZALTRON V1 chassis testbed.'
  }
];
