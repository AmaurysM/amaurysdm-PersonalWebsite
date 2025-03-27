import Image from "next/image";
import AnimatedSection, { Direction } from "./components/AnimatedSection";
import SkillBadge from "./components/SkillBadge";
import ProjectItem from "./components/ProjectItem";

export default function Home() {
  const skills = [
    "Kotlin", "JavaScript", "Java", "Python", "C", "C++", "Swift",
    "MySQL", "MongoDB", "SQLite", "Firebase",
    "CSS", "Tailwind", "Jetpack Compose"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-amber-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction={Direction.LEFT}>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-amber-700 shadow-2xl group">
                <Image
                  src="/profilePic.jpg"
                  alt="Amaurys De Los Santos Mendez"
                  layout="fill"
                  objectFit="cover"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-amber-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction={Direction.RIGHT}>
            <div className="space-y-8 text-center md:text-left">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Hi, I&apos;m <span className="text-amber-500">Amaurys</span>
                </h1>
                <p className="text-2xl text-amber-300 font-medium mb-6">
                  Web/Java App Developer
                </p>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                Computer Science student at Farmingdale State College with a passion for creating innovative
                software solutions. Skilled in java, mobile and web development, with a strong background in
                programming languages and modern tech stacks.
              </p>

              <div className="flex justify-center md:justify-start space-x-4 pt-6">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-500 transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="mailto:amaurysdlsm@gmail.com"
                  className="px-6 py-3 border-2 border-amber-600 text-amber-500 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-amber-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-400 mb-12">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-amber-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-400 mb-16">Projects</h2>

          <div className="space-y-16">
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
              direction={Direction.LEFT}
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
              direction={Direction.RIGHT}
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
                "Digital Signatures",
                "Blockchain Technology"
              ]}
              direction={Direction.LEFT}
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
                "Progressive difficulty scaling"
              ]}
              technologies={[
                "React",
                "p5.js",
                "TypeScript",
                "Game Development",
                "Interactive Animation"
              ]}
              direction={Direction.RIGHT}
              githubLink="https://github.com/AmaurysM"
              learnMoreDest="/asteroids"
            />

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-amber-950">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-400 mb-16">
            Education & Certifications
          </h2>
          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-500 mb-2">
                Bachelors of Science - Computer Science
              </h3>
              <p className="text-gray-300 text-lg mb-2">
                Farmingdale State College, New York, USA
              </p>
              <p className="text-gray-400">2023 – 2025</p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-500 mb-2">
                Associate of Science - Computer Science
              </h3>
              <p className="text-gray-300 text-lg mb-2">
                Suffolk County Community College, New York, USA
              </p>
              <p className="text-gray-400">2021 – 2023</p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-500 mb-4">
                CompTIA Certifications
              </h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/AplusCertifiedCE.png"
                    alt="CompTIA A+ Badge"
                    width={48}
                    height={48}
                  />
                  <span className="text-gray-300 text-lg">CompTIA A+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/NetworkPlusLogoCertifiedCE.png"
                    alt="CompTIA Network+ Badge"
                    width={48}
                    height={48}
                  />
                  <span className="text-gray-300 text-lg">CompTIA Network+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/SecurityPlusLogoCertifiedCE.png"
                    alt="CompTIA Security+ Badge"
                    width={48}
                    height={48}
                  />
                  <span className="text-gray-300 text-lg">CompTIA Security+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-900/20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-amber-400 mb-8">Let&apos;s Connect</h2>
          <p className="text-gray-300 text-lg mb-12">
            Interested in collaborating or discussing innovative tech solutions?
            Feel free to reach out through any of these platforms.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:amaurysdlsm@gmail.com"
              className="text-amber-500 hover:text-amber-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/amaurys-delossantos-mendez-2a57b1213"
              className="text-amber-500 hover:text-amber-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/AmaurysM"
              className="text-amber-500 hover:text-amber-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>Email: amaurysdlsm@gmail.com</p>
            <p>Phone: (631) 276-4906</p>
            <p>Location: 265 Abrahams Landing Rd</p>
          </div>
        </div>
      </section>
    </div>
  );
}