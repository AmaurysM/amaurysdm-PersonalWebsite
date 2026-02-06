"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
import ProjectItem from "./components/ProjectItem";
import EducationCard from "./components/EducationCard";
import Section from "./components/Section";
import Link from "next/link";
import ContactCard from "./components/ContactCard";
import Navigation from "./components/Navigation";
import SectionHeading from "./components/SectionHeading";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import { Project } from "./types/project";

const Home = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check if dark mode is preferred
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }

    // Scroll animation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Organized skills by category
  const skillCategories = {
    languages: [
      { name: "Java", level: 90 },
      { name: "Kotlin", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "C", level: 70 },
      { name: "C++", level: 65 },
    ],
    frontend: [
      { name: "Next.js", level: 85 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 80 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 85 },
    ],
    tools: [
      { name: "Android Studio", level: 80 },
      { name: "Jetpack Compose", level: 75 },
      { name: "Git", level: 90 },
      { name: "Firebase", level: 80 },
    ],
    database: [
      { name: "MongoDB", level: 75 },
      { name: "Prisma", level: 80 },
      { name: "SQLite", level: 85 },
      { name: "MySQL", level: 80 },
    ]
  };

  const skillIcons = {
    languages: <FaCode />,
    frontend: <FaLaptopCode />,
    tools: <FaServer />,
    database: <FaDatabase />
  };

  const categoryLabels = {
    languages: "Programming Languages",
    frontend: "Frontend Development",
    tools: "Tools & Frameworks",
    database: "Database Technologies"
  };

  const projects: Project[] = [
    {
      title: "Stock Trading Platform",
      description: "A simulated stock trading web application where users buy, sell, and trade stocks using virtual currency.",
      features: [
        "Server-side rendering with Next.js",
        "Responsive design using Tailwind CSS",
        "Robust data handling with MongoDB & Prisma",
        "Secure authentication with BetterAuth",
        "Integrated social features including posts and comments"
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Prisma",
        "BetterAuth"
      ],
      githubLink: "https://github.com/AmaurysM/mabbr-senior-project",
      otherLink: "https://www.mabbr.net",
      showcaseLink: "/mabbr",
      category: "web",
      featured: true,
      image: "/mabbr-logo.ico"
    },
    {
      title: "Voronoi",
      description:
        "A modern developer knowledge management web app for organizing libraries, folders, and code snippets in a fast, scalable interface.",
      features: [
        "OAuth authentication with GitHub and Google",
        "Library, folder, and snippet organization",
        "Scalable nested data structures",
        "Global state management with Zustand",
        "Optimistic UI updates with minimal re-renders",
        "Polished loading, empty, and error states"
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "NextAuth",
        "Supabase",
        "PostgreSQL",
        "Zustand",
        "Tailwind CSS",
        "DaisyUI"
      ],
      githubLink: "https://github.com/AmaurysM/fractal",
      otherLink: "https://www.voronoi.space",
      showcaseLink: "/voronoi",
      category: "web",
      featured: true,
      image: "/voronoi-logo.svg"
    },
    {
      title: "RockSlide (CodeQuest)",
      description: "Android strategy game where players navigate a rock across a compact platform by strategically placing directional arrow pieces.",
      features: [
        "Interactive rock movement mechanics",
        "Drag-and-drop directional controls",
        "Persistent progress tracking",
        "Strategic puzzle gameplay",
        "State management with Jetpack Compose"
      ],
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Room DB",
        "SQLite",
        "Android SDK"
      ],
      githubLink: "https://github.com/AmaurysM/CodeQuest",
      category: "mobile",
      featured: false,
      //image: "/project-rockslide.jpg"
    },

    {
      title: "Guessing Game",
      description: "Interactive JavaFX game challenging players to predict whether a displayed shape will be a circle or a square, with animated visual feedback.",
      features: [
        "Dynamic shape animations",
        "Color-coded guess feedback",
        "Persistent guess tracking",
        "Database-backed game state",
        "Smooth user interaction"
      ],
      technologies: [
        "Java",
        "JavaFX",
        "JDBC",
        "Microsoft Access",
        "Database Management"
      ],
      githubLink: "https://github.com/AmaurysM/GuessingGame",
      category: "desktop",
      //image: "/project-guessing.jpg"
    },
    {
      title: "Java Blockchain",
      description: "A comprehensive blockchain implementation demonstrating core cryptocurrency features, including digital signatures, proof of work, and secure wallet transactions.",
      features: [
        "Blocks with data storage and integrity",
        "Digital signature chaining",
        "Proof of Work validation system",
        "Elliptic-Curve cryptography for wallets",
        "Secure fund transfer mechanisms",
        "Transaction verification"
      ],
      technologies: [
        "Java",
        "Cryptography",
        "SHA-256 Hashing",
        "Elliptic-Curve",
        "Digital Signatures"
      ],
      githubLink: "https://github.com/AmaurysM/BlockchainConcept",
      category: "backend",
      featured: true,
      //image: "/project-blockchain.jpg"
    },
    {
      title: "Asteroids Game",
      description: "Classic Asteroids-style arcade game built with p5.js, featuring dynamic gameplay, collision detection, and progressive difficulty.",
      features: [
        "Responsive player-controlled spaceship",
        "Procedurally generated asteroids",
        "Bullet-asteroid collision mechanics",
        "Score tracking and multiple lives system",
      ],
      technologies: [
        "React",
        "p5.js",
        "TypeScript",
        "Game Development",
        "Interactive Animation"
      ],
      githubLink: "https://github.com/AmaurysM",
      otherLink: "/asteroids",
      isInternalLink: true,
      category: "web",
      //image: "/project-asteroids.jpg"
    }
  ];

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(project => project.category === activeTab || (activeTab === "featured" && project.featured));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getRandomDelay = () => {
    return Math.random() * 0.5;
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <Navigation />

      {/* Hero Section */}
      <Section id="about" className="pt-36 pb-24 overflow-hidden">
        <div className="relative">

          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full  space-y-8"
            >
              <div>
                <h1 className="w-full text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-indigo-600 dark:from-primary dark:to-indigo-400">
                    Amaurys
                  </span>
                  <br />
                  De Los Santos
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  Software Engineer & Full Stack Developer
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I create elegant, efficient, and user-centric software solutions. I specialize in building robust web applications and mobile experiences that combine technical excellence with intuitive design.
              </p>

              <div className="flex flex-wrap gap-5 pt-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-8 py-3 bg-linear-to-r from-blue-400 to-indigo-600 text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2 rounded-xs"
                >
                  <FaLaptopCode className="mr-2" /> View Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-3 border-2 border-primary text-primary font-medium hover:bg-primary/10 dark:hover:bg-primary/5 transition-all duration-300 flex items-center rounded-xs"
                >
                  <FaEnvelope className="mr-2" /> Contact Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/AmaurysM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gray-800 dark:bg-gray-700 text-white font-medium hover:bg-gray-700 dark:hover:bg-gray-600 hover:shadow-lg transition-all duration-300 flex items-center rounded-xs"
                >
                  <FaGithub className="mr-2" /> GitHub
                </motion.a>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">5+</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Years Coding</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">15+</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Projects</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">3</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Certifications</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="py-20 relative">
        <>
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 -z-10 skew-y-3 transform-gpu"></div>
          <div>
            <SectionHeading>Technical Expertise</SectionHeading>

            <div className="space-y-12 mt-12">
              {Object.keys(skillCategories).map((category, idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-primary text-2xl">
                      {skillIcons[category]}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {categoryLabels[category]}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skillCategories[category].map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: getRandomDelay()
                        }}
                        viewport={{ once: true }}
                      >
                        <Skill
                          name={skill.name}
                          level={skill.level}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </>

      </Section>

      {/* Projects Section */}
      <Section id="projects" className="py-24">
        <div>
          <SectionHeading>Featured Projects</SectionHeading>

          {/* Project filters */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 bg-white dark:bg-gray-800 p-2 shadow-md">
              {["all", "featured", "web", "mobile", "desktop", "backend"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 font-medium transition-all duration-300 ${activeTab === tab
                    ? "bg-primary text-blue-400 shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                  className="relative"
                >
                  <ProjectItem

                    project={project}
                  // title={project.title}
                  // description={project.description}
                  // features={project.features}
                  // technologies={project.technologies}
                  // githubLink={project.githubLink}
                  // otherLink={project.otherLink}
                  // isInternalLink={project.isInternalLink}
                  // image={project.image}
                  // category={project.category}
                  />

                  {project.featured && (
                    <div className="absolute -top-3 -right-3 bg-linear-to-r from-blue-400 to-indigo-600 text-white text-xs px-3 py-1 shadow-lg">
                      Featured
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" className="py-20 relative">
        <>
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 -z-10 -skew-y-3 transform-gpu"></div>
          <div>
            <SectionHeading>Education & Certifications</SectionHeading>

            <div className="relative mt-12">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-primary to-indigo-500 hidden md:block"></div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Newest: CompTIA - Left side, top row */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="md:col-start-1 md:row-start-1 md:mr-8 relative"
                >
                  <EducationCard
                    degree="CompTIA Certifications"
                    institution="CompTIA"
                    period="2022 – Present"
                  >
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center space-x-3">
                        <Image src="/AplusCertifiedCE.png" alt="CompTIA A+ Badge" width={40} height={40} />
                        <span className="text-gray-700 dark:text-gray-300">CompTIA A+</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Image src="/NetworkPlusLogoCertifiedCE.png" alt="CompTIA Network+ Badge" width={40} height={40} />
                        <span className="text-gray-700 dark:text-gray-300">CompTIA Network+</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Image src="/SecurityPlusLogoCertifiedCE.png" alt="CompTIA Security+ Badge" width={40} height={40} />
                        <span className="text-gray-700 dark:text-gray-300">CompTIA Security+</span>
                      </div>
                    </div>
                  </EducationCard>
                  <div className="absolute top-10 right-0 transform translate-x-1/2 w-5 h-5 bg-indigo-500 border-4 border-white dark:border-gray-800 hidden md:block"></div>
                </motion.div>

                {/* 2nd: Bachelor's - Right side, 2nd row */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="md:col-start-2 md:row-start-2 md:ml-8 relative"
                >
                  <EducationCard
                    degree="Bachelors of Science - Computer Science"
                    institution="Farmingdale State College, New York, USA"
                    period="2023 – 2025"
                    gpa="3.8/4.0"
                    highlights={[
                      "Dean's List 2023-2024",
                      "Advanced Algorithms",
                      "Software Engineering",
                      "Data Structures"
                    ]}
                  />
                  <div className="absolute top-10 left-0 transform -translate-x-1/2 w-5 h-5 bg-indigo-500 border-4 border-white dark:border-gray-800 hidden md:block"></div>
                </motion.div>

                {/* 3rd: Associate - Left side, 3rd row */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="md:col-start-1 md:row-start-3 md:mr-8 relative"
                >
                  <EducationCard
                    degree="Associate of Science - Computer Science"
                    institution="Suffolk County Community College, New York, USA"
                    period="2021 – 2023"
                    gpa="3.8/4.0"
                    highlights={[
                      "President's List 2022",
                      "Introduction to Programming",
                      "Computer Architecture"
                    ]}
                  />
                  <div className="absolute top-10 right-0 transform translate-x-1/2 w-5 h-5 bg-indigo-500 border-4 border-white dark:border-gray-800 hidden md:block"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-24">
        <div>
          <SectionHeading>Let&apos;s Connect</SectionHeading>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Interested in collaborating or discussing innovative tech solutions?
                Feel free to reach out through any of these platforms.
              </p>

              <div className="flex justify-center space-x-8 mb-16">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href="mailto:amaurysdlsm@gmail.com"
                    className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href="https://linkedin.com/in/amaurys-delossantos-mendez-2a57b1213"
                    className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href="https://github.com/AmaurysM"
                    className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </Link>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ContactCard
                    icon={<FaEnvelope className="w-6 h-6 text-primary" />}
                    title="Email"
                    content="amaurysdlsm@gmail.com"
                    href="mailto:amaurysdlsm@gmail.com"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ContactCard
                    icon={<FaPhone className="w-6 h-6 text-primary" />}
                    title="Phone"
                    content="(631) 276 4906"
                    href="tel:+16312764906"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ContactCard
                    icon={<FaMapMarkerAlt className="w-6 h-6 text-primary" />}
                    title="Location"
                    content="Long Island, New York"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16 p-8 bg-white dark:bg-gray-800 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-600">Ready to collaborate?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:amaurysdlsm@gmail.com"
                className="inline-block px-8 py-3 bg-linear-to-r from-blue-400 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-xs"
              >
                Start a Conversation
              </motion.a>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Scroll to top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-blue-400 text-white flex items-center justify-center shadow-lg hover:bg-indigo-600 transition-colors z-50 rounded-full"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;