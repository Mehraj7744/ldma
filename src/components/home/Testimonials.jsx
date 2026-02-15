export default function Testimonials() {

  const reviews = [
    {
      name: "Amit Patil",
      text: "Their SEO strategy increased our leads by 200% in 6 months."
    },
    {
      name: "Neha Kulkarni",
      text: "Professional team and excellent web development services."
    },
    {
      name: "Rahul Deshmukh",
      text: "Best digital marketing company in Latur!"
    },
  ];

  return (
    <section className="bg-gray-800 text-yellow-400 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-yellow-400"
            >
              <p className="text-gray-300 mb-4">
                "{review.text}"
              </p>
              <h4 className="font-semibold">
                — {review.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
