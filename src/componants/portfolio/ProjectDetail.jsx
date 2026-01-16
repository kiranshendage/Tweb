// // src/pages/ProjectDetail.jsx
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import projects from "../../data/projectsData";

// export default function ProjectDetail() {
//   const { id } = useParams();
//   const project = projects.find((p) => p.id === parseInt(id));

//   if (!project) {
//     return (
//       <div className="p-8 text-white">
//         <Link to="/portfolio" className="text-blue-400 hover:underline">
//           ← Back to Portfolio
//         </Link>
//         <p>Project not found.</p>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-32">
//       <div className="max-w-4xl mx-auto px-6">
//         <Link
//           to="/portfolio"
//           className="text-blue-400 hover:underline mb-6 inline-block"
//         >
//           ← Back to Portfolio
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//           {project.title}
//         </h1>

//         <img
//           src={project.img}
//           alt={project.title}
//           className="w-full h-72 object-cover rounded-2xl mb-6"
//         />

//         <p className="text-gray-400 mb-6">{project.longDesc}</p>

//         <div className="flex gap-2 flex-wrap mb-6">
//           {project.tech.map((tech, index) => (
//             <span
//               key={index}
//               className="bg-indigo-900/20 text-indigo-300 px-3 py-1 rounded-full text-sm"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {project.link && (
//           <a
//             href={project.link}
//             target="_blank"
//             className="text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-2xl transition"
//           >
//             Visit Project
//           </a>
//         )}
//       </div>
//     </section>
//   );
// }
// src/pages/ProjectDetail.jsx


// import React, { useEffect, useState, useRef } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import {
//   FaArrowLeft,
//    FaArrowRight,
//   FaExternalLinkAlt,
//   FaGithub,
//   FaStar,
//   FaCode,
//   FaRocket,
//   FaUsers,
//   FaCalendar,
//   FaCheck,
//   FaTools,
//   FaLayerGroup,
//   FaGlobe,
//   FaChevronLeft,
//   FaChevronRight,
//   FaPlay,
//   FaHeart,
//   FaShare,
//   FaCopy,
//   FaTwitter,
//   FaLinkedin,
//   FaFire
// } from "react-icons/fa";
// import { HiSparkles, HiLightningBolt, HiChartBar, HiShieldCheck, HiClock, HiUsers } from "react-icons/hi";
// import projects from "../../data/projectsData";

// // Progress Bar Component
// const ScrollProgress = () => {
//   const { scrollYProgress } = useScroll();
  
//   return (
//     <motion.div
//       className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 origin-left z-50"
//       style={{ scaleX: scrollYProgress }}
//     />
//   );
// };

// // Parallax Image Component
// const ParallaxImage = ({ src, alt }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });
  
//   const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

//   return (
//     <div ref={ref} className="overflow-hidden rounded-3xl">
//       <motion.img
//         src={src}
//         alt={alt}
//         style={{ y }}
//         className="w-full h-auto scale-110"
//       />
//     </div>
//   );
// };

// // Metric Circle Component
// const MetricCircle = ({ value, label, color }) => {
//   const radius = 40;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (value / 100) * circumference;

//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-24 h-24">
//         <svg className="w-full h-full transform -rotate-90">
//           <circle
//             cx="48"
//             cy="48"
//             r={radius}
//             stroke="currentColor"
//             strokeWidth="6"
//             fill="none"
//             className="text-slate-800"
//           />
//           <motion.circle
//             cx="48"
//             cy="48"
//             r={radius}
//             stroke={color}
//             strokeWidth="6"
//             fill="none"
//             strokeLinecap="round"
//             initial={{ strokeDashoffset: circumference }}
//             animate={{ strokeDashoffset }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             style={{ strokeDasharray: circumference }}
//           />
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-2xl font-bold text-white">{value}</span>
//         </div>
//       </div>
//       <span className="mt-3 text-gray-400 text-sm font-medium">{label}</span>
//     </div>
//   );
// };

// // Image Gallery Component
// const ImageGallery = ({ images, title }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const nextImage = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <>
//       <div className="relative group">
//         <div className="overflow-hidden rounded-3xl border border-slate-800/50">
//           <motion.img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`${title} screenshot ${currentIndex + 1}`}
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="w-250 h-250 cursor-pointer"
//             onClick={() => setIsFullscreen(true)}
//           />
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevImage}
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
//         >
//           <FaChevronLeft className="w-5 h-5" />
//         </button>
//         <button
//           onClick={nextImage}
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
//         >
//           <FaChevronRight className="w-5 h-5" />
//         </button>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//           {images.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 idx === currentIndex 
//                   ? "w-8 bg-white" 
//                   : "bg-white/40 hover:bg-white/60"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Fullscreen Button */}
//         <button
//           onClick={() => setIsFullscreen(true)}
//           className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
//         >
//           <FaPlay className="w-4 h-4" />
//         </button>
//       </div>

//       {/* Thumbnails */}
//       <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
//         {images.map((img, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//               idx === currentIndex 
//                 ? "border-indigo-500 ring-2 ring-indigo-500/30" 
//                 : "border-transparent opacity-60 hover:opacity-100"
//             }`}
//           >
//             <img src={img} alt="" className="w-full h-full object-cover" />
//           </button>
//         ))}
//       </div>

//       {/* Fullscreen Modal */}
//       <AnimatePresence>
//         {isFullscreen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsFullscreen(false)}
//             className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//           >
//             <motion.img
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//               src={images[currentIndex]}
//               alt=""
//               className="max-w-full max-h-full object-contain"
//             />
//             <button
//               onClick={() => setIsFullscreen(false)}
//               className="absolute top-6 right-6 text-white/60 hover:text-white"
//             >
//               <span className="text-4xl">&times;</span>
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// // Share Modal Component
// const ShareModal = ({ isOpen, onClose, project }) => {
//   const [copied, setCopied] = useState(false);
//   const projectUrl = window.location.href;

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(projectUrl);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 20 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.9, y: 20 }}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full"
//           >
//             <h3 className="text-2xl font-bold text-white mb-6">Share this project</h3>
            
//             <div className="flex gap-4 mb-6">
//               <a
//                 href={`https://twitter.com/intent/tweet?url=${projectUrl}&text=Check out ${project.title}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1 p-4 rounded-xl bg-[#1DA1F2]/10 border border-[#1DA1F2]/30 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 transition-colors flex items-center justify-center gap-2"
//               >
//                 <FaTwitter className="w-5 h-5" />
//                 Twitter
//               </a>
//               <a
//                 href={`https://www.linkedin.com/sharing/share-offsite/?url=${projectUrl}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1 p-4 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/30 text-[#0077B5] hover:bg-[#0077B5]/20 transition-colors flex items-center justify-center gap-2"
//               >
//                 <FaLinkedin className="w-5 h-5" />
//                 LinkedIn
//               </a>
//             </div>

//             <div className="relative">
//               <input
//                 type="text"
//                 value={projectUrl}
//                 readOnly
//                 className="w-full px-4 py-3 pr-24 bg-slate-800 border border-slate-700 rounded-xl text-gray-400 text-sm"
//               />
//               <button
//                 onClick={copyToClipboard}
//                 className={`absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
//                   copied 
//                     ? "bg-green-600 text-white" 
//                     : "bg-indigo-600 text-white hover:bg-indigo-700"
//                 }`}
//               >
//                 {copied ? "Copied!" : "Copy"}
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default function ProjectDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const project = projects.find((p) => p.id === parseInt(id));
//   const [isShareOpen, setIsShareOpen] = useState(false);
//   const [isLiked, setIsLiked] = useState(false);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [id]);

//   if (!project) {
//     return (
//       <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center p-12 bg-slate-900/50 rounded-3xl border border-slate-800/50 max-w-md"
//         >
//           <div className="text-8xl mb-6">🔍</div>
//           <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
//           <p className="text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
//           <Link
//             to="/portfolio"
//             className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium"
//           >
//             <FaArrowLeft /> Back to Portfolio
//           </Link>
//         </motion.div>
//       </div>
//     );
//   }

//   const relatedProjects = projects
//     .filter(p => p.id !== project.id && p.tech.some(t => project.tech.includes(t)))
//     .slice(0, 3);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="min-h-screen bg-[#0A0A0F]"
//     >
//       <ScrollProgress />
//       <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} project={project} />

//       {/* Hero Section */}
//       <section className="relative pt-2 pb-20 overflow-hidden">
//         {/* Background Effects */}
//         <div className="absolute inset-0">
//           <div 
//             className="absolute inset-0 opacity-30"
//             style={{
//               background: `radial-gradient(ellipse at top, ${project.accentColor}20, transparent 50%)`
//             }}
//           />
//           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
//         </div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           {/* Back Button */}
//           <motion.button
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             onClick={() => navigate(-1)}
//             className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-12"
//           >
//             <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
//               <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//             </div>
//             <span className="font-medium">Back to Portfolio</span>
//           </motion.button>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left Column - Info */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Badges */}
//               <div className="flex flex-wrap gap-3 mb-8">
//                 {project.featured && (
//                   <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-rose-500/20 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
//                     <FaFire className="w-4 h-4" />
//                     Featured Project
//                   </div>
//                 )}
//                 <div 
//                   className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
//                   style={{ 
//                     color: project.accentColor,
//                     borderColor: `${project.accentColor}30`,
//                     backgroundColor: `${project.accentColor}10`
//                   }}
//                 >
//                   <FaLayerGroup className="w-4 h-4" />
//                   {project.category}
//                 </div>
//               </div>

//               {/* Title */}
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
//                 <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
//                   {project.title}
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
//                 {project.longDesc}
//               </p>

//               {/* Quick Stats */}
//               <div className="grid grid-cols-3 gap-6 mb-10">
//                 <div className="text-center p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50">
//                   <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
//                     <FaStar className="w-5 h-5" />
//                     <span className="text-2xl font-bold">{project.rating}</span>
//                   </div>
//                   <div className="text-gray-500 text-sm">{project.reviews} Reviews</div>
//                 </div>
//                 <div className="text-center p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50">
//                   <div className="flex items-center justify-center gap-2 text-emerald-400 mb-2">
//                     <HiShieldCheck className="w-5 h-5" />
//                     <span className="text-2xl font-bold">{project.status}</span>
//                   </div>
//                   <div className="text-gray-500 text-sm">Current Status</div>
//                 </div>
//                 <div className="text-center p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50">
//                   <div className="flex items-center justify-center gap-2 text-cyan-400 mb-2">
//                     <HiClock className="w-5 h-5" />
//                     <span className="text-2xl font-bold">
//                       {new Date(project.launchDate).toLocaleDateString('en-US', { month: 'short' })}
//                     </span>
//                   </div>
//                   <div className="text-gray-500 text-sm">
//                     {new Date(project.launchDate).getFullYear()}
//                   </div>
//                 </div>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap gap-4">
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative px-8 py-4 overflow-hidden rounded-xl font-semibold"
//                   style={{ backgroundColor: project.accentColor }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//                   <span className="relative flex items-center gap-3 text-white">
//                     <FaRocket className="w-5 h-5" />
//                     View Live Demo
//                     <FaExternalLinkAlt className="w-4 h-4" />
//                   </span>
//                 </a>
                
//                 {/* <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center gap-3 px-8 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 hover:bg-slate-700 transition-all font-semibold"
//                 >
//                   <FaGithub className="w-5 h-5" />
//                   View Source
//                 </a> */}

//                 <button
//                   onClick={() => setIsLiked(!isLiked)}
//                   className={`p-4 rounded-xl border transition-all ${
//                     isLiked 
//                       ? "bg-rose-500/20 border-rose-500/30 text-rose-400" 
//                       : "bg-slate-800 border-slate-700 text-gray-400 hover:text-rose-400"
//                   }`}
//                 >
//                   <FaHeart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
//                 </button>

//                 <button
//                   onClick={() => setIsShareOpen(true)}
//                   className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-gray-400 hover:text-white transition-all"
//                 >
//                   <FaShare className="w-5 h-5" />
//                 </button>
//               </div>
//             </motion.div>

//             {/* Right Column - Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               {project.gallery ? (
//                 <ImageGallery images={project.gallery} title={project.title} />
//               ) : (
//                 <div className="relative">
//                   <div 
//                     className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
//                     style={{ background: `linear-gradient(135deg, ${project.accentColor}, transparent)` }}
//                   />
//                   <ParallaxImage src={project.img} alt={project.title} />
//                 </div>
//               )}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Performance Metrics Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
//             <div className="relative p-10 bg-slate-900/80 border border-slate-800/50 rounded-3xl backdrop-blur-xl">
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
//                   <HiChartBar className="w-5 h-5 text-white" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-white">Lighthouse Performance Metrics</h2>
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                 {project.metrics && Object.entries(project.metrics).map(([key, value]) => (
//                   <MetricCircle
//                     key={key}
//                     value={value}
//                     label={key.replace(/([A-Z])/g, ' $1').trim()}
//                     color={
//                       value >= 95 ? '#10B981' :
//                       value >= 80 ? '#06B6D4' :
//                       value >= 50 ? '#F59E0B' :
//                       '#EF4444'
//                     }
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features & Tech Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-3 gap-12">
//             {/* Features */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-2"
//             >
//               <div className="flex items-center gap-3 mb-10">
//                 <div 
//                   className="w-12 h-12 rounded-2xl flex items-center justify-center"
//                   style={{ backgroundColor: `${project.accentColor}20` }}
//                 >
//                   <HiSparkles className="w-6 h-6" style={{ color: project.accentColor }} />
//                 </div>
//                 <div>
//                   <h2 className="text-3xl font-bold text-white">Key Features</h2>
//                   <p className="text-gray-500">What makes this project special</p>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {project.features.map((feature, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: idx * 0.05 }}
//                     whileHover={{ y: -4 }}
//                     className="group p-6 bg-slate-900/50 border border-slate-800/50 rounded-2xl hover:border-slate-700/50 transition-all duration-300"
//                   >
//                     <div className="flex items-start gap-4">
//                       <div 
//                         className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
//                         style={{ backgroundColor: `${project.accentColor}15` }}
//                       >
//                         <FaCheck className="w-5 h-5" style={{ color: project.accentColor }} />
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-white mb-2">
//                           {typeof feature === 'object' ? feature.title : feature}
//                         </h3>
//                         <p className="text-gray-500 text-sm leading-relaxed">
//                           {typeof feature === 'object' ? feature.description : 'Implemented with modern best practices'}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Tech Stack & Details */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               {/* Tech Stack */}
//               <div className="p-8 bg-slate-900/80 border border-slate-800/50 rounded-3xl">
//                 <div className="flex items-center gap-3 mb-6">
//                   <FaTools className="w-5 h-5 text-indigo-400" />
//                   <h3 className="text-xl font-bold text-white">Tech Stack</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-3">
//                   {project.tech.map((tech, idx) => (
//                     <motion.span
//                       key={idx}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: idx * 0.05 }}
//                       whileHover={{ y: -2, scale: 1.05 }}
//                       className="px-4 py-2 bg-indigo-900/30 text-indigo-300 rounded-xl text-sm font-medium border border-indigo-800/30 hover:border-indigo-600/50 transition-all cursor-default"
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>

//               {/* Project Info */}
//               <div className="p-8 bg-slate-900/80 border border-slate-800/50 rounded-3xl">
//                 <div className="flex items-center gap-3 mb-6">
//                   <HiUsers className="w-5 h-5 text-cyan-400" />
//                   <h3 className="text-xl font-bold text-white">Project Info</h3>
//                 </div>
//                 <div className="space-y-4">
//                   {[
//                     { label: "Category", value: project.category },
//                     { label: "Type", value: "Full Stack" },
//                     { label: "Duration", value: "3 Months" },
//                     { label: "Status", value: project.status }
//                   ].map((item, idx) => (
//                     <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-800/50 last:border-0">
//                       <span className="text-gray-500">{item.label}</span>
//                       <span className="text-white font-medium">{item.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick Links */}
//               <div className="p-8 bg-slate-900/80 border border-slate-800/50 rounded-3xl">
//                 <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
//                 <div className="space-y-3">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all"
//                   >
//                     <div className="flex items-center gap-3">
//                       <FaGithub className="w-5 h-5 text-gray-400" />
//                       <span className="text-white font-medium">Source Code</span>
//                     </div>
//                     <FaExternalLinkAlt className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
//                   </a>
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all"
//                   >
//                     <div className="flex items-center gap-3">
//                       <FaGlobe className="w-5 h-5 text-gray-400" />
//                       <span className="text-white font-medium">Live Demo</span>
//                     </div>
//                     <FaExternalLinkAlt className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Related Projects */}
//       {relatedProjects.length > 0 && (
//         <section className="py-20 border-t border-slate-800/50">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-4xl font-bold text-white mb-4">Related Projects</h2>
//               <p className="text-gray-400">Explore more projects with similar technologies</p>
//             </motion.div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {relatedProjects.map((related, idx) => (
//                 <motion.div
//                   key={related.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                 >
//                   <Link
//                     to={`/portfolio/${related.id}`}
//                     className="group block p-6 bg-slate-900/50 border border-slate-800/50 rounded-2xl hover:border-slate-700/50 transition-all duration-300"
//                   >
//                     <div className="relative h-40 rounded-xl overflow-hidden mb-5">
//                       <img
//                         src={related.img}
//                         alt={related.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
//                     </div>
//                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
//                       {related.title}
//                     </h3>
//                     <p className="text-gray-500 text-sm mb-4 line-clamp-2">{related.shortDesc}</p>
//                     <div className="flex items-center gap-2 text-indigo-400 font-medium text-sm">
//                       <span>View Project</span>
//                       <FaChevronRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
//                     </div>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       <section className="py-24">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-3xl" />
//             <div className="relative p-12 bg-slate-900/90 border border-slate-800/50 rounded-3xl">
//               <HiLightningBolt className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
//               <h2 className="text-4xl font-bold text-white mb-4">Ready to start your project?</h2>
//               <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
//                 Let's collaborate and bring your ideas to life with cutting-edge technology
//               </p>
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all"
//               >
//                 <span>Get In Touch</span>
//                 <FaArrowRight className="w-5 h-5" />
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </motion.div>
//   );
// }


import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaCode,
  FaRocket,
  FaUsers,
  FaCalendar,
  FaCheck,
  FaTools,
  FaLayerGroup,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaHeart,
  FaShare,
  FaCopy,
  FaTwitter,
  FaLinkedin,
  FaFire,
  FaExpand,
  FaCompress,
  FaSearchPlus
} from "react-icons/fa";
import { HiSparkles, HiLightningBolt, HiChartBar, HiShieldCheck, HiClock, HiUsers } from "react-icons/hi";
import projects from "../../data/projectsData";

// Progress Bar Component
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

// Parallax Image Component - IMPROVED
const ParallaxImage = ({ src, alt, accentColor }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl border border-slate-800/50 shadow-2xl">
      {/* Glow Effect */}
      <div 
        className="absolute -inset-4 rounded-3xl blur-3xl opacity-30 -z-10"
        style={{ background: `linear-gradient(135deg, ${accentColor}, transparent)` }}
      />
      
      <motion.div 
        className="relative aspect-[16/10] overflow-hidden"
        style={{ y }}
      >
        <motion.img
          src={src}
          alt={alt}
          style={{ scale }}
          className="w-full h-full object-cover object-center"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      </motion.div>
    </div>
  );
};

// Metric Circle Component
const MetricCircle = ({ value, label, color }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-slate-800"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke={color}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{value}</span>
        </div>
      </div>
      <span className="mt-3 text-gray-400 text-sm font-medium capitalize">{label}</span>
    </div>
  );
};

// ========== IMPROVED IMAGE GALLERY COMPONENT ==========
const ImageGallery = ({ images, title, accentColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsLoading(true);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsLoading(true);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isFullscreen) {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') setIsFullscreen(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <>
      <div className="relative group">
        {/* Glow Effect */}
        <div 
          className="absolute -inset-4 rounded-3xl blur-3xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${accentColor}, transparent 70%)` }}
        />

        {/* Main Image Container */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/50 bg-slate-900/50 shadow-2xl">
          {/* Image Counter Badge */}
          <div className="absolute top-4 left-4 z-20">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
              <span>{currentIndex + 1}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400">{images.length}</span>
            </div>
          </div>

          {/* Main Image - FIXED HEIGHT */}
          <div className="relative w-full aspect-[16/10] min-h-[400px] md:min-h-[500px] lg:min-h-[550px]">
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onLoad={() => setIsLoading(false)}
                className="w-full h-full object-cover object-top cursor-zoom-in"
                onClick={() => setIsFullscreen(true)}
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110 border border-white/10"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110 border border-white/10"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsLoading(true);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? "w-8 bg-white" 
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Fullscreen & Zoom Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => setIsFullscreen(true)}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-all border border-white/10 hover:scale-110"
              title="View Fullscreen"
            >
              <FaExpand className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Thumbnails - IMPROVED */}
        <div className="flex gap-3 mt-5 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsLoading(true);
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex-shrink-0 w-28 h-20 md:w-32 md:h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                idx === currentIndex 
                  ? "ring-2 ring-offset-2 ring-offset-slate-950" 
                  : "opacity-50 hover:opacity-100"
              }`}
              style={{ 
                ringColor: idx === currentIndex ? accentColor : 'transparent'
              }}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${idx + 1}`} 
                className="w-full h-full object-cover" 
              />
              {/* Active Overlay */}
              {idx === currentIndex && (
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundColor: accentColor }}
                />
              )}
              {/* Play Icon for current */}
              {idx === currentIndex && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: accentColor }}
                  >
                    <FaSearchPlus className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal - IMPROVED */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-[100] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6">
              <div className="flex items-center gap-4">
                <span className="text-white font-medium">{title}</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-400">{currentIndex + 1} of {images.length}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  {isZoomed ? <FaCompress className="w-4 h-4" /> : <FaExpand className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <span className="text-2xl leading-none">&times;</span>
                </button>
              </div>
            </div>

            {/* Main Image */}
            <div 
              className="flex-1 flex items-center justify-center px-4 md:px-20 py-4 overflow-auto"
              onClick={() => !isZoomed && setIsFullscreen(false)}
            >
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: isZoomed ? 1.5 : 1,
                  cursor: isZoomed ? 'zoom-out' : 'zoom-in'
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
                src={images[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1}`}
                className={`max-h-[80vh] rounded-lg shadow-2xl ${
                  isZoomed ? 'max-w-none' : 'max-w-full object-contain'
                }`}
              />
            </div>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>

            {/* Thumbnails Strip */}
            <div className="p-4 md:p-6 bg-black/50 backdrop-blur-md">
              <div className="flex gap-3 justify-center overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      idx === currentIndex 
                        ? "ring-2 ring-white scale-110" 
                        : "opacity-40 hover:opacity-80"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Share Modal Component
const ShareModal = ({ isOpen, onClose, project }) => {
  const [copied, setCopied] = useState(false);
  const projectUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(projectUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Share this project</h3>
            
            <div className="flex gap-4 mb-6">
              <a
                href={`https://twitter.com/intent/tweet?url=${projectUrl}&text=Check out ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-4 rounded-xl bg-[#1DA1F2]/10 border border-[#1DA1F2]/30 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 transition-colors flex items-center justify-center gap-2"
              >
                <FaTwitter className="w-5 h-5" />
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${projectUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-4 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/30 text-[#0077B5] hover:bg-[#0077B5]/20 transition-colors flex items-center justify-center gap-2"
              >
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            <div className="relative">
              <input
                type="text"
                value={projectUrl}
                readOnly
                className="w-full px-4 py-3 pr-24 bg-slate-800 border border-slate-700 rounded-xl text-gray-400 text-sm"
              />
              <button
                onClick={copyToClipboard}
                className={`absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  copied 
                    ? "bg-green-600 text-white" 
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-12 bg-slate-900/50 rounded-3xl border border-slate-800/50 max-w-md"
        >
          <div className="text-8xl mb-6">🔍</div>
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium"
          >
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </motion.div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter(p => p.id !== project.id && p.tech.some(t => project.tech.includes(t)))
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0A0A0F]"
    >
      <ScrollProgress />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} project={project} />

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse at top, ${project.accentColor}20, transparent 50%)`
            }}
          />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
              <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="font-medium">Back to Portfolio</span>
          </motion.button>

          {/* ===== TWO COLUMN LAYOUT ===== */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            
            {/* Left Column - Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.featured && (
                  <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-rose-500/20 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
                    <FaFire className="w-4 h-4" />
                    Featured Project
                  </div>
                )}
                <div 
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
                  style={{ 
                    color: project.accentColor,
                    borderColor: `${project.accentColor}30`,
                    backgroundColor: `${project.accentColor}10`
                  }}
                >
                  <FaLayerGroup className="w-4 h-4" />
                  {project.category}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
                {project.longDesc}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
                <div className="text-center p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                  <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
                    <FaStar className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xl md:text-2xl font-bold">{project.rating}</span>
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm">{project.reviews} Reviews</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                  <div className="flex items-center justify-center gap-2 text-emerald-400 mb-2">
                    <HiShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xl md:text-2xl font-bold">{project.status}</span>
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm">Status</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                  <div className="flex items-center justify-center gap-2 text-cyan-400 mb-2">
                    <HiClock className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xl md:text-2xl font-bold">
                      {new Date(project.launchDate).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm">
                    {new Date(project.launchDate).getFullYear()}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 md:px-8 py-3 md:py-4 overflow-hidden rounded-xl font-semibold"
                  style={{ backgroundColor: project.accentColor }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center gap-2 md:gap-3 text-white text-sm md:text-base">
                    <FaRocket className="w-4 h-4 md:w-5 md:h-5" />
                    View Live Demo
                    <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
                  </span>
                </a>

                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 md:p-4 rounded-xl border transition-all ${
                    isLiked 
                      ? "bg-rose-500/20 border-rose-500/30 text-rose-400" 
                      : "bg-slate-800 border-slate-700 text-gray-400 hover:text-rose-400"
                  }`}
                >
                  <FaHeart className={`w-4 h-4 md:w-5 md:h-5 ${isLiked ? "fill-current" : ""}`} />
                </button>

                <button
                  onClick={() => setIsShareOpen(true)}
                  className="p-3 md:p-4 rounded-xl bg-slate-800 border border-slate-700 text-gray-400 hover:text-white transition-all"
                >
                  <FaShare className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </motion.div>

            {/* Right Column - Image Gallery (IMPROVED) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 lg:sticky lg:top-8"
            >
              {project.gallery && project.gallery.length > 0 ? (
                <ImageGallery 
                  images={project.gallery} 
                  title={project.title} 
                  accentColor={project.accentColor}
                />
              ) : (
                <ParallaxImage 
                  src={project.img} 
                  alt={project.title} 
                  accentColor={project.accentColor}
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
            <div className="relative p-8 md:p-10 bg-slate-900/80 border border-slate-800/50 rounded-3xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                  <HiChartBar className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Lighthouse Performance Metrics</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {project.metrics && Object.entries(project.metrics).map(([key, value]) => (
                  <MetricCircle
                    key={key}
                    value={value}
                    label={key.replace(/([A-Z])/g, ' $1').trim()}
                    color={
                      value >= 95 ? '#10B981' :
                      value >= 80 ? '#06B6D4' :
                      value >= 50 ? '#F59E0B' :
                      '#EF4444'
                    }
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features & Tech Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                <div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${project.accentColor}20` }}
                >
                  <HiSparkles className="w-5 h-5 md:w-6 md:h-6" style={{ color: project.accentColor }} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Key Features</h2>
                  <p className="text-gray-500 text-sm md:text-base">What makes this project special</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group p-5 md:p-6 bg-slate-900/50 border border-slate-800/50 rounded-2xl hover:border-slate-700/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${project.accentColor}15` }}
                      >
                        <FaCheck className="w-4 h-4 md:w-5 md:h-5" style={{ color: project.accentColor }} />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                          {typeof feature === 'object' ? feature.title : feature}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {typeof feature === 'object' ? feature.description : 'Implemented with modern best practices'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack & Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              {/* Tech Stack */}
              <div className="p-6 md:p-8 bg-slate-900/80 border border-slate-800/50 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <FaTools className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-lg md:text-xl font-bold text-white">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-900/30 text-indigo-300 rounded-xl text-xs md:text-sm font-medium border border-indigo-800/30 hover:border-indigo-600/50 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 bg-slate-900/80 border border-slate-800/50 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <HiUsers className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg md:text-xl font-bold text-white">Project Info</h3>
                </div>
                <div className="space-y-3 md:space-y-4">
                  {[
                    { label: "Category", value: project.category },
                    { label: "Type", value: "Full Stack" },
                    { label: "Duration", value: "3 Months" },
                    { label: "Status", value: project.status }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 md:py-3 border-b border-slate-800/50 last:border-0">
                      <span className="text-gray-500 text-sm">{item.label}</span>
                      <span className="text-white font-medium text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="p-6 md:p-8 bg-slate-900/80 border border-slate-800/50 rounded-3xl">
                <h3 className="text-lg md:text-xl font-bold text-white mb-6">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 md:p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <FaGlobe className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                      <span className="text-white font-medium text-sm md:text-base">Live Demo</span>
                    </div>
                    <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-20 border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Related Projects</h2>
              <p className="text-gray-400">Explore more projects with similar technologies</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {relatedProjects.map((related, idx) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={`/portfolio/${related.id}`}
                    className="group block p-5 md:p-6 bg-slate-900/50 border border-slate-800/50 rounded-2xl hover:border-slate-700/50 transition-all duration-300"
                  >
                    <div className="relative h-36 md:h-40 rounded-xl overflow-hidden mb-4 md:mb-5">
                      <img
                        src={related.img}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{related.shortDesc}</p>
                    <div className="flex items-center gap-2 text-indigo-400 font-medium text-sm">
                      <span>View Project</span>
                      <FaChevronRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-3xl" />
            <div className="relative p-10 md:p-12 bg-slate-900/90 border border-slate-800/50 rounded-3xl">
              <HiLightningBolt className="w-12 h-12 md:w-16 md:h-16 text-indigo-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your project?</h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your ideas to life with cutting-edge technology
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-base md:text-lg rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all"
              >
                <span>Get In Touch</span>
                <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}