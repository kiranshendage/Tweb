import { motion } from "framer-motion";

const FeatureSection = ({ icon, title, description, points, impacts }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
      p-10 md:p-14 min-h-screen backdrop-blur-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-5 mb-6">
        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 text-blue-300">
          {icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
          {title}
        </h2>
      </div>

      <p className="text-gray-400 text-lg max-w-3xl mb-10 leading-relaxed">
        {description}
      </p>

      {/* Deliverables */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-blue-300 mb-4">
            What We Deliver
          </h3>
          <ul className="space-y-3">
            {points.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-300">
                <span className="text-cyan-400">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Impact */}
        <div>
          <h3 className="text-xl font-semibold text-blue-300 mb-4">
            Positive Business Impact
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {impacts.map((impact, i) => (
              <div
                key={i}
                className="bg-blue-900/20 border border-blue-800/40 rounded-xl p-5 text-center"
              >
                <div className="text-2xl font-bold text-cyan-300">
                  {impact.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {impact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeatureSection;
