"use client";

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer';

export enum Direction {
    LEFT,
    RIGHT,
}

const AnimatedSection = ({ children, direction }: { children: ReactNode, direction: Direction }) => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

    const fromLeft = direction === Direction.LEFT;
    return (
        <motion.div
            ref={ref}
            initial={{ x: fromLeft ? -100 : 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection