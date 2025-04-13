"use client";

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
                            <span className="text-primary">A</span>maurys
                        </a>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300"
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? (
                            <FaTimes className="h-6 w-6" />
                        ) : (
                            <FaBars className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-md">
                        {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navigation