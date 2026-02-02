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
  <div className="bg-white dark:bg-gray-800 p-6 shadow-lg border border-gray-200 dark:border-gray-700">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
      {degree}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-lg mb-1">
      {institution}
    </p>
    <p className="text-gray-500 dark:text-gray-400 mb-2">{period}</p>

    {gpa && (
      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-2">
        GPA: {gpa}
      </p>
    )}

    {highlights && (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-4">
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}

    {children}
  </div>
);

export default EducationCard;
