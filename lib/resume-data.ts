export const profile = {
  name: 'Labanya Roy',
  title: 'Backend & AI Developer',
  location: 'Kolkata, West Bengal',
  email: 'labanyaroy1488@gmail.com',
  phone: '+91 8967418564',
  linkedin: 'https://www.linkedin.com/in/labanya-roy/',
  github: 'https://github.com/labanya-1',
  resumeUrl:
    'https://blobs.vusercontent.net/blob/Labanya_Roy_Resume%20%285%29-gqpeFgI70vBzrDBquuQir93n78uQlk.pdf',
  summary:
    'Final-year Computer Science student with internship experience in backend development and AI-powered applications using Python, FastAPI, and PostgreSQL. Strong understanding of data structures, algorithms, and problem-solving.',
  intro:
    "I build reliable backends and AI-powered systems — from a 24/7 voice receptionist for a UK pharmacy chain to RAG-driven research assistants. I care about clean APIs, secure integrations, and shipping things that hold up in production.",
}

export const about = {
  who: "I'm a final-year Computer Science student at Meghnad Saha Institute of Technology, with hands-on internship experience turning ideas into production-ready backend and AI systems.",
  specialize:
    'I specialize in backend development with Python and FastAPI, multi-tenant PostgreSQL architectures, LLM integration, and RAG pipelines — with a strong foundation in data structures, algorithms, and problem-solving.',
  interests:
    'I enjoy working on AI automation, secure API design, and data-driven tooling — and I stay curious about how systems scale and stay resilient under real-world load.',
  goals:
    'My goal is to grow as a software engineer who ships dependable, well-tested backends and thoughtful AI features that make a measurable difference for users.',
}

export type Experience = {
  company: string
  position: string
  duration: string
  location: string
  technologies: string[]
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    company: 'InsightsTap',
    position: 'AI Developer Intern',
    duration: 'March 2026 – June 2026',
    location: 'Kolkata (Onsite)',
    technologies: [
      'FastAPI',
      'PostgreSQL',
      'Supabase',
      'Pydantic',
      'HMAC',
      'Sentry',
      'HubSpot',
      'Zapier',
    ],
    achievements: [
      'Delivered the FastAPI backend for an AI voice receptionist serving a 20-store UK pharmacy chain on a multi-tenant PostgreSQL (Supabase) architecture, answering inbound calls 24/7 with a real-time voice agent for medication/stock checks, vaccination bookings, and message capture.',
      'Secured webhook integrations against replay and duplicate-write failures using HMAC verification, idempotent writes, and Pydantic validation — plus DST-aware scheduling, Sentry monitoring, and GDPR-compliant retention.',
      'Streamlined customer lifecycle for a global client via HubSpot CRM, OAuth, and Zapier integrations.',
    ],
  },
  {
    company: 'Tech Daddy Global Solutions',
    position: 'Data Analyst Intern',
    duration: 'Jul 2025 – Oct 2025',
    location: 'Remote',
    technologies: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint'],
    achievements: [
      'Built an automated workflow (Power Apps, Power Automate, Power BI) for task tracking and reporting for a global client.',
      'Reduced manual effort by 80% via auto-assignment, real-time alerts, and SharePoint-integrated status updates.',
      'Designed live Power BI dashboards tracking task-completion KPIs and action trends across distributed teams, giving stakeholders real-time status without manual reporting.',
    ],
  },
]

export type Project = {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Full-Stack Todo App with RBAC',
    description:
      'A secure task manager with role-based access control across user and admin workflows, exposing 20 REST API endpoints secured with JWT authentication and bcrypt password hashing. Achieved 83% test coverage with 27 Pytest test cases spanning the auth, user, todo, and admin modules.',
    technologies: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'bcrypt', 'Pytest'],
    github: 'https://github.com/labanya-1/Todo-App',
  },
  {
    title: 'Smart Assistant for Research Summarisation',
    description:
      'An AI research assistant with 5 modes (summarisation, chat, quizzes, notes, flashcards) powered by a RAG pipeline using chunking, vector embeddings, and semantic search for page-level citations. SQLite caching serves repeated queries in under 50 ms with zero API calls versus ~1.5–2 s fresh.',
    technologies: ['React', 'Vite', 'FastAPI', 'Gemini', 'RAG', 'SQLite'],
    github: 'https://github.com/labanya-1/-Smart-Assistant-for-Research-Summarization',
  },
]

export type SkillCategory = {
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  { label: 'Languages', skills: ['Python', 'C++', 'Java', 'SQL', 'HTML', 'CSS'] },
  {
    label: 'Frameworks & Libraries',
    skills: ['FastAPI', 'LangChain', 'TensorFlow', 'PyTorch', 'OpenCV', 'Streamlit'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Supabase'],
  },
  {
    label: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'Power BI', 'Tableau', 'Figma', 'Excel'],
  },
  {
    label: 'Key Areas',
    skills: [
      'LLM Integration',
      'RAG Pipelines',
      'REST APIs',
      'Machine Learning',
      'AI Automation',
      'DSA',
    ],
  },
]

export const education = {
  degree: 'B.Tech in Computer Science',
  college: 'Meghnad Saha Institute of Technology',
  year: '2022 – 2026',
  cgpa: '7.3 / 10',
  coursework: [
    'DSA',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
    'Machine Learning',
  ],
}

export type Certification = {
  title: string
  organization: string
  year: string
  image: string
}

export const certifications: Certification[] = [
  {
    title: 'Backend Development with FastAPI',
    organization: 'Coursera',
    year: '2026',
    image: '/certificates/fastapi-backend-development.png',
  },
  {
    title: 'HubSpot CMS for Developers II',
    organization: 'HubSpot Academy',
    year: '2026',
    image: '/certificates/hubspot-cms-developers-ii.png',
  },
  {
    title: 'Introduction to Data Analytics',
    organization: 'IBM via Coursera',
    year: '2025',
    image: '/certificates/introduction-data-analytics.png',
  },
  {
    title: 'Advanced Power BI',
    organization: 'Edureka via Coursera',
    year: '2025',
    image: '/certificates/advanced-power-bi.png',
  },
]

export const achievements: string[] = [
  'Hackathon Finalist — Smart India Hackathon 2023; Smart Bengal Hackathon 2024 (Team Lead).',
  'PR Lead & Developer, HACKERSPACE Club — led workshops and coding initiatives, mentored juniors, and organized community events.',
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
