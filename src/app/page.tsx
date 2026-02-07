"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaLaptopCode,
} from "react-icons/fa";
import ProjectItem from "./components/ProjectItem";
import EducationCard from "./components/EducationCard";
import Link from "next/link";
import ContactCard from "./components/ContactCard";
import Navigation from "./components/Navigation";
import SectionHeading from "./components/SectionHeading";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import { projects } from "./lib/projects";
import { categoryLabels, skillCategories, skillIcons } from "./lib/skill-categories";

const Home = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(project => project.category === activeTab || (activeTab === "featured" && project.featured));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-b px-4 from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <Navigation />

      {/* Hero Section */}
      <div id="about" className="pt-36 pb-24 overflow-hidden">
        <div className="relative">
          <div>
            <div className="w-full space-y-8">
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
                <a
                  href="#projects"
                  className="px-8 py-3 bg-linear-to-r from-blue-400 to-indigo-600 text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2 rounded-xs"
                >
                  <FaLaptopCode className="mr-2" /> View Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-primary text-primary font-medium hover:bg-primary/10 dark:hover:bg-primary/5 transition-all duration-300 flex items-center rounded-xs"
                >
                  <FaEnvelope className="mr-2" /> Contact Me
                </a>
                <a
                  href="https://github.com/AmaurysM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gray-800 dark:bg-gray-700 text-white font-medium hover:bg-gray-700 dark:hover:bg-gray-600 hover:shadow-lg transition-all duration-300 flex items-center rounded-xs"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
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
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-20 relative">
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 -z-10 skew-y-3 transform-gpu"></div>

        <div>
          <SectionHeading>Technical Expertise</SectionHeading>

          <div className="space-y-6 mt-8">
            {Object.keys(skillCategories).map((category) => (
              <div key={category}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-primary text-xl">
                    {skillIcons[category]}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {categoryLabels[category]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillCategories[category].map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 rounded-xs text-sm
                  bg-gray-100 dark:bg-gray-800
                  text-gray-700 dark:text-gray-300
                  hover:bg-primary/10"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Projects Section */}
      <div id="projects" className="py-24">
        <div>
          <SectionHeading>Featured Projects</SectionHeading>

          {/* Project filters */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 bg-white dark:bg-gray-800 p-2 shadow-md">
              {["all", "featured", "web", "mobile", "desktop", "backend"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 font-medium ${activeTab === tab
                    ? "bg-primary text-blue-400 shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="relative"
              >
                <ProjectItem project={project} />

                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-linear-to-r from-blue-400 to-indigo-600 text-white text-xs px-3 py-1 shadow-lg">
                    Featured
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="py-20 relative">
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 -z-10 -skew-y-3 transform-gpu"></div>
        <div>
          <SectionHeading>Education & Certifications</SectionHeading>

          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-primary to-indigo-500 hidden md:block"></div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Newest: CompTIA - Left side, top row */}
              <div className="md:col-start-1 md:row-start-1 md:mr-8 relative">
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
              </div>

              {/* 2nd: Bachelor's - Right side, 2nd row */}
              <div className="md:col-start-2 md:row-start-2 md:ml-8 relative">
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
              </div>

              {/* 3rd: Associate - Left side, 3rd row */}
              <div className="md:col-start-1 md:row-start-3 md:mr-8 relative">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24">
        <div>
          <SectionHeading>Let&apos;s Connect</SectionHeading>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Interested in collaborating or discussing innovative tech solutions?
                Feel free to reach out through any of these platforms.
              </p>

              <div className="flex justify-center space-x-8 mb-16">
                <div>
                  <Link
                    href="mailto:amaurysdlsm@gmail.com"
                    className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://linkedin.com/in/amaurys-delossantos-mendez-2a57b1213"
                    className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://github.com/AmaurysM"
                    className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <ContactCard
                    icon={<FaEnvelope className="w-6 h-6 text-primary" />}
                    title="Email"
                    content="amaurysdlsm@gmail.com"
                    href="mailto:amaurysdlsm@gmail.com"
                  />
                </div>
                <div>
                  <ContactCard
                    icon={<FaPhone className="w-6 h-6 text-primary" />}
                    title="Phone"
                    content="(631) 276 4906"
                    href="tel:+16312764906"
                  />
                </div>
                <div>
                  <ContactCard
                    icon={<FaMapMarkerAlt className="w-6 h-6 text-primary" />}
                    title="Location"
                    content="Long Island, New York"
                  />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 p-8 bg-white dark:bg-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-600">Ready to collaborate?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a
                href="mailto:amaurysdlsm@gmail.com"
                className="inline-block px-8 py-3 bg-linear-to-r from-blue-400 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-xs"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-400 text-white flex items-center justify-center shadow-lg hover:bg-indigo-600 transition-colors z-50 rounded-full"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;