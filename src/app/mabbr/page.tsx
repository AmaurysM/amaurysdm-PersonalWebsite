"use client"

import Bubble from "./components/Bubble";
import { HeroShard } from "./components/hero-shard";
import { LootboxPreview } from "./components/lootbox-shard";
import SocialShard from "./components/social/social-shard";
import { StockShard } from "./components/stock-shard";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function MABBR() {
    const router = useRouter();

    return (
        <main className="relative bg-slate-950 text-slate-100 overflow-hidden">
            <div
                onClick={() => (window.location.href = "https://www.amaurysdelossantos.com")}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-200 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/70 transition cursor-pointer"
            >
                Return
            </div>

            <section className="relative py-24 min-h-[90vh] flex items-center">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-6">
                        <div
                            onClick={() => window.open("https://www.mabbr.net", "_blank", "noopener,noreferrer")}
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 uppercase tracking-wider cursor-pointer"
                        >
                            Live Platform
                            <FaExternalLinkAlt />
                        </div>

                        <h1 className="text-7xl font-bold tracking-tight text-white">
                            MABBR
                        </h1>

                        <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                            Paper trading platform with gamification, social features,
                            and AI-powered market insights. Built for learning without financial risk.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Next.js 15", "TypeScript", "Real-time Trading", "Gamified"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 border border-slate-700/50"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl overflow-hidden h-100">
                            <HeroShard />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Paper Trading",
                                desc: "Practice with virtual funds using real market data",
                            },
                            {
                                title: "Gamification",
                                desc: "Lootboxes, mini-games, and daily challenges",
                            },
                            {
                                title: "Social Features",
                                desc: "Chat, leaderboards, and community engagement",
                            }
                        ].map((feature) => (
                            <div key={feature.title} className="border border-slate-800/50 bg-slate-900/30 p-6 hover:border-slate-700/50 transition-colors">
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-white">
                            Paper Trading
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                            Trade with virtual funds using real market data. Test strategies,
                            learn market dynamics, and track portfolio performance without any financial risk.
                        </p>
                        <ul className="space-y-2 pt-4">
                            {[
                                "Real-time stock quotes via Alpha Vantage API",
                                "Portfolio tracking with performance analytics",
                                "Historical trade data and risk assessment",
                                "Market news integration"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-blue-400 mt-1">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="relative border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-xl overflow-hidden">
                            <StockShard symbol="AAPL" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative flex items-center justify-center min-h-100 border border-gray-700">
                            <LootboxPreview />
                        </div>
                    </div>

                    <div className="space-y-4 order-1 lg:order-2">
                        <h2 className="text-4xl font-bold text-white">
                            Gamification Layer
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                            Engage with markets through game mechanics. Earn rewards,
                            complete challenges, and unlock achievements as you learn.
                        </p>
                        <ul className="space-y-2 pt-4">
                            {[
                                "Daily market sentiment voting system",
                                "Lootbox rewards with token prizes",
                                "Trading mini-games (Stocket, predictions)",
                                "Scratch-off cards and achievement system"
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

            <div className="relative min-h-screen flex items-center justify-center px-6 py-32 ">
                <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-5xl font-bold text-white">
                            Social Trading
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Connect with traders globally. Share strategies, compete on leaderboards, and participate in community discussions.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Real-time global chat via WebSockets",
                                "Comment feeds on trades and strategies",
                                "Follow system and user profiles",
                                "Competitive leaderboard rankings"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-gray-300">
                                    <span className="text-purple-400 mt-1">→</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-130 lg:h-150 border border-white/10 backdrop-blur-sm overflow-hidden bg-[#171e29]">
                        <SocialShard />
                    </div>
                </div>
            </div>

            <section className="py-24 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Technical Stack
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { category: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"] },
                            { category: "Backend", items: ["Next.js API", "Prisma ORM", "MongoDB", "WebSockets"] },
                            { category: "Features", items: ["Chart.js", "D3.js", "OpenAI API", "AWS S3"] },
                            { category: "Auth & Tools", items: ["better-auth", "Zod", "SWR", "Framer Motion"] }
                        ].map((group) => (
                            <div key={group.category} className="space-y-3">
                                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    {group.category}
                                </h3>
                                <ul className="space-y-2">
                                    {group.items.map((item) => (
                                        <li
                                            key={item}
                                            className="text-sm text-slate-300 border-l-2 border-slate-700/50 pl-3 hover:border-blue-500/50 hover:text-white transition-colors"
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

            <section className="py-24 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Architecture Highlights
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Real-time Features",
                                points: [
                                    "WebSocket implementation for live chat",
                                    "SWR for optimistic UI updates",
                                    "Real-time market data integration"
                                ]
                            },
                            {
                                title: "Database Design",
                                points: [
                                    "Prisma ORM with MongoDB",
                                    "Optimized schema for trading data",
                                    "Session management with better-auth"
                                ]
                            },
                            {
                                title: "API Integration",
                                points: [
                                    "Alpha Vantage for market data",
                                    "OpenAI for AI insights",
                                    "AWS S3 for asset storage"
                                ]
                            },
                            {
                                title: "User Experience",
                                points: [
                                    "Multi-device authentication",
                                    "Theme customization",
                                    "Responsive design system"
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

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Complete Feature Set
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            "Virtual portfolio management",
                            "Real-time stock quotes",
                            "Trade execution & history",
                            "Performance analytics",
                            "Risk assessment scoring",
                            "Market news feed",
                            "AI trade suggestions",
                            "Global chat system",
                            "Comment & discussion feeds",
                            "User profiles & avatars",
                            "Leaderboard rankings",
                            "Daily sentiment voting",
                            "Lootbox reward system",
                            "Mini-game collection",
                            "Achievement tracking",
                            "Multi-device sessions",
                            "OAuth integration",
                            "Email verification"
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

            <footer className="py-12 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">MABBR</h3>
                            <p className="text-sm text-slate-400">
                                Senior project exploring financial UX and gamification
                            </p>
                        </div>
                        <div className="text-sm text-slate-500">
                            <p>Next.js 15 • TypeScript • Prisma • MongoDB</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-slate-800/50">
                        <p className="text-xs text-slate-500 leading-relaxed">
                            This showcase presents selected UI components and features from the MABBR platform.
                            Components are displayed in isolation to highlight interaction patterns and technical implementation.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}