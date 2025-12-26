import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, User, FileText, Instagram, Facebook, Twitter, Youtube, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Catégories de contact
  const categories = [
    { value: 'general', label: 'Question générale' },
    { value: 'tickets', label: 'Billetterie' },
    { value: 'partnership', label: 'Partenariat' },
    { value: 'press', label: 'Presse & Médias' },
    { value: 'supporters', label: 'Supporters & Clubs' },
    { value: 'youth', label: 'Centre de Formation' }
  ];

  // FAQ
  const faqs = [
    {
      question: "Comment acheter des billets pour les matchs de l'AS Bambé ?",
      answer: "Les billets sont disponibles à la vente au Stade Municipal de Moundou une semaine avant chaque match. Vous pouvez également les acheter en ligne via notre site partenaire ou auprès des points de vente agréés en ville. Les prix varient selon la catégorie de places."
    },
    {
      question: "Comment devenir membre officiel du club des supporters ?",
      answer: "Pour devenir membre du club des supporters, remplissez le formulaire en ligne sur notre site ou présentez-vous au bureau des supporters au stade. La cotisation annuelle est de 5.000 FCFA et donne droit à des avantages exclusifs : places prioritaires, rencontres avec les joueurs, newsletters, etc."
    },
    {
      question: "Quels sont les horaires d'ouverture du stade pour les visites ?",
      answer: "Le Stade Municipal de Moundou est ouvert au public pour les visites :\n• Lundi au vendredi : 9h-12h et 14h-17h\n• Samedi : 9h-13h\n• Fermé le dimanche et jours fériés\nLes visites de groupes doivent être réservées à l'avance."
    },
    {
      question: "Comment intégrer le centre de formation des jeunes ?",
      answer: "Les sélections pour le centre de formation ont lieu chaque année en septembre. Les jeunes âgés de 12 à 17 ans peuvent s'inscrire via notre site ou se présenter aux dates de sélection. Un dossier complet (certificat médical, extrait de naissance, photos) est requis."
    },
    {
      question: "Comment proposer un partenariat commercial avec le club ?",
      answer: "Pour toute proposition de partenariat, merci d'envoyer un dossier détaillé à l'adresse partenariats@asbambe.td. Notre service commercial étudiera votre proposition et vous recontactera sous 15 jours ouvrés."
    }
  ];

  // Horaires d'ouverture
  const openingHours = [
    { day: "Lundi - Vendredi", hours: "9h00 - 18h00" },
    { day: "Samedi", hours: "9h00 - 13h00" },
    { day: "Dimanche", hours: "Fermé" },
    { day: "Match jours", hours: "9h00 - Fin du match" }
  ];

  // Équipes de contact
  const contactTeams = [
    {
      department: "Billetterie & Accueil",
      email: "billets@asbambe.td",
      phone: "+235 66 12 34 56",
      hours: "Lun-Ven: 9h-17h / Match jours: 9h-fin match"
    },
    {
      department: "Communication & Presse",
      email: "presse@asbambe.td",
      phone: "+235 66 12 34 57",
      hours: "Lun-Ven: 9h-18h"
    },
    {
      department: "Partnership & Sponsoring",
      email: "partenariats@asbambe.td",
      phone: "+235 66 12 34 58",
      hours: "Lun-Ven: 10h-17h"
    },
    {
      department: "Centre de Formation",
      email: "formation@asbambe.td",
      phone: "+235 66 12 34 59",
      hours: "Lun-Ven: 8h-16h"
    }
  ];

  // Gestion du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    console.log('Formulaire soumis:', formData);
    setIsSubmitted(true);
    
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
    }, 5000);
  };

  // Toggle FAQ
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bambe-900 to-bambe-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MessageSquare size={18} />
              <span className="font-medium">Contact & Supporters</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Contactez l'AS Bambé
              <span className="block text-yellow-300">Restons Connectés</span>
            </h1>
            
            <p className="text-xl text-bambe-100 mb-8 max-w-3xl mx-auto">
              Questions, partenariats, billetterie ou simplement envie de nous soutenir ?
              Notre équipe est à votre écoute pour répondre à toutes vos demandes.
            </p>
            
            {/* Stats rapides */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { value: "< 24h", label: "Temps de réponse" },
                { value: "95%", label: "Satisfaction" },
                { value: "7j/7", label: "Support match jours" },
                { value: "4", label: "Équipes dédiées" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-sm text-bambe-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Informations de Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Carte de localisation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="mr-3 text-red-500" size={24} />
                  Notre Localisation
                </h2>
                
                {/* Carte (simulée) */}
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-64 md:h-80 mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <p className="text-gray-700 font-medium">Stade Municipal de Moundou</p>
                    <p className="text-gray-600">Logone Occidental, Tchad</p>
                  </div>
                  
                  {/* Points d'intérêt */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-bambe-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Adresse complète</h3>
                    <p className="text-gray-600">
                      Stade Municipal de Moundou<br />
                      Quartier Centre<br />
                      Moundou, Logone Occidental<br />
                      République du Tchad
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Accès</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Parking gratuit sur place
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Accessible aux personnes à mobilité réduite
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Transport en commun : Lignes 1, 3, 5
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Infos Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Contact principal */}
              <div className="bg-gradient-to-br from-bambe-600 to-bambe-700 text-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Contact Principal</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium">Téléphone</div>
                      <div className="text-bambe-200">+235 66 12 34 56</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium">Email général</div>
                      <div className="text-bambe-200">contact@asbambe-moundou.td</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium">Adresse postale</div>
                      <div className="text-bambe-200">BP 123, Moundou, Tchad</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="mr-3 text-bambe-600" size={24} />
                  Horaires d'Ouverture
                </h3>
                
                <div className="space-y-3">
                  {openingHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{item.day}</span>
                      <span className="font-medium text-gray-900">{item.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <span className="font-bold">Note :</span> Les horaires sont étendus les jours de match. 
                    Consultez notre calendrier pour plus de détails.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Envoyez-nous un Message
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Remplissez le formulaire ci-dessous et notre équipe vous répondra 
                dans les plus brefs délais.
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-white rounded-2xl shadow-lg p-12"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Message envoyé avec succès !
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Merci pour votre message. Nous vous répondrons dans les 24 heures.
                  En attendant, vous pouvez consulter notre FAQ ou nos réseaux sociaux.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-bambe-600 hover:text-bambe-700 font-medium"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User size={16} className="inline mr-2" />
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bambe-500 focus:border-bambe-500 transition-colors"
                          placeholder="Votre nom et prénom"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail size={16} className="inline mr-2" />
                          Adresse email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bambe-500 focus:border-bambe-500 transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FileText size={16} className="inline mr-2" />
                          Catégorie *
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bambe-500 focus:border-bambe-500 transition-colors"
                        >
                          {categories.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bambe-500 focus:border-bambe-500 transition-colors"
                          placeholder="Objet de votre message"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare size={16} className="inline mr-2" />
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bambe-500 focus:border-bambe-500 transition-colors resize-none"
                        placeholder="Décrivez votre demande en détail..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        * Champs obligatoires. Nous traitons vos données avec confidentialité.
                      </p>
                      
                      <button
                        type="submit"
                        className="flex items-center space-x-2 bg-bambe-600 hover:bg-bambe-700 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300"
                      >
                        <Send size={18} />
                        <span>Envoyer le message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Équipes & FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Équipes de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Équipes Spécialisées
              </h2>
              
              <div className="space-y-4">
                {contactTeams.map((team, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-bold text-gray-900 mb-3">{team.department}</h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail size={14} className="mr-2 flex-shrink-0" />
                        <span className="truncate">{team.email}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone size={14} className="mr-2 flex-shrink-0" />
                        <span>{team.phone}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock size={14} className="mr-2 flex-shrink-0" />
                        <span>{team.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <HelpCircle className="mr-3 text-bambe-600" size={24} />
                Questions Fréquentes
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      {expandedFaq === index ? (
                        <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-gray-600 whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-bambe-50 rounded-xl">
                <p className="text-gray-700 mb-4">
                  Vous n'avez pas trouvé la réponse à votre question ?
                </p>
                <button
                  onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-bambe-600 hover:text-bambe-700 font-medium"
                >
                  Contactez-nous directement →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Devenir Supporter */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rejoignez la Grande Famille des Supporters
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Soutenez activement l'AS Bambé et bénéficiez d'avantages exclusifs 
                en devenant membre officiel du club des supporters.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                  { title: "Places prioritaires", desc: "Accès avant-première aux billets" },
                  { title: "Rencontres exclusives", desc: "Événements avec les joueurs" },
                  { title: "Contenu VIP", desc: "Accès aux coulisses et interviews" }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-xl font-bold mb-2">{benefit.title}</div>
                    <div className="text-gray-300">{benefit.desc}</div>
                  </div>
                ))}
              </div>
              
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Devenir supporter officiel
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Réseaux Sociaux */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Suivez-nous sur les Réseaux
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Restez connectés avec l'AS Bambé en nous suivant sur nos réseaux sociaux 
              pour ne manquer aucune actualité, photo ou vidéo exclusive.
            </p>
            
            <div className="flex justify-center space-x-6">
              {[
                { icon: Facebook, label: "Facebook", color: "bg-blue-600 hover:bg-blue-700", followers: "12.4K" },
                { icon: Instagram, label: "Instagram", color: "bg-pink-600 hover:bg-pink-700", followers: "8.7K" },
                { icon: Twitter, label: "Twitter", color: "bg-blue-400 hover:bg-blue-500", followers: "6.2K" },
                { icon: Youtube, label: "YouTube", color: "bg-red-600 hover:bg-red-700", followers: "3.9K" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${social.color} text-white rounded-2xl p-6 text-center min-w-[180px] transition-transform hover:scale-105`}
                >
                  <social.icon size={32} className="mx-auto mb-4" />
                  <div className="font-bold text-lg">{social.label}</div>
                  <div className="text-sm opacity-90">{social.followers} followers</div>
                </a>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl max-w-2xl mx-auto">
              <p className="text-gray-700 mb-4">
                <span className="font-bold">Newsletter :</span> Recevez chaque semaine les meilleurs moments, 
                interviews et actualités directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bambe-500 focus:border-bambe-500"
                />
                <button className="bg-bambe-600 hover:bg-bambe-700 text-white font-bold px-6 py-3 rounded-lg">
                  S'abonner
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;