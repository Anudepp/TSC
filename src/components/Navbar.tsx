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
          isMobile ? 'block text-base' : 'relative inline-block text-sm'
        } text-gray-900 hover:text-rose-600 transition-colors duration-200
          ${!isMobile ? 'after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-rose-600 hover:after:w-full after:transition-all after:duration-300' : ''}
        `}
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
    <nav className="bg-rose-100 shadow-md sticky top-0 z-50 transition-colors duration-300">
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
              className="text-gray-900 hover:text-rose-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden px-4 pt-2 pb-2 space-y-2 bg-rose-100 shadow-inner animate-slideDown transition-all duration-300 ease-out"
        >
          <NavLinks isMobile onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;