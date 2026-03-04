"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 backdrop-blur-md shadow-sm z-40"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--md-sys-color-surface-container-low) 85%, transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="shrink-0">
            <Link
              href="#"
              className="flex items-center gap-2 text-xl font-bold"
              style={{ color: "var(--md-sys-color-on-surface)" }}
            >
              <img src="/favicon.ico" alt="Logo" width={28} height={28} />
              <span>
                <span style={{ color: "var(--md-sys-color-primary)" }}>A</span>
                maurys
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--md-sys-color-on-surface-variant)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--md-sys-color-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--md-sys-color-on-surface-variant)")
                }
              >
                {item}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md transition-colors duration-200"
            style={{ color: "var(--md-sys-color-on-surface-variant)" }}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div
            className="px-2 pt-2 pb-3 space-y-1 shadow-md"
            style={{ backgroundColor: "var(--md-sys-color-surface-container)" }}
          >
            {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium transition-colors duration-200"
                style={{ color: "var(--md-sys-color-on-surface-variant)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--md-sys-color-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--md-sys-color-on-surface-variant)")
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;