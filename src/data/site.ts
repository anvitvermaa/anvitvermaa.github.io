// =========================================================================
// SITE CONTENT — verbatim from Anvit's original site. Do not paraphrase.
// Added fields (index no., category, pulled metrics) are FRAMING only —
// every figure below appears verbatim in Anvit's own descriptions.
// =========================================================================

export type Point = string | { lead: string; text: string };
export type Metric = { k: string; v: string };

export const profile = {
  name: 'Anvit Verma',
  greeting: 'Hi, my name is',
  nameDisplay: 'Anvit Verma.',
  role: 'Data & AI.',
  location: 'Mumbai, India',
  status: 'Open to research & full-time roles',
  email: 'anvitvermaa@gmail.com',
  resume: '/resume.pdf',
  photo: '/photo.png',
  bio: [
    'I enjoy building intelligent systems that solve real-world problems. My journey into technology started with a deep curiosity for computer science, which led me to pursue a Bachelor of Technology at Vellore Institute of Technology, Bhopal.',
    "Fast-forward to today, and I've had the privilege of working as an AI Intern at Jio Platforms Limited, where I constructed autonomous agents and RAG pipelines using LangChain and LLAMA 3. I also serve as a Research Assistant evaluating neural architectures for autonomous driving, and a Technical Assistant spearheading technical development for university-wide Linux courses.",
    'My main focus these days is engineering robust AI/ML pipelines and developing multi-agent orchestration systems. I thrive at the intersection of full-stack development and advanced machine learning.',
  ],
};

// Figures surfaced from Anvit's verbatim experience/work text — index flavour.
export const stats: Metric[] = [
  { k: '4,240', v: 'students served · university Linux course' },
  { k: '~100M', v: 'vehicle records processed · Vahan data' },
  { k: '2×', v: 'AI internships @ Jio Platforms' },
  { k: '40%', v: 'trajectory prediction error reduced' },
  { k: '500+', v: 'documents in a production RAG pipeline' },
  { k: '8', v: 'super-resolution architectures benchmarked' },
];

export const socials = [
  { name: 'GitHub', handle: '@anvitvermaa', url: 'https://github.com/anvitvermaa' },
  { name: 'LinkedIn', handle: 'in/anvit-verma', url: 'https://linkedin.com/in/anvit-verma' },
  { name: 'Email', handle: 'anvitvermaa@gmail.com', url: 'mailto:anvitvermaa@gmail.com' },
  { name: 'Patreon', handle: 'anvitvermaa_labs', url: 'https://www.patreon.com/c/anvitvermaa_labs' },
];

export const nav = [
  { label: 'About', href: '#hero', idx: '01' },
  { label: 'Experience', href: '#experience', idx: '02' },
  { label: 'Publications', href: '#publications', idx: '03' },
  { label: 'Work', href: '#work', idx: '04' },
  { label: 'Education', href: '#education', idx: '05' },
  { label: 'Skills', href: '#skills', idx: '06' },
  { label: 'Contact', href: '#contact', idx: '07' },
];

export type Job = {
  company: string;
  location: string;
  title: string;
  range: string;
  url?: string;
  points: Point[];
};

export const experience: Job[] = [
  {
    company: 'Jio Platforms Limited (JPL)',
    location: 'Navi Mumbai, IN',
    title: 'Databricks Intern',
    range: 'June 2026 - Present',
    url: 'https://www.jio.com',
    points: [
      'Architected an automated data reconciliation engine performing daily cross-system validation of 2,300+ tables across 14 business domains, migrating from SAP HANA/Oracle into Databricks Lakehouse – automatically flagging missing or out-of-sync tables for remediation.',
      'Engineered a real-time AI/BI job monitoring dashboard tracking 1,100+ Databricks jobs and 760K+ monthly runs, using SQL date-spine analysis and Quartz cron parsing to surface an 8.2% hidden schedule deviation masked by a false 99.9% on-time metric.',
      'Automated enterprise-scale data auditing – replacing manual cross-team audits and ad-hoc SQL querying with self-serve analytics that cut job-investigation time by an estimated ~80% and reconciliation effort by an estimated 40+ person-hours per week.',
    ],
  },
  {
    company: 'Official University E-Learning Portal (Vityarthi)',
    location: 'Bhopal, IN',
    title: 'Technical Assistant Intern',
    range: 'Sept 2025 - Jan 2026',
    url: '#',
    points: [
      'Single-handedly architected and developed the university-wide Linux System Administration course (CSE0002) from scratch, serving 4,240 enrolled students in its inaugural semester.',
      'Authored the complete end-to-end course curriculum, comprehensive lecture scripts, and syllabus, delivering over 90 Bash and Shell automation modules replicating real-world system administration workflows.',
      'Produced and recorded 100% of the technical screen demonstrations, capturing real-time execution of advanced Linux commands across an 8.5-hour curriculum spanning 21 lectures and 5 sections.',
      'Achieved the highest rating and viewership on the entire university e-learning portal, securing an exceptional 4.7/5.0 rating across 718 student reviews.',
    ],
  },
  {
    company: 'Vellore Institute of Technology',
    location: 'Bhopal, IN',
    title: 'Research Assistant',
    range: 'Jan 2025 - Present',
    url: 'https://vitbhopal.ac.in',
    points: [
      { lead: 'Research Focus 4: Causal Evaluation of EV Subsidies:', text: 'Evaluated the Maharashtra EV Policy 2025 via a macro-panel (N=9, T=54). Engineered an out-of-core DuckDB/Polars ETL pipeline and implemented Synthetic Difference-in-Differences (SDiD) in Python to quantify the "Demand Displacement Paradox."' },
      { lead: 'Research Focus 3: Rondônia Fishbone Harmonizer:', text: 'Upscaled historical 30m Landsat imagery to 10m Sentinel-2 resolution to monitor Amazon deforestation. Built a PySTAC ETL pipeline and benchmarked 7 PyTorch architectures (EDSR, SwinIR, ESRGAN) for super-resolution.' },
      { lead: 'Research Focus 2: ADAS & Neural Networks:', text: 'Co-authored a technical review mapping the shift to Deep Learning in autonomous driving. Quantified a 40% drop in trajectory prediction error (Kalman Filters to LSTM/GNNs) and proposed Neuro-Symbolic AI integrations for ISO 26262 compliance.' },
      { lead: 'Research Focus 1: AV Perception & Integration:', text: 'Co-authored a published review on autonomous vehicle perception. Benchmarked classical filters vs. deep learning for LiDAR/vision fusion, and analyzed SLAM HD mapping & GAN dehazing for adverse weather.' },
    ],
  },
  {
    company: 'Jio Platforms Limited (JPL)',
    location: 'Navi Mumbai, IN',
    title: 'AI Intern',
    range: 'May 2025 - June 2025',
    url: 'https://www.jio.com',
    points: [
      'Constructed autonomous AI agents using LangChain and LLaMA 3, implementing a RAG pipeline over 500+ internal documents for precise information retrieval.',
      'Implemented dynamic SQL generation enabling structured querying across complex relational databases within the agent workflow.',
      'Launched a LangGraph-based multi-agent system that automated 90% of complaint routing and reduced operational latency by 20%.',
    ],
  },
];

export const publications = [
  {
    journal: 'Airo International Research Journal',
    meta: 'ISSN 2320-3714',
    title: 'Perception Challenges in Autonomous Vehicles',
    authors: 'Ishaan Shrivastava, Anvit Verma',
    year: '2025',
    volume: 'Vol 1 - Issue 3',
    url: 'https://www.airo.co.in/view-publication/2356',
    points: [
      'Investigated the multifaceted challenges of autonomous driving, focusing on sensor fusion, object detection, and localization to enhance operational reliability and safety.',
      'Evaluated critical technologies including depth estimation, dynamic object tracking, and semantic segmentation to construct a cohesive environmental model for self-directed vehicles.',
      'Addressed the ethical implications and privacy concerns related to data collection while formulating a technical roadmap for overcoming adverse environmental conditions in perception systems.',
    ],
  },
];

export type Work = {
  no: string;
  year: string;
  title: string;
  kind: string;
  blurb: string;
  tech: string[];
  github?: string | null;
  external?: string | null;
  cover?: string | null;
  art?: 'sdid' | 'graph' | null;
  meta?: Metric[] | null;
  intro?: Point | null;
  paragraph?: string | null;
  bullets?: Point[] | null;
};

export const works: Work[] = [
  {
    no: '01',
    year: '2024',
    title: 'Tastelytics',
    kind: 'Full-Stack · Serverless Cloud',
    blurb: 'A serverless music-analytics platform with a Windows 95 / Frutiger Aero interface and a virtual CD-burner playlist builder.',
    tech: ['React', 'Vite', 'Python', 'AWS CloudFront', 'Spotify API', 'GitHub Actions'],
    github: 'https://github.com/anvitvermaa/Tastelytics',
    external: null,
    cover: '/works/tastelytics.png',
    meta: [
      { k: 'Auth', v: 'Spotify PKCE OAuth 2.0' },
      { k: 'Delivery', v: 'Global low-latency · AWS CloudFront' },
      { k: 'Pipeline', v: 'GitHub Actions CI/CD' },
    ],
    bullets: [
      'Architected a serverless music analytics platform on AWS CloudFront with a Python backend, achieving global low-latency delivery and zero-downtime deployments via a GitHub Actions CI/CD pipeline.',
      "Integrated Spotify's PKCE OAuth 2.0 flow for secure, backend-less authentication and built interactive analytics visualizing top artists, tracks, and algorithmic recommendations across multiple time ranges.",
      'Engineered a custom Windows 95 / Frutiger Aero design system using Tailwind CSS, featuring a virtual CD Burner playlist builder, state-machine-driven Easter eggs, and retro pixel-art micro-interactions.',
    ],
  },
  {
    no: '02',
    year: '2024',
    title: 'GitHub Repo Analyst AI',
    kind: 'Agentic AI · RAG',
    blurb: 'Autonomous LangGraph agents that analyze any codebase and run security audits inside a Windows XP desktop.',
    tech: ['LangGraph', 'LLaMA 3', 'ChromaDB', 'React (Vite)', 'Framer Motion'],
    github: 'https://github.com/anvitvermaa/Repo_Analyst_AI',
    external: 'https://anvitvermaa.github.io/Repo_Analyst_AI/',
    cover: '/works/repo-analyst.png',
    meta: [
      { k: 'Agents', v: 'LLaMA 3 · LangGraph' },
      { k: 'Retrieval', v: 'ChromaDB RAG' },
      { k: 'Audit', v: '3-stage SAST & deps' },
    ],
    paragraph:
      'Architected an autonomous LangGraph orchestration layer with LLaMA 3 agents and a ChromaDB RAG pipeline, enabling conversational codebase analysis, repository discovery, and automated README generation. Engineered an interactive React frontend with a flawless Windows XP-themed desktop experience, completely automating complex three-stage security audits (SAST & dependencies) directly within the OS simulation.',
  },
  {
    no: '03',
    year: '2025',
    title: 'Rondônia Fishbone Harmonizer',
    kind: 'Computer Vision · Super-Resolution',
    blurb: 'A PyTorch super-resolution pipeline upscaling 30m satellite imagery to 10m to track Amazon deforestation.',
    tech: ['Python', 'PyTorch (GANs & Transformers)', 'GDAL', 'Sentinel-2', 'skimage'],
    github: 'https://github.com/anvitvermaa/rondonia-fishbone-harmonizer',
    external: null,
    cover: '/works/fishbone.png',
    meta: [
      { k: 'Upscale', v: '30m → 10m imagery' },
      { k: 'Benchmark', v: '8 SR architectures' },
      { k: 'Metrics', v: 'PSNR · SSIM · SAM · LPIPS' },
    ],
    paragraph:
      'Pioneered a VRAM-optimized PyTorch pipeline and a proprietary "Smart Scaling" algorithm to upscale 30m Landsat to 10m Sentinel-2 imagery, strictly preserving 16-bit TOA multispectral integrity of the Rondônia fishbone deforestation pattern. Executed a definitive benchmarking study of 8 Super-Resolution architectures (SRGAN, SwinIR, HAT) using a rigorous perception-distortion matrix (PSNR, SSIM, SAM, LPIPS) to quantify sub-hectare logging road hallucination.',
  },
  {
    no: '04',
    year: '2025',
    title: 'EV Subsidy Causal Evaluation',
    kind: 'Causal Inference · Data Engineering',
    blurb: 'A quasi-experimental causal study of Maharashtra’s 2025 EV policy across ~100M vehicle registrations.',
    tech: ['Python', 'Polars', 'SDiD', 'AJAX', 'Causal Inference'],
    github: null,
    external: null,
    cover: null,
    art: 'sdid',
    meta: [
      { k: 'Panel', v: 'N=16 · T=54 months' },
      { k: 'Scale', v: '~100M registrations' },
      { k: 'Estimator', v: 'SDiD + L2 Ridge' },
    ],
    intro: { lead: 'Project Context:', text: 'A rigorous quasi-experimental causal evaluation of the Maharashtra EV Subsidy Policy 2025 across a balanced macro-state panel of top vehicle-registering Indian states (N=16, T=54 months).' },
    bullets: [
      { lead: 'Uncovered the "Demand Displacement Paradox":', text: 'Mathematically isolated a null short-run demand signal using quasi-experimental causal analysis, driven by volatile national FAME-II subsidy expirations.' },
      { lead: 'High-Performance Data Engineering:', text: 'Engineered an out-of-core ETL pipeline utilizing a Python AJAX scraper and Polars to lazily ingest, transform, and evaluate nearly 100 million API-sourced vehicle registrations across 54 months of macroscopic Vahan data.' },
      { lead: 'Advanced Causal Architecture:', text: 'Pioneered a rigorous dual-specification causal architecture utilizing the Synthetic Difference-in-Differences (SDiD) estimator with L2 Ridge Regularization to construct unconfounded baseline counterfactuals.' },
      { lead: 'Mathematical Robustness:', text: 'Designed advanced spatial robustness checks ("Donut Hole" specifications) and placebo bootstrap permutation tests to mathematically validate SUTVA compliance against cross-border arbitrage spillovers.' },
    ],
  },
  {
    no: '05',
    year: '2025',
    title: 'Multi-Agent Telecom Optimizer',
    kind: 'Agentic AI · Orchestration',
    blurb: 'A multi-agent LangGraph system that generates and self-reviews marketing content with reflection loops.',
    tech: ['LangGraph', 'LLaMA 3', 'MLflow', 'Databricks', 'ChromaDB'],
    github: 'https://github.com/anvitvermaa/Multi-Agent-Telecom-Optimizer',
    external: null,
    cover: null,
    art: 'graph',
    meta: [
      { k: 'Control', v: 'LangGraph reflection loops' },
      { k: 'Models', v: 'LLaMA 3 · creative + supervisor' },
      { k: 'Tracking', v: 'MLflow autologging' },
    ],
    bullets: [
      { lead: 'Stateful Orchestration:', text: 'Orchestrated complex marketing workflows using LangGraph with dynamic branching, reflection, and supervisor-review loops for auto-regeneration based on quality thresholds.' },
      { lead: 'Creative & Supervisor LLMs:', text: 'Deployed LLaMA 3 for generating marketing messages and reviewing tone/clarity, utilizing scoring systems to drive iterative content refinement.' },
      { lead: 'Observability & Data:', text: 'Integrated MLflow for autologging prompts and retrieval metrics, while tying MySQL customer features (churn risk, usage) to high-quality content generation.' },
    ],
  },
];

export const education = {
  institution: 'Vellore Institute of Technology',
  location: 'Bhopal, India',
  degree: 'Bachelor of Technology in Computer Science Engineering',
  range: '2023 - 2027',
  url: 'https://vitbhopal.ac.in',
  courseworkLabel: 'Relevant Coursework:',
  coursework: 'Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks, Object Oriented Programming.',
};

export const skills = [
  { title: 'Languages', items: ['C++', 'Python', 'Java', 'JavaScript', 'SQL', 'Bash/Shell'] },
  { title: 'AI & Machine Learning', items: ['SR-GANs', 'LLaMA 3', 'Multi-Agent Orchestration', 'RAG Pipelines', 'Transformers', 'Computer Vision'] },
  { title: 'Frameworks & Libraries', items: ['PyTorch', 'TensorFlow', 'LangChain', 'React', 'Node.js', 'Pandas', 'NumPy', 'Scikit-learn'] },
  { title: 'Cloud & Tools', items: ['AWS Lambda', 'AWS S3', 'DynamoDB', 'API Gateway', 'Cognito', 'CodePipeline', 'Docker', 'Git', 'CI/CD', 'Postman'] },
];

export const contact = {
  words: ['Get in Touch', 'Research?', 'Inquiries?', 'Collaboration?', 'Open-Source?', 'Projects?', 'Hiring?', 'Freelance?'],
  cta: 'SAY HI !',
  email: 'anvitvermaa@gmail.com',
};
