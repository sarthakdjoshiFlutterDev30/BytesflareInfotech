export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            About <span className="text-teal-600">Bytesflare Infotech</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
            A modern IT solutions company dedicated to transforming businesses through innovative
            technology and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              Transforming Ideas into Digital Success Stories
            </h3>

            <p className="text-slate-600 leading-relaxed mb-4">
              At Bytesflare Infotech, we're a dynamic startup specializing in creating comprehensive
              digital solutions that empower businesses to thrive in today's competitive landscape.
              Our expertise spans mobile app development, web development, ERP solutions, and digital
              transformation services.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Based in Gujarat, we've already delivered innovative solutions to clients across
              various industries, from educational institutions requiring sophisticated management
              systems to businesses seeking robust e-commerce platforms.
            </p>
            <p className="text-slate-600 leading-relaxed">
              As an agile startup, our team combines fresh perspectives with technical excellence to
              deliver cutting-edge solutions that not only meet current needs but also scale with your
              business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-4xl font-bold text-slate-900">50+</p>
              <p className="mt-2 text-slate-600 font-medium">Projects Completed</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-4xl font-bold text-slate-900">30+</p>
              <p className="mt-2 text-slate-600 font-medium">Happy Clients</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-4xl font-bold text-slate-900">100%</p>
              <p className="mt-2 text-slate-600 font-medium">Client Satisfaction</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-4xl font-bold text-slate-900">24/7</p>
              <p className="mt-2 text-slate-600 font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


