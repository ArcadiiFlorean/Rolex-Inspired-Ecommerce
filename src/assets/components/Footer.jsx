function Footer() {
  return (
    <footer className="relative bg-[#005C3C] text-white overflow-hidden">
      {/* Rolex-style subtle gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-16 left-10 w-48 h-48 bg-[#007A53] rounded-full blur-3xl animate-float1"></div>
        <div className="absolute top-32 right-20 w-60 h-60 bg-[#003B28] rounded-full blur-3xl animate-float2"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-[#009E6C] rounded-full blur-3xl animate-float3"></div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="group">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/rolex-logo.svg" alt="Rolex Logo" className="w-12 h-12" />
              <h2 className="text-2xl font-bold text-[#D4AF37]">ROLEX</h2>
            </div>
            <p className="text-gray-300 mb-6">Excellence in every second.</p>
            <div className="flex space-x-4">{/* Social Links */}</div>
          </div>

          {/* Quick Links */}
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
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li>Email: info@rolex.com</li>
              <li>Phone: +41 22 302 22 00</li>
              <li>Geneva, Switzerland</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe for latest Rolex updates.</p>
            <form className="mt-4">
              <div className="relative">
                <input type="email" placeholder="Your email" className="w-full bg-[#004a30] border border-[#006D4D] rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] hover:bg-[#c2a634] text-black rounded-lg px-4 py-1">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#007A53] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} ROLEX. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#D4AF37]">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37]">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37]">Cookies</a>
          </div>
        </div>
      </div>

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
