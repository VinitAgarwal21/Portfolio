/**
 * =============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =============================================================================
 * 
 * ⭐ ALL DATA IS CONFIGURED HERE.
 * Review and make your final edits below before hosting / deploying!
 * =============================================================================
 */

export const personalInfo = {
  // Your Full Name (Displayed in Hero & Navigation)
  name: "Vinit Kumar Agarwal",

  // Profile Picture URL (Fetched from your GitHub avatar; change to any image or "/profile.jpg")
  avatar: "https://avatars.githubusercontent.com/u/149244622?v=4",
  
  // Primary Title / Role
  title: "Full-Stack Software Engineer & AI Developer",

  // Rotating animated taglines in Hero typewriter effect
  typewriterTitles: [
    "Full-Stack Developer",
    "React & TypeScript Engineer",
    "Generative AI & Agentic AI Developer",
    "Node.js & Python Backend Architect",
    "Building Fast, Modern Web Apps"
  ],

  // Short 2-3 sentence biography
  bio: "Full-stack and Generative AI developer focused on building clean, high-performance web applications, autonomous agent workflows, and scalable cloud backends. Passionate about crisp user experiences, modern architecture, and delivering code that makes an impact.",

  // Contact coordinates
  phone: "+91-9876543210", // Change to your phone number for "Call Me" link
  email: "vinitagarwal759@gmail.com", // Your email for "Email Me" link
  location: "India / Remote",
  status: "Available for new opportunities", // Clean availability pill

  // Social & profile URLs
  social: {
    github: "https://github.com/VinitAgarwal21",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    discord: "https://discord.com"
  },

  // Stats shown in the Hero banner
  stats: [
    { label: "REPOSITORIES", value: "28+" },
    { label: "YEARS EXP", value: "3+" },
    { label: "CONTRIBUTIONS", value: "1.2K+" },
    { label: "SATISFACTION", value: "99%" },
  ]
};

/**
 * =============================================================================
 * TECHNICAL SKILLS
 * Grouped into 4 core categories.
 * =============================================================================
 */
export const skillCategories = [
  {
    category: "Languages",
    accent: "rose",
    description: "Core programming languages & foundational dialects",
    skills: [
      { name: "TypeScript", level: 92, icon: "Code2" },
      { name: "JavaScript (ESNext)", level: 96, icon: "FileCode" },
      { name: "Python", level: 90, icon: "Terminal" },
      { name: "C++", level: 80, icon: "Cpu" },
      { name: "SQL & PostgreSQL", level: 85, icon: "Database" },
      { name: "HTML5 / CSS3", level: 98, icon: "Layout" },
    ]
  },
  {
    category: "AI & Full-Stack",
    accent: "teal",
    description: "Agentic AI, GenAI frameworks & reactive frontend",
    skills: [
      { name: "Agentic AI & MCP", level: 90, icon: "Sparkles" },
      { name: "LangChain & LangGraph", level: 88, icon: "Zap" },
      { name: "React 18 / 19", level: 95, icon: "Component" },
      { name: "Next.js (App Router)", level: 90, icon: "Globe" },
      { name: "Tailwind CSS", level: 96, icon: "Palette" },
      { name: "RAG & Vector DBs", level: 86, icon: "Layers" },
    ]
  },
  {
    category: "Backend & Cloud",
    accent: "amber",
    description: "Server architecture, microservices, and databases",
    skills: [
      { name: "Node.js & Express", level: 92, icon: "Server" },
      { name: "FastAPI & Python", level: 88, icon: "Cpu" },
      { name: "MongoDB & Mongoose", level: 86, icon: "HardDrive" },
      { name: "PostgreSQL & Prisma", level: 85, icon: "Database" },
      { name: "Kafka & Redis", level: 78, icon: "Gauge" },
      { name: "REST APIs & WebSockets", level: 92, icon: "Network" },
    ]
  },
  {
    category: "Tools & DevOps",
    accent: "purple",
    description: "Infrastructure, pipelines, testing and tooling",
    skills: [
      { name: "Git & GitHub Actions", level: 94, icon: "GitBranch" },
      { name: "Docker & Containers", level: 84, icon: "Box" },
      { name: "Vercel / Render", level: 95, icon: "UploadCloud" },
      { name: "Linux / Bash", level: 88, icon: "Terminal" },
      { name: "Vite / Webpack", level: 90, icon: "Zap" },
      { name: "Vitest / Jest", level: 82, icon: "CheckCircle" },
    ]
  }
];

/**
 * =============================================================================
 * WORK EXPERIENCE
 * Vertical chronological timeline.
 * =============================================================================
 */
export const experiences = [
  {
    id: "exp-1",
    role: "Full-Stack & GenAI Engineer",
    company: "Freelance & Independent Projects",
    location: "Remote",
    period: "2024 - PRESENT",
    type: "Full-Time",
    status: "Current",
    description: "Building production-grade web applications, Model Context Protocol (MCP) servers, and autonomous agent workflows.",
    bullets: [
      "Engineered autonomous AI agents using LangChain, LangGraph, and Python for automated reasoning and document retrieval.",
      "Built responsive, accessible web applications with Next.js, React, and Tailwind CSS serving live users.",
      "Designed and deployed low-latency WebSocket backends and integrated vector search databases for RAG pipelines."
    ],
    tech: ["React", "TypeScript", "Python", "GenAI", "LangChain", "Node.js", "Docker"]
  },
  {
    id: "exp-2",
    role: "Python Backend Developer Intern",
    company: "Valura Ledger (2CentsCapital)",
    location: "Remote / Internship",
    period: "2024",
    type: "Internship",
    status: "Completed",
    description: "Developed and optimized financial backend microservices, data validation pipelines, and REST APIs.",
    bullets: [
      "Implemented secure, high-throughput backend endpoints handling transactional data with strict validation.",
      "Collaborated with engineering leads to write automated test suites and reduce API response latency.",
      "Participated in architecture design reviews and automated deployment workflows."
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "Git", "Docker"]
  },
  {
    id: "exp-3",
    role: "Full-Stack Web Developer",
    company: "Academic & Open-Source Projects",
    location: "India",
    period: "2023 - 2024",
    type: "Projects",
    status: "Completed",
    description: "Created comprehensive web applications, cloning real-world architectures like Zerodha, Zoom, and Airbnb.",
    bullets: [
      "Engineered a full-stack hotel booking platform (Wanderlust) with user authentication, reviews, and interactive maps.",
      "Developed a real-time WebRTC video conferencing app with instant meeting rooms and live chat.",
      "Built financial analytics dashboards with interactive candlestick charting and order simulation."
    ],
    tech: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB"]
  }
];

/**
 * =============================================================================
 * FEATURED PROJECTS (FETCHED FROM YOUR GITHUB: VinitAgarwal21)
 * 
 * Edit descriptions, image previews, or tags as desired.
 * If 'image' is empty (""), a clean vector code placeholder is automatically used!
 * =============================================================================
 */
export const projects = [
  {
    id: "project-aragen-mcp",
    title: "Aragen GenAI MCP",
    tagline: "Model Context Protocol (MCP) server & Agentic AI hackathon submission",
    description: "An advanced Model Context Protocol (MCP) server and agentic AI solution engineered for the Aragen Data Science & AI Hackathon, bridging LLMs with specialized tool calling and domain workflows.",
    image: "",
    tags: ["Python", "Agentic AI", "GenAI", "MCP", "Machine Learning"],
    githubUrl: "https://github.com/VinitAgarwal21/Aragen-GenAI-MCP",
    liveUrl: "https://aragen-gen-ai-mcp-jwof-alpha.vercel.app/",
    badge: "GenAI Hackathon",
  },
  {
    id: "project-zoom-clone",
    title: "Zoom Clone",
    tagline: "Real-time WebRTC video conferencing with meeting rooms",
    description: "Full-stack real-time video communication platform supporting HD video, audio streaming, screen sharing, meeting room creation, and dynamic participant management.",
    image: "",
    tags: ["TypeScript", "React", "WebRTC", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/VinitAgarwal21/Zoom_Clone",
    liveUrl: "https://zoomclone-cyan.vercel.app",
    badge: "Live WebRTC",
  },
  {
    id: "project-city-companion",
    title: "City Companion App",
    tagline: "Local activity discovery platform with interactive map & plan sharing",
    description: "A local activity-discovery platform helping people find and join nearby plans (movies, gaming, outdoor sports, food). Features an interactive map, plan posting, join requests, and smart recommendations.",
    image: "",
    tags: ["TypeScript", "React", "Tailwind CSS", "Interactive Maps", "Node.js"],
    githubUrl: "https://github.com/VinitAgarwal21/City-Companion-App",
    liveUrl: "",
    badge: "Featured App",
  },
  {
    id: "project-delta-wanderlust",
    title: "Wanderlust // Hotel Booking",
    tagline: "Full-stack vacation rental & booking platform inspired by Airbnb",
    description: "A comprehensive hotel and vacation stay reservation platform with user accounts, listing reviews, geocoded map coordinates, image uploads, and full CRUD workflows.",
    image: "",
    tags: ["Node.js", "Express", "MongoDB", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/VinitAgarwal21/Delta",
    liveUrl: "https://wanderlust-hr39.onrender.com",
    badge: "Full-Stack Live",
  },
  {
    id: "project-langraph-chatbot",
    title: "LangGraph AI Chatbot",
    tagline: "Stateful agentic chatbot built with LangGraph & LLMs",
    description: "An agentic conversational assistant leveraging LangGraph's cyclic state graphs for multi-step reasoning, tool execution, memory persistence, and dynamic conversation flows.",
    image: "",
    tags: ["Python", "LangGraph", "LangChain", "AI Agents", "LLMs"],
    githubUrl: "https://github.com/VinitAgarwal21/Langraph-Chatbot",
    liveUrl: "",
    badge: "Agentic AI",
  },
  {
    id: "project-self-rag",
    title: "Self-RAG // Self-Reflective AI",
    tagline: "Adaptive Retrieval-Augmented Generation with reflection tokens",
    description: "Implementation of Self-Reflective Retrieval-Augmented Generation that dynamically retrieves passages on demand and critiques its own generated answers to eliminate AI hallucinations.",
    image: "",
    tags: ["Python", "RAG", "GenAI", "Vector DB", "Information Retrieval"],
    githubUrl: "https://github.com/VinitAgarwal21/Self-RAG",
    liveUrl: "",
    badge: "RAG Architecture",
  },
  {
    id: "project-zerodha-clone",
    title: "Zerodha Trading Clone",
    tagline: "Full-stack financial dashboard with market charts and order book",
    description: "A stock market trading platform clone inspired by Zerodha Kite, featuring interactive equity charts, real-time watchlist management, buy/sell orders, and portfolio holdings tracking.",
    image: "",
    tags: ["React", "JavaScript", "Node.js", "Express", "Financial UI"],
    githubUrl: "https://github.com/VinitAgarwal21/Zerodha-Clone",
    liveUrl: "",
    badge: "FinTech Clone",
  },
  {
    id: "project-ai-content-studio",
    title: "AI Content Studio",
    tagline: "Generative content generation suite for automated marketing",
    description: "An automated studio generating structured marketing copy, articles, and social media captions with customizable tone, audience targeting, and prompt templates.",
    image: "",
    tags: ["Python", "GenAI", "Prompt Engineering", "FastAPI"],
    githubUrl: "https://github.com/VinitAgarwal21/AI-Content-Studio",
    liveUrl: "",
    badge: "Content AI",
  },
  {
    id: "project-camsenseai",
    title: "Camsense AI",
    tagline: "Computer vision and camera intelligence system",
    description: "Smart vision analysis suite that processes video feeds to perform object recognition, scene detection, and automated event triggers.",
    image: "",
    tags: ["JavaScript", "Computer Vision", "AI", "Node.js"],
    githubUrl: "https://github.com/VinitAgarwal21/camsenseai",
    liveUrl: "",
    badge: "Computer Vision",
  },
  {
    id: "project-react-calendar",
    title: "React Calendar Component",
    tagline: "Custom lightweight calendar and event scheduler",
    description: "A responsive, accessible calendar component for scheduling events, date picking, and agenda management built with clean CSS and reactive state.",
    image: "",
    tags: ["React", "CSS3", "JavaScript", "UI Components"],
    githubUrl: "https://github.com/VinitAgarwal21/React-Calendar",
    liveUrl: "https://react-calendar-jade-eight.vercel.app",
    badge: "Live Component",
  }
];

/**
 * =============================================================================
 * NAVIGATION LINKS
 * =============================================================================
 */
export const navLinks = [
  { name: "About", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
