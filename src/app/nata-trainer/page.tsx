"use client"

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";
import WaveBackground from "./components/page";

export interface Submodule {
    _id: string;
    moduleId: string;
    code: string;
    title: string;
    description: string;
    requiresPractical: boolean;
    requiresOJT: boolean;
    requiredSignatures: number;
}


const submodules: Submodule[] = [
    {
        _id: "sm-001",
        moduleId: "6933613ed591d333cd6bbce9",
        code: "B001-01",
        title: "General Aviation Overview",
        description: "Introduction to general aviation operations and aircraft types",
        requiresPractical: false,
        requiresOJT: false,
        requiredSignatures: 1
    },
    {
        _id: "sm-002",
        moduleId: "6933613ed591d333cd6bbce9",
        code: "B001-02",
        title: "Business Aviation Basics",
        description: "Understanding business aviation missions and flight profiles",
        requiresPractical: false,
        requiresOJT: false,
        requiredSignatures: 1
    },
    {
        _id: "sm-003",
        moduleId: "6933613ed591d333cd6bbce9",
        code: "B001-03",
        title: "Airport Apron Safety",
        description: "Ramp hazards, safety zones, and aircraft movement awareness",
        requiresPractical: true,
        requiresOJT: true,
        requiredSignatures: 3
    },
    {
        _id: "sm-004",
        moduleId: "6933613ed591d333cd6bbce9",
        code: "B001-04",
        title: "Security & Access Control",
        description: "Badge access, escort procedures, and security compliance",
        requiresPractical: false,
        requiresOJT: true,
        requiredSignatures: 2
    }
];

const studentProgress = {
    "sm-001": { completed: true, signatures: 1 },
    "sm-002": { completed: true, signatures: 1 },
    "sm-003": { completed: false, signatures: 1 },
    "sm-004": { completed: false, signatures: 0 }
};


export default function NataTrainer() {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(0.5);

    useEffect(() => {
        const updateScale = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const iframeWidth = 1440;
                const calculatedScale = containerWidth / iframeWidth;
                setScale(calculatedScale);
            }
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const iframeWidth = 1440;
    const iframeHeight = 900;
    const scaledHeight = iframeHeight * scale;

    return (
        <main className="relative bg-slate-950/60 text-slate-100 overflow-hidden">
            <div className="fixed inset-0 -z-10 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
                <WaveBackground />
            </div>

            {/* Top bar – responsive */}
            <div className="flex items-center text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/50 border border-slate-700/50">
                <div
                    onClick={() => (window.location.href = "https://www.amaurysdelossantos.com")}
                    className="flex-1 px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-slate-700/70 transition cursor-pointer"
                >
                    Return
                </div>
                <div className="px-3 sm:px-4">Line Trainer</div>
            </div>

            {/* Hero section */}
            <section className="relative py-16 sm:py-24 min-h-[90vh] flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center relative z-10">
                    <div className="space-y-4 sm:space-y-6">
                        <div
                            onClick={() => window.open("https://www.linetrainer.org", "_blank", "noopener,noreferrer")}
                            className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-500/10 text-blue-400 text-[0.6rem] sm:text-xs font-medium border border-blue-500/20 uppercase tracking-wider cursor-pointer"
                        >
                            Live Platform
                            <FaExternalLinkAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white">
                            Line Trainer
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-lg leading-relaxed">
                            Comprehensive training management system for National Air Transportation Association.
                            Track progress, manage certifications, and streamline aviation training across organizations.
                        </p>

                        <div className="flex flex-wrap gap-1 sm:gap-2 pt-2">
                            {["Next.js", "TypeScript", "MongoDB", "Multi-Tenant"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 sm:px-3 sm:py-1 text-[0.6rem] sm:text-xs font-medium text-slate-400 bg-slate-800/50 border border-slate-700/50"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Responsive iframe container */}
                    <div ref={containerRef} className="relative w-full">
                        <div
                            className="relative border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl overflow-hidden rounded-xs"
                            style={{ height: `${scaledHeight}px` }}
                        >
                            <div
                                className="absolute top-0 left-0 pointer-events-none"
                                style={{
                                    width: `${iframeWidth}px`,
                                    height: `${iframeHeight}px`,
                                    transform: `scale(${scale})`,
                                    transformOrigin: 'top left'
                                }}
                            >
                                <iframe
                                    src="https://www.linetrainer.org"
                                    className="w-full h-full border-none"
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                    sandbox="allow-scripts allow-same-origin"
                                    title="Line Trainer Platform Preview"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Features Grid */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                        {[
                            {
                                title: "Multi-Organization",
                                desc: "Separate training environments for each aviation organization",
                            },
                            {
                                title: "Progress Tracking",
                                desc: "Real-time module completion and certification tracking",
                            },
                            {
                                title: "Digital Sign-Offs",
                                desc: "Trainer-verified digital signatures for compliance",
                            }
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="border border-slate-800/50 bg-slate-900/30 p-4 sm:p-6 hover:border-slate-700/50 transition-colors"
                            >
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Module Info - Coordinator Analytics View */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
                            Coordinator Dashboard
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-3xl">
                            Comprehensive analytics and oversight for training coordinators. Monitor progress across all students,
                            track completion rates, and identify areas needing attention.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
                        {/* Statistics Cards */}
                        <div className="space-y-3 sm:space-y-4">
                            <div className="bg-slate-900/50 border border-slate-700/50 p-4 sm:p-6">
                                <div className="flex items-center justify-between mb-2 sm:mb-4">
                                    <div>
                                        <h3 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase mb-1">Overall Progress</h3>
                                        <p className="text-3xl sm:text-4xl font-bold text-white">78%</p>
                                    </div>
                                </div>
                                <div className="w-full bg-slate-800 h-1.5 sm:h-2 rounded-full">
                                    <div className="bg-blue-600 h-1.5 sm:h-2 rounded-full" style={{ width: '78%' }}></div>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 border border-slate-700/50 p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase mb-1">Tasks Completed</h3>
                                        <p className="text-3xl sm:text-4xl font-bold text-white">142</p>
                                        <p className="text-xs text-slate-500 mt-1">58 in progress</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 border border-slate-700/50 p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase mb-1">Needs Attention</h3>
                                        <p className="text-3xl sm:text-4xl font-bold text-white">12</p>
                                        <p className="text-xs text-slate-500 mt-1">Tasks requiring action</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Student Progress List Preview */}
                        <div className="bg-slate-900/50 border border-slate-700/50 p-4 sm:p-6">
                            <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Student Progress (24)</h3>
                            <div className="space-y-2 sm:space-y-3">
                                {[
                                    { name: "Sarah Johnson", progress: 95, status: "completed" },
                                    { name: "Michael Chen", progress: 67, status: "in-progress" },
                                    { name: "Emma Davis", progress: 42, status: "in-progress" },
                                    { name: "James Wilson", progress: 23, status: "needs-attention" }
                                ].map((student) => (
                                    <div key={student.name} className="bg-slate-800/50 border border-slate-700/50 p-2 sm:p-3">
                                        <div className="flex items-center justify-between mb-1 sm:mb-2">
                                            <span className="text-xs sm:text-sm font-medium text-white">{student.name}</span>
                                            <span className={`text-[0.6rem] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded ${student.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                                    student.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                                                        'bg-orange-500/20 text-orange-400'
                                                }`}>
                                                {student.progress}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-slate-700 h-1 sm:h-1.5 rounded-full">
                                            <div
                                                className={`h-1 sm:h-1.5 rounded-full ${student.progress >= 75 ? 'bg-green-500' :
                                                        student.progress >= 50 ? 'bg-blue-500' :
                                                            student.progress >= 25 ? 'bg-yellow-500' :
                                                                'bg-red-500'
                                                    }`}
                                                style={{ width: `${student.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Submodule Completion Stats */}
                    <div className="bg-slate-900/50 border border-slate-700/50 p-4 sm:p-6">
                        <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Submodule Completion Rates</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {[
                                { code: "AS-101", name: "Aircraft Systems Intro", rate: 92 },
                                { code: "SP-201", name: "Safety Procedures", rate: 78 },
                                { code: "GO-301", name: "Ground Operations", rate: 65 },
                                { code: "FP-401", name: "Flight Planning", rate: 45 },
                                { code: "MT-501", name: "Maintenance Tracking", rate: 38 },
                                { code: "ER-601", name: "Emergency Response", rate: 25 }
                            ].map((sub) => (
                                <div key={sub.code} className="space-y-1 sm:space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[0.6rem] sm:text-xs font-medium text-blue-400">{sub.code}</span>
                                        <span className={`text-[0.6rem] sm:text-xs font-semibold ${sub.rate >= 75 ? 'text-green-400' :
                                                sub.rate >= 50 ? 'text-yellow-400' :
                                                    'text-red-400'
                                            }`}>
                                            {sub.rate}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1 sm:h-1.5 rounded-full">
                                        <div
                                            className={`h-1 sm:h-1.5 rounded-full ${sub.rate >= 75 ? 'bg-green-500' :
                                                    sub.rate >= 50 ? 'bg-yellow-500' :
                                                        'bg-red-500'
                                                }`}
                                            style={{ width: `${sub.rate}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-[0.6rem] sm:text-xs text-slate-500">{sub.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Module Content - Student/Trainer View */}
            <section className="py-16 sm:py-24 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
                            Student Training Interface
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-3xl">
                            Interactive module view where students track their progress, complete requirements,
                            and receive trainer sign-offs. Real-time updates keep everyone synchronized.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Main Module List */}
                        <div className="lg:col-span-2 space-y-2 sm:space-y-3">
                            {/* Progress Bar Card */}
                            <div className="bg-slate-900/50 border border-slate-700/50 p-4 sm:p-6 mb-4 sm:mb-6">
                                <div className="flex items-center justify-between mb-2 sm:mb-4">
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Module Progress</h3>
                                        <p className="text-xs sm:text-sm text-slate-400 mt-0.5">6 of 8 submodules completed</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl sm:text-3xl font-semibold text-white">75%</div>
                                    </div>
                                </div>
                                <div className="w-full bg-slate-800 h-1.5 sm:h-2 rounded-full">
                                    <div className="bg-blue-600 h-1.5 sm:h-2 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
                                </div>
                            </div>

                            {/* Submodule Items */}
                            {submodules.map((sub) => {
                                const progress = studentProgress[sub._id] ?? { completed: false, signatures: 0 };

                                return (
                                    <div
                                        key={sub._id}
                                        className="bg-slate-900/50 border border-slate-700/50 p-3 sm:p-4 hover:border-slate-600/50 transition-colors"
                                    >
                                        <div className="flex items-start gap-2 sm:gap-3">
                                            <div className="mt-0.5">
                                                {progress.completed ? (
                                                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                                                        <span className="text-white text-[0.6rem] sm:text-xs">✓</span>
                                                    </div>
                                                ) : (
                                                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-slate-600 rounded-full"></div>
                                                )}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                                                    <span className="text-[0.6rem] sm:text-xs font-medium text-blue-400 bg-blue-500/10 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded">
                                                        {sub.code}
                                                    </span>
                                                    <h4 className="text-sm sm:text-base font-semibold text-white truncate">{sub.title}</h4>
                                                </div>

                                                <p className="text-xs sm:text-sm text-slate-400 mb-1 sm:mb-2">{sub.description}</p>

                                                <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                                                    <span
                                                        className={`text-[0.6rem] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-0.5 font-medium rounded ${progress.completed
                                                                ? "bg-green-500/20 text-green-400"
                                                                : "bg-orange-500/20 text-orange-400"
                                                            }`}
                                                    >
                                                        {progress.completed ? "Complete" : "In Progress"}
                                                    </span>

                                                    {/* Signatures */}
                                                    <div className="flex items-center gap-0.5 sm:gap-1">
                                                        {Array.from({ length: sub.requiredSignatures }).map((_, i) => (
                                                            <div
                                                                key={i}
                                                                className={`w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center rounded text-[0.6rem] sm:text-xs ${i < progress.signatures
                                                                        ? "bg-green-500/20 text-green-400"
                                                                        : "bg-slate-700 text-slate-500"
                                                                    }`}
                                                            >
                                                                ✓
                                                            </div>
                                                        ))}
                                                        <span className="text-[0.6rem] sm:text-xs text-slate-500 ml-0.5 sm:ml-1">
                                                            {progress.signatures}/{sub.requiredSignatures}
                                                        </span>
                                                    </div>

                                                    {sub.requiresPractical && (
                                                        <span className="text-[0.6rem] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-red-500/20 text-red-400 rounded">
                                                            Practical
                                                        </span>
                                                    )}

                                                    {sub.requiresOJT && (
                                                        <span className="text-[0.6rem] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-blue-500/20 text-blue-400 rounded">
                                                            OJT
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {!progress.completed && (
                                                <button className="px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-600 text-white text-[0.6rem] sm:text-xs font-medium rounded hover:bg-blue-700 transition-colors">
                                                    Sign
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-3 sm:space-y-4">
                            {/* Overview Stats */}
                            <div className="bg-slate-900/50 border border-slate-700/50 p-3 sm:p-4">
                                <h3 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">Overview</h3>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs sm:text-sm text-slate-400">Completed</span>
                                        <span className="text-xs sm:text-sm font-semibold text-green-400">6</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs sm:text-sm text-slate-400">In Progress</span>
                                        <span className="text-xs sm:text-sm font-semibold text-orange-400">2</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs sm:text-sm text-slate-400">Total</span>
                                        <span className="text-xs sm:text-sm font-semibold text-white">8</span>
                                    </div>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="bg-slate-900/50 border border-slate-700/50 p-3 sm:p-4">
                                <div className="flex items-center justify-between mb-2 sm:mb-3">
                                    <h3 className="text-xs sm:text-sm font-semibold text-white">Notes</h3>
                                    <button className="text-slate-400 hover:text-white">
                                        <span className="text-[0.6rem] sm:text-xs">✏️</span>
                                    </button>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-400">
                                    Focus on hydraulic systems practical this week. Trainer available Tue-Thu for sign-offs.
                                </p>
                            </div>

                            {/* Student Info */}
                            <div className="bg-slate-900/50 border border-slate-700/50 p-3 sm:p-4">
                                <h3 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">Student</h3>
                                <div className="space-y-1.5 sm:space-y-2">
                                    <div>
                                        <label className="block text-[0.6rem] sm:text-xs text-slate-500 mb-0.5">Name</label>
                                        <div className="text-xs sm:text-sm font-medium text-white">Sarah Johnson</div>
                                    </div>
                                    <div>
                                        <label className="block text-[0.6rem] sm:text-xs text-slate-500 mb-0.5">Email</label>
                                        <div className="text-xs sm:text-sm text-slate-400">sarah.j@aviation.com</div>
                                    </div>
                                    <div>
                                        <label className="block text-[0.6rem] sm:text-xs text-slate-500 mb-0.5">Status</label>
                                        <span className="inline-block px-1.5 py-0.5 sm:px-2 sm:py-0.5 text-[0.6rem] sm:text-xs font-medium bg-blue-500/20 text-blue-400 rounded">
                                            In Progress
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Role-Based Access Section */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div className="space-y-3 sm:space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Role-Based Access
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-lg">
                            Three-tier permission system designed for aviation training workflows.
                            Students learn, trainers verify, coordinators manage.
                        </p>
                        <ul className="space-y-1 sm:space-y-2 pt-2 sm:pt-4">
                            {[
                                "Students: View assigned modules and track progress",
                                "Trainers: Sign off on completed practical requirements",
                                "Coordinators: Full organization administration",
                                "Email invitation system with secure onboarding"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                                    <span className="text-blue-400 mt-1">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="relative border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-xl overflow-hidden p-4 sm:p-8">
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-green-500/10 border border-green-500/20">
                                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                                        S
                                    </div>
                                    <div>
                                        <div className="text-sm sm:text-base font-semibold text-white">Student</div>
                                        <div className="text-[0.6rem] sm:text-xs text-slate-400">Complete training modules</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-blue-500/10 border border-blue-500/20">
                                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                                        T
                                    </div>
                                    <div>
                                        <div className="text-sm sm:text-base font-semibold text-white">Trainer</div>
                                        <div className="text-[0.6rem] sm:text-xs text-slate-400">Verify and sign off progress</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-purple-500/10 border border-purple-500/20">
                                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                                        C
                                    </div>
                                    <div>
                                        <div className="text-sm sm:text-base font-semibold text-white">Coordinator</div>
                                        <div className="text-[0.6rem] sm:text-xs text-slate-400">Manage organization</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Module Management Section */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-xl overflow-hidden p-4 sm:p-8">
                            <div className="space-y-4 sm:space-y-6">
                                <div>
                                    <div className="flex justify-between text-xs sm:text-sm mb-1 sm:mb-2">
                                        <span className="text-slate-300">Aircraft Systems</span>
                                        <span className="text-slate-400">75%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1.5 sm:h-2 rounded-full overflow-hidden">
                                        <div className="bg-green-500 h-full" style={{ width: '75%' }}></div>
                                    </div>
                                    <div className="text-[0.6rem] sm:text-xs text-slate-500 mt-1">6 of 8 submodules complete</div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs sm:text-sm mb-1 sm:mb-2">
                                        <span className="text-slate-300">Safety Procedures</span>
                                        <span className="text-slate-400">50%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1.5 sm:h-2 rounded-full overflow-hidden">
                                        <div className="bg-yellow-500 h-full" style={{ width: '50%' }}></div>
                                    </div>
                                    <div className="text-[0.6rem] sm:text-xs text-slate-500 mt-1">3 of 6 submodules complete</div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs sm:text-sm mb-1 sm:mb-2">
                                        <span className="text-slate-300">Ground Operations</span>
                                        <span className="text-slate-400">25%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1.5 sm:h-2 rounded-full overflow-hidden">
                                        <div className="bg-red-500 h-full" style={{ width: '25%' }}></div>
                                    </div>
                                    <div className="text-[0.6rem] sm:text-xs text-slate-500 mt-1">2 of 8 submodules complete</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Module Management
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-lg">
                            Hierarchical training structure with modules and submodules.
                            Track completion, manage requirements, and maintain version history.
                        </p>
                        <ul className="space-y-1 sm:space-y-2 pt-2 sm:pt-4">
                            {[
                                "Master modules with nested submodules",
                                "Practical requirement flagging",
                                "On-the-Job Training (OJT) designation",
                                "Version tracking for curriculum updates"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                                    <span className="text-purple-400 mt-1">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Dashboard Analytics Section */}
            <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-32">
                <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div className="space-y-4 sm:space-y-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                            Dashboard Analytics
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
                            Comprehensive overview of training progress across your organization.
                            Real-time statistics, activity feeds, and completion tracking.
                        </p>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                "User statistics by role distribution",
                                "Module completion percentages",
                                "Recent activity timeline",
                                "Active user tracking (30-day window)"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-300">
                                    <span className="text-purple-400 mt-1">→</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative border border-white/10 backdrop-blur-sm overflow-hidden bg-slate-900/50 p-4 sm:p-8">
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                            <div className="bg-slate-800/50 border border-slate-700/50 p-2 sm:p-4">
                                <div className="text-[0.6rem] sm:text-xs text-slate-400 uppercase mb-1">Total Users</div>
                                <div className="text-xl sm:text-3xl font-bold text-white">47</div>
                                <div className="text-[0.5rem] sm:text-xs text-green-400 mt-1">+3 this week</div>
                            </div>
                            <div className="bg-slate-800/50 border border-slate-700/50 p-2 sm:p-4">
                                <div className="text-[0.6rem] sm:text-xs text-slate-400 uppercase mb-1">Modules</div>
                                <div className="text-xl sm:text-3xl font-bold text-white">12</div>
                                <div className="text-[0.5rem] sm:text-xs text-slate-400 mt-1">84 submodules</div>
                            </div>
                            <div className="bg-slate-800/50 border border-slate-700/50 p-2 sm:p-4">
                                <div className="text-[0.6rem] sm:text-xs text-slate-400 uppercase mb-1">Signatures</div>
                                <div className="text-xl sm:text-3xl font-bold text-white">328</div>
                                <div className="text-[0.5rem] sm:text-xs text-slate-400 mt-1">21 in last 7 days</div>
                            </div>
                            <div className="bg-slate-800/50 border border-slate-700/50 p-2 sm:p-4">
                                <div className="text-[0.6rem] sm:text-xs text-slate-400 uppercase mb-1">Active Users</div>
                                <div className="text-xl sm:text-3xl font-bold text-white">38</div>
                                <div className="text-[0.5rem] sm:text-xs text-slate-400 mt-1">81% of total</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Stack Section */}
            <section className="py-16 sm:py-24 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">
                        Technical Stack
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
                            { category: "Backend", items: ["Next.js API", "MongoDB Native", "NextAuth.js", "Zod"] },
                            { category: "Features", items: ["Email (Resend)", "File Upload", "Search & Filter", "Responsive UI"] },
                            { category: "Data Models", items: ["User Management", "Module Hierarchy", "Signatures", "Companies"] }
                        ].map((group) => (
                            <div key={group.category} className="space-y-2 sm:space-y-3">
                                <h3 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                                    {group.category}
                                </h3>
                                <ul className="space-y-1 sm:space-y-2">
                                    {group.items.map((item) => (
                                        <li
                                            key={item}
                                            className="text-xs sm:text-sm text-slate-300 border-l-2 border-slate-700/50 pl-2 sm:pl-3 hover:border-blue-500/50 hover:text-white transition-colors"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Highlights Section */}
            <section className="py-16 sm:py-24 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">
                        Architecture Highlights
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {[
                            {
                                title: "Multi-Tenant Design",
                                points: [
                                    "Organization-level data segregation",
                                    "Company-specific user management",
                                    "Isolated training environments"
                                ]
                            },
                            {
                                title: "Data Integrity",
                                points: [
                                    "Soft deletion with data anonymization",
                                    "Archive system preserving full records",
                                    "Signature preservation for compliance"
                                ]
                            },
                            {
                                title: "User Lifecycle",
                                points: [
                                    "Email invitation with token expiry",
                                    "Active/archived user separation",
                                    "GDPR-compliant deletion process"
                                ]
                            },
                            {
                                title: "Training Management",
                                points: [
                                    "Hierarchical module structure",
                                    "Version-tracked curriculum",
                                    "Practical & OJT requirement flags"
                                ]
                            }
                        ].map((section) => (
                            <div key={section.title} className="border border-slate-800/50 bg-slate-900/30 p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                                    {section.title}
                                </h3>
                                <ul className="space-y-1 sm:space-y-2">
                                    {section.points.map((point) => (
                                        <li key={point} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                                            <span className="text-blue-400 mt-1">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complete Feature Set Section */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">
                        Complete Feature Set
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                        {[
                            "Multi-organization support",
                            "Role-based access control",
                            "Email invitation system",
                            "User profile management",
                            "Module assignment",
                            "Progress tracking",
                            "Digital signatures",
                            "Practical requirements",
                            "OJT designation",
                            "Version tracking",
                            "User archiving",
                            "Soft deletion",
                            "Search & filtering",
                            "Active/archived views",
                            "Dashboard analytics",
                            "Activity timeline",
                            "Completion statistics",
                            "Responsive design"
                        ].map((feature) => (
                            <div
                                key={feature}
                                className="text-xs sm:text-sm text-slate-300 border border-slate-800/50 bg-slate-900/20 px-2 py-1.5 sm:px-4 sm:py-2.5 hover:border-slate-700/50 hover:bg-slate-900/40 transition-colors"
                            >
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 sm:py-12 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-4">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">Line Trainer</h3>
                            <p className="text-xs sm:text-sm text-slate-400">
                                Aviation training management for the National Air Transportation Association
                            </p>
                        </div>
                        <div className="text-xs sm:text-sm text-slate-500">
                            <p>Next.js • TypeScript • MongoDB • NextAuth</p>
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-slate-800/50">
                        <p className="text-[0.6rem] sm:text-xs text-slate-500 leading-relaxed">
                            This showcase presents the core features and architecture of the Line Training Management System.
                            Built to streamline aviation training, certification tracking, and compliance across organizations.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}