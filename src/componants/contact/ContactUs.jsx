// // import React, { useState } from 'react';
// // import { Send, Mail, MapPin, Phone, CheckCircle, MessageSquare, Building, User, Clock, Globe, Shield, Zap } from 'lucide-react';
// // import { motion } from 'framer-motion';
// // import { useInView } from 'react-intersection-observer';
// // import emailjs from '@emailjs/browser';

// // const ContactUs = () => {
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         company: '',
// //         message: '',
// //         service: ''
// //     });
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [isSubmitted, setIsSubmitted] = useState(false);
// //     const [activeField, setActiveField] = useState(null);

// //     const { ref, inView } = useInView({
// //         triggerOnce: true,
// //         threshold: 0.1,
// //     });

// //     useEffect(() => {
// //         emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
// //     }, []);

// //     const services = [
// //         'Web Development',
// //         'App Development',
// //         'Digital Marketing',
// //         'Cloud Services',
// //         'Testing & QA',
// //         'Custom Solution'
// //     ];

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData(prev => ({
// //             ...prev,
// //             [name]: value
// //         }));
// //     };

// //     const handleFocus = (fieldName) => {
// //         setActiveField(fieldName);
// //     };

// //     const handleBlur = () => {
// //         setActiveField(null);
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         setIsSubmitting(true);

// //         // Simulate API call
// //         await new Promise(resolve => setTimeout(resolve, 1500));

// //         setIsSubmitting(false);
// //         setIsSubmitted(true);

// //         // Reset form after 3 seconds
// //         setTimeout(() => {
// //             setIsSubmitted(false);
// //             setFormData({
// //                 name: '',
// //                 email: '',
// //                 company: '',
// //                 message: '',
// //                 service: ''
// //             });
// //         }, 3000);
// //     };

// //     const FieldIcon = ({ field, isActive }) => {
// //         const icons = {
// //             name: <User className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
// //             email: <Mail className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
// //             company: <Building className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
// //             message: <MessageSquare className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
// //             service: <Zap className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
// //         };
// //         return icons[field] || <User className="w-5 h-5" />;
// //     };

// //     return (
// //         <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] overflow-hidden">
// //             {/* Background Effects without dots */}
// //             <div className="absolute inset-0 overflow-hidden">
// //                 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
// //                 <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl" />
// //             </div>

// //             <div className="relative container mx-auto px-4 py-20 md:py-32 z-10">
// //                 {/* Header */}
// //                 <motion.div
// //                     ref={ref}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={inView ? { opacity: 1, y: 0 } : {}}
// //                     transition={{ duration: 0.6 }}
// //                     className="text-center mb-20 md:mb-24"
// //                 >
// //                     {/* Premium Badge */}
// //                     <motion.div
// //                         initial={{ opacity: 0, scale: 0.9 }}
// //                         animate={inView ? { opacity: 1, scale: 1 } : {}}
// //                         className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-blue-800/20 backdrop-blur-lg rounded-full px-5 py-2.5 mb-8 border border-blue-800/50 shadow-lg shadow-blue-900/20"
// //                     >
// //                         <div className="relative">
// //                             <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20"></div>
// //                             <div className="relative w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
// //                         </div>
// //                         <span className="text-sm font-semibold text-blue-300 tracking-wider">
// //                             PREMIUM CONSULTATION
// //                         </span>
// //                     </motion.div>

// //                     {/* Main Heading */}
// //                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
// //                         <span className="text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text">
// //                             Start Your
// //                         </span>
// //                         <span className="block">
// //                             <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text animate-gradient-x">
// //                                 Digital Transformation
// //                             </span>
// //                         </span>
// //                     </h1>

// //                     {/* Subtitle */}
// //                     <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
// //                         Share your vision with our premium team, and we'll craft a tailored solution that drives measurable business growth.
// //                     </p>
// //                 </motion.div>

// //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
// //                     {/* Contact Form - Left Side */}
// //                     <motion.div
// //                         initial={{ opacity: 0, x: -30 }}
// //                         animate={inView ? { opacity: 1, x: 0 } : {}}
// //                         transition={{ duration: 0.6, delay: 0.2 }}
// //                         className="relative"
// //                     >
// //                         {/* Form Container */}
// //                         <div className="relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-lg rounded-2xl border border-blue-900/30 p-8 md:p-12">
// //                             {isSubmitted ? (
// //                                 /* Success Animation */
// //                                 <div className="text-center py-16 space-y-8">
// //                                     <motion.div
// //                                         initial={{ scale: 0 }}
// //                                         animate={{ scale: 1 }}
// //                                         transition={{ type: "spring", stiffness: 200 }}
// //                                         className="relative mx-auto w-24 h-24"
// //                                     >
// //                                         <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-xl opacity-30"></div>
// //                                         <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
// //                                             <CheckCircle className="w-12 h-12 text-white" />
// //                                         </div>
// //                                     </motion.div>
// //                                     <div className="space-y-4">
// //                                         <h3 className="text-2xl font-bold text-gray-200">
// //                                             Premium Consultation Scheduled!
// //                                         </h3>
// //                                         <p className="text-gray-400">
// //                                             Our senior consultant will contact you within 2 hours to discuss your project.
// //                                         </p>
// //                                     </div>
// //                                     <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
// //                                 </div>
// //                             ) : (
// //                                 <form onSubmit={handleSubmit} className="space-y-8">
// //                                     {/* Name Field */}
// //                                     <div className="group">
// //                                         <div className="flex items-center justify-between mb-3">
// //                                             <label className="text-sm font-semibold text-gray-300">
// //                                                 Full Name
// //                                             </label>
// //                                             <span className="text-xs text-gray-500">Required</span>
// //                                         </div>
// //                                         <div className="relative">
// //                                             <input
// //                                                 type="text"
// //                                                 name="name"
// //                                                 value={formData.name}
// //                                                 onChange={handleChange}
// //                                                 onFocus={() => handleFocus('name')}
// //                                                 onBlur={handleBlur}
// //                                                 required
// //                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500"
// //                                                 placeholder="John Doe"
// //                                             />
// //                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'name' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
// //                                                 <FieldIcon field="name" isActive={activeField === 'name'} />
// //                                             </div>
// //                                         </div>
// //                                     </div>

// //                                     {/* Email Field */}
// //                                     <div className="group">
// //                                         <div className="flex items-center justify-between mb-3">
// //                                             <label className="text-sm font-semibold text-gray-300">
// //                                                 Business Email
// //                                             </label>
// //                                             <span className="text-xs text-gray-500">Required</span>
// //                                         </div>
// //                                         <div className="relative">
// //                                             <input
// //                                                 type="email"
// //                                                 name="email"
// //                                                 value={formData.email}
// //                                                 onChange={handleChange}
// //                                                 onFocus={() => handleFocus('email')}
// //                                                 onBlur={handleBlur}
// //                                                 required
// //                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500"
// //                                                 placeholder="john@company.com"
// //                                             />
// //                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'email' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
// //                                                 <FieldIcon field="email" isActive={activeField === 'email'} />
// //                                             </div>
// //                                         </div>
// //                                     </div>

// //                                     {/* Company Field */}
// //                                     <div className="group">
// //                                         <div className="flex items-center justify-between mb-3">
// //                                             <label className="text-sm font-semibold text-gray-300">
// //                                                 Company
// //                                             </label>
// //                                             <span className="text-xs text-gray-500">Optional</span>
// //                                         </div>
// //                                         <div className="relative">
// //                                             <input
// //                                                 type="text"
// //                                                 name="company"
// //                                                 value={formData.company}
// //                                                 onChange={handleChange}
// //                                                 onFocus={() => handleFocus('company')}
// //                                                 onBlur={handleBlur}
// //                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500"
// //                                                 placeholder="Your Company Inc."
// //                                             />
// //                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'company' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
// //                                                 <FieldIcon field="company" isActive={activeField === 'company'} />
// //                                             </div>
// //                                         </div>
// //                                     </div>

// //                                     {/* Service Selection */}
// //                                     <div className="group">
// //                                         <div className="flex items-center justify-between mb-3">
// //                                             <label className="text-sm font-semibold text-gray-300">
// //                                                 Service Needed
// //                                             </label>
// //                                             <span className="text-xs text-gray-500">Select one</span>
// //                                         </div>
// //                                         <div className="relative">
// //                                             <select
// //                                                 name="service"
// //                                                 value={formData.service}
// //                                                 onChange={handleChange}
// //                                                 onFocus={() => handleFocus('service')}
// //                                                 onBlur={handleBlur}
// //                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-300 appearance-none"
// //                                             >
// //                                                 <option value="" className="text-gray-500">Select a service</option>
// //                                                 {services.map((service, index) => (
// //                                                     <option key={index} value={service} className="text-gray-900">
// //                                                         {service}
// //                                                     </option>
// //                                                 ))}
// //                                             </select>
// //                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'service' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
// //                                                 <FieldIcon field="service" isActive={activeField === 'service'} />
// //                                             </div>
// //                                         </div>
// //                                     </div>

// //                                     {/* Message Field */}
// //                                     <div className="group">
// //                                         <div className="flex items-center justify-between mb-3">
// //                                             <label className="text-sm font-semibold text-gray-300">
// //                                                 Project Details
// //                                             </label>
// //                                             <span className="text-xs text-gray-500">Required</span>
// //                                         </div>
// //                                         <div className="relative">
// //                                             <textarea
// //                                                 name="message"
// //                                                 value={formData.message}
// //                                                 onChange={handleChange}
// //                                                 onFocus={() => handleFocus('message')}
// //                                                 onBlur={handleBlur}
// //                                                 required
// //                                                 rows={5}
// //                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none"
// //                                                 placeholder="Describe your project, timeline, and specific requirements..."
// //                                             />
// //                                             <div className={`absolute top-4 right-4 transition-all duration-300 ${activeField === 'message' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
// //                                                 <FieldIcon field="message" isActive={activeField === 'message'} />
// //                                             </div>
// //                                         </div>
// //                                     </div>

// //                                     {/* Submit Button */}
// //                                     <div className="pt-6">
// //                                         <motion.button
// //                                             whileHover={{ scale: 1.02 }}
// //                                             whileTap={{ scale: 0.98 }}
// //                                             type="submit"
// //                                             disabled={isSubmitting}
// //                                             className="group relative w-full py-5 px-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden"
// //                                         >
// //                                             <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
// //                                             <span className="relative z-10 flex items-center justify-center gap-3">
// //                                                 {isSubmitting ? (
// //                                                     <div className="flex items-center gap-3">
// //                                                         <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
// //                                                         <span>Processing...</span>
// //                                                     </div>
// //                                                 ) : (
// //                                                     <>
// //                                                         <Send className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
// //                                                         <span className="text-lg">Schedule Premium Consultation</span>
// //                                                     </>
// //                                                 )}
// //                                             </span>
// //                                         </motion.button>
// //                                         <p className="text-center text-gray-500 text-sm mt-4">
// //                                             Senior consultant will contact you within 2 hours
// //                                         </p>
// //                                     </div>
// //                                 </form>
// //                             )}
// //                         </div>
// //                     </motion.div>

// //                     {/* Contact Information - Right Side */}
// //                     <motion.div
// //                         initial={{ opacity: 0, x: 30 }}
// //                         animate={inView ? { opacity: 1, x: 0 } : {}}
// //                         transition={{ duration: 0.6, delay: 0.3 }}
// //                         className="space-y-8"
// //                     >
// //                         {/* Contact Cards */}
// //                         <div className="space-y-6">
// //                             {/* Email Card */}
// //                             <motion.div
// //                                 whileHover={{ y: -5 }}
// //                                 className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-blue-500/50"
// //                             >
// //                                 <div className="flex items-start gap-6">
// //                                     <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl group-hover:scale-110 transition-all duration-500">
// //                                         <Mail className="w-7 h-7 text-blue-300 group-hover:text-cyan-200 transition-colors" />
// //                                     </div>
// //                                     <div className="flex-grow">
// //                                         <h3 className="text-xl font-bold text-gray-200 mb-3">Email Us</h3>
// //                                         <a
// //                                             href="mailto:contact@techvanguard.com"
// //                                             className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text hover:from-blue-300 hover:to-cyan-200 transition-all duration-300"
// //                                         >
// //                                             contact@techvanguard.com
// //                                         </a>
// //                                         <p className="text-gray-400 mt-4 leading-relaxed">
// //                                             Preferred for detailed project briefs and RFPs. Our team responds within 2 hours.
// //                                         </p>
// //                                     </div>
// //                                 </div>
// //                             </motion.div>

// //                             {/* Location Card */}
// //                             <motion.div
// //                                 whileHover={{ y: -5 }}
// //                                 className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-cyan-500/50"
// //                             >
// //                                 <div className="flex items-start gap-6">
// //                                     <div className="flex-shrink-0 p-4 bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 rounded-xl group-hover:scale-110 transition-all duration-500">
// //                                         <Globe className="w-7 h-7 text-cyan-300 group-hover:text-blue-200 transition-colors" />
// //                                     </div>
// //                                     <div className="flex-grow">
// //                                         <h3 className="text-xl font-bold text-gray-200 mb-3">Global Headquarters</h3>
// //                                         <p className="text-2xl font-semibold text-gray-200">
// //                                             Pune, India
// //                                         </p>
// //                                         <p className="text-gray-400 mt-4 leading-relaxed">
// //                                             Serving clients worldwide with remote excellence and strategic on-site collaboration.
// //                                         </p>
// //                                     </div>
// //                                 </div>
// //                             </motion.div>

// //                             {/* Phone Card */}
// //                             <motion.div
// //                                 whileHover={{ y: -5 }}
// //                                 className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-blue-600/50"
// //                             >
// //                                 <div className="flex items-start gap-6">
// //                                     <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-800/40 to-blue-700/30 rounded-xl group-hover:scale-110 transition-all duration-500">
// //                                         <Phone className="w-7 h-7 text-blue-300 group-hover:text-cyan-200 transition-colors" />
// //                                     </div>
// //                                     <div className="flex-grow">
// //                                         <h3 className="text-xl font-bold text-gray-200 mb-3">Call Us</h3>
// //                                         <p className="text-2xl font-semibold text-gray-200">
// //                                             +91 98765 43210
// //                                         </p>
// //                                         <p className="text-gray-400 mt-4 leading-relaxed">
// //                                             Available Monday to Saturday, 9 AM to 7 PM IST. Premium support for urgent inquiries.
// //                                         </p>
// //                                     </div>
// //                                 </div>
// //                             </motion.div>
// //                         </div>

// //                         {/* Stats Grid */}
// //                         <div className="grid grid-cols-2 gap-4">
// //                             {[
// //                                 { value: '2h', label: 'Avg. Response', icon: <Clock className="w-4 h-4" /> },
// //                                 { value: '99.7%', label: 'Satisfaction', icon: <Shield className="w-4 h-4" /> },
// //                                 { value: '500+', label: 'Premium Projects', icon: <Zap className="w-4 h-4" /> },
// //                                 { value: '24/7', label: 'Enterprise Support', icon: <Globe className="w-4 h-4" /> }
// //                             ].map((stat, index) => (
// //                                 <motion.div
// //                                     key={index}
// //                                     initial={{ opacity: 0, y: 20 }}
// //                                     animate={inView ? { opacity: 1, y: 0 } : {}}
// //                                     transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
// //                                     whileHover={{ scale: 1.05 }}
// //                                     className="bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-xl border border-blue-900/30 p-5 group hover:border-blue-500/50 transition-all duration-500"
// //                                 >
// //                                     <div className="flex items-center gap-3 mb-3">
// //                                         <div className="p-2 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-lg group-hover:scale-110 transition-all duration-500">
// //                                             <div className="text-blue-300 group-hover:text-cyan-200 transition-colors">
// //                                                 {stat.icon}
// //                                             </div>
// //                                         </div>
// //                                         <div className="text-lg font-bold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
// //                                             {stat.value}
// //                                         </div>
// //                                     </div>
// //                                     <div className="text-gray-400 text-sm font-medium">
// //                                         {stat.label}
// //                                     </div>
// //                                 </motion.div>
// //                             ))}
// //                         </div>

// //                         {/* Guarantee Card */}
// //                         <motion.div
// //                             initial={{ opacity: 0, y: 20 }}
// //                             animate={inView ? { opacity: 1, y: 0 } : {}}
// //                             transition={{ duration: 0.5, delay: 0.9 }}
// //                             className="bg-gradient-to-br from-blue-900/20 via-blue-800/15 to-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-900/50 p-6"
// //                         >
// //                             <div className="flex items-start gap-4">
// //                                 <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
// //                                 <div>
// //                                     <h4 className="font-bold text-gray-200 mb-2">Premium Guarantee</h4>
// //                                     <p className="text-gray-400 text-sm">
// //                                         Every consultation includes a comprehensive project assessment, feasibility study, and customized roadmap at no cost.
// //                                     </p>
// //                                 </div>
// //                             </div>
// //                         </motion.div>
// //                     </motion.div>
// //                 </div>

// //                 {/* Footer */}
// //                 <motion.div
// //                     initial={{ opacity: 0 }}
// //                     animate={inView ? { opacity: 1 } : {}}
// //                     transition={{ duration: 0.6, delay: 1 }}
// //                     className="mt-20 pt-12 border-t border-blue-900/30 text-center"
// //                 >
// //                     <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
// //                         <div className="mb-6 md:mb-0">
// //                             <p className="text-gray-400">
// //                                 <span className="font-semibold text-gray-300">Need immediate assistance?</span>{' '}
// //                                 Call us at{' '}
// //                                 <a href="tel:+919876543210" className="text-blue-400 hover:text-cyan-300 font-bold transition-colors duration-300">
// //                                     +91 98765 43210
// //                                 </a>
// //                             </p>
// //                         </div>
// //                         <div>
// //                             <p className="text-gray-500 text-sm">
// //                                 © {new Date().getFullYear()} TechVanguard. All rights reserved.
// //                             </p>
// //                             <p className="text-gray-600 text-xs mt-1">
// //                                 Premium Digital Solutions Partner
// //                             </p>
// //                         </div>
// //                     </div>
// //                 </motion.div>
// //             </div>

// //             {/* Gradient animation */}
// //             <style jsx>{`
// //                 @keyframes gradient-x {
// //                     0%, 100% { background-position: 0% 50%; }
// //                     50% { background-position: 100% 50%; }
// //                 }
// //                 .animate-gradient-x {
// //                     background-size: 200% 200%;
// //                     animation: gradient-x 3s ease infinite;
// //                 }
// //             `}</style>
// //         </div>
// //     );
// // };

// // export default ContactUs;


// import React, { useState, useEffect } from 'react';
// import { Send, Mail, MapPin, Phone, CheckCircle, MessageSquare, Building, User, Clock, Globe, Shield, Zap } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import emailjs from '@emailjs/browser';

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         company: '',
//         message: '',
//         service: ''
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [activeField, setActiveField] = useState(null);
//     const [error, setError] = useState('');

//     const { ref, inView } = useInView({
//         triggerOnce: true,
//         threshold: 0.1,
//     });



//     const services = [
//         'Web Development',
//         'App Development',
//         'Digital Marketing',
//         'Cloud Services',
//         'Testing & QA',
//         'Custom Solution'
//     ];

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//         setError('');
//     };

//     const handleFocus = (fieldName) => {
//         setActiveField(fieldName);
//     };

//     const handleBlur = () => {
//         setActiveField(null);
//     };

//     // ===== UPDATED SUBMIT WITH EMAILJS =====
//     // ===== INITIALIZE EMAILJS =====
//     useEffect(() => {
//         // ✅ Changed from process.env.REACT_APP_* to import.meta.env.VITE_*
//         emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
//     }, []);

//     // ===== SUBMIT HANDLER =====
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!formData.name || !formData.email || !formData.message) {
//             setError('Please fill in all required fields');
//             return;
//         }

//         setIsSubmitting(true);
//         setError('');

//         try {
//             // ✅ Changed from process.env.REACT_APP_* to import.meta.env.VITE_*
//             await emailjs.send(
//                 import.meta.env.VITE_EMAILJS_SERVICE_ID,
//                 import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//                 {
//                     name: formData.name,
//                     email: formData.email,
//                     company: formData.company || 'Not provided',
//                     service: formData.service || 'Not specified',
//                     message: formData.message
//                 }
//             );

//             setIsSubmitting(false);
//             setIsSubmitted(true);

//             setTimeout(() => {
//                 setIsSubmitted(false);
//                 setFormData({
//                     name: '',
//                     email: '',
//                     company: '',
//                     message: '',
//                     service: ''
//                 });
//             }, 3000);
//         } catch (error) {
//             console.error('Failed to send email:', error);
//             setError('Failed to send message. Please try again.');
//             setIsSubmitting(false);
//         }
//     };
//     const FieldIcon = ({ field, isActive }) => {
//         const icons = {
//             name: <User className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
//             email: <Mail className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
//             company: <Building className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
//             message: <MessageSquare className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
//             service: <Zap className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
//         };
//         return icons[field] || <User className="w-5 h-5" />;
//     };

//     return (
//         <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] overflow-hidden">
//             {/* Background Effects without dots */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
//                 <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl" />
//             </div>

//             <div className="relative container mx-auto px-4 py-20 md:py-32 z-10">
//                 {/* Header */}
//                 <motion.div
//                     ref={ref}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6 }}
//                     className="text-center mb-20 md:mb-24"
//                 >
//                     {/* Premium Badge */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={inView ? { opacity: 1, scale: 1 } : {}}
//                         className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-blue-800/20 backdrop-blur-lg rounded-full px-5 py-2.5 mb-8 border border-blue-800/50 shadow-lg shadow-blue-900/20"
//                     >
//                         <div className="relative">
//                             <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20"></div>
//                             <div className="relative w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
//                         </div>
//                         <span className="text-sm font-semibold text-blue-300 tracking-wider">
//                             PREMIUM CONSULTATION
//                         </span>
//                     </motion.div>

//                     {/* Main Heading */}
//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
//                         <span className="text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text">
//                             Start Your
//                         </span>
//                         <span className="block">
//                             <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text animate-gradient-x">
//                                 Digital Transformation
//                             </span>
//                         </span>
//                     </h1>

//                     {/* Subtitle */}
//                     <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//                         Share your vision with our premium team, and we'll craft a tailored solution that drives measurable business growth.
//                     </p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
//                     {/* Contact Form - Left Side */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -30 }}
//                         animate={inView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="relative"
//                     >
//                         {/* Form Container */}
//                         <div className="relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-lg rounded-2xl border border-blue-900/30 p-8 md:p-12">
//                             {isSubmitted ? (
//                                 /* Success Animation */
//                                 <div className="text-center py-16 space-y-8">
//                                     <motion.div
//                                         initial={{ scale: 0 }}
//                                         animate={{ scale: 1 }}
//                                         transition={{ type: "spring", stiffness: 200 }}
//                                         className="relative mx-auto w-24 h-24"
//                                     >
//                                         <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-xl opacity-30"></div>
//                                         <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
//                                             <CheckCircle className="w-12 h-12 text-white" />
//                                         </div>
//                                     </motion.div>
//                                     <div className="space-y-4">
//                                         <h3 className="text-2xl font-bold text-gray-200">
//                                             Premium Consultation Scheduled!
//                                         </h3>
//                                         <p className="text-gray-400">
//                                             Our senior consultant will contact you within 2 hours to discuss your project.
//                                         </p>
//                                     </div>
//                                     <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
//                                 </div>
//                             ) : (
//                                 <form onSubmit={handleSubmit} className="space-y-8">
//                                     {/* Error Message Display */}
//                                     {error && (
//                                         <motion.div
//                                             initial={{ opacity: 0, y: -10 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300 text-sm"
//                                         >
//                                             {error}
//                                         </motion.div>
//                                     )}

//                                     {/* Name Field */}
//                                     <div className="group">
//                                         <div className="flex items-center justify-between mb-3">
//                                             <label className="text-sm font-semibold text-gray-300">
//                                                 Full Name
//                                             </label>
//                                             <span className="text-xs text-gray-500">Required</span>
//                                         </div>
//                                         <div className="relative">
//                                             <input
//                                                 type="text"
//                                                 name="name"
//                                                 value={formData.name}
//                                                 onChange={handleChange}
//                                                 onFocus={() => handleFocus('name')}
//                                                 onBlur={handleBlur}
//                                                 required
//                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500"
//                                                 placeholder="John Doe"
//                                             />
//                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'name' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
//                                                 <FieldIcon field="name" isActive={activeField === 'name'} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Email Field */}
//                                     <div className="group">
//                                         <div className="flex items-center justify-between mb-3">
//                                             <label className="text-sm font-semibold text-gray-300">
//                                                 Business Email
//                                             </label>
//                                             <span className="text-xs text-gray-500">Required</span>
//                                         </div>
//                                         <div className="relative">
//                                             <input
//                                                 type="email"
//                                                 name="email"
//                                                 value={formData.email}
//                                                 onChange={handleChange}
//                                                 onFocus={() => handleFocus('email')}
//                                                 onBlur={handleBlur}
//                                                 required
//                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500"
//                                                 placeholder="john@company.com"
//                                             />
//                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'email' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
//                                                 <FieldIcon field="email" isActive={activeField === 'email'} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Company Field */}
//                                     <div className="group">
//                                         <div className="flex items-center justify-between mb-3">
//                                             <label className="text-sm font-semibold text-gray-300">
//                                                 Company
//                                             </label>
//                                             <span className="text-xs text-gray-500">Optional</span>
//                                         </div>
//                                         <div className="relative">
//                                             <input
//                                                 type="text"
//                                                 name="company"
//                                                 value={formData.company}
//                                                 onChange={handleChange}
//                                                 onFocus={() => handleFocus('company')}
//                                                 onBlur={handleBlur}
//                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500"
//                                                 placeholder="Your Company Inc."
//                                             />
//                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'company' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
//                                                 <FieldIcon field="company" isActive={activeField === 'company'} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Service Selection */}
//                                     <div className="group">
//                                         <div className="flex items-center justify-between mb-3">
//                                             <label className="text-sm font-semibold text-gray-300">
//                                                 Service Needed
//                                             </label>
//                                             <span className="text-xs text-gray-500">Select one</span>
//                                         </div>
//                                         <div className="relative">
//                                             <select
//                                                 name="service"
//                                                 value={formData.service}
//                                                 onChange={handleChange}
//                                                 onFocus={() => handleFocus('service')}
//                                                 onBlur={handleBlur}
//                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-300 appearance-none"
//                                             >
//                                                 <option value="" className="text-gray-500">Select a service</option>
//                                                 {services.map((service, index) => (
//                                                     <option key={index} value={service} className="text-gray-900">
//                                                         {service}
//                                                     </option>
//                                                 ))}
//                                             </select>
//                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'service' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
//                                                 <FieldIcon field="service" isActive={activeField === 'service'} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Message Field */}
//                                     <div className="group">
//                                         <div className="flex items-center justify-between mb-3">
//                                             <label className="text-sm font-semibold text-gray-300">
//                                                 Project Details
//                                             </label>
//                                             <span className="text-xs text-gray-500">Required</span>
//                                         </div>
//                                         <div className="relative">
//                                             <textarea
//                                                 name="message"
//                                                 value={formData.message}
//                                                 onChange={handleChange}
//                                                 onFocus={() => handleFocus('message')}
//                                                 onBlur={handleBlur}
//                                                 required
//                                                 rows={5}
//                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none"
//                                                 placeholder="Describe your project, timeline, and specific requirements..."
//                                             />
//                                             <div className={`absolute top-4 right-4 transition-all duration-300 ${activeField === 'message' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
//                                                 <FieldIcon field="message" isActive={activeField === 'message'} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Submit Button */}
//                                     <div className="pt-6">
//                                         <motion.button
//                                             whileHover={{ scale: 1.02 }}
//                                             whileTap={{ scale: 0.98 }}
//                                             type="submit"
//                                             disabled={isSubmitting}
//                                             className="group relative w-full py-5 px-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden"
//                                         >
//                                             <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//                                             <span className="relative z-10 flex items-center justify-center gap-3">
//                                                 {isSubmitting ? (
//                                                     <div className="flex items-center gap-3">
//                                                         <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                                                         <span>Processing...</span>
//                                                     </div>
//                                                 ) : (
//                                                     <>
//                                                         <Send className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
//                                                         <span className="text-lg">Schedule Premium Consultation</span>
//                                                     </>
//                                                 )}
//                                             </span>
//                                         </motion.button>
//                                         <p className="text-center text-gray-500 text-sm mt-4">
//                                             Senior consultant will contact you within 2 hours
//                                         </p>
//                                     </div>
//                                 </form>
//                             )}
//                         </div>
//                     </motion.div>

//                     {/* Contact Information - Right Side */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 30 }}
//                         animate={inView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ duration: 0.6, delay: 0.3 }}
//                         className="space-y-8"
//                     >
//                         {/* Contact Cards */}
//                         <div className="space-y-6">
//                             {/* Email Card */}
//                             <motion.div
//                                 whileHover={{ y: -5 }}
//                                 className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-blue-500/50"
//                             >
//                                 <div className="flex items-start gap-6">
//                                     <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl group-hover:scale-110 transition-all duration-500">
//                                         <Mail className="w-7 h-7 text-blue-300 group-hover:text-cyan-200 transition-colors" />
//                                     </div>
//                                     <div className="flex-grow">
//                                         <h3 className="text-xl font-bold text-gray-200 mb-3">Email Us</h3>
//                                         <a
//                                             href="mailto:contact@techvanguard.com"
//                                             className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text hover:from-blue-300 hover:to-cyan-200 transition-all duration-300"
//                                         >
//                                             contact@techvanguard.com
//                                         </a>
//                                         <p className="text-gray-400 mt-4 leading-relaxed">
//                                             Preferred for detailed project briefs and RFPs. Our team responds within 2 hours.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </motion.div>

//                             {/* Location Card */}
//                             <motion.div
//                                 whileHover={{ y: -5 }}
//                                 className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-cyan-500/50"
//                             >
//                                 <div className="flex items-start gap-6">
//                                     <div className="flex-shrink-0 p-4 bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 rounded-xl group-hover:scale-110 transition-all duration-500">
//                                         <Globe className="w-7 h-7 text-cyan-300 group-hover:text-blue-200 transition-colors" />
//                                     </div>
//                                     <div className="flex-grow">
//                                         <h3 className="text-xl font-bold text-gray-200 mb-3">Global Headquarters</h3>
//                                         <p className="text-2xl font-semibold text-gray-200">
//                                             Pune, India
//                                         </p>
//                                         <p className="text-gray-400 mt-4 leading-relaxed">
//                                             Serving clients worldwide with remote excellence and strategic on-site collaboration.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </motion.div>

//                             {/* Phone Card */}
//                             <motion.div
//                                 whileHover={{ y: -5 }}
//                                 className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-blue-600/50"
//                             >
//                                 <div className="flex items-start gap-6">
//                                     <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-800/40 to-blue-700/30 rounded-xl group-hover:scale-110 transition-all duration-500">
//                                         <Phone className="w-7 h-7 text-blue-300 group-hover:text-cyan-200 transition-colors" />
//                                     </div>
//                                     <div className="flex-grow">
//                                         <h3 className="text-xl font-bold text-gray-200 mb-3">Call Us</h3>
//                                         <p className="text-2xl font-semibold text-gray-200">
//                                             +91 98765 43210
//                                         </p>
//                                         <p className="text-gray-400 mt-4 leading-relaxed">
//                                             Available Monday to Saturday, 9 AM to 7 PM IST. Premium support for urgent inquiries.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </div>

//                         {/* Stats Grid */}
//                         <div className="grid grid-cols-2 gap-4">
//                             {[
//                                 { value: '2h', label: 'Avg. Response', icon: <Clock className="w-4 h-4" /> },
//                                 { value: '99.7%', label: 'Satisfaction', icon: <Shield className="w-4 h-4" /> },
//                                 { value: '500+', label: 'Premium Projects', icon: <Zap className="w-4 h-4" /> },
//                                 { value: '24/7', label: 'Enterprise Support', icon: <Globe className="w-4 h-4" /> }
//                             ].map((stat, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                                     transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//                                     whileHover={{ scale: 1.05 }}
//                                     className="bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-xl border border-blue-900/30 p-5 group hover:border-blue-500/50 transition-all duration-500"
//                                 >
//                                     <div className="flex items-center gap-3 mb-3">
//                                         <div className="p-2 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-lg group-hover:scale-110 transition-all duration-500">
//                                             <div className="text-blue-300 group-hover:text-cyan-200 transition-colors">
//                                                 {stat.icon}
//                                             </div>
//                                         </div>
//                                         <div className="text-lg font-bold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
//                                             {stat.value}
//                                         </div>
//                                     </div>
//                                     <div className="text-gray-400 text-sm font-medium">
//                                         {stat.label}
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>

//                         {/* Guarantee Card */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={inView ? { opacity: 1, y: 0 } : {}}
//                             transition={{ duration: 0.5, delay: 0.9 }}
//                             className="bg-gradient-to-br from-blue-900/20 via-blue-800/15 to-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-900/50 p-6"
//                         >
//                             <div className="flex items-start gap-4">
//                                 <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
//                                 <div>
//                                     <h4 className="font-bold text-gray-200 mb-2">Premium Guarantee</h4>
//                                     <p className="text-gray-400 text-sm">
//                                         Every consultation includes a comprehensive project assessment, feasibility study, and customized roadmap at no cost.
//                                     </p>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 </div>

//                 {/* Footer */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={inView ? { opacity: 1 } : {}}
//                     transition={{ duration: 0.6, delay: 1 }}
//                     className="mt-20 pt-12 border-t border-blue-900/30 text-center"
//                 >
//                     <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
//                         <div className="mb-6 md:mb-0">
//                             <p className="text-gray-400">
//                                 <span className="font-semibold text-gray-300">Need immediate assistance?</span>{' '}
//                                 Call us at{' '}
//                                 <a href="tel:+919876543210" className="text-blue-400 hover:text-cyan-300 font-bold transition-colors duration-300">
//                                     +91 98765 43210
//                                 </a>
//                             </p>
//                         </div>
//                         <div>
//                             <p className="text-gray-500 text-sm">
//                                 © {new Date().getFullYear()} TechVanguard. All rights reserved.
//                             </p>
//                             <p className="text-gray-600 text-xs mt-1">
//                                 Premium Digital Solutions Partner
//                             </p>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Gradient animation */}
//             <style jsx>{`
//                 @keyframes gradient-x {
//                     0%, 100% { background-position: 0% 50%; }
//                     50% { background-position: 100% 50%; }
//                 }
//                 .animate-gradient-x {
//                     background-size: 200% 200%;
//                     animation: gradient-x 3s ease infinite;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default ContactUs;


// import React, { useState, useEffect } from 'react';
// import { Send, Mail, Phone, CheckCircle, MessageSquare, Building, User, Clock, Globe, Shield, Zap } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         company: '',
//         message: '',
//         service: ''
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [activeField, setActiveField] = useState(null);
//     const [error, setError] = useState('');

//     const services = [
//         'Web Development',
//         'App Development',
//         'Digital Marketing',
//         'Cloud Services',
//         'Testing & QA',
//         'Custom Solution'
//     ];

//     // ===== INITIALIZE EMAILJS =====
//     useEffect(() => {
//         const userID = 'g-BUr-N3dIlOsqtCr';
//         console.log('Initializing EmailJS with User ID:', userID);
//         emailjs.init(userID);
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//         setError('');
//     };

//     const handleFocus = (fieldName) => {
//         setActiveField(fieldName);
//     };

//     const handleBlur = () => {
//         setActiveField(null);
//     };

//     // ===== SUBMIT HANDLER =====
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!formData.name || !formData.email || !formData.message) {
//             setError('Please fill in all required fields');
//             return;
//         }

//         setIsSubmitting(true);
//         setError('');

//         try {
//             const templateParams = {
//                 name: formData.name,
//                 email: formData.email,
//                 company: formData.company || 'Not provided',
//                 service: formData.service || 'Not specified',
//                 message: formData.message
//             };

//             console.log('Sending email with params:', templateParams);

//             await emailjs.send(
//                 'service_tfuf8hf',
//                 'template_2v4y0m7',
//                 templateParams
//             );

//             console.log('Email sent successfully!');
//             setIsSubmitting(false);
//             setIsSubmitted(true);

//             setTimeout(() => {
//                 setIsSubmitted(false);
//                 setFormData({
//                     name: '',
//                     email: '',
//                     company: '',
//                     message: '',
//                     service: ''
//                 });
//             }, 3000);
//         } catch (error) {
//             console.error('Failed to send email:', error);
//             setError(`Failed to send message: ${error.text || error.message}`);
//             setIsSubmitting(false);
//         }
//     };

//     const FieldIcon = ({ field, isActive }) => {
//         const icons = {
//             name: <User className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
//             email: <Mail className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
//             company: <Building className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
//             message: <MessageSquare className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
//             service: <Zap className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
//         };
//         return icons[field] || <User className="w-5 h-5" />;
//     };

//     return (
//         <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] overflow-hidden">
//             {/* Background Effects */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
//                 <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl" />
//             </div>

//             <div className="relative container mx-auto px-4 py-20 md:py-32 z-10">
//                 {/* Header */}
//                 <div className="text-center mb-20 md:mb-24">
//                     {/* Premium Badge */}
//                     <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-blue-800/20 backdrop-blur-lg rounded-full px-5 py-2.5 mb-8 border border-blue-800/50 shadow-lg shadow-blue-900/20">
//                         <div className="relative">
//                             <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20"></div>
//                             <div className="relative w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
//                         </div>
//                         <span className="text-sm font-semibold text-blue-300 tracking-wider">
//                             PREMIUM CONSULTATION
//                         </span>
//                     </div>

//                     {/* Main Heading */}
//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
//                         <span className="text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text">
//                             Start Your
//                         </span>
//                         <span className="block">
//                             <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text animate-gradient-x">
//                                 Digital Transformation
//                             </span>
//                         </span>
//                     </h1>

//                     {/* Subtitle */}
//                     <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//                         Share your vision with our premium team, and we'll craft a tailored solution that drives measurable business growth.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
//                     {/* Contact Form - Left Side */}
//                     <div className="relative">
//                         {/* Form Container */}
//                         <div className="relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-lg rounded-2xl border border-blue-900/30 p-8 md:p-12">
//                             {isSubmitted ? (
//                                 /* Success Animation */
//                                 <div className="text-center py-16 space-y-8">
//                                     <div className="relative mx-auto w-24 h-24">
//                                         <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-xl opacity-30"></div>
//                                         <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
//                                             <CheckCircle className="w-12 h-12 text-white" />
//                                         </div>
//                                     </div>
//                                     <div className="space-y-4">
//                                         <h3 className="text-2xl font-bold text-gray-200">
//                                             Premium Consultation Scheduled!
//                                         </h3>
//                                         <p className="text-gray-400">
//                                             Our senior consultant will contact you within 2 hours to discuss your project.
//                                         </p>
//                                     </div>
//                                     <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-8">
//                                     {/* Error Message Display */}
//                                     {error && (
//                                         <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300 text-sm">
//                                             {error}
//                                         </div>
//                                     )}

//                                     {/* Name Field */}
//                                     <div className="group">
//                                         <div className="flex items-center justify-between mb-3">
//                                             <label className="text-sm font-semibold text-gray-300">
//                                                 Full Name
//                                             </label>
//                                             <span className="text-xs text-gray-500">Required</span>
//                                         </div>
//                                         <div className="relative">
//                                             <input
//                                                 type="text"
//                                                 name="name"
//                                                 value={formData.name}
//                                                 onChange={handleChange}
//                                                 onFocus={() => handleFocus('name')}
//                                                 onBlur={handleBlur}
//                                                 required
//                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500 text-white"
//                                                 placeholder="John Doe"
//                                             />
//                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'name' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
//                                                 <FieldIcon field="name" isActive={activeField === 'name'} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Email Field */}
//                                     <div className="group">
//                                         <div className="flex items-center justify-between mb-3">
//                                             <label className="text-sm font-semibold text-gray-300">
//                                                 Business Email
//                                             </label>
//                                             <span className="text-xs text-gray-500">Required</span>
//                                         </div>
//                                         <div className="relative">
//                                             <input
//                                                 type="email"
//                                                 name="email"
//                                                 value={formData.email}
//                                                 onChange={handleChange}
//                                                 onFocus={() => handleFocus('email')}
//                                                 onBlur={handleBlur}
//                                                 required
//                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500 text-white"
//                                                 placeholder="john@company.com"
//                                             />
//                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'email' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
//                                                 <FieldIcon field="email" isActive={activeField === 'email'} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Company Field */}
//                                     <div className="group">
//                                         <div className="flex items-center justify-between mb-3">
//                                             <label className="text-sm font-semibold text-gray-300">
//                                                 Company
//                                             </label>
//                                             <span className="text-xs text-gray-500">Optional</span>
//                                         </div>
//                                         <div className="relative">
//                                             <input
//                                                 type="text"
//                                                 name="company"
//                                                 value={formData.company}
//                                                 onChange={handleChange}
//                                                 onFocus={() => handleFocus('company')}
//                                                 onBlur={handleBlur}
//                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500 text-white"
//                                                 placeholder="Your Company Inc."
//                                             />
//                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'company' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
//                                                 <FieldIcon field="company" isActive={activeField === 'company'} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Service Selection */}
//                                     <div className="group">
//                                         <div className="flex items-center justify-between mb-3">
//                                             <label className="text-sm font-semibold text-gray-300">
//                                                 Service Needed
//                                             </label>
//                                             <span className="text-xs text-gray-500">Select one</span>
//                                         </div>
//                                         <div className="relative">
//                                             <select
//                                                 name="service"
//                                                 value={formData.service}
//                                                 onChange={handleChange}
//                                                 onFocus={() => handleFocus('service')}
//                                                 onBlur={handleBlur}
//                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-300 appearance-none"
//                                             >
//                                                 <option value="">Select a service</option>
//                                                 {services.map((service, index) => (
//                                                     <option key={index} value={service}>
//                                                         {service}
//                                                     </option>
//                                                 ))}
//                                             </select>
//                                             <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 pointer-events-none ${activeField === 'service' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
//                                                 <Zap className="w-5 h-5" />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Message Field */}
//                                     <div className="group">
//                                         <div className="flex items-center justify-between mb-3">
//                                             <label className="text-sm font-semibold text-gray-300">
//                                                 Project Details
//                                             </label>
//                                             <span className="text-xs text-gray-500">Required</span>
//                                         </div>
//                                         <div className="relative">
//                                             <textarea
//                                                 name="message"
//                                                 value={formData.message}
//                                                 onChange={handleChange}
//                                                 onFocus={() => handleFocus('message')}
//                                                 onBlur={handleBlur}
//                                                 required
//                                                 rows={5}
//                                                 className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none text-white"
//                                                 placeholder="Describe your project, timeline, and specific requirements..."
//                                             />
//                                             <div className={`absolute top-4 right-4 transition-all duration-300 ${activeField === 'message' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
//                                                 <FieldIcon field="message" isActive={activeField === 'message'} />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Submit Button */}
//                                     <div className="pt-6">
//                                         <button
//                                             onClick={handleSubmit}
//                                             disabled={isSubmitting}
//                                             className="group relative w-full py-5 px-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden disabled:opacity-50 cursor-pointer"
//                                         >
//                                             <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//                                             <span className="relative z-10 flex items-center justify-center gap-3">
//                                                 {isSubmitting ? (
//                                                     <div className="flex items-center gap-3">
//                                                         <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                                                         <span>Processing...</span>
//                                                     </div>
//                                                 ) : (
//                                                     <>
//                                                         <Send className="w-5 h-5" />
//                                                         <span className="text-lg">Schedule Premium Consultation</span>
//                                                     </>
//                                                 )}
//                                             </span>
//                                         </button>
//                                         <p className="text-center text-gray-500 text-sm mt-4">
//                                             Senior consultant will contact you within 2 hours
//                                         </p>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     {/* Contact Information - Right Side */}
//                     <div className="space-y-8">
//                         {/* Contact Cards */}
//                         <div className="space-y-6">
//                             {/* Email Card */}
//                             <div className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-blue-500/50">
//                                 <div className="flex items-start gap-6">
//                                     <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl group-hover:scale-110 transition-all duration-500">
//                                         <Mail className="w-7 h-7 text-blue-300 group-hover:text-cyan-200 transition-colors" />
//                                     </div>
//                                     <div className="flex-grow">
//                                         <h3 className="text-xl font-bold text-gray-200 mb-3">Email Us</h3>
//                                         <a
//                                             href="mailto:contact@techvanguard.com"
//                                             className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text hover:from-blue-300 hover:to-cyan-200 transition-all duration-300"
//                                         >
//                                             contact@techvanguard.com
//                                         </a>
//                                         <p className="text-gray-400 mt-4 leading-relaxed">
//                                             Preferred for detailed project briefs and RFPs. Our team responds within 2 hours.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Location Card */}
//                             <div className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-cyan-500/50">
//                                 <div className="flex items-start gap-6">
//                                     <div className="flex-shrink-0 p-4 bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 rounded-xl group-hover:scale-110 transition-all duration-500">
//                                         <Globe className="w-7 h-7 text-cyan-300 group-hover:text-blue-200 transition-colors" />
//                                     </div>
//                                     <div className="flex-grow">
//                                         <h3 className="text-xl font-bold text-gray-200 mb-3">Global Headquarters</h3>
//                                         <p className="text-2xl font-semibold text-gray-200">
//                                             Pune, India
//                                         </p>
//                                         <p className="text-gray-400 mt-4 leading-relaxed">
//                                             Serving clients worldwide with remote excellence and strategic on-site collaboration.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Phone Card */}
//                             <div className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-blue-600/50">
//                                 <div className="flex items-start gap-6">
//                                     <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-800/40 to-blue-700/30 rounded-xl group-hover:scale-110 transition-all duration-500">
//                                         <Phone className="w-7 h-7 text-blue-300 group-hover:text-cyan-200 transition-colors" />
//                                     </div>
//                                     <div className="flex-grow">
//                                         <h3 className="text-xl font-bold text-gray-200 mb-3">Call Us</h3>
//                                         <p className="text-2xl font-semibold text-gray-200">
//                                             +91 98765 43210
//                                         </p>
//                                         <p className="text-gray-400 mt-4 leading-relaxed">
//                                             Available Monday to Saturday, 9 AM to 7 PM IST. Premium support for urgent inquiries.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Stats Grid */}
//                         <div className="grid grid-cols-2 gap-4">
//                             {[
//                                 { value: '2h', label: 'Avg. Response', icon: <Clock className="w-4 h-4" /> },
//                                 { value: '99.7%', label: 'Satisfaction', icon: <Shield className="w-4 h-4" /> },
//                                 { value: '500+', label: 'Premium Projects', icon: <Zap className="w-4 h-4" /> },
//                                 { value: '24/7', label: 'Enterprise Support', icon: <Globe className="w-4 h-4" /> }
//                             ].map((stat, index) => (
//                                 <div
//                                     key={index}
//                                     className="bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-xl border border-blue-900/30 p-5 group hover:border-blue-500/50 transition-all duration-500"
//                                 >
//                                     <div className="flex items-center gap-3 mb-3">
//                                         <div className="p-2 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-lg group-hover:scale-110 transition-all duration-500">
//                                             <div className="text-blue-300 group-hover:text-cyan-200 transition-colors">
//                                                 {stat.icon}
//                                             </div>
//                                         </div>
//                                         <div className="text-lg font-bold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
//                                             {stat.value}
//                                         </div>
//                                     </div>
//                                     <div className="text-gray-400 text-sm font-medium">
//                                         {stat.label}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Guarantee Card */}
//                         <div className="bg-gradient-to-br from-blue-900/20 via-blue-800/15 to-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-900/50 p-6">
//                             <div className="flex items-start gap-4">
//                                 <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
//                                 <div>
//                                     <h4 className="font-bold text-gray-200 mb-2">Premium Guarantee</h4>
//                                     <p className="text-gray-400 text-sm">
//                                         Every consultation includes a comprehensive project assessment, feasibility study, and customized roadmap at no cost.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="mt-20 pt-12 border-t border-blue-900/30 text-center">
//                     <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
//                         <div className="mb-6 md:mb-0">
//                             <p className="text-gray-400">
//                                 <span className="font-semibold text-gray-300">Need immediate assistance?</span>{' '}
//                                 Call us at{' '}
//                                 <a href="tel:+919876543210" className="text-blue-400 hover:text-cyan-300 font-bold transition-colors duration-300">
//                                     +91 98765 43210
//                                 </a>
//                             </p>
//                         </div>
//                         <div>
//                             <p className="text-gray-500 text-sm">
//                                 © {new Date().getFullYear()} TechVanguard. All rights reserved.
//                             </p>
//                             <p className="text-gray-600 text-xs mt-1">
//                                 Premium Digital Solutions Partner
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <style>{`
//                 @keyframes gradient-x {
//                     0%, 100% { background-position: 0% 50%; }
//                     50% { background-position: 100% 50%; }
//                 }
//                 .animate-gradient-x {
//                     background-size: 200% 200%;
//                     animation: gradient-x 3s ease infinite;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default ContactUs;



import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, CheckCircle, MessageSquare, Building, User, Clock, Globe, Shield, Zap } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        service: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeField, setActiveField] = useState(null);
    const [error, setError] = useState('');

    const services = [
        'Web Development',
        'App Development',
        'Digital Marketing',
        'Cloud Services',
        'Testing & QA',
        'Custom Solution'
    ];

    // ===== INITIALIZE EMAILJS =====
    useEffect(() => {
        const userID = 'g-BUr-N3dIlOsqtCr';
        console.log('Initializing EmailJS with User ID:', userID);
        emailjs.init(userID);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    const handleFocus = (fieldName) => {
        setActiveField(fieldName);
    };

    const handleBlur = () => {
        setActiveField(null);
    };

    // ===== SUBMIT HANDLER =====
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                company: formData.company || 'Not provided',
                service: formData.service || 'Not specified',
                message: formData.message
            };

            console.log('Sending email with params:', templateParams);

            await emailjs.send(
                'service_tfuf8hf',
                'template_91z7r1d',
                templateParams
            );

            console.log('Email sent successfully!');
            setIsSubmitting(false);
            setIsSubmitted(true);

            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: '',
                    service: ''
                });
            }, 3000);
        } catch (error) {
            console.error('Failed to send email:', error);
            setError(`Failed to send message: ${error.text || error.message}`);
            setIsSubmitting(false);
        }
    };

    const FieldIcon = ({ field, isActive }) => {
        const icons = {
            name: <User className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
            email: <Mail className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
            company: <Building className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
            message: <MessageSquare className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />,
            service: <Zap className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
        };
        return icons[field] || <User className="w-5 h-5" />;
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 py-20 md:py-32 z-10">
                {/* Header */}
                <div className="text-center mb-20 md:mb-24">
                    {/* Premium Badge */}
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-blue-800/20 backdrop-blur-lg rounded-full px-5 py-2.5 mb-8 border border-blue-800/50 shadow-lg shadow-blue-900/20">
                        <div className="relative">
                            <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20"></div>
                            <div className="relative w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-300 tracking-wider">
                            PREMIUM CONSULTATION
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        <span className="text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text">
                            Start Your
                        </span>
                        <span className="block">
                            <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text animate-gradient-x">
                                Digital Transformation
                            </span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Share your vision with our premium team, and we'll craft a tailored solution that drives measurable business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Contact Form - Left Side */}
                    <div className="relative">
                        {/* Form Container */}
                        <div className="relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-lg rounded-2xl border border-blue-900/30 p-8 md:p-12">
                            {isSubmitted ? (
                                /* Success Animation */
                                <div className="text-center py-16 space-y-8">
                                    <div className="relative mx-auto w-24 h-24">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-xl opacity-30"></div>
                                        <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-gray-200">
                                            Premium Consultation Scheduled!
                                        </h3>
                                        <p className="text-gray-400">
                                            Our senior consultant will contact you within 2 hours to discuss your project.
                                        </p>
                                    </div>
                                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {/* Error Message Display */}
                                    {error && (
                                        <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    {/* Name Field */}
                                    <div className="group">
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="text-sm font-semibold text-gray-300">
                                                Full Name
                                            </label>
                                            <span className="text-xs text-gray-500">Required</span>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('name')}
                                                onBlur={handleBlur}
                                                required
                                                className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500 text-white"
                                                placeholder="John Doe"
                                            />
                                            <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'name' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
                                                <FieldIcon field="name" isActive={activeField === 'name'} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="group">
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="text-sm font-semibold text-gray-300">
                                                Business Email
                                            </label>
                                            <span className="text-xs text-gray-500">Required</span>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('email')}
                                                onBlur={handleBlur}
                                                required
                                                className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500 text-white"
                                                placeholder="john@company.com"
                                            />
                                            <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'email' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
                                                <FieldIcon field="email" isActive={activeField === 'email'} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company Field */}
                                    <div className="group">
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="text-sm font-semibold text-gray-300">
                                                Company
                                            </label>
                                            <span className="text-xs text-gray-500">Optional</span>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('company')}
                                                onBlur={handleBlur}
                                                className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500 text-white"
                                                placeholder="Your Company Inc."
                                            />
                                            <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ${activeField === 'company' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
                                                <FieldIcon field="company" isActive={activeField === 'company'} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Selection */}
                                    <div className="group">

                                        <div className="flex items-center justify-between mb-3">
                                            <label className="text-sm font-semibold text-gray-300">
                                                Service Needed
                                            </label>
                                            <span className="text-xs text-gray-500">Select one</span>
                                        </div>
                                        <div className="relative">
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('service')}
                                                onBlur={handleBlur}
                                                className="w-full px-6 py-4 bg-[#0a0a0f] backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-300 cursor-pointer"
                                                style={{
                                                    // Ensure dropdown arrow is visible
                                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'right 1rem center',
                                                    backgroundSize: '1.5rem',
                                                    paddingRight: '3rem'
                                                }}
                                            >
                                                <option value="" className="bg-[#0a0a0f] text-gray-400">
                                                    Select a service
                                                </option>
                                                {services.map((service, index) => (
                                                    <option
                                                        key={index}
                                                        value={service}
                                                        className="bg-[#0a0a0f] text-gray-200 py-2"
                                                    >
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div className="group">
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="text-sm font-semibold text-gray-300">
                                                Project Details
                                            </label>
                                            <span className="text-xs text-gray-500">Required</span>
                                        </div>
                                        <div className="relative">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('message')}
                                                onBlur={handleBlur}
                                                required
                                                rows={5}
                                                className="w-full px-6 py-4 bg-blue-900/20 backdrop-blur-sm border-2 border-blue-900/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none text-white"
                                                placeholder="Describe your project, timeline, and specific requirements..."
                                            />
                                            <div className={`absolute top-4 right-4 transition-all duration-300 ${activeField === 'message' ? 'text-blue-400 scale-110' : 'text-gray-500'}`}>
                                                <FieldIcon field="message" isActive={activeField === 'message'} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-6">
                                        <button
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="group relative w-full py-5 px-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden disabled:opacity-50 cursor-pointer"
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                            <span className="relative z-10 flex items-center justify-center gap-3">
                                                {isSubmitting ? (
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                        <span>Processing...</span>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5" />
                                                        <span className="text-lg">Schedule Premium Consultation</span>
                                                    </>
                                                )}
                                            </span>
                                        </button>
                                        <p className="text-center text-gray-500 text-sm mt-4">
                                            Senior consultant will contact you within 2 hours
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Contact Information - Right Side */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <div className="space-y-6">
                            {/* Email Card */}
                            <div className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-blue-500/50">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl group-hover:scale-110 transition-all duration-500">
                                        <Mail className="w-7 h-7 text-blue-300 group-hover:text-cyan-200 transition-colors" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-200 mb-3">Email Us</h3>
                                        <a
                                            href="mailto:contact@techvanguard.com"
                                            className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text hover:from-blue-300 hover:to-cyan-200 transition-all duration-300"
                                        >
                                            contact@techvanguard.com
                                        </a>
                                        <p className="text-gray-400 mt-4 leading-relaxed">
                                            Preferred for detailed project briefs and RFPs. Our team responds within 2 hours.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-cyan-500/50">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 rounded-xl group-hover:scale-110 transition-all duration-500">
                                        <Globe className="w-7 h-7 text-cyan-300 group-hover:text-blue-200 transition-colors" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-200 mb-3">Global Headquarters</h3>
                                        <p className="text-2xl font-semibold text-gray-200">
                                            Pune, India
                                        </p>
                                        <p className="text-gray-400 mt-4 leading-relaxed">
                                            Serving clients worldwide with remote excellence and strategic on-site collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="group relative bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8 transition-all duration-500 hover:border-blue-600/50">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-800/40 to-blue-700/30 rounded-xl group-hover:scale-110 transition-all duration-500">
                                        <Phone className="w-7 h-7 text-blue-300 group-hover:text-cyan-200 transition-colors" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-200 mb-3">Call Us</h3>
                                        <p className="text-2xl font-semibold text-gray-200">
                                            +91 98765 43210
                                        </p>
                                        <p className="text-gray-400 mt-4 leading-relaxed">
                                            Available Monday to Saturday, 9 AM to 7 PM IST. Premium support for urgent inquiries.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '2h', label: 'Avg. Response', icon: <Clock className="w-4 h-4" /> },
                                { value: '99.7%', label: 'Satisfaction', icon: <Shield className="w-4 h-4" /> },
                                { value: '500+', label: 'Premium Projects', icon: <Zap className="w-4 h-4" /> },
                                { value: '24/7', label: 'Enterprise Support', icon: <Globe className="w-4 h-4" /> }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-b from-blue-900/10 to-blue-800/5 backdrop-blur-sm rounded-xl border border-blue-900/30 p-5 group hover:border-blue-500/50 transition-all duration-500"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-lg group-hover:scale-110 transition-all duration-500">
                                            <div className="text-blue-300 group-hover:text-cyan-200 transition-colors">
                                                {stat.icon}
                                            </div>
                                        </div>
                                        <div className="text-lg font-bold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                                            {stat.value}
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-sm font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Guarantee Card */}
                        <div className="bg-gradient-to-br from-blue-900/20 via-blue-800/15 to-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-900/50 p-6">
                            <div className="flex items-start gap-4">
                                <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-200 mb-2">Premium Guarantee</h4>
                                    <p className="text-gray-400 text-sm">
                                        Every consultation includes a comprehensive project assessment, feasibility study, and customized roadmap at no cost.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-20 pt-12 border-t border-blue-900/30 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
                        <div className="mb-6 md:mb-0">
                            <p className="text-gray-400">
                                <span className="font-semibold text-gray-300">Need immediate assistance?</span>{' '}
                                Call us at{' '}
                                <a href="tel:+919876543210" className="text-blue-400 hover:text-cyan-300 font-bold transition-colors duration-300">
                                    +91 98765 43210
                                </a>
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">
                                © {new Date().getFullYear()} TechVanguard. All rights reserved.
                            </p>
                            <p className="text-gray-600 text-xs mt-1">
                                Premium Digital Solutions Partner
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
            `}</style>
        </div>
    );
};

export default ContactUs;