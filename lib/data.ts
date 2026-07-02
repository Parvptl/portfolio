export interface Project {
  title: string
  subtitle: string
  description: string
  tags: string[]
  metrics: string
  url: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
}

export interface Leadership {
  title: string
  description: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Achievement {
  title: string
  description: string
}

export const projects: Project[] = [
  {
    title: 'DualForensics',
    subtitle: 'Deepfake Detection Service',
    description: 'A containerized deepfake detection service — CNN-Transformer classifier served through FastAPI, built to survive bad input and concurrent load.',
    tags: ['Python', 'PyTorch', 'FastAPI', 'Docker'],
    metrics: 'AUC 0.9787',
    url: 'https://github.com/Parvptl/DualForensics',
  },
  {
    title: 'Hesor',
    subtitle: 'Real-Time Vitals Monitoring',
    description: 'Real-time vitals rendering without the UI choking on the data rate. Decoupling data ingestion from rendering to maintain 60 FPS.',
    tags: ['React Native', 'TypeScript', 'FastAPI'],
    metrics: '60 FPS stable',
    url: 'https://github.com/Parvptl/hesor',
  },
  {
    title: 'Financial Sentiment Forecasting',
    subtitle: 'Entity-Aware Transformer Pipeline',
    description: 'An end-to-end ML pipeline turning entity-level financial news into leakage-safe stock return forecasts.',
    tags: ['Python', 'PyTorch', 'Transformers', 'XGBoost'],
    metrics: '92%+ accuracy',
    url: 'https://github.com/Parvptl/Financial-Sentiment-Forecasting',
  },
  {
    title: 'Max-Flow Hub',
    subtitle: 'Network Flow Visualizer',
    description: 'Three max-flow algorithms implemented from scratch with D3.js animation demonstrating Ford-Fulkerson, Edmonds-Karp, and Push-Relabel.',
    tags: ['JavaScript', 'D3.js', 'Tailwind'],
    metrics: 'Live visualizer',
    url: 'https://github.com/Parvptl/Max-Flow-Hub',
  },
  {
    title: 'NEXUS',
    subtitle: 'E-Commerce Analytics Platform',
    description: 'ML analytics pipeline processing 100K+ transactions with statistical inference, market basket analysis, and customer segmentation.',
    tags: ['Python', 'Streamlit', 'Scikit-Learn'],
    metrics: '80% time savings',
    url: 'https://github.com/Parvptl/NEXUS',
  },
  {
    title: 'FinTrack',
    subtitle: 'Investment Management System',
    description: 'Full-stack portfolio management system with normalized PostgreSQL schema and role-based access control.',
    tags: ['Flask', 'PostgreSQL', 'JavaScript'],
    metrics: 'ACID compliant',
    url: 'https://github.com/Parvptl/FinTrack',
  },
]

export const experience: Experience[] = [
  {
    company: 'Accenture',
    role: 'Advanced Engineering Hub Intern',
    period: 'May 2026 – Jul 2026',
    description: 'Contributed to developing explainable AI capabilities for enterprise Identity & Access Management.',
  },
  {
    company: 'IIT Palakkad',
    role: 'Project Intern',
    period: 'Apr 2026 – Present',
    description: 'Building backend and mobile app for clinician-facing vitals monitoring platform.',
  },
]

export const leadership: Leadership[] = [
  {
    title: 'Convener — The Integral Cup',
    description: 'Directed logistics for national-level academic competition spanning 26+ centers across IITs, BITS, IIITs, and IISc.',
  },
]

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript/JavaScript', 'Java', 'SQL', 'C++'],
  },
  {
    category: 'Backend & APIs',
    items: ['FastAPI', 'REST API Design', 'Docker', 'Pydantic'],
  },
  {
    category: 'ML & Deep Learning',
    items: ['PyTorch', 'Transformers', 'Scikit-Learn', 'CNNs', 'XGBoost'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'TypeScript'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQL Design', 'Transaction Handling'],
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Amazon ML Summer School 2026 — Selected Participant',
    description: "Selected among the top approximately 3,000 students from 134,421+ registrations across India through Amazon's multi-stage selection process (resume screening, statement of purpose, and online assessment). Participated in advanced machine learning program covering ML fundamentals, deep learning, generative AI, large language models, and real-world applications.",
  },
  {
    title: '4th Rank — Inter IIT Tech Meet 14.0',
    description: 'Algorithmic Optimization Challenge. Built TopoGAN with persistent homology-based losses, outperforming StandardGAN and CTGAN among 20+ IIT teams.',
  },
]
