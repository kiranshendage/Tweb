export default function EnterpriseSolutions() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mb-20">
          <span className="inline-block mb-6 px-6 py-2 rounded-full
            bg-indigo-900/30 text-indigo-300 border border-indigo-800/40">
            Enterprise Solutions
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Enterprise-Grade Digital Transformation
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            We partner with enterprises to design, build, modernize, and scale
            mission-critical digital systems. Every project is treated with
            strict confidentiality, enterprise-grade security, and long-term
            scalability in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            {
              title: "Digital Transformation",
              desc:
                "Complete transformation of enterprise workflows, systems, and platforms using modern, scalable technologies without disrupting business operations."
            },
            {
              title: "Cloud Migration & Optimization",
              desc:
                "Secure migration from on-premise or legacy systems to cloud platforms with optimized performance, cost control, and reliability."
            },
            {
              title: "Legacy System Modernization",
              desc:
                "Re-engineering outdated enterprise applications into modern, maintainable, and future-ready architectures."
            },
            {
              title: "Scalable Enterprise Architecture",
              desc:
                "High-availability, fault-tolerant architectures capable of supporting millions of users and complex enterprise workflows."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-indigo-950/40 border border-indigo-900/40 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-900/20 border border-indigo-800/40 rounded-2xl p-10">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Confidential & Custom-Built
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Every enterprise project is handled under strict confidentiality.
            We design custom solutions based entirely on your internal
            processes, compliance needs, and long-term business goals.
            No templates. No shortcuts. Only tailored enterprise solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
