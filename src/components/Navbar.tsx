import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
  <Link to="/" className="flex items-center space-x-2">
    <img
      src="/logo.png" // Ensure this file exists in your public folder
      alt="Tripura Sarees Logo"
      className="h-8 w-8 rounded-full object-contain"
    />
    <span className="text-2xl font-serif font-bold text-gray-900">
      Tripura Saree Collections
    </span>
  </Link>
</div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-600 transition-colors">About Us</Link>
            <Link to="/collection" className="text-gray-700 hover:text-pink-600 transition-colors">Collection</Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact Us</Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-pink-600 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-pink-600">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block text-gray-700 hover:text-pink-600">About Us</Link>
          <Link to="/collection" onClick={toggleMenu} className="block text-gray-700 hover:text-pink-600">Collection</Link>
          <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-pink-600">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;