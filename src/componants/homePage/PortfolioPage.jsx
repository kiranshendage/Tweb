export default function PortfolioPage() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-24">
          <span className="inline-block mb-6 px-6 py-2 rounded-full
            bg-indigo-900/30 text-indigo-300 border border-indigo-800/40">
            Our Portfolio
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building Digital Products That Are Currently In Progress
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            We are a newly launched digital startup, currently working on
            multiple client and internal projects. Due to confidentiality
            agreements and ongoing development, completed case studies will
            be showcased after successful deployment.
          </p>
        </div>

        {/* Status Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {[
            {
              title: "Enterprise Systems",
              desc:
                "Large-scale internal platforms under development for enterprise workflows and automation.",
              status: "In Progress"
            },
            {
              title: "Startup MVPs",
              desc:
                "Early-stage startup products being designed and developed from idea to launch.",
              status: "In Development"
            },
            {
              title: "Industry Solutions",
              desc:
                "Custom solutions across EdTech, HealthTech, E-commerce, and SaaS domains.",
              status: "Ongoing"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-indigo-950/40 border border-indigo-900/40 rounded-2xl p-8
              hover:border-indigo-500/60 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.desc}
              </p>
              <span className="inline-block px-4 py-2 text-sm rounded-full
                bg-indigo-900/30 text-indigo-300 border border-indigo-800/40">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Confidential Notice */}
        <div className="bg-indigo-900/20 border border-indigo-800/40 rounded-2xl p-10 mb-20">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Confidentiality First
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Many of our client projects operate under strict NDA agreements.
            We prioritize data security, privacy, and trust over public exposure.
            Detailed case studies will be published once projects are live and
            approved for disclosure.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Have an Idea? Let’s Build It Together
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Even if your project doesn’t exist yet — we help startups and
            businesses turn ideas into secure, scalable digital products.
          </p>

          <button className="px-10 py-4 rounded-xl font-semibold text-white
            bg-gradient-to-r from-indigo-600 to-blue-500
            hover:from-indigo-500 hover:to-blue-400 transition-all duration-300">
            Start Your Project
          </button>
        </div>

      </div>
    </section>
  );
}
