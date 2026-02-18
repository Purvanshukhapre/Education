import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User as UserIcon, LogOut } from 'lucide-react';
import Container from './Container';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const savedUser = localStorage.getItem('Patil Institute_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/90 backdrop-blur-md shadow-md'
      : 'bg-white/80 backdrop-blur-sm border-b border-gray-100'
      }`}>
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-xl">PI</span>
            </div>
            <span className="text-xl font-bold transition-colors duration-300 text-slate-900">
              Patil Institute
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors duration-300 ${isActive(link.path)
                  ? 'text-primary'
                  : 'text-slate-600 hover:text-primary'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <Link to="/cart" className="relative p-2 text-slate-600 hover:text-primary transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-3 bg-[#F2F4F7] py-2 px-4 rounded-full border border-gray-100">
                <UserIcon className="w-5 h-5 text-primary" />
                <span className="text-[14px] font-bold text-[#162726]">{user.name.split(' ')[0]}</span>
                <button
                  onClick={() => { localStorage.removeItem('Patil Institute_user'); setUser(null); }}
                  className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-[15px] font-bold text-[#162726] hover:text-primary transition-colors"
              >
                Login
              </Link>
            )}

            <Link
              to="/signup"
              className="px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg bg-primary text-white hover:bg-[#068f83] shadow-primary/20"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-slate-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 px-4 bg-white shadow-2xl rounded-b-[32px] absolute top-full left-0 w-full border-t border-gray-100 z-50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold py-3 px-4 rounded-2xl transition-all ${isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-600 hover:bg-gray-100 hover:text-primary'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-6 border-t border-gray-100">
                <Link
                  to="/cart"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl text-[#162726] font-bold hover:bg-primary/10 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="w-5 h-5 text-[#07A698]" />
                    Cart
                  </div>
                  {cartCount > 0 && (
                    <span className="bg-primary text-white text-[12px] font-bold px-3 py-0.5 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {user ? (
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3 text-[#162726] font-bold">
                      <UserIcon className="w-5 h-5 text-[#07A698]" />
                      {user.name}
                    </div>
                    <button
                      onClick={() => { localStorage.removeItem('Patil Institute_user'); setUser(null); setIsMenuOpen(false); }}
                      className="text-red-500 font-bold text-[14px]"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="p-4 bg-gray-50 rounded-2xl text-[#162726] font-bold text-center hover:bg-primary/10 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}

                <Link
                  to="/signup"
                  className="bg-primary hover:bg-[#162726] text-white px-6 py-4 rounded-2xl font-bold text-center shadow-lg shadow-primary/20 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;