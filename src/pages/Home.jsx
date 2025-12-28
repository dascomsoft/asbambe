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
















































































// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Trophy, Users, Calendar, TrendingUp, ArrowRight, Star, MapPin, Heart } from 'lucide-react';

// const Home = () => {
//   // Données réelles et puissantes basées sur recherches 2025
//   const highlights = [
//     {
//       icon: <Trophy className="text-yellow-500" size={32} />,
//       title: "Représentation internationale",
//       description: "Seule équipe tchadienne au tournoi FOU de FOOT 2024 au Cameroun",
//       color: "from-yellow-50 to-yellow-100"
//     },
//     {
//       icon: <Users className="text-bambe-600" size={32} />,
//       title: "Fierté de Moundou",
//       description: "Club emblématique du Logone Occidental, basé au Stade Municipal",
//       color: "from-blue-50 to-blue-100"
//     },
//     {
//       icon: <MapPin className="text-green-500" size={32} />,
//       title: "Ancré dans le sud",
//       description: "Représentant passionné du football tchadien méridional",
//       color: "from-green-50 to-green-100"
//     },
//     {
//       icon: <Heart className="text-red-500" size={32} />,
//       title: "Engagement communautaire",
//       description: "Formation de jeunes talents et promotion du sport local",
//       color: "from-red-50 to-red-100"
//     }
//   ];

//   const upcomingMatches = [
//     {
//       date: "Janvier 2026",
//       competition: "Ligue Provinciale Logone Occidental",
//       home: "AS Bambé",
//       away: "À confirmer",
//       venue: "Stade Municipal de Moundou",
//       note: "Préparation saison 2026 en cours"
//     },
//     {
//       date: "Février 2026",
//       competition: "Match amical",
//       home: "AS Bambé",
//       away: "Club invité (Cameroun ou Tchad)",
//       venue: "Stade Municipal de Moundou",
//       note: "Renforcement des liens régionaux"
//     }
//   ];

//   const latestNews = [
//     {
//       id: 1,
//       title: "AS Bambé brille au tournoi FOU de FOOT 2024 au Cameroun",
//       date: "Août 2024",
//       excerpt: "Unique représentant du Tchad, l'AS Bambé a marqué les esprits à Garoua face à Gazelle FA et d'autres clubs camerounais. Une expérience internationale inoubliable pour nos jeunes talents.",
//       category: "International",
//       image: "/bambe1.jpeg"  // Utilisation de tes vraies images
//     },
//     {
//       id: 2,
//       title: "Fin de saison 2024-2025 : Retour sur une année combative",
//       date: "Juin 2025",
//       excerpt: "Malgré une saison difficile en Ligue provinciale, AS Bambé a montré du caractère face à Djarabé FC (champion), Educat FC et USM. Objectif 2026 : consolidation et progression.",
//       category: "Bilan",
//       image: "/bambe2.jpeg"  // Utilisation de tes vraies images
//     },
//     {
//       id: 3,
//       title: "Rangar Masra Abel : Un président engagé pour l'avenir du club",
//       date: "2025",
//       excerpt: "Le président continue de développer des partenariats locaux et internationaux pour renforcer l'AS Bambé et promouvoir le football à Moundou.",
//       category: "Club",
//       image: "/bambe3.jpeg"  // Utilisation de tes vraies images
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section - Utilise tes images réelles */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Fond avec image réelle */}
//         <div className="absolute inset-0">
//           {/* Overlay gradient */}
//           <div className="absolute inset-0 bg-gradient-to-br from-bambe-900/90 via-bambe-700/70 to-bambe-600/50 z-10" />

//           {/* Image de fond - Utilisation de tes vraies photos */}
//           <img
//             src="/bambe11.webp" // Ta meilleure photo d'équipe ou stade
//             alt="AS Bambé de Moundou - Équipe et supporters"
//             className="w-full h-full object-cover"
//             loading="eager"
//           />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto"
//         >
//           {/* Logo AS Bambé */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             className="mb-8"
//           >
//             <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-6">
//               <img
//                 src="/bambelogo1.jpg"
//                 alt="Logo AS Bambé"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <span className="text-lg font-bold">Club officiel depuis les années 2017</span>
//             </div>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
//           >
//             AS Bambé
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="block text-yellow-300 mt-2 text-4xl md:text-6xl lg:text-7xl font-black"
//             >
//               Moundou
//             </motion.span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-white/90 font-medium"
//           >
//             La passion du football au cœur du Logone Occidental
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1 }}
//             className="flex flex-col sm:flex-row gap-6 justify-center"
//           >
//             <Link
//               to="/actualites"
//               className="group bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-10 py-5 rounded-xl text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105"
//             >
//               Actualités récentes
//               <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
//             </Link>
//             <Link
//               to="/club"
//               className="border-2 border-white hover:bg-white/10 text-white font-bold px-10 py-5 rounded-xl text-lg backdrop-blur-sm transition-all transform hover:scale-105"
//             >
//               Découvrir le club
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <div className="text-white text-sm animate-bounce">
//             <ArrowRight className="rotate-90 mx-auto" size={24} />
//           </div>
//         </motion.div>
//       </section>

//       {/* Highlights - Pourquoi AS Bambé ? */}
//       <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               AS Bambé : Plus qu'un club, une passion
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Représentant fier de Moundou et du sud du Tchad, engagé pour le développement du football local
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {highlights.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.15 }}
//                 whileHover={{ y: -10, scale: 1.03 }}
//                 viewport={{ once: true }}
//                 className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50`}
//               >
//                 <div className="mb-6">{item.icon}</div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Photo réelle de l'équipe */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-20 rounded-3xl overflow-hidden shadow-2xl"
//           >
//             <img
//               src="/bambe5.jpeg" // Photo d'équipe réelle
//               alt="Équipe AS Bambé de Moundou"
//               className="w-full h-64 md:h-80 object-cover"
//             />
//             <div className="bg-gradient-to-r from-bambe-800 to-bambe-600 p-8 text-white">
//               <p className="text-xl md:text-2xl font-bold text-center">
//                 "La fierté du Logone Occidental depuis les années 2000"
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Prochains matchs & Actualités */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Prochains matchs */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-gray-900">
//                   <Calendar className="text-bambe-600" size={36} />
//                   À venir
//                 </h2>
//                 <Link to="/presidentbio" className="text-bambe-600 hover:text-bambe-700 font-semibold flex items-center gap-2">
//                   Voir tout <ArrowRight size={18} />
//                 </Link>
//               </div>

//               <div className="space-y-6">
//                 {upcomingMatches.map((match, i) => (
//                   <div
//                     key={i}
//                     className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:border-bambe-500/50 transition-all hover:shadow-xl"
//                   >
//                     <span className="inline-block px-4 py-2 bg-bambe-100 text-bambe-700 rounded-full text-sm font-medium mb-4">
//                       {match.competition}
//                     </span>
//                     <p className="text-2xl font-bold mb-2 text-gray-900">{match.home} vs {match.away}</p>
//                     <p className="text-gray-600 mb-4">{match.date} • {match.venue}</p>
//                     <p className="text-sm italic text-gray-500">{match.note}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Photo de stade */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="mt-8 rounded-2xl overflow-hidden shadow-lg"
//               >
//                 <img
//                   src="/bambe6.jpeg" // Photo de stade
//                   alt="Stade Municipal de Moundou"
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="bg-gray-100 p-4">
//                   <p className="text-gray-700 font-medium">Stade Municipal de Moundou</p>
//                   <p className="text-sm text-gray-500">Terrain d'accueil de l'AS Bambé</p>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Dernières actualités */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-gray-900">
//                   <TrendingUp className="text-bambe-600" size={36} />
//                   Actualités
//                 </h2>
//                 <Link to="/actualites" className="text-bambe-600 hover:text-bambe-700 font-semibold flex items-center gap-2">
//                   Voir tout <ArrowRight size={18} />
//                 </Link>
//               </div>

//               <div className="space-y-8">
//                 {latestNews.map((news, i) => (
//                   <motion.div
//                     key={news.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     whileHover={{ scale: 1.02 }}
//                     viewport={{ once: true }}
//                     className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
//                   >
//                     {news.image && (
//                       <div className="h-48 overflow-hidden">
//                         <img
//                           src={news.image}
//                           alt={news.title}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                       </div>
//                     )}
//                     <div className="p-8">
//                       <div className="flex justify-between items-center mb-4">
//                         <span className="px-4 py-2 bg-bambe-100 text-bambe-700 rounded-full text-sm font-semibold">
//                           {news.category}
//                         </span>
//                         <span className="text-sm text-gray-500">{news.date}</span>
//                       </div>
//                       <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-bambe-600 transition-colors">
//                         {news.title}
//                       </h3>
//                       <p className="text-gray-600 mb-6 leading-relaxed">{news.excerpt}</p>
//                       <Link
//                         to='/presidentbio'
//                         className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-semibold"
//                       >
//                         Lire plus <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Galerie photo rapide */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="mt-8"
//               >
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Galerie rapide</h3>
//                 <div className="grid grid-cols-3 gap-2">
//                   <div className="rounded-lg overflow-hidden">
//                     <img src="/bambe7.jpeg" alt="AS Bambé action 1" className="w-full h-24 object-cover" />
//                   </div>
//                   <div className="rounded-lg overflow-hidden">
//                     <img src="/bambe8.jpeg" alt="AS Bambé action 2" className="w-full h-24 object-cover" />
//                   </div>
//                   <div className="rounded-lg overflow-hidden">
//                     <img src="/bambe9.jpeg" alt="AS Bambé action 3" className="w-full h-24 object-cover" />
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Final */}
//       <section className="py-24 bg-gradient-to-r from-bambe-800 to-bambe-600 text-white relative overflow-hidden">
//         {/* Image de fond */}
//         <div className="absolute inset-0 opacity-20">
//           <img
//             src="/bambe10jpeg"
//             alt="AS Bambé supporters"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="container mx-auto px-6 text-center relative z-10"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold mb-8">
//             Soutenez les Verts de Moundou
//           </h2>
//           <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90">
//             Rejoignez la communauté AS Bambé : venez au stade, suivez les matchs, partagez la passion du football tchadien
//           </p>

//           <div className="flex flex-col sm:flex-row gap-8 justify-center">
//             <Link
//               to="/contact"
//               className="bg-white text-bambe-700 hover:bg-gray-100 font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl transition-all hover:scale-105"
//             >
//               Nous contacter
//             </Link>
//             <Link
//               to="/galerie"
//               className="border-4 border-white hover:bg-white/10 font-bold px-12 py-6 rounded-2xl text-xl backdrop-blur-sm transition-all hover:scale-105"
//             >
//               Voir la galerie photos
//             </Link>
//           </div>

//           {/* Logo et info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"
//           >
//             <div className="w-24 h-24 bg-white rounded-full p-4 shadow-2xl">
//               <img
//                 src="/bambelogo1.jpg"
//                 alt="Logo AS Bambé"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <div className="text-left">
//               <p className="text-2xl font-bold">AS Bambé de Moundou</p>
//               <p className="text-gray-200">Club de football - Logone Occidental, Tchad</p>
//               <p className="text-gray-300">Fondé dans les années 2017</p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Home;






























































































































// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Trophy, Users, Calendar, TrendingUp, ArrowRight, Star, MapPin, Heart, Target, Zap, Shield, Award, Flame } from 'lucide-react';

// const Home = () => {
//   // Données réelles et puissantes basées sur recherches 2025
//   const highlights = [
//     {
//       icon: <Trophy className="text-yellow-500" size={32} />,
//       title: "Représentation internationale",
//       description: "Seule équipe tchadienne au tournoi FOU de FOOT 2024 au Cameroun",
//       color: "from-yellow-50 to-yellow-100",
//       stat: "100%",
//       statLabel: "Fierté nationale"
//     },
//     {
//       icon: <Users className="text-bambe-600" size={32} />,
//       title: "Fierté de Moundou",
//       description: "Club emblématique du Logone Occidental, basé au Stade Municipal",
//       color: "from-blue-50 to-blue-100",
//       stat: "10K+",
//       statLabel: "Supporters passionnés"
//     },
//     {
//       icon: <Target className="text-green-500" size={32} />,
//       title: "Ancré dans le sud",
//       description: "Représentant passionné du football tchadien méridional",
//       color: "from-green-50 to-green-100",
//       stat: "15+",
//       statLabel: "Jeunes formés"
//     },
//     {
//       icon: <Heart className="text-red-500" size={32} />,
//       title: "Engagement communautaire",
//       description: "Formation de jeunes talents et promotion du sport local",
//       color: "from-red-50 to-red-100",
//       stat: "7",
//       statLabel: "Villes impactées"
//     }
//   ];

//   const upcomingMatches = [
//     {
//       date: "Janvier 2026",
//       competition: "Ligue Provinciale Logone Occidental",
//       home: "AS Bambé",
//       away: "À confirmer",
//       venue: "Stade Municipal de Moundou",
//       note: "Préparation saison 2026 en cours",
//       status: "À venir",
//       badge: "🔥 HOT"
//     },
//     {
//       date: "Février 2026",
//       competition: "Match amical international",
//       home: "AS Bambé",
//       away: "Club invité (Cameroun)",
//       venue: "Stade Municipal de Moundou",
//       note: "Renforcement des liens régionaux",
//       status: "Confirmé",
//       badge: "⭐ ÉVÉNEMENT"
//     }
//   ];

//   const latestNews = [
//     {
//       id: 1,
//       title: "AS Bambé brille au tournoi FOU de FOOT 2024 au Cameroun",
//       date: "Août 2024",
//       excerpt: "Unique représentant du Tchad, l'AS Bambé a marqué les esprits à Garoua face à Gazelle FA et d'autres clubs camerounais. Une expérience internationale inoubliable pour nos jeunes talents.",
//       category: "International",
//       image: "/bambe1.jpeg",
//       readTime: "3 min",
//       highlight: true
//     },
//     {
//       id: 2,
//       title: "Fin de saison 2024-2025 : Retour sur une année combative",
//       date: "Juin 2025",
//       excerpt: "Malgré une saison difficile en Ligue provinciale, AS Bambé a montré du caractère face à Djarabé FC (champion), Educat FC et USM. Objectif 2026 : consolidation et progression.",
//       category: "Bilan",
//       image: "/bambe2.jpeg",
//       readTime: "4 min",
//       highlight: false
//     },
//     {
//       id: 3,
//       title: "Rangar Masra Abel : Un président engagé pour l'avenir du club",
//       date: "2025",
//       excerpt: "Le président continue de développer des partenariats locaux et internationaux pour renforcer l'AS Bambé et promouvoir le football à Moundou.",
//       category: "Club",
//       image: "/bambe3.jpeg",
//       readTime: "5 min",
//       highlight: true
//     }
//   ];

//   const stats = [
//     { number: "8", label: "Années d'existence", icon: <Calendar className="text-bambe-600" /> },
//     { number: "45+", label: "Joueurs formés", icon: <Users className="text-green-600" /> },
//     { number: "3", label: "Compétitions nationales", icon: <Trophy className="text-yellow-600" /> },
//     { number: "1", label: "Représentation internationale", icon: <Star className="text-red-600" /> }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
//       {/* Hero Section - Version améliorée et fonctionnelle */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Gradient overlay de base */}
//         <div className="absolute inset-0 bg-gradient-to-br from-bambe-900/90 via-bambe-700/80 to-bambe-600/70 z-10" />

//         {/* Image de fond optimisée */}
//         <div className="absolute inset-0">
//           <img
//             src="/bambe11.webp"
//             alt="AS Bambé de Moundou - Équipe et supporters"
//             className="w-full h-full object-cover"
//             loading="eager"
//           />
//           {/* Overlay supplémentaire pour améliorer la lisibilité */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />
//         </div>

//         {/* Contenu principal - Centré et responsive */}
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center"
//             >
//               {/* Badge élégant */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20"
//               >
//                 <img
//                   src="/bambelogo1.jpg"
//                   alt="Logo AS Bambé"
//                   className="w-8 h-8 rounded-full object-cover"
//                 />
//                 <span className="text-white font-semibold text-sm sm:text-base">Club Officiel depuis 2017</span>
//               </motion.div>

//               {/* Titre principal */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight"
//               >
//                 <span className="block">AS BAMBÉ</span>
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   className="block text-yellow-300 mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
//                 >
//                   MOUNDOU
//                 </motion.span>
//               </motion.h1>

//               {/* Ligne décorative */}
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "120px" }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//                 className="h-1 bg-gradient-to-r from-yellow-400 to-bambe-500 mx-auto mb-6 sm:mb-8 rounded-full"
//               />

//               {/* Slogan */}
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 font-medium leading-relaxed"
//               >
//                 La fierté du football tchadien méridional
//                 <span className="block mt-2 text-base sm:text-lg text-yellow-200/90">
//                   Plus qu'un club, une légende en construction
//                 </span>
//               </motion.p>

//               {/* Boutons CTA */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//               >
//                 <Link
//                   to="/actualites"
//                   className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold px-8 py-4 rounded-xl sm:rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px] transform hover:scale-105"
//                 >
//                   <span>Voir les actualités</span>
//                   <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//                 </Link>
//                 <Link
//                   to="/club"
//                   className="group border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl sm:rounded-2xl text-lg backdrop-blur-sm transition-all w-full sm:w-auto min-w-[200px] transform hover:scale-105"
//                 >
//                   <span>Découvrir le club</span>
//                 </Link>
//               </motion.div>
//             </motion.div>

//             {/* Statistiques en bas du hero */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2 }}
//               className="mt-12 sm:mt-16 lg:mt-20 px-4"
//             >
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
//                 {stats.map((stat, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 1.4 + index * 0.1 }}
//                     className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-center border border-white/20"
//                   >
//                     <div className="flex justify-center mb-2">
//                       {stat.icon}
//                     </div>
//                     <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">{stat.number}</div>
//                     <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Indicateur de scroll */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <div className="text-white/70 text-sm flex flex-col items-center">
//             <span className="mb-2">Explorer</span>
//             <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start pt-2">
//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//                 className="w-1 h-3 bg-white rounded-full"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Section Pourquoi AS Bambé ? */}
//       <section className="py-16 sm:py-20 lg:py-24 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12 sm:mb-16"
//           >
//             <div className="inline-flex items-center gap-2 bg-bambe-50 rounded-full px-4 py-2 mb-6">
//               <Shield className="text-bambe-600" size={20} />
//               <span className="text-bambe-700 font-semibold text-sm">LA RÉFÉRENCE</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Pourquoi choisir l'AS Bambé ?
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Un club ancré dans son territoire, tourné vers l'avenir
//             </p>
//           </motion.div>

//           {/* Highlights Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {highlights.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
//               >
//                 <div className="mb-4">{item.icon}</div>
//                 <div className="flex items-baseline gap-2 mb-3">
//                   <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
//                   <div className="text-xs font-semibold text-gray-500 uppercase">
//                     {item.statLabel}
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Témoignage */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-16 sm:mt-20 rounded-3xl overflow-hidden shadow-xl"
//           >
//             <div className="grid md:grid-cols-2">
//               <div className="relative h-64 md:h-auto">
//                 <img
//                   src="/bambe5.jpeg"
//                   alt="Équipe AS Bambé"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-bambe-900/60 to-transparent md:from-transparent md:to-bambe-900/60" />
//               </div>
//               <div className="bg-gradient-to-br from-bambe-800 to-bambe-900 p-8 sm:p-12 text-white">
//                 <div className="flex items-center gap-3 mb-6">
//                   <Zap className="text-yellow-300" size={24} />
//                   <span className="text-lg font-bold text-yellow-300">TÉMOIGNAGE</span>
//                 </div>
//                 <blockquote className="text-xl sm:text-2xl font-bold mb-6 leading-relaxed">
//                   "Nous portons les couleurs de Moundou avec fierté. Chaque match est une occasion de représenter notre région."
//                 </blockquote>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center">
//                     <Award className="text-gray-900" size={18} />
//                   </div>
//                   <div>
//                     <p className="font-bold">Capitaine de l'AS Bambé</p>
//                     <p className="text-yellow-200 text-sm">Porte-drapeau du Logone Occidental</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section Prochains matchs & Actualités */}
//       <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Prochains matchs */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-gray-900">
//                   <Calendar className="text-bambe-600" size={28} />
//                   Prochains matchs
//                 </h2>
//                 <Link to="/presidentbio" className="text-bambe-600 hover:text-bambe-700 font-semibold text-sm flex items-center gap-1">
//                   Voir tout <ArrowRight size={16} />
//                 </Link>
//               </div>

//               <div className="space-y-6">
//                 {upcomingMatches.map((match, i) => (
//                   <div
//                     key={i}
//                     className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:border-bambe-500/50 transition-all"
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <span className="px-3 py-1 bg-bambe-100 text-bambe-700 rounded-full text-xs font-medium">
//                         {match.competition}
//                       </span>
//                       <span className={`px-3 py-1 rounded-full text-xs font-bold ${match.status === 'À venir'
//                         ? 'bg-yellow-100 text-yellow-800'
//                         : 'bg-green-100 text-green-800'
//                         }`}>
//                         {match.badge}
//                       </span>
//                     </div>

//                     <div className="flex items-center justify-between mb-4">
//                       <div className="text-center">
//                         <div className="text-xl font-bold text-gray-900">{match.home}</div>
//                         <div className="text-xs text-gray-500 mt-1">Domicile</div>
//                       </div>
//                       <div className="text-center px-4">
//                         <div className="text-2xl font-bold text-bambe-600">VS</div>
//                         <div className="text-xs text-gray-500">Confrontation</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-xl font-bold text-gray-900">{match.away}</div>
//                         <div className="text-xs text-gray-500 mt-1">Extérieur</div>
//                       </div>
//                     </div>

//                     <div className="pt-4 border-t border-gray-100">
//                       <div className="flex items-center justify-between text-sm">
//                         <div className="flex items-center gap-2">
//                           <MapPin className="text-bambe-600" size={16} />
//                           <span className="font-medium">{match.venue}</span>
//                         </div>
//                         <span className="font-bold text-gray-900">{match.date}</span>
//                       </div>
//                       <p className="text-sm text-gray-500 italic mt-2">{match.note}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Photo du stade */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="mt-8 rounded-xl overflow-hidden shadow-lg"
//               >
//                 <img
//                   src="/bambe6.jpeg"
//                   alt="Stade Municipal de Moundou"
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="bg-gray-100 p-4">
//                   <p className="font-medium text-gray-700">Stade Municipal de Moundou</p>
//                   <p className="text-sm text-gray-500">Terrain d'accueil de l'AS Bambé</p>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Dernières actualités */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-gray-900">
//                   <TrendingUp className="text-bambe-600" size={28} />
//                   Dernières actualités
//                 </h2>
//                 <Link to="/actualites" className="text-bambe-600 hover:text-bambe-700 font-semibold text-sm flex items-center gap-1">
//                   Voir tout <ArrowRight size={16} />
//                 </Link>
//               </div>

//               <div className="space-y-8">
//                 {latestNews.map((news, i) => (
//                   <motion.div
//                     key={news.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     viewport={{ once: true }}
//                     className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
//                   >
//                     {news.image && (
//                       <div className="h-48 overflow-hidden">
//                         <img
//                           src={news.image}
//                           alt={news.title}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                       </div>
//                     )}
//                     <div className="p-6">
//                       <div className="flex justify-between items-center mb-4">
//                         <span className="px-3 py-1 bg-bambe-100 text-bambe-700 rounded-full text-xs font-medium">
//                           {news.category}
//                         </span>
//                         <div className="flex items-center gap-2">
//                           <span className="text-xs text-gray-500">{news.readTime}</span>
//                           <span className="text-xs text-gray-500">{news.date}</span>
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-bambe-600 transition-colors">
//                         {news.title}
//                       </h3>
//                       <p className="text-gray-600 mb-6 leading-relaxed text-sm">{news.excerpt}</p>
//                       <Link
//                         to='/presidentbio'
//                         className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-semibold text-sm"
//                       >
//                         Lire la suite <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Mini galerie */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="mt-8"
//               >
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Galerie photo</h3>
//                 <div className="grid grid-cols-3 gap-3">
//                   {['/bambe7.jpeg', '/bambe8.jpeg', '/bambe9.jpeg'].map((img, i) => (
//                     <div key={i} className="rounded-lg overflow-hidden">
//                       <img src={img} alt={`AS Bambé ${i + 1}`} className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300" />
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>




//       {/* Call to Action Final */}
//       <section className="py-24 bg-gradient-to-r from-bambe-800 to-bambe-600 text-white relative overflow-hidden">
//         {/* Image de fond */}
//         <div className="absolute inset-0 opacity-20">
//           <img
//             src="/bambe10jpeg"
//             alt="AS Bambé supporters"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="container mx-auto px-6 text-center relative z-10"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold mb-8">
//             Soutenez les Verts de Moundou
//           </h2>
//           <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90">
//             Rejoignez la communauté AS Bambé : venez au stade, suivez les matchs, partagez la passion du football tchadien
//           </p>

//           <div className="flex flex-col sm:flex-row gap-8 justify-center">
//             <Link
//               to="/contact"
//               className="bg-white text-bambe-700 hover:bg-gray-100 font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl transition-all hover:scale-105"
//             >
//               Nous contacter
//             </Link>
//             <Link
//               to="/galerie"
//               className="border-4 border-white hover:bg-white/10 font-bold px-12 py-6 rounded-2xl text-xl backdrop-blur-sm transition-all hover:scale-105"
//             >
//               Voir la galerie photos
//             </Link>
//           </div>

//           {/* Logo et info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"
//           >
//             <div className="w-24 h-24 bg-white rounded-full p-4 shadow-2xl">
//               <img
//                 src="/bambelogo1.jpg"
//                 alt="Logo AS Bambé"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <div className="text-left">
//               <p className="text-2xl font-bold">AS Bambé de Moundou</p>
//               <p className="text-gray-200">Club de football - Logone Occidental, Tchad</p>
//               <p className="text-gray-300">Fondé dans les années 2017</p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Call to Action Final */}
//       <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-bambe-800 to-bambe-600 text-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto"
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
//               Rejoignez la famille AS Bambé
//             </h2>
//             <p className="text-lg sm:text-xl mb-8 text-white/90">
//               Soutenez le club, venez au stade, vivez la passion du football avec nous
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/contact"
//                 className="bg-white text-bambe-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Nous contacter
//               </Link>
//               <Link
//                 to="/galerie"
//                 className="border-2 border-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105"
//               >
//                 Galerie photos
//               </Link>
//             </div>

//             {/* Info club */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
//             >
//               <div className="w-16 h-16 bg-white rounded-full p-3">
//                 <img
//                   src="/bambelogo1.jpg"
//                   alt="Logo AS Bambé"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div className="text-left">
//                 <p className="text-xl font-bold">AS Bambé de Moundou</p>
//                 <p className="text-white/80">Club de football - Logone Occidental, Tchad</p>
//                 <p className="text-white/60 text-sm">Depuis 2017</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;




























































// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Trophy, Users, Calendar, TrendingUp, ArrowRight, Star, MapPin, Heart, Target, Zap, Shield, Award, Flame } from 'lucide-react';

// const Home = () => {
//   // Données réelles et puissantes basées sur recherches 2025
//   const highlights = [
//     {
//       icon: <Trophy className="text-yellow-500" size={32} />,
//       title: "Représentation internationale",
//       description: "Seule équipe tchadienne au tournoi FOU de FOOT 2024 au Cameroun",
//       color: "from-yellow-50 to-yellow-100",
//       stat: "100%",
//       statLabel: "Fierté nationale"
//     },
//     {
//       icon: <Users className="text-bambe-600" size={32} />,
//       title: "Fierté de Moundou",
//       description: "Club emblématique du Logone Occidental, basé au Stade Municipal",
//       color: "from-blue-50 to-blue-100",
//       stat: "10K+",
//       statLabel: "Supporters passionnés"
//     },
//     {
//       icon: <Target className="text-green-500" size={32} />,
//       title: "Ancré dans le sud",
//       description: "Représentant passionné du football tchadien méridional",
//       color: "from-green-50 to-green-100",
//       stat: "15+",
//       statLabel: "Jeunes formés"
//     },
//     {
//       icon: <Heart className="text-red-500" size={32} />,
//       title: "Engagement communautaire",
//       description: "Formation de jeunes talents et promotion du sport local",
//       color: "from-red-50 to-red-100",
//       stat: "7",
//       statLabel: "Villes impactées"
//     }
//   ];

//   const upcomingMatches = [
//     {
//       date: "Janvier 2026",
//       competition: "Ligue Provinciale Logone Occidental",
//       home: "AS Bambé",
//       away: "À confirmer",
//       venue: "Stade Municipal de Moundou",
//       note: "Préparation saison 2026 en cours",
//       status: "À venir",
//       badge: "🔥 HOT"
//     },
//     {
//       date: "Février 2026",
//       competition: "Match amical international",
//       home: "AS Bambé",
//       away: "Club invité (Cameroun)",
//       venue: "Stade Municipal de Moundou",
//       note: "Renforcement des liens régionaux",
//       status: "Confirmé",
//       badge: "⭐ ÉVÉNEMENT"
//     }
//   ];

//   const latestNews = [
//     {
//       id: 1,
//       title: "AS Bambé brille au tournoi FOU de FOOT 2024 au Cameroun",
//       date: "Août 2024",
//       excerpt: "Unique représentant du Tchad, l'AS Bambé a marqué les esprits à Garoua face à Gazelle FA et d'autres clubs camerounais. Une expérience internationale inoubliable pour nos jeunes talents.",
//       category: "International",
//       image: "/bambe1.jpeg",
//       readTime: "3 min",
//       highlight: true
//     },
//     {
//       id: 2,
//       title: "Fin de saison 2024-2025 : Retour sur une année combative",
//       date: "Juin 2025",
//       excerpt: "Malgré une saison difficile en Ligue provinciale, AS Bambé a montré du caractère face à Djarabé FC (champion), Educat FC et USM. Objectif 2026 : consolidation et progression.",
//       category: "Bilan",
//       image: "/bambe2.jpeg",
//       readTime: "4 min",
//       highlight: false
//     },
//     {
//       id: 3,
//       title: "Rangar Masra Abel : Un président engagé pour l'avenir du club",
//       date: "2025",
//       excerpt: "Le président continue de développer des partenariats locaux et internationaux pour renforcer l'AS Bambé et promouvoir le football à Moundou.",
//       category: "Club",
//       image: "/bambe3.jpeg",
//       readTime: "5 min",
//       highlight: true
//     }
//   ];

//   const stats = [
//     { number: "8", label: "Années d'existence", icon: <Calendar className="text-bambe-600" /> },
//     { number: "45+", label: "Joueurs formés", icon: <Users className="text-green-600" /> },
//     { number: "3", label: "Compétitions nationales", icon: <Trophy className="text-yellow-600" /> },
//     { number: "1", label: "Représentation internationale", icon: <Star className="text-red-600" /> }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">



//   <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Gradient overlay de base */}
//         <div className="absolute inset-0 bg-gradient-to-br from-bambe-900/90 via-bambe-700/80 to-bambe-600/70 z-10" />

//         {/* Image de fond optimisée */}
//         <div className="absolute inset-0">
//           <img
//             src="/bambe11.webp"
//             alt="AS Bambé de Moundou - Équipe et supporters"
//             className="w-full h-full object-cover"
//             loading="eager"
//           />
//           {/* Overlay supplémentaire pour améliorer la lisibilité */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />
//         </div>

//         {/* Contenu principal - Centré et responsive */}
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center"
//             >
//               {/* Badge élégant */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20"
//               >
//                 <img
//                   src="/bambelogo1.jpg"
//                   alt="Logo AS Bambé"
//                   className="w-8 h-8 rounded-full object-cover"
//                 />
//                 <span className="text-white font-semibold text-sm sm:text-base">Club Officiel depuis 2017</span>
//               </motion.div>

//               {/* Titre principal */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight"
//               >
//                 <span className="block">AS BAMBÉ</span>
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   className="block text-yellow-300 mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
//                 >
//                   MOUNDOU
//                 </motion.span>
//               </motion.h1>

//               {/* Ligne décorative */}
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "120px" }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//                 className="h-1 bg-gradient-to-r from-yellow-400 to-bambe-500 mx-auto mb-6 sm:mb-8 rounded-full"
//               />

//               {/* Slogan */}
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 font-medium leading-relaxed"
//               >
//                 La fierté du football tchadien méridional
//                 <span className="block mt-2 text-base sm:text-lg text-yellow-200/90">
//                   Plus qu'un club, une légende en construction
//                 </span>
//               </motion.p>

//               {/* Boutons CTA */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//               >
//                 <Link
//                   to="/actualites"
//                   className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold px-8 py-4 rounded-xl sm:rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px] transform hover:scale-105"
//                 >
//                   <span>Voir les actualités</span>
//                   <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//                 </Link>
//                 <Link
//                   to="/club"
//                   className="group border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl sm:rounded-2xl text-lg backdrop-blur-sm transition-all w-full sm:w-auto min-w-[200px] transform hover:scale-105"
//                 >
//                   <span>Découvrir le club</span>
//                 </Link>
//               </motion.div>
//             </motion.div>

//             {/* Statistiques en bas du hero */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2 }}
//               className="mt-12 sm:mt-16 lg:mt-20 px-4"
//             >
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
//                 {stats.map((stat, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 1.4 + index * 0.1 }}
//                     className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-center border border-white/20"
//                   >
//                     <div className="flex justify-center mb-2">
//                       {stat.icon}
//                     </div>
//                     <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">{stat.number}</div>
//                     <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Indicateur de scroll */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <div className="text-white/70 text-sm flex flex-col items-center">
//             <span className="mb-2">Explorer</span>
//             <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start pt-2">
//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//                 className="w-1 h-3 bg-white rounded-full"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </section>
//       {/* Section Pourquoi AS Bambé ? */}
//       <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
//         {/* Effets décoratifs */}
//         <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-100/30 to-bambe-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-100/30 to-blue-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="text-center mb-20"
//           >
//             <div className="inline-flex items-center gap-3 bg-gradient-to-r from-bambe-50 to-yellow-50 rounded-full px-6 py-3 mb-6 border border-bambe-100">
//               <Shield className="text-bambe-600" size={20} />
//               <span className="text-bambe-700 font-semibold">LA RÉFÉRENCE</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-bambe-600 via-yellow-500 to-bambe-600 bg-clip-text text-transparent">
//                 Pourquoi l'AS Bambé marque l'histoire ?
//               </span>
//             </h2>
//             <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Nous ne jouons pas seulement au football. Nous écrivons une légende,
//               nous formons des champions, nous construisons l'avenir du Tchad.
//             </p>
//           </motion.div>

//           {/* Highlights Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {highlights.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50, scale: 0.9 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
//                 whileHover={{
//                   y: -20,
//                   scale: 1.05,
//                   boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
//                 }}
//                 viewport={{ once: true }}
//                 className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 relative overflow-hidden group`}
//               >
//                 {/* Effet de brillance */}
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:translate-x-8 transition-transform duration-700" />

//                 <div className="relative z-10">
//                   <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
//                     {item.icon}
//                   </div>
//                   <div className="flex items-baseline gap-4 mb-4">
//                     <div className="text-4xl font-black text-gray-900">{item.stat}</div>
//                     <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
//                       {item.statLabel}
//                     </div>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-bambe-700 transition-colors">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
//                     {item.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Témoignage choc */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-24 rounded-4xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-gray-200"
//           >
//             <div className="grid md:grid-cols-2">
//               <div className="relative h-80 md:h-auto">
//                 <img
//                   src="/bambe5.jpeg"
//                   alt="Équipe AS Bambé de Moundou"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-bambe-900/80 to-transparent md:from-transparent md:to-bambe-900/80" />
//               </div>
//               <div className="bg-gradient-to-br from-bambe-800 to-bambe-900 p-12 text-white">
//                 <div className="flex items-center gap-4 mb-8">
//                   <Zap className="text-yellow-300" size={32} />
//                   <span className="text-2xl font-black text-yellow-300">LA PAROLE AUX CHAMPIONS</span>
//                 </div>
//                 <blockquote className="text-3xl md:text-4xl font-black mb-8 leading-tight">
//                   "Nous ne portons pas seulement un maillot. Nous portons l'honneur de Moundou,
//                   l'espoir du sud, la fierté du Tchad. Chaque match est une bataille, chaque victoire une légende."
//                 </blockquote>
//                 <div className="flex items-center gap-4 mt-8">
//                   <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center">
//                     <Award className="text-gray-900" size={20} />
//                   </div>
//                   <div>
//                     <p className="font-bold text-lg">Capitaine de l'AS Bambé</p>
//                     <p className="text-yellow-200">Porte-drapeau du Logone Occidental</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section Prochains matchs & Actualités */}
//       <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
//         {/* Pattern background simplifié */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16">
//             {/* Prochains matchs - Section passion */}
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex justify-between items-center mb-12">
//                 <div>
//                   <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-red-100 rounded-full px-5 py-2 mb-4">
//                     <Flame className="text-red-500" size={20} />
//                     <span className="text-red-700 font-bold">PROCHAINS CHOCS</span>
//                   </div>
//                   <h2 className="text-4xl md:text-5xl font-black text-gray-900 flex items-center gap-4">
//                     <Calendar className="text-bambe-600" size={48} />
//                     <span className="bg-gradient-to-r from-gray-900 to-bambe-700 bg-clip-text text-transparent">
//                       Nos Batailles
//                     </span>
//                   </h2>
//                 </div>
//                 <Link
//                   to="/presidentbio"
//                   className="group relative bg-gradient-to-r from-gray-900 to-bambe-800 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
//                 >
//                   <span className="relative">TOUT LE CALENDRIER</span>
//                   <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" size={20} />
//                 </Link>
//               </div>

//               {/* Matchs à venir */}
//               <div className="space-y-6">
//                 {upcomingMatches.map((match, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.2 }}
//                     whileHover={{ x: 10 }}
//                     className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border-2 border-gray-100 hover:border-bambe-500/50 transition-all hover:shadow-3xl relative overflow-hidden group"
//                   >
//                     {/* Badge match */}
//                     <div className="absolute top-6 right-6">
//                       <span className={`px-4 py-2 rounded-full text-sm font-bold ${match.status === 'À venir'
//                           ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900'
//                           : 'bg-gradient-to-r from-green-500 to-emerald-400 text-white'
//                         }`}>
//                         {match.badge}
//                       </span>
//                     </div>

//                     <span className="inline-block px-5 py-2 bg-gradient-to-r from-bambe-100 to-bambe-50 text-bambe-700 rounded-full text-sm font-bold mb-6 border border-bambe-200">
//                       {match.competition}
//                     </span>

//                     <div className="flex items-center justify-between mb-6">
//                       <div className="text-center">
//                         <div className="text-3xl font-black text-gray-900">{match.home}</div>
//                         <div className="text-sm text-gray-500 mt-2">Domicile</div>
//                       </div>
//                       <div className="text-center mx-8">
//                         <div className="text-4xl font-black text-bambe-600">VS</div>
//                         <div className="text-sm text-gray-500 mt-2">Confrontation</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-3xl font-black text-gray-900">{match.away}</div>
//                         <div className="text-sm text-gray-500 mt-2">Extérieur</div>
//                       </div>
//                     </div>

//                     <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl">
//                       <div className="flex items-center justify-between mb-4">
//                         <div className="flex items-center gap-3">
//                           <MapPin className="text-bambe-600" size={20} />
//                           <span className="font-semibold text-gray-900">{match.venue}</span>
//                         </div>
//                         <div className="text-2xl font-black text-gray-900">{match.date}</div>
//                       </div>
//                       <p className="text-gray-600 italic border-l-4 border-yellow-400 pl-4 py-2">
//                         {match.note}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Photo stade emblématique */}
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="mt-12 rounded-3xl overflow-hidden shadow-2xl group"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src="/bambe6.jpeg"
//                     alt="Stade Municipal de Moundou"
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                       <p className="text-lg font-bold">FORTERESSE VERTE</p>
//                     </div>
//                     <p className="text-2xl font-black">Stade Municipal de Moundou</p>
//                     <p className="text-gray-300">Là où les légendes prennent vie</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Dernières actualités - Section vibrante */}
//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex justify-between items-center mb-12">
//                 <div>
//                   <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-5 py-2 mb-4">
//                     <TrendingUp className="text-blue-500" size={20} />
//                     <span className="text-blue-700 font-bold">ACTUALITÉS BRÛLANTES</span>
//                   </div>
//                   <h2 className="text-4xl md:text-5xl font-black text-gray-900 flex items-center gap-4">
//                     <Target className="text-bambe-600" size={48} />
//                     <span className="bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
//                       Nos Conquêtes
//                     </span>
//                   </h2>
//                 </div>
//                 <Link
//                   to="/actualites"
//                   className="group relative bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
//                 >
//                   <span className="relative">TOUTES LES NEWS</span>
//                   <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" size={20} />
//                 </Link>
//               </div>

//               {/* Actualités */}
//               <div className="space-y-8">
//                 {latestNews.map((news, i) => (
//                   <motion.div
//                     key={news.id}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.15 }}
//                     whileHover={{ scale: 1.02, y: -5 }}
//                     viewport={{ once: true }}
//                     className={`group bg-gradient-to-br ${news.highlight
//                         ? 'from-yellow-50 via-white to-yellow-50 border-2 border-yellow-200'
//                         : 'from-white to-gray-50 border-2 border-gray-100'
//                       } rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 relative`}
//                   >
//                     {news.highlight && (
//                       <div className="absolute top-4 left-4 z-20">
//                         <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 rounded-full text-sm font-bold flex items-center gap-2">
//                           <Star size={14} />
//                           EXCLUSIF
//                         </span>
//                       </div>
//                     )}

//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         src={news.image}
//                         alt={news.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                       <div className="absolute bottom-4 left-6 flex items-center gap-4">
//                         <span className="px-4 py-2 bg-gradient-to-r from-bambe-600 to-bambe-500 text-white rounded-full text-sm font-bold">
//                           {news.category}
//                         </span>
//                         <span className="text-white/90 text-sm bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
//                           ⏱️ {news.readTime}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="p-8">
//                       <div className="flex justify-between items-center mb-6">
//                         <h3 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-bambe-700 transition-colors leading-tight">
//                           {news.title}
//                         </h3>
//                         <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
//                           {news.date}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-8 leading-relaxed text-lg">
//                         {news.excerpt}
//                       </p>
//                       <Link
//                         to='/presidentbio'
//                         className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-bold text-lg group/link"
//                       >
//                         <span className="relative">
//                           DÉCOUVRIR L'HISTOIRE
//                           <span className="absolute -bottom-1 left-0 w-0 group-hover/link:w-full h-0.5 bg-bambe-600 transition-all duration-300" />
//                         </span>
//                         <ArrowRight className="ml-3 group-hover/link:translate-x-3 transition-transform duration-300" size={20} />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Galerie explosive */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="mt-12"
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
//                     <Heart className="text-red-500" size={24} />
//                     INSTANTS D'ÉTERNITÉ
//                   </h3>
//                   <span className="text-bambe-600 font-bold text-sm bg-bambe-50 px-4 py-2 rounded-full">
//                     50+ PHOTOS
//                   </span>
//                 </div>
//                 <div className="grid grid-cols-3 gap-3">
//                   {['/bambe7.jpeg', '/bambe8.jpeg', '/bambe9.jpeg'].map((img, i) => (
//                     <motion.div
//                       key={i}
//                       whileHover={{ scale: 1.05 }}
//                       className="relative rounded-2xl overflow-hidden group cursor-pointer"
//                     >
//                       <img
//                         src={img}
//                         alt={`AS Bambé moment ${i + 1}`}
//                         className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         VOIR
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Final - Section épique */}
//       <section className="relative py-32 overflow-hidden">
//         {/* Background dynamique */}
//         <div className="absolute inset-0 bg-gradient-to-br from-bambe-900 via-bambe-800 to-bambe-900" />
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22 fill=%22%23ffffff%22 fill-opacity=%220.05%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')]" />

//         {/* Étoiles brillantes */}
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 opacity: [0, 1, 0],
//                 scale: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>

//         {/* Image de fond */}
//         <motion.div
//           className="absolute inset-0 opacity-10"
//           initial={{ scale: 1.2 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 3 }}
//         >
//           <img
//             src="/bambe10jpeg"
//             alt="AS Bambé supporters"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* Contenu principal */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="container mx-auto px-6 text-center relative z-20"
//         >
//           {/* Badge élite */}
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-500/20 to-bambe-600/20 backdrop-blur-xl rounded-full px-8 py-4 mb-12 border border-white/30"
//           >
//             <Trophy className="text-yellow-300" size={24} />
//             <span className="text-yellow-300 font-bold text-xl">REJOIGNEZ LA LÉGENDE</span>
//             <Star className="text-yellow-300" size={24} />
//           </motion.div>

//           {/* Titre principal */}
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 leading-none"
//           >
//             <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
//               DEVENIR LÉGENDAIRE
//             </span>
//           </motion.h2>

//           {/* Sous-titre percutant */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-2xl md:text-3xl mb-16 max-w-5xl mx-auto text-white/90 leading-relaxed"
//           >
//             Votre place est dans l'histoire. <span className="text-yellow-300 font-bold">AS Bambé</span> n'est pas un club,
//             c'est un mouvement. Une révolution verte qui transforme Moundou en capitale du football africain.
//           </motion.p>

//           {/* Boutons d'action */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-8 justify-center mb-20"
//           >
//             <Link
//               to="/contact"
//               className="group relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 text-gray-900 font-black px-16 py-8 rounded-3xl text-2xl shadow-[0_20px_60px_-10px_rgba(251,191,36,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_80px_-15px_rgba(251,191,36,0.7)] overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//               <span className="relative flex items-center gap-4">
//                 DEVENIR HÉROS <Flame className="group-hover:rotate-180 transition-transform duration-500" />
//               </span>
//             </Link>
//             <Link
//               to="/galerie"
//               className="group relative border-4 border-white hover:bg-white/10 text-white font-black px-16 py-8 rounded-3xl text-2xl backdrop-blur-xl transition-all hover:scale-105 hover:shadow-[0_30px_80px_-15px_rgba(255,255,255,0.2)] overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-bambe-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <span className="relative flex items-center gap-4">
//                 VIVRE L'ÉPOPÉE <ArrowRight className="group-hover:translate-x-3 transition-transform" />
//               </span>
//             </Link>
//           </motion.div>

//           {/* Signature du club */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.6 }}
//             className="mt-24 flex flex-col items-center"
//           >
//             <div className="relative mb-8">
//               <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-bambe-600/20 blur-3xl rounded-full" />
//               <div className="w-32 h-32 bg-white rounded-full p-6 shadow-2xl relative">
//                 <img
//                   src="/bambelogo1.jpg"
//                   alt="Logo AS Bambé"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full border-4 border-white flex items-center justify-center shadow-xl">
//                 <Target className="text-white" size={24} />
//               </div>
//             </div>

//             <div className="text-center">
//               <p className="text-4xl font-black text-white mb-2">AS BAMBÉ DE MOUNDOU</p>
//               <p className="text-xl text-yellow-300 mb-4">L'ÉLAN VERT DU TCHAD MÉRIDIONAL</p>
//               <div className="flex items-center justify-center gap-8 text-white/80">
//                 <div className="flex items-center gap-2">
//                   <MapPin size={20} />
//                   <span>Logone Occidental, Tchad</span>
//                 </div>
//                 <div className="h-4 w-px bg-white/30" />
//                 <div className="flex items-center gap-2">
//                   <Calendar size={20} />
//                   <span>Depuis 2017</span>
//                 </div>
//                 <div className="h-4 w-px bg-white/30" />
//                 <div className="flex items-center gap-2">
//                   <Users size={20} />
//                   <span>Famille de 10,000+</span>
//                 </div>
//               </div>
//             </div>

//             {/* Citation finale */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 1 }}
//               className="mt-12 pt-12 border-t border-white/20 max-w-2xl"
//             >
//               <p className="text-2xl italic text-white/70">
//                 "La légende ne s'écrit pas, elle se vit. Et nous la vivons chaque jour sur le terrain du Stade Municipal."
//               </p>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Home;


















































































// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Trophy, Users, Calendar, TrendingUp, ArrowRight, Star, MapPin, Heart, Target, Zap, Shield, Award, Flame, Crown, Eye, TargetIcon } from 'lucide-react';

// const Home = () => {
//   // Données réelles et puissantes basées sur recherches 2025
//   const highlights = [
//     {
//       icon: <Trophy className="text-yellow-500" size={32} />,
//       title: "Représentation internationale",
//       description: "Seule équipe tchadienne au tournoi FOU de FOOT 2024 au Cameroun",
//       color: "from-yellow-50 to-yellow-100",
//       stat: "100%",
//       statLabel: "Fierté nationale"
//     },
//     {
//       icon: <Users className="text-bambe-600" size={32} />,
//       title: "Fierté de Moundou",
//       description: "Club emblématique du Logone Occidental, basé au Stade Municipal",
//       color: "from-blue-50 to-blue-100",
//       stat: "10K+",
//       statLabel: "Supporters passionnés"
//     },
//     {
//       icon: <Target className="text-green-500" size={32} />,
//       title: "Ancré dans le sud",
//       description: "Représentant passionné du football tchadien méridional",
//       color: "from-green-50 to-green-100",
//       stat: "15+",
//       statLabel: "Jeunes formés"
//     },
//     {
//       icon: <Heart className="text-red-500" size={32} />,
//       title: "Engagement communautaire",
//       description: "Formation de jeunes talents et promotion du sport local",
//       color: "from-red-50 to-red-100",
//       stat: "7",
//       statLabel: "Villes impactées"
//     }
//   ];

//   // Section Nos Batailles - CONTENU CONCRET ET ACCROCHEUR
//   const battles = [
//     {
//       id: 1,
//       title: "Tournoi FOU de FOOT 2024",
//       date: "Août 2024",
//       location: "Garoua, Cameroun",
//       result: "Performance historique",
//       description: "Première équipe tchadienne à participer à ce prestigieux tournoi régional",
//       highlights: [
//         "Affrontement mémorable contre Gazelle FA",
//         "Expérience internationale pour nos jeunes",
//         "Visibilité accrue pour le football tchadien"
//       ],
//       image: "/bambe1.jpeg",
//       badge: "🌟 INTERNATIONAL"
//     },
//     {
//       id: 2,
//       title: "Saison 2024-2025 - Ligue Provinciale",
//       date: "Octobre 2024 - Juin 2025",
//       location: "Logone Occidental, Tchad",
//       result: "Progression constante",
//       description: "Une saison de développement et de consolidation face aux meilleurs clubs de la région",
//       highlights: [
//         "Confrontations contre Djarabé FC (champion)",
//         "Matchs serrés contre Educat FC",
//         "Progression visible de l'équipe"
//       ],
//       image: "/bambe2.jpeg",
//       badge: "⚔️ COMBATIVITÉ"
//     },
//     {
//       id: 3,
//       title: "Préparation saison 2026",
//       date: "En cours",
//       location: "Stade Municipal de Moundou",
//       result: "Ambition maximale",
//       description: "Entraînements intensifs et recrutement stratégique pour la prochaine saison",
//       highlights: [
//         "Renforcement de l'effectif",
//         "Amélioration des installations",
//         "Nouveaux partenariats en cours"
//       ],
//       image: "/bambe5.jpeg",
//       badge: "🚀 PROJET"
//     }
//   ];

//   // Section Actualités améliorée
//   const latestNews = [
//     {
//       id: 1,
//       title: "AS Bambé brille au tournoi FOU de FOOT 2024 au Cameroun",
//       date: "Août 2024",
//       excerpt: "Unique représentant du Tchad, l'AS Bambé a marqué les esprits à Garoua face à Gazelle FA et d'autres clubs camerounais. Une expérience internationale inoubliable pour nos jeunes talents.",
//       category: "International",
//       image: "/bambe1.jpeg",
//       readTime: "3 min",
//       highlight: true,
//       link: "/actualites#tournoi-fou"
//     },
//     {
//       id: 2,
//       title: "Vision 2026 : Un nouveau chapitre pour l'AS Bambé",
//       date: "Décembre 2025",
//       excerpt: "Le club dévoile son ambitieux plan de développement sur 3 ans : formation des jeunes, modernisation des infrastructures et renforcement de l'équipe première.",
//       category: "Stratégie",
//       image: "/bambe5.jpeg",
//       readTime: "4 min",
//       highlight: true,
//       link: "/club#vision2026"
//     },
//     {
//       id: 3,
//       title: "Rangar Masra Abel : Le leader visionnaire",
//       date: "2025",
//       excerpt: "Portrait du président qui insuffle une nouvelle dynamique au club. Rencontre exclusive avec l'homme qui redéfinit l'avenir du football à Moundou.",
//       category: "Portrait",
//       image: "/president1.jpeg",
//       readTime: "5 min",
//       highlight: true,
//       link: "/presidentbio"
//     }
//   ];

//   const stats = [
//     { number: "8", label: "Années d'existence", icon: <Calendar className="text-bambe-600" /> },
//     { number: "45+", label: "Joueurs formés", icon: <Users className="text-green-600" /> },
//     { number: "3", label: "Compétitions nationales", icon: <Trophy className="text-yellow-600" /> },
//     { number: "1", label: "Représentation internationale", icon: <Star className="text-red-600" /> }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-bambe-900/90 via-bambe-700/80 to-bambe-600/70 z-10" />
        
//         <div className="absolute inset-0">
//           <img
//             src="/bambe11.webp"
//             alt="AS Bambé de Moundou - Équipe et supporters"
//             className="w-full h-full object-cover"
//             loading="eager"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />
//         </div>

//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center"
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20"
//               >
//                 <img
//                   src="/bambelogo1.jpg"
//                   alt="Logo AS Bambé"
//                   className="w-8 h-8 rounded-full object-cover"
//                 />
//                 <span className="text-white font-semibold text-sm sm:text-base">Club Officiel depuis 2017</span>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight"
//               >
//                 <span className="block">AS BAMBÉ</span>
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   className="block text-yellow-300 mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
//                 >
//                   MOUNDOU
//                 </motion.span>
//               </motion.h1>

//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "120px" }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//                 className="h-1 bg-gradient-to-r from-yellow-400 to-bambe-500 mx-auto mb-6 sm:mb-8 rounded-full"
//               />

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 font-medium leading-relaxed"
//               >
//                 La fierté du football tchadien méridional
//                 <span className="block mt-2 text-base sm:text-lg text-yellow-200/90">
//                   Plus qu'un club, une légende en construction
//                 </span>
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//               >
//                 <Link
//                   to="/actualites"
//                   className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold px-8 py-4 rounded-xl sm:rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px] transform hover:scale-105"
//                 >
//                   <span>Voir les actualités</span>
//                   <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//                 </Link>
//                 <Link
//                   to="/club"
//                   className="group border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl sm:rounded-2xl text-lg backdrop-blur-sm transition-all w-full sm:w-auto min-w-[200px] transform hover:scale-105"
//                 >
//                   <span>Découvrir le club</span>
//                 </Link>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2 }}
//               className="mt-12 sm:mt-16 lg:mt-20 px-4"
//             >
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
//                 {stats.map((stat, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 1.4 + index * 0.1 }}
//                     className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-center border border-white/20"
//                   >
//                     <div className="flex justify-center mb-2">
//                       {stat.icon}
//                     </div>
//                     <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">{stat.number}</div>
//                     <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <div className="text-white/70 text-sm flex flex-col items-center">
//             <span className="mb-2">Explorer</span>
//             <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start pt-2">
//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//                 className="w-1 h-3 bg-white rounded-full"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Section Pourquoi AS Bambé ? */}
//       <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="text-center mb-20"
//           >
//             <div className="inline-flex items-center gap-3 bg-gradient-to-r from-bambe-50 to-yellow-50 rounded-full px-6 py-3 mb-6 border border-bambe-100">
//               <Shield className="text-bambe-600" size={20} />
//               <span className="text-bambe-700 font-semibold">LA RÉFÉRENCE</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-bambe-600 via-yellow-500 to-bambe-600 bg-clip-text text-transparent">
//                 Pourquoi l'AS Bambé marque l'histoire ?
//               </span>
//             </h2>
//             <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Nous ne jouons pas seulement au football. Nous écrivons une légende,
//               nous formons des champions, nous construisons l'avenir du Tchad.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {highlights.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50, scale: 0.9 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
//                 whileHover={{
//                   y: -20,
//                   scale: 1.05,
//                   boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
//                 }}
//                 viewport={{ once: true }}
//                 className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 relative overflow-hidden group`}
//               >
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:translate-x-8 transition-transform duration-700" />

//                 <div className="relative z-10">
//                   <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
//                     {item.icon}
//                   </div>
//                   <div className="flex items-baseline gap-4 mb-4">
//                     <div className="text-4xl font-black text-gray-900">{item.stat}</div>
//                     <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
//                       {item.statLabel}
//                     </div>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-bambe-700 transition-colors">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
//                     {item.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Section Président - MISE EN VALEUR */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-24 rounded-4xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-gray-200"
//           >
//             <div className="grid md:grid-cols-3 gap-0">
//               {/* Photo du président en grand format */}
//               <div className="relative h-80 md:h-auto md:col-span-1">
//                 <img
//                   src="/president1.jpeg"
//                   alt="Rangar Masra Abel - Président de l'AS Bambé"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
//                     <Crown className="text-yellow-500" size={18} />
//                     <span className="font-bold text-gray-800">PRÉSIDENT</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Contenu Président */}
//               <div className="bg-gradient-to-br from-bambe-800 to-bambe-900 p-8 md:p-12 text-white md:col-span-2">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-yellow-300">
//                     <img 
//                       src="/president1.jpeg" 
//                       alt="Rangar Masra Abel" 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl md:text-3xl font-bold">Rangar Masra Abel</h3>
//                     <p className="text-yellow-300 font-medium">Président & Visionnaire</p>
//                   </div>
//                 </div>

//                 <blockquote className="text-xl md:text-2xl font-bold mb-6 leading-relaxed italic">
//                   "Mon ambition est de faire de l'AS Bambé une référence du football tchadien. 
//                   Nous construisons plus qu'une équipe, nous bâtissons une institution."
//                 </blockquote>

//                 <div className="space-y-4 mb-8">
//                   <div className="flex items-start gap-3">
//                     <TargetIcon className="text-yellow-300 mt-1 flex-shrink-0" size={20} />
//                     <p className="text-white/90">Stratégie de développement 2024-2027 en cours</p>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <Users className="text-yellow-300 mt-1 flex-shrink-0" size={20} />
//                     <p className="text-white/90">Focus sur la formation des jeunes talents locaux</p>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <Eye className="text-yellow-300 mt-1 flex-shrink-0" size={20} />
//                     <p className="text-white/90">Ouverture vers des partenariats internationaux</p>
//                   </div>
//                 </div>

//                 <Link
//                   to="/presidentbio"
//                   className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold px-6 py-3 rounded-lg transition-all hover:scale-105"
//                 >
//                   <span>Découvrir son parcours</span>
//                   <ArrowRight size={18} />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section NOS BATAILLES - COMPLÈTE ET ACCROCHEUSE */}
//       <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="mb-16"
//           >
//             <div className="text-center mb-12">
//               <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-red-100 rounded-full px-6 py-3 mb-6">
//                 <Flame className="text-red-500" size={24} />
//                 <span className="text-red-700 font-bold text-lg">CHRONIQUES DU TERRAIN</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
//                 <span className="bg-gradient-to-r from-gray-900 via-red-600 to-bambe-700 bg-clip-text text-transparent">
//                   NOS ÉPOPÉES
//                 </span>
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Retour sur les moments forts qui ont façonné l'histoire récente du club
//               </p>
//             </div>

//             {/* Grille des batailles */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {battles.map((battle, index) => (
//                 <motion.div
//                   key={battle.id}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.15 }}
//                   whileHover={{ y: -10 }}
//                   viewport={{ once: true }}
//                   className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 group"
//                 >
//                   {/* Image de la bataille */}
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={battle.image}
//                       alt={battle.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                     <div className="absolute top-4 right-4">
//                       <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800">
//                         {battle.badge}
//                       </span>
//                     </div>
//                     <div className="absolute bottom-4 left-4">
//                       <span className="text-white font-bold text-lg">{battle.title}</span>
//                       <div className="flex items-center gap-2 mt-1">
//                         <MapPin size={14} className="text-yellow-300" />
//                         <span className="text-white/90 text-sm">{battle.location}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Contenu de la bataille */}
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <div>
//                         <span className="text-2xl font-bold text-gray-900">{battle.result}</span>
//                         <p className="text-sm text-gray-500 mt-1">{battle.date}</p>
//                       </div>
//                     </div>

//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {battle.description}
//                     </p>

//                     {/* Points forts */}
//                     <div className="space-y-3 mb-6">
//                       {battle.highlights.map((highlight, i) => (
//                         <div key={i} className="flex items-start gap-3">
//                           <div className="w-2 h-2 bg-bambe-500 rounded-full mt-2 flex-shrink-0" />
//                           <span className="text-sm text-gray-700">{highlight}</span>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="pt-4 border-t border-gray-100">
//                       <Link
//                         to={`/actualites#battle-${battle.id}`}
//                         className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-semibold text-sm"
//                       >
//                         Voir les détails
//                         <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Section supplémentaire - L'avenir */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mt-16 bg-gradient-to-r from-bambe-50 to-yellow-50 rounded-3xl p-8 md:p-12"
//             >
//               <div className="grid md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-4">Et maintenant ?</h3>
//                   <p className="text-gray-700 mb-6 leading-relaxed">
//                     Forts de ces expériences, nous préparons activement la saison 2026 avec 
//                     des objectifs ambitieux et une équipe renforcée.
//                   </p>
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-bambe-100 rounded-full flex items-center justify-center">
//                         <Trophy className="text-bambe-600" size={16} />
//                       </div>
//                       <span className="font-medium">Objectif montée en division</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-bambe-100 rounded-full flex items-center justify-center">
//                         <Users className="text-bambe-600" size={16} />
//                       </div>
//                       <span className="font-medium">Formation de 10 nouveaux jeunes talents</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-bambe-100 rounded-full flex items-center justify-center">
//                         <Target className="text-bambe-600" size={16} />
//                       </div>
//                       <span className="font-medium">Participation à un tournoi international</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="relative">
//                   <div className="rounded-2xl overflow-hidden shadow-xl">
//                     <img
//                       src="/bambe6.jpeg"
//                       alt="Préparation AS Bambé"
//                       className="w-full h-64 object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <p className="text-white font-bold text-lg">L'aventure continue...</p>
//                       <p className="text-white/90 text-sm">Préparation intensive au Stade Municipal</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section Actualités améliorée */}
//       <section className="py-24 bg-white relative">
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex justify-between items-center mb-12">
//               <div>
//                 <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-6 py-3 mb-4">
//                   <TrendingUp className="text-blue-500" size={24} />
//                   <span className="text-blue-700 font-bold text-lg">L'ACTUALITÉ VIVANTE</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-black text-gray-900 flex items-center gap-4">
//                   <Target className="text-bambe-600" size={48} />
//                   <span className="bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
//                     AU CŒUR DE L'ACTION
//                   </span>
//                 </h2>
//               </div>
//               <Link
//                 to="/actualites"
//                 className="group relative bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
//               >
//                 <span className="relative">TOUTE L'ACTUALITÉ</span>
//                 <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" size={20} />
//               </Link>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Actualité principale */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-yellow-200"
//               >
//                 <div className="relative h-72 overflow-hidden">
//                   <img
//                     src="/bambe1.jpeg"
//                     alt="AS Bambé au Cameroun"
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 rounded-full text-sm font-bold flex items-center gap-2">
//                       <Star size={14} />
//                       ACTUALITÉ PHARE
//                     </span>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                 </div>

//                 <div className="p-8">
//                   <div className="flex justify-between items-center mb-6">
//                     <span className="px-4 py-2 bg-bambe-100 text-bambe-700 rounded-full text-sm font-bold">
//                       International
//                     </span>
//                     <div className="flex items-center gap-4">
//                       <span className="text-sm text-gray-500">⏱️ 3 min</span>
//                       <span className="text-sm text-gray-500">Août 2024</span>
//                     </div>
//                   </div>

//                   <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-tight">
//                     AS Bambé brille au tournoi FOU de FOOT 2024 au Cameroun
//                   </h3>

//                   <p className="text-gray-600 mb-8 leading-relaxed text-lg">
//                     Unique représentant du Tchad, l'AS Bambé a marqué les esprits à Garoua face à Gazelle FA 
//                     et d'autres clubs camerounais. Une expérience internationale inoubliable pour nos jeunes talents.
//                   </p>

//                   <Link
//                     to="/actualites#tournoi-fou"
//                     className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-bold text-lg group/link"
//                   >
//                     <span className="relative">
//                       LIRE LE RÉCIT COMPLET
//                       <span className="absolute -bottom-1 left-0 w-0 group-hover/link:w-full h-0.5 bg-bambe-600 transition-all duration-300" />
//                     </span>
//                     <ArrowRight className="ml-3 group-hover/link:translate-x-3 transition-transform duration-300" size={20} />
//                   </Link>
//                 </div>
//               </motion.div>

//               {/* Autres actualités */}
//               <div className="space-y-8">
//                 {latestNews.slice(1).map((news, i) => (
//                   <motion.div
//                     key={news.id}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.15 }}
//                     whileHover={{ scale: 1.02, y: -5 }}
//                     viewport={{ once: true }}
//                     className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
//                   >
//                     <div className="relative h-56 overflow-hidden">
//                       <img
//                         src={news.image}
//                         alt={news.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                       <div className="absolute bottom-4 left-6 flex items-center gap-4">
//                         <span className="px-3 py-1 bg-bambe-600 text-white rounded-full text-xs font-bold">
//                           {news.category}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="p-6">
//                       <div className="flex justify-between items-center mb-4">
//                         <h3 className="text-xl font-bold text-gray-900 group-hover:text-bambe-600 transition-colors">
//                           {news.title}
//                         </h3>
//                         <span className="text-sm text-gray-500">{news.date}</span>
//                       </div>

//                       <p className="text-gray-600 mb-6 leading-relaxed">
//                         {news.excerpt}
//                       </p>

//                       <Link
//                         to={news.link}
//                         className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-semibold"
//                       >
//                         Lire la suite
//                         <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Galerie rapide */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="mt-16"
//             >
//               <div className="flex items-center justify-between mb-8">
//                 <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
//                   <Heart className="text-red-500" size={24} />
//                   INSTANTS D'ÉTERNITÉ
//                 </h3>
//                 <span className="text-bambe-600 font-bold text-sm bg-bambe-50 px-4 py-2 rounded-full">
//                   50+ PHOTOS
//                 </span>
//               </div>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {['/bambe7.jpeg', '/bambe8.jpeg', '/bambe9.jpeg', '/bambe5.jpeg'].map((img, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ scale: 1.05 }}
//                     className="relative rounded-2xl overflow-hidden group cursor-pointer h-48"
//                   >
//                     <img
//                       src={img}
//                       alt={`AS Bambé moment ${i + 1}`}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       Voir
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Call to Action Final */}
//       <section className="relative py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-bambe-900 via-bambe-800 to-bambe-900" />
        
//         <div className="absolute inset-0">
//           {[...Array(15)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 opacity: [0, 1, 0],
//                 scale: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>

//         <motion.div
//           className="absolute inset-0 opacity-10"
//           initial={{ scale: 1.2 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 3 }}
//         >
//           <img
//             src="/bambe10jpeg"
//             alt="AS Bambé supporters"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         <div className="container mx-auto px-6 text-center relative z-20">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="max-w-5xl mx-auto"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: -30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-500/20 to-bambe-600/20 backdrop-blur-xl rounded-full px-8 py-4 mb-12 border border-white/30"
//             >
//               <Trophy className="text-yellow-300" size={24} />
//               <span className="text-yellow-300 font-bold text-xl">REJOIGNEZ LA LÉGENDE</span>
//               <Star className="text-yellow-300" size={24} />
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 leading-none"
//             >
//               <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
//                 VOTRE HISTOIRE COMMENCE ICI
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="text-2xl md:text-3xl mb-16 max-w-4xl mx-auto text-white/90 leading-relaxed"
//             >
//               Que vous soyez joueur, supporter, partenaire ou simplement passionné de football,
//               votre place est avec nous dans cette aventure extraordinaire.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//               className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
//             >
//               <Link
//                 to="/contact"
//                 className="group relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 text-gray-900 font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                 <span className="relative flex items-center gap-4">
//                   NOUS REJOINDRE <Users className="group-hover:scale-110 transition-transform" />
//                 </span>
//               </Link>
//               <Link
//                 to="/galerie"
//                 className="group relative border-2 border-white hover:bg-white/10 text-white font-bold px-12 py-6 rounded-2xl text-xl backdrop-blur-xl transition-all hover:scale-105 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-bambe-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <span className="relative flex items-center gap-4">
//                   VIVRE L'EXPÉRIENCE <Eye className="group-hover:scale-110 transition-transform" />
//                 </span>
//               </Link>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.6 }}
//               className="mt-16 pt-16 border-t border-white/20"
//             >
//               <div className="flex flex-col md:flex-row items-center justify-center gap-8">
//                 <div className="relative">
//                   <div className="w-24 h-24 bg-white rounded-full p-4 shadow-2xl">
//                     <img
//                       src="/bambelogo1.jpg"
//                       alt="Logo AS Bambé"
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </div>
//                 <div className="text-center md:text-left">
//                   <p className="text-3xl font-black text-white mb-2">AS BAMBÉ DE MOUNDOU</p>
//                   <p className="text-xl text-yellow-300 mb-4">L'ÉLAN VERT DU TCHAD MÉRIDIONAL</p>
//                   <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
//                     <div className="flex items-center gap-2">
//                       <MapPin size={18} />
//                       <span>Stade Municipal, Moundou</span>
//                     </div>
//                     <div className="hidden sm:block h-4 w-px bg-white/30" />
//                     <div className="flex items-center gap-2">
//                       <Calendar size={18} />
//                       <span>Fondé en 2017</span>
//                     </div>
//                     <div className="hidden sm:block h-4 w-px bg-white/30" />
//                     <div className="flex items-center gap-2">
//                       <Heart size={18} />
//                       <span>Communauté active</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 1 }}
//                 className="mt-12 max-w-3xl mx-auto"
//               >
//                 <p className="text-xl italic text-white/70">
//                   "Le football est plus qu'un jeu. C'est une passion qui unit, une histoire qui se construit, 
//                   une fierté qui grandit. Ensemble, écrivons le prochain chapitre."
//                 </p>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;







































































































































































































































// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Trophy, Users, Calendar, TrendingUp, ArrowRight, Star, MapPin, Heart, Target, Zap, Shield, Award, Flame, Crown, Eye, TargetIcon } from 'lucide-react';

// const Home = () => {
//   // Données réelles et puissantes basées sur recherches 2025
//   const highlights = [
//     {
//       icon: <Trophy className="text-yellow-500" size={32} />,
//       title: "Représentation internationale",
//       description: "Seule équipe tchadienne au tournoi FOU de FOOT 2024 au Cameroun",
//       color: "from-yellow-50 to-yellow-100",
//       stat: "100%",
//       statLabel: "Fierté nationale",
//       link: "/article/performance-historique"
//     },
//     {
//       icon: <Users className="text-bambe-600" size={32} />,
//       title: "Fierté de Moundou",
//       description: "Club emblématique du Logone Occidental, basé au Stade Municipal",
//       color: "from-blue-50 to-blue-100",
//       stat: "10K+",
//       statLabel: "Supporters passionnés",
//       link: "/club"
//     },
//     {
//       icon: <Target className="text-green-500" size={32} />,
//       title: "Ancré dans le sud",
//       description: "Représentant passionné du football tchadien méridional",
//       color: "from-green-50 to-green-100",
//       stat: "15+",
//       statLabel: "Jeunes formés",
//       link: "/article/progression-constante"
//     },
//     {
//       icon: <Heart className="text-red-500" size={32} />,
//       title: "Engagement communautaire",
//       description: "Formation de jeunes talents et promotion du sport local",
//       color: "from-red-50 to-red-100",
//       stat: "7",
//       statLabel: "Villes impactées",
//       link: "/article/vision-2026"
//     }
//   ];

//   // Section Nos Batailles - CONTENU CONCRET ET ACCROCHEUR
//   const battles = [
//     {
//       id: 1,
//       title: "Tournoi FOU de FOOT 2024",
//       date: "Août 2024",
//       location: "Garoua, Cameroun",
//       result: "Performance historique",
//       description: "Première équipe tchadienne à participer à ce prestigieux tournoi régional",
//       highlights: [
//         "Affrontement mémorable contre Gazelle FA",
//         "Expérience internationale pour nos jeunes",
//         "Visibilité accrue pour le football tchadien"
//       ],
//       image: "/bambe1.jpeg",
//       badge: "🌟 INTERNATIONAL",
//       link: "/article/performance-historique"
//     },
//     {
//       id: 2,
//       title: "Saison 2024-2025 - Ligue Provinciale",
//       date: "Octobre 2024 - Juin 2025",
//       location: "Logone Occidental, Tchad",
//       result: "Progression constante",
//       description: "Une saison de développement et de consolidation face aux meilleurs clubs de la région",
//       highlights: [
//         "Confrontations contre Djarabé FC (champion)",
//         "Matchs serrés contre Educat FC",
//         "Progression visible de l'équipe"
//       ],
//       image: "/bambe2.jpeg",
//       badge: "⚔️ COMBATIVITÉ",
//       link: "/article/progression-constante"
//     },
//     {
//       id: 3,
//       title: "Préparation saison 2026",
//       date: "En cours",
//       location: "Stade Municipal de Moundou",
//       result: "Ambition maximale",
//       description: "Entraînements intensifs et recrutement stratégique pour la prochaine saison",
//       highlights: [
//         "Renforcement de l'effectif",
//         "Amélioration des installations",
//         "Nouveaux partenariats en cours"
//       ],
//       image: "/bambe5.jpeg",
//       badge: "🚀 PROJET",
//       link: "/article/ambition-maximale"
//     }
//   ];

//   // Section Actualités améliorée
//   const latestNews = [
//     {
//       id: 1,
//       title: "AS Bambé brille au tournoi FOU de FOOT 2024 au Cameroun",
//       date: "Août 2024",
//       excerpt: "Unique représentant du Tchad, l'AS Bambé a marqué les esprits à Garoua face à Gazelle FA et d'autres clubs camerounais. Une expérience internationale inoubliable pour nos jeunes talents.",
//       category: "International",
//       image: "/bambe1.jpeg",
//       readTime: "3 min",
//       highlight: true,
//       link: "/article/performance-historique"
//     },
//     {
//       id: 2,
//       title: "Vision 2026 : Un nouveau chapitre pour l'AS Bambé",
//       date: "Décembre 2025",
//       excerpt: "Le club dévoile son ambitieux plan de développement sur 3 ans : formation des jeunes, modernisation des infrastructures et renforcement de l'équipe première.",
//       category: "Stratégie",
//       image: "/bambe5.jpeg",
//       readTime: "4 min",
//       highlight: true,
//       link: "/article/vision-2026"
//     },
//     {
//       id: 3,
//       title: "Rangar Masra Abel : Le leader visionnaire",
//       date: "2025",
//       excerpt: "Portrait du président qui insuffle une nouvelle dynamique au club. Rencontre exclusive avec l'homme qui redéfinit l'avenir du football à Moundou.",
//       category: "Portrait",
//       image: "/president1.jpeg",
//       readTime: "5 min",
//       highlight: true,
//       link: "/article/rangar-masra-abel"
//     }
//   ];

//   const stats = [
//     { number: "8", label: "Années d'existence", icon: <Calendar className="text-bambe-600" /> },
//     { number: "45+", label: "Joueurs formés", icon: <Users className="text-green-600" /> },
//     { number: "3", label: "Compétitions nationales", icon: <Trophy className="text-yellow-600" /> },
//     { number: "1", label: "Représentation internationale", icon: <Star className="text-red-600" /> }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-bambe-900/90 via-bambe-700/80 to-bambe-600/70 z-10" />
        
//         <div className="absolute inset-0">
//           <img
//             src="/bambe11.webp"
//             alt="AS Bambé de Moundou - Équipe et supporters"
//             className="w-full h-full object-cover"
//             loading="eager"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />
//         </div>

//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center"
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20"
//               >
//                 <img
//                   src="/bambelogo1.jpg"
//                   alt="Logo AS Bambé"
//                   className="w-8 h-8 rounded-full object-cover"
//                 />
//                 <span className="text-white font-semibold text-sm sm:text-base">Club Officiel depuis 2017</span>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight"
//               >
//                 <span className="block">AS BAMBÉ</span>
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   className="block text-yellow-300 mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
//                 >
//                   MOUNDOU
//                 </motion.span>
//               </motion.h1>

//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "120px" }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//                 className="h-1 bg-gradient-to-r from-yellow-400 to-bambe-500 mx-auto mb-6 sm:mb-8 rounded-full"
//               />

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 font-medium leading-relaxed"
//               >
//                 La fierté du football tchadien méridional
//                 <span className="block mt-2 text-base sm:text-lg text-yellow-200/90">
//                   Plus qu'un club, une légende en construction
//                 </span>
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//               >
//                 <Link
//                   to="/actualites"
//                   className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold px-8 py-4 rounded-xl sm:rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px] transform hover:scale-105"
//                 >
//                   <span>Voir les actualités</span>
//                   <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//                 </Link>
//                 <Link
//                   to="/club"
//                   className="group border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl sm:rounded-2xl text-lg backdrop-blur-sm transition-all w-full sm:w-auto min-w-[200px] transform hover:scale-105"
//                 >
//                   <span>Découvrir le club</span>
//                 </Link>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2 }}
//               className="mt-12 sm:mt-16 lg:mt-20 px-4"
//             >
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
//                 {stats.map((stat, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 1.4 + index * 0.1 }}
//                     className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-center border border-white/20"
//                   >
//                     <div className="flex justify-center mb-2">
//                       {stat.icon}
//                     </div>
//                     <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">{stat.number}</div>
//                     <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <div className="text-white/70 text-sm flex flex-col items-center">
//             <span className="mb-2">Explorer</span>
//             <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start pt-2">
//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//                 className="w-1 h-3 bg-white rounded-full"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Section Pourquoi AS Bambé ? */}
//       <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="text-center mb-20"
//           >
//             <div className="inline-flex items-center gap-3 bg-gradient-to-r from-bambe-50 to-yellow-50 rounded-full px-6 py-3 mb-6 border border-bambe-100">
//               <Shield className="text-bambe-600" size={20} />
//               <span className="text-bambe-700 font-semibold">LA RÉFÉRENCE</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-bambe-600 via-yellow-500 to-bambe-600 bg-clip-text text-transparent">
//                 Pourquoi l'AS Bambé marque l'histoire ?
//               </span>
//             </h2>
//             <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Nous ne jouons pas seulement au football. Nous écrivons une légende,
//               nous formons des champions, nous construisons l'avenir du Tchad.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {highlights.map((item, index) => (
//               <Link to={item.link} key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50, scale: 0.9 }}
//                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                   transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
//                   whileHover={{
//                     y: -20,
//                     scale: 1.05,
//                     boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
//                   }}
//                   viewport={{ once: true }}
//                   className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 relative overflow-hidden group cursor-pointer`}
//                 >
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:translate-x-8 transition-transform duration-700" />

//                   <div className="relative z-10">
//                     <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
//                       {item.icon}
//                     </div>
//                     <div className="flex items-baseline gap-4 mb-4">
//                       <div className="text-4xl font-black text-gray-900">{item.stat}</div>
//                       <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
//                         {item.statLabel}
//                       </div>
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-bambe-700 transition-colors">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
//                       {item.description}
//                     </p>
//                     <div className="mt-6 flex items-center text-bambe-600 font-medium">
//                       <span className="group-hover:underline">En savoir plus</span>
//                       <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
//                     </div>
//                   </div>
//                 </motion.div>
//               </Link>
//             ))}
//           </div>

//           {/* Section Président - MISE EN VALEUR */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-24 rounded-4xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-gray-200"
//           >
//             <div className="grid md:grid-cols-3 gap-0">
//               {/* Photo du président en grand format */}
//               <div className="relative h-80 md:h-auto md:col-span-1">
//                 <img
//                   src="/president1.jpeg"
//                   alt="Rangar Masra Abel - Président de l'AS Bambé"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
//                     <Crown className="text-yellow-500" size={18} />
//                     <span className="font-bold text-gray-800">PRÉSIDENT</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Contenu Président */}
//               <div className="bg-gradient-to-br from-bambe-800 to-bambe-900 p-8 md:p-12 text-white md:col-span-2">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-yellow-300">
//                     <img 
//                       src="/president1.jpeg" 
//                       alt="Rangar Masra Abel" 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl md:text-3xl font-bold">Rangar Masra Abel</h3>
//                     <p className="text-yellow-300 font-medium">Président & Visionnaire</p>
//                   </div>
//                 </div>

//                 <blockquote className="text-xl md:text-2xl font-bold mb-6 leading-relaxed italic">
//                   "Mon ambition est de faire de l'AS Bambé une référence du football tchadien. 
//                   Nous construisons plus qu'une équipe, nous bâtissons une institution."
//                 </blockquote>

//                 <div className="space-y-4 mb-8">
//                   <div className="flex items-start gap-3">
//                     <TargetIcon className="text-yellow-300 mt-1 flex-shrink-0" size={20} />
//                     <p className="text-white/90">Stratégie de développement 2024-2027 en cours</p>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <Users className="text-yellow-300 mt-1 flex-shrink-0" size={20} />
//                     <p className="text-white/90">Focus sur la formation des jeunes talents locaux</p>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <Eye className="text-yellow-300 mt-1 flex-shrink-0" size={20} />
//                     <p className="text-white/90">Ouverture vers des partenariats internationaux</p>
//                   </div>
//                 </div>

//                 <Link
//                   to="/article/rangar-masra-abel"
//                   className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold px-6 py-3 rounded-lg transition-all hover:scale-105"
//                 >
//                   <span>Découvrir son parcours complet</span>
//                   <ArrowRight size={18} />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section NOS BATAILLES - COMPLÈTE ET ACCROCHEUSE */}
//       <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="mb-16"
//           >
//             <div className="text-center mb-12">
//               <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-red-100 rounded-full px-6 py-3 mb-6">
//                 <Flame className="text-red-500" size={24} />
//                 <span className="text-red-700 font-bold text-lg">CHRONIQUES DU TERRAIN</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
//                 <span className="bg-gradient-to-r from-gray-900 via-red-600 to-bambe-700 bg-clip-text text-transparent">
//                   NOS ÉPOPÉES
//                 </span>
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Retour sur les moments forts qui ont façonné l'histoire récente du club
//               </p>
//             </div>

//             {/* Grille des batailles */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {battles.map((battle, index) => (
//                 <motion.div
//                   key={battle.id}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.15 }}
//                   whileHover={{ y: -10 }}
//                   viewport={{ once: true }}
//                   className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 group"
//                 >
//                   {/* Image de la bataille */}
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={battle.image}
//                       alt={battle.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                     <div className="absolute top-4 right-4">
//                       <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800">
//                         {battle.badge}
//                       </span>
//                     </div>
//                     <div className="absolute bottom-4 left-4">
//                       <span className="text-white font-bold text-lg">{battle.title}</span>
//                       <div className="flex items-center gap-2 mt-1">
//                         <MapPin size={14} className="text-yellow-300" />
//                         <span className="text-white/90 text-sm">{battle.location}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Contenu de la bataille */}
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <div>
//                         <span className="text-2xl font-bold text-gray-900">{battle.result}</span>
//                         <p className="text-sm text-gray-500 mt-1">{battle.date}</p>
//                       </div>
//                     </div>

//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {battle.description}
//                     </p>

//                     {/* Points forts */}
//                     <div className="space-y-3 mb-6">
//                       {battle.highlights.map((highlight, i) => (
//                         <div key={i} className="flex items-start gap-3">
//                           <div className="w-2 h-2 bg-bambe-500 rounded-full mt-2 flex-shrink-0" />
//                           <span className="text-sm text-gray-700">{highlight}</span>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="pt-4 border-t border-gray-100">
//                       <Link
//                         to={battle.link}
//                         className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-semibold text-sm group/link"
//                       >
//                         <span className="relative">
//                           Voir les détails complets
//                           <span className="absolute -bottom-1 left-0 w-0 group-hover/link:w-full h-0.5 bg-bambe-600 transition-all duration-300" />
//                         </span>
//                         <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} />
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Section supplémentaire - L'avenir */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mt-16 bg-gradient-to-r from-bambe-50 to-yellow-50 rounded-3xl p-8 md:p-12"
//             >
//               <div className="grid md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-4">Et maintenant ?</h3>
//                   <p className="text-gray-700 mb-6 leading-relaxed">
//                     Forts de ces expériences, nous préparons activement la saison 2026 avec 
//                     des objectifs ambitieux et une équipe renforcée.
//                   </p>
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-bambe-100 rounded-full flex items-center justify-center">
//                         <Trophy className="text-bambe-600" size={16} />
//                       </div>
//                       <span className="font-medium">Objectif montée en division</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-bambe-100 rounded-full flex items-center justify-center">
//                         <Users className="text-bambe-600" size={16} />
//                       </div>
//                       <span className="font-medium">Formation de 10 nouveaux jeunes talents</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-bambe-100 rounded-full flex items-center justify-center">
//                         <Target className="text-bambe-600" size={16} />
//                       </div>
//                       <span className="font-medium">Participation à un tournoi international</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="relative">
//                   <div className="rounded-2xl overflow-hidden shadow-xl">
//                     <img
//                       src="/bambe6.jpeg"
//                       alt="Préparation AS Bambé"
//                       className="w-full h-64 object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <p className="text-white font-bold text-lg">L'aventure continue...</p>
//                       <p className="text-white/90 text-sm">Préparation intensive au Stade Municipal</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section Actualités améliorée */}
//       <section className="py-24 bg-white relative">
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex justify-between items-center mb-12">
//               <div>
//                 <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-6 py-3 mb-4">
//                   <TrendingUp className="text-blue-500" size={24} />
//                   <span className="text-blue-700 font-bold text-lg">L'ACTUALITÉ VIVANTE</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-black text-gray-900 flex items-center gap-4">
//                   <Target className="text-bambe-600" size={48} />
//                   <span className="bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
//                     AU CŒUR DE L'ACTION
//                   </span>
//                 </h2>
//               </div>
//               <Link
//                 to="/actualites"
//                 className="group relative bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
//               >
//                 <span className="relative">TOUTE L'ACTUALITÉ</span>
//                 <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" size={20} />
//               </Link>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Actualité principale */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-yellow-200"
//               >
//                 <div className="relative h-72 overflow-hidden">
//                   <img
//                     src="/bambe1.jpeg"
//                     alt="AS Bambé au Cameroun"
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 rounded-full text-sm font-bold flex items-center gap-2">
//                       <Star size={14} />
//                       ACTUALITÉ PHARE
//                     </span>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                 </div>

//                 <div className="p-8">
//                   <div className="flex justify-between items-center mb-6">
//                     <span className="px-4 py-2 bg-bambe-100 text-bambe-700 rounded-full text-sm font-bold">
//                       International
//                     </span>
//                     <div className="flex items-center gap-4">
//                       <span className="text-sm text-gray-500">⏱️ 12 min</span>
//                       <span className="text-sm text-gray-500">Août 2024</span>
//                     </div>
//                   </div>

//                   <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-tight">
//                     AS Bambé brille au tournoi FOU de FOOT 2024 au Cameroun
//                   </h3>

//                   <p className="text-gray-600 mb-8 leading-relaxed text-lg">
//                     Unique représentant du Tchad, l'AS Bambé a marqué les esprits à Garoua face à Gazelle FA 
//                     et d'autres clubs camerounais. Une expérience internationale inoubliable pour nos jeunes talents.
//                   </p>

//                   <Link
//                     to="/article/performance-historique"
//                     className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-bold text-lg group/link"
//                   >
//                     <span className="relative">
//                       LIRE LE RÉCIT COMPLET
//                       <span className="absolute -bottom-1 left-0 w-0 group-hover/link:w-full h-0.5 bg-bambe-600 transition-all duration-300" />
//                     </span>
//                     <ArrowRight className="ml-3 group-hover/link:translate-x-3 transition-transform duration-300" size={20} />
//                   </Link>
//                 </div>
//               </motion.div>

//               {/* Autres actualités */}
//               <div className="space-y-8">
//                 {latestNews.slice(1).map((news, i) => (
//                   <motion.div
//                     key={news.id}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.15 }}
//                     whileHover={{ scale: 1.02, y: -5 }}
//                     viewport={{ once: true }}
//                     className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
//                   >
//                     <div className="relative h-56 overflow-hidden">
//                       <img
//                         src={news.image}
//                         alt={news.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                       <div className="absolute bottom-4 left-6 flex items-center gap-4">
//                         <span className="px-3 py-1 bg-bambe-600 text-white rounded-full text-xs font-bold">
//                           {news.category}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="p-6">
//                       <div className="flex justify-between items-center mb-4">
//                         <h3 className="text-xl font-bold text-gray-900 group-hover:text-bambe-600 transition-colors">
//                           {news.title}
//                         </h3>
//                         <span className="text-sm text-gray-500">{news.date}</span>
//                       </div>

//                       <p className="text-gray-600 mb-6 leading-relaxed">
//                         {news.excerpt}
//                       </p>

//                       <Link
//                         to={news.link}
//                         className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-semibold group/link2"
//                       >
//                         <span className="relative">
//                           Lire l'article complet
//                           <span className="absolute -bottom-1 left-0 w-0 group-hover/link2:w-full h-0.5 bg-bambe-600 transition-all duration-300" />
//                         </span>
//                         <ArrowRight className="ml-2 group-hover/link2:translate-x-1 transition-transform" size={16} />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Galerie rapide */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="mt-16"
//             >
//               <div className="flex items-center justify-between mb-8">
//                 <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
//                   <Heart className="text-red-500" size={24} />
//                   INSTANTS D'ÉTERNITÉ
//                 </h3>
//                 <span className="text-bambe-600 font-bold text-sm bg-bambe-50 px-4 py-2 rounded-full">
//                   50+ PHOTOS
//                 </span>
//               </div>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {['/bambe7.jpeg', '/bambe8.jpeg', '/bambe9.jpeg', '/bambe5.jpeg'].map((img, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ scale: 1.05 }}
//                     className="relative rounded-2xl overflow-hidden group cursor-pointer h-48"
//                   >
//                     <img
//                       src={img}
//                       alt={`AS Bambé moment ${i + 1}`}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       Voir
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Call to Action Final */}
//       <section className="relative py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-bambe-900 via-bambe-800 to-bambe-900" />
        
//         <div className="absolute inset-0">
//           {[...Array(15)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 opacity: [0, 1, 0],
//                 scale: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>

//         <motion.div
//           className="absolute inset-0 opacity-10"
//           initial={{ scale: 1.2 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 3 }}
//         >
//           <img
//             src="/bambe10jpeg"
//             alt="AS Bambé supporters"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         <div className="container mx-auto px-6 text-center relative z-20">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="max-w-5xl mx-auto"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: -30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-500/20 to-bambe-600/20 backdrop-blur-xl rounded-full px-8 py-4 mb-12 border border-white/30"
//             >
//               <Trophy className="text-yellow-300" size={24} />
//               <span className="text-yellow-300 font-bold text-xl">REJOIGNEZ LA LÉGENDE</span>
//               <Star className="text-yellow-300" size={24} />
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 leading-none"
//             >
//               <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
//                 VOTRE HISTOIRE COMMENCE ICI
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="text-2xl md:text-3xl mb-16 max-w-4xl mx-auto text-white/90 leading-relaxed"
//             >
//               Que vous soyez joueur, supporter, partenaire ou simplement passionné de football,
//               votre place est avec nous dans cette aventure extraordinaire.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//               className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
//             >
//               <Link
//                 to="/contact"
//                 className="group relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 text-gray-900 font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                 <span className="relative flex items-center gap-4">
//                   NOUS REJOINDRE <Users className="group-hover:scale-110 transition-transform" />
//                 </span>
//               </Link>
//               <Link
//                 to="/galerie"
//                 className="group relative border-2 border-white hover:bg-white/10 text-white font-bold px-12 py-6 rounded-2xl text-xl backdrop-blur-xl transition-all hover:scale-105 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-bambe-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <span className="relative flex items-center gap-4">
//                   VIVRE L'EXPÉRIENCE <Eye className="group-hover:scale-110 transition-transform" />
//                 </span>
//               </Link>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.6 }}
//               className="mt-16 pt-16 border-t border-white/20"
//             >
//               <div className="flex flex-col md:flex-row items-center justify-center gap-8">
//                 <div className="relative">
//                   <div className="w-24 h-24 bg-white rounded-full p-4 shadow-2xl">
//                     <img
//                       src="/bambelogo1.jpg"
//                       alt="Logo AS Bambé"
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </div>
//                 <div className="text-center md:text-left">
//                   <p className="text-3xl font-black text-white mb-2">AS BAMBÉ DE MOUNDOU</p>
//                   <p className="text-xl text-yellow-300 mb-4">L'ÉLAN VERT DU TCHAD MÉRIDIONAL</p>
//                   <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
//                     <div className="flex items-center gap-2">
//                       <MapPin size={18} />
//                       <span>Stade Municipal, Moundou</span>
//                     </div>
//                     <div className="hidden sm:block h-4 w-px bg-white/30" />
//                     <div className="flex items-center gap-2">
//                       <Calendar size={18} />
//                       <span>Fondé en 2017</span>
//                     </div>
//                     <div className="hidden sm:block h-4 w-px bg-white/30" />
//                     <div className="flex items-center gap-2">
//                       <Heart size={18} />
//                       <span>Communauté active</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 1 }}
//                 className="mt-12 max-w-3xl mx-auto"
//               >
//                 <p className="text-xl italic text-white/70">
//                   "Le football est plus qu'un jeu. C'est une passion qui unit, une histoire qui se construit, 
//                   une fierté qui grandit. Ensemble, écrivons le prochain chapitre."
//                 </p>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;














































































































































































































































































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
      image: "/bambe1.jpeg",
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
      image: "/bambe2.jpeg",
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
      image: "/bambe5.jpeg",
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
      image: "/bambe1.jpeg",
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
      
{/*       
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bambe-900/90 via-bambe-700/80 to-bambe-600/70 z-10" />
        
        <div className="absolute inset-0">
          <img
            src="/bambe11.webp"
            alt="AS Bambé de Moundou - Équipe et supporters"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/20"
              >
                <img
                  src="/bambelogo1.jpg"
                  alt="Logo AS Bambé"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                />
                <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Club Officiel depuis 2017</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-3 sm:mb-4 md:mb-6 leading-tight"
              >
                <span className="block">AS BAMBÉ</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="block text-yellow-300 mt-1 sm:mt-2 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                >
                  MOUNDOU
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px sm:100px md:120px" }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-yellow-400 to-bambe-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 font-medium leading-relaxed"
              >
                La fierté du football tchadien méridional
                <span className="block mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-yellow-200/90">
                  Plus qu'un club, une légende en construction
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              >
                <Link
                  to="/actualites"
                  className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-w-[180px] sm:min-w-[200px] transform hover:scale-105"
                >
                  <span>Voir les actualités</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
                <Link
                  to="/club"
                  className="group border-2 border-white hover:bg-white/10 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg backdrop-blur-sm transition-all w-full sm:w-auto min-w-[180px] sm:min-w-[200px] transform hover:scale-105"
                >
                  <span>Découvrir le club</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20 px-2 sm:px-4"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center border border-white/20"
                  >
                    <div className="flex justify-center mb-1 sm:mb-2">
                      <div className="scale-75 sm:scale-90 md:scale-100">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300 mb-0.5 sm:mb-1">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="text-white/70 text-xs sm:text-sm flex flex-col items-center">
            <span className="mb-1 sm:mb-2">Explorer</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center items-start pt-1 sm:pt-2">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 sm:h-3 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section> */}



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
        <span className="text-white font-semibold">Club Officiel depuis 2017</span>
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
                      <span>Fondé en 2017</span>
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