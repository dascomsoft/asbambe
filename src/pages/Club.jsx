import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Users, Target, Heart, Award, Star, Flag, Building, ChevronRight, Shield, Zap, Globe, Home, TrendingUp, Layers, Users as UsersIcon, Target as TargetIcon, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Club = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Histoire du club - CORRIGÉ : Création en septembre 2023
  const history = [
    {
      year: "2023",
      title: "Naissance d'une Légende",
      description: "Création de l'AS Bambé en septembre 2023 par des visionnaires passionnés de Moundou.",
      icon: <Sparkles className="text-yellow-500" />,
      color: "from-yellow-50 to-yellow-100",
      border: "border-yellow-200"
    },
    {
      year: "2024",
      title: "Premiers Pas",
      description: "Première saison officielle et intégration dans le championnat régional.",
      icon: <Flag className="text-green-500" />,
      color: "from-green-50 to-green-100",
      border: "border-green-200"
    },
    {
      year: "2024",
      title: "L'Émergence",
      description: "Premiers succès en coupe régionale et structuration du club.",
      icon: <TrendingUp className="text-blue-500" />,
      color: "from-blue-50 to-blue-100",
      border: "border-blue-200"
    },
    {
      year: "2024",
      title: "La Consolidation",
      description: "Renforcement de l'effectif et amélioration des infrastructures.",
      icon: <Building className="text-purple-500" />,
      color: "from-purple-50 to-purple-100",
      border: "border-purple-200"
    },
    {
      year: "2024",
      title: "La Révélation",
      description: "Première finale de Coupe du Tchad, récompense d'un travail acharné.",
      icon: <Trophy className="text-bambe-600" />,
      color: "from-bambe-50 to-bambe-100",
      border: "border-bambe-200"
    },
    {
      year: "2024",
      title: "L'Explosion Internationale",
      description: "Participation au tournoi FOU de FOOT au Cameroun et projet Vision 2026.",
      icon: <Globe className="text-red-500" />,
      color: "from-red-50 to-red-100",
      border: "border-red-200"
    }
  ];

  // Palmarès - COULEURS AMÉLIORÉES (ajusté pour 2023-2024)
  const achievements = [
    {
      title: "Championnat National",
      icon: <Trophy className="text-yellow-600" />,
      items: [
        "Finaliste - Saison 2024",
        "3ème place - Tournoi d'ouverture 2024",
        "Montée rapide en compétitions"
      ],
      bgColor: "bg-gradient-to-br from-yellow-50 to-white",
      textColor: "text-gray-800",
      borderColor: "border-yellow-200",
      badgeColor: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Coupe du Tchad",
      icon: <Award className="text-blue-600" />,
      items: [
        "Finaliste - Édition 2024",
        "Performance remarquable dès la 1ère année",
        "Reconnaissance nationale"
      ],
      bgColor: "bg-gradient-to-br from-blue-50 to-white",
      textColor: "text-gray-800",
      borderColor: "border-blue-200",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Tournois Régionaux",
      icon: <Shield className="text-green-600" />,
      items: [
        "Vainqueur Tournoi de l'Amitié - 2024",
        "Finaliste Coupe du Logone - 2024",
        "Meilleur club débutant - 2024"
      ],
      bgColor: "bg-gradient-to-br from-green-50 to-white",
      textColor: "text-gray-800",
      borderColor: "border-green-200",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "Distinctions Individuelles",
      icon: <Star className="text-purple-600" />,
      items: [
        "Meilleur joueur - 2024",
        "Meilleur buteur - 2024",
        "Meilleur gardien - 2024",
        "Prix du fair-play - 2024"
      ],
      bgColor: "bg-gradient-to-br from-purple-50 to-white",
      textColor: "text-gray-800",
      borderColor: "border-purple-200",
      badgeColor: "bg-purple-100 text-purple-800"
    }
  ];

  // Valeurs du club - COULEURS AMÉLIORÉES
  const values = [
    {
      title: "Excellence Sportive",
      description: "Performance technique et tactique au plus haut niveau",
      icon: <Zap className="text-yellow-600" />,
      bgColor: "bg-gradient-to-br from-yellow-50 to-white",
      textColor: "text-gray-800",
      borderColor: "border-yellow-200",
      iconBg: "bg-yellow-100"
    },
    {
      title: "Formation des Jeunes",
      description: "Développement des talents locaux pour l'avenir national",
      icon: <Users className="text-blue-600" />,
      bgColor: "bg-gradient-to-br from-blue-50 to-white",
      textColor: "text-gray-800",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100"
    },
    {
      title: "Engagement Communautaire",
      description: "Le club, cœur battant de Moundou et du Logone",
      icon: <Heart className="text-red-600" />,
      bgColor: "bg-gradient-to-br from-red-50 to-white",
      textColor: "text-gray-800",
      borderColor: "border-red-200",
      iconBg: "bg-red-100"
    },
    {
      title: "Intégrité & Fair-play",
      description: "Respect des valeurs sportives et éthique exemplaire",
      icon: <Flag className="text-green-600" />,
      bgColor: "bg-gradient-to-br from-green-50 to-white",
      textColor: "text-gray-800",
      borderColor: "border-green-200",
      iconBg: "bg-green-100"
    }
  ];

  // Structure du club
  const structure = [
    { 
      role: "Président", 
      name: "M. Rangar Masra Abel",
      department: "Direction Générale",
      image: "/president1.jpeg"
    },
    { 
      role: "Directeur Sportif", 
      name: "M. Khalil Ibrahim",
      department: "Sportif & Technique",
      image: "/images/joueurs/coach.jpg"
    },
    { 
      role: "Trésorière", 
      name: "Mme. Fatimé Abderamane",
      department: "Finances & Budget",
      image: "/images/team/finance.jpg"
    },
    { 
      role: "Responsable Communication", 
      name: "M. Hassan Djibrine",
      department: "Médias & Relations",
      image: "/images/team/com.jpg"
    },
    { 
      role: "Coordinateur Jeunes", 
      name: "M. Idriss Ali",
      department: "Centre de Formation",
      image: "/images/team/formation.jpg"
    },
    { 
      role: "Directeur Commercial", 
      name: "M. Mahamat Saleh",
      department: "Sponsoring & Partenariats",
      image: "/images/team/commercial.jpg"
    }
  ];

  // Statistiques - CORRIGÉES pour septembre 2023 (moins d'1 an d'existence)
  const currentYear = new Date().getFullYear();
  const creationYear = 2023;
  const yearsSinceCreation = currentYear - creationYear;
  const monthsSinceCreation = Math.min((currentYear - creationYear) * 12, 12); // Maximum 12 mois

  const stats = [
    { 
      number: `${monthsSinceCreation}+`, 
      label: "Mois d'existence", 
      icon: <Calendar className="text-bambe-600" />, 
      color: "from-bambe-100 to-white", 
      textColor: "text-gray-800" 
    },
    { 
      number: "30+", 
      label: "Jeunes formés", 
      icon: <Users className="text-green-600" />, 
      color: "from-green-100 to-white", 
      textColor: "text-gray-800" 
    },
    { 
      number: "10K", 
      label: "Capacité stade", 
      icon: <Home className="text-yellow-600" />, 
      color: "from-yellow-100 to-white", 
      textColor: "text-gray-800" 
    },
    { 
      number: "12", 
      label: "Éducateurs diplômés", 
      icon: <Layers className="text-blue-600" />, 
      color: "from-blue-100 to-white", 
      textColor: "text-gray-800" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section - DATE CORRIGÉE */}

<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-[120px] pb-[120px]">
  {/* Background image avec overlay gradient */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url('/bambe9.jpeg')` }}
  >
    {/* Overlay gradient pour améliorer la lisibilité du texte */}
    <div className="absolute inset-0 bg-gradient-to-br from-sky-900/90 via-sky-700/80 to-sky-500/70 z-10" />
    
    {/* Effet de texture légère */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%),
                         radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15) 0%, transparent 50%)`
      }}></div>
    </div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/30 shadow-lg"
      >
        <Sparkles className="text-yellow-300" size={18} />
        <span className="text-white font-semibold text-sm sm:text-base">CRÉÉ EN SEPTEMBRE 2023</span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight text-center"
      >
        <span className="block">AS BAMBÉ</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="block text-yellow-300 mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        >
          L'ASCENSION FULGURANTE
        </motion.span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 font-medium leading-relaxed text-center px-4"
      >
        Depuis septembre 2023, nous écrivons une nouvelle histoire du football tchadien
        <span className="block mt-2 text-yellow-200/90 text-base sm:text-lg md:text-xl font-bold">
          Un début exceptionnel, une passion dévorante
        </span>
      </motion.p>

      {/* Stats Hero - Avec fond semi-transparent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto px-4"
      >
        {stats.map((stat, index) => (
          <div key={index} className={`bg-gradient-to-br ${stat.color} backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-white/30 shadow-xl`}>
            <div className="flex justify-center mb-1 sm:mb-2">
              <div className="scale-75 sm:scale-90">
                {stat.icon}
              </div>
            </div>
            <div className={`text-xl sm:text-2xl md:text-3xl font-bold ${stat.textColor} mb-0.5 sm:mb-1`}>{stat.number}</div>
            <div className="text-xs sm:text-sm text-gray-800 font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Navigation Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
      >
        <Link
          to="/article/vision-2026"
          className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto min-w-[180px] transform hover:scale-105"
        >
          <span>Notre Vision 2026</span>
          <Target className="group-hover:scale-110 transition-transform" size={18} />
        </Link>
        <Link
          to="/equipe"
          className="group border-2 border-white hover:bg-white/30 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg backdrop-blur-md transition-all w-full sm:w-auto min-w-[180px] transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <span>Découvrir l'Équipe</span>
          <Users className="group-hover:scale-110 transition-transform" size={18} />
        </Link>
      </motion.div>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20"
  >
    <div className="text-white/80 text-xs sm:text-sm flex flex-col items-center">
      <span className="mb-1 sm:mb-2 font-medium">Explorer</span>
      <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/70 rounded-full flex justify-center items-start pt-1 sm:pt-2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-2 sm:h-3 bg-white rounded-full"
        />
      </div>
    </div>
  </motion.div>
</section>

{/* Histoire Timeline - DATE CORRIGÉE */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-bambe-50 to-yellow-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-bambe-100">
              <Calendar className="text-bambe-600" size={18} />
              <span className="text-bambe-700 font-semibold text-sm sm:text-base">NOTRE ASCENSION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-bambe-600 via-yellow-500 to-bambe-600 bg-clip-text text-transparent">
                Une Ascension Exceptionnelle
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              En quelques mois seulement, une histoire déjà riche en succès
            </p>
          </motion.div>

          {/* Timeline Responsive */}
          <div className="relative max-w-6xl mx-auto">
            {/* Ligne centrale pour desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-bambe-500 via-bambe-400 to-bambe-300"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {history.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'} ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
                >
                  {/* Point sur la ligne (desktop seulement) */}
                  <div className="hidden lg:block absolute top-6 w-3 h-3 bg-bambe-600 rounded-full border-4 border-white shadow-lg"
                    style={{ 
                      left: index % 2 === 0 ? 'calc(100% - 6px)' : '-9px',
                      transform: 'translateX(-50%)' 
                    }}
                  />

                  {/* Carte d'histoire - COULEURS AMÉLIORÉES */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${item.border} overflow-hidden group`}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-8 translate-x-8 group-hover:translate-x-4 transition-transform duration-700" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md border border-gray-200">
                          <div className="scale-75 sm:scale-90">
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2 sm:gap-3">
                            <span className="text-2xl sm:text-3xl font-black text-gray-900">{item.year}</span>
                            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                              ANNÉE
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-1 sm:mt-2">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Version mobile simple */}
            <div className="lg:hidden mt-8 space-y-6">
              {history.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bambe-100 to-white flex items-center justify-center border border-bambe-200">
                      <div className="text-bambe-600 font-bold text-sm">{item.year}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className={`bg-gradient-to-br ${item.color} rounded-xl p-4 shadow-sm border ${item.border}`}>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Palmarès - COULEURS AMÉLIORÉES */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-yellow-200">
              <Trophy className="text-yellow-600" size={18} />
              <span className="text-yellow-700 font-semibold text-sm sm:text-base">NOTRE HÉRITAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-yellow-600 to-bambe-600 bg-clip-text text-transparent">
                Palmarès & Réalisations
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              En quelques mois seulement, un début exceptionnellement riche
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                className={`${category.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border ${category.borderColor} overflow-hidden group`}
              >
                {/* Badge supérieur */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200">
                      <div className="scale-75 sm:scale-90">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold ${category.badgeColor}`}>
                    {category.items.length} SUCCÈS
                  </span>
                </div>

                {/* Liste des réalisations */}
                <div className="space-y-2 sm:space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2 sm:gap-3 group/item">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-bambe-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Lien vers détails */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="flex items-center text-bambe-600 hover:text-bambe-700 font-medium text-xs sm:text-sm cursor-pointer">
                    <span>Voir tous les succès</span>
                    <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats complémentaires */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 md:mt-16"
          >
            <div className="bg-gradient-to-r from-bambe-50 to-yellow-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-bambe-200 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">En Chiffres (2023-2024)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { label: "Matchs joués", value: "40+", color: "text-bambe-700" },
                  { label: "Buts marqués", value: "85+", color: "text-green-700" },
                  { label: "Clean sheets", value: "15+", color: "text-blue-700" },
                  { label: "Supporters", value: "8,000+", color: "text-yellow-700" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-700">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valeurs du Club - COULEURS AMÉLIORÉES */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-blue-200">
              <Shield className="text-blue-600" size={18} />
              <span className="text-blue-700 font-semibold text-sm sm:text-base">NOTRE ADN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-bambe-700 bg-clip-text text-transparent">
                Nos Valeurs Fondamentales
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Les principes immuables qui guident chacune de nos actions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                viewport={{ once: true }}
                className={`${value.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border ${value.borderColor} overflow-hidden group`}
              >
                <div className="relative">
                  {/* Icône animée */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 rounded-2xl ${value.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500 border border-white`}>
                    <div className="scale-75 sm:scale-90">
                      {value.icon}
                    </div>
                  </div>

                  {/* Contenu */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
                    {value.description}
                  </p>

                  {/* Indicateur */}
                  <div className="mt-4 sm:mt-6 flex justify-center">
                    <div className="w-8 h-1 bg-gradient-to-r from-transparent via-bambe-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Citation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 md:mt-16"
          >
            <div className="bg-gradient-to-br from-blue-900/90 via-blue-700/80 to-blue-500/70 z-10 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-bambe-700 shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <QuoteIcon className="w-6 h-6 text-white" />
                </div>
                <blockquote className="text-lg sm:text-xl md:text-2xl font-bold italic mb-4 sm:mb-6 text-white">
                  "En seulement quelques mois, nous avons prouvé qu'avec la passion, le travail et la vision, 
                  on peut accomplir des miracles. L'AS Bambé n'est pas qu'un club, c'est une promesse d'avenir."
                </blockquote>
                <div className="text-yellow-300 font-bold">— Philosophie AS Bambé</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structure & Direction */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-purple-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-purple-200">
              <Users className="text-purple-600" size={18} />
              <span className="text-purple-700 font-semibold text-sm sm:text-base">NOTRE ÉQUIPE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-bambe-700 bg-clip-text text-transparent">
                Direction & Organisation
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Des leaders visionnaires au service du développement du club
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Liste des dirigeants */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {structure.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-bambe-200 bg-gradient-to-br from-bambe-100 to-white">
                        <div className="w-full h-full flex items-center justify-center">
                          <Users className="text-bambe-400" size={24} />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-bambe-600 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Informations */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">
                        {person.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs sm:text-sm font-medium text-bambe-600 bg-bambe-50 px-2 py-0.5 rounded">
                          {person.role}
                        </span>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="text-xs text-gray-600 truncate">
                          {person.department}
                        </span>
                      </div>
                    </div>

                    {/* Indicateur */}
                    <ChevronRight className="text-gray-400 group-hover:text-bambe-600 group-hover:translate-x-1 transition-all" size={16} />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Infrastructures */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Carte Stade */}
              <div className="bg-gradient-to-br from-bambe-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-bambe-200 overflow-hidden">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-bambe-500 to-bambe-600 flex items-center justify-center shadow-sm">
                    <Home className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Stade Municipal</h3>
                    <p className="text-sm text-gray-600">Le temple des Verts de Moundou</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    { label: "Capacité", value: "10,000 places", icon: "👥", color: "text-bambe-600" },
                    { label: "Surface", value: "Synthétique FIFA", icon: "⚽", color: "text-green-600" },
                    { label: "Éclairage", value: "Nocturne LED", icon: "💡", color: "text-yellow-600" },
                    { label: "Vestiaires", value: "Modernisés 2024", icon: "🚿", color: "text-blue-600" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-sm sm:text-base font-medium text-gray-700">{item.label}</span>
                      </div>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carte Centre Formation */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-green-200">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-sm">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Centre de Formation</h3>
                    <p className="text-sm text-gray-600">L'avenir du football tchadien</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { label: "Jeunes formés", value: "30+", color: "text-blue-700" },
                    { label: "Éducateurs", value: "12", color: "text-green-700" },
                    { label: "Terrains", value: "2", color: "text-yellow-700" },
                    { label: "Promotions", value: "1", color: "text-purple-700" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                      <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-700">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Future */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-sky-900 to-sky-900" />
        
        {/* Effets visuels */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-yellow-500/20 to-bambe-600/20 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/30"
            >
              <Target className="text-yellow-300" size={18} />
              <span className="text-yellow-300 font-bold text-sm sm:text-base md:text-lg">NOTRE VISION</span>
              <Globe className="text-yellow-300" size={18} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-none"
            >
              <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
                L'AVENIR S'ÉCRIT ICI
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed"
            >
              En seulement quelques mois, nous avons révolutionné le football tchadien. 
              Maintenant, nous visons l'excellence continentale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
            >
              {[
                { 
                  goal: "Championnat National", 
                  timeline: "2025",
                  description: "Objectif titre national",
                  color: "from-yellow-500/20 to-yellow-600/20"
                },
                { 
                  goal: "Participation Continentale", 
                  timeline: "2026",
                  description: "Compétitions CAF",
                  color: "from-blue-500/20 to-blue-600/20"
                },
                { 
                  goal: "Académie Internationale", 
                  timeline: "2027",
                  description: "Centre d'excellence",
                  color: "from-green-500/20 to-green-600/20"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${item.color} backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-lg`}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-2">{item.timeline}</div>
                  <div className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{item.goal}</div>
                  <div className="text-sm text-white/80">{item.description}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 sm:mt-10 md:mt-12"
            >
              <Link
                to="/article/vision-2026"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>Découvrir notre projet complet</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Composant Icône Quote
const QuoteIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 32 32">
    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4z" />
  </svg>
);

export default Club;