import React from 'react'

const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="px-3 py-1 bg-amber-900/30 text-amber-200 rounded-full text-sm transition-colors hover:bg-amber-900/50">
        {skill}
    </span>
);

export default SkillBadge