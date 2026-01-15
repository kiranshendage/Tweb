// import React, { useEffect, useState } from 'react';
// import { Star, Quote, ChevronRight, Sparkles, TrendingUp, Users, Clock, Award } from 'lucide-react';

// const ClientTestimonials = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const testimonials = [
//     {
//       quote: "Fibance helped us scale our operations rapidly with a secure and smooth architecture",
//       name: "Ava Thompson",
//       role: "Product Manager",
//       company: "TechGrowth Inc",
//       rating: 5,
//       gradient: "from-blue-500 to-cyan-500",
//       delay: 0
//     },
//     {
//       quote: "Real-world impact! Their platform helped us improve decision making at scale!",
//       name: "Sophia Garcia",
//       role: "Data Analyst",
//       company: "DataSphere",
//       rating: 5,
//       gradient: "from-emerald-500 to-teal-500",
//       delay: 100
//     },
//     {
//       quote: "The user experience has never been better. Love how flexible the system is.",
//       name: "Emily Chen",
//       role: "UI/UX Designer",
//       company: "DesignCo",
//       rating: 5,
//       gradient: "from-purple-500 to-violet-500",
//       delay: 200
//     },
//     {
//       quote: "Deployment was incredibly fast. We went live in under a week!",
//       name: "Noah Wilson",
//       role: "DevOps Engineer",
//       company: "CloudScale",
//       rating: 5,
//       gradient: "from-amber-500 to-orange-500",
//       delay: 300
//     },
//     {
//       quote: "Their cloud and cybersecurity approach is modern, lean, and highly efficient.",
//       name: "Liam Patel",
//       role: "CTO",
//       company: "CyberNet",
//       rating: 5,
//       gradient: "from-rose-500 to-pink-500",
//       delay: 400
//     }
//   ];

//   const stats = [
//     { icon: <TrendingUp className="w-8 h-8" />, value: "4.9/5", label: "Average Rating", color: "text-blue-400" },
//     { icon: <Users className="w-8 h-8" />, value: "500+", label: "Happy Clients", color: "text-emerald-400" },
//     { icon: <Clock className="w-8 h-8" />, value: "98%", label: "Satisfaction Rate", color: "text-purple-400" },
//     { icon: <Award className="w-8 h-8" />, value: "24/7", label: "Support Available", color: "text-amber-400" }
//   ];

//   const renderStars = (count) => {
//     return Array.from({ length: count }).map((_, i) => (
//       <Star 
//         key={i} 
//         className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse"
//         style={{ animationDelay: `${i * 100}ms` }}
//       />
//     ));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-5  0 py-16 md:py-24 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container relative mx-auto px-4">
//         {/* Header */}
//         <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full mb-8 backdrop-blur-sm border border-blue-200/50">
//             <Sparkles className="w-5 h-5 text-blue-600 mr-2 animate-pulse" />
//             <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
//               Client Testimonials
//             </span>
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
//             Trusted by{' '}
//             <span className="relative inline-block">
//               <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient bg-300%">
//                 Industry Leaders
//               </span>
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-lg"></div>
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
//             Discover why professionals across industries choose our innovative solutions
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//               style={{ transitionDelay: `${testimonial.delay}ms` }}
//             >
//               {/* Glow Effect */}
//               <div className={`absolute -inset-0.5 bg-gradient-to-br ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500`}></div>
              
//               {/* Card */}
//               <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 group-hover:border-transparent transition-all duration-500 group-hover:scale-[1.02]">
//                 {/* Floating Quote Icon */}
//                 <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl flex items-center justify-center animate-float">
//                   <Quote className="w-7 h-7 text-gray-400" />
//                 </div>
                
//                 {/* Rating with Animation */}
//                 <div className="flex mb-6 transform group-hover:scale-105 transition-transform duration-300">
//                   {renderStars(testimonial.rating)}
//                 </div>
                
//                 {/* Quote with Gradient Text */}
//                 <p className="text-gray-700 text-lg mb-8 leading-relaxed relative">
//                   <span className="absolute -left-3 top-0 text-4xl text-gray-300/50 leading-none">"</span>
//                   {testimonial.quote}
//                   <span className="absolute -right-3 bottom-0 text-4xl text-gray-300/50 leading-none">"</span>
//                 </p>
                
//                 {/* Client Info with Slide Animation */}
//                 <div className="flex items-center pt-6 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
//                   <div className={`relative mr-4`}>
//                     <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
//                       {testimonial.name.charAt(0)}
//                     </div>
//                     <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border-2 border-white flex items-center justify-center">
//                       <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${testimonial.gradient}`}></div>
//                     </div>
//                   </div>
//                   <div className="flex-grow">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h4 className="font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
//                           {testimonial.name}
//                         </h4>
//                         <p className="text-gray-600 text-sm">
//                           {testimonial.role} • {testimonial.company}
//                         </p>
//                       </div>
//                       <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Animated Stats Banner */}
//         <div className={`relative mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           {/* Background Glow */}
//           <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-70 animate-gradient-slow"></div>
          
//           {/* Stats Content */}
//           <div className="relative bg-gradient-to-r from-blue-600/90 to-indigo-700/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//               {stats.map((stat, index) => (
//                 <div 
//                   key={index}
//                   className="text-center group"
//                 >
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110 mx-auto">
//                     <div className={stat.color}>
//                       {stat.icon}
//                     </div>
//                   </div>
//                   <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-count-up">
//                     {stat.value}
//                   </div>
//                   <div className="text-blue-100/90 font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
        
//       </div>

//       {/* Add custom animations to CSS */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
        
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
        
//         @keyframes countUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-fade-in {
//           animation: fadeIn 1s ease-out;
//         }
        
//         .animate-slide-up {
//           animation: slideUp 1s ease-out 0.2s both;
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .animate-gradient {
//           background-size: 300% 300%;
//           animation: gradient 4s ease infinite;
//         }
        
//         .animate-gradient-slow {
//           background-size: 300% 300%;
//           animation: gradient 8s ease infinite;
//         }
        
//         .animate-count-up {
//           animation: countUp 1s ease-out;
//         }
        
//         .bg-300% {
//           background-size: 300% 300%;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ClientTestimonials;
import React from 'react';
import { Star, Quote, ChevronRight, Sparkles, TrendingUp, Users, Clock, Award, Zap, Target, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientTestimonials = () => {
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

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const testimonials = [
    {
      quote: "TechVanguard transformed our digital infrastructure with cutting-edge solutions that scaled seamlessly with our growth.",
      name: "Alex Thompson",
      role: "Chief Technology Officer",
      company: "Fortune 500 Enterprise",
      rating: 5,
      gradient: "from-blue-600/20 via-blue-500/15 to-blue-600/20",
      icon: <Zap className="w-5 h-5" />
    },
    {
      quote: "Their team delivered a flawless e-commerce platform that increased our conversion rates by 300% in just three months.",
      name: "Sarah Chen",
      role: "Digital Director",
      company: "Global Retail Brand",
      rating: 5,
      gradient: "from-cyan-600/20 via-cyan-500/15 to-cyan-600/20",
      icon: <Target className="w-5 h-5" />
    },
    {
      quote: "Enterprise-grade security implementation that passed our strict compliance audits with flying colors. Exceptional work!",
      name: "Michael Rodriguez",
      role: "Security Director",
      company: "Financial Institution",
      rating: 5,
      gradient: "from-indigo-600/20 via-indigo-500/15 to-indigo-600/20",
      icon: <Shield className="w-5 h-5" />
    },
    {
      quote: "The mobile app they developed for us has over 1M downloads and maintains a 4.9-star rating. Truly premium quality.",
      name: "Jessica Williams",
      role: "Product Manager",
      company: "Tech Startup",
      rating: 5,
      gradient: "from-blue-700/20 via-blue-600/15 to-blue-700/20",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      quote: "Their cloud migration strategy saved us 40% in infrastructure costs while improving performance dramatically.",
      name: "David Kim",
      role: "Cloud Architect",
      company: "SaaS Company",
      rating: 5,
      gradient: "from-cyan-700/20 via-cyan-600/15 to-cyan-700/20",
      icon: <Users className="w-5 h-5" />
    },
    {
      quote: "From concept to launch in record time with impeccable execution. Their dedication to excellence is unmatched.",
      name: "Emma Wilson",
      role: "CEO",
      company: "HealthTech Innovator",
      rating: 5,
      gradient: "from-blue-800/20 via-blue-700/15 to-blue-800/20",
      icon: <Award className="w-5 h-5" />
    }
  ];

  const stats = [
    { 
      icon: <TrendingUp className="w-7 h-7" />, 
      value: "4.9/5", 
      label: "Premium Rating", 
      gradient: "from-blue-400 to-cyan-300"
    },
    { 
      icon: <Users className="w-7 h-7" />, 
      value: "500+", 
      label: "Enterprise Clients", 
      gradient: "from-blue-300 to-cyan-200"
    },
    { 
      icon: <Clock className="w-7 h-7" />, 
      value: "99.7%", 
      label: "Satisfaction Rate", 
      gradient: "from-blue-500 to-cyan-400"
    },
    { 
      icon: <Award className="w-7 h-7" />, 
      value: "24/7", 
      label: "Premium Support", 
      gradient: "from-blue-400 to-cyan-300"
    }
  ];

  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: i * 0.1,
          type: "spring",
          stiffness: 100
        }}
      >
        <Star 
          className="w-5 h-5 fill-blue-400 text-blue-400"
        />
      </motion.div>
    ));
  };

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
              CLIENT SUCCESS STORIES
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
              Trusted by 
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
                Industry Leaders
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
            Hear from industry leaders who have experienced the TechVanguard difference in digital transformation.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 overflow-hidden`}
              style={{
                background: `linear-gradient(135deg, ${testimonial.gradient})`,
              }}
            >
              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent transition-opacity duration-500"
              />

              <div className="relative p-8">
                {/* Top Section */}
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 20, scale: 1.1 }}
                    className="p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl transition-all duration-500"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-blue-300 group-hover:text-cyan-200 transition-colors"
                    >
                      {testimonial.icon}
                    </motion.div>
                  </motion.div>
                  
                  {/* Quote Icon */}
                  <motion.div
                    variants={floatAnimation}
                    animate="animate"
                  >
                    <Quote className="w-6 h-6 text-blue-900/30 group-hover:text-blue-700/50 transition-colors" />
                  </motion.div>
                </div>

                {/* Rating */}
                <div className="flex mb-6 transform group-hover:scale-105 transition-transform duration-300">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Quote */}
                <p className="text-gray-300 text-base mb-8 leading-relaxed relative group-hover:text-gray-200 transition-colors">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -left-2 top-0 text-3xl text-blue-900/30 leading-none"
                  >
                    "
                  </motion.span>
                  {testimonial.quote}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute -right-2 bottom-0 text-3xl text-blue-900/30 leading-none"
                  >
                    "
                  </motion.span>
                </p>
                
                {/* Client Info */}
                <div className="flex items-center pt-6 border-t border-blue-900/30 group-hover:border-blue-700/50 transition-colors duration-300">
                  <div className="relative mr-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-900/40 to-blue-800/30 flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-transform duration-500"
                    >
                      {testimonial.name.charAt(0)}
                    </motion.div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0a0a0f] rounded-full border-2 border-blue-900/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"></div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                          {testimonial.role}
                        </p>
                        <p className="text-blue-300 text-xs font-medium mt-1">
                          {testimonial.company}
                        </p>
                      </div>
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-5 h-5 text-blue-400 group-hover:text-cyan-300 transform transition-all duration-300" />
                      </motion.div>
                    </div>
                  </div>
                </div>
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

        {/* Premium Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
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
              transition={{ duration: 0.6, delay: 0.7 }}
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
                Premium Excellence Metrics
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
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="inline-flex p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl mb-4 transition-all duration-500"
                  >
                    <div className="text-blue-300 group-hover:text-cyan-200 transition-colors">
                      {stat.icon}
                    </div>
                  </motion.div>
                  <motion.div
                    variants={pulseAnimation}
                    animate="animate"
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-2xl md:text-3xl font-bold text-gray-200 mb-6"
            >
              Join Our Premium Client Community
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-8"
            >
              Experience the TechVanguard difference and transform your digital journey.
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
                  Start Your Success Story
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent text-blue-300 font-semibold rounded-xl border border-blue-800/50 hover:border-blue-500/70 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900/30 backdrop-blur-sm"
              >
                View All Case Studies
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientTestimonials;