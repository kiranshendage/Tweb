"use client";

import {
  FaLightbulb,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaVial,
  FaRocket,
  FaSyncAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    icon: FaLightbulb,
    title: "Business Understanding & Requirement Discovery",
    desc: "We start by deeply understanding your business vision, industry challenges, competitors, and customer expectations. This phase ensures that every service we provide aligns with your long-term goals.",
    points: [
      "Web, Mobile, Cloud, Testing & Marketing Requirement Analysis",
      "Understanding Business Goals & Target Audience",
      "Competitor Research & Market Trends",
      "Technology & Platform Feasibility Study",
    ],
  },
  {
    step: "02",
    icon: FaClipboardList,
    title: "Planning, Strategy & Architecture",
    desc: "A clear and structured plan is created to ensure smooth execution, scalability, and cost efficiency across all services.",
    points: [
      "Project Roadmap & Milestone Planning",
      "Full Stack Architecture Design",
      "Cloud Infrastructure & Scalability Planning",
      "Digital Marketing Strategy & Funnel Planning",
    ],
  },
  {
    step: "03",
    icon: FaPencilRuler,
    title: "UI / UX Design & User Experience Strategy",
    desc: "We design visually appealing and user-centric interfaces that improve engagement, usability, and conversion rates across platforms.",
    points: [
      "Website & Mobile App UI Design",
      "User Journey Mapping & Wireframing",
      "Interactive Prototypes & Design Validation",
      "Consistent Branding & Design Systems",
    ],
  },
  {
    step: "04",
    icon: FaCode,
    title: "Development & System Implementation",
    desc: "Our expert developers build secure, scalable, and high-performing solutions using modern technologies and best coding practices.",
    points: [
      "Frontend & Backend Development",
      "Mobile App Development (iOS, Android, Cross-Platform)",
      "Cloud Services & API Integrations",
      "SEO, Analytics & Marketing Tool Implementation",
    ],
  },
  {
    step: "05",
    icon: FaVial,
    title: "Testing, QA & Performance Optimization",
    desc: "Every product is thoroughly tested to ensure reliability, security, speed, and flawless performance before launch.",
    points: [
      "Manual & Automation Testing",
      "Performance, Load & Stress Testing",
      "Security & Vulnerability Testing",
      "Cross-Browser, Device & Platform Testing",
    ],
  },
  {
    step: "06",
    icon: FaRocket,
    title: "Deployment, Launch & Go-Live",
    desc: "We deploy your applications, websites, cloud services, and marketing systems seamlessly with full monitoring and optimization.",
    points: [
      "Cloud Deployment & Server Configuration",
      "App Store & Play Store Launch",
      "CI/CD Pipeline Setup",
      "Live Performance Monitoring",
    ],
  },
  {
    step: "07",
    icon: FaSyncAlt,
    title: "Support, Optimization & Business Growth",
    desc: "After launch, we continuously support, optimize, and scale your digital products to ensure long-term success.",
    points: [
      "Ongoing Maintenance & Technical Support",
      "Feature Enhancements & Scalability Improvements",
      "Digital Marketing Optimization & Reporting",
      "Performance Analytics & Continuous Improvement",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold
                           bg-indigo-900/30 text-indigo-300 border border-indigo-800/40 mb-6">
            Our Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text">
              Our Complete Digital Service Delivery Process
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Our proven, step-by-step process ensures transparency, quality, scalability,
            and measurable success across all digital services we provide.
          </p>
        </motion.div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl p-8
                         bg-gradient-to-b from-indigo-950/40 to-indigo-900/20
                         border border-indigo-900/40 hover:border-indigo-500/60
                         transition-all duration-500"
            >
              {/* Step Number */}
              <div className="absolute -top-6 -right-6 w-14 h-14 rounded-full
                              bg-gradient-to-r from-indigo-600 to-blue-500
                              text-white font-bold flex items-center justify-center shadow-xl">
                {step.step}
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/70 to-indigo-800/50
                                group-hover:from-indigo-700/70 group-hover:to-indigo-600/50 transition-all">
                  <step.icon className="w-7 h-7 text-indigo-300 group-hover:text-blue-200 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {step.desc}
              </p>

              <ul className="space-y-3">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 w-full h-1
                              bg-gradient-to-r from-indigo-500 to-blue-400
                              opacity-0 group-hover:opacity-100
                              transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
