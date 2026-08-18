import type {
  BlogPost,
  Experience,
  NavItem,
  Project,
  Service,
  SkillCategory,
  SocialLink,
  Stat,
  Testimonial,
} from "@/types";

export const siteConfig = {
  name: "Mahendhar Soma",
  shortName: "Mahendhar",
  role: "Full Stack Web Developer",
  tagline: "CodeIgniter 4 · Next.js · MySQL · AI-Powered Apps",
  description:
    "Full Stack Web Developer with 8+ years of experience building scalable business applications using PHP, CodeIgniter 4, Next.js, JavaScript, and MySQL. Delivered ERP, SaaS, CMS, and custom platforms across education, transport, hospitality, and operations. Capable of building modern Next.js + MySQL applications and creating AI-assisted solutions for faster development, automation, and smarter workflows. Strong ownership from requirements through secure production deployment on Linux/cPanel with Git.",
  url: "https://mahendhar.dev",
  email: "mahendharsoma@gmail.com",
  phone: "+91 9010398886",
  resumeUrl: "/Mahendharsoma-Resume.docx",
  location: "Mahabubabad",
  workLocation: "Hyderabad, India",
  languages: ["English", "Telugu (Native)"],
  education: {
    degree: "B.Tech in Electronics and Communication Engineering",
    school: "SSJ Engineering College",
    year: "2014",
    period: "June 2014",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Services", href: "#services", id: "services" },
  // { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  // { label: "Blog", href: "#blog", id: "blog" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Mahendhar-soma",
    icon: "github",
  },
  // {
  //   name: "LinkedIn",
  //   href: "https://www.linkedin.com/in/mahendarreddy-soma-1571a791/",
  //   icon: "linkedin",
  // },
  {
    name: "Email",
    href: "mailto:mahendharsoma@gmail.com",
    icon: "email",
  },
];

export const heroSpecializations = [
  "CodeIgniter 4",
  "Next.js",
  "MySQL",
  "AI-Powered Apps",
  "REST APIs",
  "ERP & SaaS",
];

export const aboutStats: Stat[] = [
  {
    label: "Years Experience",
    value: 8,
    suffix: "+",
    description: "Full-stack delivery & production ownership",
  },
  {
    label: "Enterprise Platforms",
    value: 6,
    suffix: "+",
    description: "Education, transport, hospitality & ops",
  },
  {
    label: "Uptime Target",
    value: 99,
    suffix: ".5%+",
    description: "Production systems maintained",
  },
  {
    label: "Daily Transactions",
    value: 10,
    suffix: "K+",
    description: "Real-time API sync at scale",
  },
];

export const aboutHighlights = [
  {
    title: "8+ Years Experience",
    description: "Building scalable ERP, SaaS, CMS & custom platforms",
    icon: "briefcase",
  },
  {
    title: "6+ Enterprise Apps",
    description: "Education, transport, hospitality, inventory & HR",
    icon: "folder",
  },
  {
    title: "Full Stack Developer",
    description: "PHP, CodeIgniter 4, Next.js, MySQL — end to end",
    icon: "code",
  },
  {
    title: "AI-Assisted Builder",
    description: "Faster development, automation & smarter workflows",
    icon: "sparkles",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    color: "#6366F1",
    skills: [
      { name: "PHP", level: 96 },
      { name: "JavaScript", level: 92 },
      { name: "SQL", level: 94 },
      { name: "HTML5", level: 95 },
      { name: "CSS", level: 90 },
      { name: "TypeScript", level: 72 },
    ],
  },
  {
    title: "Frameworks & Frontend",
    color: "#06B6D4",
    skills: [
      { name: "CodeIgniter 4", level: 96 },
      { name: "Next.js", level: 78 },
      { name: "jQuery", level: 93 },
      { name: "Bootstrap", level: 92 },
      { name: "AJAX", level: 94 },
      { name: "DataTables", level: 90 },
    ],
  },
  {
    title: "Backend & Data",
    color: "#F59E0B",
    skills: [
      { name: "MySQL", level: 95 },
      { name: "REST API", level: 94 },
      { name: "JSON", level: 93 },
      { name: "Firebase FCM", level: 85 },
      { name: "SMS (2Factor)", level: 88 },
    ],
  },
  {
    title: "AI & Integrations",
    color: "#A78BFA",
    skills: [
      { name: "AI-Assisted Development", level: 85 },
      { name: "Automation Workflows", level: 82 },
      { name: "Google Places / Geo Search", level: 86 },
      { name: "Payment Gateway", level: 88 },
      { name: "GST Invoicing", level: 92 },
      { name: "OTP / QR Auth", level: 90 },
    ],
  },
  {
    title: "Tools & Ops",
    color: "#34D399",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Git", level: 92 },
      { name: "Postman", level: 90 },
      { name: "cPanel", level: 90 },
      { name: "Shared / VPS Hosting", level: 88 },
      { name: "CMS Build & Maintenance", level: 93 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Inrisoft Pvt Ltd",
    role: "Software Engineer",
    duration: "08/2018 — Current",
    location: "Hyderabad, India",
    current: true,
    description:
      "Architecting and delivering enterprise PHP/CodeIgniter platforms across education, transport, inventory, hospitality, and HR — with secure production ownership on Linux/cPanel and Git.",
    impacts: [
      { value: "6+", label: "Enterprise platforms" },
      { value: "99.5%+", label: "Uptime" },
      { value: "~45%", label: "Faster reports" },
      { value: "10K+", label: "Daily transactions" },
    ],
    achievements: [
      "Architected and delivered 6+ enterprise PHP/CodeIgniter platforms serving education, transport, inventory, hospitality, and HR operations with 99.5%+ uptime.",
      "Designed and optimized MySQL schemas and indexed queries, reducing average report load time by ~45% across ERP and inventory modules.",
      "Built secure REST APIs for mobile and third-party integrations, enabling real-time data sync for 10,000+ daily transactions.",
      "Implemented Payment Gateway Integration and GST-compliant SaaS invoicing with multi-tenant RBAC, improving online collection and billing accuracy.",
      "Developed reusable jQuery/Bootstrap UI components and AJAX workflows, cutting frontend delivery time for new modules by ~30%.",
      "Built and maintained multiple CMS websites on CodeIgniter 4 and MySQL — content admin, dynamic pages, and ongoing production support.",
      "Developing modern full-stack applications with Next.js and MySQL, and leveraging AI tools to design, build, and ship features faster.",
      "Hardened security with validation, RBAC, and session management across multi-tenant products; owned Linux/cPanel and Git-based releases.",
      "Mentored juniors on PHP, Git, and code reviews; maintained production systems with fewer deployment defects.",
    ],
    technologies: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "Next.js",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "REST APIs",
      "Firebase",
      "Payment Gateway",
      "GST Invoicing",
      "cPanel",
      "Git",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "RAOS School ERP",
    description:
      "Multi-campus School ERP: admission, academics, term fees (OTP concessions), finance, inventory, hostel, GPS transport, RFID/biometric, payroll, branch reports.",
    longDescription:
      "Multi-campus School ERP covering admission, academics, term fees (OTP concessions), finance, inventory, hostel, GPS transport, RFID/biometric, payroll, and branch reports — a centralized operations platform for schools.",
    image: "/images/projects/school.svg",
    category: "ERP",
    techStack: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "jQuery",
      "AJAX",
      "Bootstrap",
      "DataTables",
      "Firebase",
      "SMS"
    ],
    github: "https://github.com/Mahendhar-soma/School-ERP",
    featured: true,
  },
  {
    id: "proj-2",
    title: "GST Invoice Management System",
    description:
      "Multi-tenant GST invoicing with auto CGST/SGST/IGST, FY numbers, transactional save, PDF export, and RBAC.",
    longDescription:
      "Multi-tenant GST invoicing with automatic CGST/SGST/IGST calculations, financial year invoice numbering, transactional saves, PDF export, REST API integration, and role-based access control.",
    image: "/images/projects/invoice.svg",
    category: "SaaS",
    techStack: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "REST API",
      "PDF Generation",
      "RBAC",
    ],
    github: "https://github.com/Mahendhar-soma/GST-Invoice-Management-System",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Infowealth — Hostel Discovery",
    description:
      "Hostel discovery: OTP auth, device binding, geo/filter search, SMS leads, favorites; admin for providers, listings, CMS, and analytics.",
    longDescription:
      "Hostel discovery app & admin: OTP authentication, device binding, geo/filter search, SMS lead generation, and favorites — with an admin panel for providers, listings, CMS, and analytics.",
    image: "/images/projects/hostel.svg",
    category: "Web App",
    techStack: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "jQuery",
      "Bootstrap",
      "AJAX",
      "DataTables",
      "CKEditor",
      "Google Places",
      "SMS (2Factor)",
    ],
    github: "https://github.com/Mahendhar-soma/Hostel-Discovery-App-Admin",
    featured: true,
  },
  {
    id: "proj-4",
    title: "Hotel Management ERP + Guest Portal",
    description:
      "Multi-hotel ERP (rooms, bookings, food/KOT, housekeeping, laundry, SOS, GST billing) plus guest portal with OTP/QR login and FCM alerts.",
    longDescription:
      "Multi-hotel ERP covering rooms, bookings, food/KOT, housekeeping, laundry, SOS, and GST billing — plus a guest mobile portal with OTP/QR login and Firebase Cloud Messaging alerts.",
    image: "/images/projects/hotel.svg",
    category: "ERP",
    techStack: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "Firebase FCM",
    ],
    github:
      "https://github.com/Mahendhar-soma/Hotel-Management-ERP-Guest-Mobile-Portal",
    featured: true,
  },
  {
    id: "proj-5",
    title: "DeepSea ERP (Shop-Floor)",
    description:
      "Shop-floor ERP: Project → Parts → Jobcard → Operations with QR scan execution.",
    longDescription:
      "Shop-floor ERP managing Project → Parts → Jobcard → Operations with QR scan execution, time logs, inventory issue management, utilization reports, and role-based access control.",
    image: "/images/projects/ecommerce.svg",
    category: "ERP",
    techStack: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "QR Scanning",
      "RBAC",
    ],
    github: "https://github.com/Mahendhar-soma/Shop-Floor",
    featured: true,
  },
  {
    id: "proj-6",
    title: "Motor Transport Management System",
    description:
      "Fleet/Workshop/Inventory: vehicle masters, barcode spare parts, lubricants, job cards, allotment, fuel, inspections, gate pass, Excel/PDF reports.",
    longDescription:
      "Fleet, workshop, and inventory system covering vehicle masters, barcode spare parts, lubricants, job cards, allotment, fuel, inspections, gate pass, and Excel/PDF reports.",
    image: "/images/projects/inventory.svg",
    category: "ERP",
    techStack: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "DataTables",
    ],
    github:
      "https://github.com/Mahendhar-soma/Motor-Transport-Management-System",
    featured: false,
  },
  {
    id: "proj-7",
    title: "CMS Websites (Build & Maintain)",
    description:
      "Built and maintained multiple CMS websites on CodeIgniter 4 and MySQL — admin content, dynamic pages, media, and production/hosting support.",
    longDescription:
      "Built and maintained multiple CMS websites on CodeIgniter 4 and MySQL — admin content management, dynamic pages, media handling, and ongoing production/hosting support on cPanel.",
    image: "/images/projects/chatbot.svg",
    category: "CMS",
    techStack: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "CKEditor",
      "cPanel",
    ],
    github: "https://github.com/Mahendhar-soma",
    featured: false,
  },
  {
    id: "proj-8",
    title: "MyVillageApp",
    description:
      "Telugu-first digital village platform for news, services, jobs, agriculture, schemes, maps, weather, and community engagement.",
    longDescription:
      "MyVillageApp is a Telugu-first digital village platform designed to connect villagers with local information, businesses, government schemes, agriculture resources, jobs, health and emergency details, issue reporting, posters, polls, notifications, and community updates. Built with a Service -> Repository architecture (Frontend -> API Routes -> Services -> Repositories -> MySQL), it includes separate user/admin authentication, RBAC, publishing workflows, audit logging, rate limiting, Google Maps and Places integration, Google Cloud Text-to-Speech, Open-Meteo weather data, and multi-village content scoping through village_id for regional scalability.",
    image: "/images/projects/chatbot.svg",
    category: "Platform",
    techStack: [
      "Next.js",
      "React 19",
      "Tailwind CSS",
      "TypeScript",
      "Next.js Route Handlers",
      "MySQL / MariaDB",
      "JWT",
      "HTTP-only Cookies",
      "Zod",
      "Google Maps",
      "Places API",
      "Google Cloud TTS",
      "Open-Meteo API",
      "Sharp",
      "RBAC",
    ],
    featured: true,
  },
];

export const services: Service[] = [
  {
    id: "svc-1",
    title: "ERP & Business Apps",
    description:
      "End-to-end ERP platforms for education, transport, hospitality, inventory, and operations.",
    icon: "globe",
  },
  {
    id: "svc-2",
    title: "SaaS & GST Invoicing",
    description:
      "Multi-tenant SaaS with payment gateways, GST compliance, RBAC, and PDF billing.",
    icon: "zap",
  },
  {
    id: "svc-3",
    title: "REST APIs",
    description:
      "Secure APIs for mobile and third-party integrations with real-time data sync.",
    icon: "api",
  },
  {
    id: "svc-4",
    title: "Database Design",
    description:
      "MySQL schemas, indexing, and query optimization for fast reports at scale.",
    icon: "database",
  },
  {
    id: "svc-5",
    title: "CMS Development",
    description:
      "CodeIgniter 4 CMS sites with content admin, dynamic pages, and long-term maintenance.",
    icon: "layout",
  },
  {
    id: "svc-6",
    title: "AI-Assisted Development",
    description:
      "Faster delivery using AI tools for design, automation, and smarter feature workflows.",
    icon: "bot",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Priya Sharma",
    role: "Operations Head",
    company: "RAOS Schools",
    content:
      "Mahendhar delivered our multi-campus School ERP with fees, transport, and biometric modules that actually work in daily operations. Reliable and detail-oriented.",
    avatar: "PS",
    rating: 5,
  },
  {
    id: "t-2",
    name: "Arjun Mehta",
    role: "Founder",
    company: "InvoiceFlow",
    content:
      "The GST SaaS he built handles multi-tenant billing cleanly — CGST/SGST/IGST, PDF invoices, and RBAC without drama. Strong production ownership.",
    avatar: "AM",
    rating: 5,
  },
  {
    id: "t-3",
    name: "Sarah Chen",
    role: "Product Lead",
    company: "Infowealth",
    content:
      "From hostel discovery OTP flows to admin CMS and geo search, Mahendhar ships polished systems end to end. He thinks like a product engineer.",
    avatar: "SC",
    rating: 5,
  },
  {
    id: "t-4",
    name: "Rahul Verma",
    role: "Engineering Manager",
    company: "Inrisoft",
    content:
      "He owns complex ERPs from schema to deployment — REST APIs, MySQL performance, and mentoring juniors. Our go-to full-stack engineer.",
    avatar: "RV",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "CodeIgniter 4 Patterns for Multi-Tenant GST SaaS",
    excerpt:
      "How to structure tenants, RBAC, FY invoice numbering, and transactional saves cleanly in CI4.",
    date: "2026-06-12",
    readTime: "7 min",
    category: "Backend",
    image: "/images/blog/ci4.svg",
    slug: "ci4-multi-tenant-gst-saas",
  },
  {
    id: "blog-2",
    title: "MySQL Indexing That Cut ERP Report Time by 45%",
    excerpt:
      "Practical schema and query patterns from production school and transport ERP modules.",
    date: "2026-05-03",
    readTime: "6 min",
    category: "Database",
    image: "/images/blog/rag.svg",
    slug: "mysql-erp-report-optimization",
  },
  {
    id: "blog-3",
    title: "Shipping Next.js + MySQL Alongside a PHP Stack",
    excerpt:
      "How to modernize incrementally — keep CI4 APIs stable while building new surfaces in Next.js.",
    date: "2026-03-18",
    readTime: "7 min",
    category: "Architecture",
    image: "/images/blog/migration.svg",
    slug: "nextjs-mysql-with-php-stack",
  },
];

export const floatingTechIcons = [
  "CodeIgniter 4",
  "Next.js",
  "MySQL",
  "PHP",
  "REST APIs",
  "JavaScript",
];
