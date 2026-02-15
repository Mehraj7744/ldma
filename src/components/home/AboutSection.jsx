export default function AboutSection() {
  return (
    <section className="bg-gray-800 text-yellow-400 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Our Company
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Based in Latur, we specialize in digital marketing, web development,
            branding, and enterprise IT solutions. Our mission is to help
            businesses grow using technology and strategy.
          </p>

          <p className="text-gray-400">
            From startups to enterprises, we deliver measurable results and
            long-term value.
          </p>
        </div>

        <div className="bg-gray-900 p-10 rounded-xl border border-yellow-400">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3 text-gray-300">
            <li>✔ Performance-driven marketing</li>
            <li>✔ Custom software solutions</li>
            <li>✔ Transparent communication</li>
            <li>✔ Affordable enterprise services</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
