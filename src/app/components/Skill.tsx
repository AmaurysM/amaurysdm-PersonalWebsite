import React from "react";

interface SkillProps {
  name: string;
  level?: string;
}

const Skill = ({ name, level }: SkillProps) => (
  <div className="bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center text-gray-800 dark:text-gray-200 font-medium hover:-translate-y-1 transition-transform duration-200">
      <span>{name}</span>
      {/* {level && (
        <span className="text-gray-500 dark:text-gray-400 ml-2">
          {level}
        </span>
      )} */}
  </div>
);

export default Skill;
