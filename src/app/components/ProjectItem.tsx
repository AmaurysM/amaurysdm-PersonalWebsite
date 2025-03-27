import React from 'react'
import AnimatedSection, { Direction } from '@/app/components/AnimatedSection';
import SkillBadge from './SkillBadge';
import Link from 'next/link';

const ProjectItem = ({ title, description, technologies, features, direction, githubLink, learnMoreDest }: {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  direction: Direction;
  githubLink?: string;
  learnMoreDest?: string;
}) => (
  <AnimatedSection direction={direction}>
    <div className="relative w-full mb-16 bg-white/5 rounded-xl overflow-hidden shadow-2xl border border-amber-900/20 hover:border-amber-500/30 transition-all duration-300 ease-in-out">
      <div className="grid md:grid-cols-1 gap-8 p-8">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-bold text-amber-500 mb-3">{title}</h3>
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-amber-400 mb-2">Key Features:</h4>
              <ul className="space-y-2 text-gray-200">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 before:content-['✦'] before:text-amber-500 before:mr-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-amber-400 mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <SkillBadge key={index} skill={tech} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4">
            {(learnMoreDest) && (
              <Link
                href={`${learnMoreDest}`}
                className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-colors"
              >
                See More
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>

  </AnimatedSection>
);

export default ProjectItem