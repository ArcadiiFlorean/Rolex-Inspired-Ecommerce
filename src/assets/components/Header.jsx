import Button from "./Buttons";

function Header() {
  return (
    <header className="dark:bg-gray-800 h-24 sm:h-32 flex items-center z-30 w-full">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
          Watch.ME
        </div>
        <div className="flex items-center">
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
            <a href="#" className="py-2 px-6 flex">
              Home
            </a>
            <a href="#" className="py-2 px-6 flex">
              Watch
            </a>
            <a href="#" className="py-2 px-6 flex">
              Product
            </a>
            <a href="#" className="py-2 px-6 flex">
              Contact
            </a>
            <a href="#" className="py-2 px-6 flex">
              Career
            </a>
          </nav>
          <div className=" gap-4 flex items-center">
            <Button label="Shop now" />
            <Button label="     See Collection" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
