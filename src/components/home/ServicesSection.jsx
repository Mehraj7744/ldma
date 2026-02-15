export default function ServicesSection() {

  const services = [
    {
      title: "Digital Marketing",
      desc: "SEO, Google Ads, Meta Ads & social media growth strategies."
    },
    {
      title: "Website Development",
      desc: "Modern responsive websites using React & enterprise backend."
    },
    {
      title: "Branding & Design",
      desc: "Logo design, brand strategy & UI/UX design."
    },
    {
      title: "Software Solutions",
      desc: "Custom ERP, CRM & business automation systems."
    },
  ];

  return (
    <section className="bg-gray-900 text-yellow-400 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Our Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-yellow-400 p-6 rounded-xl hover:bg-gray-800 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
