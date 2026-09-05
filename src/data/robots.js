export const robots = [
  { slug:'v1', name:'ZALTRON V1', role:'COMMAND', status:'DEVELOPMENT', description:'The central intelligent platform for experimentation with perception, interaction, navigation and coordination.', capabilities:['AI interaction','Computer vision','Autonomous operation','Navigation','Wireless communication','Sensor integration','Voice interaction','Multi-robot coordination','Modular robotics'] },
  { slug:'scout', name:'ZALTRON Scout', role:'EXPLORE', status:'CONCEPT', description:'Exploration, mapping, environmental scanning and autonomous reconnaissance.' },
  { slug:'guard', name:'ZALTRON Guard', role:'PROTECT', status:'CONCEPT', description:'A concept for safety and environmental monitoring.' },
  { slug:'carrier', name:'ZALTRON Carrier', role:'DELIVER', status:'CONCEPT', description:'A concept for transporting objects and materials.' },
  { slug:'arm', name:'ZALTRON Arm', role:'MANIPULATE', status:'CONCEPT', description:'Robotic manipulation and object-handling research.' },
  { slug:'clean', name:'ZALTRON Clean', role:'MAINTAIN', status:'FUTURE', description:'Future cleaning and maintenance applications.' },
  { slug:'med', name:'ZALTRON Med', role:'ASSIST', status:'FUTURE', description:'Future healthcare-assistance robotics concepts.' },
  { slug:'farm', name:'ZALTRON Farm', role:'AGRI', status:'CONCEPT', description:'Agricultural automation and robotic assistance.' },
  { slug:'sky', name:'ZALTRON Sky', role:'AERIAL', status:'CONCEPT', description:'Aerial robotics and autonomous aerial systems.' }
];
export const robotBySlug = (slug) => robots.find(r => r.slug === slug);
