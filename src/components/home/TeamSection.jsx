export default function TeamSection() {
  const team = ["Founder", "Marketing Head", "Lead Developer"];

  return (
    <section className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-14">
        Meet Our Team
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {team.map((role, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-8 border border-yellow-400/30"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-700"></div>
            <h3 className="font-semibold">{role}</h3>
            <p className="text-gray-300 text-sm mt-2">
              Dedicated to delivering excellence.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
