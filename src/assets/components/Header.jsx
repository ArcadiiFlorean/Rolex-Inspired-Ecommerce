import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Buttons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Watch", to: "/watch" },
    { name: "Product", to: "/product" },
    { name: "Contact", to: "/contact" },
    { name: "Career", to: "/career" },
  ];

  return (
    <header className="dark:bg-gray-800 bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold uppercase text-gray-800 dark:text-white">
          <img
            src="rolex-logo.svg"
            className="w-12 h-auto m-auto"
            alt="Watch"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 text-gray-800 dark:text-white text-lg uppercase">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="hover:text-green-600">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <Button label="Shop now" />
          <Button label="See Collection" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-gray-800 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 px-6 pb-4 pt-2 space-y-3 shadow">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 dark:text-white text-lg hover:text-green-600"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Button label="Shop now" />
            <Button label="See Collection" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
