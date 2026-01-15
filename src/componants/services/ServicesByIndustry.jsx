// // // src/components/ServicesByIndustry.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { 
//   FaHeartbeat,
//   FaGraduationCap,
//   FaBuilding,
//   FaCode,
//   FaShieldAlt,
//   FaLaptopCode,
//   FaChartLine,
//   FaUsers,
//   FaArrowRight,
//   FaCheck
// } from 'react-icons/fa';

// const ServicesByIndustry = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   const industries = [
//     {
//       icon: FaHeartbeat,
//       title: "Healthcare",
//       description: "Medical device security and compliance solutions for hospitals and healthcare providers.",
//       features: ["HIPAA Compliance", "Medical Device Security", "Patient Data Protection", "Healthcare IT"],
//       color: "from-red-500 to-pink-500",
//       iconBg: "bg-gradient-to-br from-red-500 to-pink-500"
//     },
//     {
//       icon: FaGraduationCap,
//       title: "Higher Education",
//       description: "Cybersecurity solutions for universities and educational institutions.",
//       features: ["Campus Security", "Student Data Protection", "Research Security", "Compliance"],
//       color: "from-blue-500 to-cyan-500",
//       iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
//     },
//     {
//       icon: FaBuilding,
//       title: "Banking & Finance",
//       description: "Financial security solutions meeting FFIEC and regulatory requirements.",
//       features: ["FFIEC Compliance", "Fraud Prevention", "Transaction Security", "Risk Management"],
//       color: "from-green-500 to-emerald-500",
//       iconBg: "bg-gradient-to-br from-green-500 to-emerald-500"
//     },
//     {
//       icon: FaCode,
//       title: "Software & SaaS",
//       description: "Security services for SaaS solutions and software companies.",
//       features: ["SaaS Security", "Cloud Protection", "API Security", "DevSecOps"],
//       color: "from-purple-500 to-indigo-500",
//       iconBg: "bg-gradient-to-br from-purple-500 to-indigo-500"
//     }
//   ];

//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
//         {/* Section Header */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
//             Industry Solutions
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Services by <span className="text-blue-600">Industry</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
//             Tailored technology solutions for specific industry needs and compliance requirements
//           </p>
//         </motion.div>

//         {/* Industries Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16"
//         >
//           {industries.map((industry, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ y: -5 }}
//               className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
//             >
//               <div className="p-6">
//                 {/* Icon */}
//                 <div className={`inline-flex p-3 ${industry.iconBg} rounded-xl mb-4`}>
//                   <industry.icon className="w-6 h-6 text-white" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-bold text-gray-900 mb-3">
//                   {industry.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-sm mb-4 leading-relaxed">
//                   {industry.description}
//                 </p>

//                 {/* Features */}
//                 <div className="space-y-2 mb-6">
//                   {industry.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center gap-2">
//                       <FaCheck className="w-3 h-3 text-green-500 flex-shrink-0" />
//                       <span className="text-gray-700 text-xs font-medium">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA */}
//                 <button className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center gap-1 group/btn">
//                   Learn More
//                   <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={inView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-6 md:p-8 mb-12 overflow-hidden"
//         >
//           <div className="relative">
//             {/* Background pattern */}
//             <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
//             <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-2xl"></div>

//             <div className="relative z-10">
//               <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
//                 Industry Trust & Results
//               </h3>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 {[
//                   { icon: FaShieldAlt, value: "100%", label: "Compliance", desc: "Industry standards" },
//                   { icon: FaLaptopCode, value: "24/7", label: "Monitoring", desc: "Real-time protection" },
//                   { icon: FaChartLine, value: "99.9%", label: "Uptime", desc: "Service reliability" },
//                   { icon: FaUsers, value: "500+", label: "Clients", desc: "Across industries" },
//                 ].map((stat, index) => (
//                   <div key={index} className="text-center">
//                     <div className="inline-flex p-2 bg-white/20 rounded-full mb-3">
//                       <stat.icon className="w-5 h-5 text-white" />
//                     </div>
//                     <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
//                     <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
//                     <div className="text-blue-100 text-xs">{stat.desc}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center"
//         >
//           <div className="max-w-xl mx-auto">
//             <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
//               Custom Solutions for Your Industry
//             </h3>
//             <p className="text-gray-600 mb-6 text-sm md:text-base">
//               We specialize in creating tailored technology solutions for unique industry challenges.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base"
//               >
//                 Schedule Consultation
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 text-sm md:text-base"
//               >
//                 View Case Studies
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesByIndustry;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaBuilding,
  FaCode,
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaCheck,
  FaShieldAlt,
  FaServer,
  FaMobileAlt,
  FaCloud,
  FaGraduationCap,
  FaHeartbeat,
  FaShoppingCart,
  FaIndustry
} from 'react-icons/fa';

const ServicesByIndustry = () => {
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

  const industries = [
    {
      icon: FaBuilding,
      title: "Enterprise",
      description: "Full-stack digital transformation solutions for large-scale businesses.",
      features: ["Digital Transformation", "Cloud Migration", "Legacy Modernization", "Scalable Architecture"],
      gradient: "from-blue-600/20 via-blue-500/15 to-blue-600/20",
      iconColor: "text-blue-300",
      iconBg: "bg-gradient-to-br from-blue-900/40 to-blue-800/30"
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce",
      description: "High-performance online stores with secure payment integrations.",
      features: ["Platform Development", "Payment Gateways", "Inventory Systems", "Analytics Dashboard"],
      gradient: "from-purple-600/20 via-purple-500/15 to-purple-600/20",
      iconColor: "text-purple-300",
      iconBg: "bg-gradient-to-br from-purple-900/40 to-purple-800/30"
    },
    {
      icon: FaGraduationCap,
      title: "EdTech",
      description: "Interactive learning platforms and educational technology solutions.",
      features: ["LMS Development", "E-learning Apps", "Student Portals", "Virtual Classrooms"],
      gradient: "from-cyan-600/20 via-cyan-500/15 to-cyan-600/20",
      iconColor: "text-cyan-300",
      iconBg: "bg-gradient-to-br from-cyan-900/40 to-cyan-800/30"
    },
    {
      icon: FaHeartbeat,
      title: "HealthTech",
      description: "HIPAA-compliant healthcare applications and telemedicine solutions.",
      features: ["Medical Apps", "Patient Portals", "Telemedicine", "Health Analytics"],
      gradient: "from-red-600/20 via-red-500/15 to-red-600/20",
      iconColor: "text-red-300",
      iconBg: "bg-gradient-to-br from-red-900/40 to-red-800/30"
    }
  ];

  const technologies = [
    { icon: FaCode, label: "Web Development", value: "100+" },
    { icon: FaMobileAlt, label: "Mobile Apps", value: "50+" },
    { icon: FaCloud, label: "Cloud Projects", value: "200+" },
    { icon: FaServer, label: "Infrastructure", value: "75+" }
  ];

  return (
    <section className="relative py-10 md:py-10 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] overflow-hidden">
      {/* Background Effects without dots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Premium Badge */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-blue-800/20 backdrop-blur-lg rounded-full px-5 py-2.5 mb-6 border border-blue-800/50 shadow-lg shadow-blue-900/20"
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
              INDUSTRY-SPECIFIC SOLUTIONS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            <span className="text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text">
              Premium Solutions for 
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
                Every Industry
              </motion.span>
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Tailored technology solutions designed to address unique industry challenges and drive digital transformation
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 overflow-hidden`}
              style={{
                background: `linear-gradient(135deg, ${industry.gradient})`,
              }}
            >
              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent transition-opacity duration-500"
              />
              
              <div className="relative p-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`inline-flex p-3 ${industry.iconBg} rounded-xl mb-5 transition-transform duration-500`}
                >
                  <industry.icon className={`w-6 h-6 ${industry.iconColor} transition-transform`} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-white transition-colors">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-5 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {industry.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {industry.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/50 flex items-center justify-center"
                      >
                        <FaCheck className="w-2 h-2 text-blue-300" />
                      </motion.div>
                      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue-300 text-sm font-semibold hover:text-cyan-200 transition-colors duration-300 flex items-center gap-2"
                >
                  Explore Solutions
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight className="w-3 h-3" />
                  </motion.div>
                </motion.button>
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

        {/* Technology Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 md:p-10 mb-16 border border-blue-900/50 overflow-hidden"
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
              className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl"
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
              className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-gray-200 text-center mb-10"
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
                Technology Excellence
              </motion.span>
              <span className="block text-gray-400 text-lg mt-2">Across All Industries</span>
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="inline-flex p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl mb-4 transition-all duration-500"
                  >
                    <tech.icon className="w-6 h-6 text-blue-300 group-hover:text-cyan-200 transition-colors" />
                  </motion.div>
                  <motion.div
                    variants={pulseAnimation}
                    animate="animate"
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent mb-1"
                  >
                    {tech.value}
                  </motion.div>
                  <div className="text-gray-300 text-sm font-semibold mb-1">{tech.label}</div>
                  <div className="text-gray-500 text-xs">Projects Delivered</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <motion.h3
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-2xl md:text-3xl font-bold text-gray-200 mb-6"
            >
              Ready to Transform Your Industry?
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-8 text-lg"
            >
              Let's build custom solutions tailored to your specific industry needs and challenges.
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
                  Schedule Premium Consultation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent text-blue-300 font-semibold rounded-xl border border-blue-800/50 hover:border-blue-500/70 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900/30 backdrop-blur-sm"
              >
                View Industry Case Studies
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesByIndustry;