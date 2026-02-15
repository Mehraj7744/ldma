import { useEffect, useState } from "react";

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 1500; // 1.5 seconds
    const incrementTime = 20;
    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    {
      number: 150,
      suffix: "+",
      label: "Projects Delivered",
      description: "Successful digital & IT solutions",
    },
    {
      number: 120,
      suffix: "+",
      label: "Happy Clients",
      description: "Across Latur & Maharashtra",
    },
    {
      number: 5,
      suffix: "+",
      label: "Years Experience",
      description: "In digital marketing & development",
    },
    {
      number: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Proven results & performance",
    },
  ];

  return (
    <section className="bg-gray-900 py-24 border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
          Our Achievements
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          We focus on delivering measurable growth and high-performance
          digital strategies for businesses.
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gray-800/60 backdrop-blur-md 
                         border border-yellow-400/30 
                         rounded-2xl p-8 
                         hover:border-yellow-400 
                         hover:shadow-yellow-400/20 
                         hover:shadow-xl 
                         transition duration-300"
            >
              <h3 className="text-4xl font-bold text-yellow-300 group-hover:scale-110 transition duration-300">
                <Counter target={stat.number} suffix={stat.suffix} />
              </h3>

              <p className="mt-4 font-semibold text-yellow-400">
                {stat.label}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
