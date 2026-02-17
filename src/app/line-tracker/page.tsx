"use client"

import { useRef } from "react";
import { FaGasPump, FaUtensils, FaToilet, FaTint, FaOilCan, FaExternalLinkAlt } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa";
import { PiSprayBottleFill } from "react-icons/pi";
import AnimatedTaxiLines from "./components/lines";

export default function LineTrackerLanding() {

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main className="relative bg-slate-950/60 text-slate-100 overflow-hidden">

            <div className="fixed inset-0 -z-10">
                <AnimatedTaxiLines />
            </div>

            {/* Top bar – scaled down on mobile */}
            <div className="flex items-center text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/50 border border-slate-700/50">
                <div
                    onClick={() => (window.location.href = "https://www.amaurysdelossantos.com")}
                    className="flex-1 px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-slate-700/70 transition cursor-pointer"
                >
                    Return
                </div>
                <div className="px-3 sm:px-4">Line Tracker</div>
            </div>

            {/* Hero */}
            <section className="relative py-16 sm:py-24 min-h-[90vh] flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center relative z-10">
                    <div className="space-y-4 sm:space-y-6">
                        <div
                            onClick={() => window.open("https://line-tracker-hazel.vercel.app", "_blank", "noopener,noreferrer")}
                            className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-500/10 text-blue-400 text-[0.6rem] sm:text-xs font-medium border border-blue-500/20 uppercase tracking-wider cursor-pointer"
                        >
                            Live Platform
                            <FaExternalLinkAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white">
                            Line Tracker
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-lg leading-relaxed">
                            Real-time aircraft ground service tracking for airport ramp operations.
                            Replacing whiteboards and paper logs with structured, searchable records.
                        </p>

                        <div className="flex flex-wrap gap-1 sm:gap-2 pt-2">
                            {["Next.js", "TypeScript", "Real-time Tracking", "Ramp Operations", "Multi-User", "Interactive Map"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 sm:px-3 sm:py-1 text-[0.6rem] sm:text-xs font-medium text-slate-400 bg-slate-800/50 border border-slate-700/50"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Real Service Item Cards */}
                    <div ref={containerRef} className="relative w-full space-y-4">
                        {/* Card View Example */}
                        <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-lg">
                            <div className="flex items-stretch rounded-t-sm overflow-hidden">
                                <div className="px-3 sm:px-5 py-3 sm:py-4 flex-1 items-center bg-slate-900">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <h2 className="font-mono font-bold text-white text-sm sm:text-base tracking-wide">
                                            N123AB
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex">
                                    <button className="px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-center min-w-[4rem] sm:min-w-[5.625rem] bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                                        <span className="font-semibold text-white text-xs sm:text-sm tracking-wide">EDIT</span>
                                    </button>
                                    <button className="px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-center min-w-[4rem] sm:min-w-[5.625rem] bg-red-600 hover:bg-red-700 transition-colors duration-200 border-l border-red-500">
                                        <span className="font-semibold text-white text-xs sm:text-sm tracking-wide">DEL</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center rounded-b-sm bg-white">
                                {[
                                    { Icon: FaGasPump, color: "#f59e0b", bg: "#fffbeb", label: "Fuel" },
                                    { Icon: FaUtensils, color: "#10b981", bg: "#ecfdf5", label: "Catering" },
                                    { Icon: FaCarBattery, color: "#3b82f6", bg: "#eff6ff", label: "GPU" },
                                    { Icon: FaToilet, color: "#6366f1", bg: "#eef2ff", label: "Lavatory" },
                                ].map((service, idx) => (
                                    <div
                                        key={idx}
                                        className="flex-1 p-1 sm:p-2 h-10 sm:h-14 flex items-center justify-center transition-all hover:scale-110"
                                        style={{
                                            backgroundColor: service.bg,
                                            border: `1.5px solid ${service.color}30`,
                                        }}
                                        title={service.label}
                                    >
                                        <service.Icon className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: service.color }} />
                                    </div>
                                ))}
                            </div>
                            <div className="px-2 sm:px-3 py-1.5 sm:py-2 border-t border-gray-200 bg-gray-50/50">
                                <div className="flex items-center justify-between gap-1 sm:gap-2 flex-wrap">
                                    <div className="flex-1 flex items-center gap-1 sm:gap-3 text-nowrap">
                                        <div className="flex items-center gap-0.5 sm:gap-1">
                                            <span className="text-[0.6rem] sm:text-xs text-gray-500">↓</span>
                                            <span className="font-mono text-[0.6rem] sm:text-xs font-medium text-gray-800">1430</span>
                                        </div>
                                        <div className="flex items-center gap-0.5 sm:gap-1">
                                            <span className="text-[0.6rem] sm:text-xs text-gray-500">↑</span>
                                            <span className="font-mono text-[0.6rem] sm:text-xs font-medium text-gray-800">1800</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 items-center gap-1">
                                        <span className="text-[0.6rem] sm:text-xs text-gray-600 truncate">Executive charter</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List View Example (already responsive, but ensure container fits) */}
                        <div className="bg-white cursor-pointer border-l-2 border-l-slate-900 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center">
                                <div className="shrink-0 w-14 pl-2 sm:w-20 sm:pl-3">
                                    <div className="font-mono font-bold text-[0.65rem] sm:text-sm text-slate-900 tracking-wide">
                                        N456CD
                                    </div>
                                </div>
                                <div className="shrink-0 flex gap-0.5 sm:gap-3 text-[0.6rem] sm:text-xs">
                                    <div className="flex items-center gap-0.5 sm:gap-1">
                                        <span className="text-gray-500">↓</span>
                                        <span className="font-mono font-medium text-gray-800">0945</span>
                                    </div>
                                    <div className="flex items-center gap-0.5 sm:gap-1">
                                        <span className="text-gray-500">↑</span>
                                        <span className="font-mono font-medium text-gray-800">1215</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center gap-0.5 pl-1.5 pr-1 sm:gap-1 sm:pl-3 sm:pr-1.5">
                                    {[
                                        { Icon: FaGasPump, color: "#f59e0b" },
                                        { Icon: FaCarBattery, color: "#3b82f6" },
                                        { Icon: FaTint, color: "#06b6d4" },
                                    ].map((service, idx) => (
                                        <div
                                            key={idx}
                                            className="p-0.5 rounded transition-all hover:scale-110 sm:p-1.5"
                                            style={{
                                                backgroundColor: `${service.color}15`,
                                                border: `1.5px solid ${service.color}30`,
                                            }}
                                        >
                                            <service.Icon
                                                className="w-3 h-3 sm:w-5 sm:h-5"
                                                style={{ color: service.color }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="shrink-0 flex h-8 sm:h-10">
                                    <button className="px-1.5 py-0.5 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-[0.6rem] font-semibold sm:px-3 sm:py-1.5 sm:text-xs">
                                        EDIT
                                    </button>
                                    <button className="px-1.5 py-0.5 bg-red-600 hover:bg-red-700 transition-colors text-white text-[0.6rem] font-semibold sm:px-3 sm:py-1.5 sm:text-xs">
                                        DEL
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Completed Item Example (already responsive) */}
                        <div className="cursor-pointer border-l-2 border-l-green-500 bg-green-50/30 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center">
                                <div className="shrink-0 w-14 pl-2 sm:w-20 sm:pl-3">
                                    <div className="font-mono font-bold text-[0.65rem] sm:text-sm text-slate-900 tracking-wide">
                                        N789EF
                                    </div>
                                </div>
                                <div className="shrink-0 flex gap-0.5 sm:gap-3 text-[0.6rem] sm:text-xs">
                                    <div className="flex items-center gap-0.5 sm:gap-1">
                                        <span className="text-gray-500">↓</span>
                                        <span className="font-mono font-medium text-gray-800">0800</span>
                                    </div>
                                    <div className="flex items-center gap-0.5 sm:gap-1">
                                        <span className="text-gray-500">↑</span>
                                        <span className="font-mono font-medium text-gray-800">1030</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center gap-0.5 pl-1.5 pr-1 sm:gap-1 sm:pl-3 sm:pr-1.5">
                                    {[
                                        { Icon: FaGasPump, color: "#f59e0b" },
                                        { Icon: FaOilCan, color: "#f97316" },
                                    ].map((service, idx) => (
                                        <div
                                            key={idx}
                                            className="p-0.5 rounded transition-all hover:scale-110 sm:p-1.5"
                                            style={{
                                                backgroundColor: `${service.color}10`,
                                                border: `1.5px dashed ${service.color}40`,
                                            }}
                                        >
                                            <div className="relative w-3 h-3 sm:w-5 sm:h-5">
                                                <service.Icon
                                                    className="w-3 h-3 sm:w-5 sm:h-5 opacity-60"
                                                    style={{ color: service.color }}
                                                />
                                                <div className="absolute -inset-0.5 sm:-inset-1">
                                                    <div className="h-0.5 w-full bg-green-500 rotate-45 transform origin-center absolute top-1/2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="shrink-0 flex h-8 sm:h-10">
                                    <button className="px-1.5 py-0.5 bg-yellow-600 hover:bg-yellow-700 transition-colors text-white text-[0.6rem] font-semibold sm:px-3 sm:py-1.5 sm:text-xs">
                                        UNDO
                                    </button>
                                    <button className="px-1.5 py-0.5 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-[0.6rem] font-semibold sm:px-3 sm:py-1.5 sm:text-xs">
                                        EDIT
                                    </button>
                                    <button className="px-1.5 py-0.5 bg-red-600 hover:bg-red-700 transition-colors text-white text-[0.6rem] font-semibold sm:px-3 sm:py-1.5 sm:text-xs">
                                        DEL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Overview */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                        {[
                            {
                                title: "Service Tracking",
                                desc: "Track fuel, catering, GPU, lavatory, water, and more in real time",
                            },
                            {
                                title: "Single-Page Board",
                                desc: "Everything on one screen — no navigation, fast scanning",
                            },
                            {
                                title: "Built for Ramps",
                                desc: "Designed around actual line tech workflows, not generic task apps",
                            }
                        ].map((feature) => (
                            <div key={feature.title} className="border border-slate-800/50 bg-slate-900/30 p-4 sm:p-6 hover:border-slate-700/50 transition-colors">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Authentication & Multi-User */}
            <section className="py-16 sm:py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div className="space-y-3 sm:space-y-4">
                        <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-500/10 text-blue-400 text-[0.6rem] sm:text-xs font-medium border border-blue-500/20 uppercase tracking-wider">
                            Authentication & Teams
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Shared Across Your Team
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-lg">
                            Line Tracker shares its authentication and user database with NATA Trainer.
                            If your team already has accounts there, they can log in here instantly — no separate sign-up required.
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-lg">
                            All users within the same organization share a live view of the same service board.
                            Aircraft and service items created by one team member are immediately visible to everyone else on the ramp.
                        </p>
                        <ul className="space-y-1 sm:space-y-2 pt-2">
                            {[
                                "Single sign-on via NATA Trainer account",
                                "No standalone account creation",
                                "Organization-scoped service items",
                                "Live shared board across all team members",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                                    <span className="text-blue-400 mt-1">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-xl p-4 sm:p-8 space-y-4 sm:space-y-6">
                        <h3 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider pb-2 sm:pb-3 border-b border-slate-700/50">
                            User Roles
                        </h3>
                        {[
                            {
                                role: "Student",
                                desc: "Can view and interact with service items within their organization",
                                color: "bg-slate-500/20 text-slate-300 border-slate-500/30",
                            },
                            {
                                role: "Trainer",
                                desc: "Can view and interact with service items within their organization",
                                color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
                            },
                            {
                                role: "Coordinator",
                                desc: "Full access including organization-wide management",
                                color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
                            },
                        ].map((r) => (
                            <div key={r.role} className="flex items-start gap-2 sm:gap-4 p-3 sm:p-4 bg-slate-800/40 border border-slate-700/40">
                                <span className={`shrink-0 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[0.6rem] sm:text-xs font-semibold border ${r.color}`}>
                                    {r.role}
                                </span>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{r.desc}</p>
                            </div>
                        ))}
                        <p className="text-[0.6rem] sm:text-xs text-slate-600 pt-2">
                            Roles are inherited from NATA Trainer and cannot be set independently in Line Tracker.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Items */}
            <section className="py-16 sm:py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div className="space-y-3 sm:space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Aircraft Service Items
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-lg">
                            Each aircraft visit is tracked as a Service Item with tail number,
                            arrival/departure times, requested services, and completion status.
                        </p>
                        <ul className="space-y-1 sm:space-y-2 pt-2 sm:pt-4">
                            {[
                                "Track multiple services per aircraft",
                                "Independent completion tracking",
                                "Arrival and departure time logging",
                                "Soft deletion for audit preservation"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                                    <span className="text-emerald-400 mt-1">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="relative border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-xl overflow-hidden p-4 sm:p-8">
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center justify-between pb-2 sm:pb-4 border-b border-slate-700/50">
                                    <div>
                                        <div className="text-[0.6rem] sm:text-xs text-slate-500 uppercase tracking-wider">Tail Number</div>
                                        <div className="text-xl sm:text-2xl font-bold text-white font-mono">N123AB</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[0.6rem] sm:text-xs text-slate-500">Type</div>
                                        <div className="text-xs sm:text-sm text-slate-300">G650</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                                    <div>
                                        <div className="text-[0.6rem] sm:text-xs text-slate-500">Arrival</div>
                                        <div className="text-xs sm:text-sm text-slate-300 font-mono">14:30</div>
                                    </div>
                                    <div>
                                        <div className="text-[0.6rem] sm:text-xs text-slate-500">Departure</div>
                                        <div className="text-xs sm:text-sm text-slate-300 font-mono">18:00</div>
                                    </div>
                                </div>

                                <div className="space-y-1 sm:space-y-2 pt-2">
                                    <div className="text-[0.6rem] sm:text-xs text-slate-500 uppercase tracking-wider">Services</div>
                                    {[
                                        { name: "Fuel", Icon: FaGasPump, status: "completed", color: "#f59e0b" },
                                        { name: "Catering", Icon: FaUtensils, status: "completed", color: "#10b981" },
                                        { name: "GPU", Icon: FaCarBattery, status: "active", color: "#3b82f6" },
                                        { name: "Lavatory", Icon: FaToilet, status: "pending", color: "#6366f1" },
                                    ].map((service) => (
                                        <div key={service.name} className="flex items-center justify-between p-1.5 sm:p-2 bg-slate-800/50 border border-slate-700/50">
                                            <div className="flex items-center gap-1 sm:gap-2">
                                                <service.Icon className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: service.color }} />
                                                <span className="text-xs sm:text-sm text-slate-300">{service.name}</span>
                                            </div>
                                            <span className={`text-[0.6rem] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 ${service.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
                                                service.status === 'active' ? 'bg-blue-500/20 text-blue-400' :
                                                    'bg-slate-700/50 text-slate-500'
                                                }`}>
                                                {service.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-16 sm:py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-xl overflow-hidden p-4 sm:p-6">
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-slate-700/50">
                                    <h3 className="text-base sm:text-lg font-semibold text-white">Filters & Search</h3>
                                    <div className="flex gap-1 sm:gap-2">
                                        <button className="px-2 py-0.5 sm:px-3 sm:py-1 text-[0.6rem] sm:text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Active</button>
                                        <button className="px-2 py-0.5 sm:px-3 sm:py-1 text-[0.6rem] sm:text-xs bg-slate-800/50 text-slate-500 border border-slate-700/50">Completed</button>
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Search by tail number..."
                                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 placeholder-slate-500 text-xs sm:text-sm"
                                    disabled
                                />

                                <div className="grid grid-cols-3 gap-1 sm:gap-2">
                                    {[
                                        { name: "Fuel", Icon: FaGasPump, color: "#f59e0b" },
                                        { name: "Catering", Icon: FaUtensils, color: "#10b981" },
                                        { name: "GPU", Icon: FaCarBattery, color: "#3b82f6" },
                                    ].map((filter) => (
                                        <button
                                            key={filter.name}
                                            className="px-2 py-1 sm:px-3 sm:py-2 text-[0.6rem] sm:text-xs bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600/50 transition flex items-center justify-center gap-0.5 sm:gap-1"
                                        >
                                            <filter.Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: filter.color }} />
                                            {filter.name}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-1 sm:pt-2">
                                    <div className="text-[0.6rem] sm:text-xs text-slate-500">Sort by:</div>
                                    <select className="px-2 py-0.5 sm:px-3 sm:py-1 text-[0.6rem] sm:text-xs bg-slate-800/50 border border-slate-700/50 text-slate-400" disabled>
                                        <option>Newest First</option>
                                        <option>Oldest First</option>
                                        <option>Tail A–Z</option>
                                        <option>Departure Time</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Powerful Filtering
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-lg">
                            Quickly find what you need with service filters, tail search,
                            and multiple sort options. Toggle between active and completed items.
                        </p>
                        <ul className="space-y-1 sm:space-y-2 pt-2 sm:pt-4">
                            {[
                                "Filter by service type (Fuel, GPU, Catering, etc.)",
                                "Search by tail number or description",
                                "Toggle Active vs Completed view",
                                "Sort by time, tail number, or departure"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                                    <span className="text-emerald-400 mt-1">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Map View Section */}
            <section className="py-16 sm:py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start">
                        <div className="space-y-4 sm:space-y-6">
                            <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-sky-500/10 text-sky-400 text-[0.6rem] sm:text-xs font-medium border border-sky-500/20 uppercase tracking-wider">
                                New
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                Interactive Airport Map
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-lg">
                                Map View renders a live Leaflet-based airport map with aircraft overlaid at their actual ramp positions.
                                Designed for full-field situational awareness — see every aircraft, every service, all at once.
                            </p>
                            <ul className="space-y-1.5 sm:space-y-3 pt-2">
                                {[
                                    "Drag unplaced aircraft from the sidebar directly onto the map",
                                    "Reposition aircraft across the ramp — positions persist to the database",
                                    "Adjust aircraft heading with rotation controls",
                                    "Right-click any aircraft for a full service action menu",
                                    "Right-click anywhere on the map to add a new aircraft at that position",
                                    "Annotate the map with freehand drawing tools",
                                    "Touch & drag support for tablets on the ramp",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                                        <span className="text-sky-400 mt-1">→</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Map Sidebar Tabs UI Mock */}
                        <div className="space-y-3 sm:space-y-4">
                            <div className="relative border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-xl overflow-hidden">
                                <div className="h-32 sm:h-48 bg-slate-800/60 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                        <div className="w-full h-px bg-slate-400 rotate-12 absolute"></div>
                                        <div className="w-full h-px bg-slate-400 -rotate-6 absolute"></div>
                                        <div className="w-2/3 h-1 sm:h-2 bg-slate-600 rounded rotate-12 absolute top-1/3"></div>
                                    </div>
                                    {[
                                        { top: "35%", left: "25%", label: "N123AB", active: true },
                                        { top: "55%", left: "55%", label: "N456CD", active: false },
                                        { top: "25%", left: "65%", label: "N789EF", active: true },
                                    ].map((ac) => (
                                        <div
                                            key={ac.label}
                                            className="absolute flex flex-col items-center"
                                            style={{ top: ac.top, left: ac.left, transform: "translate(-50%, -50%)" }}
                                        >
                                            <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 ${ac.active ? "bg-sky-500 border-sky-300" : "bg-emerald-500 border-emerald-300"}`}></div>
                                            <span className="text-[0.5rem] sm:text-xs font-mono text-white mt-0.5 bg-slate-900/70 px-0.5 sm:px-1">{ac.label}</span>
                                        </div>
                                    ))}
                                    <div className="absolute top-1 left-2 sm:top-2 sm:left-3 text-[0.5rem] sm:text-xs text-slate-500 font-mono">3 Active Aircraft</div>
                                </div>

                                <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 border-t border-slate-700/50">
                                    <div className="text-[0.6rem] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 sm:mb-3">Sidebar Panels</div>
                                    <div className="grid grid-cols-2 gap-1 sm:gap-2">
                                        {[
                                            { tab: "Filters", desc: "Search, service filter, label settings", color: "border-slate-600/50 text-slate-300" },
                                            { tab: "Drawing", desc: "Pen/eraser, color, width, opacity", color: "border-slate-600/50 text-slate-300" },
                                            { tab: "Placement", desc: "Unplaced aircraft queue with badge count", color: "border-sky-500/40 text-sky-300 bg-sky-500/5" },
                                            { tab: "Info", desc: "Service details for selected aircraft", color: "border-slate-600/50 text-slate-300" },
                                        ].map((panel) => (
                                            <div key={panel.tab} className={`p-2 sm:p-3 border rounded ${panel.color}`}>
                                                <div className="text-[0.6rem] sm:text-xs font-semibold mb-0.5 sm:mb-1">{panel.tab}</div>
                                                <div className="text-[0.5rem] sm:text-xs text-slate-500 leading-snug">{panel.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="border border-slate-700/50 bg-slate-900/30 p-3 sm:p-4 space-y-1 sm:space-y-2">
                                <div className="text-[0.6rem] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Drawing Tools</div>
                                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                                    Annotate the map with freehand pen strokes. Configure color, stroke width, and opacity.
                                    Switch to eraser mode to clean up. Annotations are session-based and do not persist across reloads.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supported Services */}
            <section className="py-16 sm:py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                    <div className="space-y-3 sm:space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Supported Services
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-lg">
                            Track all common ground services with independent completion tracking.
                            Each service has its own data model and can be worked in parallel.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {[
                                { name: "Fuel", Icon: FaGasPump, color: "#f59e0b", bg: "#fffbeb" },
                                { name: "Catering", Icon: FaUtensils, color: "#10b981", bg: "#ecfdf5" },
                                { name: "GPU", Icon: FaCarBattery, color: "#3b82f6", bg: "#eff6ff" },
                                { name: "Lavatory", Icon: FaToilet, color: "#6366f1", bg: "#eef2ff" },
                                { name: "Potable Water", Icon: FaTint, color: "#06b6d4", bg: "#f0fdfa" },
                                { name: "Windshield", Icon: PiSprayBottleFill, color: "#f43f5e", bg: "#fff1f2" },
                                { name: "Oil Service", Icon: FaOilCan, color: "#f97316", bg: "#fff7ed" }
                            ].map((service) => (
                                <div
                                    key={service.name}
                                    className="border border-slate-800/50 bg-slate-900/30 p-2 sm:p-4 hover:border-emerald-500/30 hover:bg-slate-900/50 transition-colors flex items-center gap-2 sm:gap-3"
                                >
                                    <div
                                        className="p-1 sm:p-2 rounded"
                                        style={{ backgroundColor: service.bg }}
                                    >
                                        <service.Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: service.color }} />
                                    </div>
                                    <div className="text-xs sm:text-sm font-medium text-slate-300">{service.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 sm:py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">
                        Technical Stack
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { category: "Frontend", items: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS", "Leaflet / react-leaflet"] },
                            { category: "Backend & Auth", items: ["Next.js API Routes", "Better Auth", "Shared MongoDB (NATA Trainer)", "Organization-scoped data"] },
                            { category: "Data Model", items: ["Service Items", "Soft Deletes", "Lifecycle Tracking", "Map Position Metadata"] },
                            { category: "Features", items: ["Filter & Search", "Card / List / Map Views", "Multi-user Live Board", "Touch & Drag Placement"] }
                        ].map((group) => (
                            <div key={group.category} className="space-y-2 sm:space-y-3">
                                <h3 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                                    {group.category}
                                </h3>
                                <ul className="space-y-1 sm:space-y-2">
                                    {group.items.map((item) => (
                                        <li
                                            key={item}
                                            className="text-xs sm:text-sm text-slate-300 border-l-2 border-slate-700/50 pl-2 sm:pl-3 hover:border-emerald-500/50 hover:text-white transition-colors"
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

            {/* Design Principles */}
            <section className="py-16 sm:py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">
                        Key Design Principles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {[
                            {
                                title: "Single-Page Interface",
                                points: [
                                    "Everything on one screen",
                                    "No page navigation required",
                                    "Fast scanning and quick updates"
                                ]
                            },
                            {
                                title: "Ramp-First Design",
                                points: [
                                    "Matches real line tech workflows",
                                    "Minimal clicks for common actions",
                                    "Readable at a glance"
                                ]
                            },
                            {
                                title: "Data Integrity",
                                points: [
                                    "Soft deletes preserve history",
                                    "Full lifecycle timestamps",
                                    "Never lose operational data"
                                ]
                            },
                            {
                                title: "Multi-Device Support",
                                points: [
                                    "Desktop line desks",
                                    "Tablets on the ramp",
                                    "Touch drag-and-drop for map placement",
                                    "No horizontal scrolling on small screens"
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
                                            <span className="text-emerald-400 mt-1">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complete Feature Set */}
            <section className="py-16 sm:py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">
                        Complete Feature Set
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                        {[
                            "Aircraft tail & type tracking",
                            "Arrival/departure logging",
                            "Multi-service tracking",
                            "Independent service completion",
                            "Soft deletion support",
                            "Service-type filtering",
                            "Tail number search",
                            "Active/Completed toggle",
                            "Multiple sort options",
                            "Card view mode",
                            "List view mode",
                            "Map view mode",
                            "Drag-and-drop aircraft placement",
                            "Touch gesture map placement",
                            "Aircraft rotation on map",
                            "Right-click context menu on map",
                            "Add aircraft at map position",
                            "Freehand map annotation",
                            "Collapsible map sidebar (4 panels)",
                            "Unplaced aircraft queue with badge",
                            "Multi-user live shared board",
                            "Organization-scoped items",
                            "NATA Trainer single sign-on",
                            "Role-based access (Student / Trainer / Coordinator)",
                            "Notes & operational details",
                            "Completion timestamps",
                            "Audit trail preservation",
                            "Responsive design",
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

            {/* Intended Users */}
            <section className="py-16 sm:py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">
                        Intended Users
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                        {[
                            { role: "Line Technicians", desc: "Track services in real time" },
                            { role: "Fuelers", desc: "Log fuel services and completion" },
                            { role: "Shift Supervisors", desc: "Monitor ramp operations" },
                            { role: "FBO Operations", desc: "Coordinate ground services" }
                        ].map((user) => (
                            <div key={user.role} className="border border-slate-800/50 bg-slate-900/30 p-3 sm:p-6 text-center">
                                <h3 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">{user.role}</h3>
                                <p className="text-xs sm:text-sm text-slate-400">{user.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 sm:mt-8 p-3 sm:p-6 border border-slate-800/50 bg-slate-900/20">
                        <p className="text-xs sm:text-sm text-slate-400 text-center">
                            This is an internal operational tool, not customer-facing. Built for ramp teams who need fast, reliable service tracking.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-16 sm:py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                        Philosophy
                    </h2>
                    <div className="max-w-3xl">
                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 sm:mb-6">
                            Line Tracker is built to match real ramp workflows, minimize clicks,
                            stay readable at a glance, and never lose operational data.
                        </p>
                        <div className="border-l-2 border-emerald-500/50 pl-4 sm:pl-6">
                            <p className="text-lg sm:text-xl font-medium text-slate-200 italic">
                                "If it wouldn't make sense on the ramp, it doesn't belong here."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 sm:py-12 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-4">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">Line Tracker</h3>
                            <p className="text-xs sm:text-sm text-slate-400">
                                Aircraft ground service tracking for airport ramp operations
                            </p>
                        </div>
                        <div className="text-xs sm:text-sm text-slate-500">
                            <p>Next.js • TypeScript • Tailwind CSS • Leaflet • Better Auth</p>
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-slate-800/50">
                        <p className="text-[0.6rem] sm:text-xs text-slate-500 leading-relaxed">
                            Built for line technicians, fuelers, and ramp operations teams.
                            Designed to replace whiteboards and paper logs with structured, searchable service tracking.
                            Authentication shared with NATA Trainer — one account, both platforms.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}