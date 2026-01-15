"use client";

import {
  FaBullhorn,
  FaSearch,
  FaChartLine,
  FaPenNib,
  FaEnvelopeOpenText,
  FaAd,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: FaSearch,
    title: "Search Engine Optimization (SEO)",
    desc: "Improve your website visibility and organic rankings through proven SEO strategies.",
    points: ["Keyword Research", "On-Page Optimization", "Technical SEO"],
  },
  {
    icon: FaAd,
    title: "Paid Advertising (PPC)",
    desc: "High-converting paid campaigns that target the right audience at the right time.",
    points: ["Google Ads", "Social Media Ads", "ROI-Driven Campaigns"],
  },
  {
    icon: FaPenNib,
    title: "Content Marketing",
    desc: "Engaging content that builds authority, trust, and long-term brand value.",
    points: ["Blog Writing", "Brand Storytelling", "SEO Content"],
  },
  {
    icon: FaBullhorn,
    title: "Social Media Marketing",
    desc: "Build brand awareness and customer engagement across all social platforms.",
    points: ["Content Strategy", "Audience Growth", "Brand Engagement"],
  },
  {
    icon: FaEnvelopeOpenText,
    title: "Email Marketing",
    desc: "Personalized email campaigns designed to nurture leads and increase conversions.",
    points: ["Automation", "Lead Nurturing", "High Open Rates"],
  },
  {
    icon: FaChartLine,
    title: "Analytics & Optimization",
    desc: "Data-driven insights to continuously optimize campaigns and maximize growth.",
    points: ["Campaign Tracking", "Conversion Analysis", "Performance Reporting"],
  },
];

export default function DigitalMarketingSection() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-28 overflow-hidden">

      {/* Background Glow (SAME AS MOBILE APP) */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold
                       bg-indigo-900/30 text-indigo-300 border border-indigo-800/40 mb-6"
          >
            Digital Marketing
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text">
              Driving Business Growth Through Digital Marketing
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            We create result-driven digital marketing strategies that increase
            visibility, engagement, and conversions across all digital channels.
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
                         bg-gradient-to-b from-indigo-950/40 to-indigo-900/20
                         border border-indigo-900/40 hover:border-indigo-500/60
                         transition-all duration-500"
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/70 to-indigo-800/50
                             group-hover:from-indigo-700/70 group-hover:to-indigo-600/50 transition-all"
                >
                  <service.icon className="w-7 h-7 text-indigo-300 group-hover:text-blue-200 transition-colors" />
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
                    <FaCheckCircle className="text-indigo-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Glow */}
              <div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r
                           from-indigo-500 to-blue-400 opacity-0
                           group-hover:opacity-100 transition-all duration-500 rounded-b-2xl"
              />
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
            Ready to Scale Your Business?
          </h3>

          <p className="text-gray-400 mb-10">
            Let’s build a digital marketing strategy that delivers consistent,
            measurable growth for your brand.
          </p>

          <button
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl
                       bg-gradient-to-r from-indigo-600 to-blue-500
                       text-white font-semibold shadow-xl
                       hover:shadow-indigo-500/30 hover:scale-105
                       transition-all duration-500"
                       onClick={() => navigate("/contact")}
          >
            Start Marketing Campaign
            <FaArrowRight />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
