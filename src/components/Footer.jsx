import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-0 p-24">
      {/* Top wave decoration */}
      {/* <div className="relative -top-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#111827" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}

      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              AS Bambé Moundou
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-bambe-400 mt-1 flex-shrink-0" size={20} />
                <span>Stade Municipal de Moundou, Logone Occidental, Tchad</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-bambe-400" size={20} />
                <span>+235 66 12 34 56</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-bambe-400" size={20} />
                <span>contact@asbambe-moundou.td</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/club" className="hover:text-yellow-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-bambe-500 rounded-full mr-3"></span>
                  Histoire & Palmarès
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="hover:text-yellow-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-bambe-500 rounded-full mr-3"></span>
                  Effectif & Staff
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="hover:text-yellow-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-bambe-500 rounded-full mr-3"></span>
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="hover:text-yellow-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-bambe-500 rounded-full mr-3"></span>
                  Galerie Photos
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Media & Copyright */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                Suivez-nous
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700', label: 'Facebook' },
                  { icon: Instagram, color: 'bg-pink-600 hover:bg-pink-700', label: 'Instagram' },
                  { icon: Twitter, color: 'bg-blue-400 hover:bg-blue-500', label: 'Twitter' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400 flex items-center justify-center">
                <Heart size={16} className="text-red-500 mx-1" />
                Fait avec passion pour les supporters de l'AS Bambé
              </p>
              <p className="text-sm text-gray-400 text-center mt-2">
                © {currentYear} Association Sportive Bambé de Moundou. Tous droits réservés.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Club Slogan */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-8 pt-6 border-t border-gray-800"
        >
          <p className="text-lg font-semibold text-bambe-300">
            "La fierté du Logone Occidental depuis 2017"
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Club de football professionnel • Formation des jeunes • Engagement communautaire
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;