import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart, ChevronRight, Home, Users, Newspaper, Image, Trophy, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Définir Handshake component avant son utilisation
const Handshake = ({ size, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Liens rapides organisés
  const quickLinks = [
    {
      title: "Club",
      links: [
        { to: "/club", label: "Histoire & Palmarès", icon: <Trophy size={16} /> },
        { to: "/equipe", label: "Effectif & Staff", icon: <Users size={16} /> },
        { to: "/galerie", label: "Galerie Photos", icon: <Image size={16} /> },
      ]
    },
    {
      title: "Actualités",
      links: [
        { to: "/actualites", label: "Toutes les actualités", icon: <Newspaper size={16} /> },
        { to: "/article/performance-historique", label: "Performance Historique", icon: <Trophy size={16} /> },
        { to: "/article/vision-2026", label: "Vision 2026", icon: <MessageCircle size={16} /> },
      ]
    },
    {
      title: "Contact",
      links: [
        { to: "/contact", label: "Nous contacter", icon: <Mail size={16} /> },
        { to: "/club#structure", label: "Direction", icon: <Users size={16} /> },
        { to: "/contact#partenariats", label: "Devenir partenaire", icon: <Handshake size={16} /> },
      ]
    }
  ];

  // Réseaux sociaux
  const socialMedia = [
    { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600", bgColor: "bg-blue-700", url: "#" },
    { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600", bgColor: "bg-gradient-to-br from-pink-500 to-purple-600", url: "#" },
    { icon: Twitter, label: "Twitter", color: "hover:bg-blue-400", bgColor: "bg-blue-500", url: "#" },
    { icon: MessageCircle, label: "WhatsApp", color: "hover:bg-green-600", bgColor: "bg-green-500", url: "https://wa.me/23561470611" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white pt-12 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Informations du club */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-center gap-3 mb-2 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Home className="text-white" size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                AS Bambé <span className="text-blue-300">Moundou</span>
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              La fierté du football tchadien depuis 2017. Plus qu'un club, une institution au service du développement sportif et social.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 group">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
                  Stade Municipal, Moundou<br />
                  <span className="text-xs text-gray-400">Logone Occidental, Tchad</span>
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="text-blue-400 group-hover:scale-110 transition-transform" size={18} />
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">+235 61 47 06 11</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="text-blue-400 group-hover:scale-110 transition-transform" size={18} />
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">asbambefc@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Liens rapides */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-2 gap-4 sm:gap-6">
            {quickLinks.map((section, sectionIndex) => (
              <motion.div 
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3 sm:space-y-4"
              >
                <h4 className="text-lg sm:text-xl font-bold text-white border-l-4 border-blue-500 pl-3">
                  {section.title}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.to}
                        className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-blue-300 transition-colors py-1 sm:py-2"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all">
                          {link.icon}
                        </div>
                        <span className="flex-1">{link.label}</span>
                        <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Réseaux sociaux uniquement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <MessageCircle className="text-green-400" size={20} />
                Contact Rapide
              </h4>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50 mb-6">
                <p className="text-sm text-gray-300 mb-4">
                  Besoin d'une réponse rapide ? Contactez-nous directement via WhatsApp :
                </p>
                <a
                  href="https://wa.me/23561470611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp +235 61 47 06 11</span>
                </a>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Suivez-nous
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`${social.bgColor} ${social.color} w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-white" size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Séparateur */}
        <div className="my-8 sm:my-10 md:my-12 lg:my-16">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Bas de footer */}
        <div className="pb-6 sm:pb-8">
          {/* Slogan */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-3 sm:mb-4 border border-gray-700/50">
              <Trophy className="text-blue-400" size={18} />
              <span className="text-blue-300 font-bold text-sm sm:text-base">
                LA FIERTÉ DU LOGONE DEPUIS 2023
              </span>
              <Heart className="text-red-400" size={18} />
            </div>
            
            <p className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
              "Plus qu'un club, une légende en construction"
            </p>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
              Club de football professionnel • Formation des jeunes • Engagement communautaire • Excellence sportive
            </p>
          </motion.div>

          {/* Copyright et mentions légales */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-800/50">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-400">
                © {currentYear} Association Sportive Bambé de Moundou. Tous droits réservés.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Créé avec passion pour les supporters des Bleus de Moundou
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-blue-300 transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-400 hover:text-blue-300 transition-colors">
                Confidentialité
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-blue-300 transition-colors">
                Contact
              </Link>
              <Link to="/plan-du-site" className="text-gray-400 hover:text-blue-300 transition-colors">
                Plan du site
              </Link>
            </div>
          </div>

          {/* Badge mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-700/20 to-blue-800/20 rounded-full border border-blue-700/30">
              <span className="text-xs text-blue-300">🏆</span>
              <span className="text-xs text-blue-200">Club Officiel FTF</span>
              <span className="text-xs text-blue-300">⚽</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;