import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#27213C] text-white sticky top-0 z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">My Site</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-semibold text-lg">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <li>Careers</li>
          <li>Contact</li>
        </ul>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden text-3xl font-bold" aria-label="Open Menu">
          ☰
        </button>
      </nav>

      {/* Overlay */}
      {menuOpen && <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40" />}

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#27213C] z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}>
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold">Menu</div>
          <button onClick={() => setMenuOpen(false)} className="text-2xl font-bold">
            ✖
          </button>
        </div>
        <ul className="flex flex-col gap-6 text-xl font-semibold">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart
          </Link>
          <li onClick={() => setMenuOpen(false)}>Careers</li>
          <li onClick={() => setMenuOpen(false)}>Contact</li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
