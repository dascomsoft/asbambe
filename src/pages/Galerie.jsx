// import { useState , useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Image as ImageIcon, Video, Camera,Archive ,  Filter, Download, Share2, Heart, X, Play, ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Galerie = () => {
//   const [activeCategory, setActiveCategory] = useState('toutes');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [viewMode, setViewMode] = useState('grid');
//   const [likedImages, setLikedImages] = useState(new Set());



//     useEffect(() =>{
//     window.scrollTo(0,0)
//    },[])

//   // Catégories de la galerie
//   const categories = [
//     { id: 'toutes', label: 'Toutes les photos', count: 156 },
//     { id: 'matchs', label: 'Matchs', count: 48 },
//     { id: 'entrainements', label: 'Entraînements', count: 32 },
//     { id: 'evenements', label: 'Événements', count: 28 },
//     { id: 'coulisses', label: 'Coulisses', count: 24 },
//     { id: 'stade', label: 'Stade & Infrastructures', count: 16 },
//     { id: 'portraits', label: 'Portraits Joueurs', count: 8 }
//   ];

//   // Images de la galerie
//   const galleryImages = [
//     {
//       id: 1,
//       title: "Victoire contre l'AS CotonTchad",
//       category: "matchs",
//       date: "10 Mars 2024",
//       photographer: "Service Communication ASB",
//       likes: 124,
//       downloads: 45,
//       type: "image",
//       url: "/images/galerie/victoire-coton-1.jpg",
//       tags: ["Victoire", "Championnat", "But", "Célébration"]
//     },
//     {
//       id: 2,
//       title: "Séance d'entraînement matinale",
//       category: "entrainements",
//       date: "8 Mars 2024",
//       photographer: "Mohamed Ali",
//       likes: 89,
//       downloads: 32,
//       type: "image",
//       url: "/images/galerie/entrainement-matin.jpg",
//       tags: ["Entraînement", "Préparation", "Équipe"]
//     },
//     {
//       id: 3,
//       title: "Signature du partenariat Brasserie du Logone",
//       category: "evenements",
//       date: "5 Mars 2024",
//       photographer: "Redaction ASB",
//       likes: 67,
//       downloads: 21,
//       type: "image",
//       url: "/images/galerie/signature-partenariat.jpg",
//       tags: ["Partenariat", "Événement", "Sponsor"]
//     },
//     {
//       id: 4,
//       title: "Cérémonie de remise des prix - Meilleur joueur",
//       category: "evenements",
//       date: "28 Février 2024",
//       photographer: "Studio Moundou",
//       likes: 142,
//       downloads: 38,
//       type: "video",
//       url: "https://youtube.com/embed/example",
//       thumbnail: "/images/galerie/remise-prix.jpg",
//       tags: ["Cérémonie", "Prix", "Joueur", "Récompense"]
//     },
//     {
//       id: 5,
//       title: "Les coulisses du vestiaire avant match",
//       category: "coulisses",
//       date: "25 Février 2024",
//       photographer: "Hassan Djibrine",
//       likes: 203,
//       downloads: 67,
//       type: "image",
//       url: "/images/galerie/coulisses-vestiaire.jpg",
//       tags: ["Coulisses", "Vestiaire", "Préparation", "Ambiance"]
//     },
//     {
//       id: 6,
//       title: "Stade Municipal sous les projecteurs",
//       category: "stade",
//       date: "22 Février 2024",
//       photographer: "Ahmat Youssouf",
//       likes: 98,
//       downloads: 29,
//       type: "image",
//       url: "/images/galerie/stade-nocturne.jpg",
//       tags: ["Stade", "Infrastructure", "Nocturne", "Lumières"]
//     },
//     {
//       id: 7,
//       title: "Portrait - Issa Moussa, meilleur buteur",
//       category: "portraits",
//       date: "20 Février 2024",
//       photographer: "Photo Pro Tchad",
//       likes: 176,
//       downloads: 54,
//       type: "image",
//       url: "/images/galerie/portrait-issa.jpg",
//       tags: ["Portrait", "Joueur", "Buteur", "Star"]
//     },
//     {
//       id: 8,
//       title: "Match amical au Cameroun",
//       category: "matchs",
//       date: "18 Février 2024",
//       photographer: "Service Presse",
//       likes: 112,
//       downloads: 41,
//       type: "image",
//       url: "/images/galerie/match-cameroun.jpg",
//       tags: ["Match", "Amical", "Cameroun", "Stage"]
//     },
//     {
//       id: 9,
//       title: "Séance de récupération",
//       category: "entrainements",
//       date: "15 Février 2024",
//       photographer: "Mohamed Ali",
//       likes: 76,
//       downloads: 23,
//       type: "image",
//       url: "/images/galerie/recuperation.jpg",
//       tags: ["Récupération", "Physique", "Soins", "Kiné"]
//     },
//     {
//       id: 10,
//       title: "Visite des jeunes supporters",
//       category: "evenements",
//       date: "12 Février 2024",
//       photographer: "Communication ASB",
//       likes: 145,
//       downloads: 39,
//       type: "image",
//       url: "/images/galerie/jeunes-supporters.jpg",
//       tags: ["Supporters", "Jeunes", "Rencontre", "Communauté"]
//     },
//     {
//       id: 11,
//       title: "Nouveaux équipements d'entraînement",
//       category: "coulisses",
//       date: "10 Février 2024",
//       photographer: "Hassan Djibrine",
//       likes: 88,
//       downloads: 27,
//       type: "image",
//       url: "/images/galerie/nouveaux-equipements.jpg",
//       tags: ["Équipement", "Matériel", "Modernisation"]
//     },
//     {
//       id: 12,
//       title: "Vue aérienne du Stade Municipal",
//       category: "stade",
//       date: "8 Février 2024",
//       photographer: "Drone Pro Tchad",
//       likes: 231,
//       downloads: 72,
//       type: "image",
//       url: "/images/galerie/stade-aerien.jpg",
//       tags: ["Stade", "Vue aérienne", "Infrastructure", "Moundou"]
//     }
//   ];

//   // Vidéos
//   const videos = [
//     {
//       id: 1,
//       title: "Résumé : AS Bambé 3-0 AS CotonTchad",
//       duration: "4:32",
//       views: "12.4K",
//       date: "10 Mars 2024",
//       category: "matchs"
//     },
//     {
//       id: 2,
//       title: "Interview du capitaine après la victoire",
//       duration: "6:15",
//       views: "8.7K",
//       date: "10 Mars 2024",
//       category: "matchs"
//     },
//     {
//       id: 3,
//       title: "Coulisses de la préparation physique",
//       duration: "8:42",
//       views: "15.2K",
//       date: "5 Mars 2024",
//       category: "entrainements"
//     },
//     {
//       id: 4,
//       title: "Documentaire : 30 ans d'histoire",
//       duration: "22:18",
//       views: "24.8K",
//       date: "1 Mars 2024",
//       category: "evenements"
//     }
//   ];

//   // Filtrage des images
//   const filteredImages = activeCategory === 'toutes' 
//     ? galleryImages 
//     : galleryImages.filter(img => img.category === activeCategory);

//   const filteredVideos = activeCategory === 'toutes' 
//     ? videos 
//     : videos.filter(video => video.category === activeCategory);

//   // Toggle like
//   const toggleLike = (id) => {
//     const newLiked = new Set(likedImages);
//     if (newLiked.has(id)) {
//       newLiked.delete(id);
//     } else {
//       newLiked.add(id);
//     }
//     setLikedImages(newLiked);
//   };

//   // Télécharger une image
//   const handleDownload = (image) => {
//     // Simulation de téléchargement
//     alert(`Téléchargement de "${image.title}" en cours...`);
//   };

//   // Partager une image
//   const handleShare = (image) => {
//     if (navigator.share) {
//       navigator.share({
//         title: image.title,
//         text: `Découvrez cette photo de l'AS Bambé : ${image.title}`,
//         url: window.location.href,
//       });
//     } else {
//       // Fallback pour les navigateurs qui ne supportent pas l'API Share
//       alert(`Partage de "${image.title}" - URL copiée dans le presse-papier`);
//     }
//   };

//   // Navigation lightbox
//   const goToNextImage = () => {
//     const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
//     const nextIndex = (currentIndex + 1) % filteredImages.length;
//     setSelectedImage(filteredImages[nextIndex]);
//   };

//   const goToPrevImage = () => {
//     const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
//     const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
//     setSelectedImage(filteredImages[prevIndex]);
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
      
// <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
//   {/* Background image pour la section Galerie */}
//   <div 
//     className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
//     style={{ backgroundImage: `url('/ballon1.jpg')` }}
//   >
//     {/* Overlay pour améliorer la lisibilité */}
//     <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-700/80 to-blue-500/70 z-10"></div>
    
//     {/* Effet de texture subtile */}
//     <div className="absolute inset-0 opacity-25">
//       <div className="absolute inset-0" style={{
//         backgroundImage: `radial-gradient(circle at 20% 40%, rgba(255,255,255,0.15) 0%, transparent 50%),
//                          radial-gradient(circle at 80% 60%, rgba(255,255,255,0.15) 0%, transparent 50%),
//                          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)`
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
//         <Camera size={18} className="text-yellow-300" />
//         <span className="font-medium text-white">Médiathèque du Club</span>
//       </motion.div>
      
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
//       >
//         Galerie Photos & Vidéos
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="block text-yellow-300 mt-2 text-2xl md:text-3xl lg:text-4xl"
//         >
//           AS Bambé Moundou
//         </motion.span>
//       </motion.h1>
      
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//         className="text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4 font-medium"
//       >
//         Plongez dans l'univers des Verts de Moundou à travers notre collection 
//         exclusive de photos et vidéos officielles.
//       </motion.p>
      
//       {/* Stats rapides améliorées */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8 }}
//         className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto px-4"
//       >
//         {[
//           { 
//             value: "156", 
//             label: "Photos", 
//             icon: <ImageIcon size={24} className="text-yellow-300" />,
//             bg: "from-green-500/20 to-green-600/20",
//             border: "border-green-400/30"
//           },
//           { 
//             value: "24", 
//             label: "Vidéos", 
//             icon: <Video size={24} className="text-blue-300" />,
//             bg: "from-blue-500/20 to-blue-600/20",
//             border: "border-blue-400/30"
//           },
//           { 
//             value: "7", 
//             label: "Catégories", 
//             icon: <Filter size={24} className="text-purple-300" />,
//             bg: "from-purple-500/20 to-purple-600/20",
//             border: "border-purple-400/30"
//           },
//           { 
//             value: "2.4K", 
//             label: "Téléchargements", 
//             icon: <Download size={24} className="text-yellow-300" />,
//             bg: "from-yellow-500/20 to-yellow-600/20",
//             border: "border-yellow-400/30"
//           }
//         ].map((stat, index) => (
//           <div 
//             key={index} 
//             className={`bg-gradient-to-br ${stat.bg} backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${stat.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}
//           >
//             <div className="flex items-center justify-center space-x-3 sm:space-x-4">
//               <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${stat.bg.replace('/20', '/30')} flex items-center justify-center group-hover:scale-110 transition-transform`}>
//                 {stat.icon}
//               </div>
//               <div className="text-left">
//                 <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5">{stat.value}</div>
//                 <div className="text-sm sm:text-base text-white/80 font-medium">{stat.label}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>
    
//       {/* Note sur les médias */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2 }}
//         className="mt-8 text-sm text-white/60 max-w-2xl mx-auto px-4"
//       >
//         ⚡ Accès instantané • 📸 Photos HD • 🎥 Vidéos 4K • 🔒 Contenu officiel
//       </motion.p>
//     </motion.div>
//   </div>
// </section>








//       {/* Catégories & Contrôles */}
//       <section className="sticky top-20 z-30 bg-white shadow-sm border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             {/* Catégories */}
//             <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveCategory(category.id)}
//                   className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
//                     activeCategory === category.id
//                       ? 'bg-bambe-600 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   <span>{category.label}</span>
//                   <span className={`text-sm px-2 py-0.5 rounded-full ${
//                     activeCategory === category.id
//                       ? 'bg-white/20'
//                       : 'bg-gray-300 text-gray-700'
//                   }`}>
//                     {category.count}
//                   </span>
//                 </button>
//               ))}
//             </div>

//             {/* Contrôles d'affichage */}
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => setViewMode('grid')}
//                   className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-bambe-100 text-bambe-600' : 'text-gray-500 hover:bg-gray-100'}`}
//                 >
//                   <Grid size={20} />
//                 </button>
//                 <button
//                   onClick={() => setViewMode('list')}
//                   className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-bambe-100 text-bambe-600' : 'text-gray-500 hover:bg-gray-100'}`}
//                 >
//                   <List size={20} />
//                 </button>
//               </div>
              
//               <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
//                 <Filter size={18} />
//                 <span>Filtrer</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Galerie Photos */}
//       <div className="container mx-auto px-4 py-8">
//         {/* Photos */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="mb-12"
//         >
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 flex items-center">
//               <ImageIcon className="mr-3 text-bambe-600" size={24} />
//               Photos
//               <span className="text-gray-500 text-lg font-normal ml-2">
//                 ({filteredImages.filter(img => img.type === 'image').length} photos)
//               </span>
//             </h2>
            
//             <div className="text-sm text-gray-500">
//               Toutes les photos sont libres de droits pour un usage non commercial
//             </div>
//           </div>

//           {/* Grille/Liste des photos */}
//           {viewMode === 'grid' ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {filteredImages
//                 .filter(img => img.type === 'image')
//                 .map((image) => (
//                   <motion.div
//                     key={image.id}
//                     layout
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     whileHover={{ y: -5 }}
//                     className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer"
//                     onClick={() => setSelectedImage(image)}
//                   >
//                     {/* Image */}
//                     <div className="relative h-64 overflow-hidden">
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
//                       {/* Badge catégorie */}
//                       <div className="absolute top-3 left-3">
//                         <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
//                           {image.category}
//                         </span>
//                       </div>
                      
//                       {/* Actions overlay */}
//                       <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toggleLike(image.id);
//                           }}
//                           className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white"
//                         >
//                           <Heart
//                             size={18}
//                             className={likedImages.has(image.id) ? 'text-red-500 fill-red-500' : 'text-gray-700'}
//                           />
//                         </button>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleDownload(image);
//                           }}
//                           className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white"
//                         >
//                           <Download size={18} className="text-gray-700" />
//                         </button>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleShare(image);
//                           }}
//                           className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white"
//                         >
//                           <Share2 size={18} className="text-gray-700" />
//                         </button>
//                       </div>
                      
//                       {/* Info overlay */}
//                       <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
//                         <h3 className="font-bold line-clamp-1">{image.title}</h3>
//                         <p className="text-sm opacity-90">{image.date} • {image.photographer}</p>
//                       </div>
//                     </div>
                    
//                     {/* Infos */}
//                     <div className="p-4">
//                       <h3 className="font-bold text-gray-900 line-clamp-1 mb-2">
//                         {image.title}
//                       </h3>
                      
//                       <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
//                         <span>{image.date}</span>
//                         <div className="flex items-center space-x-4">
//                           <span className="flex items-center">
//                             <Heart size={14} className="mr-1" />
//                             {image.likes + (likedImages.has(image.id) ? 1 : 0)}
//                           </span>
//                           <span className="flex items-center">
//                             <Download size={14} className="mr-1" />
//                             {image.downloads}
//                           </span>
//                         </div>
//                       </div>
                      
//                       {/* Tags */}
//                       <div className="flex flex-wrap gap-2">
//                         {image.tags.slice(0, 2).map((tag, index) => (
//                           <span
//                             key={index}
//                             className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                         {image.tags.length > 2 && (
//                           <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
//                             +{image.tags.length - 2}
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//             </div>
//           ) : (
//             // Mode liste
//             <div className="space-y-4">
//               {filteredImages
//                 .filter(img => img.type === 'image')
//                 .map((image) => (
//                   <motion.div
//                     key={image.id}
//                     layout
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     whileHover={{ x: 5 }}
//                     className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
//                     onClick={() => setSelectedImage(image)}
//                   >
//                     <div className="md:flex">
//                       <div className="md:w-48 flex-shrink-0">
//                         <div className="h-48 md:h-full bg-gray-200 relative overflow-hidden">
//                           {/* Badge catégorie */}
//                           <div className="absolute top-3 left-3">
//                             <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded">
//                               {image.category}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="flex-1 p-6">
//                         <div className="flex justify-between items-start mb-3">
//                           <div>
//                             <h3 className="text-xl font-bold text-gray-900 group-hover:text-bambe-600">
//                               {image.title}
//                             </h3>
//                             <p className="text-gray-600 mt-1">{image.photographer}</p>
//                           </div>
                          
//                           <div className="flex items-center space-x-2">
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 toggleLike(image.id);
//                               }}
//                               className="p-2 hover:bg-gray-100 rounded-full"
//                             >
//                               <Heart
//                                 size={18}
//                                 className={likedImages.has(image.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'}
//                               />
//                             </button>
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleDownload(image);
//                               }}
//                               className="p-2 hover:bg-gray-100 rounded-full"
//                             >
//                               <Download size={18} className="text-gray-400" />
//                             </button>
//                           </div>
//                         </div>
                        
//                         <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
//                           <span>{image.date}</span>
//                           <span className="flex items-center">
//                             <Heart size={14} className="mr-1" />
//                             {image.likes + (likedImages.has(image.id) ? 1 : 0)} likes
//                           </span>
//                           <span className="flex items-center">
//                             <Download size={14} className="mr-1" />
//                             {image.downloads} téléchargements
//                           </span>
//                         </div>
                        
//                         <div className="flex flex-wrap gap-2">
//                           {image.tags.map((tag, index) => (
//                             <span
//                               key={index}
//                               className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//             </div>
//           )}
//         </motion.div>

//         {/* Vidéos */}
//         {filteredVideos.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.1 }}
//             className="mb-12"
//           >
//             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//               <Video className="mr-3 text-red-500" size={24} />
//               Vidéos
//               <span className="text-gray-500 text-lg font-normal ml-2">
//                 ({filteredVideos.length} vidéos)
//               </span>
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {filteredVideos.map((video) => (
//                 <motion.div
//                   key={video.id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   whileHover={{ y: -5 }}
//                   className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
//                 >
//                   {/* Miniature vidéo */}
//                   <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                         <Play size={24} className="text-white ml-1" />
//                       </div>
//                     </div>
                    
//                     {/* Durée */}
//                     <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
//                       {video.duration}
//                     </div>
                    
//                     {/* Catégorie */}
//                     <div className="absolute top-3 left-3">
//                       <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded">
//                         {video.category}
//                       </span>
//                     </div>
//                   </div>
                  
//                   {/* Infos vidéo */}
//                   <div className="p-4">
//                     <h3 className="font-bold text-gray-900 line-clamp-2 mb-3">
//                       {video.title}
//                     </h3>
                    
//                     <div className="flex items-center justify-between text-sm text-gray-500">
//                       <span>{video.date}</span>
//                       <div className="flex items-center space-x-2">
//                         <span>{video.views} vues</span>
//                       </div>
//                     </div>
                    
//                     <button className="w-full mt-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors">
//                       Regarder
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* Aucun résultat */}
//         {filteredImages.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12"
//           >
//             <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
//               <Camera size={40} className="text-gray-400" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2">
//               Aucune photo trouvée
//             </h3>
//             <p className="text-gray-600 max-w-md mx-auto">
//               Aucune photo ne correspond à la catégorie sélectionnée.
//               Essayez une autre catégorie ou consultez toutes les photos.
//             </p>
//             <button
//               onClick={() => setActiveCategory('toutes')}
//               className="mt-6 text-bambe-600 hover:text-bambe-700 font-medium"
//             >
//               Voir toutes les photos
//             </button>
//           </motion.div>
//         )}
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative w-full max-w-6xl max-h-[90vh]"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Bouton fermer */}
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//               >
//                 <X size={24} className="text-white" />
//               </button>

//               {/* Navigation */}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   goToPrevImage();
//                 }}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//               >
//                 <ChevronLeft size={24} className="text-white" />
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   goToNextImage();
//                 }}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//               >
//                 <ChevronRight size={24} className="text-white" />
//               </button>

//               {/* Contenu */}
//               <div className="bg-white rounded-2xl overflow-hidden">
//                 {/* Image/Vidéo */}
//                 <div className="relative h-[60vh] bg-black flex items-center justify-center">
//                   {selectedImage.type === 'video' ? (
//                     <div className="w-full h-full">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
//                           <Play size={32} className="text-white ml-1" />
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center">
//                       <div className="text-white text-lg">Image: {selectedImage.title}</div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Infos */}
//                 <div className="p-6">
//                   <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                         {selectedImage.title}
//                       </h3>
                      
//                       <div className="flex items-center space-x-4 text-gray-600 mb-4">
//                         <span>{selectedImage.date}</span>
//                         <span>•</span>
//                         <span>{selectedImage.photographer}</span>
//                         <span>•</span>
//                         <span className="capitalize">{selectedImage.category}</span>
//                       </div>
                      
//                       <p className="text-gray-700 mb-6">
//                         Photo officielle de l'AS Bambé. Libre de droits pour un usage non commercial.
//                       </p>
                      
//                       {/* Tags */}
//                       <div className="flex flex-wrap gap-2 mb-6">
//                         {selectedImage.tags.map((tag, index) => (
//                           <span
//                             key={index}
//                             className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Actions */}
//                     <div className="md:w-64">
//                       <div className="bg-gray-50 rounded-xl p-4">
//                         <div className="grid grid-cols-2 gap-4 mb-6">
//                           <div className="text-center">
//                             <div className="text-2xl font-bold text-gray-900">
//                               {selectedImage.likes + (likedImages.has(selectedImage.id) ? 1 : 0)}
//                             </div>
//                             <div className="text-sm text-gray-600">Likes</div>
//                           </div>
//                           <div className="text-center">
//                             <div className="text-2xl font-bold text-gray-900">
//                               {selectedImage.downloads}
//                             </div>
//                             <div className="text-sm text-gray-600">Téléchargements</div>
//                           </div>
//                         </div>

//                         <div className="space-y-3">
//                           <button
//                             onClick={() => toggleLike(selectedImage.id)}
//                             className={`w-full py-3 rounded-lg font-medium flex items-center justify-center space-x-2 ${
//                               likedImages.has(selectedImage.id)
//                                 ? 'bg-red-50 text-red-600 border border-red-200'
//                                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                             }`}
//                           >
//                             <Heart
//                               size={20}
//                               className={likedImages.has(selectedImage.id) ? 'fill-red-600' : ''}
//                             />
//                             <span>
//                               {likedImages.has(selectedImage.id) ? 'Unlike' : 'Like'}
//                             </span>
//                           </button>

//                           <button
//                             onClick={() => handleDownload(selectedImage)}
//                             className="w-full py-3 bg-bambe-600 hover:bg-bambe-700 text-white rounded-lg font-medium flex items-center justify-center space-x-2"
//                           >
//                             <Download size={20} />
//                             <span>Télécharger</span>
//                           </button>

//                           <button
//                             onClick={() => handleShare(selectedImage)}
//                             className="w-full py-3 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium flex items-center justify-center space-x-2"
//                           >
//                             <Share2 size={20} />
//                             <span>Partager</span>
//                           </button>
//                         </div>

//                         <div className="mt-6 pt-6 border-t border-gray-200">
//                           <p className="text-sm text-gray-500">
//                             Résolution: 1920×1080 • Format: JPEG
//                           </p>
//                           <p className="text-sm text-gray-500 mt-1">
//                             © AS Bambé Moundou • Tous droits réservés
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Call to Action */}
//       <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="max-w-3xl mx-auto"
//           >
//             <Camera size={48} className="mx-auto mb-6" />
            
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Contribuez à Notre Galerie
//             </h2>
            
//             <p className="text-xl text-gray-300 mb-8">
//               Vous avez des photos ou vidéos de l'AS Bambé ? Partagez-les avec nous 
//               pour qu'elles soient publiées dans la galerie officielle du club.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
//                 Soumettre une photo
//               </button>
//               <button className="border-2 border-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300">
//                 Devenir photographe officiel
//               </button>
//             </div>
            
//             <div className="mt-8 text-sm text-gray-400">
//               Formats acceptés : JPG, PNG, MP4 • Taille max : 20MB • Crédit obligatoire
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Galerie;






























































import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Video, Camera, Filter, Download, Share2, Heart, X, Play, Grid, List, Target, Trophy, Users, Zap } from 'lucide-react';

const Galerie = () => {
  const [activeCategory, setActiveCategory] = useState('toutes');
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [likedImages, setLikedImages] = useState(new Set());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Images de la galerie
  const galleryImages = [
    {
      id: 1,
      title: "La Passion du Jeu",
      category: "inspiration",
      date: "2024",
      photographer: "AS Bambé",
      likes: 124,
      downloads: 45,
      type: "image",
      url: "/bambe15.jpeg",
      tags: ["Passion", "Football", "Émotion"]
    },
    {
      id: 2,
      title: "L'Esprit d'Équipe",
      category: "inspiration",
      date: "2024",
      photographer: "AS Bambé",
      likes: 89,
      downloads: 32,
      type: "image",
      url: "respect2.jpg",
      tags: ["Unité", "Collectif", "Cohesion"]
    },
    {
      id: 3,
      title: "La Détermination",
      category: "inspiration",
      date: "2024",
      photographer: "AS Bambé",
      likes: 67,
      downloads: 21,
      type: "image",
      url: "/respect1.jpg",
      tags: ["Détermination", "Effort", "Volonté"]
    },
    {
      id: 4,
      title: "La Fraternité",
      category: "inspiration",
      date: "2024",
      photographer: "AS Bambé",
      likes: 142,
      downloads: 38,
      type: "image",
      url: "/fraternite.jpg",
      tags: ["Amour", "Triomphe", "Partage"]
    },
    {
      id: 5,
      title: "L'Entraînement",
      category: "inspiration",
      date: "2024",
      photographer: "AS Bambé",
      likes: 203,
      downloads: 67,
      type: "image",
      url: "/bambe10.jpeg",
      tags: ["Discipline", "Rigueur", "Perfectionnement"]
    },
    {
      id: 6,
      title: "Le Respect",
      category: "inspiration",
      date: "2024",
      photographer: "AS Bambé",
      likes: 98,
      downloads: 29,
      type: "image",
      url: "respect.jpg",
      tags: ["Respect", "Sportivité", "Valeurs"]
    },
    {
      id: 7,
      title: "La Persévérance",
      category: "inspiration",
      date: "2024",
      photographer: "AS Bambé",
      likes: 176,
      downloads: 54,
      type: "image",
      url: "/perceverance.jpg",
      tags: ["Persévérance", "Résilience", "Courage"]
    },
    {
      id: 8,
      title: "La Fierté",
      category: "inspiration",
      date: "2024",
      photographer: "AS Bambé",
      likes: 112,
      downloads: 41,
      type: "image",
      url: "/stafftechnique.jpg",
      tags: ["Fierté", "Identité", "Appartenance"]
    }
  ];

  // Toggle like
  const toggleLike = (id) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedImages(newLiked);
  };

  // Télécharger une image
  const handleDownload = (image) => {
    // Simulation de téléchargement
    alert(`Téléchargement de "${image.title}" en cours...`);
  };

  // Partager une image
  const handleShare = (image) => {
    if (navigator.share) {
      navigator.share({
        title: image.title,
        text: `Découvrez cette photo inspirante de l'AS Bambé : ${image.title}`,
        url: window.location.href,
      });
    } else {
      alert(`Partage de "${image.title}" - URL copiée dans le presse-papier`);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=1600&auto=format&fit=crop')`,
            filter: 'brightness(0.7)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-blue-500/60 z-10"></div>
          
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 40%, rgba(255,255,255,0.15) 0%, transparent 50%),
                               radial-gradient(circle at 80% 60%, rgba(255,255,255,0.15) 0%, transparent 50%),
                               radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)`
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
              <Trophy size={18} className="text-yellow-300" />
              <span className="font-medium text-white">Philosophie Footballistique</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              L'Âme du Football
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="block text-yellow-300 mt-2 text-2xl md:text-3xl lg:text-4xl"
              >
                Par les Bleus de Moundou
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4 font-medium"
            >
              Plus qu'un sport, une passion. Plus qu'un jeu, une philosophie. 
              Découvrez les valeurs qui font battre le cœur de l'AS Bambé.
            </motion.p>
            
            {/* Principes fondamentaux */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12"
            >
              {[
                {
                  icon: <Target className="text-yellow-300" size={24} />,
                  title: "Excellence",
                  desc: "Toujours viser plus haut"
                },
                {
                  icon: <Users className="text-green-300" size={24} />,
                  title: "Unité",
                  desc: "Un seul cœur, une seule équipe"
                },
                {
                  icon: <Zap className="text-blue-300" size={24} />,
                  title: "Passion",
                  desc: "Le feu sacré du jeu"
                },
                {
                  icon: <Trophy className="text-red-300" size={24} />,
                  title: "Victoire",
                  desc: "L'honneur du résultat"
                }
              ].map((principle, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3">
                      {principle.icon}
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{principle.title}</div>
                    <div className="text-sm text-white/80">{principle.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Galerie Photos */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              L'Esprit en Images
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque photo raconte une histoire, chaque moment incarne une valeur. 
              Plongez dans l'univers visuel de notre philosophie footballistique.
            </p>
          </div>

          {/* Grille des photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Titre et description */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg md:text-xl mb-2">{image.title}</h3>
                    <p className="text-sm md:text-base opacity-90">{image.photographer}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {image.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophie détaillée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-bambe-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notre Crédo Footballistique
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-bambe-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="mr-3 text-bambe-600" size={24} />
                  Les Fondements
                </h3>
                <ul className="space-y-4">
                  {[
                    "Le football comme vecteur d'unité sociale",
                    "L'excellence technique au service du collectif",
                    "Le respect comme valeur cardinale",
                    "La persévérance comme état d'esprit",
                    "La transmission des valeurs aux jeunes générations",
                    "L'humilité dans la victoire, la dignité dans la défaite"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-bambe-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-bambe-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Trophy className="mr-3 text-yellow-500" size={24} />
                  L'Engagement
                </h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  À l'AS Bambé, chaque match est une promesse, chaque entraînement 
                  un engagement, chaque saison une nouvelle page d'histoire. 
                  Nous croyons en un football qui rassemble, qui inspire, qui 
                  fait rêver.
                </p>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center">
                    <Users className="text-bambe-600 mr-4" size={32} />
                    <div>
                      <div className="text-2xl font-bold text-bambe-700">Une Famille</div>
                      <div className="text-gray-600">Joueurs, staff, supporters - Unis dans la même passion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Citation finale */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 italic max-w-3xl mx-auto mb-8">
            "Le football n'est pas qu'une question de victoires et de défaites. 
            C'est l'âme d'un peuple, le reflet d'une communauté, 
            l'expression d'une passion partagée."
          </blockquote>
          <div className="text-gray-600 font-medium">
            — AS Bambé de Moundou
          </div>
        </motion.div>
      </div>

      {/* Lightbox simplifié */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton fermer */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Image */}
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="h-[60vh] bg-black flex items-center justify-center">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{selectedImage.photographer}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galerie;