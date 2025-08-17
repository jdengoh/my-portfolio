import { Project } from './types';

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  }
  // {
  //   name: 'Skills',
  //   hash: '#skills'
  // },
  // {
  //   name: 'Experience',
  //   hash: '#experience'
  // },
  // {
  //   name: 'Contact',
  //   hash: '#contact'
  // }
] as const;

export const socialLinks = [
  {
    icon: '/icons/github.png',
    label: 'GitHub',
    delay: 1.2,
    url: 'https://github.com/jdengoh' // Add actual URLs
  },
  {
    icon: '/icons/linkedin.png',
    label: 'LinkedIn',
    delay: 1.4,
    url: 'https://linkedin.com/in/jdengoh/'
  },
  {
    icon: '/icons/medium.png',
    label: 'Medium',
    delay: 1.6,
    url: 'https://medium.com/@jdgoh'
  },
  {
    icon: '/icons/gmail.png',
    label: 'Email',
    delay: 1.8,
    size: 45,
    url: 'mailto:jdengoh28@gmail.com'
  }
] as const;

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'SingVentures',
    description:
      'Achieved 1st Runner-Up at NTU GDG FinForge Hackathon 2025. AI-powered startup investment platform that leverages multi-agent LangGraph workflows to transform complex financial analysis into actionable insights.',
    image: '/projects/singventures.png',
    techStack: [
      { id: 1, name: 'Next.js' },
      { id: 2, name: 'LangGraph' },
      { id: 3, name: 'FastAPI' },
      { id: 4, name: 'SQLite' },
      { id: 5, name: 'OpenAI' },
      { id: 6, name: 'Groq' }
    ],
    demoUrl: 'https://singventures.vercel.app/',
    githubUrl: 'https://github.com/jdengoh/SingVentures',
    featured: true
  },
  {
    id: 2,
    title: 'Autonomous Image-Recognition Bot',
    description:
      'Multidisciplinary project achieving 9th place among 50+ teams. Features python multi-process architecture with real-time object detection (YOLOv5) and 100% accuracy for autonomous navigation.',
    image: '/projects/mdp.png',
    techStack: [
      { id: 1, name: 'Python' },
      { id: 2, name: 'YOLOv5' },
      { id: 3, name: 'Linux' },
      { id: 4, name: 'Flask' }
    ],
    githubUrl: 'https://github.com/jdengoh/MDP_Grp4_rpi',
    featured: false
  },
  {
    id: 3,
    title: 'Movie Review Sentiment Analysis',
    description:
      'Deep learning project for classifying movie reviews using RNN, CNN, BiLSTM, and BiGRU models. Implemented ensemble learning with pre-trained Word2Vec embeddings and advanced OOV handling, achieving 78% accuracy on Rotten Tomatoes dataset.',
    image: '/projects/movie.jpg',
    techStack: [
      { id: 1, name: 'PyTorch' },
      { id: 2, name: 'Word2Vec' },
      { id: 3, name: 'Python' },
      { id: 4, name: 'LSTM' },
      { id: 5, name: 'BERT' }
    ],
    githubUrl: 'https://github.com/jdengoh/SC4002-NLP',
    featured: false
  },
  {
    id: 4,
    title: 'TransportGPT',
    description:
      'Real-time traffic navigation system for NUS-NCS Innovation Challenge. Integrates live traffic data from LTA DataMall, YOLO object detection for image analysis, and LangChain framework for contextual awareness to provide intelligent navigation assistance.',
    image: '/projects/traffic.jpg',
    techStack: [
      { id: 1, name: 'LangChain' },
      { id: 2, name: 'YOLO' },
      { id: 3, name: 'OpenCV' },
      { id: 4, name: 'Python' },
      { id: 5, name: 'APIs' }
    ],
    githubUrl: 'https://github.com/jdengoh/TransportGPT',
    featured: false
  }
];
