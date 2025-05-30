import React from "react";

function Footer() {
  return (
    <footer className="relative bg-[#005C3C] text-white overflow-hidden">
      {/* Floating Blurs - Luxury Accent */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-16 left-10 w-48 h-48 bg-[#007A53] rounded-full blur-3xl animate-float1"></div>
        <div className="absolute top-32 right-20 w-60 h-60 bg-[#003B28] rounded-full blur-3xl animate-float2"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-[#009E6C] rounded-full blur-3xl animate-float3"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
              <img src="/rolex-logo.svg" alt="Rolex Logo" className="w-12 h-12" />
              <h2 className="text-2xl font-bold text-[#D4AF37]">ROLEX</h2>
            </div>
            <p className="text-gray-300 italic mb-4">Excellence in every second.</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="h-5 w-5 hover:opacity-70" /></a>
              <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="h-5 w-5 hover:opacity-70" /></a>
              <a href="#"><img src="/icons/youtube.svg" alt="YouTube" className="h-5 w-5 hover:opacity-70" /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#D4AF37]">Home</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Watches</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Collections</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Email: arcadiiflorean789@gmail.com</li>
              <li>Phone: +44 7454 185152 </li>
              <li>Location: Geneva, Switzerland</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Informed</h3>
            <p className="text-gray-300 mb-4">Subscribe to receive Rolex updates and releases.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
              className="mt-4"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full bg-[#004a30] border border-[#006D4D] rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] hover:bg-[#c2a634] text-black rounded-lg px-4 py-1 text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-[#007A53] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ROLEX. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#D4AF37]">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37]">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37]">Cookies</a>
          </div>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -20px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}

export default Footer;
