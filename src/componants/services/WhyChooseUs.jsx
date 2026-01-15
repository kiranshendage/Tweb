// import React from 'react';
// import { 
//   Sliders, 
//   Rocket, 
//   Briefcase, 
//   Monitor, 
//   Shield
// } from 'lucide-react';

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: <Sliders className="w-8 h-8" />,
//       title: "Customizable & Scalable",
//       description: "Every product is designed to grow with your business.",
//       gradient: "from-blue-600 to-indigo-600",
//       color: "text-blue-800"
//     },
//     {
//       icon: <Rocket className="w-8 h-8" />,
//       title: "Fast Setup & Deployment",
//       description: "Start using our platforms in days, not months.",
//       gradient: "from-emerald-600 to-teal-600",
//       color: "text-emerald-800"
//     },
//     {
//       icon: <Briefcase className="w-8 h-8" />,
//       title: "Real-World Use Cases",
//       description: "Solutions crafted with firsthand industry knowledge.",
//       gradient: "from-purple-600 to-violet-600",
//       color: "text-purple-800"
//     },
//     {
//       icon: <Monitor className="w-8 h-8" />,
//       title: "Clean, User-Friendly Interface",
//       description: "Modern UI designed for ease of use and adoption.",
//       gradient: "from-amber-600 to-orange-600",
//       color: "text-amber-800"
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Secure & Compliant",
//       description: "Built with enterprise-grade security and audit-ready architecture.",
//       gradient: "from-rose-600 to-red-600",
//       color: "text-rose-800"
//     }
//   ];

//   return (
//     <div className="min-h-screen ">
//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-16 md:py-24">
//         {/* Header */}
//         <div className="text-center mb-16 md:mb-20">
//           <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
//             <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
//               Why We're Different
//             </span>
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//             Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Us</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business results
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
//             >
//               {/* Top Accent Line */}
//               <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-t-xl`} />
              
//               {/* Icon Container */}
//               <div className={`relative mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
//                 {feature.icon}
//               </div>
              
//               {/* Content */}
//               <h3 className={`text-2xl font-bold mb-4 ${feature.color}`}>
//                 {feature.title}
//               </h3>
//               <p className="text-gray-700 text-lg leading-relaxed mb-6">
//                 {feature.description}
//               </p>
              
//               {/* Learn More Link */}
//               <div className="flex items-center text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
//                 <span className="font-medium">Learn more</span>
//                 <svg 
//                   className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 shadow-xl">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div className="text-white">
//               <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
//               <div className="text-blue-100">Customer Satisfaction</div>
//             </div>
//             <div className="text-white">
//               <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
//               <div className="text-blue-100">Support Available</div>
//             </div>
//             <div className="text-white">
//               <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
//               <div className="text-blue-100">Businesses Served</div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-20 text-center">
//           <div className="max-w-2xl mx-auto">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-gray-600 text-lg mb-8">
//               Join thousands of successful companies that trust our solutions
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                 Start Free Trial
//               </button>
//               <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
//                 Schedule a Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;
import React from 'react';
import { 
  Sliders, 
  Rocket, 
  Briefcase, 
  Monitor, 
  Shield,
  Zap,
  Clock,
  Target,
  Users,
  BarChart3
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
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

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Lightning-Fast Delivery",
      description: "Rapid development cycles with agile methodology for quick time-to-market.",
      gradient: "from-blue-500/20 via-blue-400/15 to-blue-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Scalable Architecture",
      description: "Future-proof solutions designed to grow seamlessly with your business.",
      gradient: "from-cyan-500/20 via-cyan-400/15 to-cyan-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Goal-Oriented Approach",
      description: "Every project aligned with measurable business objectives and KPIs.",
      gradient: "from-indigo-500/20 via-indigo-400/15 to-indigo-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      icon: <Monitor className="w-7 h-7" />,
      title: "Premium UI/UX Design",
      description: "Intuitive interfaces crafted for exceptional user experience.",
      gradient: "from-blue-600/20 via-blue-500/15 to-blue-600/20",
      borderColor: "border-blue-600/30"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance-ready architecture.",
      gradient: "from-blue-700/20 via-blue-600/15 to-blue-700/20",
      borderColor: "border-blue-700/30"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Dedicated Team",
      description: "Expert developers, designers, and strategists assigned to your project.",
      gradient: "from-cyan-600/20 via-cyan-500/15 to-cyan-600/20",
      borderColor: "border-cyan-600/30"
    }
  ];

  const stats = [
    { value: "99.7%", label: "Client Satisfaction", icon: "⭐" },
    { value: "24/7", label: "Premium Support", icon: "🛡️" },
    { value: "500+", label: "Projects Delivered", icon: "🚀" },
    { value: "< 30 days", label: "Avg. Launch Time", icon: "⚡" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] overflow-hidden">
      {/* Background Effects without dots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32 z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-24"
        >
          {/* Premium Badge */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-blue-800/20 backdrop-blur-lg rounded-full px-5 py-2.5 mb-8 border border-blue-800/50 shadow-lg shadow-blue-900/20"
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
              THE PREMIUM ADVANTAGE
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            <span className="text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text">
              Why Choose 
            </span>
            <span className="block">
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
                TechVanguard?
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We combine cutting-edge technology with strategic expertise to deliver premium solutions that drive tangible business growth.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border ${feature.borderColor} hover:border-blue-500/50 transition-all duration-500 overflow-hidden`}
              style={{
                background: `linear-gradient(135deg, ${feature.gradient})`,
              }}
            >
              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent transition-opacity duration-500"
              />

              <div className="relative p-8">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="inline-flex p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl mb-6 transition-all duration-500 shadow-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-blue-300 group-hover:text-cyan-200 transition-colors"
                  >
                    {feature.icon}
                  </motion.div>
                </motion.div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-200 mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
                
                {/* Learn More */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-blue-300 group-hover:text-cyan-200 transition-colors duration-300"
                >
                  <span className="font-medium text-sm">Explore Feature</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>

              {/* Bottom Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 origin-left"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-blue-900/50 mb-20 overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ 
                x: [0, 20, 0],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                x: [0, -20, 0],
                y: [0, 20, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
              className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ 
                  backgroundSize: "200% 200%",
                  backgroundImage: "linear-gradient(to right, #93c5fd, #22d3ee, #93c5fd)"
                }}
                className="text-transparent bg-clip-text"
              >
                Trusted by Industry Leaders
              </motion.span>
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center group"
                >
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
                    className="text-3xl mb-2"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    variants={pulseAnimation}
                    animate="animate"
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-300 font-semibold text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-2xl md:text-3xl font-bold text-gray-200 mb-6"
            >
              Ready to Experience Premium Excellence?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-8"
            >
              Join industry leaders who trust us with their digital transformation journey.
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
                <span className="relative flex items-center justify-center gap-3">
                  Start Premium Consultation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent text-blue-300 font-semibold rounded-xl border border-blue-800/50 hover:border-blue-500/70 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900/30 backdrop-blur-sm"
              >
                View Success Stories
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;