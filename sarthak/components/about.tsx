export function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
              Bytesflare Infotech
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
            A product-driven technology company building scalable SaaS platforms
            for attendance, verification, and digital operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Building Scalable Digital Products for Modern Organizations
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              At Bytesflare Infotech, we are a product-focused technology startup
              dedicated to building secure, scalable, and intelligent software
              platforms. Our mission is to replace manual processes with
              reliable, digital-first systems that improve accuracy,
              transparency, and operational efficiency.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              Our flagship product, <strong>BytesAttend</strong>, is a smart
              attendance and verification platform designed for institutions,
              enterprises, and large organizations. It enables seamless
              attendance tracking, session verification, and centralized
              monitoring through a cloud-based architecture.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Based in Gujarat, Bytesflare Infotech is building a growing
              portfolio of SaaS products focused on automation, monitoring, and
              digital operations. We follow a product-first approach,
              emphasizing long-term scalability, data security, and continuous
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Platform Modules", value: "10+" },
              { label: "Active Deployments", value: "30+" },
              { label: "System Accuracy", value: "99.9%" },
              { label: "Cloud Availability", value: "24/7" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-8 bg-slate-900/70 rounded-2xl border border-white/10 shadow-xl shadow-cyan-500/10 text-center"
              >
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-slate-300 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
