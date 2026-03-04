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
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import { projects } from "./lib/projects";
import { categoryLabels, skillCategories, skillIcons } from "./lib/skill-categories";

const Home = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const applyTheme = (isDark: boolean) => {
      const newTheme = isDark ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", isDark);
    };

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    // Apply on mount
    applyTheme(mq.matches);

    // Re-apply whenever the OS setting changes
    const onChange = (e: MediaQueryListEvent) => applyTheme(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onWrapperScroll = (e: Event) => {
      const el = (e as CustomEvent).detail?.target as HTMLElement;
      if (el) setIsVisible(el.scrollTop > 300);
    };
    window.addEventListener("pagewrapper:scroll", onWrapperScroll);
    return () => window.removeEventListener("pagewrapper:scroll", onWrapperScroll);
  }, []);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter(
        (project) =>
          project.category === activeTab ||
          (activeTab === "featured" && project.featured)
      );

  const scrollToTop = () => {
    const scrollEl = document.querySelector("[data-scroll-container]") as HTMLElement;
    if (scrollEl) scrollEl.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageWrapper>
      <div
        className="px-4 duration-300 transition-all"
        style={{
          backgroundColor: "var(--md-sys-color-background)",
          color: "var(--md-sys-color-on-background)",
        }}
      >
        <Navigation />
        <div className="flex flex-col justify-center items-center">

          {/* Hero Section */}
          <div id="about" className="pt-36 pb-24 overflow-hidden">
            <div className="w-full space-y-8">
              <div>
                <h1 className="w-full text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                  <span style={{ color: "var(--md-sys-color-primary)" }}>
                    Amaurys
                  </span>
                  <br />
                  De Los Santos
                </h1>
                <p
                  className="text-xl md:text-2xl font-medium"
                  style={{ color: "var(--md-sys-color-on-surface-variant)" }}
                >
                  Software Engineer & Full Stack Developer
                </p>
              </div>

              <p
                className="leading-relaxed text-lg"
                style={{ color: "var(--md-sys-color-on-surface-variant)" }}
              >
                I create elegant, efficient, and user-centric software solutions.
                I specialize in building robust web applications and mobile
                experiences that combine technical excellence with intuitive design.
              </p>

              <div className="flex flex-wrap gap-5 pt-6">
                <a
                  href="#projects"
                  className="px-8 py-3 font-medium hover:shadow-lg transition-all duration-300 flex items-center rounded-sm"
                  style={{
                    backgroundColor: "var(--md-sys-color-primary)",
                    color: "var(--md-sys-color-on-primary)",
                  }}
                >
                  <FaLaptopCode className="mr-2" /> View Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 font-medium transition-all duration-300 flex items-center rounded-sm"
                  style={{
                    borderColor: "var(--md-sys-color-primary)",
                    color: "var(--md-sys-color-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "color-mix(in srgb, var(--md-sys-color-primary) 10%, transparent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <FaEnvelope className="mr-2" /> Contact Me
                </a>
                <a
                  href="https://github.com/AmaurysM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 font-medium hover:shadow-lg transition-all duration-300 flex items-center rounded-sm"
                  style={{
                    backgroundColor: "var(--md-sys-color-surface-container-highest)",
                    color: "var(--md-sys-color-on-surface)",
                  }}
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </div>

              {/* Quick stats */}
              <div
                className="grid grid-cols-3 gap-4 mt-12 pt-6 border-t"
                style={{ borderColor: "var(--md-sys-color-outline-variant)" }}
              >
                {[
                  { value: "9+", label: "Years Coding" },
                  { value: "23+", label: "Projects" },
                  { value: "3", label: "Certifications" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <h3
                      className="text-3xl font-bold"
                      style={{ color: "var(--md-sys-color-primary)" }}
                    >
                      {value}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--md-sys-color-on-surface-variant)" }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="py-20 relative">
            <div
              className="absolute inset-0 -z-10 skew-y-3 transform-gpu"
              style={{ backgroundColor: "var(--md-sys-color-surface-container-low)" }}
            ></div>
            <div>
              <SectionHeading>Technical Expertise</SectionHeading>
              <div className="space-y-6 mt-8">
                {Object.keys(skillCategories).map((category) => (
                  <div key={category}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-xl" style={{ color: "var(--md-sys-color-primary)" }}>
                        {skillIcons[category]}
                      </div>
                      <h3
                        className="text-xl font-semibold"
                        style={{ color: "var(--md-sys-color-on-surface)" }}
                      >
                        {categoryLabels[category]}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategories[category].map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 rounded-sm text-sm transition-colors duration-200 cursor-default"
                          style={{
                            backgroundColor: "var(--md-sys-color-surface-container)",
                            color: "var(--md-sys-color-on-surface-variant)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--md-sys-color-secondary-container)";
                            e.currentTarget.style.color = "var(--md-sys-color-on-secondary-container)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--md-sys-color-surface-container)";
                            e.currentTarget.style.color = "var(--md-sys-color-on-surface-variant)";
                          }}
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
              <div className="flex justify-center mb-12">
                <div
                  className="flex flex-wrap gap-2 p-2 shadow-md"
                  style={{ backgroundColor: "var(--md-sys-color-surface-container-low)" }}
                >
                  {["all", "featured", "web", "mobile", "desktop", "backend"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="px-5 py-2 font-medium transition-colors duration-200"
                      style={
                        activeTab === tab
                          ? {
                            backgroundColor: "var(--md-sys-color-primary-container)",
                            color: "var(--md-sys-color-on-primary-container)",
                          }
                          : {
                            backgroundColor: "transparent",
                            color: "var(--md-sys-color-on-surface-variant)",
                          }
                      }
                      onMouseEnter={(e) => {
                        if (activeTab !== tab)
                          e.currentTarget.style.backgroundColor = "var(--md-sys-color-surface-container-high)";
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== tab)
                          e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.title} className="relative">
                    <ProjectItem project={project} />
                    {project.featured && (
                      <div
                        className="absolute -top-3 -right-3 text-xs px-3 py-1 shadow-lg"
                        style={{
                          backgroundColor: "var(--md-sys-color-tertiary-container)",
                          color: "var(--md-sys-color-on-tertiary-container)",
                        }}
                      >
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
            <div
              className="absolute inset-0 -z-10 -skew-y-3 transform-gpu"
              style={{ backgroundColor: "var(--md-sys-color-surface-container-low)" }}
            ></div>
            <div>
              <SectionHeading>Education & Certifications</SectionHeading>
              <div className="relative mt-12">
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block"
                  style={{ backgroundColor: "var(--md-sys-color-primary)" }}
                ></div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:row-start-1 md:mr-8 relative">
                    <EducationCard degree="CompTIA Certifications" institution="CompTIA" period="2022 – Present">
                      <div className="flex flex-wrap gap-4 mt-4">
                        {[
                          { src: "/AplusCertifiedCE.png", label: "CompTIA A+" },
                          { src: "/NetworkPlusLogoCertifiedCE.png", label: "CompTIA Network+" },
                          { src: "/SecurityPlusLogoCertifiedCE.png", label: "CompTIA Security+" },
                        ].map(({ src, label }) => (
                          <div key={label} className="flex items-center space-x-3">
                            <Image src={src} alt={`${label} Badge`} width={40} height={40} />
                            <span style={{ color: "var(--md-sys-color-on-surface-variant)" }}>{label}</span>
                          </div>
                        ))}
                      </div>
                    </EducationCard>
                    <div
                      className="absolute top-10 right-0 transform translate-x-1/2 w-5 h-5 border-4 hidden md:block"
                      style={{
                        backgroundColor: "var(--md-sys-color-secondary)",
                        borderColor: "var(--md-sys-color-background)",
                      }}
                    ></div>
                  </div>

                  <div className="md:col-start-2 md:row-start-2 md:ml-8 relative">
                    <EducationCard
                      degree="Bachelors of Science - Computer Science"
                      institution="Farmingdale State College, New York, USA"
                      period="2023 – 2025"
                      gpa="3.8/4.0"
                      highlights={["Dean's List 2023-2024", "Advanced Algorithms", "Software Engineering", "Data Structures"]}
                    />
                    <div
                      className="absolute top-10 left-0 transform -translate-x-1/2 w-5 h-5 border-4 hidden md:block"
                      style={{
                        backgroundColor: "var(--md-sys-color-secondary)",
                        borderColor: "var(--md-sys-color-background)",
                      }}
                    ></div>
                  </div>

                  <div className="md:col-start-1 md:row-start-3 md:mr-8 relative">
                    <EducationCard
                      degree="Associate of Science - Computer Science"
                      institution="Suffolk County Community College, New York, USA"
                      period="2021 – 2023"
                      gpa="3.8/4.0"
                      highlights={["President's List 2022", "Introduction to Programming", "Computer Architecture"]}
                    />
                    <div
                      className="absolute top-10 right-0 transform translate-x-1/2 w-5 h-5 border-4 hidden md:block"
                      style={{
                        backgroundColor: "var(--md-sys-color-secondary)",
                        borderColor: "var(--md-sys-color-background)",
                      }}
                    ></div>
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
                  <p className="mb-8 text-lg" style={{ color: "var(--md-sys-color-on-surface-variant)" }}>
                    Interested in collaborating or discussing innovative tech solutions?
                    Feel free to reach out through any of these platforms.
                  </p>

                  <div className="flex justify-center space-x-8 mb-16">
                    {[
                      { href: "mailto:amaurysdlsm@gmail.com", icon: <FaEnvelope />, label: "Email" },
                      { href: "https://www.linkedin.com/in/amaurys-de-los-santos-mendez-2a57b1213/", icon: <FaLinkedin />, label: "LinkedIn", target: "_blank" },
                      { href: "https://github.com/AmaurysM", icon: <FaGithub />, label: "GitHub", target: "_blank" },
                    ].map(({ href, icon, label, target }) => (
                      <Link
                        key={label}
                        href={href}
                        target={target}
                        className="text-2xl transition-colors"
                        style={{ color: "var(--md-sys-color-on-surface-variant)" }}
                        aria-label={label}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--md-sys-color-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--md-sys-color-on-surface-variant)")}
                      >
                        {icon}
                      </Link>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <ContactCard
                      icon={<FaEnvelope className="w-6 h-6" style={{ color: "var(--md-sys-color-primary)" }} />}
                      title="Email"
                      content="amaurysdlsm@gmail.com"
                      href="mailto:amaurysdlsm@gmail.com"
                    />
                    <ContactCard
                      icon={<FaPhone className="w-6 h-6" style={{ color: "var(--md-sys-color-primary)" }} />}
                      title="Phone"
                      content="(631) 276 4906"
                      href="tel:+16312764906"
                    />
                    <ContactCard
                      icon={<FaMapMarkerAlt className="w-6 h-6" style={{ color: "var(--md-sys-color-primary)" }} />}
                      title="Location"
                      content="Long Island, New York"
                    />
                  </div>
                </div>

                <div
                  className="text-center mt-16 p-8 shadow-xl"
                  style={{ backgroundColor: "var(--md-sys-color-surface-container)" }}
                >
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--md-sys-color-primary)" }}>
                    Ready to collaborate?
                  </h3>
                  <p className="mb-6" style={{ color: "var(--md-sys-color-on-surface-variant)" }}>
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  <a
                    href="mailto:amaurysdlsm@gmail.com"
                    className="inline-block px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-sm"
                    style={{
                      backgroundColor: "var(--md-sys-color-primary)",
                      color: "var(--md-sys-color-on-primary)",
                    }}
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
              className="fixed bottom-20 right-8 w-12 h-12 flex items-center justify-center shadow-lg transition-colors z-50 rounded-full"
              style={{
                backgroundColor: "var(--md-sys-color-primary)",
                color: "var(--md-sys-color-on-primary)",
              }}
              aria-label="Scroll to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          )}
        </div>
      </div>
      <Footer />
    </PageWrapper>
  );
};

export default Home;