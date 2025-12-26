import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ChevronRight, Search, Filter, TrendingUp, Clock, Eye, MessageCircle, Share2, Bookmark, Newspaper } from 'lucide-react';

const Actualites = () => {
  const [activeCategory, setActiveCategory] = useState('toutes');
  const [searchQuery, setSearchQuery] = useState('');

  // Catégories d'actualités
  const categories = [
    { id: 'toutes', label: 'Toutes les actualités', count: 24 },
    { id: 'matchs', label: 'Matchs & Résultats', count: 8 },
    { id: 'club', label: 'Vie du Club', count: 6 },
    { id: 'transferts', label: 'Transferts', count: 3 },
    { id: 'jeunes', label: 'Centre de Formation', count: 4 },
    { id: 'interviews', label: 'Interviews', count: 3 }
  ];

  // Articles d'actualités
  const articles = [
    {
      id: 1,
      title: "Victoire historique 3-0 contre l'AS CotonTchad",
      excerpt: "Les Verts de Moundou réalisent une performance exceptionnelle face au leader du championnat lors de la 14ème journée.",
      content: "Dans un match très attendu au Stade Municipal de Moundou, l'AS Bambé a dominé l'AS CotonTchad sur le score de 3-0. Issa Moussa a ouvert le score à la 23ème minute, suivi d'un doublé de Haroun Djibrine en seconde mi-temps. Une victoire qui replace l'équipe dans la course au titre...",
      category: "matchs",
      date: "10 Mars 2024",
      author: "Redaction ASB",
      readTime: "5 min",
      views: 1245,
      comments: 42,
      image: "/images/actualites/victoire-coton.jpg",
      featured: true,
      tags: ["Victoire", "Championnat", "Performance"]
    },
    {
      id: 2,
      title: "Nouveau partenariat avec la Brasserie du Logone",
      excerpt: "Le club annonce un partenariat stratégique pour la saison 2024 avec la Brasserie du Logone.",
      content: "L'AS Bambé est fier d'annoncer la signature d'un partenariat de trois ans avec la Brasserie du Logone. Ce partenariat permettra au club de renforcer ses infrastructures et d'améliorer les conditions d'entraînement des équipes jeunes...",
      category: "club",
      date: "5 Mars 2024",
      author: "Direction Communication",
      readTime: "3 min",
      views: 892,
      comments: 18,
      image: "/images/actualites/partenariat.jpg",
      featured: true,
      tags: ["Partenariat", "Sponsor", "Développement"]
    },
    {
      id: 3,
      title: "Stage de pré-saison réussi au Cameroun",
      excerpt: "L'équipe s'est rendue au Cameroun pour un stage intensif de préparation de deux semaines.",
      content: "L'AS Bambé a effectué un stage de préparation au complexe sportif de Yaoundé. Sous la direction de l'entraîneur Khalil Ibrahim, les joueurs ont enchaîné les séances d'entraînement physique et tactique. Le stage s'est conclu par deux matchs amicaux remportés face à des formations locales...",
      category: "club",
      date: "28 Février 2024",
      author: "Service Presse",
      readTime: "4 min",
      views: 756,
      comments: 25,
      image: "/images/actualites/stage-cameroun.jpg",
      featured: false,
      tags: ["Préparation", "Stage", "Cameroun"]
    },
    {
      id: 4,
      title: "Signature du jeune espoir Mahamat Ali",
      excerpt: "Le club annonce la signature de Mahamat Ali, 17 ans, considéré comme l'un des plus grands espoirs du football tchadien.",
      content: "L'AS Bambé continue de miser sur la jeunesse avec la signature de Mahamat Ali, attaquant de 17 ans formé au centre de formation du club. Le jeune joueur a signé son premier contrat professionnel d'une durée de trois ans. 'C'est un rêve qui se réalise', a déclaré le jeune prodige...",
      category: "transferts",
      date: "20 Février 2024",
      author: "Service Presse",
      readTime: "3 min",
      views: 1103,
      comments: 36,
      image: "/images/actualites/signature-jeune.jpg",
      featured: false,
      tags: ["Signature", "Jeune", "Espoir"]
    },
    {
      id: 5,
      title: "Interview exclusive du capitaine Abderamane Ali",
      excerpt: "Le capitaine des Verts se confie sur les objectifs de la saison et l'ambiance dans le vestiaire.",
      content: "Dans une interview exclusive, Abderamane Ali, capitaine de l'AS Bambé, revient sur le début de saison, les objectifs du club et la cohésion du groupe. 'Nous avons une équipe soudée et ambitieuse. Chaque joueur sait ce qu'il a à faire pour atteindre nos objectifs'...",
      category: "interviews",
      date: "15 Février 2024",
      author: "Journal ASB",
      readTime: "7 min",
      views: 1542,
      comments: 67,
      image: "/images/actualites/interview-capitaine.jpg",
      featured: false,
      tags: ["Interview", "Capitaine", "Exclusivité"]
    },
    {
      id: 6,
      title: "L'équipe U19 remporte le tournoi régional",
      excerpt: "Les jeunes de l'AS Bambé s'imposent en finale du tournoi U19 du Logone Occidental.",
      content: "L'équipe U19 de l'AS Bambé a remporté le tournoi régional du Logone Occidental après une finale passionnante face à l'AS Moundou. Menés 1-0 à la mi-temps, les jeunes Verts ont retourné la situation en seconde période pour s'imposer 2-1. Une belle démonstration du travail effectué au centre de formation...",
      category: "jeunes",
      date: "10 Février 2024",
      author: "Centre Formation",
      readTime: "4 min",
      views: 632,
      comments: 29,
      image: "/images/actualites/victoire-u19.jpg",
      featured: false,
      tags: ["Jeunes", "Victoire", "Tournoi"]
    },
    {
      id: 7,
      title: "Rénovation des vestiaires du stade",
      excerpt: "Le club inaugure les nouveaux vestiaires modernisés du Stade Municipal.",
      content: "Après plusieurs mois de travaux, l'AS Bambé inaugure les vestiaires entièrement rénovés du Stade Municipal. Equipés des dernières technologies, ces nouveaux espaces offriront aux joueurs des conditions optimales de préparation et de récupération. Le président du club a salué cet investissement important pour l'avenir...",
      category: "club",
      date: "5 Février 2024",
      author: "Direction Projet",
      readTime: "3 min",
      views: 587,
      comments: 14,
      image: "/images/actualites/vestiaires.jpg",
      featured: false,
      tags: ["Infrastructures", "Rénovation", "Stade"]
    },
    {
      id: 8,
      title: "Premier clean sheet de la saison pour Mahamat Nour",
      excerpt: "Le gardien titulaire réalise sa première feuille blanche de la saison face au Renaissance FC.",
      content: "Mahamat Nour, gardien de l'AS Bambé, a réalisé une performance remarquable lors du match nul 0-0 face au Renaissance FC. L'arrêt décisif à la 89ème minute a préservé le point du match et offert au gardien son premier clean sheet de la saison. 'C'était important pour la confiance du groupe', a déclaré l'intéressé...",
      category: "matchs",
      date: "1 Février 2024",
      author: "Service Presse",
      readTime: "3 min",
      views: 721,
      comments: 21,
      image: "/images/actualites/clean-sheet.jpg",
      featured: false,
      tags: ["Gardien", "Clean Sheet", "Performance"]
    }
  ];

  // Articles populaires
  const popularArticles = [
    { id: 1, title: "La montée en puissance des jeunes talents", views: 1842 },
    { id: 2, title: "Analyse tactique de la victoire contre CotonTchad", views: 1567 },
    { id: 3, title: "Les coulisses de la préparation physique", views: 1321 },
    { id: 4, title: "Interview du nouvel entraîneur adjoint", views: 1189 }
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
      <section className="relative bg-gradient-to-br from-bambe-900 to-bambe-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Newspaper size={18} />
              <span className="font-medium">Actualités du Club</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Les Dernières Nouvelles
              <span className="block text-yellow-300">des Verts de Moundou</span>
            </h1>
            
            <p className="text-xl text-bambe-100 mb-8 max-w-3xl mx-auto">
              Suivez toute l'actualité de l'AS Bambé : matchs, transferts, interviews 
              et coulisses du club.
            </p>
            
            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une actualité, un joueur, un match..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-bambe-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-bambe-300" size={20} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Catégories */}
      <section className="sticky top-20 z-30 bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-bambe-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.label}</span>
                <span className={`text-sm px-2 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-gray-300 text-gray-700'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Principaux */}
          <div className="lg:col-span-2">
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
                      <div className="relative h-48 overflow-hidden">
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

            {/* Articles Réguliers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Toutes les Actualités
                <span className="text-gray-500 text-lg font-normal ml-2">
                  ({filteredArticles.length} articles)
                </span>
              </h2>
              
              <div className="space-y-6">
                {regularArticles.map((article) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 5 }}
                    className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="h-48 md:h-full bg-gray-200 relative overflow-hidden">
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-bambe-600 text-white text-xs font-medium rounded">
                              {article.category === 'matchs' ? 'Match' : 
                               article.category === 'club' ? 'Club' :
                               article.category === 'transferts' ? 'Transfert' :
                               article.category === 'jeunes' ? 'Jeunes' : 'Interview'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-bambe-600 transition-colors mb-2">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                              {article.excerpt}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Calendar size={12} className="mr-1" />
                                {article.date}
                              </span>
                              <span className="flex items-center">
                                <User size={12} className="mr-1" />
                                {article.author}
                              </span>
                              <span className="flex items-center">
                                <Clock size={12} className="mr-1" />
                                {article.readTime}
                              </span>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {article.tags.slice(0, 2).map((tag, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Eye size={12} className="mr-1" />
                                {article.views.toLocaleString()}
                              </span>
                              <span className="flex items-center">
                                <MessageCircle size={12} className="mr-1" />
                                {article.comments}
                              </span>
                            </div>
                            
                            <Link
                              to={`/actualites/${article.id}`}
                              className="flex items-center text-bambe-600 hover:text-bambe-700 font-medium text-sm"
                            >
                              Lire
                              <ChevronRight size={14} className="ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              {filteredArticles.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50">
                      <ChevronRight className="transform rotate-180" size={16} />
                    </button>
                    {[1, 2, 3].map((page) => (
                      <button
                        key={page}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium ${
                          page === 1
                            ? 'bg-bambe-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50">
                      <ChevronRight size={16} />
                    </button>
                  </nav>
                </div>
              )}

              {/* Aucun résultat */}
              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Search size={40} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Aucun article trouvé
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Aucun article ne correspond à votre recherche. Essayez avec d'autres mots-clés.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('toutes');
                    }}
                    className="mt-6 text-bambe-600 hover:text-bambe-700 font-medium"
                  >
                    Voir tous les articles
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Articles Populaires */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="mr-3 text-red-500" size={24} />
                Articles Populaires
              </h3>
              
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className="group flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-bambe-600 line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Eye size={10} className="mr-1" />
                        {article.views.toLocaleString()} vues
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-bambe-600 to-bambe-700 text-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <h3 className="text-xl font-bold mb-4">
                Newsletter AS Bambé
              </h3>
              <p className="text-bambe-100 mb-6">
                Recevez les dernières actualités du club directement dans votre boîte mail.
              </p>
              
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-bambe-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-bambe-700 hover:bg-gray-100 font-bold py-3 rounded-lg transition-colors"
                >
                  S'abonner
                </button>
              </form>
              
              <p className="text-xs text-bambe-200 mt-4">
                En vous abonnant, vous acceptez de recevoir nos communications.
              </p>
            </motion.div>

            {/* Archives */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Archives
              </h3>
              
              <div className="space-y-3">
                {['Mars 2024', 'Février 2024', 'Janvier 2024', 'Décembre 2023'].map((month) => (
                  <button
                    key={month}
                    className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg text-left group"
                  >
                    <span className="text-gray-700 group-hover:text-bambe-600">
                      {month}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-bambe-500">
                      (12)
                    </span>
                  </button>
                ))}
              </div>
              
              <button className="w-full mt-6 text-center text-bambe-600 hover:text-bambe-700 font-medium">
                Voir toutes les archives
              </button>
            </motion.div>
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