import { JSX } from "react";

const Section = ({ id, className, children }:
    { id: string, className?: string, children?: JSX.Element }
) => (
    <section id={id} className={`py-24 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
);

export default Section;