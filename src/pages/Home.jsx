// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Trophy, Users, Calendar, TrendingUp, ArrowRight, Star, Shield, Target } from 'lucide-react';

// const Home = () => {
//   // Données pour les sections
//   const features = [
//     {
//       icon: <Trophy className="text-yellow-500" size={32} />,
//       title: "Palmarès",
//       description: "Finaliste Coupe du Tchad 2022, 3ème Championnat National 2023",
//       color: "from-yellow-50 to-yellow-100"
//     },
//     {
//       icon: <Users className="text-blue-500" size={32} />,
//       title: "Centre de Formation",
//       description: "Formation des jeunes talents depuis 2005",
//       color: "from-blue-50 to-blue-100"
//     },
//     {
//       icon: <Shield className="text-green-500" size={32} />,
//       title: "Valeurs",
//       description: "Respect, Discipline, Excellence",
//       color: "from-green-50 to-green-100"
//     },
//     {
//       icon: <Target className="text-red-500" size={32} />,
//       title: "Ambitions",
//       description: "Championnat National 2024",
//       color: "from-red-50 to-red-100"
//     }
//   ];

//   const upcomingMatches = [
//     {
//       date: "15 Mars 2024",
//       time: "15:00",
//       competition: "Championnat National",
//       home: "AS Bambé",
//       away: "Foullah Edifice",
//       venue: "Stade Municipal, Moundou",
//       importance: "high"
//     },
//     {
//       date: "22 Mars 2024",
//       time: "16:30",
//       competition: "Coupe du Tchad",
//       home: "AS Bambé",
//       away: "Gazelle FC",
//       venue: "Stade Municipal, Moundou",
//       importance: "medium"
//     }
//   ];

//   const latestNews = [
//     {
//       id: 1,
//       title: "Victoire historique 3-0 contre l'AS CotonTchad",
//       date: "10 Mars 2024",
//       excerpt: "Les Verts de Moundou réalisent une performance exceptionnelle face au leader du championnat...",
//       category: "Match"
//     },
//     {
//       id: 2,
//       title: "Nouveau partenariat avec la Brasserie du Logone",
//       date: "5 Mars 2024",
//       excerpt: "Le club annonce un partenariat stratégique pour la saison 2024...",
//       category: "Club"
//     },
//     {
//       id: 3,
//       title: "Stage de pré-saison au Cameroun",
//       date: "28 Février 2024",
//       excerpt: "L'équipe s'est rendue au Cameroun pour un stage intensif de préparation...",
//       category: "Équipe"
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-bambe-900 via-bambe-700 to-bambe-800 text-white">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
//               <Star size={16} />
//               <span className="text-sm font-medium">Club Officiel depuis 1994</span>
//             </div>
            
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//               Bienvenue aux
//               <span className="block text-yellow-300 mt-2">Verts de Moundou</span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-bambe-100 mb-8 max-w-2xl mx-auto">
//               L'Association Sportive Bambé, fierté du Logone Occidental et ambassadeur du football tchadien
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/actualites"
//                 className="group bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
//               >
//                 Dernières Actualités
//                 <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
//               </Link>
//               <Link
//                 to="/club"
//                 className="group border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 backdrop-blur-sm"
//               >
//                 Découvrir le Club
//               </Link>
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Stats */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="container mx-auto px-4 pb-12 relative z-10"
//         >
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//             {[
//               { value: "30", label: "Ans d'histoire", suffix: "+" },
//               { value: "150", label: "Joueurs formés", suffix: "+" },
//               { value: "3", label: "Finales nationales" },
//               { value: "2024", label: "Saison en cours" }
//             ].map((stat, index) => (
//               <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
//                 <div className="text-3xl md:text-4xl font-bold text-yellow-300">{stat.value}{stat.suffix}</div>
//                 <div className="text-sm text-bambe-200 mt-2">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Pourquoi l'AS Bambé ?
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Un club ancré dans son territoire, tourné vers l'excellence et engagé pour le développement du football tchadien
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
//               >
//                 <div className="mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Matches & News Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Upcoming Matches */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//                   <Calendar className="inline mr-2 text-bambe-600" />
//                   Prochains Matchs
//                 </h2>
//                 <Link
//                   to="/resultats"
//                   className="text-bambe-600 hover:text-bambe-700 font-semibold flex items-center"
//                 >
//                   Voir tout
//                   <ArrowRight size={16} className="ml-1" />
//                 </Link>
//               </div>

//               <div className="space-y-4">
//                 {upcomingMatches.map((match, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-xl shadow-md p-6 border-l-4 border-bambe-500 hover:shadow-lg transition-shadow"
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <div>
//                         <span className="inline-block px-3 py-1 bg-bambe-100 text-bambe-700 rounded-full text-sm font-medium">
//                           {match.competition}
//                         </span>
//                         <div className="mt-2 text-sm text-gray-500">
//                           {match.date} • {match.time}
//                         </div>
//                       </div>
//                       {match.importance === 'high' && (
//                         <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
//                           Match important
//                         </span>
//                       )}
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <div className="text-center">
//                         <div className="text-lg font-bold">{match.home}</div>
//                         <div className="text-sm text-gray-500">Domicile</div>
//                       </div>
                      
//                       <div className="text-center px-6">
//                         <div className="text-2xl font-bold text-gray-900">VS</div>
//                         <div className="text-sm text-gray-500 mt-1">{match.venue}</div>
//                       </div>
                      
//                       <div className="text-center">
//                         <div className="text-lg font-bold">{match.away}</div>
//                         <div className="text-sm text-gray-500">Extérieur</div>
//                       </div>
//                     </div>
                    
//                     <button className="w-full mt-4 bg-bambe-50 hover:bg-bambe-100 text-bambe-700 font-medium py-2 rounded-lg transition-colors">
//                       Infos billetterie
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Latest News */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//                   <TrendingUp className="inline mr-2 text-bambe-600" />
//                   Dernières Actualités
//                 </h2>
//                 <Link
//                   to="/actualites"
//                   className="text-bambe-600 hover:text-bambe-700 font-semibold flex items-center"
//                 >
//                   Voir tout
//                   <ArrowRight size={16} className="ml-1" />
//                 </Link>
//               </div>

//               <div className="space-y-6">
//                 {latestNews.map((news, index) => (
//                   <motion.div
//                     key={news.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ scale: 1.02 }}
//                     className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
//                   >
//                     <div className="p-6">
//                       <div className="flex justify-between items-start mb-3">
//                         <span className="px-3 py-1 bg-bambe-100 text-bambe-700 rounded-full text-sm font-medium">
//                           {news.category}
//                         </span>
//                         <span className="text-sm text-gray-500">{news.date}</span>
//                       </div>
                      
//                       <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bambe-600 transition-colors">
//                         {news.title}
//                       </h3>
                      
//                       <p className="text-gray-600 mb-4">
//                         {news.excerpt}
//                       </p>
                      
//                       <Link
//                         to={`/actualites/${news.id}`}
//                         className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-medium"
//                       >
//                         Lire l'article complet
//                         <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action - Supporters */}
//       <section className="py-20 bg-gradient-to-r from-bambe-800 to-bambe-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="max-w-3xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Rejoignez la Grande Famille des Verts
//             </h2>
            
//             <p className="text-xl text-bambe-100 mb-8">
//               Devenez supporter officiel, participez aux événements du club et soutenez l'équipe au stade
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/contact"
//                 className="bg-white text-bambe-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Devenir Supporter
//               </Link>
//               <Link
//                 to="/galerie"
//                 className="border-2 border-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300"
//               >
//                 Voir la Galerie
//               </Link>
//             </div>
            
//             <div className="mt-8 flex flex-wrap justify-center gap-6">
//               {['Matchs à domicile', 'Événements VIP', 'Rencontres joueurs', 'Visites stade'].map((item, index) => (
//                 <div key={index} className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;











































import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, TrendingUp, ArrowRight, Star, MapPin, Heart } from 'lucide-react';

const Home = () => {
  // Données réelles et puissantes basées sur recherches 2025
  const highlights = [
    {
      icon: <Trophy className="text-yellow-500" size={32} />,
      title: "Représentation internationale",
      description: "Seule équipe tchadienne au tournoi FOU de FOOT 2024 au Cameroun",
      color: "from-yellow-50 to-yellow-100"
    },
    {
      icon: <Users className="text-bambe-600" size={32} />,
      title: "Fierté de Moundou",
      description: "Club emblématique du Logone Occidental, basé au Stade Municipal",
      color: "from-blue-50 to-blue-100"
    },
    {
      icon: <MapPin className="text-green-500" size={32} />,
      title: "Ancré dans le sud",
      description: "Représentant passionné du football tchadien méridional",
      color: "from-green-50 to-green-100"
    },
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "Engagement communautaire",
      description: "Formation de jeunes talents et promotion du sport local",
      color: "from-red-50 to-red-100"
    }
  ];

  const upcomingMatches = [
    {
      date: "Janvier 2026",
      competition: "Ligue Provinciale Logone Occidental",
      home: "AS Bambé",
      away: "À confirmer",
      venue: "Stade Municipal de Moundou",
      note: "Préparation saison 2026 en cours"
    },
    {
      date: "Février 2026",
      competition: "Match amical",
      home: "AS Bambé",
      away: "Club invité (Cameroun ou Tchad)",
      venue: "Stade Municipal de Moundou",
      note: "Renforcement des liens régionaux"
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: "AS Bambé brille au tournoi FOU de FOOT 2024 au Cameroun",
      date: "Août 2024",
      excerpt: "Unique représentant du Tchad, l'AS Bambé a marqué les esprits à Garoua face à Gazelle FA et d'autres clubs camerounais. Une expérience internationale inoubliable pour nos jeunes talents.",
      category: "International",
      image: "/bambe1.jpeg"  // Utilisation de tes vraies images
    },
    {
      id: 2,
      title: "Fin de saison 2024-2025 : Retour sur une année combative",
      date: "Juin 2025",
      excerpt: "Malgré une saison difficile en Ligue provinciale, AS Bambé a montré du caractère face à Djarabé FC (champion), Educat FC et USM. Objectif 2026 : consolidation et progression.",
      category: "Bilan",
      image: "/bambe2.jpeg"  // Utilisation de tes vraies images
    },
    {
      id: 3,
      title: "Rangar Masra Abel : Un président engagé pour l'avenir du club",
      date: "2025",
      excerpt: "Le président continue de développer des partenariats locaux et internationaux pour renforcer l'AS Bambé et promouvoir le football à Moundou.",
      category: "Club",
      image: "/bambe3.jpeg"  // Utilisation de tes vraies images
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Utilise tes images réelles */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Fond avec image réelle */}
        <div className="absolute inset-0">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-bambe-900/90 via-bambe-700/70 to-bambe-600/50 z-10" />
          
          {/* Image de fond - Utilisation de tes vraies photos */}
          <img
            src="/bambe11.webp" // Ta meilleure photo d'équipe ou stade
            alt="AS Bambé de Moundou - Équipe et supporters"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto"
        >
          {/* Logo AS Bambé */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-6">
              <img 
                src="/bambelogo1.jpg" 
                alt="Logo AS Bambé" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-lg font-bold">Club officiel depuis les années 2017</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            AS Bambé
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="block text-yellow-300 mt-2 text-4xl md:text-6xl lg:text-7xl font-black"
            >
              Moundou
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-white/90 font-medium"
          >
            La passion du football au cœur du Logone Occidental
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/actualites"
              className="group bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-10 py-5 rounded-xl text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105"
            >
              Actualités récentes
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
            <Link
              to="/club"
              className="border-2 border-white hover:bg-white/10 text-white font-bold px-10 py-5 rounded-xl text-lg backdrop-blur-sm transition-all transform hover:scale-105"
            >
              Découvrir le club
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="text-white text-sm animate-bounce">
            <ArrowRight className="rotate-90 mx-auto" size={24} />
          </div>
        </motion.div>
      </section>

      {/* Highlights - Pourquoi AS Bambé ? */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AS Bambé : Plus qu'un club, une passion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Représentant fier de Moundou et du sud du Tchad, engagé pour le développement du football local
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50`}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Photo réelle de l'équipe */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/bambe5.jpeg" // Photo d'équipe réelle
              alt="Équipe AS Bambé de Moundou"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="bg-gradient-to-r from-bambe-800 to-bambe-600 p-8 text-white">
              <p className="text-xl md:text-2xl font-bold text-center">
                "La fierté du Logone Occidental depuis les années 2000"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prochains matchs & Actualités */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Prochains matchs */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-gray-900">
                  <Calendar className="text-bambe-600" size={36} />
                  À venir
                </h2>
                <Link to="/resultats" className="text-bambe-600 hover:text-bambe-700 font-semibold flex items-center gap-2">
                  Voir tout <ArrowRight size={18} />
                </Link>
              </div>

              <div className="space-y-6">
                {upcomingMatches.map((match, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:border-bambe-500/50 transition-all hover:shadow-xl"
                  >
                    <span className="inline-block px-4 py-2 bg-bambe-100 text-bambe-700 rounded-full text-sm font-medium mb-4">
                      {match.competition}
                    </span>
                    <p className="text-2xl font-bold mb-2 text-gray-900">{match.home} vs {match.away}</p>
                    <p className="text-gray-600 mb-4">{match.date} • {match.venue}</p>
                    <p className="text-sm italic text-gray-500">{match.note}</p>
                  </div>
                ))}
              </div>

              {/* Photo de stade */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="/bambe6.jpeg" // Photo de stade
                  alt="Stade Municipal de Moundou"
                  className="w-full h-48 object-cover"
                />
                <div className="bg-gray-100 p-4">
                  <p className="text-gray-700 font-medium">Stade Municipal de Moundou</p>
                  <p className="text-sm text-gray-500">Terrain d'accueil de l'AS Bambé</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Dernières actualités */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-gray-900">
                  <TrendingUp className="text-bambe-600" size={36} />
                  Actualités
                </h2>
                <Link to="/actualites" className="text-bambe-600 hover:text-bambe-700 font-semibold flex items-center gap-2">
                  Voir tout <ArrowRight size={18} />
                </Link>
              </div>

              <div className="space-y-8">
                {latestNews.map((news, i) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  >
                    {news.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={news.image} 
                          alt={news.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex justify-between items-center mb-4">
                        <span className="px-4 py-2 bg-bambe-100 text-bambe-700 rounded-full text-sm font-semibold">
                          {news.category}
                        </span>
                        <span className="text-sm text-gray-500">{news.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-bambe-600 transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{news.excerpt}</p>
                      <Link
                        to={`/actualites/${news.id}`}
                        className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-semibold"
                      >
                        Lire plus <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Galerie photo rapide */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Galerie rapide</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg overflow-hidden">
                    <img src="/bambe7.jpeg" alt="AS Bambé action 1" className="w-full h-24 object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img src="/bambe8.jpeg" alt="AS Bambé action 2" className="w-full h-24 object-cover" />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img src="/bambe9.jpeg" alt="AS Bambé action 3" className="w-full h-24 object-cover" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-24 bg-gradient-to-r from-bambe-800 to-bambe-600 text-white relative overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/bambe10jpeg" 
            alt="AS Bambé supporters" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Soutenez les Verts de Moundou
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90">
            Rejoignez la communauté AS Bambé : venez au stade, suivez les matchs, partagez la passion du football tchadien
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/contact"
              className="bg-white text-bambe-700 hover:bg-gray-100 font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl transition-all hover:scale-105"
            >
              Nous contacter
            </Link>
            <Link
              to="/galerie"
              className="border-4 border-white hover:bg-white/10 font-bold px-12 py-6 rounded-2xl text-xl backdrop-blur-sm transition-all hover:scale-105"
            >
              Voir la galerie photos
            </Link>
          </div>
          
          {/* Logo et info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <div className="w-24 h-24 bg-white rounded-full p-4 shadow-2xl">
              <img 
                src="/bambelogo1.jpg" 
                alt="Logo AS Bambé" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold">AS Bambé de Moundou</p>
              <p className="text-gray-200">Club de football - Logone Occidental, Tchad</p>
              <p className="text-gray-300">Fondé dans les années 2017</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;


























