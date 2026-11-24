/**
 * =============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =============================================================================
 * 
 * ⭐ ALL DATA IS CONFIGURED HERE.
 * Review and make your final edits below before hosting / deploying!
 * =============================================================================
 */

// Import project images from src/data/images/
import camsenseImg from './images/camsense.jpg';
import notesGenImg from './images/notes_generation.png';
import mindeaseImg from './images/mindease.png';
import cityCompanionImg from './images/citycompanion.png';

// Dynamic image helper: Automatically loads any image placed inside src/data/images/
// Usage: getImage('your-image.png') or use direct imports like camsenseImg above
const localImages = import.meta.glob('./images/*.{png,jpg,jpeg,svg,webp}', { eager: true, import: 'default' });
export const getImage = (fileName) => localImages[`./images/${fileName}`] || fileName;

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
  phone: "+91-7091034163", // Change to your phone number for "Call Me" link
  email: "vinitagarwal759@gmail.com", // Your email for "Email Me" link
  location: "India / Remote",
  status: "Available for new opportunities", // Clean availability pill

  // Social & profile URLs
  social: {
    github: "https://github.com/VinitAgarwal21",
    linkedin: "https://www.linkedin.com/in/vinit-agarwal-214234259",
  },

  // // Stats shown in the Hero banner
  // stats: [
  //   { label: "REPOSITORIES", value: "28+" },
  //   { label: "YEARS EXP", value: "3+" },
  //   { label: "CONTRIBUTIONS", value: "1.2K+" },
  //   { label: "SATISFACTION", value: "99%" },
  // ]
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
      { name: "Python", icon: "Python" },
      { name: "TypeScript", icon: "TypeScript" },
      { name: "JavaScript", icon: "JavaScript" },
      { name: "C++", icon: "CPP" },
      { name: "SQL & PostgreSQL", icon: "PostgreSQL" },
      { name: "HTML5 / CSS3", icon: "HTML5" },
    ]
  },
  {
    category: "AI & Frontend",
    accent: "teal",
    description: "Agentic AI, computer vision & reactive UI systems",
    skills: [
      { name: "React", icon: "React" },
      { name: "LangChain & LangGraph", icon: "LangChain" },
      { name: "OpenCV & Vision", icon: "OpenCV" },
      { name: "Next.js", icon: "Nextjs" },
      { name: "Tailwind CSS", icon: "Tailwind" },
      { name: "Streamlit", icon: "Streamlit" },
    ]
  },
  {
    category: "Backend & Databases",
    accent: "amber",
    description: "Server architecture, microservices, and databases",
    skills: [
      { name: "Node.js", icon: "Nodejs" },
      { name: "Express", icon: "Express" },
      { name: "FastAPI", icon: "FastAPI" },
      { name: "MongoDB", icon: "MongoDB" },
      { name: "Socket.IO", icon: "SocketIO" },
      { name: "Redis", icon: "Redis" },
    ]
  },
  {
    category: "DevOps & Tools",
    accent: "purple",
    description: "Infrastructure, containerization & deployment pipelines",
    skills: [
      { name: "Git & GitHub", icon: "Git" },
      { name: "Docker", icon: "Docker" },
      { name: "Firebase", icon: "Firebase" },
      { name: "Redux", icon: "Redux" },
      { name: "Vercel / Cloud", icon: "Nextjs" },
      { name: "Linux / Bash", icon: "Terminal" },
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
    role: "Full Stack Developer Intern",
    company: "Avijo",
    location: "Remote",
    period: "Jun 2025 - Aug 2025",
    type: "Internship",
    status: "Completed",
    description: "Developed and maintained full-stack features for a healthcare platform, building responsive React applications, scalable REST APIs, and real-time communication systems.",
    bullets: [
      "Built the React.js + Redux frontend with dynamic forms, centralized state management, and REST API integrations.",
      "Developed and maintained modular backend REST APIs, collaborating with product and engineering teams to deliver features from ideation to production.",
      "Implemented real-time chat and notification systems using Socket.IO and Firebase, enabling seamless communication between doctors, patients, and clinics."
    ],
    tech: [
      "React.js",
      "Redux",
      "Node.js",
      "REST APIs",
      "Socket.IO",
      "Firebase",
      "JavaScript"
    ]
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
    id: "project-camsenseai",
    title: "CamSense AI",
    tagline: "AI-powered smart CCTV surveillance and automated threat detection",
    description: "A full-stack smart surveillance platform that transforms live camera feeds into actionable events and alerts. Integrates YOLOv8 and OpenCV for real-time person and bladed-weapon detection, along with a face-recognition pipeline using YuNet and SFace for automated attendance, identity matching, and unknown-person alerts. Features a live dashboard with severity-based notifications.",
    image: camsenseImg,
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
      "YOLOv8",
      "OpenCV",
      "Computer Vision",
      "Socket.IO"
    ],
    githubUrl: "https://github.com/VinitAgarwal21/camsenseai",
    liveUrl: "",
    badge: "Computer Vision"
  },
  {
    id: "project-ai-notes-agent",
    title: "AI Notes Generation Agent",
    tagline: "Multi-agent AI system for intelligent research and automated technical documentation",
    description: "Built a multi-agent LangGraph pipeline using parallel worker nodes and structured Pydantic schemas to automate technical content generation. Implemented an intelligent RAG routing system that classifies topics into closed-book, hybrid, and open-book modes, integrating Tavily web research and evidence citations for factual accuracy. Includes a real-time Streamlit dashboard with thought logs, dynamic planning visualization, automated image sourcing, and downloadable Markdown reports.",
    image: notesGenImg,
    tags: [
      "Python",
      "LangGraph",
      "Gemini",
      "RAG",
      "LangChain",
      "Tavily",
      "Pydantic",
      "Streamlit",
      "AI Agents"
    ],
    githubUrl: "",
    liveUrl: "",
    badge: "Agentic AI"
  },
  {
    id: "project-mindease",
    title: "MindEase",
    tagline: "Mental wellness platform with real-time communication and NLP-powered sentiment analysis",
    description: "Developed a full-stack mental health platform with a Node.js REST backend and React frontend, featuring user authentication, profile management, and real-time chat using Socket.IO. Built NLP pipelines using NLTK and spaCy to analyze user journal entries and classify sentiment in real time. Integrated frontend and backend services to deliver an interactive mental wellness experience.",
    image: mindeaseImg,
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "Socket.IO",
      "NLTK",
      "spaCy",
      "NLP",
      "JavaScript"
    ],
    githubUrl: "",
    liveUrl: "",
    badge: "Full-Stack & NLP"
  },
  {
    id: "project-city-companion",
    title: "City Companion App",
    tagline: "Local activity discovery platform with interactive map & plan sharing",
    description: "A local activity-discovery platform helping people find and join nearby plans (movies, gaming, outdoor sports, food). Features an interactive map, plan posting, join requests, and smart recommendations.",
    image: cityCompanionImg,
    tags: ["TypeScript", "React", "Tailwind CSS", "Interactive Maps", "Node.js"],
    githubUrl: "https://github.com/VinitAgarwal21/City-Companion-App",
    liveUrl: "",
    badge: "Featured App",
  },
  // {
  //   id: "project-delta-wanderlust",
  //   title: "Wanderlust // Hotel Booking",
  //   tagline: "Full-stack vacation rental & booking platform inspired by Airbnb",
  //   description: "A comprehensive hotel and vacation stay reservation platform with user accounts, listing reviews, geocoded map coordinates, image uploads, and full CRUD workflows.",
  //   image: "",
  //   tags: ["Node.js", "Express", "MongoDB", "JavaScript", "Bootstrap"],
  //   githubUrl: "https://github.com/VinitAgarwal21/Delta",  
  //   liveUrl: "https://wanderlust-hr39.onrender.com",
  //   badge: "Full-Stack Live",
  // },
  // {
  //   id: "project-langraph-chatbot",
  //   title: "LangGraph AI Chatbot",
  //   tagline: "Stateful agentic chatbot built with LangGraph & LLMs",
  //   description: "An agentic conversational assistant leveraging LangGraph's cyclic state graphs for multi-step reasoning, tool execution, memory persistence, and dynamic conversation flows.",
  //   image: "",
  //   tags: ["Python", "LangGraph", "LangChain", "AI Agents", "LLMs"],
  //   githubUrl: "https://github.com/VinitAgarwal21/Langraph-Chatbot",
  //   liveUrl: "",
  //   badge: "Agentic AI",
  // }
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
