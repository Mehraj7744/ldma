export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-yellow-400 pt-36 pb-28 px-6 overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-3xl rounded-full"></div>
      

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Tagline */}
        <p className="text-sm tracking-widest uppercase text-yellow-300 mb-6">
          Digital Growth • IT Solutions • Performance Marketing
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Latur’s Most Trusted  
          <span className="block text-yellow-300">
            Digital Marketing & IT Agency
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          We help businesses in Latur and across Maharashtra scale through
          powerful branding, result-driven SEO strategies, custom software
          development, and high-performance paid advertising campaigns.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-12">
          <span>✔ SEO & Local Ranking Experts</span>
          <span>✔ Google & Meta Ads Certified</span>
          <span>✔ Custom Web & ERP Development</span>
          <span>✔ 100+ Successful Clients</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <button className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/20">
            Get Free Consultation
          </button>

          <button className="border border-yellow-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-gray-900 transition">
            View Our Services
          </button>
        </div>

        {/* Mini Stats Preview */}
        {/* <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center border-t border-yellow-400/20 pt-12">
          <div>
            <h3 className="text-3xl font-bold text-yellow-300">150+</h3>
            <p className="text-gray-400 text-sm mt-2">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-300">120+</h3>
            <p className="text-gray-400 text-sm mt-2">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-300">5+ Years</h3>
            <p className="text-gray-400 text-sm mt-2">Industry Experience</p>
          </div>
        </div> */}

      </div>
    </section>
  );
}
