export default function ProcessSection() {
  const steps = [
    "Strategy & Planning",
    "Design & Development",
    "Launch & Optimization",
    "Growth & Scaling",
  ];

  return (
    <section className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-14">
        Our Working Process
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border border-yellow-400/40 rounded-xl p-6 hover:bg-gray-800 transition"
          >
            <div className="text-3xl font-bold mb-4">
              0{index + 1}
            </div>
            <p className="text-gray-300">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
