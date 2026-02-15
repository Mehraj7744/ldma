export default function About() {
  return (
    <section className="bg-gray-900 text-yellow-400 py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm text-yellow-300 mb-4">
            About Latur Digital Marketing
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Driving Digital Growth with
            <span className="block text-yellow-300">
              Strategy, Innovation & Technology
            </span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We are a performance-driven digital marketing and IT company
            based in Latur, helping businesses scale through intelligent
            branding, software solutions, and measurable marketing strategies.
          </p>
        </div>


        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded with a vision to transform local businesses into
              competitive digital brands, Latur Digital Marketing was built
              on one simple principle — deliver measurable results.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From startups to enterprises, we combine data-driven marketing,
              creative design, and scalable software engineering to ensure
              long-term growth and sustainability.
            </p>
          </div>

          <div className="bg-gray-800 border border-yellow-400/30 rounded-2xl p-10">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-300">
              Why Businesses Trust Us
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Proven ROI-driven strategies</li>
              <li>✔ Certified marketing professionals</li>
              <li>✔ Custom software & ERP solutions</li>
              <li>✔ Transparent reporting & analytics</li>
              <li>✔ Long-term partnership approach</li>
            </ul>
          </div>

        </div>


        {/* Mission Vision Values */}
        <div className="grid md:grid-cols-3 gap-10 mb-28">

          <div className="bg-gray-800 border border-yellow-400/30 rounded-2xl p-8 hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              Our Mission
            </h3>
            <p className="text-gray-300">
              To empower businesses with innovative digital marketing and
              scalable IT solutions that drive sustainable growth and
              measurable success.
            </p>
          </div>

          <div className="bg-gray-800 border border-yellow-400/30 rounded-2xl p-8 hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              Our Vision
            </h3>
            <p className="text-gray-300">
              To become Maharashtra’s leading digital transformation partner,
              known for excellence, transparency, and performance-driven
              innovation.
            </p>
          </div>

          <div className="bg-gray-800 border border-yellow-400/30 rounded-2xl p-8 hover:border-yellow-400 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              Our Core Values
            </h3>
            <p className="text-gray-300">
              Integrity, accountability, creativity, and continuous
              improvement guide every project we undertake.
            </p>
          </div>

        </div>


        {/* Leadership Philosophy */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Our Leadership Philosophy
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            We believe leadership means taking responsibility for our
            clients' growth. Every strategy we create, every system we
            develop, and every campaign we launch is aligned with one goal —
            maximizing business performance and delivering measurable impact.
          </p>
        </div>

      </div>
    </section>
  );
}
