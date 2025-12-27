import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, MessageCircle, Bookmark, Eye, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const ActualiteDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


    useEffect(() =>{
    window.scrollTo(0,0)
   },[])


  // Données de l'article (pour l'exemple - en pratique, tu récupérerais depuis une API ou JSON)
  const articlesData = {
    1: {
      id: 1,
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
      image: "/bambe1.jpeg", // Utilise ta vraie photo
      tags: ["Tournoi International", "FOU de FOOT", "Cameroun", "Samuel Eto'o", "Gazelle FA"],
      featured: true
    }
  };

  // Articles similaires
  const relatedData = [
    {
      id: 2,
      title: "Fin de saison 2024-2025 : Bilan et perspectives pour AS Bambé",
      date: "Juin 2025",
      category: "Foot Masculin",
      image: "/bambe2.jpeg",
      excerpt: "Retour sur une saison riche en enseignements pour les Verts de Moundou."
    },
    {
      id: 3,
      title: "Président Rangar Abel Masra : Vision et projets pour le club",
      date: "2025",
      category: "Club",
      image: "/bambe3.jpeg",
      excerpt: "Le président dévoile ses ambitions pour l'avenir de l'AS Bambé."
    },
    {
      id: 4,
      title: "Les jeunes talents du centre de formation AS Bambé",
      date: "Mai 2024",
      category: "Formation",
      image: "/bambe5.jpeg",
      excerpt: "Découvrez les futurs espoirs du football tchadien formés à Moundou."
    }
  ];

  useEffect(() => {
    // Simulation de chargement
    setTimeout(() => {
      setArticle(articlesData[id] || articlesData[1]);
      setRelatedArticles(relatedData);
      setIsLoading(false);
      
      // Simuler l'augmentation des vues
      if (articlesData[id]) {
        articlesData[id].views += 1;
      }
    }, 500);
  }, [id]);

  const handleShare = (platform) => {
    const shareUrl = window.location.href;
    const shareText = article?.title;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        break;
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
                  {article.views.toLocaleString()} vues
                </span>
                <span className="flex items-center">
                  <MessageCircle size={16} className="mr-2" />
                  {article.comments} commentaires
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article */}
          <div className="lg:col-span-2">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image principale */}
              {article.image && (
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <p className="text-white text-sm">
                      Photo : AS Bambé lors du tournoi FOU de FOOT au Cameroun
                    </p>
                  </div>
                </div>
              )}

              {/* Contenu */}
              <div className="p-8">
                {/* Chapeau */}
                <div className="mb-8 p-6 bg-bambe-50 rounded-xl border border-bambe-100">
                  <p className="text-lg font-medium text-gray-800 italic">
                    {article.excerpt}
                  </p>
                </div>

                {/* Contenu HTML */}
                <div 
                  className="prose prose-lg max-w-none mb-12"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="py-8 border-t border-gray-200">
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
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      aria-label="Partager sur Facebook"
                    >
                      <Facebook size={20} />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="p-3 bg-blue-50 text-blue-400 rounded-full hover:bg-blue-100 transition-colors"
                      aria-label="Partager sur Twitter"
                    >
                      <Twitter size={20} />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="p-3 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                      aria-label="Partager sur LinkedIn"
                    >
                      <Linkedin size={20} />
                    </button>
                    <button
                      onClick={() => handleShare('email')}
                      className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Partager par email"
                    >
                      <Mail size={20} />
                    </button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-600 hover:text-bambe-600">
                      <Bookmark size={20} className="mr-2" />
                      Sauvegarder
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-bambe-600">
                      <Share2 size={20} className="mr-2" />
                      Partager
                    </button>
                  </div>
                </div>

                {/* Auteur détaillé */}
                <div className="bg-gray-50 rounded-xl p-8 mt-8">
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
                </div>
              </div>
            </motion.article>

            {/* Commentaires (simplifié) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Commentaires ({article.comments})
              </h2>
              <div className="space-y-6">
                {/* Exemple de commentaire */}
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-bambe-100 rounded-full"></div>
                    <div>
                      <div className="font-bold">Supporteur ASB</div>
                      <div className="text-sm text-gray-500">Il y a 2 jours</div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Fière de notre équipe ! Que cette participation ouvre des portes à nos jeunes talents.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-bambe-50 rounded-xl border border-bambe-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Laisser un commentaire</h3>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4"
                  rows="4"
                  placeholder="Votre commentaire..."
                ></textarea>
                <button className="px-6 py-3 bg-bambe-600 text-white rounded-lg font-medium hover:bg-bambe-700">
                  Publier le commentaire
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Articles similaires */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Articles similaires
              </h2>
              
              <div className="space-y-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/actualites/${related.id}`}
                    className="group block"
                  >
                    <div className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 group-hover:text-bambe-600 line-clamp-2 mb-1">
                          {related.title}
                        </h3>
                        <div className="text-sm text-gray-500">
                          {related.date} • {related.category}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-bambe-600 to-bambe-700 text-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">
                Ne manquez aucune actualité
              </h3>
              <p className="text-bambe-100 mb-6">
                Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles de l'AS Bambé.
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
            </motion.div>

            {/* Statistiques article */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Cet article en chiffres
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Temps de lecture</span>
                  <span className="font-bold">{article.readTime}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Vues</span>
                  <span className="font-bold">{article.views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Partages</span>
                  <span className="font-bold">{article.shares}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Commentaires</span>
                  <span className="font-bold">{article.comments}</span>
                </div>
              </div>
            </motion.div>

            {/* Catégories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Catégories
              </h3>
              
              <div className="space-y-3">
                {[
                  { name: "Foot Masculin", count: 12 },
                  { name: "Foot Féminin", count: 4 },
                  { name: "Formation", count: 8 },
                  { name: "International", count: 3 },
                  { name: "Club", count: 6 }
                ].map((category) => (
                  <Link
                    key={category.name}
                    to="/actualites"
                    className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg group"
                  >
                    <span className="text-gray-700 group-hover:text-bambe-600">
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-bambe-500">
                      ({category.count})
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-bambe-800 to-bambe-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Suivez toute l'actualité de l'AS Bambé
          </h2>
          
          <p className="text-xl text-bambe-100 mb-8 max-w-2xl mx-auto">
            Ne manquez aucun match, aucune interview, aucune actualité de votre club préféré.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/actualites"
              className="bg-white text-bambe-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Voir toutes les actualités
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActualiteDetail;