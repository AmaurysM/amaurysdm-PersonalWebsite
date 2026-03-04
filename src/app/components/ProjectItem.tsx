"use client";

import React, { useState } from "react";
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
    <div
      className="overflow-hidden shadow-lg"
      style={{
        backgroundColor: "var(--md-sys-color-surface-container-low)",
        border: "1px solid var(--md-sys-color-outline-variant)",
      }}
    >
      <div
        className={`p-6 md:p-8 transition-colors duration-200 ${showcaseLink ? "cursor-pointer" : ""}`}
        style={{ backgroundColor: "transparent" }}
        onMouseEnter={(e) => {
          if (showcaseLink)
            (e.currentTarget as HTMLDivElement).style.backgroundColor =
              "color-mix(in srgb, var(--md-sys-color-primary) 6%, transparent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.backgroundColor =
            "transparent";
        }}
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
            <h3
              className="text-xl md:text-2xl font-semibold"
              style={{ color: "var(--md-sys-color-on-surface)" }}
            >
              {title}
            </h3>

            {category && (
              <p
                className="text-xs mt-1"
                style={{ color: "var(--md-sys-color-on-surface-variant)" }}
              >
                {category}
              </p>
            )}
          </div>
        </div>

        <p
          className="mb-6 leading-relaxed"
          style={{ color: "var(--md-sys-color-on-surface-variant)" }}
        >
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium px-3 py-1"
              style={{
                backgroundColor: "var(--md-sys-color-surface-container-high)",
                color: "var(--md-sys-color-on-surface-variant)",
              }}
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
              className="font-medium text-sm flex items-center mb-4 transition-colors duration-200"
              style={{ color: "var(--md-sys-color-primary)" }}
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Collapse details" : "Expand details"}
              <FaChevronDown
                className="ml-2 transition-transform duration-200"
                style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            {isExpanded && (
              <div
                className="mb-6 list-disc pl-5 space-y-2"
                style={{ color: "var(--md-sys-color-on-surface-variant)" }}
              >
                {features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </div>
            )}
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
              className="inline-flex items-center px-4 py-2 text-sm font-medium gap-2 transition-colors duration-200"
              style={{
                backgroundColor: "var(--md-sys-color-surface-container-highest)",
                color: "var(--md-sys-color-on-surface)",
              }}
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
              className="inline-flex items-center px-4 py-2 text-sm font-medium gap-2 transition-colors duration-200"
              style={{
                backgroundColor: "var(--md-sys-color-secondary-container)",
                color: "var(--md-sys-color-on-secondary-container)",
              }}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              {isInternalLink ? "View Project" : "Live Demo"}
            </LinkComponent>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;