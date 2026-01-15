export default function HealthTechSolutions() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mb-20">
          <span className="inline-block mb-6 px-6 py-2 rounded-full
            bg-indigo-900/30 text-indigo-300 border border-indigo-800/40">
            HealthTech Solutions
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure & Compliant Healthcare Systems
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            We develop healthcare applications with a strict focus on privacy,
            compliance, and data protection. Every solution is engineered to
            meet medical industry standards and confidentiality requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            {
              title: "Medical Applications",
              desc:
                "Custom-built healthcare applications designed for reliability, compliance, and secure data handling."
            },
            {
              title: "Patient Portals",
              desc:
                "Secure portals for patient records, appointments, and communication."
            },
            {
              title: "Telemedicine Platforms",
              desc:
                "Remote consultation platforms with secure video, messaging, and data exchange."
            },
            {
              title: "Health Data Analytics",
              desc:
                "Analytics platforms that provide insights while maintaining strict data privacy controls."
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
            Privacy & Compliance Guaranteed
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We follow strict security practices, access control, and compliance
            requirements tailored to your region and healthcare regulations.
          </p>
        </div>

      </div>
    </section>
  );
}
