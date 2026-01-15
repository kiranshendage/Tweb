// src/components/HeroSection.tsx
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaPlay, FaRocket, FaShieldAlt, FaLightbulb, FaGlobe, FaCode, FaChartLine, FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


    const services = [
        {
            icon: FaCode,
            title: "Web Development",
            desc: "Premium websites & applications",
            path: "/services/web",
        },
        {
            icon: FaGlobe,
            title: "App Development",
            desc: "iOS, Android & Cross-platform",
            path: "/services/app",
        },
        {
            icon: FaChartLine,
            title: "Digital Marketing",
            desc: "Growth-driven strategies",
            path: "/services/dg",
        },
        {
            icon: FaServer,
            title: "Cloud Services",
            desc: "Scalable cloud solutions",
            path: "/services/cloud",
        },
        {
            icon: FaShieldAlt,
            title: "Testing",
            desc: "Manual & Automation testing",
            path: "/services/testing",
        },
        {
            icon: FaRocket,
            title: "Full Stack",
            desc: "End-to-end solutions",
            path: "/services/fullstack",
        },
    ];
    const navigate = useNavigate();


    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] py-20 md:py-32">
            {/* Premium Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/20 via-blue-600/10 to-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * 20,
                        y: mousePosition.y * 20,
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        x: { type: "spring", stiffness: 100 },
                        y: { type: "spring", stiffness: 100 },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-r from-indigo-900/20 to-blue-800/10 rounded-full blur-3xl"
                    animate={{
                        x: mousePosition.x * -15,
                        y: mousePosition.y * -15,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        x: { type: "spring", stiffness: 100 },
                        y: { type: "spring", stiffness: 100 },
                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    }}
                />

                {/* Animated grid with blue accent */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(90deg, #0066ff 1px, transparent 1px),
                                        linear-gradient(180deg, #0066ff 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                        animation: 'gridMove 20s linear infinite',
                    }} />
                </div>

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Premium Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-blue-800/20 backdrop-blur-lg rounded-full px-5 py-2.5 mb-10 border border-blue-800/50 shadow-lg shadow-blue-900/20"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20"></div>
                            <div className="relative w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-300">
                            🚀 Premium Technology Solutions Since 2023
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="block text-transparent bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 bg-clip-text">
                            Elevating Businesses With
                        </span>
                        <span className="block mt-2">
                            <span className="relative">
                                <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text animate-gradient-x">
                                    Premium Digital Excellence
                                </span>
                                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-sm"></span>
                            </span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        We deliver enterprise-grade <span className="text-blue-300 font-semibold">web development</span>,{' '}
                        <span className="text-blue-300 font-semibold">mobile applications</span>,{' '}
                        <span className="text-blue-300 font-semibold">digital marketing</span>, and{' '}
                        <span className="text-blue-300 font-semibold">cloud solutions</span> that drive measurable business growth.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
                    >
                        <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 transform overflow-hidden">
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            <span className="relative flex items-center gap-3"
                               onClick={() => navigate("/contact")}>
                                Start Free Consultation
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                            <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-blue-300/50 rounded-tl-lg"></span>
                            <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-cyan-300/50 rounded-br-lg"></span>
                        </button>

                        <button className="group px-10 py-4 bg-transparent text-blue-300 font-semibold rounded-xl border border-blue-800/50 hover:border-blue-500/70 transition-all duration-500 hover:scale-105 transform hover:shadow-lg hover:shadow-blue-900/30 backdrop-blur-sm">
                            <span className="flex items-center gap-3"
                               onClick={() => navigate("/contact")}>
                                <span className="relative">
                                    <FaPlay className="text-blue-400 group-hover:text-cyan-300 transition-colors" />
                                    <span className="absolute inset-0 animate-ping rounded-full bg-blue-500/20"></span>
                                </span>
                                View Case Studies
                            </span>
                        </button>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mb-20"
                    >
                        <h3 className="text-xl font-semibold text-gray-300 mb-8">Our Premium Services</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.05 }}
                                    onClick={() => navigate(service.path)}
                                    className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5
               backdrop-blur-sm p-5 rounded-xl border border-blue-900/30
               hover:border-blue-500/50 transition-all duration-500
               cursor-pointer"
                                >
                                    {/* Hover background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent
                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative">
                                        <div className="inline-flex p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/30
                      rounded-lg mb-4 group-hover:from-blue-800/60 group-hover:to-blue-700/40
                      transition-all duration-500">
                                            <service.icon className="w-6 h-6 text-blue-300 group-hover:text-cyan-200 transition-colors" />
                                        </div>

                                        <h3 className="text-base font-semibold text-gray-200 mb-1 group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Hover indicator */}
                                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-1
                    bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full
                    opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                </motion.div>
                            ))}

                        </div>
                    </motion.div>

                    {/* Premium Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 1 }}
                        className="pt-12 border-t border-blue-900/30"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                { value: "5+", label: "Premium Projects", suffix: "" },
                                { value: "99.7%", label: "Client Satisfaction", suffix: "" },
                                { value: "24/7", label: "Premium Support", suffix: "" },
                                { value: "15+", label: "Expert Team", suffix: "" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center group"
                                >
                                    <div className="relative inline-block mb-3">
                                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                                            {stat.value}
                                        </div>
                                        <div className="absolute -inset-3 bg-blue-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Premium Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="flex flex-col items-center gap-3">
                    <span className="text-xs font-semibold text-blue-300 tracking-widest">EXPLORE MORE</span>
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                    >
                        <div className="w-6 h-10 border-2 border-blue-800/50 rounded-full flex justify-center pt-2 backdrop-blur-sm">
                            <div className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-cyan-300 rounded-full"></div>
                        </div>
                        <div className="absolute inset-0 w-6 h-10 border border-blue-400/20 rounded-full animate-ping"></div>
                    </motion.div>
                </div>
            </motion.div>

            {/* CSS for gradient animation */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(60px, 60px); }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;