function   Footer() {
  return (
<footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-float1"></div>
    <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-float2"></div>
    <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full blur-3xl animate-float3"></div>
  </div>

  {/* Main footer content */}
  <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
      {/* Logo Section */}
      <div className="group">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition duration-500">
            <span className="text-xl font-bold">MD</span>
          </div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Manuel Dala</h2>
        </div>
        <p className="text-gray-300 mb-6">Innovating digital experiences one line of code at a time.</p>
        <div className="flex space-x-4">{/* Social Links Here */}</div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
        <ul className="space-y-3">{/* List Items Here */}</ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
        <ul className="space-y-4">{/* Contact Items Here */}</ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
        <p className="text-gray-300 mb-4">Subscribe to my newsletter for the latest updates.</p>
        <form className="mt-4">
          <div className="relative">
            <input type="email" placeholder="Your email" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-1">
              {/* Icon */}
            </button>
          </div>
        </form>
      </div>
    </div>

    <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Manuel Dala. All rights reserved.</p>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
        <a href="#" className="text-gray-400 hover:text-white transition">Cookies</a>
      </div>
    </div>
  </div>

  <div className="orb absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none"></div>

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
    .orb { transform: translate(-50%, -50%); opacity: 0.3; transition: transform 0.1s ease-out; }
  `}</style>

  <script dangerouslySetInnerHTML={{ __html: `
    document.addEventListener('mousemove', (e) => {
      const orb = document.querySelector('.orb');
      orb.style.left = \`\${e.clientX}px\`;
      orb.style.top = \`\${e.clientY}px\`;
    });
  ` }} />
</footer>

  );
}export default Footer;