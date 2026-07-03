import { ProjectType, CertificationType, ResumeDetails, AchievementItem } from './types';

export const STATIC_PROJECTS: ProjectType[] = [
  {
    id: 'ai-health-prediction',
    name: 'AI Health Prediction System',
    description: 'An AI-powered diagnostic and symptom-checking ecosystem using machine learning models and symptom-checking algorithms to forecast potential health risks based on vitals, clinical indicators, and user-input symptoms.',
    starsCount: 184,
    forksCount: 46,
    language: 'TypeScript',
    updatedAt: '2026-06-18',
    url: 'https://github.com/chethan143chiru/AI-Health-Prediction-System',
    tags: ['React', 'Machine Learning', 'AI Diagnostics', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'chiru-ai-hub',
    name: 'CHIRU AI HUB',
    description: 'An advanced, unified multi-agent orchestration dashboard uniting 20+ specialized intelligent AI agents under a central neural controller to resolve complex full-stack engineering, research, and analysis tasks.',
    starsCount: 224,
    forksCount: 58,
    language: 'TypeScript',
    updatedAt: '2026-06-15',
    url: 'https://github.com/chethan143chiru/CHIRU-AI-HUB',
    tags: ['AI Agents', 'Multi-Agent Systems', 'React', 'TypeScript', 'Node.js']
  },
  {
    id: 'portfolio-os',
    name: 'Portfolio OS',
    description: 'A futuristic personal operating system and digital identity platform crafted to display credentials, interactive AI portraits, terminal-like utilities, and verified academic milestones.',
    starsCount: 165,
    forksCount: 38,
    language: 'TypeScript',
    updatedAt: '2026-06-22',
    url: 'https://github.com/chethan143chiru/Portfolio-OS',
    tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Motion']
  },
  {
    id: 'intellimatch-ai',
    name: 'IntelliMatch AI',
    description: 'A smart profile recommendation matching engine employing Natural Language Processing (NLP), TF-IDF vectors, cosine similarity, and MBTI personality structures to connect users based on career compatibility and interests.',
    starsCount: 142,
    forksCount: 34,
    language: 'Python',
    updatedAt: '2026-06-12',
    url: 'https://github.com/chethan143chiru/IntelliMatch-AI',
    tags: ['Python', 'Streamlit', 'NLP', 'MBTI Matching', 'Data Science']
  },
  {
    id: 'attendx',
    name: 'AttendX Attendance System',
    description: 'An AI-powered attendance monitoring system simplifying student attendance tracking, real-time analytics, status audits, and reporting metrics with a responsive developer-first platform.',
    starsCount: 118,
    forksCount: 28,
    language: 'TypeScript',
    updatedAt: '2026-06-08',
    url: 'https://github.com/chethan143chiru/attendx---attendance-management-system',
    tags: ['React', 'TypeScript', 'Attendance Management', 'Analytics Dashboard']
  },
  {
    id: 'fintech-saas-ml',
    name: 'Fintech SaaS ML',
    description: 'A cloud-based SaaS financial pipeline leveraging Machine Learning models to automate financial transactions processing, forecast revenue trends, and detect anomalies using real-time transactions data streams.',
    starsCount: 135,
    forksCount: 32,
    language: 'Python',
    updatedAt: '2026-05-28',
    url: 'https://github.com/chethan143chiru/fintech-saas',
    tags: ['Python', 'Machine Learning', 'Fintech', 'SaaS', 'Predictive Modeling']
  },
  {
    id: 'campus-ado',
    name: 'CampusADO',
    description: 'A robust and scalable academic management framework designed to streamline university administrative workflows, student directories, productivity utilities, and digital records portals.',
    starsCount: 154,
    forksCount: 40,
    language: 'Swift',
    updatedAt: '2026-05-20',
    url: 'https://github.com/chethan143chiru/CampusADO',
    tags: ['Swift', 'iOS Development', 'Academic Portal', 'Mobile Systems']
  },
  {
    id: 'campus-buddy-swift',
    name: 'Campus Buddy',
    description: 'An elegant, mobile campus navigation companion and activity scheduler facilitating administrative checklists, class calendars, and student resources tracking.',
    starsCount: 112,
    forksCount: 24,
    language: 'Swift',
    updatedAt: '2026-05-15',
    url: 'https://github.com/chethan143chiru/Campus-Buddy',
    tags: ['Swift', 'iOS Development', 'Utility Planner', 'Campus Navigation']
  },
  {
    id: 'algorithm-visualisation-js',
    name: 'Algorithm Visualisation',
    description: 'An interactive graphical sandbox mapping complex sorting, searching, and pathfinding algorithms, charting runtime complexities and execution frames.',
    starsCount: 95,
    forksCount: 20,
    language: 'JavaScript',
    updatedAt: '2026-05-01',
    url: 'https://github.com/chethan143chiru/Algorithm-visualisation',
    tags: ['JavaScript', 'Algorithms', 'Sorting visualizer', 'Data Structures']
  }
];

export const TOP_6_CERTIFICATIONS: CertificationType[] = [
  {
    id: 'top-aws-academy',
    name: 'AWS Academy Graduate - Machine Learning Foundations',
    company: 'AWS Academy',
    issuedDate: '2025-08',
    badgeUrl: 'https://img.icons8.com/color/144/amazon-web-services.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_aws-academy-graduate-machine-learning-foundations-activity-7408792502788612097-5k5R?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Validates core Amazon Web Services cloud compute environments, machine learning pipelines, SageMaker notebooks, feature engineering, and cloud deployment models.',
    skills: ['AWS Cloud', 'Amazon SageMaker', 'Neural Networks', 'Cloud ML'],
    category: 'Machine Learning'
  },
  {
    id: 'top-python-nptel',
    name: 'Joy of Computing using Python (Programming)',
    company: 'NPTEL IIT Madras',
    issuedDate: '2026-01',
    badgeUrl: 'https://yt3.googleusercontent.com/1GIaSfkzAHwxzdRgTahbNS1CkhNlPyVmW-YImEPPgzhBwHkkAzuTSoZqJUlhJKDZtibSNI8O=s900-c-k-c0x00ffffff-no-rj',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_python-nptel-iitmadras-activity-7463930486281879552-oSBz?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Elite logic-based certification completing advanced programming paradigms, sorting algorithms, space-time complexities, and recursive functions under elite IIT professors.',
    skills: ['Python Programming', 'Algorithms', 'Data Structures'],
    category: 'Programming'
  },
  {
    id: 'top-microsoft-devops',
    name: 'Microsoft AZ-400 DevOps Solutions',
    company: 'Microsoft',
    issuedDate: '2025-09',
    badgeUrl: 'https://img.icons8.com/color/144/microsoft.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_microsoft-devops-microsoftaz-activity-7447149915153051648-vdxR?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Rigorous technical pathway validating deployment pipelines, Infrastructure-as-Code (IaC), secret keys management, CI/CD, and site reliability engineering (SRE) paradigms.',
    skills: ['Azure DevOps', 'CI/CD', 'Infrastructure-as-code', 'Docker'],
    category: 'DevOps'
  },
  {
    id: 'top-systems-llms',
    name: 'Systems For LLMs (AI Architectures)',
    company: 'IBM',
    issuedDate: '2025-10',
    badgeUrl: 'https://img.icons8.com/color/144/ibm.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_systems-for-llms-ibm-india-research-lab-activity-7447636889030909952-t4zp?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Advanced model-serving specialization issued by the IBM India Research Lab, detailing hardware acceleration, distributed pipelines, RAG retrieval databases, and LLM orchestration.',
    skills: ['Systems Design', 'LLM', 'RAG Architecture', 'Distributed Systems'],
    category: 'Artificial Intelligence'
  },
  {
    id: 'top-python-google',
    name: 'Python For Data Science, AI & Development',
    company: 'Google Cloud Skills Boost',
    issuedDate: '2025-07',
    badgeUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Google_Cloud_icon_%282026%29.svg/1280px-Google_Cloud_icon_%282026%29.svg.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_completion-certificate-for-python-for-data-activity-7373712985414066176-_B1J?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Mastery path confirming enterprise Python scripting, multi-module setups, API calls integrations, data wrangling pipelines, and generative AI prompt engineering.',
    skills: ['Python', 'AI Development', 'API Integrations', 'Data Science'],
    category: 'Data Science'
  },
  {
    id: 'top-firebase-emulators',
    name: 'Firebase Emulators',
    company: 'Google Developer Program',
    issuedDate: '2024-06',
    badgeUrl: 'https://developers.google.com/program/images/social.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_firebase-emulators-google-developer-program-activity-7291454392895979521-saJq?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Mastery in local emulator services configuration, mocking auth servers, isolating Firestore read/writes queries, debugging cloud rules, and establishing local testing suites.',
    skills: ['Firebase Emulators', 'Local DB Mocking', 'Security Rules', 'Unit Testing'],
    category: 'DevOps'
  }
];

export const CERTIFICATIONS: CertificationType[] = [
  {
    id: 'anthropic-claude-101',
    name: 'Anthropic Claude 101',
    company: 'Anthropic',
    issuedDate: '2026-03',
    badgeUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/960px-Claude_AI_symbol.svg.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_anthropic-claude-101-certificate-ugcPost-7474035724489756672-zDvd/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Elite mastery of Claude models, systemic context window utilization, system prompts design, temperature parameters configuration, and enterprise AI orchestration.',
    skills: ['Claude 3.5 Sonnet', 'Prompt Engineering', 'LLM Contexts', 'Anthropic API'],
    category: 'Artificial Intelligence',
    metrics: { likes: 125, comments: 24, impressions: 2150 }
  },
  {
    id: 'python-data-analytics-vtu',
    name: 'Python For Data Analytics',
    company: 'Visvesvaraya Technological University',
    issuedDate: '2026-02',
    badgeUrl: 'https://vtu.ac.in/wp-content/uploads/2019/03/vtul-291x300.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_python-dataanalytics-vtu-activity-7464268971291086848-PmaL?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Highly technical certification validating data manipulation pipelines, exploratory analysis, and visual graphing using industry-standard packages, integrated in partnership with the VTU academic syllabus.',
    skills: ['Python', 'Pandas', 'Data Analysis', 'VTU Syllabus'],
    category: 'Data Science',
    metrics: { likes: 148, comments: 32, impressions: 2450 }
  },
  {
    id: 'python-nptel-iitmadras',
    name: 'Programming in Python (NPTEL - IIT Madras)',
    company: 'NPTEL IIT Madras',
    issuedDate: '2026-01',
    badgeUrl: 'https://yt3.googleusercontent.com/1GIaSfkzAHwxzdRgTahbNS1CkhNlPyVmW-YImEPPgzhBwHkkAzuTSoZqJUlhJKDZtibSNI8O=s900-c-k-c0x00ffffff-no-rj',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_python-nptel-iitmadras-activity-7463930486281879552-oSBz?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Elite logic-based certification completing advanced programming paradigms, sorting algorithms, space-time complexities, and recursive functions under elite IIT professors.',
    skills: ['Python Programming', 'Algorithms', 'Data Structures', 'IIT Madras'],
    category: 'Programming',
    metrics: { likes: 194, comments: 45, impressions: 3120 }
  },
  {
    id: 'tcs-ion-career-edge',
    name: 'TCS iON Career Edge - Young Professional',
    company: 'TCS iON',
    issuedDate: '2025-12',
    badgeUrl: 'https://images.financialexpressdigital.com/2022/03/tcs-ion.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_tcs-ion-career-edge-certification-young-activity-7451491020309004289-TDOE?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Intensive corporate readiness certification certifying professional presentation skills, foundational business communication, digital literacy, and standard software engineering practices.',
    skills: ['Business Communication', 'Digital Literacy', 'Professional Grooming'],
    category: 'Professional Development',
    metrics: { likes: 112, comments: 18, impressions: 1850 }
  },
  {
    id: 'ai-workshop-h2s',
    name: 'AI Workshop - ML, DL, and Prompt Engineering',
    company: 'Hack2Skill',
    issuedDate: '2025-11',
    badgeUrl: 'https://certificate.hack2skill.com/h2s-sqr-logo.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_ai-workshop-ml-dl-prompt-engineering-activity-7448316377830100992-s52y?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Engaging hands-on workshop focused on deep model architectures, supervised and unsupervised learning mechanics, weights optimization, and state-of-the-art prompt designs.',
    skills: ['Machine Learning', 'Deep Learning', 'Prompt Engineering'],
    category: 'Artificial Intelligence',
    metrics: { likes: 156, comments: 28, impressions: 2280 }
  },
  {
    id: 'systems-for-llms-ibm',
    name: 'Systems For LLMs',
    company: 'IBM India Research Lab',
    issuedDate: '2025-10',
    badgeUrl: 'https://img.icons8.com/color/144/ibm.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_systems-for-llms-ibm-india-research-lab-activity-7447636889030909952-t4zp?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Advanced model-serving specialization issued by the IBM India Research Lab, detailing hardware acceleration, distributed pipelines, RAG retrieval databases, and LLM orchestration.',
    skills: ['Systems Design', 'LLM', 'RAG Architecture', 'Distributed Systems'],
    category: 'Artificial Intelligence',
    metrics: { likes: 184, comments: 39, impressions: 2980 }
  },
  {
    id: 'microsoft-az400-devops',
    name: 'Microsoft AZ-400 DevOps Solutions',
    company: 'Microsoft',
    issuedDate: '2025-09',
    badgeUrl: 'https://img.icons8.com/color/144/microsoft.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_microsoft-devops-microsoftaz-activity-7447149915153051648-vdxR?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Rigorous technical pathway validating deployment pipelines, Infrastructure-as-Code (IaC), secret keys management, CI/CD, and site reliability engineering (SRE) paradigms.',
    skills: ['Azure DevOps', 'CI/CD', 'Infrastructure-as-code', 'Docker'],
    category: 'DevOps',
    metrics: { likes: 165, comments: 26, impressions: 2540 }
  },
  {
    id: 'aws-academy-ml-foundations',
    name: 'AWS Academy Machine Learning Foundations',
    company: 'AWS Academy',
    issuedDate: '2025-08',
    badgeUrl: 'https://img.icons8.com/color/144/amazon-web-services.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_aws-academy-graduate-machine-learning-foundations-activity-7408792502788612097-5k5R?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Validates core Amazon Web Services cloud compute environments, machine learning pipelines, SageMaker notebooks, feature engineering, and cloud deployment models.',
    skills: ['AWS Cloud', 'Amazon SageMaker', 'Neural Networks', 'Cloud ML'],
    category: 'Machine Learning',
    metrics: { likes: 154, comments: 22, impressions: 2310 }
  },
  {
    id: 'python-data-science-ai-google',
    name: 'Python For Data Science, AI & Development',
    company: 'IBM',
    issuedDate: '2025-07',
    badgeUrl: 'https://img.icons8.com/color/144/ibm.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_completion-certificate-for-python-for-data-activity-7373712985414066176-_B1J?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Mastery path confirming enterprise Python scripting, multi-module setups, API calls integrations, data wrangling pipelines, and generative AI prompt engineering.',
    skills: ['Python', 'AI Development', 'API Integrations', 'Data Science'],
    category: 'Data Science',
    metrics: { likes: 132, comments: 19, impressions: 1920 }
  },
  {
    id: 'aws-academy-genai-foundations',
    name: 'AWS Academy Generative AI Foundations',
    company: 'AWS Academy',
    issuedDate: '2025-06',
    badgeUrl: 'https://img.icons8.com/color/144/amazon-web-services.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_aws-academy-graduate-generative-ai-foundations-activity-7372275602164228096-1oU5?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Professional AWS Academy credential covering Large Language Models (LLMs), Bedrock services, fine-tuning foundational models, token usage analytics, and agent deployment.',
    skills: ['AWS Bedrock', 'Generative AI', 'LLMs', 'Cloud AI'],
    category: 'Artificial Intelligence',
    metrics: { likes: 146, comments: 25, impressions: 2210 }
  },
  {
    id: 'hack2skill-certificate',
    name: 'Generative AI Hackathon / Workshop',
    company: 'Hack2Skill',
    issuedDate: '2025-05',
    badgeUrl: 'https://certificate.hack2skill.com/h2s-sqr-logo.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_certificate-hack2skill-activity-7358111864871944194-qyhH?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Recognizes competitive hackathon performance, building full-stack reactive elements, API connections, and automated server-side triggers within a fast-paced environment.',
    skills: ['Rapid Prototyping', 'API Integration', 'Hackathons'],
    category: 'Professional Development',
    metrics: { likes: 118, comments: 14, impressions: 1640 }
  },
  {
    id: 'upgrad-learning-completed',
    name: 'upGrad Learning Successfully Completed (Business Analytics)',
    company: 'upGrad',
    issuedDate: '2025-04',
    badgeUrl: 'https://blog.shikshacoach.com/wp-content/uploads/2022/06/upgrad.jpg',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_upgrade-learning-successfully-completed-activity-7355518624658255872-NQ3X?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Intensive digital learning pathway certifying core software system design, architectural scalability limits, modular backend engineering, and technical problem-solving.',
    skills: ['System Architecture', 'Software Design', 'Scaling'],
    category: 'Software Engineering',
    metrics: { likes: 104, comments: 12, impressions: 1520 }
  },
  {
    id: 'upgrad-professional-badge',
    name: 'upGrad Learning Successfully Completed (Data Analytics)',
    company: 'upGrad',
    issuedDate: '2025-04',
    badgeUrl: 'https://blog.shikshacoach.com/wp-content/uploads/2022/06/upgrad.jpg',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_upgrad-learning-successfully-completed-activity-7355508976052043776-yg3C?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Professional competency badge from UpGrad confirming clean code patterns, test-driven methodologies, structured API documentation, and agile team setups.',
    skills: ['Agile', 'Clean Code', 'TDD', 'Software Best Practices'],
    category: 'Software Engineering',
    metrics: { likes: 108, comments: 11, impressions: 1590 }
  },
  {
    id: 'hp-life-certification',
    name: 'HP LIFE Certificate',
    company: 'HP LIFE',
    issuedDate: '2025-03',
    badgeUrl: 'https://img.icons8.com/color/144/hp.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_hp-life-activity-7354545554590212096-dRTJ?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Certifies skills in information technology for business success, data analytics tools, operations planning, strategic IT resources allocation, and tech-driven marketing.',
    skills: ['IT Operations', 'Business Technology', 'Analytics Tools'],
    category: 'Professional Development',
    metrics: { likes: 121, comments: 15, impressions: 1820 }
  },
  {
    id: 'forage-accenture-simulation',
    name: 'Accenture Job Simulation',
    company: 'Simplilearn',
    issuedDate: '2025-02',
    badgeUrl: 'https://coursera-university-assets.s3.amazonaws.com/f7/2fc0826752445896110edd18f55ef6/360x360_1.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_chethan-r-has-successfully-completed-the-activity-7351553404042629121-BdC1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Completed virtual project simulation detailing software engineering, system configurations, client presentations, and requirements modeling.',
    skills: ['Software Engineering', 'System Configurations', 'Project Execution'],
    category: 'Professional Development',
    metrics: { likes: 139, comments: 21, impressions: 2100 }
  },
  {
    id: 'tech-consulting-forage',
    name: 'Tech Consulting Job Simulation',
    company: 'Forage',
    issuedDate: '2025-01',
    badgeUrl: 'https://eabforage.zendesk.com/hc/theming_assets/01KHXQ0XDF70568PY861WZJFV0',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_forage-certificate-activity-7347223526241710080-5qpD?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Engaged in real-world scenario tech consulting tasks including database migration proposals, infrastructure designs, cloud cost optimization analyses, and cloud safety.',
    skills: ['Consultive Analysis', 'Architecture Designs', 'Cost Analysis'],
    category: 'Professional Development',
    metrics: { likes: 142, comments: 24, impressions: 2220 }
  },
  {
    id: 'forage-bcg-simulation',
    name: 'BCG Strategy Consulting Job Simulation',
    company: 'Simplilearn',
    issuedDate: '2024-12',
    badgeUrl: 'https://coursera-university-assets.s3.amazonaws.com/f7/2fc0826752445896110edd18f55ef6/360x360_1.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_chethan-r-has-successfully-completed-the-activity-7347212393258622976-IWO9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Completed rigorous strategic consulting challenges detailing business model analysis, operational optimizations, competitive research, and digital growth formulations.',
    skills: ['Business Strategy', 'Competitive Analysis', 'Growth Blueprinting'],
    category: 'Professional Development',
    metrics: { likes: 128, comments: 17, impressions: 1840 }
  },
  {
    id: 'aws-academy-cloud-foundations',
    name: 'AWS Academy Cloud Foundations',
    company: 'AWS Academy',
    issuedDate: '2024-11',
    badgeUrl: 'https://img.icons8.com/color/144/amazon-web-services.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_aws-academy-graduate-aws-academy-cloud-activity-7344408253797216259-FCcH?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Validates comprehensive AWS Cloud fundamentals, IAM users routing, simple computing setups in EC2, container servers, scalable databases in RDS/S3, and custom VPC networking.',
    skills: ['AWS Cloud Computing', 'Security Mappings', 'IAM', 'S3 & RDS'],
    category: 'Cloud Computing',
    metrics: { likes: 158, comments: 29, impressions: 2340 }
  },
  {
    id: 'greatlearning-cloud-foundations',
    name: 'Cloud Foundations Course',
    company: 'Great Learning',
    issuedDate: '2024-11',
    badgeUrl: 'https://play-lh.googleusercontent.com/iKOY-lQls7d4x8gv5WNQRKWi5ja5iT1PlZBc4-oNn6Ek4bQRqxHz77eVEwtSHniZrZPT-ZuDuOaRTxFjnhk7',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_cloud-foundations-course-completion-certificate-activity-7263891828884520961-4IcM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Mastery of foundational cloud infrastructure paradigms, computing environments setups, and cloud security practices.',
    skills: ['Cloud Computing', 'Cloud Foundations', 'Infrastructure Security'],
    category: 'Cloud Computing',
    metrics: { likes: 112, comments: 11, impressions: 1480 }
  },
  {
    id: 'iit-iip-abhyuday',
    name: 'IIT IIP Abhyuday',
    company: 'Indian Institute of Placement',
    issuedDate: '2024-11',
    badgeUrl: 'https://www.indianinstituteofplacement.com/wp-content/uploads/2023/02/cropped-Final_Logo-JPEG.jpg',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_iit-iip-abhyuday-activity-7265007014265688064-4n5e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Recognized for outstanding participation and engineering talent validation in placement readiness paradigms.',
    skills: ['Corporate Alignment', 'Engineering Readiness', 'Technical Portfolios'],
    category: 'Professional Development',
    metrics: { likes: 132, comments: 19, impressions: 1650 }
  },
  {
    id: 'genai-concepts-google',
    name: 'Introduction to Generative AI Concepts',
    company: 'Microsoft Learn',
    issuedDate: '2024-10',
    badgeUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Mlearn-VL?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1672&qlt=100&fit=constrain',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_introduction-to-generative-ai-concepts-activity-7333319021435494400-GIuH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Fundamental credentials demonstrating knowledge of foundational generative platforms, deep neural networks context, synthetic outputs, and model evaluations.',
    skills: ['Generative AI', 'Foundational Models', 'Neural Networks'],
    category: 'Artificial Intelligence',
    metrics: { likes: 125, comments: 16, impressions: 1720 }
  },
  {
    id: 'solve-ruby-challenges',
    name: 'Solve Ruby Code Challenges',
    company: 'HackerRank',
    issuedDate: '2024-09',
    badgeUrl: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/144/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_solve-ruby-code-challenges-activity-7323975419467083778-cSLK?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Demonstrates high technical dexterity in resolving algorithmic and architectural Ruby puzzles, validating clean scripts, OOP closures, and regular expressions mappings.',
    skills: ['Ruby Language', 'Algorithmic Puzzles', 'OOP Closures'],
    category: 'Programming',
    metrics: { likes: 114, comments: 13, impressions: 1560 }
  },
  {
    id: 'hubspot-inbound',
    name: 'HubSpot Inbound Certification',
    company: 'HubSpot Academy',
    issuedDate: '2024-08',
    badgeUrl: 'https://coursera-university-assets.s3.amazonaws.com/05/117872e09a4e38b60b74ca4290ab0e/HubSpot-Academy-Logo-1-.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_hubspot-academy-inbound-certification-activity-7293162220157329409-rm_R?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Validates client-centered inbound methodology strategies, organic conversion setups, data loops optimization, and automated continuous customer outreach workflows.',
    skills: ['Inbound Methodology', 'Data-Driven Automation', 'Growth Strategies'],
    category: 'Professional Development',
    metrics: { likes: 122, comments: 14, impressions: 1690 }
  },
  {
    id: 'ga4-seo-data',
    name: 'GA4 for SEO: How Data Helps Businesses Grow',
    company: 'Semrush',
    issuedDate: '2024-07',
    badgeUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_kxCgA9_WciW1Bu4d5sfkIH63OrwtTeuVkaVPlARq4K=s900-c-k-c0x00ffffff-no-rj',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_ga4-for-seo-how-data-helps-businesses-grow-activity-7293150365363965954-Zf2s?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Specialized analytic techniques for organic SEO growth, auditing user events with the Google Analytics 4 console, tracking key custom metrics, and charting user engagement loops.',
    skills: ['Google Analytics 4', 'SEO Analytics', 'Data-Driven growth'],
    category: 'Data Science',
    metrics: { likes: 129, comments: 15, impressions: 1780 }
  },
  {
    id: 'firebase-emulators',
    name: 'Firebase Emulators',
    company: 'Google Developer Program',
    issuedDate: '2024-06',
    badgeUrl: 'https://developers.google.com/program/images/social.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_firebase-emulators-google-developer-program-activity-7291454392895979521-saJq?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Mastery in local emulator services configuration, mocking auth servers, isolating Firestore read/writes queries, debugging cloud rules, and establishing local testing suites.',
    skills: ['Firebase Emulators', 'Local DB Mocking', 'Security Rules', 'Unit Testing'],
    category: 'DevOps',
    metrics: { likes: 145, comments: 23, impressions: 2150 }
  },
  {
    id: 'google-maps-js',
    name: 'Google Maps Platform - Javascript API',
    company: 'Google Developer Program',
    issuedDate: '2024-06',
    badgeUrl: 'https://developers.google.com/program/images/social.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_get-started-with-google-maps-platform-for-activity-7291392002288410624-jA-w?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Expert setup of custom dynamic vector grids, responsive pinpoint overlays, location auto-complete prompts, routing calculations, and customizable map layers.',
    skills: ['Google Maps Platform', 'JavaScript APIs', 'Web Location Engines'],
    category: 'Programming',
    metrics: { likes: 152, comments: 26, impressions: 2280 }
  },
  {
    id: 'google-maps-foundations',
    name: 'Google Maps Platform - Web Foundations',
    company: 'Google Developer Program',
    issuedDate: '2024-05',
    badgeUrl: 'https://developers.google.com/program/images/social.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_get-started-with-google-maps-platform-for-activity-7291391803730128897-WAj1?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Essential mapping of client coordinates systems, customized web styles mapping, optimized geo queries triggers, and high-frequency vector rendering setups.',
    skills: ['Geo-Location APIs', 'Platform Security', 'Client API Keys'],
    category: 'Programming',
    metrics: { likes: 141, comments: 21, impressions: 1980 }
  },
  {
    id: 'excel-analytics-greatlearning',
    name: 'Data Analytics',
    company: 'LinkedIn Learning',
    issuedDate: '2024-04',
    badgeUrl: 'https://yt3.googleusercontent.com/i6KNxiy3gME-BulL4WnuGkTGqHuSYF8jl1WRn0rXftcJdSYK7dHKcJ3gLAaPc-KfhmLSYPwf824=s900-c-k-c0x00ffffff-no-rj',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_certificate-of-completion-activity-7287801854028075008-gbg6?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Advanced data aggregation operations, pivot charts configuration, complex logic lookups statements, dashboard metrics visualizations, and statistical modeling.',
    skills: ['Data Auditing', 'Pivot Operations', 'Analytical Modeling'],
    category: 'Data Science',
    metrics: { likes: 118, comments: 15, impressions: 1620 }
  },
  {
    id: 'sql-fundamentals-greatlearning',
    name: 'Cyber Security',
    company: 'LinkedIn Learning',
    issuedDate: '2024-04',
    badgeUrl: 'https://yt3.googleusercontent.com/i6KNxiy3gME-BulL4WnuGkTGqHuSYF8jl1WRn0rXftcJdSYK7dHKcJ3gLAaPc-KfhmLSYPwf824=s900-c-k-c0x00ffffff-no-rj',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_certificate-of-completion-activity-7287509281392762881-lbJ9?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Relational schema design, normalization principles, complex SQL inner/outer joins queries, indexes structures, data control mechanisms, and safe transaction procedures.',
    skills: ['SQL Queries', 'Relation Normalizations', 'DBMS optimization'],
    category: 'Programming',
    metrics: { likes: 125, comments: 16, impressions: 1750 }
  },
  {
    id: 'google-intro-genai',
    name: 'Introduction to Generative AI',
    company: 'Google Cloud',
    issuedDate: '2024-03',
    badgeUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Google_Cloud_icon_%282026%29.svg/1280px-Google_Cloud_icon_%282026%29.svg.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_introduction-to-generative-ai-activity-7287024669054939136-DhJo?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Examines core Google Cloud GenAI interfaces, parameters tuning setups, prompt configurations patterns, and model architecture limits for enterprise applications.',
    skills: ['Generative AI', 'Model Tuning', 'Cloud AI tools'],
    category: 'Artificial Intelligence',
    metrics: { likes: 135, comments: 18, impressions: 1890 }
  },
  {
    id: 'google-intro-llm',
    name: 'Introduction to Large Language Models',
    company: 'Google Cloud',
    issuedDate: '2024-03',
    badgeUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Google_Cloud_icon_%282026%29.svg/1280px-Google_Cloud_icon_%282026%29.svg.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_introduction-to-large-language-models-activity-7287024493217103872-v0_H?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Fundamental mechanics of transformer layers, contextual embeddings sequences, tokenization structures, and general natural language deep models limitations.',
    skills: ['Transformer Networks', 'LLM Architecture', 'Model limits'],
    category: 'Artificial Intelligence',
    metrics: { likes: 139, comments: 19, impressions: 1940 }
  },
  {
    id: 'google-responsible-ai',
    name: 'Introduction to Responsible AI',
    company: 'Google Cloud',
    issuedDate: '2024-02',
    badgeUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Google_Cloud_icon_%282026%29.svg/1280px-Google_Cloud_icon_%282026%29.svg.png',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_introduction-to-responsible-ai-activity-7287024300476280832-QzTx?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Fundamental overview detailing biases avoidance, safety safeguards setup, interpretability mechanisms, AI ethics compliance, and reliable continuous reviews frameworks.',
    skills: ['Responsible AI', 'Model Fairness', 'Ethical AI deployments'],
    category: 'Artificial Intelligence',
    metrics: { likes: 134, comments: 17, impressions: 1820 }
  },
  {
    id: 'iit-skill-partner',
    name: 'Python Programming Basics',
    company: 'IIT Ropar',
    issuedDate: '2024-01',
    badgeUrl: 'https://media.licdn.com/dms/image/v2/C560BAQFzaJNs-JSe4w/company-logo_200_200/company-logo_200_200/0/1648218852378?e=2147483647&v=beta&t=-rcZM7VMoIBGMe3QTL17SRflJdbnag0zsPLByPivo_Q',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_iit-skill-activity-7265005619701600257-q8yq?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Rigorous technical advancement boot camp validating scalable systems, automated testing processes, web containers architecture, and software performance optimization metrics.',
    skills: ['Advanced Systems', 'Automated Testing', 'Cloud Containers'],
    category: 'Programming',
    metrics: { likes: 128, comments: 14, impressions: 1850 }
  },
  {
    id: 'simplilearn-ui-ux',
    name: 'UI/UX For Beginners Course',
    company: 'Great Learning',
    issuedDate: '2023-11',
    badgeUrl: 'https://play-lh.googleusercontent.com/iKOY-lQls7d4x8gv5WNQRKWi5ja5iT1PlZBc4-oNn6Ek4bQRqxHz77eVEwtSHniZrZPT-ZuDuOaRTxFjnhk7',
    credentialUrl: 'https://www.linkedin.com/posts/chethan143chiru_ui-ux-for-beginners-course-completion-certificate-activity-7248017606689849344-fwcK?utm_source=share&utm_medium=member_android&rcm=ACoAAE5Q69UBv4NQdSzhIrZEvjnXj11VNTibXLU',
    description: 'Validates modern layout grid guidelines, user journey mapping patterns, high-fidelity Figma prototyping, wireframing, color theories, and typography pairings.',
    skills: ['Figma', 'Prototyping', 'Wireframing', 'UX Design Foundations'],
    category: 'Professional Development',
    metrics: { likes: 154, comments: 28, impressions: 2250 }
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Alpha',
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
    title: 'Cred',
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
