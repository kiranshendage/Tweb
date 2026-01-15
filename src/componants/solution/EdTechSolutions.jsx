export default function EdTechSolutions() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mb-20">
          <span className="inline-block mb-6 px-6 py-2 rounded-full
            bg-indigo-900/30 text-indigo-300 border border-indigo-800/40">
            EdTech Solutions
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intelligent & Scalable Learning Platforms
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            We create modern educational platforms that enable institutions,
            startups, and enterprises to deliver seamless digital learning
            experiences with complete control and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            {
              title: "Learning Management Systems (LMS)",
              desc:
                "Custom LMS platforms with course management, assessments, certifications, and performance tracking."
            },
            {
              title: "E-learning Applications",
              desc:
                "Web and mobile learning applications designed for engagement, performance, and scalability."
            },
            {
              title: "Student & Admin Portals",
              desc:
                "Secure role-based portals for students, instructors, and administrators."
            },
            {
              title: "Virtual Classrooms",
              desc:
                "Live classes, recorded sessions, collaboration tools, and content management systems."
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
            Built for Startups & Institutions
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Whether you are launching a new EdTech startup or modernizing an
            educational institution, we design systems that scale securely
            with your learners and content.
          </p>
        </div>

      </div>
    </section>
  );
}
