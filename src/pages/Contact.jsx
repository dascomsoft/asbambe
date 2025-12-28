import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, Users, CheckCircle, Instagram, Facebook, Twitter, Youtube, Clock, MapPin } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Horaires d'ouverture
  const openingHours = [
    { day: "Lundi - Vendredi", hours: "9h00 - 18h00" },
    { day: "Samedi", hours: "9h00 - 13h00" },
    { day: "Dimanche", hours: "Fermé" },
    { day: "Jour de match", hours: "9h00 - Fin du match" }
  ];

  // Équipes de contact
  const contactTeams = [
    {
      department: "Contact Général",
      email: "asbambefc@gmail.com",
      phone: "+235 61 47 06 11",
      hours: "Lun-Ven: 9h-18h"
    },
    {
      department: "Communication & Presse",
      email: "asbambefc@gmail.com",
      phone: "+235 61 47 06 11",
      hours: "Lun-Ven: 9h-18h"
    },
    {
      department: "Partenariats",
      email: "asbambefc@gmail.com",
      phone: "+235 61 47 06 11",
      hours: "Lun-Ven: 10h-17h"
    },
    {
      department: "Centre de Formation",
      email: "asbambefc@gmail.com",
      phone: "+235 61 47 06 11",
      hours: "Lun-Ven: 8h-16h"
    }
  ];

  // Réseaux sociaux
  const socialMedia = [
    { icon: <Instagram size={20} />, link: "#", label: "Instagram" },
    { icon: <Facebook size={20} />, link: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, link: "#", label: "Twitter" },
    { icon: <Youtube size={20} />, link: "#", label: "YouTube" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construire le message WhatsApp
    const whatsappMessage = 
      `Nouveau message de contact AS Bambé%0A%0A` +
      `Nom: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Sujet: ${formData.subject}%0A` +
      `Message: ${formData.message}`;
    
    // Ouvrir WhatsApp avec le message pré-rempli
    window.open(`https://wa.me/23561470611?text=${whatsappMessage}`, '_blank');
    
    // Simulation de succès
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('/ballon.webp')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-700/80 to-blue-500/70 z-10"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/30 shadow-lg"
            >
              <MessageSquare size={20} className="text-blue-300" />
              <span className="font-medium text-white">Contact & Support</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Contactez l'AS Bambé
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="block text-blue-300 mt-2 text-2xl md:text-3xl lg:text-4xl"
              >
                Une équipe à votre écoute
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4"
            >
              Questions, partenariats ou simplement envie de nous soutenir ?
              Notre équipe est à votre disposition.
            </motion.p>

          </motion.div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Remplissez le formulaire ci-dessous et nous vous répondrons via WhatsApp dans les plus brefs délais.
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-white rounded-2xl shadow-lg p-12 border border-gray-200"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-blue-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Message prêt à être envoyé !
                </h3>
                <p className="text-gray-600 mb-6">
                  Votre message va s'ouvrir dans WhatsApp. Veuillez l'envoyer pour finaliser votre demande.
                </p>
                <p className="text-sm text-gray-500">
                  WhatsApp : +235 61 47 06 11
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Votre nom et prénom"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Adresse email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Objet de votre message"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        placeholder="Décrivez votre demande en détail..."
                      ></textarea>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500 text-center sm:text-left">
                          * Champs obligatoires. Nous traiterons votre demande avec WhatsApp.
                        </p>

                        <button
                          type="submit"
                          className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Send size={18} />
                          <span>Envoyer via WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Informations de Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coordonnées */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Nos Coordonnées
                </h2>
                
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Phone className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Téléphone</h3>
                        <p className="text-gray-600">+235 61 47 06 11</p>
                        <p className="text-sm text-gray-500 mt-1">Disponible du lundi au vendredi</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Mail className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Email</h3>
                        <p className="text-gray-600">asbambefc@gmail.com</p>
                        <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <MapPin className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Adresse</h3>
                        <p className="text-gray-600">Stade Municipal de Moundou</p>
                        <p className="text-gray-600">Moundou, Tchad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Horaires d'Ouverture
                </h2>
                
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="space-y-4">
                    {openingHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700 font-medium">{item.day}</span>
                        <span className="font-bold text-gray-900">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <span className="font-bold">Note :</span> Horaires étendus les jours de match
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Équipes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Équipes de Contact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactTeams.map((team, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">{team.department}</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail size={16} className="text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-sm truncate">{team.email}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone size={16} className="text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{team.phone}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock size={16} className="text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{team.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Suivez-nous
                </h2>
                
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6">
                  <div className="flex justify-center space-x-6">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <p className="text-center text-white/90 mt-6">
                    Restez connecté avec l'AS Bambé sur les réseaux sociaux
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Supportez l'AS Bambé
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez la grande famille des supporters et vivez l'aventure avec nous
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open('https://wa.me/23561470611', '_blank')}
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
              >
                <MessageSquare size={20} />
                <span>Nous contacter sur WhatsApp</span>
              </button>
              
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300">
                Voir les matchs
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;