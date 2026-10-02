export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 3,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Medmonk — Healthcare Prior Authorization",
    desc: "A Ruby on Rails platform that processes 1,500+ active prior-authorization cases each week across hundreds of specialty medications.",
    subdesc:
      "Replaced manual API polling with an event-driven webhook listener on Heroku, cutting case turnaround by about 40% and removing missed status updates.",
    logo: "projects/medmonk.svg",
    logoStyle: {
      backgroundColor: "#2f6fed",
      background:
        "linear-gradient(0deg, #2F6FED50, #2F6FED50), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(47, 111, 237, 1)",
      boxShadow: "0px 0px 60px 0px rgba(47, 111, 237, 0.3)",
    },
    tags: [
      { id: 1, name: "Ruby", path: "icons/ruby.svg" },
      { id: 2, name: "Ruby on Rails", path: "icons/rails.svg" },
      { id: 3, name: "MySQL", path: "icons/mysql.svg" },
      { id: 4, name: "React.js", path: "icons/react.svg" },
    ],
  },
  {
    title: "LeafyNests — Farm Management System",
    desc: "A farm management system that tracks 5,000+ crop, livestock, and maintenance records across 50+ farm and livestock modules.",
    subdesc:
      "Replaced manual data entry with on-site QR code scanning, cutting daily operational logging from about 15 minutes to a 5-second scan.",
    logo: "projects/leafynests.svg",
    logoStyle: {
      backgroundColor: "#3d9a5b",
      background:
        "linear-gradient(0deg, #3D9A5B50, #3D9A5B50), linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(208, 213, 221, 0.85) 100%)",
      border: "0.2px solid rgba(61, 154, 91, 1)",
      boxShadow: "0px 0px 60px 0px rgba(61, 154, 91, 0.35)",
    },
    tags: [
      { id: 1, name: "Ruby", path: "icons/ruby.svg" },
      { id: 2, name: "Ruby on Rails", path: "icons/rails.svg" },
      { id: 3, name: "PostgreSQL", path: "icons/postgresql.svg" },
      { id: 4, name: "JavaScript", path: "icons/javascript.svg" },
    ],
  },
  {
    title: "Oasisbnb — Property Rental Platform",
    desc: "A full-stack rental platform built for 3 regional test markets, with 500+ mock listings and concurrent reservation logic.",
    subdesc:
      "Delivered as a 3-developer capstone over a 4-week sprint, with database constraints designed to prevent double-bookings.",
    logo: "projects/oasisbnb.svg",
    logoStyle: {
      backgroundColor: "#e07a3d",
      background:
        "linear-gradient(0deg, #E07A3D50, #E07A3D50), linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 220, 190, 0.85) 100%)",
      border: "0.2px solid rgba(224, 122, 61, 1)",
      boxShadow: "0px 0px 60px 0px rgba(224, 122, 61, 0.35)",
    },
    tags: [
      { id: 1, name: "Ruby", path: "icons/ruby.svg" },
      { id: 2, name: "Ruby on Rails", path: "icons/rails.svg" },
      { id: 3, name: "MongoDB", path: "icons/mongodb.svg" },
      { id: 4, name: "JavaScript", path: "icons/javascript.svg" },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    company: "Devstax",
    position: "Ruby on Rails Engineer",
    duration: "Oct 2025 – Present",
    icon: "icons/devstax.svg",
    technologies: [
      "Ruby",
      "Ruby on Rails",
      "Sequel",
      "MySQL",
      "REST APIs",
      "LLM APIs",
      "ETL",
      "React",
    ],
    highlights: [
      "Integrated LLM APIs to extract clinical attributes from unstructured medical documents, cutting manual review time by about 50%.",
      "Built webhook and API integrations for prior-authorization platforms (Agadia/PromptPA), speeding case turnaround by over 40%.",
      "Designed an ETL pipeline that normalizes 10,000+ drug NDC records in about 2 minutes.",
      "Engineered high-volume Rails services with Sequel ORM in place of ActiveRecord.",
    ],
    projects: [{ name: "Medmonk" }],
  },
  {
    id: 2,
    company: "Oasis Tech Labs",
    position: "Full-Stack Developer",
    duration: "July 2024 – Sept 2025",
    icon: "icons/oasis.svg",
    technologies: [
      "Ruby on Rails",
      "JavaScript",
      "React",
      "PostgreSQL",
      "MongoDB",
      "Agile",
    ],
    highlights: [
      "Maintained 2 core web applications and shipped 4 major features, including a dashboard overhaul and a secure checkout integration.",
      "Resolved N+1 queries and added indexes, cutting average API response times by 30% on high-traffic endpoints.",
      "Shipped 25+ production features and bug fixes across bi-weekly sprints in a 6-developer Agile team.",
    ],
    projects: [{ name: "LeafyNests" }],
  },
  {
    id: 3,
    company: "Bahria University",
    position: "Bachelor of Science in Computer Science",
    duration: "Sep 2020 – Jul 2024",
    icon: "icons/bahria.svg",
    technologies: ["Computer Science", "Ruby", "JavaScript", "Python", "C++"],
    highlights: [
      "Lahore, Pakistan. Capstone work included Oasisbnb, a property rental platform built with a 3-developer team.",
    ],
    projects: [],
  },
];

export const socialLinks = [
  { url: "mailto:harisnaveed123@gmail.com" },
];

export const contactDetails = {
  email: "harisnaveed123@gmail.com",
  phone: "(+92) 323-3666368",
  location: "Lahore, Pakistan",
};

export const skills = [
  "Ruby",
  "Ruby on Rails",
  "RSpec",
  "Sidekiq",
  "Sequel",
  "JavaScript",
  "React.js",
  "Python",
  "C++",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "LLM APIs",
  "ETL",
  "Git",
  "GitHub",
  "Linux",
  "Heroku",
  "Agile",
];
