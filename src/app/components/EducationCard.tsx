import { JSX } from "react";

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  highlights?: string[];
  children?: JSX.Element;
}

const EducationCard = ({
  degree,
  institution,
  period,
  gpa,
  highlights,
  children,
}: EducationCardProps) => (
  <div
    className="p-6 shadow-lg"
    style={{
      backgroundColor: "var(--md-sys-color-surface-container-low)",
      border: "1px solid var(--md-sys-color-outline-variant)",
    }}
  >
    <h3
      className="text-xl font-semibold mb-1"
      style={{ color: "var(--md-sys-color-on-surface)" }}
    >
      {degree}
    </h3>
    <p
      className="text-lg mb-1"
      style={{ color: "var(--md-sys-color-on-surface-variant)" }}
    >
      {institution}
    </p>
    <p
      className="mb-2"
      style={{ color: "var(--md-sys-color-outline)" }}
    >
      {period}
    </p>

    {gpa && (
      <p
        className="text-sm font-medium mb-2"
        style={{ color: "var(--md-sys-color-tertiary)" }}
      >
        GPA: {gpa}
      </p>
    )}

    {highlights && (
      <ul
        className="list-disc list-inside text-sm space-y-1 mb-4"
        style={{ color: "var(--md-sys-color-on-surface-variant)" }}
      >
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}

    {children}
  </div>
);

export default EducationCard;