import React from 'react';
import { FaArrowRight, FaShieldAlt, FaCloud, FaRocket, FaUsers, FaCode, FaChartLine, FaServer, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate } from 'react-router-dom';

const StaticAboutSection = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative py-10 md:py-10 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] overflow-hidden">
      {/* Background Effects without dots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start"
        >

          {/* Left Column - Content */}
          <div className="space-y-10">
            {/* Premium Section Badge */}
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-blue-800/20 backdrop-blur-lg rounded-full px-5 py-2.5 border border-blue-800/50 shadow-lg shadow-blue-900/20"
            >
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-blue-500/20 rounded-full"
                />
                <div className="relative w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
              </div>
              <span className="text-sm font-semibold text-blue-300 tracking-wider">
                PREMIUM TECHNOLOGY PARTNER
              </span>
            </motion.div>

            {/* Main Heading with Gradient */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                <span className="text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text">
                  Crafting Digital
                </span>
                <span className="block mt-3">
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                      backgroundImage: "linear-gradient(to right, #60a5fa, #22d3ee, #60a5fa)"
                    }}
                    className="text-transparent bg-clip-text"
                  >
                    Excellence Since 2023
                  </motion.span>
                </span>
              </h2>

              {/* Premium Description */}
              <div className="space-y-6">
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-400 leading-relaxed"
                >
                  <span className="text-blue-300 font-semibold">TechVanguard</span> is a premier technology solutions provider specializing in enterprise-grade digital transformation. We combine cutting-edge technology with strategic innovation to deliver measurable business results.
                </motion.p>

                {/* Services Highlight */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/30"
                >
                  <h3 className="text-xl font-bold text-gray-200 mb-4">Core Expertise</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: FaCode, text: 'Web Development', link: '/services/web' },
                      { icon: FaServer, text: 'Cloud Services', link: '/services/cloud' },
                      { icon: FaChartLine, text: 'Digital Marketing', link: '/services/dg' },
                      { icon: FaShieldAlt, text: 'Testing & QA', link: '/services/testing' },
                      { icon: FaMobileAlt, text: 'Mobile App Development', link: '/services/app' },
                      { icon: FaLayerGroup, text: 'Full Stack Development', link: '/services/fullstack' },
                    ].map((item, idx) => (
                      <Link to={item.link} key={idx} className="group">
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className="p-2 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-lg group-hover:from-blue-800/60 transition-colors"
                          >
                            <item.icon className="w-4 h-4 text-blue-300 group-hover:text-cyan-200" />
                          </motion.div>
                          <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                            {item.text}
                          </span>
                        </motion.div>
                      </Link>
                    ))}
                  </div>

                </motion.div>
              </div>

              {/* Premium Features Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-4 mt-10"
              >
                {[
                  {
                    icon: FaRocket,
                    title: "Agile Development",
                    desc: "Rapid deployment with iterative feedback"
                  },
                  {
                    icon: FaShieldAlt,
                    title: "Enterprise Security",
                    desc: "Bank-grade security protocols"
                  },
                  {
                    icon: FaCloud,
                    title: "Cloud Native",
                    desc: "Scalable cloud architecture"
                  },
                  {
                    icon: FaUsers,
                    title: "Dedicated Teams",
                    desc: "Expert developers & strategists"
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm p-5 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-lg group-hover:from-blue-800/60 transition-all"
                      >
                        <feature.icon className="w-5 h-5 text-blue-300 group-hover:text-cyan-200 transition-colors" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-gray-200 group-hover:text-white transition-colors mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Premium CTA Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-10 relative px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
                <span className="relative flex items-center gap-3"
                  onClick={() => navigate("/contact")}>
                  Schedule Premium Consultation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Stats & Cards */}
          <div className="space-y-8">
            {/* Premium Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  value: "5+",
                  label: "Premium Projects",
                  icon: "🚀",
                  color: "from-blue-400 to-cyan-300"
                },
                {
                  value: "99.7%",
                  label: "Satisfaction Rate",
                  icon: "⭐",
                  color: "from-blue-300 to-cyan-200"
                },
                {
                  value: "24/7",
                  label: "Dedicated Support",
                  icon: "🛡️",
                  color: "from-blue-500 to-cyan-400"
                },
                {
                  value: "15+",
                  label: "Expert Team",
                  icon: "👥",
                  color: "from-blue-400 to-cyan-300"
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        y: stat.value === "24/7" ? [0, -5, 0] : 0,
                        scale: stat.value === "24/7" ? [1, 1.1, 1] : 1
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-2xl"
                    >
                      {stat.icon}
                    </motion.div>
                    <div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium Mission Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/50 shadow-xl shadow-blue-900/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.1 }}
                  className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl"
                >
                  <div className="w-6 h-6 text-2xl">🎯</div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-200 mb-2">Our Mission</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To deliver premium digital solutions that empower businesses to thrive in the modern digital landscape through innovation, excellence, and strategic partnership.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-blue-900/30">
                <h4 className="text-sm font-semibold text-blue-300 mb-3">CORE VALUES</h4>
                <div className="flex flex-wrap gap-2">
                  {['Innovation', 'Excellence', 'Integrity', 'Collaboration', 'Results'].map((value, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-800/50"
                    >
                      {value}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Premium Team Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/20 via-blue-800/15 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-900/30"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-200">Expert Team</h3>
                  <p className="text-sm text-gray-400">Premium developers & strategists</p>
                </div>
                <div className="relative">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-[#0a0a0f] flex items-center justify-center text-white font-bold"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -right-2 -bottom-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-xs font-bold border-2 border-[#0a0a0f]"
                  >
                    +
                  </motion.div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Senior Developers', value: '10+' },
                  { label: 'Cloud Architects', value: '5+' },
                  { label: 'Digital Strategists', value: '10+' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-400">{item.label}</span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="text-blue-300 font-semibold"
                    >
                      {item.value}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StaticAboutSection;