import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gray-900 text-yellow-400 py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            Let’s Start a Conversation
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? We’d love to help your business grow with
            performance-driven digital marketing and IT solutions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT - Contact Form */}
          <div className="bg-gray-800/60 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-10 shadow-xl">

            <h2 className="text-3xl font-bold mb-8 text-yellow-300">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-gray-900 border border-yellow-400/20 
                             rounded-xl px-4 py-3 text-gray-300
                             focus:outline-none focus:border-yellow-400 transition"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-900 border border-yellow-400/20 
                             rounded-xl px-4 py-3 text-gray-300
                             focus:outline-none focus:border-yellow-400 transition"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project"
                  className="w-full bg-gray-900 border border-yellow-400/20 
                             rounded-xl px-4 py-3 text-gray-300
                             focus:outline-none focus:border-yellow-400 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 
                           py-3 rounded-full font-semibold
                           hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/20"
              >
                Send Message
              </button>

            </form>
          </div>


          {/* RIGHT - Contact Details */}
          <div className="space-y-10">

            <div className="bg-gray-800/60 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-10 shadow-xl">
              <h2 className="text-3xl font-bold mb-8 text-yellow-300">
                Contact Information
              </h2>

              <div className="space-y-6 text-gray-300">

                <div className="flex items-center gap-4">
                  <Mail className="text-yellow-400" />
                  <span>info@laturdigitalmarketing.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-yellow-400" />
                  <span>+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-yellow-400" />
                  <span>Latur, Maharashtra, India</span>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="text-yellow-400" />
                  <span>Mon – Sat : 10:00 AM – 7:00 PM</span>
                </div>

              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden border border-yellow-400/20 shadow-xl">
              <iframe
                title="Latur Location"
                src="https://www.google.com/maps?q=Latur,Maharashtra&output=embed"
                width="100%"
                height="250"
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>

          </div>
        </div>


        {/* Newsletter CTA */}
        <div className="mt-28 bg-yellow-400 text-gray-900 rounded-3xl p-12 text-center shadow-2xl">

          <h2 className="text-4xl font-bold mb-6">
            Stay Ahead in Digital Growth
          </h2>

          <p className="mb-8 text-lg">
            Subscribe to our newsletter for marketing insights, SEO tips,
            and business growth strategies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full outline-none"
            />

            <button className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
