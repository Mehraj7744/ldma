export default function PortfolioSection() {
  return (
    <section className="py-20 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold mb-14">
        Recent Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gray-900 rounded-xl overflow-hidden border border-yellow-400/30 hover:scale-105 transition duration-300"
          >
            <div className="h-48 bg-gray-700"></div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">Project {item}</h3>
              <p className="text-gray-300 text-sm">
                High-performance website & marketing solution.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
