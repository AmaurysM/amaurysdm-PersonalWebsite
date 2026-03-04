import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="py-8"
      style={{ backgroundColor: "var(--md-sys-color-surface-container-low)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Branding with favicon */}
          <div className="flex items-center gap-2">
            <img src="/favicon.ico" alt="Logo" width={20} height={20} />
            <span
              className="text-sm"
              style={{ color: "var(--md-sys-color-on-surface-variant)" }}
            >
              © {new Date().getFullYear()}{" "}
              <span style={{ color: "var(--md-sys-color-primary)" }}>
                Amaurys
              </span>{" "}
              De Los Santos Mendez. All rights reserved.
            </span>
          </div>

          {/* Social links */}
          <div className="flex space-x-4">
            {[
              { href: "https://github.com/AmaurysM", label: "GitHub", icon: <FaGithub className="w-5 h-5" /> },
              { href: "https://www.linkedin.com/in/amaurys-de-los-santos-mendez-2a57b1213/", label: "LinkedIn", icon: <FaLinkedin className="w-5 h-5" /> },
              { href: "mailto:amaurysdlsm@gmail.com", label: "Email", icon: <FaEnvelope className="w-5 h-5" /> },
            ].map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="transition-colors duration-200"
                style={{ color: "var(--md-sys-color-on-surface-variant)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--md-sys-color-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--md-sys-color-on-surface-variant)")
                }
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;