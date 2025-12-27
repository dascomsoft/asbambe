// import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart } from 'lucide-react';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-0 p-24">
//       <div className="container mx-auto px-4 pb-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Club Information */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="space-y-4"
//           >
//             <h3 className="text-2xl font-bold text-yellow-300 mb-4">
//               AS Bambé Moundou
//             </h3>
//             <div className="space-y-3">
//               <div className="flex items-start space-x-3">
//                 <MapPin className="text-bambe-400 mt-1 flex-shrink-0" size={20} />
//                 <span>Stade Municipal de Moundou, Logone Occidental, Tchad</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="text-bambe-400" size={20} />
//                 <span>+235 66 12 34 56</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="text-bambe-400" size={20} />
//                 <span>contact@asbambe-moundou.td</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="space-y-4"
//           >
//             <h3 className="text-2xl font-bold text-yellow-300 mb-4">
//               Navigation
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/club" className="hover:text-yellow-300 transition-colors flex items-center">
//                   <span className="w-2 h-2 bg-bambe-500 rounded-full mr-3"></span>
//                   Histoire & Palmarès
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/equipe" className="hover:text-yellow-300 transition-colors flex items-center">
//                   <span className="w-2 h-2 bg-bambe-500 rounded-full mr-3"></span>
//                   Effectif & Staff
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/actualites" className="hover:text-yellow-300 transition-colors flex items-center">
//                   <span className="w-2 h-2 bg-bambe-500 rounded-full mr-3"></span>
//                   Actualités
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/galerie" className="hover:text-yellow-300 transition-colors flex items-center">
//                   <span className="w-2 h-2 bg-bambe-500 rounded-full mr-3"></span>
//                   Galerie Photos
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Social Media & Copyright */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="space-y-6"
//           >
//             <div>
//               <h3 className="text-2xl font-bold text-yellow-300 mb-4">
//                 Suivez-nous
//               </h3>
//               <div className="flex space-x-4">
//                 {[
//                   { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700', label: 'Facebook' },
//                   { icon: Instagram, color: 'bg-pink-600 hover:bg-pink-700', label: 'Instagram' },
//                   { icon: Twitter, color: 'bg-blue-400 hover:bg-blue-500', label: 'Twitter' },
//                 ].map((social) => (
//                   <a
//                     key={social.label}
//                     href="#"
//                     className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg`}
//                     aria-label={social.label}
//                   >
//                     <social.icon size={24} />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div className="pt-4 border-t border-gray-700">
//               <p className="text-sm text-gray-400 flex items-center justify-center">
//                 <Heart size={16} className="text-red-500 mx-1" />
//                 Fait avec passion pour les supporters de l'AS Bambé
//               </p>
//               <p className="text-sm text-gray-400 text-center mt-2">
//                 © {currentYear} Association Sportive Bambé de Moundou. Tous droits réservés.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Club Slogan */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-center mt-8 pt-6 border-t border-gray-800"
//         >
//           <p className="text-lg font-semibold text-bambe-300">
//             "La fierté du Logone Occidental depuis 2017"
//           </p>
//           <p className="text-sm text-gray-500 mt-2">
//             Club de football professionnel • Formation des jeunes • Engagement communautaire
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




















































































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
    { icon: MessageCircle, label: "WhatsApp", color: "hover:bg-green-600", bgColor: "bg-green-500", url: "#" },
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
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                <Home className="text-white" size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                AS Bambé <span className="text-yellow-300">Moundou</span>
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              La fierté du football tchadien depuis 2017. Plus qu'un club, une institution au service du développement sportif et social.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 group">
                <MapPin className="text-yellow-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
                  Stade Municipal, Moundou<br />
                  <span className="text-xs text-gray-400">Logone Occidental, Tchad</span>
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="text-yellow-400 group-hover:scale-110 transition-transform" size={18} />
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">+235 66 12 34 56</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="text-yellow-400 group-hover:scale-110 transition-transform" size={18} />
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">contact@asbambe-moundou.td</span>
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
                <h4 className="text-lg sm:text-xl font-bold text-white border-l-4 border-yellow-500 pl-3">
                  {section.title}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.to}
                        className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-yellow-300 transition-colors py-1 sm:py-2"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-yellow-500/20 group-hover:to-yellow-600/20 transition-all">
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

          {/* Newsletter et réseaux sociaux */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                📬 Restez informé
              </h4>
              <p className="text-sm text-gray-300 mb-3 sm:mb-4">
                Recevez les dernières actualités du club directement dans votre boîte mail.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800/70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-2 sm:py-3 rounded-lg transition-all hover:scale-105 text-sm sm:text-base"
                >
                  S'abonner
                </button>
              </form>
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
              <Trophy className="text-yellow-400" size={18} />
              <span className="text-yellow-300 font-bold text-sm sm:text-base">
                LA FIERTÉ DU LOGONE DEPUIS 2017
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
                Créé avec passion pour les supporters des Verts de Moundou
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-yellow-300 transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-400 hover:text-yellow-300 transition-colors">
                Confidentialité
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-yellow-300 transition-colors">
                Contact
              </Link>
              <Link to="/plan-du-site" className="text-gray-400 hover:text-yellow-300 transition-colors">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-bambe-700/20 to-bambe-800/20 rounded-full border border-bambe-700/30">
              <span className="text-xs text-bambe-300">🏆</span>
              <span className="text-xs text-bambe-200">Club Officiel FTF</span>
              <span className="text-xs text-bambe-300">⚽</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;