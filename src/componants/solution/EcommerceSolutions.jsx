export default function ECommerceSolutions() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mb-20">
          <span className="inline-block mb-6 px-6 py-2 rounded-full
            bg-indigo-900/30 text-indigo-300 border border-indigo-800/40">
            E-commerce Solutions
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Scalable & Secure E-commerce Platforms
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            We design and develop high-performance e-commerce platforms tailored
            to your business model. From startups to enterprise marketplaces,
            every solution is custom-built for scalability, security, and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            {
              title: "Custom Platform Development",
              desc:
                "End-to-end development of fully customized e-commerce platforms designed around your unique workflows and customer journey."
            },
            {
              title: "Secure Payment Integrations",
              desc:
                "PCI-compliant payment gateways with multi-currency, subscriptions, and global payment support."
            },
            {
              title: "Inventory & Order Management",
              desc:
                "Real-time inventory control, automated order processing, logistics, and fulfillment system integrations."
            },
            {
              title: "Analytics & Business Intelligence",
              desc:
                "Advanced dashboards providing insights into sales performance, customer behavior, and growth metrics."
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
            Built for Any Business Model
          </h3>
          <p className="text-gray-400 leading-relaxed">
            B2B, B2C, D2C, subscription-based, or marketplace — we build e-commerce
            platforms exactly as per your requirements with complete data
            confidentiality and long-term scalability.
          </p>
        </div>

      </div>
    </section>
  );
}
