export const journalArticles = [
  {
    slug: 'architecting-dual-tier-robotics-ai',
    date: '2026-08-28',
    category: 'ENGINEERING',
    readTime: '6 min read',
    title: 'Architecting a Dual-Tier Physical AI System: Separating High-Level Reasoning from Real-Time Microcontroller Control',
    excerpt: 'Why we split the computational pipeline between edge PC AI nodes and the ESP32 microcontroller, ensuring deterministic motor safety while leveraging heavy computer vision models.',
    content: `When building intelligent mobile robots, one of the most fundamental engineering decisions is where computation happens. Heavy machine learning models, dense convolutional neural networks, and semantic spatial reasoning require substantial compute, high-speed RAM, and thermal headroom. Conversely, motor control, PWM pulse generation, and emergency obstacle stops require deterministic, microsecond-accurate timing that standard general-purpose operating systems (Linux/Windows) cannot reliably guarantee without real-time kernel modifications.

In ZALTRON V1, we resolved this tension by implementing a dual-tier distributed architecture:

1. **High-Level Tier (Host/Edge PC)**: Executes camera stream ingestion, obstacle classification, language parsing, and topological path generation.
2. **Low-Level Tier (ESP32 RTOS)**: Dedicated exclusively to motor driver modulation, encoder counter reading, ultrasonic sensor polling, and instant hardware fail-safes.
3. **Telemetry Channel (Wi-Fi Protocol)**: Structured, lightweight UDP/TCP packets exchanging positional commands and sensor readings.

This division ensures that even if a heavy vision model experiences temporary latency jitter, the robot's low-level microcontroller continues monitoring safety bounds and can halt locomotion within milliseconds.`,
    tags: ['Robotics', 'ESP32', 'Architecture', 'Embedded Systems']
  },
  {
    slug: 'simulating-exploration-mode-slam',
    date: '2026-08-14',
    category: 'ALGORITHMS',
    readTime: '5 min read',
    title: 'Building Exploration Mode: 2D Occupancy Grid Generation and Dynamic Raycasting',
    excerpt: 'A technical deep-dive into how ZALTRON V1 maps unknown indoor spaces using ultrasonic sweeping and spatial raycasting before executing physical navigation.',
    content: `Before an autonomous machine can navigate an unfamiliar environment, it must construct an internal mathematical model of its surroundings. In robotics, this is known as Simultaneous Localization and Mapping (SLAM).

In our current development phase, we simulate and test this capability through dynamic 2D occupancy grids:
- The environment is partitioned into discrete cells (typically 5cm x 5cm).
- As the robot sweeps its ultrasonic or optical sensor across an arc, distance measurements are converted into polar coordinates relative to the robot's odometry frame.
- Inverse sensor models trace rays from the sensor origin to the detected boundary: cells along the ray path receive updated probabilities of being 'free space', while the terminating cell is marked as 'occupied obstacle'.

This methodology provides a robust foundation that will directly scale to our planned hardware LiDAR additions.`,
    tags: ['SLAM', 'Computer Vision', 'Mapping', 'Autonomy']
  },
  {
    slug: 'the-connected-ecosystem-vision',
    date: '2026-07-30',
    category: 'VISION',
    readTime: '4 min read',
    title: 'Beyond the Monolith: Why the Future of Robotics Belongs to Heterogeneous Coordinated Fleets',
    excerpt: 'Why building specialized machines coordinated by a central network creates far more practical utility than attempting to engineer an all-in-one universal humanoid.',
    content: `The popular imagination often envisions the future of robotics as a single universal humanoid robot capable of doing everything from factory assembly to cooking dinner. While research into general-purpose humanoids is fascinating, practical real-world engineering often favors specialization.

A dedicated aerial unit (ZALTRON Sky) can inspect a roof ten times faster than a ground robot. A dedicated heavy carrier (ZALTRON Carrier) can move payloads far more efficiently than an articulated biped. A dexterous manipulator (ZALTRON Arm) can assemble miniature electronic components with precision that no mobile base alone can match.

The ZALTRON philosophy is grounded in creating specialized, highly capable machines unified by a shared intelligence layer: ZALTRON Hub. By sharing maps, telemetry, and mission priorities across the ecosystem, the whole network becomes exponentially more capable than any isolated machine.`,
    tags: ['Ecosystem', 'Robotics Strategy', 'Multi-Agent', 'Automation']
  }
];
