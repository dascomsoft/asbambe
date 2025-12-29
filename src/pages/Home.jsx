

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, TrendingUp, ArrowRight, Star, MapPin, Heart, Target, Zap, Shield, Award, Flame, Crown, Eye, TargetIcon } from 'lucide-react';

const Home = () => {

   useEffect(() =>{
    window.scrollTo(0,0)
   },[])
  // Données réelles et puissantes basées sur recherches 2025
  const highlights = [
    {
      icon: <Trophy className="text-yellow-500" size={32} />,
      title: "Représentation internationale",
      description: "Seule équipe tchadienne au tournoi FOU de FOOT 2024 au Cameroun",
      color: "from-yellow-50 to-yellow-100",
      stat: "100%",
      statLabel: "Fierté nationale",
      link: "/article/performance-historique"
    },
    {
      icon: <Users className="text-bambe-600" size={32} />,
      title: "Fierté de Moundou",
      description: "Club emblématique du Logone Occidental, basé au Stade Municipal",
      color: "from-blue-50 to-blue-100",
      stat: "10K+",
      statLabel: "Supporters passionnés",
      link: "/club"
    },
    {
      icon: <Target className="text-green-500" size={32} />,
      title: "Ancré dans le sud",
      description: "Représentant passionné du football tchadien méridional",
      color: "from-green-50 to-green-100",
      stat: "15+",
      statLabel: "Jeunes formés",
      link: "/article/progression-constante"
    },
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "Engagement communautaire",
      description: "Formation de jeunes talents et promotion du sport local",
      color: "from-red-50 to-red-100",
      stat: "7",
      statLabel: "Villes impactées",
      link: "/article/vision-2026"
    }
  ];

  // Section Nos Batailles - CONTENU CONCRET ET ACCROCHEUR
  const battles = [
    {
      id: 1,
      title: "Tournoi FOU de FOOT 2024",
      date: "Août 2024",
      location: "Garoua, Cameroun",
      result: "Performance historique",
      description: "Première équipe tchadienne à participer à ce prestigieux tournoi régional",
      highlights: [
        "Affrontement mémorable contre Gazelle FA",
        "Expérience internationale pour nos jeunes",
        "Visibilité accrue pour le football tchadien"
      ],
      image: "/equipe15.jpg",
      badge: "🌟 INTERNATIONAL",
      link: "/article/performance-historique"
    },
    {
      id: 2,
      title: "Saison 2024-2025 - Ligue Provinciale",
      date: "Octobre 2024 - Juin 2025",
      location: "Logone Occidental, Tchad",
      result: "Progression constante",
      description: "Une saison de développement et de consolidation face aux meilleurs clubs de la région",
      highlights: [
        "Confrontations contre Djarabé FC (champion)",
        "Matchs serrés contre Educat FC",
        "Progression visible de l'équipe"
      ],
      image: "/equipe16.jpg",
      badge: "⚔️ COMBATIVITÉ",
      link: "/article/progression-constante"
    },
    {
      id: 3,
      title: "Préparation saison 2026",
      date: "En cours",
      location: "Stade Municipal de Moundou",
      result: "Ambition maximale",
      description: "Entraînements intensifs et recrutement stratégique pour la prochaine saison",
      highlights: [
        "Renforcement de l'effectif",
        "Amélioration des installations",
        "Nouveaux partenariats en cours"
      ],
      image: "/equipe18.jpg",
      badge: "🚀 PROJET",
      link: "/article/ambition-maximale"
    }
  ];

  // Section Actualités améliorée
  const latestNews = [
    {
      id: 1,
      title: "AS Bambé brille au tournoi FOU de FOOT 2024 au Cameroun",
      date: "Août 2024",
      excerpt: "Unique représentant du Tchad, l'AS Bambé a marqué les esprits à Garoua face à Gazelle FA et d'autres clubs camerounais. Une expérience internationale inoubliable pour nos jeunes talents.",
      category: "International",
      image: "/equipe15.jpg",
      readTime: "3 min",
      highlight: true,
      link: "/article/performance-historique"
    },
    {
      id: 2,
      title: "Vision 2026 : Un nouveau chapitre pour l'AS Bambé",
      date: "Décembre 2025",
      excerpt: "Le club dévoile son ambitieux plan de développement sur 3 ans : formation des jeunes, modernisation des infrastructures et renforcement de l'équipe première.",
      category: "Stratégie",
      image: "/bambe5.jpeg",
      readTime: "4 min",
      highlight: true,
      link: "/article/vision-2026"
    },
    {
      id: 3,
      title: "Rangar Masra Abel : Le leader visionnaire",
      date: "2025",
      excerpt: "Portrait du président qui insuffle une nouvelle dynamique au club. Rencontre exclusive avec l'homme qui redéfinit l'avenir du football à Moundou.",
      category: "Portrait",
      image: "/president1.jpeg",
      readTime: "5 min",
      highlight: true,
      link: "/article/rangar-masra-abel"
    }
  ];

  const stats = [
    { number: "8", label: "Années d'existence", icon: <Calendar className="text-bambe-600" /> },
    { number: "45+", label: "Joueurs formés", icon: <Users className="text-green-600" /> },
    { number: "3", label: "Compétitions nationales", icon: <Trophy className="text-yellow-600" /> },
    { number: "1", label: "Représentation internationale", icon: <Star className="text-red-600" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Blue overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-700/80 to-blue-500/70 z-10" />

  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="/bambe11.webp"
      alt="AS Bambé de Moundou"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
  </div>

  <div className="relative z-20 container mx-auto px-4 text-center">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

      <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
        <img src="/bambelogo1.jpg" className="w-8 h-8 rounded-full" />
        <span className="text-white font-semibold">Club Officiel depuis 2023</span>
      </div>

      <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white mb-4">
        AS BAMBÉ
        <span className="block text-yellow-300 text-3xl md:text-5xl mt-2">
          MOUNDOU
        </span>
      </h1>

      <div className="h-1 w-28 mx-auto bg-gradient-to-r from-yellow-400 to-sky-500 rounded-full mb-8" />

      <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
        La fierté du football tchadien méridional
        <span className="block text-yellow-200 mt-2">
          Plus qu'un club, une légende en construction
        </span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/actualites"
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:to-yellow-700 text-gray-900 font-bold px-8 py-4 rounded-2xl shadow-xl"
        >
          Voir les actualités
        </Link>
        <Link
          to="/club"
          className="border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white/10"
        >
          Découvrir le club
        </Link>
      </div>

    </motion.div>
  </div>
</section>
      {/* Section Pourquoi AS Bambé ? */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-bambe-50 to-yellow-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-bambe-100">
              <Shield className="text-bambe-600" size={18} />
              <span className="text-bambe-700 font-semibold text-sm sm:text-base">LA RÉFÉRENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-bambe-600 via-yellow-500 to-bambe-600 bg-clip-text text-transparent">
                Pourquoi l'AS Bambé marque l'histoire ?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
              Nous ne jouons pas seulement au football. Nous écrivons une légende,
              nous formons des champions, nous construisons l'avenir du Tchad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {highlights.map((item, index) => (
              <Link to={item.link} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    boxShadow: "0 10px 40px rgba(0,0,0,0.15)"
                  }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${item.color} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 relative overflow-hidden group cursor-pointer`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full -translate-y-10 sm:-translate-y-12 md:-translate-y-16 translate-x-10 sm:translate-x-12 md:translate-x-16 group-hover:translate-x-4 sm:group-hover:translate-x-6 md:group-hover:translate-x-8 transition-transform duration-700" />

                  <div className="relative z-10">
                    <div className="mb-3 sm:mb-4 md:mb-6 transform group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500">
                      <div className="scale-75 sm:scale-90 md:scale-100">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">{item.stat}</div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        {item.statLabel}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight group-hover:text-bambe-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors mb-3 sm:mb-4 md:mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center text-bambe-600 font-medium text-sm sm:text-base">
                      <span className="group-hover:underline">En savoir plus</span>
                      <ArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Section Président - MISE EN VALEUR */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl lg:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-gray-200"
          >
            <div className="grid md:grid-cols-3 gap-0">
              {/* Photo du président en grand format */}
              <div className="relative h-60 sm:h-72 md:h-auto md:col-span-1">
                <img
                  src="/president1.jpeg"
                  alt="Rangar Masra Abel - Président de l'AS Bambé"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <Crown className="text-yellow-500" size={14} />
                    <span className="font-bold text-gray-800 text-xs sm:text-sm">PRÉSIDENT</span>
                  </div>
                </div>
              </div>
              
              {/* Contenu Président */}
              <div className="bg-gradient-to-br from-blue-950 via-blue-950 to-blue-950 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-white md:col-span-2">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-3 sm:border-4 border-yellow-300">
                    <img 
                      src="/president1.jpeg" 
                      alt="Rangar Masra Abel" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Rangar Masra Abel</h3>
                    <p className="text-yellow-300 font-medium text-sm sm:text-base">Président & Visionnaire</p>
                  </div>
                </div>

                <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 leading-relaxed italic">
                  "Mon ambition est de faire de l'AS Bambé une référence du football tchadien. 
                  Nous construisons plus qu'une équipe, nous bâtissons une institution."
                </blockquote>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <TargetIcon className="text-yellow-300 mt-0.5 sm:mt-1 flex-shrink-0" size={16} />
                    <p className="text-white/90 text-sm sm:text-base">Stratégie de développement 2024-2027 en cours</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Users className="text-yellow-300 mt-0.5 sm:mt-1 flex-shrink-0" size={16} />
                    <p className="text-white/90 text-sm sm:text-base">Focus sur la formation des jeunes talents locaux</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Eye className="text-yellow-300 mt-0.5 sm:mt-1 flex-shrink-0" size={16} />
                    <p className="text-white/90 text-sm sm:text-base">Ouverture vers des partenariats internationaux</p>
                  </div>
                </div>

                <Link
                  to="/article/rangar-masra-abel"
                  className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-all hover:scale-105"
                >
                  <span>Découvrir son parcours complet</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section NOS BATAILLES - COMPLÈTE ET ACCROCHEUSE */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-50 to-red-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
                <Flame className="text-red-500" size={20} />
                <span className="text-red-700 font-bold text-sm sm:text-base md:text-lg">CHRONIQUES DU TERRAIN</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-red-600 to-bambe-700 bg-clip-text text-transparent">
                  NOS ÉPOPÉES
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2">
                Retour sur les moments forts qui ont façonné l'histoire récente du club
              </p>
            </div>

            {/* Grille des batailles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {battles.map((battle, index) => (
                <motion.div
                  key={battle.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 border border-gray-200 group"
                >
                  {/* Image de la bataille */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={battle.image}
                      alt={battle.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800">
                        {battle.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <span className="text-white font-bold text-base sm:text-lg">{battle.title}</span>
                      <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                        <MapPin size={12} className="text-yellow-300" />
                        <span className="text-white/90 text-xs sm:text-sm">{battle.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contenu de la bataille */}
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <div>
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">{battle.result}</span>
                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">{battle.date}</p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {battle.description}
                    </p>

                    {/* Points forts */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {battle.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-bambe-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-gray-100">
                      <Link
                        to={battle.link}
                        className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-semibold text-xs sm:text-sm group/link"
                      >
                        <span className="relative">
                          Voir les détails complets
                          <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-0 group-hover/link:w-full h-0.5 bg-bambe-600 transition-all duration-300" />
                        </span>
                        <ArrowRight className="ml-1 sm:ml-2 group-hover/link:translate-x-1 transition-transform" size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Section supplémentaire - L'avenir */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-bambe-50 to-yellow-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12"
            >
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Et maintenant ?</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                    Forts de ces expériences, nous préparons activement la saison 2026 avec 
                    des objectifs ambitieux et une équipe renforcée.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-bambe-100 rounded-full flex items-center justify-center">
                        <Trophy className="text-bambe-600" size={12} />
                      </div>
                      <span className="font-medium text-sm sm:text-base">Objectif montée en division</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-bambe-100 rounded-full flex items-center justify-center">
                        <Users className="text-bambe-600" size={12} />
                      </div>
                      <span className="font-medium text-sm sm:text-base">Formation de 10 nouveaux jeunes talents</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-bambe-100 rounded-full flex items-center justify-center">
                        <Target className="text-bambe-600" size={12} />
                      </div>
                      <span className="font-medium text-sm sm:text-base">Participation à un tournoi international</span>
                    </div>
                  </div>
                </div>
                <div className="relative mt-4 md:mt-0">
                  <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
                    <img
                      src="/bambe6.jpeg"
                      alt="Préparation AS Bambé"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <p className="text-white font-bold text-base sm:text-lg md:text-xl">L'aventure continue...</p>
                      <p className="text-white/90 text-xs sm:text-sm">Préparation intensive au Stade Municipal</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Actualités améliorée */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0">
              <div>
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-3 sm:mb-4">
                  <TrendingUp className="text-blue-500" size={20} />
                  <span className="text-blue-700 font-bold text-sm sm:text-base md:text-lg">L'ACTUALITÉ VIVANTE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 flex items-center gap-2 sm:gap-3 md:gap-4">
                  <Target className="text-bambe-600" size={32} />
                  <span className="bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                    AU CŒUR DE L'ACTION
                  </span>
                </h2>
              </div>
              <Link
                to="/actualites"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg shadow-lg sm:shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto text-center"
              >
                <span className="relative">TOUTE L'ACTUALITÉ</span>
                <ArrowRight className="inline ml-1 sm:ml-2 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" size={16} />
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Actualité principale */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 border-2 border-yellow-200"
              >
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <img
                    src="/bambe1.jpeg"
                    alt="AS Bambé au Cameroun"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2">
                      <Star size={12} />
                      ACTUALITÉ PHARE
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-0">
                    <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-bambe-100 text-bambe-700 rounded-full text-xs sm:text-sm font-bold">
                      International
                    </span>
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                      <span className="text-xs sm:text-sm text-gray-500">⏱️ 12 min</span>
                      <span className="text-xs sm:text-sm text-gray-500">Août 2024</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
                    AS Bambé brille au tournoi FOU de FOOT 2024 au Cameroun
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    Unique représentant du Tchad, l'AS Bambé a marqué les esprits à Garoua face à Gazelle FA 
                    et d'autres clubs camerounais. Une expérience internationale inoubliable pour nos jeunes talents.
                  </p>

                  <Link
                    to="/article/performance-historique"
                    className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-bold text-sm sm:text-base md:text-lg group/link"
                  >
                    <span className="relative">
                      LIRE LE RÉCIT COMPLET
                      <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-0 group-hover/link:w-full h-0.5 bg-bambe-600 transition-all duration-300" />
                    </span>
                    <ArrowRight className="ml-2 sm:ml-3 group-hover/link:translate-x-2 transition-transform duration-300" size={16} />
                  </Link>
                </div>
              </motion.div>

              {/* Autres actualités */}
              <div className="space-y-6 sm:space-y-8">
                {latestNews.slice(1).map((news, i) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ scale: 1.01, y: -3 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 md:left-6 flex items-center gap-2 sm:gap-3 md:gap-4">
                        <span className="px-2 sm:px-3 py-1 bg-bambe-600 text-white rounded-full text-xs font-bold">
                          {news.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-1 sm:gap-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-bambe-600 transition-colors line-clamp-2">
                          {news.title}
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500">{news.date}</span>
                      </div>

                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                        {news.excerpt}
                      </p>

                      <Link
                        to={news.link}
                        className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-semibold text-xs sm:text-sm group/link2"
                      >
                        <span className="relative">
                          Lire l'article complet
                          <span className="absolute -bottom-0.5 left-0 w-0 group-hover/link2:w-full h-0.5 bg-bambe-600 transition-all duration-300" />
                        </span>
                        <ArrowRight className="ml-1 sm:ml-2 group-hover/link2:translate-x-0.5 sm:group-hover/link2:translate-x-1 transition-transform" size={12} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Galerie rapide */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-12 md:mt-16"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-2 sm:gap-0">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-2 sm:gap-3">
                  <Heart className="text-red-500" size={20} />
                  INSTANTS D'ÉTERNITÉ
                </h3>
                <span className="text-bambe-600 font-bold text-xs sm:text-sm bg-bambe-50 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                  50+ PHOTOS
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                {['/bambe7.jpeg', '/bambe8.jpeg', '/bambe9.jpeg', '/bambe5.jpeg'].map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="relative rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer h-32 sm:h-40 md:h-48"
                  >
                    <img
                      src={img}
                      alt={`AS Bambé moment ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Voir
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-sky-900 to-sky-900" />
        
        <div className="absolute inset-0">
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

        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3 }}
        >
          <img
            src="/bambe10jpeg"
            alt="AS Bambé supporters"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-yellow-500/20 to-bambe-600/20 backdrop-blur-xl rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/30"
            >
              <Trophy className="text-yellow-300" size={18} />
              <span className="text-yellow-300 font-bold text-sm sm:text-base md:text-lg lg:text-xl">REJOIGNEZ LA LÉGENDE</span>
              <Star className="text-yellow-300" size={18} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-none"
            >
              <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
                VOTRE HISTOIRE COMMENCE ICI
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto text-white/90 leading-relaxed"
            >
              Que vous soyez joueur, supporter, partenaire ou simplement passionné de football,
              votre place est avec nous dans cette aventure extraordinaire.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
            >
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 text-gray-900 font-bold px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-lg sm:rounded-xl md:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                  NOUS REJOINDRE <Users className="group-hover:scale-110 transition-transform" size={18} />
                </span>
              </Link>
              <Link
                to="/galerie"
                className="group relative border-2 border-white hover:bg-white/10 text-white font-bold px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-lg sm:rounded-xl md:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl backdrop-blur-xl transition-all hover:scale-105 overflow-hidden w-full sm:w-auto text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-bambe-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                  VIVRE L'EXPÉRIENCE <Eye className="group-hover:scale-110 transition-transform" size={18} />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 pt-6 sm:pt-8 md:pt-10 lg:pt-12 border-t border-white/20"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-xl">
                    <img
                      src="/bambelogo1.jpg"
                      alt="Logo AS Bambé"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1 sm:mb-2">AS BAMBÉ DE MOUNDOU</p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-300 mb-2 sm:mb-3 md:mb-4">L'ÉLAN VERT DU TCHAD MÉRIDIONAL</p>
                  <div className="flex flex-col xs:flex-row items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-white/80 text-xs sm:text-sm md:text-base">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <MapPin size={14} />
                      <span>Stade Municipal, Moundou</span>
                    </div>
                    <div className="hidden xs:block h-3 w-px bg-white/30" />
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Calendar size={14} />
                      <span>Fondé en Septembre 2023</span>
                    </div>
                    <div className="hidden xs:block h-3 w-px bg-white/30" />
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Heart size={14} />
                      <span>Communauté active</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 max-w-2xl sm:max-w-3xl mx-auto"
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-xl italic text-white/70">
                  "Le football est plus qu'un jeu. C'est une passion qui unit, une histoire qui se construit, 
                  une fierté qui grandit. Ensemble, écrivons le prochain chapitre."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;