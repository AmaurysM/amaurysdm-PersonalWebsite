import { motion } from 'framer-motion';
import React from 'react'

const Skill = ({ name }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center text-gray-800 dark:text-gray-200 font-medium"
    >
      {name}
    </motion.div>
  );
  

export default Skill