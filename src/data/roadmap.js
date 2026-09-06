export const roadmapMilestones = [
  {
    phase: 'NOW',
    phaseLabel: 'Current Phase',
    theme: 'CORE ARCHITECTURE & PROTOTYPE VALIDATION',
    status: 'IN PROGRESS',
    items: [
      {
        title: 'ZALTRON V1 Hardware Testbed',
        description: 'Chassis assembly, dual DC motor integration, L298N motor driver tuning, and ESP32 microcontroller firmware.',
        status: 'Active'
      },
      {
        title: 'Dual-Tier Compute Bridge',
        description: 'Establishing bidirectional low-latency Wi-Fi telemetry between PC AI runtime and ESP32 motor/sensor firmware.',
        status: 'Active'
      },
      {
        title: 'Perception & Sonar Sweep',
        description: 'Servo-actuated ultrasonic distance scanner and optical camera ingestion for obstacle boundary detection.',
        status: 'Bench Testing'
      },
      {
        title: 'Digital Systems & Brand Entity',
        description: 'Official web architecture, SEO schema, engineering repository, and brand ecosystem blueprint.',
        status: 'Completed'
      }
    ]
  },
  {
    phase: 'NEXT',
    phaseLabel: 'Upcoming Horizons',
    theme: 'INTELLIGENCE, LOCAL SLAM & INTERACTION',
    status: 'PLANNED',
    items: [
      {
        title: 'On-Robot Edge Vision Inference',
        description: 'Integrating compact neural accelerators for on-device object detection and surface boundary classification.',
        status: 'Architecting'
      },
      {
        title: 'Exploration Mode & 2D SLAM',
        description: 'Autonomous occupancy grid construction, path planning via A*, and continuous real-time localization.',
        status: 'Simulating'
      },
      {
        title: 'Acoustic Interaction Loop',
        description: 'Dedicated microphone integration, local wake phrase detector, and vocal status telemetry feedback.',
        status: 'Prototyping'
      },
      {
        title: 'Scout & Guard Prototype Concepts',
        description: 'Initial CAD modeling and mechanical proofs-of-concept for the Scout and Guard specialized platforms.',
        status: 'Design Stage'
      }
    ]
  },
  {
    phase: 'FUTURE',
    phaseLabel: 'Long-Term Vision',
    theme: 'COORDINATED FLEET ECOSYSTEM',
    status: 'CONCEPTUAL',
    items: [
      {
        title: 'ZALTRON Hub Multi-Agent Operating Mesh',
        description: 'Decentralized fleet routing, shared multi-robot topological maps, and cooperative task allocation.',
        status: 'R&D Vision'
      },
      {
        title: 'Autonomous Docking & Power Cycling',
        description: 'ZALTRON Dock physical base with precision contact charging and autonomous diagnostic cycles.',
        status: 'Concept'
      },
      {
        title: 'Specialized Hardware Extensions',
        description: 'Fabrication of ZALTRON Arm, Carrier, Clean, and exploration of agricultural and aerial robotics domains.',
        status: 'Vision'
      }
    ]
  }
];
