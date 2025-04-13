import Link from 'next/link';
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800/50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Amaurys De Los Santos Mendez. All rights reserved.
                    </div>
                    <div className="flex space-x-4">
                        <Link
                            href="https://github.com/AmaurysM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            <FaGithub className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/amaurys-delossantos-mendez-2a57b1213"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            href="mailto:amaurysdlsm@gmail.com"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            <FaEnvelope className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer