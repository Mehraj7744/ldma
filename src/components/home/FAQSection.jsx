import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does website development take?",
      answer:
        "Typically 2–6 weeks depending on project complexity, features, and custom requirements."
    },
    {
      question: "Do you provide SEO services?",
      answer:
        "Yes. We provide complete on-page, off-page, technical SEO, and local SEO optimization."
    },
    {
      question: "Can you manage paid ads campaigns?",
      answer:
        "Yes, we manage Google Ads, Meta Ads, and performance marketing campaigns."
    },
    {
      question: "Do you build custom software solutions?",
      answer:
        "Yes, we develop ERP, CRM, and fully customized enterprise software systems."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Absolutely. We offer long-term maintenance, updates, and performance monitoring."
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with startups, retail, education, healthcare, real estate, and enterprise businesses."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-800 text-yellow-400">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Frequently Asked Questions
        </h2>

        {/* 2 Column Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-yellow-400/30 rounded-xl overflow-hidden transition duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-2 text-left font-semibold"
              >
                <span>{faq.question}</span>

                <span
                  className={`text-xl transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 pb-6 text-sm text-gray-300 transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
