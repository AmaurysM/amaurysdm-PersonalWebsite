"use client"

import { useState, useEffect, useRef } from "react";
import VoronoiBackground from "./components/VoronoiBackground";
import { FaExternalLinkAlt, FaGithub, FaGoogle } from "react-icons/fa";
import { VscFiles, VscNewFile, VscNewFolder, VscSearch } from "react-icons/vsc";
import { BiFolder } from "react-icons/bi";
import { FileIcon } from "lucide-react";
import { SiTypescript, SiNextdotjs, SiSupabase, SiVercel, SiTailwindcss } from "react-icons/si";

export default function Voronoi() {
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
            {/* Voronoi ambient background */}
            <div className="fixed inset-0 -z-10">
                <VoronoiBackground />
            </div>

            <div
                className="flex items-center text-sm font-medium text-slate-200 bg-slate-800/50 border border-slate-700/50 "
            >
                <div onClick={() => (window.location.href = "https://www.amaurysdelossantos.com")}
                    className="flex-1 px-4 py-2 hover:bg-slate-700/70 transition cursor-pointer">Return</div>
                <div className="px-4">Voronoi</div>
            </div>

            {/* HERO */}
            <section className="relative py-24 min-h-[90vh] flex items-center">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-6">
                        <div
                            onClick={() => window.open("https://www.voronoi.space", "_blank", "noopener,noreferrer")}
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 text-purple-400 text-xs font-medium border border-purple-500/20 uppercase tracking-wider cursor-pointer"
                        >
                            Live Platform
                            <FaExternalLinkAlt />
                        </div>

                        <h1 className="text-7xl font-bold tracking-tight text-white">
                            Voronoi
                        </h1>

                        <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                            Modern developer knowledge base for organizing libraries,
                            folders, and code snippets — designed to scale from personal
                            use to collaboration.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Next.js", "TypeScript", "Zustand", "Supabase"].map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 border border-slate-700/50"
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
                                    src="https://www.voronoi.space"
                                    className="w-full h-full border-none"
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                    sandbox="allow-scripts allow-same-origin"
                                    title="Voronoi Platform Preview"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Library Management",
                                desc: "Create and manage libraries with nested folder structures designed to scale."
                            },
                            {
                                title: "Code Snippets",
                                desc: "Save, categorize, and retrieve code snippets instantly with full syntax highlighting."
                            },
                            {
                                title: "Fast State Management",
                                desc: "Zustand-powered global state with optimistic UI updates and minimal re-renders."
                            }
                        ].map(feature => (
                            <div
                                key={feature.title}
                                className="border border-slate-800/50 bg-slate-900/30 p-6 hover:border-slate-700/50 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURE DETAIL 1 */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-white">
                            Library Organization
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                            Organize your developer knowledge into structured libraries with nested folders and files.
                            Built for scalability from personal use to team collaboration.
                        </p>
                        <ul className="space-y-2 pt-4">
                            {[
                                "Create unlimited libraries and folders",
                                "Nested hierarchy for complex organization",
                                "Fast search and navigation",
                                "Export and import functionality"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-purple-400 mt-1">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="relative border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-xl overflow-hidden">
                            {/* Mock Voronoi Sidebar */}
                            <div className="h-125 flex bg-[#1e1e1e] text-[#cccccc]">
                                {/* Activity Bar */}
                                <div className="w-12 bg-[#333333] border-r border-[#3e3e42] flex flex-col items-center py-2">
                                    <button className="w-12 h-12 flex items-center justify-center text-white relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-white">
                                        <VscFiles className="w-6 h-6" />
                                    </button>
                                    <button className="w-12 h-12 flex items-center justify-center text-[#858585] hover:text-white transition-colors">
                                        <VscSearch className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Sidebar */}
                                <div className="flex-1 bg-[#252526] border-r border-[#3e3e42] flex flex-col">
                                    <div className="h-9 flex items-center justify-between px-3 border-b border-[#3e3e42]">
                                        <h3 className="text-[11px] font-medium uppercase tracking-wider">Explorer</h3>
                                        <div className="flex items-center gap-1">
                                            <button className="p-1.5 hover:bg-[#2a2d2e] transition-colors">
                                                <VscNewFile className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 hover:bg-[#2a2d2e] transition-colors">
                                                <VscNewFolder className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* File Tree */}
                                    <div className="flex-1 overflow-auto py-2">
                                        <div className="flex items-center h-6 px-2 hover:bg-[#2a2d2e] cursor-pointer">
                                            <BiFolder className="w-4 h-4 mr-1.5 shrink-0 text-[#dcb67a]" />
                                            <span className="text-[13px]">React Components</span>
                                        </div>

                                        <div className="flex items-center h-6 px-2 pl-5 bg-[#37373d]">
                                            <FileIcon className="w-4 h-4 mr-1.5 shrink-0" style={{ color: '#519aba' }} />
                                            <span className="text-[13px] flex-1">useAppStore</span>
                                            <span className="text-[11px] text-[#858585]">.ts</span>
                                        </div>

                                        <div className="flex items-center h-6 px-2 pl-5 hover:bg-[#2a2d2e] cursor-pointer">
                                            <FileIcon className="w-4 h-4 mr-1.5 shrink-0" style={{ color: '#519aba' }} />
                                            <span className="text-[13px] flex-1">TreeItem</span>
                                            <span className="text-[11px] text-[#858585]">.tsx</span>
                                        </div>

                                        <div className="flex items-center h-6 px-2 pl-5 hover:bg-[#2a2d2e] cursor-pointer">
                                            <FileIcon className="w-4 h-4 mr-1.5 shrink-0" style={{ color: '#519aba' }} />
                                            <span className="text-[13px] flex-1">SnippetView</span>
                                            <span className="text-[11px] text-[#858585]">.tsx</span>
                                        </div>

                                        <div className="flex items-center h-6 px-2 hover:bg-[#2a2d2e] cursor-pointer mt-2">
                                            <BiFolder className="w-4 h-4 mr-1.5 shrink-0 text-[#dcb67a]" />
                                            <span className="text-[13px]">Utilities</span>
                                        </div>

                                        <div className="flex items-center h-6 px-2 pl-5 hover:bg-[#2a2d2e] cursor-pointer">
                                            <FileIcon className="w-4 h-4 mr-1.5 shrink-0" style={{ color: '#519aba' }} />
                                            <span className="text-[13px] flex-1">formatDate</span>
                                            <span className="text-[11px] text-[#858585]">.ts</span>
                                        </div>
                                    </div>

                                    {/* Stats Footer */}
                                    <div className="border-t border-[#3e3e42] bg-[#2d2d30]">
                                        <div className="grid grid-cols-2 divide-x divide-[#3e3e42]">
                                            <div className="px-3 py-2">
                                                <div className="text-[10px] text-[#858585] uppercase tracking-wider mb-0.5">Libraries</div>
                                                <div className="text-[13px] font-medium">2</div>
                                            </div>
                                            <div className="px-3 py-2">
                                                <div className="text-[10px] text-[#858585] uppercase tracking-wider mb-0.5">Snippets</div>
                                                <div className="text-[13px] font-medium">4</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURE DETAIL 2 */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-xl overflow-hidden">
                            {/* Code editor preview */}
                            <div className="h-125 flex flex-col bg-[#1e1e1e]">
                                {/* Tab Bar */}
                                <div className="h-9 bg-[#252526] border-b border-[#3e3e42] flex items-center">
                                    <div className="flex items-center gap-2 px-3 py-1 bg-[#1e1e1e] border-t-2 border-t-[#007acc]">
                                        <SiTypescript className="w-4 h-4 text-[#519aba]" />
                                        <span className="text-[13px] text-[#cccccc]">useAppStore.ts</span>
                                    </div>
                                </div>

                                {/* Code Area */}
                                <div className="flex-1 bg-[#1e1e1e] p-4 font-mono text-[13px] overflow-auto">
                                    <pre className="text-[#d4d4d4]"><code><span className="text-[#c586c0]">import</span> {"{"} <span className="text-[#9cdcfe]">create</span> {"}"} <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'zustand'</span>{"\n"}
                                        <span className="text-[#c586c0]">import</span> {"{"} <span className="text-[#9cdcfe]">persist</span> {"}"} <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'zustand/middleware'</span>{"\n"}
                                        <span className="text-[#c586c0]">import</span> <span className="text-[#c586c0]">type</span> {"{"} <span className="text-[#4ec9b0]">Snippet</span> {"}"} <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'@/types'</span>{"\n\n"}
                                        <span className="text-[#6a9955]">// Global state for Voronoi app</span>{"\n"}
                                        <span className="text-[#c586c0]">interface</span> <span className="text-[#4ec9b0]">AppState</span> {"{"}{"\n"}
                                        {"  "}<span className="text-[#9cdcfe]">selectedSnippet</span>: <span className="text-[#4ec9b0]">Snippet</span> | <span className="text-[#569cd6]">null</span>{"\n"}
                                        {"  "}<span className="text-[#9cdcfe]">openTabs</span>: <span className="text-[#4ec9b0]">Snippet</span>[]{"\n"}
                                        {"  "}<span className="text-[#dcdcaa]">setSelectedSnippet</span>: <span className="text-[#569cd6]">(snippet: Snippet)</span> {"=>"} <span className="text-[#569cd6]">void</span>{"\n"}
                                        {"  "}<span className="text-[#dcdcaa]">addTab</span>: <span className="text-[#569cd6]">(snippet: Snippet)</span> {"=>"} <span className="text-[#569cd6]">void</span>{"\n"}
                                        {"}"}{"\n\n"}
                                        <span className="text-[#c586c0]">export</span> <span className="text-[#c586c0]">const</span> <span className="text-[#4fc1ff]">useAppStore</span> = <span className="text-[#dcdcaa]">create</span>&lt;<span className="text-[#4ec9b0]">AppState</span>&gt;({"("}<span className="text-[#9cdcfe]">set</span>{")"} {"=>"} {"("}{"\n"}
                                        {"  "}<span className="text-[#9cdcfe]">selectedSnippet</span>: <span className="text-[#569cd6]">null</span>,{"\n"}
                                        {"  "}<span className="text-[#9cdcfe]">openTabs</span>: [],{"\n"}
                                        {"  "}<span className="text-[#dcdcaa]">setSelectedSnippet</span>: <span className="text-[#569cd6]">(snippet)</span> {"=>"} <span className="text-[#dcdcaa]">set</span>({"{"} <span className="text-[#9cdcfe]">selectedSnippet</span>: snippet {"}"}),{"\n"}
                                        {"  "}<span className="text-[#dcdcaa]">addTab</span>: <span className="text-[#569cd6]">(snippet)</span> {"=>"} <span className="text-[#dcdcaa]">set</span>({"("}<span className="text-[#9cdcfe]">state</span>{")"} {"=>"} {"("}{"\n"}
                                        {"    "}{"{"} <span className="text-[#9cdcfe]">openTabs</span>: [...state.openTabs, snippet] {"}"}{"\n"}
                                        {"  "}{")"}{"}"}){"\n"}
                                        {"}"}{")"}{")"})</code></pre>
                                </div>

                                {/* Status Bar */}
                                <div className="h-6 bg-[#007acc] flex items-center justify-between px-3 text-[11px] text-white">
                                    <div className="flex items-center gap-4">
                                        <span>✓ Saved</span>
                                        <span className="opacity-80">useAppStore.ts</span>
                                    </div>
                                    <div className="flex items-center gap-4 opacity-80">
                                        <span>UTF-8</span>
                                        <span>TypeScript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 order-1 lg:order-2">
                        <h2 className="text-4xl font-bold text-white">
                            Code Snippet System
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                            Save and organize code snippets with full syntax highlighting.
                            Quick access to your most-used patterns and solutions.
                        </p>
                        <ul className="space-y-2 pt-4">
                            {[
                                "Syntax highlighting for all major languages",
                                "Tag and categorize snippets",
                                "Quick search and filtering",
                                "One-click copy to clipboard"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-purple-400 mt-1">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* TECH STACK */}
            <section className="py-24 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Technical Stack
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
                            { category: "State", items: ["Zustand", "SWR"] },
                            { category: "Backend", items: ["Supabase", "PostgreSQL", "NextAuth"] },
                            { category: "Tools", items: ["Vercel", "Prisma", "GitHub OAuth", "Google OAuth"] }
                        ].map((group) => (
                            <div key={group.category} className="space-y-3">
                                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    {group.category}
                                </h3>
                                <ul className="space-y-2">
                                    {group.items.map((item) => (
                                        <li
                                            key={item}
                                            className="text-sm text-slate-300 border-l-2 border-slate-700/50 pl-3 hover:border-purple-500/50 hover:text-white transition-colors"
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

            {/* ARCHITECTURE HIGHLIGHTS */}
            <section className="py-24 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Architecture Highlights
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Authentication",
                                points: [
                                    "OAuth via GitHub and Google",
                                    "NextAuth for session management",
                                    "Secure token handling"
                                ]
                            },
                            {
                                title: "Database Design",
                                points: [
                                    "PostgreSQL via Supabase",
                                    "Optimized schema for hierarchical data",
                                    "Real-time capabilities ready"
                                ]
                            },
                            {
                                title: "State Management",
                                points: [
                                    "Zustand for global client state",
                                    "Optimistic UI updates",
                                    "Minimal re-renders"
                                ]
                            },
                            {
                                title: "Developer Experience",
                                points: [
                                    "VSCode-inspired interface",
                                    "Keyboard shortcuts",
                                    "Dark mode by default"
                                ]
                            }
                        ].map((section) => (
                            <div key={section.title} className="border border-slate-800/50 bg-slate-900/30 p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2">
                                    {section.points.map((point) => (
                                        <li key={point} className="flex items-start gap-2 text-sm text-slate-400">
                                            <span className="text-purple-400 mt-1">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPLETE FEATURE SET */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Complete Feature Set
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            "Unlimited libraries",
                            "Nested folder structures",
                            "Code snippet management",
                            "Syntax highlighting",
                            "Quick search",
                            "Tag system",
                            "GitHub OAuth",
                            "Google OAuth",
                            "Secure authentication",
                            "Real-time sync",
                            "Export/import",
                            "Keyboard shortcuts",
                            "Dark mode",
                            "Responsive design",
                            "Fast performance",
                            "TypeScript support",
                            "PostgreSQL database",
                            "Scalable architecture"
                        ].map((feature) => (
                            <div
                                key={feature}
                                className="text-sm text-slate-300 border border-slate-800/50 bg-slate-900/20 px-4 py-2.5 hover:border-slate-700/50 hover:bg-slate-900/40 transition-colors"
                            >
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="relative py-12 border-t border-slate-800/50 
                   bg-slate-950/40 backdrop-blur-xs backdrop-saturate-100">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">Voronoi</h3>
                            <p className="text-sm text-slate-400">
                                Developer knowledge organization platform
                            </p>
                        </div>
                        <div className="text-sm text-slate-500">
                            <p>Next.js • TypeScript • Supabase • Zustand</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-800/50">
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Production-ready architecture designed for scalability. Built to evolve from personal
                            knowledge base to collaborative platform with real-time features.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}