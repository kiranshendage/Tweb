import React from 'react';
import { Star, Quote, ChevronRight, Sparkles, TrendingUp, Users, Clock, Award, Zap, Target, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const stats = [
    { 
      icon: <TrendingUp className="w-7 h-7" />, 
      value: "4.9/5", 
      label: "Premium Rating", 
      gradient: "from-blue-400 to-cyan-300"
    },
    { 
      icon: <Users className="w-7 h-7" />, 
      value: "5+", 
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
                <span className="relative flex items-center justify-center gap-3"
                   onClick={() => navigate("/contact")}>
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
                   onClick={() => navigate("/contact")}
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