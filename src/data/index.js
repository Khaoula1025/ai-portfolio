import { C } from "../styles/theme";

export const PROJECTS = [
  {
    id: "smartstay", num: "01",
    title: "SmartStay Intelligence",
    type: "AI · Revenue Mgmt",
    year: "2025–26",
    desc: "AI platform forecasting hotel occupancy (1–30 days) and recommending optimal room pricing for UNO Hotels. XGBoost + Prophet ensemble, daily Airflow pipeline.",
    tags: ["XGBoost", "Prophet", "FastAPI", "Airflow", "MLflow", "Next.js", "SHAP"],
    accent: C.sage,
    link: "https://github.com/Khaoula1025/SmartStayAi",
    metrics: ["82% Prediction Accuracy", "1–30 Day Forecast Horizon", "Real-time Ensemble Model"]
  },
  {
    id: "hrpulse", num: "02",
    title: "HR-Pulse",
    type: "AI · Data Platform",
    year: "2025",
    desc: "End-to-end Data & AI platform for automated job analysis. NER skill extraction via Azure AI, salary prediction (ML), full DevOps automation.",
    tags: ["FastAPI", "Next.js", "Azure AI", "NER", "Docker", "Terraform", "CI/CD"],
    accent: C.olive,
    link: "https://github.com/Khaoula1025/HR-Pulse",
    metrics: ["88% NER Skill Extraction", "Infrastructure as Code", "Full CI/CD Automation"]
  },
  {
    id: "retention", num: "03",
    title: "Retention AI",
    type: "AI · HR Decision",
    year: "Dec 2025",
    desc: "Intelligent HR platform predicting employee churn via ML and generating personalized retention plans using Generative AI.",
    tags: ["Machine Learning", "Generative AI", "FastAPI", "React", "PostgreSQL"],
    accent: C.gold,
    link: "https://github.com/Khaoula1025/RetentionAI-Employee-Churn-Prediction-HR-Decision-Support-System-frontend",
    metrics: ["92% F1-Score Churn Detection", "GenAI Personalized Strategy", "Secure Production API"]
  },
  {
    id: "hybrid", num: "04",
    title: "Hybrid Analyser",
    type: "NLP · Full Stack",
    year: "Dec 2025",
    desc: "Full-stack press analysis platform combining Zero-Shot classification and Generative AI to categorize, synthesize and analyze article tone.",
    tags: ["FastAPI", "Zero-Shot", "Generative AI", "React", "Machine Learning"],
    accent: C.moss,
    link: "https://github.com/Khaoula1025/zero-shot-ai-orchestration-platform-frontend",
    metrics: ["Multi-Model Orchestration", "Zero-Shot Classification", "Real-time Analysis"]
  },
  {
    id: "face", num: "05",
    title: "FaceEmotion API",
    type: "Computer Vision",
    year: "Nov 2025",
    desc: "AI API prototype for real-time face detection and emotion prediction. OpenCV + CNN TensorFlow/Keras pipeline with FastAPI.",
    tags: ["OpenCV", "TensorFlow", "Keras", "FastAPI", "PostgreSQL", "CNN"],
    accent: C.sage,
    link: "https://github.com/Khaoula1025/Khaoula1025-Sentiment-Analysis-Application-with-External-AI-Service-backend",
    metrics: ["Real-time Emotion Detection", "CNN + OpenCV Pipeline", "Automated CI Tests"]
  },
  {
    id: "ticket", num: "06",
    title: "SmartTicket Pipeline",
    type: "NLP · MLOps",
    year: "Feb 2026",
    desc: "End-to-end NLP batch pipeline for automated IT support ticket classification. HuggingFace embeddings, ChromaDB vector store, supervised learning.",
    tags: ["NLP", "HuggingFace", "ChromaDB", "Docker", "Kubernetes", "Evidently AI"],
    accent: C.gold,
    link: "https://github.com/Khaoula1025/SmartTicketPipeline",
    metrics: ["Automated NLP Classification", "HuggingFace Embeddings", "Drift Detection (Evidently AI)"]
  },
  {
    id: "rag", num: "07",
    title: "IT Support RAG MLOps",
    type: "RAG · LLMOps",
    year: "Feb 2026",
    desc: "LLMOps RAG assistant for IT support. PDF ingestion, semantic search with embeddings, FastAPI backend, full Kubernetes orchestration.",
    tags: ["RAG", "LangChain", "FastAPI", "Vector DB", "Docker", "Kubernetes", "PostgreSQL"],
    accent: C.olive,
    link: "https://github.com/Khaoula1025/it-support-rag-mlops",
    metrics: ["End-to-end LLMOps Pipeline", "Semantic Search + RAG", "Kubernetes Orchestration"]
  },
];


export const SKILLS = {
  "AI / ML": {
    "Core": [
      { name: "LangChain", featured: true, desc: "LLM orchestration and RAG pipelines" },
      { name: "RAG", featured: true, desc: "Retrieval Augmented Generation for knowledge" },
      { name: "LLMs", featured: false, desc: "Large Language Model integration" }
    ],
    "Libraries": [
      { name: "XGBoost", featured: true, desc: "Gradient boosting for structured data" },
      { name: "Prophet", featured: false, desc: "Time-series forecasting" },
      { name: "Scikit-learn", featured: false, desc: "Classic ML algorithms" },
      { name: "PyTorch", featured: false, desc: "Deep learning frameworks" },
      { name: "HuggingFace", featured: false, desc: "NLP models and transformers" }
    ],
    "Tools": [
      { name: "MLflow", featured: false, desc: "Experiment tracking and model mgmt" },
      { name: "ChromaDB", featured: false, desc: "Vector database for semantic search" },
      { name: "SHAP", featured: false, desc: "Model explainability and interpretability" },
      { name: "Evidently AI", featured: false, desc: "ML monitoring and drift detection" }
    ]
  },
  "Full Stack": {
    "Core": [
      { name: "FastAPI", featured: true, desc: "High-performance Python web APIs" },
      { name: "React", featured: true, desc: "Modern UI development" },
      { name: "Next.js", featured: false, desc: "Full-stack React framework" }
    ],
    "Frameworks": [
      { name: "Laravel", featured: false, desc: "PHP framework for robust backends" },
      { name: "Node.js", featured: false, desc: "Server-side JavaScript" },
      { name: "TypeScript", featured: false, desc: "Type-safe JavaScript" }
    ],
    "Database": [
      { name: "PostgreSQL", featured: false, desc: "Relational database management" },
      { name: "MySQL", featured: false, desc: "SQL database systems" },
      { name: "MongoDB", featured: false, desc: "NoSQL document storage" }
    ]
  },
  "DevOps & Infra": {
    "Core": [
      { name: "Docker", featured: true, desc: "Containerization for production" },
      { name: "Kubernetes", featured: true, desc: "Container orchestration at scale" }
    ],
    "Pipelines": [
      { name: "Airflow", featured: false, desc: "Workflow orchestration for data" },
      { name: "Terraform", featured: false, desc: "Infrastructure as Code (IaC)" },
      { name: "GH Actions", featured: false, desc: "CI/CD automation" }
    ],
    "Cloud": [
      { name: "Azure", featured: false, desc: "Cloud computing and services" },
      { name: "Vercel", featured: false, desc: "Deployment and hosting platform" }
    ]
  }
};

export const SKILL_CATEGORIES = [
  { label: "AI / ML", accent: C.sage },
  { label: "Full Stack", accent: C.olive },
  { label: "DevOps & Infra", accent: C.gold },
];

export const EXPERIENCES = [
  {
    company: "Qualiup Group",
    role: "Fullstack AI Developer",
    period: "April 2026 — Present",
    current: true,
    desc: "Technical audit of an internal Laravel/Blade platform covering 5+ agencies and 3 brands (Qualiup, ELAM, IQUALAB). Identification of critical security vulnerabilities and systemic bugs. Design of innovative AI solutions to automate and optimize laboratory business processes.",
    quote: "Building RAG systems for enterprise knowledge automation",
    accent: "#495F4B",
    tags: ["Laravel", "Blade", "Security Audit", "AI Automation"]
  },
  {
    company: "UNO-Hotels",
    role: "Fullstack AI Developer",
    period: "January 2026 — Present",
    current: true,
    isFlagship: true,
    desc: "Development of an AI-driven price optimization platform for UNO Hotels. Implementation of ML models (XGBoost + Prophet) with 82% accuracy, backend orchestration, and a recommendation dashboard. Increased revenue by 12-18% and reduced manual work by 70%.",
    quote: "End-to-end ML pipeline · Production deployed · UK pilot",
    accent: "#B8922A",
    tags: ["XGBoost", "Prophet", "FastAPI", "MLflow", "Next.js", "AI Revenue Mgmt"]
  },
  {
    company: "HomeHelper",
    role: "Web Developer",
    period: "June — July 2024",
    current: false,
    desc: "Contributed to the development of a service platform, designing and delivering a responsive landing page in collaboration with a team of 3. Integrated registration forms and conducted functional testing.",
    quote: "React + Tailwind · Remote · Team of 3",
    accent: "#728A70",
    tags: ["React", "Tailwind CSS", "Responsive Design"]
  },
  {
    company: "Tra Top Ingénierie",
    role: "Web Developer",
    period: "April — May 2024",
    current: false,
    desc: "Developed a full-stack web application (Laravel, React, MySQL) enabling field teams to submit forms and scanned documents in real-time. Implemented secure authentication with role-based access control and a management dashboard.",
    quote: "Laravel + React · On-site · Agadir",
    accent: "#5F735C",
    tags: ["Laravel", "React", "MySQL", "Role-based Auth"]
  },
];

export const EDUCATION = [
  { school: "Simplon Maghreb × JobInTech", degree: "Bootcamp — AI & Development", period: "Sep 2025 – Mar 2026" },
  { school: "ISTA (OFPPT)", degree: "Higher National Diploma — Digital Dev", period: "Sep 2022 – Jun 2024" },
  { school: "Université Ibn Zohr", degree: "Bachelor of Applied Science — Physics", period: "Sep 2018 – Jun 2021" },
];

export const CERTIFICATIONS = [
  { name: "Figma Design", issuer: "Orange Maroc", date: "Aug 2024" },
  { name: "Back-End Apps with Node.js & Express", issuer: "IBM", date: "Mar 2025" },
  { name: "Computer Hardware Basics", issuer: "Cisco", date: "Mar 2024" },
  { name: "Python Essentials 1", issuer: "Cisco", date: "Mar 2024" },
];

