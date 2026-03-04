import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type ContactCardProps = {
  icon: React.ReactElement;
  title: string;
  content: string;
  href?: string;
};

const CardContent = ({
  icon,
  title,
  content,
}: Omit<ContactCardProps, "href">) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-6 shadow-sm"
    style={{
      backgroundColor: "var(--md-sys-color-surface-container)",
      borderRadius: "0.75rem",
    }}
  >
    <div className="flex justify-center mb-4">
      <div
        className="p-3 rounded-full"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--md-sys-color-primary) 12%, transparent)",
        }}
      >
        {icon}
      </div>
    </div>
    <h3
      className="text-lg font-medium mb-2 text-center"
      style={{ color: "var(--md-sys-color-on-surface)" }}
    >
      {title}
    </h3>
    <p
      className="text-center wrap-break-word max-w-full transition-colors duration-200"
      style={{ color: "var(--md-sys-color-on-surface-variant)" }}
    >
      {content}
    </p>
  </motion.div>
);

const ContactCard = ({ icon, title, content, href }: ContactCardProps) => {
  return href ? (
    <Link href={href} className="block">
      <CardContent icon={icon} title={title} content={content} />
    </Link>
  ) : (
    <CardContent icon={icon} title={title} content={content} />
  );
};

export default ContactCard;