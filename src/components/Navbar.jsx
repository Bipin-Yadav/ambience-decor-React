import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

// Receive props: theme, toggleTheme
const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path 
    ? "text-brand-gold font-bold" 
    : "text-gray-600 dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold";

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/90 dark:bg-brand-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold tracking-tighter text-brand-900 dark:text-white">
              AMBIENCE <span className="text-brand-gold font-light">DECOR</span>
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center font-medium text-sm">
            <Link to="/" className={`${isActive('/')} transition`}>Home</Link>
            <Link to="/products" className={`${isActive('/products')} transition`}>Products</Link>
            <Link to="/about" className={`${isActive('/about')} transition`}>About</Link>
            <Link to="/contact" className={`${isActive('/contact')} transition`}>Contact</Link>
            
            {/* CREATIVE THEME TOGGLE */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {theme === 'dark' ? (
                  <Moon className="w-5 h-5 text-brand-gold" fill="currentColor" />
                ) : (
                  <Sun className="w-5 h-5 text-orange-500" fill="currentColor" />
                )}
              </motion.div>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             {/* Mobile Theme Toggle */}
             <button onClick={toggleTheme}>
                {theme === 'dark' ? <Moon className="text-brand-gold" /> : <Sun className="text-orange-500" />}
             </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;