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
    { path: '/resultats', label: 'Résultats', icon: <Trophy size={18} /> },
    { path: '/galerie', label: 'Galerie', icon: <Image size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Phone size={18} /> },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-bambe-800 via-bambe-700 to-bambe-600 text-white shadow-xl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo avec image et texte */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-yellow-400"
            >
              {/* Logo AS Bambé */}
              <img 
                src="/bambelogo1.jpg" 
                alt="Logo AS Bambé de Moundou"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  // Fallback si l'image ne charge pas
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <span class="text-white font-black text-2xl">ASB</span>
                    </div>
                  `;
                }}
              />
              {/* Effet brillant */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
            </motion.div>
            
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">AS Bambé</h1>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="hidden md:block"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </motion.div>
              </div>
              <div className="flex items-center space-x-1 text-xs md:text-sm">
                <MapPin size={12} className="text-yellow-300" />
                <span className="text-bambe-200 font-medium">Moundou - Tchad</span>
                <span className="text-bambe-300">•</span>
                <span className="text-bambe-200">Depuis 2017</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group relative"
              >
                {/* Effet de fond au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:via-yellow-400/20 group-hover:to-yellow-500/10 transition-all duration-500 rounded-lg"></div>
                
                <span className="text-yellow-300 group-hover:text-yellow-200 transition-colors relative z-10">
                  {item.icon}
                </span>
                <span className="font-medium relative z-10 group-hover:text-white">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors relative group"
            aria-label="Menu"
          >
            {/* Animation du bouton */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 to-yellow-400/0 group-hover:from-yellow-500/20 group-hover:to-yellow-400/20 rounded-lg transition-all duration-300"></div>
            
            <div className="relative z-10">
              {isOpen ? <X size={28} className="text-yellow-300" /> : <Menu size={28} className="text-yellow-300" />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-gradient-to-b from-bambe-700 to-bambe-800"
            >
              <div className="py-4 border-t border-yellow-400/20">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors mb-1 group relative"
                  >
                    {/* Effet de fond mobile */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 to-yellow-400/0 group-hover:from-yellow-500/10 group-hover:to-yellow-400/20 rounded-lg transition-all duration-300"></div>
                    
                    <span className="text-yellow-300 relative z-10">
                      {item.icon}
                    </span>
                    <span className="font-medium relative z-10 group-hover:text-white">
                      {item.label}
                    </span>
                    
                    {/* Flèche indicateur */}
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="ml-auto relative z-10"
                    >
                      <div className="w-2 h-2 border-r-2 border-t-2 border-yellow-300 rotate-45"></div>
                    </motion.div>
                  </Link>
                ))}
                
                {/* Bandeau mobile */}
                <div className="mt-4 mx-4 p-3 bg-gradient-to-r from-yellow-500/20 to-yellow-400/10 rounded-lg border border-yellow-400/30">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <p className="text-sm text-yellow-200 text-center">
                      Site officiel AS Bambé Moundou
                    </p>
                  </div>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;