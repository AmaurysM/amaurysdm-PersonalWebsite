import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type ContactCardProps = {
    icon: React.ReactElement
    title: string
    content: string
    href?: string
}

const CardContent = ({ icon, title, content }: Omit<ContactCardProps, 'href'>) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
    >
        <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
                {icon}
            </div>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 text-center">
            {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-center wrap-break-word max-w-full">
            {content}
        </p>
    </motion.div>
)


const ContactCard = ({ icon, title, content, href }: ContactCardProps) => {
    return href ? (
        <Link href={href}>
            <div className="block">
                <CardContent icon={icon} title={title} content={content} />
            </div>
        </Link>
    ) : (
        <CardContent icon={icon} title={title} content={content} />
    )
}

export default ContactCard
