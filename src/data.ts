import { ProjectType, CertificationType, ResumeDetails, AchievementItem } from './types';

export const STATIC_PROJECTS: ProjectType[] = [
  {
    id: 'campus-buddy',
    name: 'Campus Buddy',
    description: 'A comprehensive campus navigation and activity synchronization companion designed for academic tracking, event registration, and peer-to-peer collaboration.',
    starsCount: 14,
    forksCount: 3,
    language: 'TypeScript',
    updatedAt: '2026-05-12',
    url: 'https://github.com/chethan143chiru/Campus-Buddy',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Socket.io']
  },
  {
    id: 'campus-dao',
    name: 'CampusDAO',
    description: 'A decentralized autonomous organization platform for universities enabling secure governance votes, transparent fund allocations, and student-body proposals on-chain.',
    starsCount: 19,
    forksCount: 5,
    language: 'Solidity',
    updatedAt: '2026-04-20',
    url: 'https://github.com/chethan143chiru/CampusDAO',
    tags: ['Solidity', 'Ethereum', 'React', 'Ethers.js', 'Tailwind CSS']
  },
  {
    id: 'algorithm-visualizer',
    name: 'Algorithm-Visualization',
    description: 'Interactive graphical rendering sandbox designed for sorting, graph traversals, pathfinding algorithms, and dynamic programming execution flows.',
    starsCount: 11,
    forksCount: 2,
    language: 'Java',
    updatedAt: '2026-03-10',
    url: 'https://github.com/chethan143chiru/Algorithm-Visualization',
    tags: ['Java', 'Swing', 'Algorithms', 'Data Structures']
  },
  {
    id: 'ml-price-predictor',
    name: 'Real-Estate-Price-Prediction',
    description: 'An end-to-end Machine Learning pipeline utilizing advanced multivariate regression models to accurately forecast urban housing index valuations.',
    starsCount: 8,
    forksCount: 1,
    language: 'Python',
    updatedAt: '2026-01-15',
    url: 'https://github.com/chethan143chiru/Real-Estate-Price-Prediction',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'Flask', 'Docker']
  }
];

export const CERTIFICATIONS: CertificationType[] = [
  {
    id: 'aws-academy',
    name: 'Cloud Foundations, Machine Learning Foundations',
    company: 'AWS Academy',
    issuedDate: '2025-11',
    badgeUrl: 'https://img.icons8.com/color/144/amazon-web-services.png',
    credentialUrl: 'https://linkedin.com/in/chethan143chiru',
    description: 'Specialized academy training validating foundations in cloud computing, infrastructure security, and key machine learning workflow architectures.',
    skills: ['AWS Cloud', 'ML Foundations', 'Cloud Architecture']
  },
  {
    id: 'gcp-skills',
    name: 'Introduction to Large Language Models, Introduction to Responsible AI',
    company: 'Google Skills',
    issuedDate: '2025-08',
    badgeUrl: 'https://miro.medium.com/1*Zkhl4Zz43z2_iR_ADlP-rg.png',
    credentialUrl: 'https://linkedin.com/in/chethan143chiru',
    description: 'Rigorous pathways validating foundational knowledge on Google Cloud platform, Generative AI models, and ethical AI deployment principles.',
    skills: ['Generative AI', 'Large Language Models', 'Responsible AI']
  },
  {
    id: 'microsoft-learn',
    name: 'Model data with Power BI, AZ-400: Development for Enterprise DevOps',
    company: 'Microsoft',
    issuedDate: '2025-05',
    badgeUrl: 'https://img.icons8.com/color/144/microsoft.png',
    credentialUrl: 'https://linkedin.com/in/chethan143chiru',
    description: 'Comprehensive credentials certifying expertise in robust enterprise data modeling, dashboard visualizations, and CI/CD pipelines.',
    skills: ['DevOps', 'Power BI', 'Enterprise CI/CD']
  },
  {
    id: 'ibm-coursera',
    name: 'Python for Data Science, AI & Development',
    company: 'IBM',
    issuedDate: '2025-03',
    badgeUrl: 'https://img.icons8.com/color/144/ibm.png',
    credentialUrl: 'https://linkedin.com/in/chethan143chiru',
    description: 'Professional-grade specialization covering advanced Python programming, data science libraries, and artificial intelligence solutions development.',
    skills: ['Python', 'Data Science', 'AI Development']
  },
  {
    id: 'linkedin-learn',
    name: 'Claude AI Developer Specialist Certificate',
    company: 'Claude AI',
    issuedDate: '2025-02',
    badgeUrl: 'https://cdn.freeapihub.com/media/ai_tools/logos/claude-ai.svg',
    credentialUrl: 'https://linkedin.com/in/chethan143chiru',
    description: 'Core specializations verifying prompt design patterns, structured XML instructions, system prompt parameters, and Claude-based workflow engineering.',
    skills: ['Claude 3.5 Sonnet', 'Prompt Engineering', 'Structured JSON', 'Workflow Automation']
  },
  {
    id: 'google-gemini',
    name: 'Gemini Generative AI Solutions Certificate',
    company: 'Gemini',
    issuedDate: '2025-01',
    badgeUrl: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google-gemini.svg',
    credentialUrl: 'https://linkedin.com/in/chethan143chiru',
    description: 'Advanced mastery in implementing @google/genai SDK, multimodal prompt contexts, structured Schema configurations, and high-frequency live API streams.',
    skills: ['Gemini 2.5', 'Generative AI', 'SDK Integration', 'AI Agents']
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Cleared JEE Main',
    subtitle: 'Cleared standard JEE Main exam and appeared for the prestigious JEE Advanced examination with honors.',
    year: '2022'
  },
  {
    id: 'ach-2',
    title: 'VTU Honours Program',
    subtitle: 'Actively pursuing the direct-track VTU Honours program based on excellent academic credentials.',
    year: 'Active'
  },
  {
    id: 'ach-3',
    title: 'H2S Hackathon',
    subtitle: 'Participated in the competitive H2S Hackathon coding sprint, building collaborative solutions.',
    year: '2025'
  },
  {
    id: 'ach-4',
    title: 'Google Cloud Skills Boost',
    subtitle: 'Completed extensive cloud labs, container orchestrations, and advanced database workflows.',
    year: '2025'
  },
  {
    id: 'ach-5',
    title: 'Campus Buddy Release',
    subtitle: 'Developed a robust iOS utility platform with session tracking, SQLite integrations, and local DBMS architectures.',
    year: '2025'
  },
  {
    id: 'ach-6',
    title: 'Unlox ML Specialist',
    subtitle: 'Trained and evaluated complex multivariate predictive and classification models in structured pipelines.',
    year: '2026'
  }
];

export const RESUME_DATA: ResumeDetails = {
  education: [
    {
      institution: 'Mysuru Royal Institute of Technology',
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      period: 'Oct 2023 - Jun 2027',
      grade: 'Mandya, Karnataka',
      highlights: [
        'Specializing in backend development, machine learning workflows, and cloud-enabled applications.',
        'Core curriculum focus on advanced data structures, systems architecture, and database management.'
      ]
    },
    {
      institution: 'BGS PU College',
      degree: 'Pre-University Course in Science (PCMB)',
      period: 'Oct 2021 - Mar 2023',
      grade: 'Mysuru, Karnataka',
      highlights: [
        'Completed foundational scientific training with major courses in complex Mathematics, Physics, Chemistry, and Biology.'
      ]
    }
  ],
  experience: [
    {
      role: 'Machine Learning Trainee',
      company: 'Unlox Academy',
      period: 'Mar 2026 - May 2026',
      location: 'Remote / Virtual',
      highlights: [
        'Built and evaluated machine learning models using Python for classification and prediction tasks.',
        'Processed and prepared structured datasets, improving model accuracy through preprocessing and tuning.',
        'Implemented end-to-end ML workflows including training, validation, and performance evaluation.'
      ]
    }
  ],
  skillsMatrix: {
    programming: ['Python', 'Java', 'JavaScript', 'SQL', 'Swift'],
    frameworks: ['SwiftUI', 'Node.js', 'Express.js', 'React.js', 'TensorFlow', 'PyTorch'],
    cloudAndDevOps: ['AWS (EC2, S3, Lambda)', 'Docker', 'GCP (Basics)', 'Git / GitHub', 'Postman', 'VS Code'],
    mlAndData: ['SQLite', 'MongoDB', 'Firebase', 'Data Structures', 'DBMS', 'Algorithms', 'Object-Oriented Programming']
  }
};

export const CONTACT_INFO = {
  name: 'Chethan R',
  mobileNumbers: ['9164018550', '9900399845'],
  email: 'cc9152655@gmail.com',
  address: 'Mandya / Mysuru, Karnataka, India',
  github: 'https://github.com/chethan143chiru',
  linkedin: 'https://linkedin.com/in/chethan143chiru',
  resumeSourcePath: 'Chethan_R_Resume.pdf'
};
