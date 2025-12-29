// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Calendar, User, Clock, ArrowLeft, Share2, MessageCircle, Bookmark, Eye, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

// const ActualiteDetail = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);
//   const [relatedArticles, setRelatedArticles] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);


//     useEffect(() =>{
//     window.scrollTo(0,0)
//    },[])


//   // Données de l'article (pour l'exemple - en pratique, tu récupérerais depuis une API ou JSON)
//   const articlesData = {
//     1: {
//       id: 1,
//       title: "Football : AS Bambé de Moundou représente le Tchad au tournoi International « FOU de FOOT » au Cameroun",
//       content: `
//         <p>Ce samedi 24 août 2024, AS Bambé club de Moundou, fier représentant du Tchad, entame sa participation au tournoi international « FOU de FOOT » au Cameroun. Logé dans la poule A, le club tchadien, qui sera l'unique équipe étrangère du tournoi, débutera son parcours contre Gazelle FA de Garoua au stade Annexe OMNISPORTS ROMDE, à 15h30.</p>
        
//         <p>Sous la houlette du président Rangar Abel Masra, AS Bambé aborde cette compétition avec un mélange d'excitation et d'espoir. Pour Rangar, ce tournoi constitue une opportunité précieuse pour les jeunes footballeurs tchadiens. « Au-delà de la quête du trophée, notre objectif principal est de mettre en avant le talent de nos jeunes joueurs et de saisir l'occasion pour leur permettre de se faire repérer par des recruteurs, » souligne-t-il.</p>
        
//         <p>Le « FOU de FOOT », qui en est à sa 4e édition, est placé sous l'égide de Samuel Eto'o, légende du football camerounais. Ce tournoi n'est pas seulement une vitrine pour les clubs mais aussi une plateforme cruciale pour le repérage de nouveaux talents. En plus du défi sportif, les rencontres offrent aux jeunes talents une chance de se faire connaître sur la scène internationale.</p>
        
//         <p>Les yeux seront rivés sur le Bambé Club de Moundou pour voir comment ils se mesureront aux clubs locaux comme FC Bamenda, Gazelle FA, CFF Champion et Sporting de Garoua. L'aventure promet d'être pleine de défis pour les représentants du Tchad.</p>
        
//         <p class="font-bold mt-6">Mbaigoto Josué.</p>
//       `,
//       excerpt: "AS Bambé, unique représentant tchadien, participe au prestigieux tournoi FOU de FOOT au Cameroun sous le patronage de Samuel Eto'o.",
//       category: "Foot Masculin",
//       subcategory: "Football International",
//       date: "Août 24, 2024",
//       author: "Rédaction AS Bambé",
//       readTime: "4 min",
//       views: 1842,
//       comments: 42,
//       shares: 156,
//       image: "/bambe1.jpeg", // Utilise ta vraie photo
//       tags: ["Tournoi International", "FOU de FOOT", "Cameroun", "Samuel Eto'o", "Gazelle FA"],
//       featured: true
//     }
//   };

//   // Articles similaires
//   const relatedData = [
//     {
//       id: 2,
//       title: "Fin de saison 2024-2025 : Bilan et perspectives pour AS Bambé",
//       date: "Juin 2025",
//       category: "Foot Masculin",
//       image: "/bambe2.jpeg",
//       excerpt: "Retour sur une saison riche en enseignements pour les Verts de Moundou."
//     },
//     {
//       id: 3,
//       title: "Président Rangar Abel Masra : Vision et projets pour le club",
//       date: "2025",
//       category: "Club",
//       image: "/bambe3.jpeg",
//       excerpt: "Le président dévoile ses ambitions pour l'avenir de l'AS Bambé."
//     },
//     {
//       id: 4,
//       title: "Les jeunes talents du centre de formation AS Bambé",
//       date: "Mai 2024",
//       category: "Formation",
//       image: "/bambe5.jpeg",
//       excerpt: "Découvrez les futurs espoirs du football tchadien formés à Moundou."
//     }
//   ];

//   useEffect(() => {
//     // Simulation de chargement
//     setTimeout(() => {
//       setArticle(articlesData[id] || articlesData[1]);
//       setRelatedArticles(relatedData);
//       setIsLoading(false);
      
//       // Simuler l'augmentation des vues
//       if (articlesData[id]) {
//         articlesData[id].views += 1;
//       }
//     }, 500);
//   }, [id]);

//   const handleShare = (platform) => {
//     const shareUrl = window.location.href;
//     const shareText = article?.title;
    
//     switch(platform) {
//       case 'facebook':
//         window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
//         break;
//       case 'twitter':
//         window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
//         break;
//       case 'linkedin':
//         window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
//         break;
//       case 'email':
//         window.location.href = `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`;
//         break;
//       default:
//         break;
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-bambe-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Chargement de l'article...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
//           <Link to="/actualites" className="text-bambe-600 hover:text-bambe-700 font-medium">
//             ← Retour aux actualités
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="sticky top-0 z-50 bg-white shadow-sm"
//       >
//         <div className="container mx-auto px-4 py-4">
//           <Link
//             to="/actualites"
//             className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-medium"
//           >
//             <ArrowLeft size={20} className="mr-2" />
//             Retour aux actualités
//           </Link>
//         </div>
//       </motion.div>

//       {/* Hero Article */}
//       <section className="relative bg-gradient-to-br from-bambe-900 to-bambe-700 text-white">
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-4xl mx-auto"
//           >
//             {/* Catégorie et date */}
//             <div className="flex flex-wrap items-center gap-4 mb-6">
//               <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
//                 {article.category}
//               </span>
//               {article.subcategory && (
//                 <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
//                   {article.subcategory}
//                 </span>
//               )}
//               <span className="text-white/80">•</span>
//               <span className="flex items-center text-white/80">
//                 <Calendar size={16} className="mr-2" />
//                 {article.date}
//               </span>
//             </div>

//             {/* Titre */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
//               {article.title}
//             </h1>

//             {/* Auteur et métriques */}
//             <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-t border-white/20">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
//                   <User size={24} />
//                 </div>
//                 <div>
//                   <div className="font-bold">{article.author}</div>
//                   <div className="text-sm text-white/80">Rédacteur AS Bambé</div>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-6 text-sm">
//                 <span className="flex items-center">
//                   <Clock size={16} className="mr-2" />
//                   {article.readTime} de lecture
//                 </span>
//                 <span className="flex items-center">
//                   <Eye size={16} className="mr-2" />
//                   {article.views.toLocaleString()} vues
//                 </span>
//                 <span className="flex items-center">
//                   <MessageCircle size={16} className="mr-2" />
//                   {article.comments} commentaires
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contenu principal */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Article */}
//           <div className="lg:col-span-2">
//             <motion.article
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden"
//             >
//               {/* Image principale */}
//               {article.image && (
//                 <div className="relative h-80 md:h-96 overflow-hidden">
//                   <img
//                     src={article.image}
//                     alt={article.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
//                     <p className="text-white text-sm">
//                       Photo : AS Bambé lors du tournoi FOU de FOOT au Cameroun
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Contenu */}
//               <div className="p-8">
//                 {/* Chapeau */}
//                 <div className="mb-8 p-6 bg-bambe-50 rounded-xl border border-bambe-100">
//                   <p className="text-lg font-medium text-gray-800 italic">
//                     {article.excerpt}
//                   </p>
//                 </div>

//                 {/* Contenu HTML */}
//                 <div 
//                   className="prose prose-lg max-w-none mb-12"
//                   dangerouslySetInnerHTML={{ __html: article.content }}
//                 />

//                 {/* Tags */}
//                 <div className="py-8 border-t border-gray-200">
//                   <h3 className="text-lg font-bold text-gray-900 mb-4">Mots-clés</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {article.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-bambe-100 hover:text-bambe-700 transition-colors"
//                       >
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-gray-200">
//                   <div className="flex items-center space-x-4">
//                     <button
//                       onClick={() => handleShare('facebook')}
//                       className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
//                       aria-label="Partager sur Facebook"
//                     >
//                       <Facebook size={20} />
//                     </button>
//                     <button
//                       onClick={() => handleShare('twitter')}
//                       className="p-3 bg-blue-50 text-blue-400 rounded-full hover:bg-blue-100 transition-colors"
//                       aria-label="Partager sur Twitter"
//                     >
//                       <Twitter size={20} />
//                     </button>
//                     <button
//                       onClick={() => handleShare('linkedin')}
//                       className="p-3 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
//                       aria-label="Partager sur LinkedIn"
//                     >
//                       <Linkedin size={20} />
//                     </button>
//                     <button
//                       onClick={() => handleShare('email')}
//                       className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
//                       aria-label="Partager par email"
//                     >
//                       <Mail size={20} />
//                     </button>
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     <button className="flex items-center text-gray-600 hover:text-bambe-600">
//                       <Bookmark size={20} className="mr-2" />
//                       Sauvegarder
//                     </button>
//                     <button className="flex items-center text-gray-600 hover:text-bambe-600">
//                       <Share2 size={20} className="mr-2" />
//                       Partager
//                     </button>
//                   </div>
//                 </div>

//                 {/* Auteur détaillé */}
//                 <div className="bg-gray-50 rounded-xl p-8 mt-8">
//                   <div className="flex items-start space-x-6">
//                     <div className="w-20 h-20 bg-bambe-100 rounded-full flex items-center justify-center flex-shrink-0">
//                       <User size={32} className="text-bambe-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">
//                         À propos de l'auteur
//                       </h3>
//                       <p className="text-gray-600 mb-4">
//                         {article.author} est journaliste sportif spécialisé dans le football tchadien. 
//                         Il suit l'AS Bambé depuis plusieurs années et couvre régulièrement les actualités du club.
//                       </p>
//                       <div className="text-sm text-gray-500">
//                         Contact : redaction@asbambe.td
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.article>

//             {/* Commentaires (simplifié) */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="mt-12 bg-white rounded-2xl shadow-lg p-8"
//             >
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Commentaires ({article.comments})
//               </h2>
//               <div className="space-y-6">
//                 {/* Exemple de commentaire */}
//                 <div className="p-6 bg-gray-50 rounded-xl">
//                   <div className="flex items-center space-x-4 mb-4">
//                     <div className="w-12 h-12 bg-bambe-100 rounded-full"></div>
//                     <div>
//                       <div className="font-bold">Supporteur ASB</div>
//                       <div className="text-sm text-gray-500">Il y a 2 jours</div>
//                     </div>
//                   </div>
//                   <p className="text-gray-700">
//                     Fière de notre équipe ! Que cette participation ouvre des portes à nos jeunes talents.
//                   </p>
//                 </div>
//               </div>
              
//               <div className="mt-8 p-6 bg-bambe-50 rounded-xl border border-bambe-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Laisser un commentaire</h3>
//                 <textarea
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4"
//                   rows="4"
//                   placeholder="Votre commentaire..."
//                 ></textarea>
//                 <button className="px-6 py-3 bg-bambe-600 text-white rounded-lg font-medium hover:bg-bambe-700">
//                   Publier le commentaire
//                 </button>
//               </div>
//             </motion.div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1 space-y-8">
//             {/* Articles similaires */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-white rounded-2xl shadow-lg p-6"
//             >
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Articles similaires
//               </h2>
              
//               <div className="space-y-6">
//                 {relatedArticles.map((related) => (
//                   <Link
//                     key={related.id}
//                     to={`/actualites/${related.id}`}
//                     className="group block"
//                   >
//                     <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
//                       <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
//                         <img
//                           src={related.image}
//                           alt={related.title}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform"
//                         />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <h3 className="font-bold text-gray-900 group-hover:text-bambe-600 line-clamp-2 mb-1">
//                           {related.title}
//                         </h3>
//                         <div className="text-sm text-gray-500">
//                           {related.date} • {related.category}
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Newsletter */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//               className="bg-gradient-to-br from-bambe-600 to-bambe-700 text-white rounded-2xl shadow-lg p-6"
//             >
//               <h3 className="text-xl font-bold mb-4">
//                 Ne manquez aucune actualité
//               </h3>
//               <p className="text-bambe-100 mb-6">
//                 Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles de l'AS Bambé.
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
//             </motion.div>

//             {/* Statistiques article */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5 }}
//               className="bg-white rounded-2xl shadow-lg p-6"
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-6">
//                 Cet article en chiffres
//               </h3>
              
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                   <span className="text-gray-600">Temps de lecture</span>
//                   <span className="font-bold">{article.readTime}</span>
//                 </div>
//                 <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                   <span className="text-gray-600">Vues</span>
//                   <span className="font-bold">{article.views.toLocaleString()}</span>
//                 </div>
//                 <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                   <span className="text-gray-600">Partages</span>
//                   <span className="font-bold">{article.shares}</span>
//                 </div>
//                 <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                   <span className="text-gray-600">Commentaires</span>
//                   <span className="font-bold">{article.comments}</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Catégories */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.6 }}
//               className="bg-white rounded-2xl shadow-lg p-6"
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-6">
//                 Catégories
//               </h3>
              
//               <div className="space-y-3">
//                 {[
//                   { name: "Foot Masculin", count: 12 },
//                   { name: "Foot Féminin", count: 4 },
//                   { name: "Formation", count: 8 },
//                   { name: "International", count: 3 },
//                   { name: "Club", count: 6 }
//                 ].map((category) => (
//                   <Link
//                     key={category.name}
//                     to="/actualites"
//                     className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg group"
//                   >
//                     <span className="text-gray-700 group-hover:text-bambe-600">
//                       {category.name}
//                     </span>
//                     <span className="text-sm text-gray-500 group-hover:text-bambe-500">
//                       ({category.count})
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <section className="py-16 bg-gradient-to-r from-bambe-800 to-bambe-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Suivez toute l'actualité de l'AS Bambé
//           </h2>
          
//           <p className="text-xl text-bambe-100 mb-8 max-w-2xl mx-auto">
//             Ne manquez aucun match, aucune interview, aucune actualité de votre club préféré.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/actualites"
//               className="bg-white text-bambe-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
//             >
//               Voir toutes les actualités
//             </Link>
//             <Link
//               to="/contact"
//               className="border-2 border-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300"
//             >
//               Nous contacter
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ActualiteDetail;





































































// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Calendar, User, Clock, ArrowLeft, Eye, Bookmark } from 'lucide-react';

// const ActualiteDetail = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Données de l'article
//   const articlesData = {
//     1: {
//       id: 1,
//       title: "Football : AS Bambé de Moundou représente le Tchad au tournoi International « FOU de FOOT » au Cameroun",
//       content: `
//         <p>Ce samedi 24 août 2024, AS Bambé club de Moundou, fier représentant du Tchad, entame sa participation au tournoi international « FOU de FOOT » au Cameroun. Logé dans la poule A, le club tchadien, qui sera l'unique équipe étrangère du tournoi, débutera son parcours contre Gazelle FA de Garoua au stade Annexe OMNISPORTS ROMDE, à 15h30.</p>
        
//         <p>Sous la houlette du président Rangar Abel Masra, AS Bambé aborde cette compétition avec un mélange d'excitation et d'espoir. Pour Rangar, ce tournoi constitue une opportunité précieuse pour les jeunes footballeurs tchadiens. « Au-delà de la quête du trophée, notre objectif principal est de mettre en avant le talent de nos jeunes joueurs et de saisir l'occasion pour leur permettre de se faire repérer par des recruteurs, » souligne-t-il.</p>
        
//         <p>Le « FOU de FOOT », qui en est à sa 4e édition, est placé sous l'égide de Samuel Eto'o, légende du football camerounais. Ce tournoi n'est pas seulement une vitrine pour les clubs mais aussi une plateforme cruciale pour le repérage de nouveaux talents. En plus du défi sportif, les rencontres offrent aux jeunes talents une chance de se faire connaître sur la scène internationale.</p>
        
//         <p>Les yeux seront rivés sur le Bambé Club de Moundou pour voir comment ils se mesureront aux clubs locaux comme FC Bamenda, Gazelle FA, CFF Champion et Sporting de Garoua. L'aventure promet d'être pleine de défis pour les représentants du Tchad.</p>
        
//         <p class="font-bold mt-6">Mbaigoto Josué.</p>
//       `,
//       excerpt: "AS Bambé, unique représentant tchadien, participe au prestigieux tournoi FOU de FOOT au Cameroun sous le patronage de Samuel Eto'o.",
//       category: "Foot Masculin",
//       subcategory: "Football International",
//       date: "Août 24, 2024",
//       author: "Rédaction AS Bambé",
//       readTime: "4 min",
//       views: 1842,
//       comments: 42,
//       shares: 156,
//       image: "/bambe1.jpeg",
//       tags: ["Tournoi International", "FOU de FOOT", "Cameroun", "Samuel Eto'o", "Gazelle FA"],
//       featured: true
//     }
//   };

//   useEffect(() => {
//     // Simulation de chargement
//     setTimeout(() => {
//       setArticle(articlesData[id] || articlesData[1]);
//       setIsLoading(false);
      
//       // Simuler l'augmentation des vues
//       if (articlesData[id]) {
//         articlesData[id].views += 1;
//       }
//     }, 500);
//   }, [id]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-bambe-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Chargement de l'article...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
//           <Link to="/actualites" className="text-bambe-600 hover:text-bambe-700 font-medium">
//             ← Retour aux actualités
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="sticky top-0 z-50 bg-white shadow-sm"
//       >
//         <div className="container mx-auto px-4 py-4">
//           <Link
//             to="/actualites"
//             className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-medium"
//           >
//             <ArrowLeft size={20} className="mr-2" />
//             Retour aux actualités
//           </Link>
//         </div>
//       </motion.div>

//       {/* Hero Article */}
//       <section className="relative bg-gradient-to-br from-bambe-900 to-bambe-700 text-white">
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-4xl mx-auto"
//           >
//             {/* Catégorie et date */}
//             <div className="flex flex-wrap items-center gap-4 mb-6">
//               <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
//                 {article.category}
//               </span>
//               {article.subcategory && (
//                 <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
//                   {article.subcategory}
//                 </span>
//               )}
//               <span className="text-white/80">•</span>
//               <span className="flex items-center text-white/80">
//                 <Calendar size={16} className="mr-2" />
//                 {article.date}
//               </span>
//             </div>

//             {/* Titre */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
//               {article.title}
//             </h1>

//             {/* Auteur et métriques */}
//             <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-t border-white/20">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
//                   <User size={24} />
//                 </div>
//                 <div>
//                   <div className="font-bold">{article.author}</div>
//                   <div className="text-sm text-white/80">Rédacteur AS Bambé</div>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-6 text-sm">
//                 <span className="flex items-center">
//                   <Clock size={16} className="mr-2" />
//                   {article.readTime} de lecture
//                 </span>
//                 <span className="flex items-center">
//                   <Eye size={16} className="mr-2" />
//                   {article.views.toLocaleString()} vues
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contenu principal */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 gap-12">
//           {/* Article */}
//           <div>
//             <motion.article
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden"
//             >
//               {/* Image principale */}
//               {article.image && (
//                 <div className="relative h-80 md:h-96 overflow-hidden">
//                   <img
//                     src={article.image}
//                     alt={article.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
//                     <p className="text-white text-sm">
//                       Photo : AS Bambé lors du tournoi FOU de FOOT au Cameroun
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Contenu */}
//               <div className="p-8">
//                 {/* Chapeau */}
//                 <div className="mb-8 p-6 bg-bambe-50 rounded-xl border border-bambe-100">
//                   <p className="text-lg font-medium text-gray-800 italic">
//                     {article.excerpt}
//                   </p>
//                 </div>

//                 {/* Contenu HTML */}
//                 <div 
//                   className="prose prose-lg max-w-none mb-12"
//                   dangerouslySetInnerHTML={{ __html: article.content }}
//                 />

//                 {/* Tags */}
//                 <div className="py-8 border-t border-gray-200">
//                   <h3 className="text-lg font-bold text-gray-900 mb-4">Mots-clés</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {article.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-bambe-100 hover:text-bambe-700 transition-colors"
//                       >
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex items-center justify-between gap-6 py-8 border-t border-gray-200">
//                   <button className="flex items-center text-gray-600 hover:text-bambe-600">
//                     <Bookmark size={20} className="mr-2" />
//                     Sauvegarder
//                   </button>
                  
//                   <Link
//                     to="/actualites"
//                     className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-medium"
//                   >
//                     ← Retour aux actualités
//                   </Link>
//                 </div>

//                 {/* Auteur détaillé */}
//                 <div className="bg-gray-50 rounded-xl p-8 mt-8">
//                   <div className="flex items-start space-x-6">
//                     <div className="w-20 h-20 bg-bambe-100 rounded-full flex items-center justify-center flex-shrink-0">
//                       <User size={32} className="text-bambe-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">
//                         À propos de l'auteur
//                       </h3>
//                       <p className="text-gray-600 mb-4">
//                         {article.author} est journaliste sportif spécialisé dans le football tchadien. 
//                         Il suit l'AS Bambé depuis plusieurs années et couvre régulièrement les actualités du club.
//                       </p>
//                       <div className="text-sm text-gray-500">
//                         Contact : redaction@asbambe.td
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.article>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActualiteDetail;






























































































import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Eye, Bookmark, Trophy, Target, Users, BarChart, Award, Star, Heart, Share2, MessageCircle } from 'lucide-react';

const ActualiteDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [views, setViews] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Données complètes des articles
  const articlesData = {
    1: {
      id: 1,
      title: "MATCH AMICAL : Galactique de Ndjamena 2-2 AS Bambé - Fin du match sous le tonnerre d'applaudissements !",
      content: `
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Un Spectacle Footballistique Exceptionnel</h2>
        <p class="text-lg text-gray-700 mb-6">Ce dimanche 15 juin 2025, le stade municipal de Moundou a vibré au rythme d'un match amical d'anthologie entre l'AS Bambé et le Galactique de Ndjamena. Dans une rencontre où l'engagement et la technique se sont mêlés harmonieusement, les deux formations ont offert un véritable spectacle aux quelques milliers de supporters présents.</p>
        
        <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl mb-8 border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Target class="mr-2 text-blue-600" size={20} />
            RÉSULTAT FINAL
          </h3>
          <div class="grid grid-cols-2 gap-6">
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-900">Galactique Ndjamena</div>
              <div class="text-6xl font-black text-blue-700 mt-2">2</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-900">AS Bambé</div>
              <div class="text-6xl font-black text-green-700 mt-2">2</div>
            </div>
          </div>
          <div class="text-center mt-4 text-gray-600">Match nul spectaculaire !</div>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center mt-8">
          <Calendar class="mr-2 text-bambe-600" size={20} />
          Première Mi-Temps : L'AS Bambé Prend les Devants
        </h3>
        <p class="text-lg text-gray-700 mb-6">Dès le coup d'envoi, l'AS Bambé a imposé son rythme. Sous la houlette de l'entraîneur Khalil Ibrahim, les Verts ont adopté un pressing haut et une circulation rapide du ballon. Cette stratégie a porté ses fruits dès la 23ème minute quand Issa Moussa, d'une frappe puissante des 20 mètres, a trompé le gardien adverse après une superbe combinaison avec Haroun Djibrine. Les supporters de l'AS Bambé étaient en délire !</p>
        
        <div class="bg-yellow-50 p-4 rounded-xl mb-6 border border-yellow-200">
          <div class="flex items-center">
            <Star class="text-yellow-500 mr-3" size={20} />
            <span class="font-bold text-gray-900">BUT À LA 23ème MINUTE</span>
          </div>
          <p class="text-gray-700 mt-2">Issa Moussa (AS Bambé) - Frappe puissante des 20 mètres après une combinaison avec Haroun Djibrine</p>
        </div>
        
        <p class="text-lg text-gray-700 mb-6">Le Galactique de Ndjamena, pourtant réputé pour son jeu technique, a mis du temps à se mettre en marche. Ce n'est qu'à la 38ème minute, sur un corner bien exécuté, que l'équipe de la capitale a réussi à égaliser grâce à une tête parfaite de son capitaine Mahamat Nour.</p>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center mt-8">
          <Trophy class="mr-2 text-yellow-500" size={20} />
          Seconde Mi-Temps : Le Suspendu Spectaculaire
        </h3>
        <p class="text-lg text-gray-700 mb-6">La seconde période a débuté sur un rythme effréné. Le Galactique est revenu transformé des vestiaires et a pris le contrôle du milieu de terrain. À la 57ème minute, sur une contre-attaque fulgurante, ils ont pris l'avantage 2-1 grâce à une frappe enroulée de l'ailier gauche.</p>
        
        <p class="text-lg text-gray-700 mb-6">Mais l'AS Bambé n'a jamais baissé les bras. L'entrée en jeu du jeune Mahamat Ali, 17 ans, a insufflé une nouvelle énergie à l'équipe. À la 78ème minute, sur un coup franc indirect, Abderamane Ali a servi parfaitement Haroun Djibrine qui, d'une volée magistrale, a ramené les deux équipes à égalité. Le stade a explosé de joie !</p>
        
        <div class="bg-green-50 p-4 rounded-xl mb-6 border border-green-200">
          <div class="flex items-center">
            <Star class="text-green-500 mr-3" size={20} />
            <span class="font-bold text-gray-900">BUT ÉGALISATEUR À LA 78ème MINUTE</span>
          </div>
          <p class="text-gray-700 mt-2">Haroun Djibrine (AS Bambé) - Volée magistrale sur coup franc indirect servi par Abderamane Ali</p>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center mt-8">
          <BarChart class="mr-2 text-purple-500" size={20} />
          Analyse Tactique : Une Belle Leçon de Football
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white p-6 rounded-xl border border-gray-200">
            <h4 class="text-lg font-bold text-gray-900 mb-3">Points Forts AS Bambé</h4>
            <ul class="space-y-2">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Pressing collectif efficace</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Circulation du ballon rapide</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Réactivité défensive</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Impact des remplaçants</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-xl border border-gray-200">
            <h4 class="text-lg font-bold text-gray-900 mb-3">Statistiques Clés</h4>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">Possession</span>
                <span class="font-bold">AS Bambé 48% - Galactique 52%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Tirs cadrés</span>
                <span class="font-bold">7 - 5</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Corners</span>
                <span class="font-bold">6 - 4</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Fautes</span>
                <span class="font-bold">12 - 15</span>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center mt-8">
          <Award class="mr-2 text-yellow-600" size={20} />
          Les Hommes du Match
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 text-center">
            <div class="text-4xl font-bold text-green-600 mb-3">⭐</div>
            <h4 class="font-bold text-gray-900 mb-2">Haroun Djibrine</h4>
            <p class="text-sm text-gray-600">Auteur du but égalisateur et décisif</p>
          </div>
          
          <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200 text-center">
            <div class="text-4xl font-bold text-blue-600 mb-3">🧤</div>
            <h4 class="font-bold text-gray-900 mb-2">Mahamat Nour</h4>
            <p class="text-sm text-gray-600">Arrêts décisifs dans les moments clés</p>
          </div>
          
          <div class="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-200 text-center">
            <div class="text-4xl font-bold text-yellow-600 mb-3">⚽</div>
            <h4 class="font-bold text-gray-900 mb-2">Issa Moussa</h4>
            <p class="text-sm text-gray-600">Buteur et créateur d'occasions</p>
          </div>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Users class="mr-2 text-bambe-600" size={20} />
            Réactions Post-Match
          </h3>
          <div class="space-y-4">
            <div class="border-l-4 border-bambe-500 pl-4 py-2">
              <p class="font-bold text-gray-900">Khalil Ibrahim, entraîneur de l'AS Bambé :</p>
              <p class="text-gray-700 italic">"Je suis fier de mes joueurs. Ils ont montré du caractère, de la détermination et une belle qualité de jeu. Ce match nul face à une équipe de la qualité du Galactique prouve que nous sommes sur la bonne voie."</p>
            </div>
            
            <div class="border-l-4 border-green-500 pl-4 py-2">
              <p class="font-bold text-gray-900">Abderamane Ali, capitaine de l'AS Bambé :</p>
              <p class="text-gray-700 italic">"C'était un match très intense, comme nous les aimons. Nous avons su réagir après avoir été menés. Cela montre la solidité mentale de ce groupe."</p>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12 pt-8 border-t border-gray-200">
          <p class="text-xl font-bold text-gray-900">Prochain match : AS Santé d'Abéché vs AS Bambé</p>
          <p class="text-lg text-gray-600">Dimanche 01 Décembre 2024 - 15h30</p>
        </div>
      `,
      excerpt: "Dans un match palpitant, les Verts de Moundou arrachent le match nul 2-2 face au Galactique de Ndjamena dans un match amical de haute intensité.",
      category: "Match Amical",
      subcategory: "Préparation Saison 2025",
      date: "15 Juin 2025",
      author: "Rédaction Sportive ASB",
      readTime: "8 min",
      views: 3245,
      comments: 89,
      shares: 156,
      image: "/actu.jpg",
      tags: ["Match Amical", "Galactique Ndjamena", "Nul 2-2", "Préparation", "Spectacle"],
      featured: true,
      matchDetails: {
        score: "2-2",
        venue: "Stade Municipal de Moundou",
        attendance: "3,500 spectateurs",
        referee: "Ahmed Youssouf",
        weather: "Ensoleillé, 28°C"
      }
    },
    2: {
      id: 2,
      title: "VICTOIRE ! AS Santé d'Abéché 0-1 AS Bambé - Les Verts s'imposent à l'extérieur !",
      content: `
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Une Victoire Méritée à l'Extérieur</h2>
        <p class="text-lg text-gray-700 mb-6">Ce dimanche 01 décembre 2024, l'AS Bambé a remporté une victoire précieuse sur le terrain de l'AS Santé d'Abéché. Dans un match serré et tactiquement très construit, les Verts de Moundou se sont imposés 1-0 grâce à un but d'Issa Moussa en première mi-temps. Une performance solide qui confirme les bons résultats de la préparation.</p>
        
        <div class="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl mb-8 border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Trophy class="mr-2 text-green-600" size={20} />
            VICTOIRE DES VERTS !
          </h3>
          <div class="grid grid-cols-2 gap-6">
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-900">AS Santé Abéché</div>
              <div class="text-6xl font-black text-red-700 mt-2">0</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-900">AS Bambé</div>
              <div class="text-6xl font-black text-green-700 mt-2">1</div>
            </div>
          </div>
          <div class="text-center mt-4 text-gray-600">Victoire méritée à l'extérieur !</div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-xl mb-6 border border-yellow-200">
          <div class="flex items-center">
            <Star class="text-yellow-500 mr-3" size={20} />
            <span class="font-bold text-gray-900">BUT VICTOIRE À LA 32ème MINUTE</span>
          </div>
          <p class="text-gray-700 mt-2">Issa Moussa (AS Bambé) - Frappe croisée du pied droit après une contre-attaque collective</p>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center mt-8">
          <Users class="mr-2 text-blue-600" size={20} />
          Composition de l'Équipe
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white p-6 rounded-xl border border-gray-200">
            <h4 class="text-lg font-bold text-gray-900 mb-4 text-center">XI de Départ</h4>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">Gardien</span>
                <span class="font-bold">Mahamat Nour</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Défense</span>
                <span class="font-bold">Ali Mahamat</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600"></span>
                <span class="font-bold">Hassan Youssouf</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600"></span>
                <span class="font-bold">Djibrine Abakar</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600"></span>
                <span class="font-bold">Moussa Haroun</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl border border-gray-200">
            <h4 class="text-lg font-bold text-gray-900 mb-4 text-center">Milieu & Attaque</h4>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">Milieu</span>
                <span class="font-bold">Abderamane Ali (cap)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600"></span>
                <span class="font-bold">Issa Moussa</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600"></span>
                <span class="font-bold">Haroun Djibrine</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600"></span>
                <span class="font-bold">Ahmed Ali</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Attaque</span>
                <span class="font-bold">Mahamat Ali - Youssouf Issa</span>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center mt-8">
          <Target class="mr-2 text-red-500" size={20} />
          Analyse Tactique de la Victoire
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
            <h4 class="text-lg font-bold text-gray-900 mb-3 text-center">1. Organisation Défensive</h4>
            <p class="text-sm text-gray-600 text-center">Ligne défensive compacte et placement parfait</p>
          </div>
          
          <div class="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200">
            <h4 class="text-lg font-bold text-gray-900 mb-3 text-center">2. Transition Rapide</h4>
            <p class="text-sm text-gray-600 text-center">Projection rapide dès la récupération du ballon</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-200">
            <h4 class="text-lg font-bold text-gray-900 mb-3 text-center">3. Maîtrise du Milieu</h4>
            <p class="text-sm text-gray-600 text-center">Dominance technique et physique au centre</p>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center mt-8">
          <Award class="mr-2 text-yellow-600" size={20} />
          Les Performances Individuelles
        </h3>
        
        <div class="space-y-4 mb-8">
          <div class="bg-gradient-to-r from-green-50 to-white p-4 rounded-xl border border-green-200">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-bold text-gray-900">Issa Moussa</h4>
                <p class="text-sm text-gray-600">Buteur et homme du match</p>
              </div>
              <div class="text-2xl">⭐</div>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl border border-blue-200">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-bold text-gray-900">Mahamat Nour</h4>
                <p class="text-sm text-gray-600">Arrêt décisif à la 75ème minute</p>
              </div>
              <div class="text-2xl">🧤</div>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-yellow-50 to-white p-4 rounded-xl border border-yellow-200">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-bold text-gray-900">Hassan Youssouf</h4>
                <p class="text-sm text-gray-600">Roc défensif, leadership exemplaire</p>
              </div>
              <div class="text-2xl">🛡️</div>
            </div>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center mt-8">
          <BarChart class="mr-2 text-purple-500" size={20} />
          Statistiques Complètes du Match
        </h3>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-white p-4 rounded-xl border border-gray-200 text-center">
            <div class="text-2xl font-bold text-gray-900 mb-1">54% - 46%</div>
            <div class="text-sm text-gray-600">Possession</div>
          </div>
          
          <div class="bg-white p-4 rounded-xl border border-gray-200 text-center">
            <div class="text-2xl font-bold text-gray-900 mb-1">8 - 6</div>
            <div class="text-sm text-gray-600">Tirs</div>
          </div>
          
          <div class="bg-white p-4 rounded-xl border border-gray-200 text-center">
            <div class="text-2xl font-bold text-gray-900 mb-1">5 - 3</div>
            <div class="text-sm text-gray-600">Corners</div>
          </div>
          
          <div class="bg-white p-4 rounded-xl border border-gray-200 text-center">
            <div class="text-2xl font-bold text-gray-900 mb-1">14 - 9</div>
            <div class="text-sm text-gray-600">Fautes</div>
          </div>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Users class="mr-2 text-bambe-600" size={20} />
            Réactions Officielles
          </h3>
          <div class="space-y-4">
            <div class="border-l-4 border-bambe-500 pl-4 py-2">
              <p class="font-bold text-gray-900">Khalil Ibrahim, entraîneur de l'AS Bambé :</p>
              <p class="text-gray-700 italic">"Je suis très satisfait de la performance de mon équipe. Nous avons dominé la première mi-temps et fait preuve d'une grande maturité en seconde période. Cette victoire à l'extérieur face à une bonne équipe est importante pour la confiance du groupe."</p>
            </div>
            
            <div class="border-l-4 border-green-500 pl-4 py-2">
              <p class="font-bold text-gray-900">Rangar Abel Masra, président de l'AS Bambé :</p>
              <p class="text-gray-700 italic">"Je suis fier de mes joueurs. Ils ont montré les vraies valeurs du club : engagement, détermination et solidarité. Cette victoire est le fruit d'un travail sérieux et d'une préparation rigoureuse."</p>
            </div>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center mt-8">
          <Calendar class="mr-2 text-blue-600" size={20} />
          Impact de Cette Victoire
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white p-4 rounded-xl border border-gray-200">
            <ul class="space-y-3">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Confiance retrouvée pour le groupe</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Validation du projet sportif</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Intégration réussie des jeunes</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white p-4 rounded-xl border border-gray-200">
            <ul class="space-y-3">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Renforcement de l'attractivité</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Préparation optimale validée</span>
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Signal fort pour la concurrence</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="text-center mt-12 pt-8 border-t border-gray-200">
          <p class="text-xl font-bold text-gray-900">Prochain match à domicile : AS Bambé vs Renaissance FC</p>
          <p class="text-lg text-gray-600">Dimanche 15 Décembre 2024 - 16h00</p>
        </div>
      `,
      excerpt: "Dans un match serré, l'AS Bambé s'impose 1-0 face à l'AS Santé d'Abéché grâce à un but d'Issa Moussa. Une victoire importante pour la confiance de l'équipe.",
      category: "Match Amical",
      subcategory: "Victoire à l'Extérieur",
      date: "01 Décembre 2024",
      author: "Journaliste Sportif ASB",
      readTime: "10 min",
      views: 2890,
      comments: 74,
      shares: 203,
      image: "/actu1.jpg",
      tags: ["Victoire", "Extérieur", "AS Santé Abéché", "1-0", "Préparation Saison"],
      featured: true,
      matchDetails: {
        score: "0-1",
        venue: "Stade Municipal d'Abéché",
        attendance: "2,800 spectateurs",
        referee: "Moussa Adam",
        weather: "Nuageux, 26°C"
      }
    },
    3: {
      id: 3,
      title: "Football : AS Bambé de Moundou représente le Tchad au tournoi International « FOU de FOOT » au Cameroun",
      content: `
        <p>Ce samedi 24 août 2024, AS Bambé club de Moundou, fier représentant du Tchad, entame sa participation au tournoi international « FOU de FOOT » au Cameroun. Logé dans la poule A, le club tchadien, qui sera l'unique équipe étrangère du tournoi, débutera son parcours contre Gazelle FA de Garoua au stade Annexe OMNISPORTS ROMDE, à 15h30.</p>
        
        <p>Sous la houlette du président Rangar Abel Masra, AS Bambé aborde cette compétition avec un mélange d'excitation et d'espoir. Pour Rangar, ce tournoi constitue une opportunité précieuse pour les jeunes footballeurs tchadiens. « Au-delà de la quête du trophée, notre objectif principal est de mettre en avant le talent de nos jeunes joueurs et de saisir l'occasion pour leur permettre de se faire repérer par des recruteurs, » souligne-t-il.</p>
        
        <p>Le « FOU de FOOT », qui en est à sa 4e édition, est placé sous l'égide de Samuel Eto'o, légende du football camerounais. Ce tournoi n'est pas seulement une vitrine pour les clubs mais aussi une plateforme cruciale pour le repérage de nouveaux talents. En plus du défi sportif, les rencontres offrent aux jeunes talents une chance de se faire connaître sur la scène internationale.</p>
        
        <p>Les yeux seront rivés sur le Bambé Club de Moundou pour voir comment ils se mesureront aux clubs locaux comme FC Bamenda, Gazelle FA, CFF Champion et Sporting de Garoua. L'aventure promet d'être pleine de défis pour les représentants du Tchad.</p>
        
        <p class="font-bold mt-6">Mbaigoto Josué.</p>
      `,
      excerpt: "AS Bambé, unique représentant tchadien, participe au prestigieux tournoi FOU de FOOT au Cameroun sous le patronage de Samuel Eto'o.",
      category: "Foot Masculin",
      subcategory: "Football International",
      date: "Août 24, 2024",
      author: "Rédaction AS Bambé",
      readTime: "4 min",
      views: 1842,
      comments: 42,
      shares: 156,
      image: "/bambe1.jpeg",
      tags: ["Tournoi International", "FOU de FOOT", "Cameroun", "Samuel Eto'o", "Gazelle FA"],
      featured: true
    }
  };

  useEffect(() => {
    // Simulation de chargement
    setTimeout(() => {
      const content = articlesData[id];
      if (content) {
        setArticle(content);
        setViews(content.views);
        setLikes(Math.floor(content.views / 10));
      } else {
        // Rediriger vers l'article 1 si l'ID n'existe pas
        setArticle(articlesData[1]);
        setViews(articlesData[1].views);
        setLikes(Math.floor(articlesData[1].views / 10));
      }
      setIsLoading(false);
    }, 300);
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papier !');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-bambe-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de l'article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link to="/actualites" className="text-bambe-600 hover:text-bambe-700 font-medium">
            ← Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white shadow-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/actualites"
            className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour aux actualités
          </Link>
        </div>
      </motion.div>

      {/* Hero Article */}
      <section className="relative bg-gradient-to-br from-bambe-900 to-bambe-700 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Catégorie et date */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                {article.category}
              </span>
              {article.subcategory && (
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  {article.subcategory}
                </span>
              )}
              <span className="text-white/80">•</span>
              <span className="flex items-center text-white/80">
                <Calendar size={16} className="mr-2" />
                {article.date}
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              {article.title}
            </h1>

            {/* Auteur et métriques */}
            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-t border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <div className="font-bold">{article.author}</div>
                  <div className="text-sm text-white/80">Rédacteur AS Bambé</div>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <span className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {article.readTime} de lecture
                </span>
                <span className="flex items-center">
                  <Eye size={16} className="mr-2" />
                  {views.toLocaleString()} vues
                </span>
                {article.matchDetails && (
                  <span className="flex items-center">
                    <Trophy size={16} className="mr-2" />
                    {article.matchDetails.score}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12">
          {/* Article */}
          <div>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image principale */}
              {/* {article.image && (
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <p className="text-white text-sm">
                      Photo officielle AS Bambé - {article.date}
                    </p>
                  </div>
                </div>
              )} */}

              {/* Match Details */}
              {/* {article.matchDetails && (
                <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Trophy className="mr-3 text-yellow-500" size={20} />
                    Informations du Match
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Score</div>
                      <div className="text-2xl font-bold text-gray-900">{article.matchDetails.score}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Stade</div>
                      <div className="text-sm font-bold text-gray-900">{article.matchDetails.venue}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Affluence</div>
                      <div className="text-sm font-bold text-gray-900">{article.matchDetails.attendance}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Arbitre</div>
                      <div className="text-sm font-bold text-gray-900">{article.matchDetails.referee}</div>
                    </div>
                  </div>
                </div>
              )} */}

              {/* Contenu */}
              {/* <div className="p-8">
                {/* Chapeau */}
                {/* <div className="mb-8 p-6 bg-bambe-50 rounded-xl border border-bambe-100">
                  <p className="text-lg font-medium text-gray-800 italic">
                    {article.excerpt}
                  </p>
                </div> */}

                {/* Contenu HTML */}
                <div 
                  className="prose prose-lg max-w-none mb-12"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                /> 

                {/* Tags */}
                {/* <div className="py-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Mots-clés</h3>
                  <div className="flex flex-wrap gap-3">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-bambe-100 hover:text-bambe-700 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div> */}

                {/* Actions */}
                {/* <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-2 ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
                    >
                      <Heart className={isLiked ? 'fill-red-500' : ''} size={20} />
                      <span>{likes} likes</span>
                    </button>
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 text-gray-600 hover:text-bambe-600"
                    >
                      <Share2 size={20} />
                      <span>Partager</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-bambe-600">
                      <MessageCircle size={20} />
                      <span>{article.comments} commentaires</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button className="flex items-center text-gray-600 hover:text-bambe-600">
                      <Bookmark size={20} className="mr-2" />
                      Sauvegarder
                    </button>
                    
                    <Link
                      to="/actualites"
                      className="inline-flex items-center text-bambe-600 hover:text-bambe-700 font-medium"
                    >
                      ← Retour aux actualités
                    </Link>
                  </div>
                </div> */}

                {/* Auteur détaillé */}
                {/* <div className="bg-gray-50 rounded-xl p-8 mt-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-bambe-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User size={32} className="text-bambe-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        À propos de l'auteur
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.author} est journaliste sportif spécialisé dans le football tchadien. 
                        Il suit l'AS Bambé depuis plusieurs années et couvre régulièrement les actualités du club.
                      </p>
                      <div className="text-sm text-gray-500">
                        Contact : redaction@asbambe.td
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Navigation des articles */}
                {/* <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Autres articles récents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.values(articlesData)
                      .filter(item => item.id !== article.id)
                      .slice(0, 2)
                      .map(item => (
                        <Link
                          key={item.id}
                          to={`/actualites/${item.id}`}
                          className="group block"
                        >
                          <div className="bg-white rounded-xl border border-gray-200 hover:border-bambe-300 p-4 transition-all hover:shadow-md">
                            <div className="flex items-start gap-4">
                              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                />
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900 group-hover:text-bambe-600 line-clamp-2">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div> */}
              {/* </div> */}
            </motion.article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualiteDetail;