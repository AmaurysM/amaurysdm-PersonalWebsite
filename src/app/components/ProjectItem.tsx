"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubLink?: string;
  otherLink?: string;
  isInternalLink?: boolean;
}

const ProjectItem = ({ 
  title, 
  description, 
  technologies, 
  features, 
  githubLink, 
  otherLink,
  isInternalLink = false 
}: ProjectItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const LinkComponent = isInternalLink ? Link : 'a';

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
    >
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="mb-6">
          <motion.div 
            className="flex flex-wrap gap-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
            }}
          >
            {technologies.map((tech, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary font-medium text-sm flex items-center mb-4 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
            aria-expanded={isExpanded}
            aria-controls="project-details"
          >
            {isExpanded ? "Collapse Details" : "Expand Details"}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="ml-2 w-5 h-5 inline-flex items-center justify-center"
            >
              <FaChevronDown/>
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6"
                id="project-details"
              >
                <SectionHeading title="Key Features" />
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                  {features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-3 flex-wrap">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 rounded-lg text-white text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors gap-2"
            >
              <FaGithub className="w-4 h-4" />
              View Source
            </a>
          )}
          {otherLink && (
            <LinkComponent
              href={otherLink}
              {...(!isInternalLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors gap-2 ${
                isInternalLink 
                  ? 'bg-primary text-primary hover:bg-primary-dark dark:hover:bg-gray-600 hover:bg-gray-200' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-700 dark:text-primary'
              }`}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              {isInternalLink ? 'View Project' : 'Live Demo'}
            </LinkComponent>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const SectionHeading = ({ title }: { title: string }) => (
  <div className="flex items-center mb-3">
    <div className="w-4 h-4 bg-primary rounded-full mr-2" aria-hidden="true" />
    <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
  </div>
);

export default ProjectItem;