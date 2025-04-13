import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavLink {
  to: string;
  label: string;
}

const navLinks: NavLink[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/collection', label: 'Collection' },
  { to: '/contact', label: 'Contact Us' },
];

const Logo: FC = () => (
  <Link to="/" className="flex items-center gap-3 sm:gap-4">
    <img
      src="/logo.png"
      alt="Tripura Sarees Logo"
      className="h-10 w-10 rounded-full object-contain"
    />
    <span className="text-lg sm:text-2xl font-serif font-bold text-gray-900">
      Tripura Saree Collections
    </span>
  </Link>
);

interface NavLinksProps {
  isMobile?: boolean;
  onClick?: () => void;
}

const NavLinks: FC<NavLinksProps> = ({ isMobile = false, onClick }) => (
  <>
    {navLinks.map(({ to, label }) => (
      <Link
        key={to}
        to={to}
        onClick={onClick}
        className={`${
          isMobile ? 'block' : ''
        } text-gray-700 hover:text-pink-600 transition-colors`}
      >
        {label}
      </Link>
    ))}
  </>
);

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4 space-y-3 bg-white shadow-inner animate-slideDown transition-all duration-300 ease-out">
          <NavLinks isMobile onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;