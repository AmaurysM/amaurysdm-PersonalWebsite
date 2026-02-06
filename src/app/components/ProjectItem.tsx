"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../types/project";
import { useRouter } from "next/navigation";

const ProjectItem = ({ project }: { project: Project }) => {
  const {
    title,
    description,
    technologies,
    features,
    githubLink,
    showcaseLink,
    otherLink,
    isInternalLink = false,
    featured,
    image,
    category,
  } = project;

  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const LinkComponent = isInternalLink ? Link : "a";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <div
        className={`p-6 md:p-8 ${showcaseLink ? "cursor-pointer hover:bg-zinc-800/40 transition" : ""}`}
        onClick={() => showcaseLink && router.push(showcaseLink)}
      >
        {/* Title row */}
        <div className="flex items-start gap-4 mb-4">
          {typeof image === "string" && image.length > 0 && (
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src={image}
                alt={`${title} logo`}
                fill
                className="object-contain"
              />
            </div>
          )}

          <div className={image ? "flex-1" : ""}>
            <div className="flex items-center gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>

              {featured && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                  Featured
                </span>
              )}
            </div>

            {category && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {category}
              </p>
            )}
          </div>
        </div>


        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable details */}
        {features?.length > 0 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-primary font-medium text-sm flex items-center mb-4"
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Collapse details" : "Expand details"}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="ml-2"
              >
                <FaChevronDown />
              </motion.span>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300"
                >
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Links */}
        <div className="flex gap-3 flex-wrap">
          {githubLink && (
            <LinkComponent
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 rounded-lg text-white text-sm font-medium gap-2"
            >
              <FaGithub className="w-4 h-4" />
              View Source
            </LinkComponent>
          )}

          {otherLink && (
            <LinkComponent
              href={otherLink}
              {...(!isInternalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium gap-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              {isInternalLink ? "View Project" : "Live Demo"}
            </LinkComponent>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectItem;
