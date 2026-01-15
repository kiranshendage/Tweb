// "use client";

// import { FaCode, FaMobileAlt, FaRocket, FaShieldAlt, FaCloud } from "react-icons/fa";
// import { motion } from "framer-motion";

// const webInfo = [
//   {
//     icon: FaCode,
//     title: "Modern Web Development",
//     desc: "High-performance websites using React, Next.js, and Tailwind CSS with clean architecture.",
//   },
//   {
//     icon: FaMobileAlt,
//     title: "Responsive Design",
//     desc: "Pixel-perfect layouts optimized for desktop, tablet, and mobile devices.",
//   },
//   {
//     icon: FaRocket,
//     title: "Speed & SEO Optimized",
//     desc: "Fast-loading pages with SEO best practices for higher rankings and conversions.",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Secure & Scalable",
//     desc: "Enterprise-grade security with scalable backend-ready architecture.",
//   },
//   {
//     icon: FaCloud,
//     title: "Cloud Ready",
//     desc: "Deployment-ready solutions compatible with modern cloud platforms.",
//   },
// ];

// export default function WebInfoSection() {
//   return (
//     <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
//               Web Development Services
//             </span>
//           </h2>
//           <p className="text-gray-400 max-w-3xl mx-auto">
//             We craft scalable, secure, and visually stunning web solutions that help
//             businesses grow faster in the digital world.
//           </p>
//         </motion.div>

//         {/* Info Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {webInfo.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -8, scale: 1.03 }}
//               className="group relative rounded-xl p-6 backdrop-blur-sm transition-all duration-500
//                          bg-gradient-to-b from-blue-950/40 to-blue-900/20
//                          border border-blue-900/40 hover:border-blue-500/60"
//             >
//               {/* Icon */}
//               <div className="inline-flex p-4 rounded-lg mb-5 transition-all
//                               bg-gradient-to-br from-blue-900/60 to-blue-800/40
//                               group-hover:from-blue-700/70 group-hover:to-blue-600/50">
//                 <item.icon className="w-6 h-6 text-blue-300 group-hover:text-cyan-200 transition-colors" />
//               </div>

//               {/* Content */}
//               <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-white transition-colors">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
//                 {item.desc}
//               </p>

//               {/* Hover Indicator */}
//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-1
//                               bg-gradient-to-r from-blue-500 to-cyan-400
//                               rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import {
  FaCode,
  FaMobileAlt,
  FaRocket,
  FaShieldAlt,
  FaCloud,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: FaCode,
    title: "Custom Web Development",
    desc: "We build high-quality, scalable, and maintainable websites using modern frameworks and best coding practices.",
    points: ["React & Next.js", "Clean Architecture", "Reusable Components"],
  },
  {
    icon: FaMobileAlt,
    title: "Responsive UI/UX",
    desc: "User-first designs that look perfect on every device and screen size.",
    points: ["Mobile-first Design", "Pixel-perfect Layouts", "Smooth Animations"],
  },
  {
    icon: FaRocket,
    title: "Performance & SEO",
    desc: "Optimized loading speed and SEO-friendly structure for better rankings.",
    points: ["Core Web Vitals", "SEO Best Practices", "Fast Load Time"],
  },
  {
    icon: FaShieldAlt,
    title: "Security & Reliability",
    desc: "Secure solutions built with enterprise-level safety and reliability.",
    points: ["Secure Code", "Data Protection", "Scalable Systems"],
  },
  {
    icon: FaCloud,
    title: "Cloud & Deployment",
    desc: "Production-ready applications deployed on modern cloud platforms.",
    points: ["Cloud Ready", "CI/CD Setup", "Scalable Hosting"],
  },
];

export default function WebDevelopmentSection() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold
                           bg-blue-900/30 text-blue-300 border border-blue-800/40 mb-6">
            Web Development Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
              Building Powerful Digital Experiences
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            We help businesses transform ideas into powerful digital products.
            Our web development services focus on performance, scalability,
            security, and outstanding user experience.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl p-8
                         bg-gradient-to-b from-blue-950/40 to-blue-900/20
                         border border-blue-900/40 hover:border-blue-500/60
                         transition-all duration-500"
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/70 to-blue-800/50
                                group-hover:from-blue-700/70 group-hover:to-blue-600/50 transition-all">
                  <service.icon className="w-7 h-7 text-blue-300 group-hover:text-cyan-200 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* Feature List */}
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <FaCheckCircle className="text-blue-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r
                              from-blue-500 to-cyan-400 opacity-0
                              group-hover:opacity-100 transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-100">
            Ready to Start Your Project?
          </h3>

          <p className="text-gray-400 mb-10">
            Let’s build a secure, scalable, and high-performing web solution
            tailored to your business goals.
          </p>

          <button className="inline-flex items-center gap-3 px-10 py-4 rounded-xl
                             bg-gradient-to-r from-blue-600 to-cyan-500
                             text-white font-semibold shadow-xl
                             hover:shadow-blue-500/30 hover:scale-105
                             transition-all duration-500"
                           onClick={() => navigate("/contact")}>
            Get Free Consultation
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
