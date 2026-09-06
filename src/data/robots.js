export const robots = [
  {
    slug: 'zaltron-v1',
    legacySlug: 'v1',
    name: 'ZALTRON V1',
    code: 'Z-01',
    role: 'COMMAND',
    status: 'ACTIVE DEVELOPMENT',
    statusCategory: 'active',
    tagline: 'The Flagship Intelligent Machine.',
    summary: 'The central intelligent robotic platform and primary physical system in the ZALTRON ecosystem, designed for perception, autonomy, interaction, and system coordination.',
    description: 'ZALTRON V1 is the foundational physical intelligence platform within the ZALTRON ecosystem. Engineered with a dual-tier computing architecture, it combines high-level AI reasoning with low-level micro-second motor actuation. Designed for exploratory research and practical autonomous execution in structured and unstructured indoor environments.',
    capabilities: [
      'Dual-Tier Compute Architecture',
      'Computer Vision Perception',
      'Autonomous Exploration & SLAM Research',
      'Voice Interaction & Command Recognition',
      'Differential Drive Mobility',
      'Low-Latency Wi-Fi Telemetry',
      'Multi-Robot Coordination Gateway',
      'Opt-In Privacy-Centric Memory'
    ],
    architecture: {
      highLevel: 'PC / Edge AI Computing for Vision, Natural Language & Path Planning',
      lowLevel: 'ESP32 Real-Time Microcontroller for Actuation & Sensor Telemetry',
      connectivity: 'Dual-Band Wi-Fi & High-Frequency Packet Stream',
      sensing: 'HD Camera, Ultrasonic Distance Sensors, Microphone Array, IMU, Future LiDAR'
    },
    specsHonest: [
      { label: 'Compute Architecture', value: 'Distributed (Edge AI + ESP32 RTOS)' },
      { label: 'Locomotion', value: 'High-Torque Dual DC Motors with Encoder Feedback' },
      { label: 'Sensor Suite', value: 'Ultrasonic Array + HD Optical Sensor' },
      { label: 'Orientation', value: '6-DOF Inertial Measurement Unit (IMU)' },
      { label: 'Wireless Protocol', value: '802.11 b/g/n Wi-Fi Telemetry' },
      { label: 'Exploration Mode', value: 'Simulated SLAM & Mapping Research' },
      { label: 'Stage', value: 'Prototype Bench Testing & Software Integration' }
    ],
    useCases: [
      'Autonomous Indoor Navigation',
      'Human-Robot Collaboration & Voice Interaction',
      'Perception & Obstacle Avoidance Experimentation',
      'Central Coordinator for Multi-Robot Fleets'
    ]
  },
  {
    slug: 'scout',
    name: 'ZALTRON Scout',
    code: 'Z-02',
    role: 'EXPLORE',
    status: 'CONCEPT',
    statusCategory: 'concept',
    tagline: 'Autonomous Reconnaissance & Environment Mapping.',
    summary: 'Specialized agile exploration unit designed for fast terrain traversal, spatial reconnaissance, and high-density point cloud generation.',
    description: 'ZALTRON Scout is conceived as a lightweight, rapid-response explorer. Equipped with advanced scanning apparatus and intended future LiDAR integration, Scout traverses unfamiliar terrain ahead of larger units to build initial environment topologies and flag obstacles.',
    capabilities: [
      'High-Speed Agile Locomotion',
      'LiDAR & Depth-Camera Mapping Concept',
      'Terrain Reconstruction Research',
      'Low-Profile Chassis Design',
      'Mesh Networking with ZALTRON Hub'
    ],
    specsHonest: [
      { label: 'Platform Class', value: 'Agile Mobile Reconnaissance Unit' },
      { label: 'Target Traversal', value: 'Indoor & Compact Terrain Traversal' },
      { label: 'Primary Sensor', value: 'Wide-FOV Depth Scanner (Concept)' },
      { label: 'Network Link', value: 'Low-Latency Mesh Communication' },
      { label: 'Stage', value: 'R&D Concept & Motion Simulation' }
    ],
    useCases: [
      'Rapid Architectural Scanning',
      'Hazmat & Restricted Space Inspection',
      'Topological Map Generation for Fleets'
    ]
  },
  {
    slug: 'guard',
    name: 'ZALTRON Guard',
    code: 'Z-03',
    role: 'PROTECT',
    status: 'CONCEPT',
    statusCategory: 'concept',
    tagline: 'Perimeter Awareness & Continuous Observation.',
    summary: 'Persistent security and environmental monitoring platform engineered for 24/7 patrol routines and hazard detection.',
    description: 'ZALTRON Guard provides persistent environmental observation. Designed to patrol designated routes autonomously, Guard monitors temperature, perimeter security, air quality, and physical anomalies while broadcasting encrypted telemetry to the ZALTRON Hub.',
    capabilities: [
      'Multi-Spectral Vision Monitoring',
      'Autonomous Scheduled Patrol Paths',
      'Acoustic Anomaly Detection',
      'Environmental Sensor Suite (Temp/Gas)',
      'Direct Incident Alerting'
    ],
    specsHonest: [
      { label: 'Platform Class', value: 'Autonomous Surveillance & Monitoring' },
      { label: 'Vision System', value: 'Dual Optical + Thermal Vision (Concept)' },
      { label: 'Duty Cycle', value: 'Continuous Operation with Auto-Docking' },
      { label: 'Stage', value: 'Conceptual Design & Systems Architecture' }
    ],
    useCases: [
      'Facility & Warehouse Security Patrols',
      'Critical Infrastructure Monitoring',
      'Environmental Gas & Thermal Hazard Detection'
    ]
  },
  {
    slug: 'carrier',
    name: 'ZALTRON Carrier',
    code: 'Z-04',
    role: 'DELIVER',
    status: 'CONCEPT',
    statusCategory: 'concept',
    tagline: 'Intelligent Internal Logistics & Payload Transit.',
    summary: 'Rugged autonomous transport unit engineered for moving materials, payloads, and components safely across dynamic workspaces.',
    description: 'ZALTRON Carrier is designed to streamline internal logistics in commercial, research, and fabrication spaces. With smart load sensors, low-clearance chassis, and dynamic pedestrian avoidance, Carrier moves payloads reliably without fixed magnetic tracks.',
    capabilities: [
      'Adaptive Heavy-Duty Suspension',
      'Dynamic Obstacle & Pedestrian Avoidance',
      'Modular Payload Bed Integration',
      'Precision Docking Alignment',
      'Fleet Dispatch via ZALTRON Hub'
    ],
    specsHonest: [
      { label: 'Platform Class', value: 'Autonomous Mobile Payload Carrier' },
      { label: 'Navigation', value: 'Natural Feature Navigation (Trackless)' },
      { label: 'Payload Bay', value: 'Configurable Modular Top Deck' },
      { label: 'Stage', value: 'Conceptual Engineering Direction' }
    ],
    useCases: [
      'Automated Factory Floor Material Delivery',
      'Laboratory Specimen & Equipment Transport',
      'Warehouse Intra-Facility Order Routing'
    ]
  },
  {
    slug: 'arm',
    name: 'ZALTRON Arm',
    code: 'Z-05',
    role: 'MANIPULATE',
    status: 'CONCEPT',
    statusCategory: 'concept',
    tagline: 'Multi-Axis Precision Dexterity & Object Interaction.',
    summary: 'Dexterous robotic manipulation system capable of articulated grasping, pick-and-place, and tool operation.',
    description: 'ZALTRON Arm focuses on physical interaction with the world. Conceived as both a standalone workstation manipulator and a mountable module for ZALTRON V1 and Carrier, it investigates inverse kinematics, compliant force sensing, and computer-vision-guided grasping.',
    capabilities: [
      '6-DOF Articulated Kinematic Chain',
      'Force-Torque Feedback at End Effector',
      'Vision-Guided Precision Grasping',
      'Interchangeable Gripper Interfaces',
      'Collaborative Safe-Force Compliance'
    ],
    specsHonest: [
      { label: 'Platform Class', value: 'Articulated Robotic Manipulator' },
      { label: 'Kinematics', value: '6 Degrees of Freedom' },
      { label: 'Feedback Control', value: 'Closed-Loop Current & Position Sensing' },
      { label: 'Stage', value: 'Kinematic Simulation & Grip Modeling' }
    ],
    useCases: [
      'Precision Electronic Assembly Assistance',
      'Automated Sample Handling & Sorting',
      'Mobile Manipulation Mounted on ZALTRON Platforms'
    ]
  },
  {
    slug: 'clean',
    name: 'ZALTRON Clean',
    code: 'Z-06',
    role: 'MAINTAIN',
    status: 'PLANNED',
    statusCategory: 'future',
    tagline: 'Autonomous Surface Hygiene & Facility Maintenance.',
    summary: 'Autonomous facility care unit engineered for scheduled floor scrubbing, sanitization, and dust suppression.',
    description: 'ZALTRON Clean handles recurring maintenance tasks across commercial and industrial facilities. Operating during off-hours or dynamically around workers, it optimizes cleaning paths while conserving water and filtration consumables.',
    capabilities: [
      'Coverage Path Planning (CPP)',
      'Multi-Stage Filtration & Scrubbing',
      'Wet/Dry Surface Detection',
      'Automatic Fluid Refill via Dock',
      'Self-Cleaning Maintenance Cycle'
    ],
    specsHonest: [
      { label: 'Platform Class', value: 'Commercial Maintenance Automation' },
      { label: 'Path Planning', value: 'Full-Coverage Grid Decomposition' },
      { label: 'Stage', value: 'Future Roadmap Item' }
    ],
    useCases: [
      'Enterprise & Cleanroom Floor Maintenance',
      'Warehouse Dust Mitigation',
      'Automated Sanitization in Public Spaces'
    ]
  },
  {
    slug: 'med',
    name: 'ZALTRON Med',
    code: 'Z-07',
    role: 'ASSIST',
    status: 'PLANNED',
    statusCategory: 'future',
    tagline: 'Assistive Care Robotics & Non-Invasive Support Concept.',
    summary: 'Long-term research concept exploring empathetic human-robot interaction and non-critical logistical assistance in healthcare spaces.',
    description: 'ZALTRON Med represents a future exploratory direction focused on assistive robotics. Designed strictly as an assistive concept (not certified medical equipment), it examines how gentle voice interfaces, safe mobile navigation, and contact-free telemetry can support clinical staff.',
    capabilities: [
      'Human-Friendly Compliant Aesthetics',
      'Gentle Proximity Navigation',
      'Contactless Vital Metric Sensing (Research)',
      'Caregiver Support Routing',
      'Strict Zero-Harm Behavioral Safety'
    ],
    specsHonest: [
      { label: 'Platform Class', value: 'Healthcare Logistical Assistant (Concept)' },
      { label: 'Regulatory Status', value: 'Non-Certified / Pure R&D Concept' },
      { label: 'Stage', value: 'Future Concept Research' }
    ],
    useCases: [
      'Medical Supply Delivery in Clinical Settings',
      'Patient Escort & Indoor Wayfinding',
      'Caregiver Fatigue Reduction Support'
    ]
  },
  {
    slug: 'farm',
    name: 'ZALTRON Farm',
    code: 'Z-08',
    role: 'AGRI',
    status: 'CONCEPT',
    statusCategory: 'concept',
    tagline: 'Precision Agricultural Sensing & Crop Health Automation.',
    summary: 'Rugged outdoor robot concept designed to navigate field rows, monitor soil health, and assess crop conditions autonomously.',
    description: 'ZALTRON Farm explores agricultural robotics engineered for harsh outdoor environments. By combining multispectral crop imagery with precision soil probes, Farm assists growers in early disease detection and targeted resource delivery.',
    capabilities: [
      'High-Clearance All-Terrain Mobility',
      'Multispectral Crop Health Imagery',
      'Micro-Climate & Soil Moisture Probing',
      'Solar-Assist Power Harvesting Concept',
      'Offline Operation in Remote Areas'
    ],
    specsHonest: [
      { label: 'Platform Class', value: 'Agricultural Autonomous Rover' },
      { label: 'Terrain Capability', value: 'Uneven Soil, Row Navigation, Dust Tolerant' },
      { label: 'Stage', value: 'Concept Exploration & Field Study Modeling' }
    ],
    useCases: [
      'Row-by-Row Crop Vigor Monitoring',
      'Soil Salinity & Hydration Mapping',
      'Targeted Organic Pest Detection'
    ]
  },
  {
    slug: 'sky',
    name: 'ZALTRON Sky',
    code: 'Z-09',
    role: 'AERIAL',
    status: 'CONCEPT',
    statusCategory: 'concept',
    tagline: 'Autonomous Aerial Inspection & Volumetric Reconnaissance.',
    summary: 'Future aerial robotic platform designed for elevated inspection, vertical asset observation, and top-down fleet synchronization.',
    description: 'ZALTRON Sky expands the ecosystem into three dimensions. Designed to operate in concert with ground units like V1 and Scout, Sky provides high-altitude perspective, vertical infrastructure inspection, and airborne relay capabilities.',
    capabilities: [
      'Autonomous Hover & Precision Waypoint Navigation',
      'Vertical Facade & Roof Inspection',
      'Airborne Mesh Network Relay',
      'Autonomous Landing on ZALTRON Dock',
      'Computer Vision Defect Detection'
    ],
    specsHonest: [
      { label: 'Platform Class', value: 'Autonomous Aerial Platform (Concept)' },
      { label: 'Regulatory Status', value: 'Non-Certified Aviation Research Concept' },
      { label: 'Stage', value: 'Future Aerial Concept' }
    ],
    useCases: [
      'Industrial Roof & Solar Panel Inspection',
      'Perimeter Aerial Overwatch',
      'Multi-Robot Top-Down Spatial Coordination'
    ]
  },
  {
    slug: 'dock',
    name: 'ZALTRON Dock',
    code: 'Z-10',
    role: 'HOME BASE',
    status: 'CONCEPT',
    statusCategory: 'concept',
    tagline: 'Autonomous Power Replenishment & Diagnostic Station.',
    summary: 'Universal base station providing inductive charging, sensor calibration, high-throughput data offloading, and firmware staging.',
    description: 'ZALTRON Dock is the physical anchor of the ecosystem. Robots return autonomously to Dock when reserves deplete or when large sensory datasets require wired-speed transfer to on-premises compute nodes.',
    capabilities: [
      'Magnetic Alignment & Precision Contact Charging',
      'Automated Sensor Health Diagnostics',
      'High-Speed Physical Bus Data Sync',
      'Modular Enclosure for Diverse Robot Form Factors',
      'Thermal Management During Rapid Recharging'
    ],
    specsHonest: [
      { label: 'Platform Class', value: 'Automated Ground Support Base Station' },
      { label: 'Power Interface', value: 'Smart Contact / Inductive Hybrid (Concept)' },
      { label: 'Telemetry Link', value: 'Gigabit Ethernet Uplink to ZALTRON Hub' },
      { label: 'Stage', value: 'Architectural Blueprint & Charging Concept' }
    ],
    useCases: [
      'Unsupervised Fleet Recharging Cycles',
      'Overnight Deep Neural Model Synchronization',
      'Chassis Self-Calibration & Zero-Drift Calibration'
    ]
  },
  {
    slug: 'hub',
    name: 'ZALTRON Hub',
    code: 'Z-11',
    role: 'CENTRAL NETWORK',
    status: 'CONCEPT',
    statusCategory: 'concept',
    tagline: 'Unified Fleet Orchestration & Distributed Intelligence.',
    summary: 'The software brain and network backbone connecting every ZALTRON machine into a cohesive, collaborative intelligence network.',
    description: 'ZALTRON Hub is the nervous system of the robotic family. Rather than treating robots as disconnected islands, Hub coordinates task allocation, aggregates unified environment maps from Scout and V1, and streams behavioral updates across the fleet.',
    capabilities: [
      'Multi-Agent Task Allocation & Routing',
      'Global Unified World Map Aggregation',
      'Fleet Health & Battery Orchestration',
      'Real-Time Web & API Monitoring Console',
      'Edge Compute Clustering for Complex AI Jobs'
    ],
    specsHonest: [
      { label: 'System Class', value: 'Distributed Fleet Operating Layer' },
      { label: 'Topology', value: 'Hybrid Edge-Cloud Mesh' },
      { label: 'Latency Goal', value: 'Sub-10ms Local Event Routing' },
      { label: 'Stage', value: 'Software Protocol & Fleet Architecture Design' }
    ],
    useCases: [
      'Coordinating Multi-Robot Hand-Off Operations',
      'Global Telemetry Dashboard for Operators',
      'Autonomous Mission Planning Across Mixed Fleets'
    ]
  }
];

export const robotBySlug = (slug) => {
  if (!slug) return null;
  const clean = slug.toLowerCase();
  return robots.find(r => r.slug === clean || r.legacySlug === clean);
};
