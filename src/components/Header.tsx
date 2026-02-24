import React, { useState, useEffect } from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Journey', href: '#journey' },
    { name: 'Research', href: '#scientific-work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter text-gradient">
            Drashti Patel
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 border-l border-slate-300 dark:border-slate-700 pl-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                aria-label="Toggle Dark Mode"
              >
                <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
              </button>
              <a href="#contact" className="px-5 py-2 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
                Let's Talk
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 dark:text-white"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="block w-full text-center px-5 py-3 mt-4 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-md">
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
