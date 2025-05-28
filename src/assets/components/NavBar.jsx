import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Watch.ME</h1>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`${
                  location.pathname === item.to
                    ? "text-yellow-300"
                    : "text-white"
                } hover:text-gray-300 transition`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
