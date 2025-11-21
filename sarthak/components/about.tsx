export function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Bytesflare Infotech</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
            A modern IT solutions company dedicated to transforming businesses through innovative
            technology and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Transforming Ideas into Digital Success Stories
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              At Bytesflare Infotech, we&rsquo;re a dynamic startup specializing in creating
              comprehensive digital solutions that empower businesses to thrive in today&rsquo;s
              competitive landscape. Our expertise spans mobile app development, web development, ERP
              solutions, and digital transformation services.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Based in Gujarat, we&rsquo;ve already delivered innovative solutions to clients across
              various industries, from educational institutions requiring sophisticated management
              systems to businesses seeking robust e-commerce platforms.
            </p>
            <p className="text-slate-300 leading-relaxed">
              As an agile startup, our team combines fresh perspectives with technical excellence to
              deliver cutting-edge solutions that not only meet current needs but also scale with your
              business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Client Satisfaction', value: '100%' },
              { label: 'Support Available', value: '24/7' },
            ].map((stat) => (
              <div key={stat.label} className="p-8 bg-slate-900/70 rounded-2xl border border-white/10 shadow-xl shadow-cyan-500/10 text-center">
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-slate-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


