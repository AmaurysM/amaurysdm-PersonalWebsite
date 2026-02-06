"use client"

import { useRef } from "react";
import { FaGasPump, FaUtensils, FaToilet, FaTint, FaOilCan } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa";
import { PiSprayBottleFill } from "react-icons/pi";
import AnimatedScribbles from "./components/lines";

export default function LineTrackerLanding() {

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main className="relative bg-slate-950/60 text-slate-100 overflow-hidden">

            <div className="fixed inset-0 -z-10">
                <AnimatedScribbles />
            </div>

            <div className="flex items-center text-sm font-medium text-slate-200 bg-slate-800/50 border border-slate-700/50">
                <div 
                    onClick={() => (window.location.href = "https://www.amaurysdelossantos.com")}
                    className="flex-1 px-4 py-2 hover:bg-slate-700/70 transition cursor-pointer"
                >
                    Return
                </div>
                <div className="px-4">Line Tracker</div>
            </div>

            <section className="relative py-24 min-h-[90vh] flex items-center">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 uppercase tracking-wider">
                            Operational Tool
                        </div>

                        <h1 className="text-7xl font-bold tracking-tight text-white">
                            Line Tracker
                        </h1>

                        <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                            Real-time aircraft ground service tracking for airport ramp operations. 
                            Replacing whiteboards and paper logs with structured, searchable records.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Next.js", "TypeScript", "Real-time Tracking", "Ramp Operations"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 border border-slate-700/50"
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
                                <div className="px-5 py-4 flex-1 items-center bg-slate-900">
                                    <div className="flex items-center gap-3">
                                        <h2 className="font-mono font-bold text-white text-base tracking-wide">
                                            N123AB
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex">
                                    <button className="px-5 py-4 flex items-center justify-center min-w-22.5 bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                                        <span className="font-semibold text-white text-sm tracking-wide">EDIT</span>
                                    </button>
                                    <button className="px-5 py-4 flex items-center justify-center min-w-22.5 bg-red-600 hover:bg-red-700 transition-colors duration-200 border-l border-red-500">
                                        <span className="font-semibold text-white text-sm tracking-wide">DEL</span>
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
                                        className="flex-1 p-2 h-14 flex items-center justify-center transition-all hover:scale-110"
                                        style={{
                                            backgroundColor: service.bg,
                                            border: `1.5px solid ${service.color}30`,
                                        }}
                                        title={service.label}
                                    >
                                        <service.Icon className="w-6 h-6" style={{ color: service.color }} />
                                    </div>
                                ))}
                            </div>
                            <div className="px-3 py-2 border-t border-gray-200 bg-gray-50/50">
                                <div className="flex items-center justify-between gap-2 flex-wrap">
                                    <div className="flex-1 flex items-center gap-3 text-nowrap">
                                        <div className="flex items-center gap-1">
                                            <span className="text-xs text-gray-500">↓</span>
                                            <span className="font-mono text-xs font-medium text-gray-800">1430</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-xs text-gray-500">↑</span>
                                            <span className="font-mono text-xs font-medium text-gray-800">1800</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 items-center gap-1">
                                        <span className="text-xs text-gray-600 truncate">Executive charter</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List View Example */}
                        <div className="bg-white cursor-pointer border-l-2 border-l-slate-900 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center">
                                <div className="shrink-0 w-20 pl-3">
                                    <div className="font-mono font-bold text-slate-900 text-sm tracking-wide">N456CD</div>
                                </div>
                                <div className="shrink-0 flex gap-3 text-xs">
                                    <div className="flex items-center gap-1">
                                        <span className="text-gray-500">↓</span>
                                        <span className="font-mono font-medium text-gray-800">0945</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-gray-500">↑</span>
                                        <span className="font-mono font-medium text-gray-800">1215</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center gap-1 pl-3 pr-1.5">
                                    {[
                                        { Icon: FaGasPump, color: "#f59e0b" },
                                        { Icon: FaCarBattery, color: "#3b82f6" },
                                        { Icon: FaTint, color: "#06b6d4" },
                                    ].map((service, idx) => (
                                        <div
                                            key={idx}
                                            className="p-1.5 rounded transition-all hover:scale-110"
                                            style={{
                                                backgroundColor: `${service.color}15`,
                                                border: `1.5px solid ${service.color}30`,
                                            }}
                                        >
                                            <service.Icon className="w-5 h-5" style={{ color: service.color }} />
                                        </div>
                                    ))}
                                </div>
                                <div className="shrink-0 flex h-10">
                                    <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-xs font-semibold">
                                        EDIT
                                    </button>
                                    <button className="px-3 py-1.5 bg-red-600 hover:bg-red-700 transition-colors text-white text-xs font-semibold">
                                        DEL
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Completed Item Example */}
                        <div className="bg-white cursor-pointer border-l-2 border-l-green-500 bg-green-50/30 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center">
                                <div className="shrink-0 w-20 pl-3">
                                    <div className="font-mono font-bold text-slate-900 text-sm tracking-wide">N789EF</div>
                                </div>
                                <div className="shrink-0 flex gap-3 text-xs">
                                    <div className="flex items-center gap-1">
                                        <span className="text-gray-500">↓</span>
                                        <span className="font-mono font-medium text-gray-800">0800</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-gray-500">↑</span>
                                        <span className="font-mono font-medium text-gray-800">1030</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center gap-1 pl-3 pr-1.5">
                                    {[
                                        { Icon: FaGasPump, color: "#f59e0b" },
                                        { Icon: FaOilCan, color: "#f97316" },
                                    ].map((service, idx) => (
                                        <div
                                            key={idx}
                                            className="p-1.5 rounded transition-all hover:scale-110"
                                            style={{
                                                backgroundColor: `${service.color}10`,
                                                border: `1.5px dashed ${service.color}40`,
                                            }}
                                        >
                                            <div className="relative w-5 h-5">
                                                <service.Icon className="w-5 h-5 opacity-60" style={{ color: service.color }} />
                                                <div className="absolute -inset-1">
                                                    <div className="h-0.5 w-full bg-green-500 rotate-45 transform origin-center absolute top-1/2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="shrink-0 flex h-10">
                                    <button className="px-3 py-1.5 bg-yellow-600 hover:bg-yellow-700 transition-colors text-white text-xs font-semibold">
                                        UNDO
                                    </button>
                                    <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-xs font-semibold">
                                        EDIT
                                    </button>
                                    <button className="px-3 py-1.5 bg-red-600 hover:bg-red-700 transition-colors text-white text-xs font-semibold">
                                        DEL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                            Aircraft Service Items
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                            Each aircraft visit is tracked as a Service Item with tail number, 
                            arrival/departure times, requested services, and completion status.
                        </p>
                        <ul className="space-y-2 pt-4">
                            {[
                                "Track multiple services per aircraft",
                                "Independent completion tracking",
                                "Arrival and departure time logging",
                                "Soft deletion for audit preservation"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-emerald-400 mt-1">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="relative border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-xl overflow-hidden p-8">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between pb-4 border-b border-slate-700/50">
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">Tail Number</div>
                                        <div className="text-2xl font-bold text-white font-mono">N123AB</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-slate-500">Type</div>
                                        <div className="text-sm text-slate-300">G650</div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-xs text-slate-500">Arrival</div>
                                        <div className="text-sm text-slate-300 font-mono">14:30</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500">Departure</div>
                                        <div className="text-sm text-slate-300 font-mono">18:00</div>
                                    </div>
                                </div>

                                <div className="space-y-2 pt-2">
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Services</div>
                                    {[
                                        { name: "Fuel", Icon: FaGasPump, status: "completed", color: "#f59e0b" },
                                        { name: "Catering", Icon: FaUtensils, status: "completed", color: "#10b981" },
                                        { name: "GPU", Icon: FaCarBattery, status: "active", color: "#3b82f6" },
                                        { name: "Lavatory", Icon: FaToilet, status: "pending", color: "#6366f1" },
                                    ].map((service) => (
                                        <div key={service.name} className="flex items-center justify-between p-2 bg-slate-800/50 border border-slate-700/50">
                                            <div className="flex items-center gap-2">
                                                <service.Icon className="w-4 h-4" style={{ color: service.color }} />
                                                <span className="text-sm text-slate-300">{service.name}</span>
                                            </div>
                                            <span className={`text-xs px-2 py-1 ${
                                                service.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
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

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm shadow-xl overflow-hidden p-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-700/50">
                                    <h3 className="text-lg font-semibold text-white">Filters & Search</h3>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1 text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Active</button>
                                        <button className="px-3 py-1 text-xs bg-slate-800/50 text-slate-500 border border-slate-700/50">Completed</button>
                                    </div>
                                </div>
                                
                                <input 
                                    type="text" 
                                    placeholder="Search by tail number..."
                                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 placeholder-slate-500 text-sm"
                                    disabled
                                />

                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { name: "Fuel", Icon: FaGasPump, color: "#f59e0b" },
                                        { name: "Catering", Icon: FaUtensils, color: "#10b981" },
                                        { name: "GPU", Icon: FaCarBattery, color: "#3b82f6" },
                                    ].map((filter) => (
                                        <button 
                                            key={filter.name} 
                                            className="px-3 py-2 text-xs bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600/50 transition flex items-center justify-center gap-1"
                                        >
                                            <filter.Icon className="w-3 h-3" style={{ color: filter.color }} />
                                            {filter.name}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <div className="text-xs text-slate-500">Sort by:</div>
                                    <select className="px-3 py-1 text-xs bg-slate-800/50 border border-slate-700/50 text-slate-400" disabled>
                                        <option>Newest First</option>
                                        <option>Oldest First</option>
                                        <option>Tail A–Z</option>
                                        <option>Departure Time</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 order-1 lg:order-2">
                        <h2 className="text-4xl font-bold text-white">
                            Powerful Filtering
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                            Quickly find what you need with service filters, tail search, 
                            and multiple sort options. Toggle between active and completed items.
                        </p>
                        <ul className="space-y-2 pt-4">
                            {[
                                "Filter by service type (Fuel, GPU, Catering, etc.)",
                                "Search by tail number or description",
                                "Toggle Active vs Completed view",
                                "Sort by time, tail number, or departure"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-emerald-400 mt-1">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-white">
                            Supported Services
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                            Track all common ground services with independent completion tracking. 
                            Each service has its own data model and can be worked in parallel.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-3">
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
                                    className="border border-slate-800/50 bg-slate-900/30 p-4 hover:border-emerald-500/30 hover:bg-slate-900/50 transition-colors flex items-center gap-3"
                                >
                                    <div 
                                        className="p-2 rounded"
                                        style={{ backgroundColor: service.bg }}
                                    >
                                        <service.Icon className="w-5 h-5" style={{ color: service.color }} />
                                    </div>
                                    <div className="text-sm font-medium text-slate-300">{service.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Technical Stack
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { category: "Frontend", items: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS"] },
                            { category: "Architecture", items: ["Client Components", "REST API", "Single-Page Design", "Responsive Layout"] },
                            { category: "Data Model", items: ["Service Items", "Soft Deletes", "Lifecycle Tracking", "Independent Services"] },
                            { category: "Features", items: ["Filter & Search", "Card/List Views", "Real-time Updates", "Completion Tracking"] }
                        ].map((group) => (
                            <div key={group.category} className="space-y-3">
                                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    {group.category}
                                </h3>
                                <ul className="space-y-2">
                                    {group.items.map((item) => (
                                        <li
                                            key={item}
                                            className="text-sm text-slate-300 border-l-2 border-slate-700/50 pl-3 hover:border-emerald-500/50 hover:text-white transition-colors"
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
                        Key Design Principles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                    "No horizontal scrolling on small screens"
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

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Complete Feature Set
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                            "Notes & operational details",
                            "Completion timestamps",
                            "Audit trail preservation",
                            "Responsive design",
                            "Fast scanning interface",
                            "Minimal-click operations",
                            "Real-time status updates"
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

            <section className="py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Intended Users
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { role: "Line Technicians", desc: "Track services in real time" },
                            { role: "Fuelers", desc: "Log fuel services and completion" },
                            { role: "Shift Supervisors", desc: "Monitor ramp operations" },
                            { role: "FBO Operations", desc: "Coordinate ground services" }
                        ].map((user) => (
                            <div key={user.role} className="border border-slate-800/50 bg-slate-900/30 p-6 text-center">
                                <h3 className="text-lg font-semibold text-white mb-2">{user.role}</h3>
                                <p className="text-sm text-slate-400">{user.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-6 border border-slate-800/50 bg-slate-900/20">
                        <p className="text-sm text-slate-400 text-center">
                            This is an internal operational tool, not customer-facing. Built for ramp teams who need fast, reliable service tracking.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Philosophy
                    </h2>
                    <div className="max-w-3xl">
                        <p className="text-lg text-slate-300 leading-relaxed mb-6">
                            Line Tracker is built to match real ramp workflows, minimize clicks, 
                            stay readable at a glance, and never lose operational data.
                        </p>
                        <div className="border-l-2 border-emerald-500/50 pl-6">
                            <p className="text-xl font-medium text-slate-200 italic">
                                "If it wouldn't make sense on the ramp, it doesn't belong here."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">Line Tracker</h3>
                            <p className="text-sm text-slate-400">
                                Aircraft ground service tracking for airport ramp operations
                            </p>
                        </div>
                        <div className="text-sm text-slate-500">
                            <p>Next.js • TypeScript • Tailwind CSS</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-slate-800/50">
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Built for line technicians, fuelers, and ramp operations teams. 
                            Designed to replace whiteboards and paper logs with structured, searchable service tracking.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}