import React from 'react'
const SectionHeading = ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-16 text-center">
      <span className="inline-block border-b-2 border-primary pb-2">{children}</span>
    </h2>
  );

export default SectionHeading