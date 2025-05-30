import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./Buttons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Find your rolex", to: "/watch" },
  ];

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("hero");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToHero: true } });
    }
  };

  return (
    <header className="dark:bg-[#003B28] py-6 bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Centrat Absolut */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img
            src="rolex-header.png"
            alt="Rolex Logo"
            className="w-[60px] h-auto"
          />
        </div>

        {/* Text/Navigation în Dreapta */}
        <nav className="ml-auto hidden lg:flex gap-6 text-gray-800 dark:text-white text-lg uppercase">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="hover:text-[#D4AF37]">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Buton pentru Mobile */}
        <button
          className="lg:hidden ml-auto text-3xl text-gray-800 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#003B28] px-6 pb-4 pt-2 space-y-3 shadow">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 dark:text-white text-lg hover:text-[#D4AF37]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
