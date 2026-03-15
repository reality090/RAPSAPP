import React from "react";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-black/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-neutral-300 to-neutral-600" />
          <span className="text-lg font-semibold tracking-tight">
            reality
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <li className="cursor-pointer hover:text-white">Home</li>
          <li className="cursor-pointer hover:text-white">Services</li>
          <li className="cursor-pointer hover:text-white">Projects</li>
          <li className="cursor-pointer hover:text-white">Contact</li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-gray-700 text-gray-300 hover:border-gray-400">
            ☾
          </button>
          <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200">
            Work with us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
