import {
  Target,
  Monitor,
  Smartphone,
  Search,
  Palette,
  TrendingUp,
  Video,
  Users,
  Globe
} from "lucide-react";

export default function Expertise() {

  const services = [
    { icon: Target, title: "Lead Generation", description: "Conversion-focused funnels that build a consistent pipeline of qualified leads." },
    { icon: Monitor, title: "Web Design", description: "Modern, responsive websites aligned with your brand and optimized for performance." },
    { icon: Smartphone, title: "FB & Instagram Ads", description: "Scroll-stopping creatives optimized for engagement and conversions." },
    { icon: Search, title: "Google Ads", description: "High-performance campaigns built for visibility and measurable ROI." },
    { icon: Palette, title: "Graphic Design", description: "Strategic visuals and brand identities designed to elevate your presence." },
    { icon: TrendingUp, title: "SEO Optimization", description: "Technical and local SEO strategies that improve rankings and organic growth." },
    { icon: Video, title: "Video & Voiceover Ads", description: "Emotion-driven video campaigns crafted to captivate and convert." },
    { icon: Users, title: "Influencer Marketing", description: "Strategic influencer partnerships to build trust and social proof." },
    { icon: Globe, title: "Digital Political Campaign", description: "Comprehensive digital strategies to connect and mobilize audiences." }
  ];

  return (
    <section className="bg-gray-900 text-yellow-400 py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm text-yellow-300 mb-4">
            All Services Under One Roof
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Digital Growth Solutions
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto">
            We deliver premium digital marketing and IT solutions tailored for
            measurable growth and enterprise-level performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative bg-gray-800/60 backdrop-blur-xl
                           border border-yellow-400/10
                           rounded-3xl p-10
                           shadow-lg shadow-black/30
                           hover:shadow-yellow-400/20
                           hover:-translate-y-3
                           hover:border-yellow-400/40
                           transition-all duration-500"
              >

                {/* Icon Wrapper */}
                <div className="flex justify-center mb-8">
                  <div className="p-5 rounded-2xl
                                  bg-gradient-to-br from-yellow-400/30 to-yellow-600/10
                                  border border-yellow-400/20
                                  group-hover:scale-110
                                  group-hover:rotate-3
                                  transition-all duration-500">

                    <Icon size={38} className="text-yellow-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-center text-yellow-300 mb-5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm text-center leading-relaxed">
                  {service.description}
                </p>

                {/* Glow Effect Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1
                                bg-gradient-to-r from-transparent via-yellow-400 to-transparent
                                opacity-0 group-hover:opacity-100
                                transition duration-500"></div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
