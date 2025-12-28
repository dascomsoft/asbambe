

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Trophy, Users, Calendar, Image, Phone, Home, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Accueil', icon: <Home size={18} /> },
    { path: '/club', label: 'Le Club', icon: <Trophy size={18} /> },
    { path: '/equipe', label: 'Équipe', icon: <Users size={18} /> },
    { path: '/actualites', label: 'Actualités', icon: <Calendar size={18} /> },
    { path: '/galerie', label: 'Galerie', icon: <Image size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Phone size={18} /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-gradient-to-br from-blue-950 via-blue-950 to-blue-950 text-white shadow-xl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 shadow-lg"
            >
              <img
                src="/bambelogo1.jpg"
                alt="Logo AS Bambé"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" />
            </motion.div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold">AS Bambé</h1>
              <div className="flex items-center text-xs md:text-sm space-x-1">
                <MapPin size={12} className="text-yellow-300" />
                <span className="text-sky-200">Moundou - Tchad</span>
                <span className="text-sky-300">•</span>
                <span className="text-sky-200">Depuis 2023</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition"
              >
                <span className="text-yellow-300">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
          >
            {isOpen ? <X size={28} className="text-yellow-300" /> : <Menu size={28} className="text-yellow-300" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-gradient-to-b from-sky-600 to-sky-800 overflow-hidden"
            >
              <div className="py-4">
                {navItems.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg"
                  >
                    <span className="text-yellow-300">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
