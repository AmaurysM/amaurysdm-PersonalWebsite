import { motion } from "framer-motion";
import { JSX } from "react";

const EducationCard = ({ degree, institution, period, children }:

    {
        degree: string, institution: string, period: string, children?: JSX.Element
    }) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
    >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{degree}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-1">{institution}</p>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{period}</p>
        {children}
    </motion.div>
);

export default EducationCard;