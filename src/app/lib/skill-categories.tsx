import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase
} from "react-icons/fa";

export const skillCategories = {
  languages: [
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "Kotlin", level: 85 },
    { name: "Java", level: 80 }, // JavaFX + blockchain + Room projects
    { name: "SQL", level: 80 },
    { name: "Python", level: 70 },
    { name: "C", level: 65 },
    { name: "C++", level: 60 },
  ],

  frontend: [
    { name: "Next.js", level: 90 },
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Jetpack Compose (UI)", level: 85 },
  ],

  backend: [
    { name: "Node.js", level: 85 },
    { name: "API Design (REST)", level: 85 },
    { name: "Next.js API Routes", level: 90 },
    { name: "Prisma ORM", level: 90 },
    { name: "Prisma Pulse (Realtime)", level: 80 },
    { name: "Firebase Auth & Firestore", level: 80 },
  ],

  mobile: [
    { name: "Android Development", level: 85 },
    { name: "Jetpack Compose", level: 90 },
    { name: "Room Database", level: 85 },
    { name: "Material 3", level: 85 },
  ],

  database: [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 80 },
    { name: "SQLite", level: 85 },
    { name: "Room (Android)", level: 85 },
  ],

  tools: [
    { name: "Git", level: 90 },
    { name: "VS Code", level: 90 },
    { name: "Android Studio", level: 85 },
    { name: "Azure Data Studio", level: 80 },
    { name: "Vercel", level: 85 },
    { name: "Firebase Console", level: 80 },
  ],

  platforms: [
    { name: "Web Applications", level: 90 },
    { name: "Android Apps", level: 85 },
    { name: "Full-Stack Development", level: 90 },
  ],
};

export const skillIcons = {
  languages: <FaCode />,
  frontend: <FaLaptopCode />,
  tools: <FaServer />,
  database: <FaDatabase />
};


export const categoryLabels = {
  languages: "Programming Languages",
  frontend: "Frontend Development",
  tools: "Tools & Frameworks",
  database: "Database Technologies"
};