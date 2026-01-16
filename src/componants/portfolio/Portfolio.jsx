// src/pages/Portfolio.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaStar,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaLayerGroup,
  FaRocket,
  FaFire,
  FaChevronRight,
  FaRegClock,
  FaTools,
  FaSearch,
  FaTimes,
  FaFilter,
  FaEye,
  FaHeart
} from "react-icons/fa";
import { HiSparkles, HiLightningBolt, HiCube, HiChartBar } from "react-icons/hi";
import projects from "../../data/projectsData";

// Magnetic Button Component
const MagneticButton = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.2);
      y.set((e.clientY - centerY) * 0.2);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// 3D Card Component
const Card3D = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animated Counter
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      const incrementTime = (duration * 1000) / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

// Particle Background
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-indigo-500/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * -500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Glowing Orb Component
const GlowingOrb = ({ color, size, position, delay = 0 }) => (
  <motion.div
    className={`absolute ${size} rounded-full blur-3xl opacity-20`}
    style={{
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      ...position
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.3, 0.1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  />
);

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get all unique technologies and categories
  const allTech = Array.from(new Set(projects.flatMap(p => p.tech)));
  const allCategories = Array.from(new Set(projects.map(p => p.category)));
  
  // Filter projects
  const filteredProjects = projects.filter(p => {
    const matchesFilter = filter === "all" || p.tech.includes(filter);
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 0.8
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0A0A0F] py-12 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-transparent to-purple-950/50" />
        
        {/* Animated Orbs */}
        <GlowingOrb 
          color="#6366F1" 
          size="w-[600px] h-[600px]" 
          position={{ top: '-10%', left: '-10%' }} 
        />
        <GlowingOrb 
          color="#8B5CF6" 
          size="w-[500px] h-[500px]" 
          position={{ bottom: '10%', right: '-5%' }} 
          delay={2}
        />
        <GlowingOrb 
          color="#06B6D4" 
          size="w-[400px] h-[400px]" 
          position={{ top: '40%', left: '30%' }} 
          delay={4}
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl mx-auto mb-24 text-center"
        >
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-black mb-8 leading-none">
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                 Creative Projects
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 text-xl md:text-xl leading-relaxed max-w-3xl mx-auto font-light"
          >
            Discover our innovative solutions that combine 
            <span className="text-indigo-400 font-medium"> cutting-edge technology </span>
            with 
            <span className="text-purple-400 font-medium"> elegant design</span>
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-5 max-w-2xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative flex items-center bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-xl">
                <FaSearch className="w-5 h-5 text-gray-500 ml-5" />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-5 bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="p-2 mr-3 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <FaTimes className="w-4 h-4 text-gray-400" />
                  </button>
                )}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`p-4 mr-2 rounded-xl transition-all duration-300 ${
                    showFilters 
                      ? "bg-indigo-600 text-white" 
                      : "bg-slate-800 text-gray-400 hover:bg-slate-700"
                  }`}
                >
                  <FaFilter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between mb-5"
        >
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredProjects.length}</span> projects
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid" ? "bg-indigo-600 text-white" : "bg-slate-800 text-gray-400"
              }`}
            >
              <HiCube className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list" ? "bg-indigo-600 text-white" : "bg-slate-800 text-gray-400"
              }`}
            >
              <HiChartBar className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`grid gap-8 ${
            viewMode === "grid" 
              ? "md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="group perspective-1000"
              >
                <Card3D className="relative h-full">
                  {/* Glow Effect */}
                  <motion.div 
                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor}40, transparent, ${project.accentColor}20)`
                    }}
                  />

                  <Link
                    to={`/portfolio/${project.id}`}
                    className={`relative block h-full bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-slate-800/50 rounded-3xl overflow-hidden backdrop-blur-xl group-hover:border-slate-700/50 transition-all duration-700 ${
                      viewMode === "list" ? "flex items-center" : ""
                    }`}
                    style={{ transform: "translateZ(50px)" }}
                  >
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="absolute top-5 left-5 z-20"
                      >
                        <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-orange-500/30">
                          <FaFire className="w-3 h-3" />
                          <span>FEATURED</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-5 right-5 z-20">
                      <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{project.status}</span>
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className={`relative overflow-hidden ${
                      viewMode === "list" ? "w-80 h-full min-h-[200px]" : "h-64"
                    }`}>
                      <motion.div 
                        className="absolute inset-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      >
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                      <div 
                        className="absolute inset-0 opacity-40 mix-blend-overlay"
                        style={{
                          background: `linear-gradient(135deg, ${project.accentColor}30, transparent)`
                        }}
                      />

                      {/* Hover Overlay */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center gap-4"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm"
                        >
                          <FaEye className="w-5 h-5 text-white" />
                        </motion.div>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm"
                        >
                          <FaHeart className="w-5 h-5 text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <FaRegClock className="w-3.5 h-3.5" />
                          <span>{new Date(project.launchDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <FaStar className="w-4 h-4 text-yellow-400" />
                          <span className="text-white font-bold">{project.rating}</span>
                          <span className="text-white/50 text-sm">({project.reviews})</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-7 ${viewMode === "list" ? "flex-1" : ""}`}>
                      {/* Category */}
                      <div className="mb-4">
                        <span 
                          className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                          style={{ 
                            color: project.accentColor,
                            backgroundColor: `${project.accentColor}15`
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                        {project.shortDesc}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-slate-800/60 text-gray-300 rounded-lg text-xs font-medium border border-slate-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-3 py-1.5 bg-slate-800/60 text-gray-500 rounded-lg text-xs font-medium">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Performance Metrics */}
                      <div className="grid grid-cols-4 gap-2 mb-6">
                        {Object.entries(project.metrics).slice(0, 4).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className={`text-lg font-bold ${
                              value >= 95 ? 'text-emerald-400' : 
                              value >= 90 ? 'text-cyan-400' : 
                              'text-amber-400'
                            }`}>
                              {value}
                            </div>
                            <div className="text-xs text-gray-500 capitalize truncate">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Area */}
                      <div className="flex items-center justify-between pt-5 border-t border-slate-800/50">
                        <div className="flex items-center gap-3">
                          <FaTools className="w-4 h-4 text-indigo-400" />
                          <span className="text-gray-400 text-sm">
                            {project.tech.length} technologies
                          </span>
                        </div>
                        
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-indigo-400 font-semibold text-sm group/btn"
                        >
                          <span>Explore</span>
                          <div className="relative overflow-hidden">
                            <FaChevronRight className="w-3 h-3 group-hover/btn:translate-x-5 transition-transform duration-300" />
                            <FaChevronRight className="w-3 h-3 absolute top-0 -left-5 group-hover/btn:translate-x-5 transition-transform duration-300" />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your filters or search query</p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Projects", value: projects.length, icon: <HiCube />, gradient: "from-indigo-600 to-violet-600" },
              { label: "Featured", value: projects.filter(p => p.featured).length, icon: <FaFire />, gradient: "from-orange-600 to-rose-600" },
              { label: "Technologies", value: allTech.length, icon: <FaCode />, gradient: "from-cyan-600 to-blue-600" },
              { label: "Avg Rating", value: "4.8", icon: <FaStar />, gradient: "from-amber-500 to-yellow-500", isDecimal: true }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-xl">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                    <div className="text-white text-xl">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-black text-white mb-2">
                    {stat.isDecimal ? stat.value : <AnimatedCounter value={stat.value} />}
                    {stat.isDecimal && <span className="text-2xl text-gray-500">/5.0</span>}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-32 text-center"
        >
          <div className="relative inline-block">
            {/* Animated Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-3xl blur-lg opacity-50 animate-pulse" />
            
            <Link
              to="/contact"
              className="relative group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] hover:bg-right text-white font-bold text-xl rounded-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <HiLightningBolt className="w-6 h-6" />
              <span className="relative z-10">Start Your Project</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.4 }}
            className="text-gray-500 mt-6 text-lg"
          >
            Have an idea? Let's bring it to life together ✨
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;