"use client";

import {
  FaCloud,
  FaServer,
  FaLock,
  FaSyncAlt,
  FaCogs,
  FaDatabase,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: FaCloud,
    title: "Cloud Consulting & Strategy",
    desc: "Expert guidance to design the right cloud architecture aligned with your business goals.",
    points: ["Cloud Readiness Assessment", "Architecture Design", "Cost Optimization"],
  },
  {
    icon: FaServer,
    title: "Cloud Infrastructure Setup",
    desc: "Reliable and scalable cloud infrastructure built for performance and availability.",
    points: ["AWS, Azure & GCP", "High Availability", "Auto Scaling"],
  },
  {
    icon: FaDatabase,
    title: "Data Storage & Management",
    desc: "Secure and efficient cloud storage solutions for structured and unstructured data.",
    points: ["Cloud Databases", "Backup & Recovery", "Data Migration"],
  },
  {
    icon: FaSyncAlt,
    title: "Cloud Migration Services",
    desc: "Seamless migration of applications and data with minimal downtime.",
    points: ["App Migration", "Zero Data Loss", "Downtime Optimization"],
  },
  {
    icon: FaLock,
    title: "Cloud Security & Compliance",
    desc: "Enterprise-grade security to protect data, applications, and infrastructure.",
    points: ["Identity Management", "Data Encryption", "Compliance Standards"],
  },
  {
    icon: FaCogs,
    title: "DevOps & Cloud Automation",
    desc: "Automated workflows that improve deployment speed and system reliability.",
    points: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerts"],
  },
];

export default function CloudServicesSection() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-28 overflow-hidden">

      {/* Background Glow */}
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
            Cloud Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text">
              Scalable, Secure & Future-Ready Cloud Solutions
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            We help businesses leverage cloud technologies to improve agility,
            scalability, and operational efficiency.
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
            Move Your Business to the Cloud
          </h3>

          <p className="text-gray-400 mb-10">
            Let’s design and deploy a cloud infrastructure that scales with your
            business and keeps your data secure.
          </p>

          <button
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl
                       bg-gradient-to-r from-indigo-600 to-blue-500
                       text-white font-semibold shadow-xl
                       hover:shadow-indigo-500/30 hover:scale-105
                       transition-all duration-500"
                       onClick={() => navigate("/contact")}
          >
            Start Cloud Journey
            <FaArrowRight />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
