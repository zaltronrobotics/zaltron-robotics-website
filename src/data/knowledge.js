export const verifiedKnowledge = [
  {
    keywords: ['v1', 'zaltron v1', 'flagship', 'robot v1', 'what is v1', 'about v1'],
    question: 'What is ZALTRON V1?',
    answer: 'ZALTRON V1 is the flagship intelligent robotic platform and central physical system in the ZALTRON ecosystem. It features a dual-tier architecture combining PC/Edge AI reasoning with an ESP32 microcontroller for real-time motor and sensor control. It is currently in active prototype development.'
  },
  {
    keywords: ['ecosystem', 'family', 'how many robots', 'robots', 'planned', 'fleet'],
    question: 'What robots are part of the ZALTRON ecosystem?',
    answer: 'The ZALTRON ecosystem includes 11 specialized systems: ZALTRON V1 (Flagship / Command), Scout (Explore), Guard (Protect), Carrier (Deliver), Arm (Manipulate), Clean (Maintain), Med (Assist concept), Farm (Agri concept), Sky (Aerial concept), Dock (Autonomous Base Station), and Hub (Central Fleet Network).'
  },
  {
    keywords: ['exploration', 'exploration mode', 'slam', 'mapping', 'navigation'],
    question: 'What is Exploration Mode?',
    answer: 'Exploration Mode is an active research and development capability where the robot autonomously traverses an unfamiliar space, sweeps sensors (such as ultrasonic distance arrays and camera vision, with future LiDAR plans), and constructs a 2D spatial occupancy grid to localize itself and plan paths.'
  },
  {
    keywords: ['architecture', 'esp32', 'hardware', 'compute', 'how does it work'],
    question: 'How is the ZALTRON hardware and compute architected?',
    answer: 'ZALTRON V1 uses a dual-tier computing architecture: a laptop or edge PC handles high-level artificial intelligence, computer vision, and speech processing, while an ESP32 microcontroller manages real-time motor actuation, sensor polling, and instant hardware safety fail-safes via Wi-Fi telemetry.'
  },
  {
    keywords: ['voice', 'hey iris', 'iris', 'speech', 'microphone', 'wake word'],
    question: 'Does ZALTRON support voice commands?',
    answer: 'Voice interaction is an active area of research for natural human-robot collaboration. The internal experimental wake phrase concept was "Hey IRIS" and is evolving toward native ZALTRON vocal protocols. The system processes microphone input to trigger high-level directional commands.'
  },
  {
    keywords: ['status', 'stage', 'buy', 'commercial', 'production', 'price'],
    question: 'Is ZALTRON V1 commercially available?',
    answer: 'No. ZALTRON ROBOTICS is an engineering research and prototype development initiative. ZALTRON V1 is in active prototype testing and bench validation. Other ecosystem systems are in concept or planning phases. We do not make false claims of commercial sales or mass production.'
  },
  {
    keywords: ['hub', 'central network', 'multi-robot', 'coordination'],
    question: 'What is ZALTRON Hub?',
    answer: 'ZALTRON Hub is the planned central network architecture designed to coordinate multiple specialized ZALTRON robots. It orchestrates unified environment maps, mission dispatch, battery scheduling, and multi-robot handoffs.'
  },
  {
    keywords: ['contact', 'email', 'social', 'reach out', 'github'],
    question: 'How can I contact or follow ZALTRON ROBOTICS?',
    answer: 'You can email zaltronrobotics@gmail.com or follow official channels on GitHub (zaltronrobotics), YouTube (@zaltronrobotics), X (@ZaltronRobotics), Instagram, LinkedIn, and Reddit.'
  }
];

export const searchKnowledge = (query) => {
  if (!query || typeof query !== 'string') return null;
  const q = query.toLowerCase().trim();
  
  // Exact or keyword match
  for (const item of verifiedKnowledge) {
    if (item.keywords.some(k => q.includes(k) || k.includes(q))) {
      return item;
    }
  }
  
  // Word overlap match
  const qWords = q.split(/\s+/).filter(w => w.length > 2);
  let bestItem = null;
  let maxMatches = 0;
  
  for (const item of verifiedKnowledge) {
    let matches = 0;
    for (const word of qWords) {
      if (item.keywords.some(k => k.includes(word)) || item.question.toLowerCase().includes(word) || item.answer.toLowerCase().includes(word)) {
        matches++;
      }
    }
    if (matches > maxMatches) {
      maxMatches = matches;
      bestItem = item;
    }
  }
  
  if (maxMatches > 0) return bestItem;
  
  return {
    question: query,
    answer: 'ZALTRON ROBOTICS is an engineering initiative building intelligent robots and autonomous systems. For specific technical inquiries not covered here, please reach out directly at zaltronrobotics@gmail.com or explore our GitHub repository at github.com/zaltronrobotics.'
  };
};
