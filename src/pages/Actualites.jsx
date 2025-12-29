// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Calendar, User, Tag, ChevronRight, Search, Filter, TrendingUp, Clock, Eye, MessageCircle, Share2, Bookmark, Newspaper } from 'lucide-react';
// import { useEffect } from 'react';

// const Actualites = () => {
//   const [activeCategory, setActiveCategory] = useState('toutes');
//   const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() =>{
//       window.scrollTo(0,0)
//      },[])

//   // Catégories d'actualités
//   const categories = [
//     { id: 'toutes', label: 'Toutes les actualités', count: 24 },
//     { id: 'matchs', label: 'Matchs & Résultats', count: 8 },
//     { id: 'club', label: 'Vie du Club', count: 6 },
//     { id: 'transferts', label: 'Transferts', count: 3 },
//     { id: 'jeunes', label: 'Centre de Formation', count: 4 },
//     { id: 'interviews', label: 'Interviews', count: 3 }
//   ];

//   // Articles d'actualités
//   const articles = [
//     {
//       id: 1,
//       title: "Victoire historique 3-0 contre l'AS CotonTchad",
//       excerpt: "Les Verts de Moundou réalisent une performance exceptionnelle face au leader du championnat lors de la 14ème journée.",
//       content: "Dans un match très attendu au Stade Municipal de Moundou, l'AS Bambé a dominé l'AS CotonTchad sur le score de 3-0. Issa Moussa a ouvert le score à la 23ème minute, suivi d'un doublé de Haroun Djibrine en seconde mi-temps. Une victoire qui replace l'équipe dans la course au titre...",
//       category: "matchs",
//       date: "10 Mars 2024",
//       author: "Redaction ASB",
//       readTime: "5 min",
//       views: 1245,
//       comments: 42,
//       image: "/images/actualites/victoire-coton.jpg",
//       featured: true,
//       tags: ["Victoire", "Championnat", "Performance"]
//     },
//     {
//       id: 2,
//       title: "Nouveau partenariat avec la Brasserie du Logone",
//       excerpt: "Le club annonce un partenariat stratégique pour la saison 2024 avec la Brasserie du Logone.",
//       content: "L'AS Bambé est fier d'annoncer la signature d'un partenariat de trois ans avec la Brasserie du Logone. Ce partenariat permettra au club de renforcer ses infrastructures et d'améliorer les conditions d'entraînement des équipes jeunes...",
//       category: "club",
//       date: "5 Mars 2024",
//       author: "Direction Communication",
//       readTime: "3 min",
//       views: 892,
//       comments: 18,
//       image: "/images/actualites/partenariat.jpg",
//       featured: true,
//       tags: ["Partenariat", "Sponsor", "Développement"]
//     },
//     {
//       id: 3,
//       title: "Stage de pré-saison réussi au Cameroun",
//       excerpt: "L'équipe s'est rendue au Cameroun pour un stage intensif de préparation de deux semaines.",
//       content: "L'AS Bambé a effectué un stage de préparation au complexe sportif de Yaoundé. Sous la direction de l'entraîneur Khalil Ibrahim, les joueurs ont enchaîné les séances d'entraînement physique et tactique. Le stage s'est conclu par deux matchs amicaux remportés face à des formations locales...",
//       category: "club",
//       date: "28 Février 2024",
//       author: "Service Presse",
//       readTime: "4 min",
//       views: 756,
//       comments: 25,
//       image: "/images/actualites/stage-cameroun.jpg",
//       featured: false,
//       tags: ["Préparation", "Stage", "Cameroun"]
//     },
//     {
//       id: 4,
//       title: "Signature du jeune espoir Mahamat Ali",
//       excerpt: "Le club annonce la signature de Mahamat Ali, 17 ans, considéré comme l'un des plus grands espoirs du football tchadien.",
//       content: "L'AS Bambé continue de miser sur la jeunesse avec la signature de Mahamat Ali, attaquant de 17 ans formé au centre de formation du club. Le jeune joueur a signé son premier contrat professionnel d'une durée de trois ans. 'C'est un rêve qui se réalise', a déclaré le jeune prodige...",
//       category: "transferts",
//       date: "20 Février 2024",
//       author: "Service Presse",
//       readTime: "3 min",
//       views: 1103,
//       comments: 36,
//       image: "/images/actualites/signature-jeune.jpg",
//       featured: false,
//       tags: ["Signature", "Jeune", "Espoir"]
//     },
//     {
//       id: 5,
//       title: "Interview exclusive du capitaine Abderamane Ali",
//       excerpt: "Le capitaine des Verts se confie sur les objectifs de la saison et l'ambiance dans le vestiaire.",
//       content: "Dans une interview exclusive, Abderamane Ali, capitaine de l'AS Bambé, revient sur le début de saison, les objectifs du club et la cohésion du groupe. 'Nous avons une équipe soudée et ambitieuse. Chaque joueur sait ce qu'il a à faire pour atteindre nos objectifs'...",
//       category: "interviews",
//       date: "15 Février 2024",
//       author: "Journal ASB",
//       readTime: "7 min",
//       views: 1542,
//       comments: 67,
//       image: "/images/actualites/interview-capitaine.jpg",
//       featured: false,
//       tags: ["Interview", "Capitaine", "Exclusivité"]
//     },
//     {
//       id: 6,
//       title: "L'équipe U19 remporte le tournoi régional",
//       excerpt: "Les jeunes de l'AS Bambé s'imposent en finale du tournoi U19 du Logone Occidental.",
//       content: "L'équipe U19 de l'AS Bambé a remporté le tournoi régional du Logone Occidental après une finale passionnante face à l'AS Moundou. Menés 1-0 à la mi-temps, les jeunes Verts ont retourné la situation en seconde période pour s'imposer 2-1. Une belle démonstration du travail effectué au centre de formation...",
//       category: "jeunes",
//       date: "10 Février 2024",
//       author: "Centre Formation",
//       readTime: "4 min",
//       views: 632,
//       comments: 29,
//       image: "/images/actualites/victoire-u19.jpg",
//       featured: false,
//       tags: ["Jeunes", "Victoire", "Tournoi"]
//     },
//     {
//       id: 7,
//       title: "Rénovation des vestiaires du stade",
//       excerpt: "Le club inaugure les nouveaux vestiaires modernisés du Stade Municipal.",
//       content: "Après plusieurs mois de travaux, l'AS Bambé inaugure les vestiaires entièrement rénovés du Stade Municipal. Equipés des dernières technologies, ces nouveaux espaces offriront aux joueurs des conditions optimales de préparation et de récupération. Le président du club a salué cet investissement important pour l'avenir...",
//       category: "club",
//       date: "5 Février 2024",
//       author: "Direction Projet",
//       readTime: "3 min",
//       views: 587,
//       comments: 14,
//       image: "/images/actualites/vestiaires.jpg",
//       featured: false,
//       tags: ["Infrastructures", "Rénovation", "Stade"]
//     },
//     {
//       id: 8,
//       title: "Premier clean sheet de la saison pour Mahamat Nour",
//       excerpt: "Le gardien titulaire réalise sa première feuille blanche de la saison face au Renaissance FC.",
//       content: "Mahamat Nour, gardien de l'AS Bambé, a réalisé une performance remarquable lors du match nul 0-0 face au Renaissance FC. L'arrêt décisif à la 89ème minute a préservé le point du match et offert au gardien son premier clean sheet de la saison. 'C'était important pour la confiance du groupe', a déclaré l'intéressé...",
//       category: "matchs",
//       date: "1 Février 2024",
//       author: "Service Presse",
//       readTime: "3 min",
//       views: 721,
//       comments: 21,
//       image: "/images/actualites/clean-sheet.jpg",
//       featured: false,
//       tags: ["Gardien", "Clean Sheet", "Performance"]
//     }
//   ];

//   // Articles populaires
//   const popularArticles = [
//     { id: 1, title: "La montée en puissance des jeunes talents", views: 1842 },
//     { id: 2, title: "Analyse tactique de la victoire contre CotonTchad", views: 1567 },
//     { id: 3, title: "Les coulisses de la préparation physique", views: 1321 },
//     { id: 4, title: "Interview du nouvel entraîneur adjoint", views: 1189 }
//   ];

//   // Filtrage des articles
//   const filteredArticles = articles.filter(article => {
//     const matchesCategory = activeCategory === 'toutes' || article.category === activeCategory;
//     const matchesSearch = searchQuery === '' || 
//       article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
//     return matchesCategory && matchesSearch;
//   });

//   const featuredArticles = filteredArticles.filter(article => article.featured);
//   const regularArticles = filteredArticles.filter(article => !article.featured);

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}

//       <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
//   {/* Background image pour la section Actualités */}
//   <div 
//     className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
//     style={{ backgroundImage: `url('/ballon2.jpg')` }}
//   >
//     {/* Overlay pour améliorer la lisibilité */}
//     <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-700/80 to-blue-500/70 z-10"></div>
    
//     {/* Effet de texture subtile */}
//     <div className="absolute inset-0 opacity-20">
//       <div className="absolute inset-0" style={{
//         backgroundImage: `radial-gradient(circle at 25% 35%, rgba(255,255,255,0.12) 0%, transparent 55%),
//                          radial-gradient(circle at 75% 65%, rgba(255,255,255,0.12) 0%, transparent 55%)`
//       }}></div>
//     </div>
//   </div>
  
//   <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="max-w-5xl mx-auto text-center"
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/30 shadow-lg"
//       >
//         <Newspaper size={18} className="text-yellow-300" />
//         <span className="font-medium text-white">Actualités du Club</span>
//       </motion.div>
      
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
//       >
//         Les Dernières Nouvelles
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="block text-yellow-300 mt-2 text-2xl md:text-3xl lg:text-4xl"
//         >
//           des Verts de Moundou
//         </motion.span>
//       </motion.h1>
      
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//         className="text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4 font-medium"
//       >
//         Suivez toute l'actualité de l'AS Bambé : matchs, transferts, interviews 
//         et coulisses du club.
//       </motion.p>
      
//       {/* Barre de recherche améliorée */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8 }}
//         className="max-w-2xl mx-auto px-4"
//       >
//         <div className="relative group">
//           <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 group-hover:text-white transition-colors cursor-pointer hover:scale-110" size={20} />
//         </div>
        
//         {/* Tags de filtrage rapide */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="flex flex-wrap gap-2 justify-center mt-4"
//         >
//           {['Matchs', 'Transferts', 'Interviews', 'Coulisses', 'Résultats', 'Classement'].map((tag, index) => (
//             <button
//               key={index}
//               onClick={() => setSearchQuery(tag)}
//               className="px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
//             >
//               #{tag}
//             </button>
//           ))}
//         </motion.div>
        
//         {/* Stats des actualités */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto mt-6 sm:mt-8"
//         >
//           {[
//             { value: "48", label: "Articles", icon: "📰" },
//             { value: "12", label: "Catégories", icon: "🏷️" },
//             { value: "24/7", label: "Mise à jour", icon: "⚡" }
//           ].map((stat, index) => (
//             <div 
//               key={index} 
//               className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20"
//             >
//               <div className="text-xl sm:text-2xl mb-1">{stat.icon}</div>
//               <div className="text-lg sm:text-xl font-bold text-yellow-300">{stat.value}</div>
//               <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   </div>
// </section>

//       {/* Catégories */}
//       <section className="sticky top-20 z-30 bg-white shadow-sm border-b">
//         <div className="container mx-auto px-4">
//           <div className="flex overflow-x-auto py-4 space-x-2">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
//                   activeCategory === category.id
//                     ? 'bg-bambe-600 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 <span>{category.label}</span>
//                 <span className={`text-sm px-2 py-0.5 rounded-full ${
//                   activeCategory === category.id
//                     ? 'bg-white/20'
//                     : 'bg-gray-300 text-gray-700'
//                 }`}>
//                   {category.count}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Articles Principaux */}
//           <div className="lg:col-span-2">
//             {/* Articles à la Une */}
//             {featuredArticles.length > 0 && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="mb-12"
//               >
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                   <TrendingUp className="mr-3 text-bambe-600" size={24} />
//                   À la Une
//                 </h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {featuredArticles.map((article) => (
//                     <motion.article
//                       key={article.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       whileHover={{ y: -5 }}
//                       className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
//                     >
//                       <div className="relative h-48 overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                         <div className="absolute top-4 left-4">
//                           <span className="px-3 py-1 bg-bambe-600 text-white text-sm font-medium rounded-full">
//                             {article.category === 'matchs' ? 'Match' : 
//                              article.category === 'club' ? 'Club' :
//                              article.category === 'transferts' ? 'Transfert' :
//                              article.category === 'jeunes' ? 'Jeunes' : 'Interview'}
//                           </span>
//                         </div>
//                         <div className="absolute bottom-4 left-4 right-4">
//                           <h3 className="text-xl font-bold text-white line-clamp-2">
//                             {article.title}
//                           </h3>
//                         </div>
//                       </div>
                      
//                       <div className="p-6">
//                         <p className="text-gray-600 mb-4 line-clamp-2">
//                           {article.excerpt}
//                         </p>
                        
//                         <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                           <div className="flex items-center space-x-4">
//                             <span className="flex items-center">
//                               <Calendar size={14} className="mr-1" />
//                               {article.date}
//                             </span>
//                             <span className="flex items-center">
//                               <User size={14} className="mr-1" />
//                               {article.author}
//                             </span>
//                           </div>
//                           <span className="flex items-center">
//                             <Clock size={14} className="mr-1" />
//                             {article.readTime}
//                           </span>
//                         </div>
                        
//                         {/* Tags */}
//                         <div className="flex flex-wrap gap-2 mb-4">
//                           {article.tags.map((tag, index) => (
//                             <span
//                               key={index}
//                               className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
//                             >
//                               <Tag size={10} className="mr-1" />
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
                        
//                         {/* Stats */}
//                         <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                           <div className="flex items-center space-x-6 text-gray-500">
//                             <span className="flex items-center text-sm">
//                               <Eye size={14} className="mr-1" />
//                               {article.views.toLocaleString()}
//                             </span>
//                             <span className="flex items-center text-sm">
//                               <MessageCircle size={14} className="mr-1" />
//                               {article.comments}
//                             </span>
//                           </div>
                          
//                           <div className="flex items-center space-x-2">
//                             <button className="p-2 hover:bg-gray-100 rounded-full">
//                               <Bookmark size={18} className="text-gray-400" />
//                             </button>
//                             <button className="p-2 hover:bg-gray-100 rounded-full">
//                               <Share2 size={18} className="text-gray-400" />
//                             </button>
//                             <Link
//                               to={`/actualites/${article.id}`}
//                               className="flex items-center text-bambe-600 hover:text-bambe-700 font-medium"
//                             >
//                               Lire l'article
//                               <ChevronRight size={16} className="ml-1" />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.article>
//                   ))}
//                 </div>
//               </motion.div>
//             )}

//             {/* Articles Réguliers */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Toutes les Actualités
//                 <span className="text-gray-500 text-lg font-normal ml-2">
//                   ({filteredArticles.length} articles)
//                 </span>
//               </h2>
              
//               <div className="space-y-6">
//                 {regularArticles.map((article) => (
//                   <motion.article
//                     key={article.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     whileHover={{ x: 5 }}
//                     className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden"
//                   >
//                     <div className="md:flex">
//                       <div className="md:w-1/3">
//                         <div className="h-48 md:h-full bg-gray-200 relative overflow-hidden">
//                           <div className="absolute top-3 left-3">
//                             <span className="px-2 py-1 bg-bambe-600 text-white text-xs font-medium rounded">
//                               {article.category === 'matchs' ? 'Match' : 
//                                article.category === 'club' ? 'Club' :
//                                article.category === 'transferts' ? 'Transfert' :
//                                article.category === 'jeunes' ? 'Jeunes' : 'Interview'}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="md:w-2/3 p-6">
//                         <div className="flex justify-between items-start mb-3">
//                           <div>
//                             <h3 className="text-xl font-bold text-gray-900 group-hover:text-bambe-600 transition-colors mb-2">
//                               {article.title}
//                             </h3>
//                             <p className="text-gray-600 mb-4 line-clamp-2">
//                               {article.excerpt}
//                             </p>
//                           </div>
//                         </div>
                        
//                         <div className="flex flex-wrap items-center justify-between">
//                           <div className="space-y-2">
//                             <div className="flex items-center space-x-4 text-sm text-gray-500">
//                               <span className="flex items-center">
//                                 <Calendar size={12} className="mr-1" />
//                                 {article.date}
//                               </span>
//                               <span className="flex items-center">
//                                 <User size={12} className="mr-1" />
//                                 {article.author}
//                               </span>
//                               <span className="flex items-center">
//                                 <Clock size={12} className="mr-1" />
//                                 {article.readTime}
//                               </span>
//                             </div>
                            
//                             <div className="flex items-center space-x-2">
//                               {article.tags.slice(0, 2).map((tag, index) => (
//                                 <span
//                                   key={index}
//                                   className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
//                                 >
//                                   {tag}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
                          
//                           <div className="flex items-center space-x-4 mt-4 md:mt-0">
//                             <div className="flex items-center space-x-2 text-sm text-gray-500">
//                               <span className="flex items-center">
//                                 <Eye size={12} className="mr-1" />
//                                 {article.views.toLocaleString()}
//                               </span>
//                               <span className="flex items-center">
//                                 <MessageCircle size={12} className="mr-1" />
//                                 {article.comments}
//                               </span>
//                             </div>
                            
//                             <Link
//                               to={`/actualites/${article.id}`}
//                               className="flex items-center text-bambe-600 hover:text-bambe-700 font-medium text-sm"
//                             >
//                               Lire
//                               <ChevronRight size={14} className="ml-1" />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.article>
//                 ))}
//               </div>

//               {/* Pagination */}
//               {filteredArticles.length > 0 && (
//                 <div className="mt-12 flex justify-center">
//                   <nav className="flex items-center space-x-2">
//                     <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50">
//                       <ChevronRight className="transform rotate-180" size={16} />
//                     </button>
//                     {[1, 2, 3].map((page) => (
//                       <button
//                         key={page}
//                         className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium ${
//                           page === 1
//                             ? 'bg-bambe-600 text-white'
//                             : 'border border-gray-300 hover:bg-gray-50'
//                         }`}
//                       >
//                         {page}
//                       </button>
//                     ))}
//                     <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50">
//                       <ChevronRight size={16} />
//                     </button>
//                   </nav>
//                 </div>
//               )}

//               {/* Aucun résultat */}
//               {filteredArticles.length === 0 && (
//                 <div className="text-center py-12">
//                   <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
//                     <Search size={40} className="text-gray-400" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     Aucun article trouvé
//                   </h3>
//                   <p className="text-gray-600 max-w-md mx-auto">
//                     Aucun article ne correspond à votre recherche. Essayez avec d'autres mots-clés.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setSearchQuery('');
//                       setActiveCategory('toutes');
//                     }}
//                     className="mt-6 text-bambe-600 hover:text-bambe-700 font-medium"
//                   >
//                     Voir tous les articles
//                   </button>
//                 </div>
//               )}
//             </motion.div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             {/* Articles Populaires */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100"
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <TrendingUp className="mr-3 text-red-500" size={24} />
//                 Articles Populaires
//               </h3>
              
//               <div className="space-y-4">
//                 {popularArticles.map((article, index) => (
//                   <div
//                     key={article.id}
//                     className="group flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
//                   >
//                     <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
//                       {index + 1}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h4 className="text-sm font-medium text-gray-900 group-hover:text-bambe-600 line-clamp-2">
//                         {article.title}
//                       </h4>
//                       <div className="flex items-center text-xs text-gray-500 mt-1">
//                         <Eye size={10} className="mr-1" />
//                         {article.views.toLocaleString()} vues
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Newsletter */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-gradient-to-br from-bambe-600 to-bambe-700 text-white rounded-2xl shadow-lg p-6 mb-8"
//             >
//               <h3 className="text-xl font-bold mb-4">
//                 Newsletter AS Bambé
//               </h3>
//               <p className="text-bambe-100 mb-6">
//                 Recevez les dernières actualités du club directement dans votre boîte mail.
//               </p>
              
//               <form className="space-y-4">
//                 <input
//                   type="email"
//                   placeholder="Votre adresse email"
//                   className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-bambe-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-white text-bambe-700 hover:bg-gray-100 font-bold py-3 rounded-lg transition-colors"
//                 >
//                   S'abonner
//                 </button>
//               </form>
              
//               <p className="text-xs text-bambe-200 mt-4">
//                 En vous abonnant, vous acceptez de recevoir nos communications.
//               </p>
//             </motion.div>

//             {/* Archives */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-6">
//                 Archives
//               </h3>
              
//               <div className="space-y-3">
//                 {['Mars 2024', 'Février 2024', 'Janvier 2024', 'Décembre 2023'].map((month) => (
//                   <button
//                     key={month}
//                     className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg text-left group"
//                   >
//                     <span className="text-gray-700 group-hover:text-bambe-600">
//                       {month}
//                     </span>
//                     <span className="text-sm text-gray-500 group-hover:text-bambe-500">
//                       (12)
//                     </span>
//                   </button>
//                 ))}
//               </div>
              
//               <button className="w-full mt-6 text-center text-bambe-600 hover:text-bambe-700 font-medium">
//                 Voir toutes les archives
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="max-w-3xl mx-auto"
//           >
//             <Newspaper size={48} className="mx-auto mb-6" />
            
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Ne Manquez Aucune Actualité
//             </h2>
            
//             <p className="text-xl text-gray-300 mb-8">
//               Suivez l'AS Bambé sur les réseaux sociaux pour être informé 
//               en temps réel des dernières nouvelles du club.
//             </p>
            
//             <div className="flex flex-wrap justify-center gap-4">
//               {[
//                 { name: "Facebook", color: "bg-blue-600 hover:bg-blue-700" },
//                 { name: "Twitter", color: "bg-blue-400 hover:bg-blue-500" },
//                 { name: "Instagram", color: "bg-pink-600 hover:bg-pink-700" },
//                 { name: "YouTube", color: "bg-red-600 hover:bg-red-700" }
//               ].map((social) => (
//                 <button
//                   key={social.name}
//                   className={`${social.color} px-8 py-3 rounded-lg font-bold transition-colors`}
//                 >
//                   Suivre sur {social.name}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Actualites;






























































































































































// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Calendar, User, Tag, ChevronRight, Search, Filter, TrendingUp, Clock, Eye, MessageCircle, Share2, Bookmark, Newspaper } from 'lucide-react';
// import { useEffect } from 'react';

// const Actualites = () => {
//   const [activeCategory, setActiveCategory] = useState('toutes');
//   const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() =>{
//       window.scrollTo(0,0)
//      },[])

//   // Catégories d'actualités
//   const categories = [
//     { id: 'toutes', label: 'Toutes les actualités', count: 24 },
//     { id: 'matchs', label: 'Matchs & Résultats', count: 8 },
//     { id: 'club', label: 'Vie du Club', count: 6 },
//     { id: 'transferts', label: 'Transferts', count: 3 },
//     { id: 'jeunes', label: 'Centre de Formation', count: 4 },
//     { id: 'interviews', label: 'Interviews', count: 3 }
//   ];

//   // Articles d'actualités
//   const articles = [
//     {
//       id: 1,
//       title: "Victoire historique 3-0 contre l'AS CotonTchad",
//       excerpt: "Les Verts de Moundou réalisent une performance exceptionnelle face au leader du championnat lors de la 14ème journée.",
//       content: "Dans un match très attendu au Stade Municipal de Moundou, l'AS Bambé a dominé l'AS CotonTchad sur le score de 3-0. Issa Moussa a ouvert le score à la 23ème minute, suivi d'un doublé de Haroun Djibrine en seconde mi-temps. Une victoire qui replace l'équipe dans la course au titre...",
//       category: "matchs",
//       date: "10 Mars 2024",
//       author: "Redaction ASB",
//       readTime: "5 min",
//       views: 1245,
//       comments: 42,
//       image: "/images/actualites/victoire-coton.jpg",
//       featured: true,
//       tags: ["Victoire", "Championnat", "Performance"]
//     },
//     {
//       id: 2,
//       title: "Nouveau partenariat avec la Brasserie du Logone",
//       excerpt: "Le club annonce un partenariat stratégique pour la saison 2024 avec la Brasserie du Logone.",
//       content: "L'AS Bambé est fier d'annoncer la signature d'un partenariat de trois ans avec la Brasserie du Logone. Ce partenariat permettra au club de renforcer ses infrastructures et d'améliorer les conditions d'entraînement des équipes jeunes...",
//       category: "club",
//       date: "5 Mars 2024",
//       author: "Direction Communication",
//       readTime: "3 min",
//       views: 892,
//       comments: 18,
//       image: "/images/actualites/partenariat.jpg",
//       featured: true,
//       tags: ["Partenariat", "Sponsor", "Développement"]
//     },
//     {
//       id: 3,
//       title: "Stage de pré-saison réussi au Cameroun",
//       excerpt: "L'équipe s'est rendue au Cameroun pour un stage intensif de préparation de deux semaines.",
//       content: "L'AS Bambé a effectué un stage de préparation au complexe sportif de Yaoundé. Sous la direction de l'entraîneur Khalil Ibrahim, les joueurs ont enchaîné les séances d'entraînement physique et tactique. Le stage s'est conclu par deux matchs amicaux remportés face à des formations locales...",
//       category: "club",
//       date: "28 Février 2024",
//       author: "Service Presse",
//       readTime: "4 min",
//       views: 756,
//       comments: 25,
//       image: "/images/actualites/stage-cameroun.jpg",
//       featured: false,
//       tags: ["Préparation", "Stage", "Cameroun"]
//     },
//     {
//       id: 4,
//       title: "Signature du jeune espoir Mahamat Ali",
//       excerpt: "Le club annonce la signature de Mahamat Ali, 17 ans, considéré comme l'un des plus grands espoirs du football tchadien.",
//       content: "L'AS Bambé continue de miser sur la jeunesse avec la signature de Mahamat Ali, attaquant de 17 ans formé au centre de formation du club. Le jeune joueur a signé son premier contrat professionnel d'une durée de trois ans. 'C'est un rêve qui se réalise', a déclaré le jeune prodige...",
//       category: "transferts",
//       date: "20 Février 2024",
//       author: "Service Presse",
//       readTime: "3 min",
//       views: 1103,
//       comments: 36,
//       image: "/images/actualites/signature-jeune.jpg",
//       featured: false,
//       tags: ["Signature", "Jeune", "Espoir"]
//     },
//     {
//       id: 5,
//       title: "Interview exclusive du capitaine Abderamane Ali",
//       excerpt: "Le capitaine des Verts se confie sur les objectifs de la saison et l'ambiance dans le vestiaire.",
//       content: "Dans une interview exclusive, Abderamane Ali, capitaine de l'AS Bambé, revient sur le début de saison, les objectifs du club et la cohésion du groupe. 'Nous avons une équipe soudée et ambitieuse. Chaque joueur sait ce qu'il a à faire pour atteindre nos objectifs'...",
//       category: "interviews",
//       date: "15 Février 2024",
//       author: "Journal ASB",
//       readTime: "7 min",
//       views: 1542,
//       comments: 67,
//       image: "/images/actualites/interview-capitaine.jpg",
//       featured: false,
//       tags: ["Interview", "Capitaine", "Exclusivité"]
//     },
//     {
//       id: 6,
//       title: "L'équipe U19 remporte le tournoi régional",
//       excerpt: "Les jeunes de l'AS Bambé s'imposent en finale du tournoi U19 du Logone Occidental.",
//       content: "L'équipe U19 de l'AS Bambé a remporté le tournoi régional du Logone Occidental après une finale passionnante face à l'AS Moundou. Menés 1-0 à la mi-temps, les jeunes Verts ont retourné la situation en seconde période pour s'imposer 2-1. Une belle démonstration du travail effectué au centre de formation...",
//       category: "jeunes",
//       date: "10 Février 2024",
//       author: "Centre Formation",
//       readTime: "4 min",
//       views: 632,
//       comments: 29,
//       image: "/images/actualites/victoire-u19.jpg",
//       featured: false,
//       tags: ["Jeunes", "Victoire", "Tournoi"]
//     },
//     {
//       id: 7,
//       title: "Rénovation des vestiaires du stade",
//       excerpt: "Le club inaugure les nouveaux vestiaires modernisés du Stade Municipal.",
//       content: "Après plusieurs mois de travaux, l'AS Bambé inaugure les vestiaires entièrement rénovés du Stade Municipal. Equipés des dernières technologies, ces nouveaux espaces offriront aux joueurs des conditions optimales de préparation et de récupération. Le président du club a salué cet investissement important pour l'avenir...",
//       category: "club",
//       date: "5 Février 2024",
//       author: "Direction Projet",
//       readTime: "3 min",
//       views: 587,
//       comments: 14,
//       image: "/images/actualites/vestiaires.jpg",
//       featured: false,
//       tags: ["Infrastructures", "Rénovation", "Stade"]
//     },
//     {
//       id: 8,
//       title: "Premier clean sheet de la saison pour Mahamat Nour",
//       excerpt: "Le gardien titulaire réalise sa première feuille blanche de la saison face au Renaissance FC.",
//       content: "Mahamat Nour, gardien de l'AS Bambé, a réalisé une performance remarquable lors du match nul 0-0 face au Renaissance FC. L'arrêt décisif à la 89ème minute a préservé le point du match et offert au gardien son premier clean sheet de la saison. 'C'était important pour la confiance du groupe', a déclaré l'intéressé...",
//       category: "matchs",
//       date: "1 Février 2024",
//       author: "Service Presse",
//       readTime: "3 min",
//       views: 721,
//       comments: 21,
//       image: "/images/actualites/clean-sheet.jpg",
//       featured: false,
//       tags: ["Gardien", "Clean Sheet", "Performance"]
//     }
//   ];

//   // Filtrage des articles
//   const filteredArticles = articles.filter(article => {
//     const matchesCategory = activeCategory === 'toutes' || article.category === activeCategory;
//     const matchesSearch = searchQuery === '' || 
//       article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
//     return matchesCategory && matchesSearch;
//   });

//   const featuredArticles = filteredArticles.filter(article => article.featured);
//   const regularArticles = filteredArticles.filter(article => !article.featured);

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
//           style={{ backgroundImage: `url('/ballon2.jpg')` }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-700/80 to-blue-500/70 z-10"></div>
          
//           <div className="absolute inset-0 opacity-20">
//             <div className="absolute inset-0" style={{
//               backgroundImage: `radial-gradient(circle at 25% 35%, rgba(255,255,255,0.12) 0%, transparent 55%),
//                                radial-gradient(circle at 75% 65%, rgba(255,255,255,0.12) 0%, transparent 55%)`
//             }}></div>
//           </div>
//         </div>
        
//         <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-5xl mx-auto text-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/30 shadow-lg"
//             >
//               <Newspaper size={18} className="text-yellow-300" />
//               <span className="font-medium text-white">Actualités du Club</span>
//             </motion.div>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
//             >
//               Les Dernières Nouvelles
//               <motion.span
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="block text-yellow-300 mt-2 text-2xl md:text-3xl lg:text-4xl"
//               >
//                 des Verts de Moundou
//               </motion.span>
//             </motion.h1>
            
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4 font-medium"
//             >
//               Suivez toute l'actualité de l'AS Bambé : matchs, transferts, interviews 
//               et coulisses du club.
//             </motion.p>
            
//             {/* Barre de recherche améliorée */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               className="max-w-2xl mx-auto px-4"
//             >
//               <div className="relative group">
//                 <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 group-hover:text-white transition-colors cursor-pointer hover:scale-110" size={20} />
//               </div>
              
//               {/* Tags de filtrage rapide */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 }}
//                 className="flex flex-wrap gap-2 justify-center mt-4"
//               >
//                 {['Matchs', 'Transferts', 'Interviews', 'Coulisses', 'Résultats', 'Classement'].map((tag, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSearchQuery(tag)}
//                     className="px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
//                   >
//                     #{tag}
//                   </button>
//                 ))}
//               </motion.div>
              
//               {/* Stats des actualités */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.2 }}
//                 className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto mt-6 sm:mt-8"
//               >
//                 {[
//                   { value: "48", label: "Articles", icon: "📰" },
//                   { value: "12", label: "Catégories", icon: "🏷️" },
//                   { value: "24/7", label: "Mise à jour", icon: "⚡" }
//                 ].map((stat, index) => (
//                   <div 
//                     key={index} 
//                     className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20"
//                   >
//                     <div className="text-xl sm:text-2xl mb-1">{stat.icon}</div>
//                     <div className="text-lg sm:text-xl font-bold text-yellow-300">{stat.value}</div>
//                     <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
//                   </div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
//           {/* Articles Principaux - Section À la Une */}
//           <div>
//             {/* Articles à la Une */}
//             {featuredArticles.length > 0 && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="mb-12"
//               >
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                   <TrendingUp className="mr-3 text-bambe-600" size={24} />
//                   À la Une
//                 </h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {featuredArticles.map((article) => (
//                     <motion.article
//                       key={article.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       whileHover={{ y: -5 }}
//                       className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
//                     >
//                       <div className="relative h-48 overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                         <div className="absolute top-4 left-4">
//                           <span className="px-3 py-1 bg-bambe-600 text-white text-sm font-medium rounded-full">
//                             {article.category === 'matchs' ? 'Match' : 
//                              article.category === 'club' ? 'Club' :
//                              article.category === 'transferts' ? 'Transfert' :
//                              article.category === 'jeunes' ? 'Jeunes' : 'Interview'}
//                           </span>
//                         </div>
//                         <div className="absolute bottom-4 left-4 right-4">
//                           <h3 className="text-xl font-bold text-white line-clamp-2">
//                             {article.title}
//                           </h3>
//                         </div>
//                       </div>
                      
//                       <div className="p-6">
//                         <p className="text-gray-600 mb-4 line-clamp-2">
//                           {article.excerpt}
//                         </p>
                        
//                         <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                           <div className="flex items-center space-x-4">
//                             <span className="flex items-center">
//                               <Calendar size={14} className="mr-1" />
//                               {article.date}
//                             </span>
//                             <span className="flex items-center">
//                               <User size={14} className="mr-1" />
//                               {article.author}
//                             </span>
//                           </div>
//                           <span className="flex items-center">
//                             <Clock size={14} className="mr-1" />
//                             {article.readTime}
//                           </span>
//                         </div>
                        
//                         {/* Tags */}
//                         <div className="flex flex-wrap gap-2 mb-4">
//                           {article.tags.map((tag, index) => (
//                             <span
//                               key={index}
//                               className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
//                             >
//                               <Tag size={10} className="mr-1" />
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
                        
//                         {/* Stats */}
//                         <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                           <div className="flex items-center space-x-6 text-gray-500">
//                             <span className="flex items-center text-sm">
//                               <Eye size={14} className="mr-1" />
//                               {article.views.toLocaleString()}
//                             </span>
//                             <span className="flex items-center text-sm">
//                               <MessageCircle size={14} className="mr-1" />
//                               {article.comments}
//                             </span>
//                           </div>
                          
//                           <div className="flex items-center space-x-2">
//                             <button className="p-2 hover:bg-gray-100 rounded-full">
//                               <Bookmark size={18} className="text-gray-400" />
//                             </button>
//                             <button className="p-2 hover:bg-gray-100 rounded-full">
//                               <Share2 size={18} className="text-gray-400" />
//                             </button>
//                             <Link
//                               to={`/actualites/${article.id}`}
//                               className="flex items-center text-bambe-600 hover:text-bambe-700 font-medium"
//                             >
//                               Lire l'article
//                               <ChevronRight size={16} className="ml-1" />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.article>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="max-w-3xl mx-auto"
//           >
//             <Newspaper size={48} className="mx-auto mb-6" />
            
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Ne Manquez Aucune Actualité
//             </h2>
            
//             <p className="text-xl text-gray-300 mb-8">
//               Suivez l'AS Bambé sur les réseaux sociaux pour être informé 
//               en temps réel des dernières nouvelles du club.
//             </p>
            
//             <div className="flex flex-wrap justify-center gap-4">
//               {[
//                 { name: "Facebook", color: "bg-blue-600 hover:bg-blue-700" },
//                 { name: "Twitter", color: "bg-blue-400 hover:bg-blue-500" },
//                 { name: "Instagram", color: "bg-pink-600 hover:bg-pink-700" },
//                 { name: "YouTube", color: "bg-red-600 hover:bg-red-700" }
//               ].map((social) => (
//                 <button
//                   key={social.name}
//                   className={`${social.color} px-8 py-3 rounded-lg font-bold transition-colors`}
//                 >
//                   Suivre sur {social.name}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Actualites;





















































































import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ChevronRight, Search, Filter, TrendingUp, Clock, Eye, MessageCircle, Share2, Bookmark, Newspaper, Trophy, Users, Target } from 'lucide-react';
import { useEffect } from 'react';

const Actualites = () => {
  const [activeCategory, setActiveCategory] = useState('toutes');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  // Articles d'actualités
  const articles = [
    {
      id: 1,
      title: "MATCH AMICAL : Galactique de Ndjamena 2-2 AS Bambé - Fin du match sous le tonnerre d'applaudissements !",
      excerpt: "Dans un match palpitant, les Verts de Moundou arrachent le match nul 2-2 face au Galactique de Ndjamena dans un match amical de haute intensité.",
      content: `
        <h2>Un Spectacle Footballistique Exceptionnel</h2>
        <p>Ce dimanche 15 juin 2025, le stade municipal de Moundou a vibré au rythme d'un match amical d'anthologie entre l'AS Bambé et le Galactique de Ndjamena. Dans une rencontre où l'engagement et la technique se sont mêlés harmonieusement, les deux formations ont offert un véritable spectacle aux quelques milliers de supporters présents.</p>
        
        <h3>Première Mi-Temps : L'AS Bambé Prend les Devants</h3>
        <p>Dès le coup d'envoi, l'AS Bambé a imposé son rythme. Sous la houlette de l'entraîneur Khalil Ibrahim, les Verts ont adopté un pressing haut et une circulation rapide du ballon. Cette stratégie a porté ses fruits dès la 23ème minute quand Issa Moussa, d'une frappe puissante des 20 mètres, a trompé le gardien adverse après une superbe combinaison avec Haroun Djibrine. Les supporters de l'AS Bambé étaient en délire !</p>
        
        <p>Le Galactique de Ndjamena, pourtant réputé pour son jeu technique, a mis du temps à se mettre en marche. Ce n'est qu'à la 38ème minute, sur un corner bien exécuté, que l'équipe de la capitale a réussi à égaliser grâce à une tête parfaite de son capitaine Mahamat Nour.</p>
        
        <h3>Seconde Mi-Temps : Le Suspendu Spectaculaire</h3>
        <p>La seconde période a débuté sur un rythme effréné. Le Galactique est revenu transformé des vestiaires et a pris le contrôle du milieu de terrain. À la 57ème minute, sur une contre-attaque fulgurante, ils ont pris l'avantage 2-1 grâce à une frappe enroulée de l'ailier gauche.</p>
        
        <p>Mais l'AS Bambé n'a jamais baissé les bras. L'entrée en jeu du jeune Mahamat Ali, 17 ans, a insufflé une nouvelle énergie à l'équipe. À la 78ème minute, sur un coup franc indirect, Abderamane Ali a servi parfaitement Haroun Djibrine qui, d'une volée magistrale, a ramené les deux équipes à égalité. Le stade a explosé de joie !</p>
        
        <h3>Les Dernières Minutes : Un Final Haletant</h3>
        <p>Les dernières minutes ont été d'une intensité rare. L'AS Bambé a multiplié les occasions, avec notamment un tir sur la barre transversale d'Issa Moussa à la 86ème minute. Le Galactique a également eu sa chance dans les arrêts de jeu, mais Mahamat Nour, le gardien des Verts, a réalisé un arrêt décisif qui a préservé le point du match nul.</p>
        
        <h3>Analyse Tactique : Une Belle Leçon de Football</h3>
        <p>Sur le plan tactique, l'AS Bambé a montré de belles choses :</p>
        <ul>
          <li>Un pressing collectif efficace qui a gêné la construction du Galactique</li>
          <li>Une circulation du ballon rapide dans les petits espaces</li>
          <li>Une belle réactivité défensive malgré quelques failles</li>
          <li>Un impact important des remplaçants en seconde période</li>
        </ul>
        
        <h3>Les Hommes du Match</h3>
        <p><strong>Haroun Djibrine (AS Bambé)</strong> : Auteur du but égalisateur et décisif dans la construction du jeu. Son activité permanente a fait souffrir la défense adverse.</p>
        <p><strong>Mahamat Nour (AS Bambé)</strong> : Plusieurs arrêts décisifs, dont un dans les arrêts de jeu qui a sauvé son équipe.</p>
        <p><strong>Issa Moussa (AS Bambé)</strong> : Buteur et artisan de nombreuses actions dangereuses.</p>
        
        <h3>Réactions Post-Match</h3>
        <p><strong>Khalil Ibrahim, entraîneur de l'AS Bambé</strong> : "Je suis fier de mes joueurs. Ils ont montré du caractère, de la détermination et une belle qualité de jeu. Ce match nul face à une équipe de la qualité du Galactique prouve que nous sommes sur la bonne voie. Les jeunes ont bien répondu présents, c'est très encourageant pour la suite."</p>
        
        <p><strong>Abderamane Ali, capitaine de l'AS Bambé</strong> : "C'était un match très intense, comme nous les aimons. Nous avons su réagir après avoir été menés. Cela montre la solidité mentale de ce groupe. Chaque match est une préparation pour la saison à venir."</p>
        
        <h3>Les Statistiques Clés</h3>
        <ul>
          <li>Possession : AS Bambé 48% - Galactique 52%</li>
          <li>Tirs cadrés : AS Bambé 7 - Galactique 5</li>
          <li>Corners : AS Bambé 6 - Galactique 4</li>
          <li>Fautes : AS Bambé 12 - Galactique 15</li>
          <li>Cartons jaunes : AS Bambé 2 - Galactique 3</li>
        </ul>
        
        <h3>Pourquoi Ce Match Est Important</h3>
        <p>Cette rencontre a permis à l'AS Bambé de :</p>
        <ol>
          <li>Tester de nouvelles combinaisons tactiques</li>
          <li>Donner du temps de jeu aux jeunes talents du centre de formation</li>
          <li>Mesurer son niveau face à une équipe réputée</li>
          <li>Renforcer la cohésion du groupe en situation de match</li>
          <li>Préparer la saison prochaine dans les meilleures conditions</li>
        </ol>
        
        <h3>La Suite Pour l'AS Bambé</h3>
        <p>Après ce match encourageant, l'AS Bambé poursuit sa préparation avec un stage intensif prévu la semaine prochaine au Cameroun. Deux autres matchs amicaux sont programmés avant le début du championnat, dont une confrontation face à l'AS Santé d'Abéché.</p>
        
        <p>Les Verts de Moundou démontrent une fois de plus qu'ils sont une équipe ambitieuse, prête à relever tous les défis. Cette saison 2025 s'annonce passionnante pour les supporters des Verts !</p>
        
        <p class="font-bold mt-8 text-center">Prochain match : AS Santé d'Abéché vs AS Bambé - Dimanche 01 Décembre 2024 - 15h30</p>
      `,
      category: "matchs",
      date: "15 Juin 2025",
      author: "Rédaction Sportive ASB",
      readTime: "8 min",
      views: 3245,
      comments: 89,
      image: "/actu.jpg",
      featured: true,
      tags: ["Match Amical", "Galactique Ndjamena", "Nul 2-2", "Préparation", "Spectacle"]
    },
    {
      id: 2,
      title: "VICTOIRE ! AS Santé d'Abéché 0-1 AS Bambé - Les Verts s'imposent à l'extérieur !",
      excerpt: "Dans un match serré, l'AS Bambé s'impose 1-0 face à l'AS Santé d'Abéché grâce à un but d'Issa Moussa. Une victoire importante pour la confiance de l'équipe.",
      content: `
        <h2>Une Victoire Méritée à l'Extérieur</h2>
        <p>Ce dimanche 01 décembre 2024, l'AS Bambé a remporté une victoire précieuse sur le terrain de l'AS Santé d'Abéché. Dans un match serré et tactiquement très construit, les Verts de Moundou se sont imposés 1-0 grâce à un but d'Issa Moussa en première mi-temps. Une performance solide qui confirme les bons résultats de la préparation.</p>
        
        <h3>Contexte du Match</h3>
        <p>Ce match amical revêtait une importance particulière pour plusieurs raisons :</p>
        <ul>
          <li>Premier match officiel de la saison de préparation 2024-2025</li>
          <li>Rencontre contre une équipe réputée difficile à battre à domicile</li>
          <li>Test important pour les nouvelles recrues et le système de jeu</li>
          <li>Préparation au championnat qui débutera dans quelques semaines</li>
        </ul>
        
        <h3>Composition de l'Équipe</h3>
        <p>L'entraîneur Khalil Ibrahim a opté pour une composition équilibrée :</p>
        <p><strong>Gardien</strong> : Mahamat Nour</p>
        <p><strong>Défense</strong> : Ali Mahamat - Hassan Youssouf - Djibrine Abakar - Moussa Haroun</p>
        <p><strong>Milieu</strong> : Abderamane Ali (cap) - Issa Moussa - Haroun Djibrine - Ahmed Ali</p>
        <p><strong>Attaque</strong> : Mahamat Ali - Youssouf Issa</p>
        
        <h3>Résumé du Match</h3>
        
        <h4>Première Mi-Temps : L'AS Bambé Domine et Marque</h4>
        <p>Dès les premières minutes, l'AS Bambé a pris le contrôle du match. Avec un pressing haut et organisé, les Verts ont empêché l'AS Santé de se développer. La défense abéchoise a tenu bon jusqu'à la 32ème minute.</p>
        
        <p>C'est sur une action collective parfaitement exécutée que le but est venu. Parti de sa propre moitié de terrain, Abderamane Ali a lancé une contre-attaque fulgurante. Après une série de passes rapides entre Haroun Djibrine et Mahamat Ali, le ballon est revenu à Issa Moussa qui, d'une frappe croisée du pied droit, a battu le gardien adverse. 0-1 pour l'AS Bambé !</p>
        
        <p>Les dernières minutes de la première mi-temps ont vu l'AS Santé réagir, mais la défense des Verts, bien organisée autour d'Hassan Youssouf, a tenu bon.</p>
        
        <h4>Seconde Mi-Temps : Maîtrise et Gestion</h4>
        <p>La seconde période a été beaucoup plus serrée. L'AS Santé, poussé par son public, a augmenté son intensité. Mais l'AS Bambé a fait preuve d'une grande maturité tactique.</p>
        
        <p>Khalil Ibrahim a effectué plusieurs changements tactiques :</p>
        <ul>
          <li>À la 60ème minute : entrée de Ibrahim Mahamat pour Mahamat Ali</li>
          <li>À la 70ème minute : entrée de Youssouf Adam pour Ahmed Ali</li>
          <li>À la 80ème minute : entrée de Djibrine Hassan pour Haroun Djibrine</li>
        </ul>
        
        <p>Ces changements ont permis de maintenir l'intensité et de préserver le score. L'AS Santé a eu quelques occasions, notamment à la 75ème minute sur un coup franc dangereux, mais Mahamat Nour a réalisé un arrêt spectaculaire.</p>
        
        <p>Les dernières minutes ont été gérées avec intelligence par l'AS Bambé, qui a su garder le ballon et épuiser son adversaire.</p>
        
        <h3>Analyse Tactique</h3>
        <p>Cette victoire repose sur plusieurs facteurs tactiques :</p>
        
        <h4>1. Organisation Défensive Exemplaire</h4>
        <p>La ligne défensive de l'AS Bambé n'a commis que très peu de fautes. Le placement était parfait, et la couverture mutuelle entre les joueurs a empêché l'AS Santé de créer de réelles occasions.</p>
        
        <h4>2. Transition Offensive Rapide</h4>
        <p>L'AS Bambé a excellé dans les transitions. Dès la récupération du ballon, les joueurs se projetant vers l'avant avec rapidité et précision. C'est d'ailleurs sur ce type d'action que le but a été marqué.</p>
        
        <h4>3. Maîtrise du Milieu</h4>
        <p>Le duo Abderamane Ali - Issa Moussa a dominé le milieu de terrain. Leur complémentarité technique et physique a fait la différence.</p>
        
        <h3>Les Performances Individuelles</h3>
        
        <p><strong>Issa Moussa</strong> : L'homme du match. Auteur du but victorieux, il a été omniprésent sur le terrain. Son activité défensive a également été remarquable.</p>
        
        <p><strong>Mahamat Nour</strong> : Le gardien a réalisé un match parfait. Son arrêt à la 75ème minute a sauvé son équipe. Sa sortie du but et sa distribution ont été impeccables.</p>
        
        <p><strong>Hassan Youssouf</strong> : Le roc défensif. A encadré toute la défense et n'a commis aucune erreur. Son leadership a été déterminant.</p>
        
        <p><strong>Mahamat Ali</strong> : Le jeune attaquant (17 ans) a montré de belles choses. Son mouvement et sa technique ont inquiété constamment la défense adverse.</p>
        
        <h3>Réactions Post-Match</h3>
        
        <p><strong>Khalil Ibrahim, entraîneur de l'AS Bambé</strong> : "Je suis très satisfait de la performance de mon équipe. Nous avons dominé la première mi-temps et fait preuve d'une grande maturité en seconde période. Cette victoire à l'extérieur face à une bonne équipe est importante pour la confiance du groupe. Les jeunes ont montré qu'ils pouvaient compter, c'est très positif pour l'avenir."</p>
        
        <p><strong>Issa Moussa, buteur et MVP du match</strong> : "Je suis heureux d'avoir marqué ce but important, mais le plus important c'est la victoire collective. Nous avons travaillé dur à l'entraînement et cela se voit sur le terrain. Cette victoire nous donne confiance pour la suite."</p>
        
        <p><strong>Rangar Abel Masra, président de l'AS Bambé</strong> : "Je suis fier de mes joueurs. Ils ont montré les vraies valeurs du club : engagement, détermination et solidarité. Cette victoire est le fruit d'un travail sérieux et d'une préparation rigoureuse."</p>
        
        <h3>Les Statistiques du Match</h3>
        <ul>
          <li>Possession : AS Santé 54% - AS Bambé 46%</li>
          <li>Tirs : AS Santé 8 (3 cadrés) - AS Bambé 6 (4 cadrés)</li>
          <li>Corners : AS Santé 5 - AS Bambé 3</li>
          <li>Hors-jeu : AS Santé 2 - AS Bambé 1</li>
          <li>Fautes : AS Santé 14 - AS Bambé 9</li>
          <li>Cartons jaunes : AS Santé 2 - AS Bambé 1</li>
          <li>Cartons rouges : 0</li>
        </ul>
        
        <h3>Impact de Cette Victoire</h3>
        <p>Cette victoire a plusieurs implications importantes :</p>
        
        <ol>
          <li><strong>Confiance retrouvée</strong> : Après quelques résultats mitigés, cette victoire redonne confiance à l'ensemble du groupe.</li>
          <li><strong>Validation du projet sportif</strong> : Les choix tactiques et les orientations sportives sont validés par ce résultat.</li>
          <li><strong>Intégration des jeunes</strong> : Les jeunes joueurs ont prouvé qu'ils pouvaient être compétitifs au plus haut niveau.</li>
          <li><strong>Attractivité du club</strong> : Ce type de performance renforce l'image et l'attractivité du club.</li>
          <li><strong>Préparation optimale</strong> : La préparation de la saison se fait dans les meilleures conditions possibles.</li>
        </ol>
        
        <h3>Les Prochaines Échéances</h3>
        <p>Après cette victoire, l'AS Bambé poursuit sa préparation :</p>
        <ul>
          <li>Stage technique du 03 au 10 décembre 2024</li>
          <li>Match amical contre le Renaissance FC le 15 décembre 2024</li>
          <li>Reprise du championnat prévue en janvier 2025</li>
          <li>Participation au tournoi "FOU de FOOT" au Cameroun en février 2025</li>
        </ul>
        
        <h3>Le Mot de la Fin</h3>
        <p>Cette victoire face à l'AS Santé d'Abéché démontre que l'AS Bambé est sur la bonne voie. Avec une équipe équilibrée, un projet sportif clair et des jeunes talents prometteurs, les Verts de Moundou ont toutes les cartes en main pour réussir une belle saison 2025.</p>
        
        <p>Les supporters peuvent être optimistes : l'avenir s'annonce radieux pour l'AS Bambé !</p>
        
        <p class="font-bold mt-8 text-center">Prochain match à domicile : AS Bambé vs Renaissance FC - Dimanche 15 Décembre 2024 - 16h00</p>
      `,
      category: "matchs",
      date: "01 Décembre 2024",
      author: "Journaliste Sportif ASB",
      readTime: "10 min",
      views: 2890,
      comments: 74,
      image: "/actu1.jpg",
      featured: true,
      tags: ["Victoire", "Extérieur", "AS Santé Abéché", "1-0", "Préparation Saison"]
    },
    // {
    //   id: 3,
    //   title: "Victoire historique 3-0 contre l'AS CotonTchad",
    //   excerpt: "Les Verts de Moundou réalisent une performance exceptionnelle face au leader du championnat lors de la 14ème journée.",
    //   content: "Dans un match très attendu au Stade Municipal de Moundou, l'AS Bambé a dominé l'AS CotonTchad sur le score de 3-0. Issa Moussa a ouvert le score à la 23ème minute, suivi d'un doublé de Haroun Djibrine en seconde mi-temps. Une victoire qui replace l'équipe dans la course au titre...",
    //   category: "matchs",
    //   date: "10 Mars 2024",
    //   author: "Redaction ASB",
    //   readTime: "5 min",
    //   views: 1245,
    //   comments: 42,
    //   image: "/images/actualites/victoire-coton.jpg",
    //   featured: true,
    //   tags: ["Victoire", "Championnat", "Performance"]
    // },
    // {
    //   id: 4,
    //   title: "Nouveau partenariat avec la Brasserie du Logone",
    //   excerpt: "Le club annonce un partenariat stratégique pour la saison 2024 avec la Brasserie du Logone.",
    //   content: "L'AS Bambé est fier d'annoncer la signature d'un partenariat de trois ans avec la Brasserie du Logone. Ce partenariat permettra au club de renforcer ses infrastructures et d'améliorer les conditions d'entraînement des équipes jeunes...",
    //   category: "club",
    //   date: "5 Mars 2024",
    //   author: "Direction Communication",
    //   readTime: "3 min",
    //   views: 892,
    //   comments: 18,
    //   image: "/images/actualites/partenariat.jpg",
    //   featured: true,
    //   tags: ["Partenariat", "Sponsor", "Développement"]
    // }
  ];

  // Filtrage des articles
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'toutes' || article.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('/ballon2.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-700/80 to-blue-500/70 z-10"></div>
          
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 35%, rgba(255,255,255,0.12) 0%, transparent 55%),
                               radial-gradient(circle at 75% 65%, rgba(255,255,255,0.12) 0%, transparent 55%)`
            }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/30 shadow-lg"
            >
              <Newspaper size={18} className="text-yellow-300" />
              <span className="font-medium text-white">Actualités du Club</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Les Dernières Nouvelles
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="block text-yellow-300 mt-2 text-2xl md:text-3xl lg:text-4xl"
              >
                des Bleus de Moundou
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4 font-medium"
            >
              Suivez toute l'actualité de l'AS Bambé : matchs, transferts, interviews 
              et coulisses du club.
            </motion.p>
            
            {/* Barre de recherche améliorée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto px-4"
            >
              <div className="relative group">
                <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 group-hover:text-white transition-colors cursor-pointer hover:scale-110" size={20} />
              </div>
              
              {/* Tags de filtrage rapide */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-2 justify-center mt-4"
              >
                {['Matchs', 'Transferts', 'Interviews', 'Coulisses', 'Résultats', 'Classement'].map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  >
                    #{tag}
                  </button>
                ))}
              </motion.div>
              
              {/* Stats des actualités */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto mt-6 sm:mt-8"
              >
                {[
                  { value: "48", label: "Articles", icon: "📰" },
                  { value: "12", label: "Catégories", icon: "🏷️" },
                  { value: "24/7", label: "Mise à jour", icon: "⚡" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20"
                  >
                    <div className="text-xl sm:text-2xl mb-1">{stat.icon}</div>
                    <div className="text-lg sm:text-xl font-bold text-yellow-300">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Articles Principaux - Section À la Une */}
          <div>
            {/* Articles à la Une */}
            {featuredArticles.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="mr-3 text-bambe-600" size={24} />
                  À la Une
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredArticles.map((article) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                      className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                    >
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-bambe-600 text-white text-sm font-medium rounded-full">
                            {article.category === 'matchs' ? 'Match' : 
                             article.category === 'club' ? 'Club' :
                             article.category === 'transferts' ? 'Transfert' :
                             article.category === 'jeunes' ? 'Jeunes' : 'Interview'}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white line-clamp-2">
                            {article.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {article.date}
                            </span>
                            <span className="flex items-center">
                              <User size={14} className="mr-1" />
                              {article.author}
                            </span>
                          </div>
                          <span className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              <Tag size={10} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Stats */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-6 text-gray-500">
                            <span className="flex items-center text-sm">
                              <Eye size={14} className="mr-1" />
                              {article.views.toLocaleString()}
                            </span>
                            <span className="flex items-center text-sm">
                              <MessageCircle size={14} className="mr-1" />
                              {article.comments}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                              <Bookmark size={18} className="text-gray-400" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                              <Share2 size={18} className="text-gray-400" />
                            </button>
                            <Link
                              to={`/actualites/${article.id}`}
                              className="flex items-center text-bambe-600 hover:text-bambe-700 font-medium"
                            >
                              Lire l'article
                              <ChevronRight size={16} className="ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <Newspaper size={48} className="mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ne Manquez Aucune Actualité
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Suivez l'AS Bambé sur les réseaux sociaux pour être informé 
              en temps réel des dernières nouvelles du club.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Facebook", color: "bg-blue-600 hover:bg-blue-700" },
                { name: "Twitter", color: "bg-blue-400 hover:bg-blue-500" },
                { name: "Instagram", color: "bg-pink-600 hover:bg-pink-700" },
                { name: "YouTube", color: "bg-red-600 hover:bg-red-700" }
              ].map((social) => (
                <button
                  key={social.name}
                  className={`${social.color} px-8 py-3 rounded-lg font-bold transition-colors`}
                >
                  Suivre sur {social.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Actualites;