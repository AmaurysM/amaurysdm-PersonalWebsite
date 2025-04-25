"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone} from "react-icons/fa";
import ProjectItem from "./components/ProjectItem";
import EducationCard from "./components/EducationCard";
import Section from "./components/Section";
import Link from "next/link";
import ContactCard from "./components/ContactCard";
import Navigation from "./components/Navigation";
import SectionHeading from "./components/SectionHeading";
import Skill from "./components/Skill";
import Footer from "./components/Footer";


const Home = () => {
  const skills = [
    "Java", "Kotlin", "TypeScript", "JavaScript", "Python", "C", "C++",
    "Next.js", "Tailwind CSS", "HTML", "CSS",
    "Android Studio", "Jetpack Compose", "Git", "Firebase",
    "MongoDB", "Prisma", "SQLite", "MySQL"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navigation />

      {/* Hero Section */}
      <Section id="about" className="pt-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/profilePicture.png"
                alt="Amaurys De Los Santos Mendez"
                fill
                priority
                style={{ objectFit: 'cover' }}
                className="filter hover:saturate-100 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I&apos;m <span className="text-primary">Amaurys</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Software Engineer & Full Stack Developer
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Computer Science student at Farmingdale State College with a passion for creating innovative
              software solutions. Skilled in Java, mobile and web development, with a strong background in
              multiple programming languages and modern tech stacks.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary rounded-lg text-primary font-medium hover:bg-gray-200 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:bg-gray-200 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/AmaurysM"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 dark:bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center">
                  <FaGithub/>
                  GitHub
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-gray-100 dark:bg-gray-800/50">
        <div>
          <SectionHeading>Technical Skills</SectionHeading>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <Skill key={index} name={skill} />
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div>
          <SectionHeading>Projects</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Stock Trading Platform"
              description="A simulated stock trading web application where users buy, sell, and trade stocks using virtual currency."
              features={[
                "Server-side rendering with Next.js",
                "Responsive design using Tailwind CSS",
                "Robust data handling with MongoDB & Prisma",
                "Secure authentication with BetterAuth",
                "Integrated social features including posts and comments"
              ]}
              technologies={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "MongoDB",
                "Prisma",
                "BetterAuth"
              ]}
              githubLink="https://github.com/AmaurysM/mabbr-senior-project"
              otherLink="https://www.mabbr.net"
            />

            <ProjectItem
              title="RockSlide (CodeQuest)"
              description="Android strategy game where players navigate a rock across a compact platform by strategically placing directional arrow pieces."
              features={[
                "Interactive rock movement mechanics",
                "Drag-and-drop directional controls",
                "Persistent progress tracking",
                "Strategic puzzle gameplay",
                "State management with Jetpack Compose"
              ]}
              technologies={[
                "Kotlin",
                "Jetpack Compose",
                "Room DB",
                "SQLite",
                "Android SDK"
              ]}
              githubLink="https://github.com/AmaurysM/CodeQuest"
            />

            <ProjectItem
              title="Guessing Game"
              description="Interactive JavaFX game challenging players to predict whether a displayed shape will be a circle or a square, with animated visual feedback."
              features={[
                "Dynamic shape animations",
                "Color-coded guess feedback",
                "Persistent guess tracking",
                "Database-backed game state",
                "Smooth user interaction"
              ]}
              technologies={[
                "Java",
                "JavaFX",
                "JDBC",
                "Microsoft Access",
                "Database Management"
              ]}
              githubLink="https://github.com/AmaurysM/GuessingGame"
            />

            <ProjectItem
              title="Java Blockchain"
              description="A comprehensive blockchain implementation demonstrating core cryptocurrency features, including digital signatures, proof of work, and secure wallet transactions."
              features={[
                "Blocks with data storage and integrity",
                "Digital signature chaining",
                "Proof of Work validation system",
                "Elliptic-Curve cryptography for wallets",
                "Secure fund transfer mechanisms",
                "Transaction verification"
              ]}
              technologies={[
                "Java",
                "Cryptography",
                "SHA-256 Hashing",
                "Elliptic-Curve",
                "Digital Signatures"
              ]}
              githubLink="https://github.com/AmaurysM/BlockchainConcept"
            />

            <ProjectItem
              title="Asteroids Game"
              description="Classic Asteroids-style arcade game built with p5.js, featuring dynamic gameplay, collision detection, and progressive difficulty."
              features={[
                "Responsive player-controlled spaceship",
                "Procedurally generated asteroids",
                "Bullet-asteroid collision mechanics",
                "Score tracking and multiple lives system",
              ]}
              technologies={[
                "React",
                "p5.js",
                "TypeScript",
                "Game Development",
                "Interactive Animation"
              ]}
              githubLink="https://github.com/AmaurysM"
              otherLink="/asteroids"
              isInternalLink
            />
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" className="bg-gray-100 dark:bg-gray-800/50">
        <div>
          <SectionHeading>Education & Certifications</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            <EducationCard
              degree="Bachelors of Science - Computer Science"
              institution="Farmingdale State College, New York, USA"
              period="2023 – 2025"
            />
            <EducationCard
              degree="Associate of Science - Computer Science"
              institution="Suffolk County Community College, New York, USA"
              period="2021 – 2023"
            />
            <EducationCard
              degree="CompTIA Certifications"
              institution="CompTIA"
              period="2022 – Present"
            >
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/AplusCertifiedCE.png"
                    alt="CompTIA A+ Badge"
                    width={40}
                    height={40}
                  />
                  <span className="text-gray-700 dark:text-gray-300">CompTIA A+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/NetworkPlusLogoCertifiedCE.png"
                    alt="CompTIA Network+ Badge"
                    width={40}
                    height={40}
                  />
                  <span className="text-gray-700 dark:text-gray-300">CompTIA Network+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/SecurityPlusLogoCertifiedCE.png"
                    alt="CompTIA Security+ Badge"
                    width={40}
                    height={40}
                  />
                  <span className="text-gray-700 dark:text-gray-300">CompTIA Security+</span>
                </div>
              </div>
            </EducationCard>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div>
          <SectionHeading>Let&apos;s Connect</SectionHeading>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Interested in collaborating or discussing innovative tech solutions?
                Feel free to reach out through any of these platforms.
              </p>

              <div className="flex justify-center space-x-8 mb-12">
                <Link
                  href="mailto:amaurysdlsm@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="Email"
                >
                    <FaEnvelope />
                </Link>
                <Link
                  href="https://linkedin.com/in/amaurys-delossantos-mendez-2a57b1213"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </Link>
                <Link
                  href="https://github.com/AmaurysM"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                    <FaGithub />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <ContactCard
                  icon={<FaEnvelope className="w-6 h-6 text-primary" />}
                  title="Email"
                  content="amaurysdlsm@gmail.com"
                  href="mailto:amaurysdlsm@gmail.com"
                />
                <ContactCard
                  icon={<FaPhone className="w-6 h-6 text-primary" />}
                  title="Phone"
                  content="(631) 276 4906"
                  href="tel:+16315550123"
                />
                <ContactCard
                  icon={<FaMapMarkerAlt className="w-6 h-6 text-primary" />}
                  title="Location"
                  content="Long Island, New York"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;