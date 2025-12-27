import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  Calendar, User, Clock, Eye, MessageCircle, Share2, 
  Bookmark, ChevronLeft, Trophy, Users, Target, MapPin,
  Star, TrendingUp, Award, Zap, Heart, Globe, Tv, DollarSign,
  Handshake, CheckCircle, ArrowRight, Home, Instagram,
  Facebook, Twitter, Youtube, Linkedin, Award as AwardIcon,
  Target as TargetIcon, Users as UsersIcon, BarChart
} from 'lucide-react';
import detailedContent from '../data/detailedContent.json';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Simuler le chargement
    setTimeout(() => {
      const content = detailedContent[id];
      if (content) {
        setArticle(content);
        setViews(Math.floor(Math.random() * 5000) + 1000);
        setLikes(Math.floor(Math.random() * 300) + 50);
      } else {
        navigate('/actualites');
      }
      setLoading(false);
    }, 300);
  }, [id, navigate]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.subtitle,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié !');
    }
  };

  const getIconComponent = (iconName) => {
    const icons = {
      users: Users,
      tv: Tv,
      globe: Globe,
      clock: Clock,
      dollar: DollarSign,
      calendar: Calendar,
      handshake: Handshake,
    };
    return icons[iconName] || Users;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-bambe-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de l'article...</p>
        </div>
      </div>
    );
  }

  if (!article) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>

        {/* Navigation */}
        <div className="container mx-auto px-4 sm:px-6 relative z-20 pt-8">
          <div className="flex items-center justify-between">
            <Link
              to="/actualites"
              className="group inline-flex items-center gap-2 text-white hover:text-yellow-300 font-medium transition-colors"
            >
              <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
              <span>Retour aux actualités</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full ${isBookmarked ? 'bg-yellow-500/20' : 'bg-white/10'} hover:bg-white/20 transition-colors`}
              >
                <Bookmark className={`${isBookmarked ? 'text-yellow-300 fill-yellow-300' : 'text-white'}`} size={20} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Share2 className="text-white" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Contenu Hero */}
        <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full flex flex-col justify-end pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-bambe-600 to-bambe-700 text-white rounded-full text-sm font-bold">
                {article.category}
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 rounded-full text-sm font-bold flex items-center gap-2">
                <Star size={14} />
                EXCLUSIF
              </span>
              {article.tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
              {article.title}
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-yellow-300 font-bold mb-6 max-w-4xl">
              {article.subtitle}
            </h2>

            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-white/90 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-yellow-300" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} className="text-yellow-300" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-yellow-300" />
                <span>{article.readTime} de lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={18} className="text-yellow-300" />
                <span>{views.toLocaleString()} vues</span>
              </div>
            </div>

            {article.heroQuote && (
              <blockquote className="text-lg md:text-xl lg:text-2xl text-yellow-300 font-bold italic max-w-4xl border-l-4 border-yellow-400 pl-4 md:pl-6 py-2 md:py-3 my-6">
                "{article.heroQuote}"
              </blockquote>
            )}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="text-white/70 text-sm flex flex-col items-center">
            <span className="mb-2">Défiler</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contenu principal */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contenu */}
            <div className="lg:col-span-2">
              {article.sections && article.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="mb-12 md:mb-16"
                >
                  {section.type === 'hero' && (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-bambe-600 to-bambe-700 flex items-center justify-center">
                          <Trophy className="text-white" size={24} />
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900">
                          {section.title}
                        </h2>
                      </div>
                      
                      <div className="prose prose-lg max-w-none mb-8 md:mb-10">
                        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                          {section.content}
                        </p>
                      </div>

                      {section.stats && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-10">
                          {section.stats.map((stat, i) => {
                            const IconComponent = getIconComponent(stat.icon);
                            return (
                              <div key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-gray-200 hover:border-bambe-300 transition-colors">
                                <div className="flex justify-center mb-2 md:mb-3">
                                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-bambe-100 to-bambe-50 flex items-center justify-center">
                                    <IconComponent className="text-bambe-600" size={20} />
                                  </div>
                                </div>
                                <div className="text-xl md:text-2xl font-bold text-bambe-700 mb-1">
                                  {stat.value}
                                </div>
                                <div className="text-xs md:text-sm text-gray-600 font-medium">
                                  {stat.label}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {section.images && section.images.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                          {section.images.map((img, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.02 }}
                              className="rounded-lg md:rounded-xl overflow-hidden shadow-lg"
                            >
                              <img
                                src={img}
                                alt={`${section.title} ${i + 1}`}
                                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {section.type === 'match' && (
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                          <TargetIcon className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{section.title}</h3>
                      </div>
                      
                      <p className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg">
                        {section.content}
                      </p>

                      {section.highlights && (
                        <div className="space-y-3 md:space-y-4 mb-8">
                          {section.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-3 md:gap-4">
                              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                                <CheckCircle size={14} className="text-white" />
                              </div>
                              <span className="text-gray-800 font-medium text-sm md:text-base">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.stats && (
                        <div className="mb-8">
                          <h4 className="text-lg font-bold text-gray-900 mb-4">Statistiques du match</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Object.entries(section.stats).map(([key, value], i) => (
                              <div key={i} className="bg-white rounded-lg p-4 text-center border border-gray-200">
                                <div className="text-2xl font-bold text-bambe-700 mb-1">{value}</div>
                                <div className="text-xs text-gray-600 font-medium uppercase tracking-wide">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.image && (
                        <div className="rounded-lg md:rounded-xl overflow-hidden shadow-lg">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-64 md:h-80 object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {section.type === 'impact' && (
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-green-200">
                      <div className="flex items-center gap-4 mb-6">
                        <Zap className="text-green-600" size={32} />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{section.title}</h3>
                      </div>
                      
                      <p className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg">
                        {section.content}
                      </p>

                      {section.highlights && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          {section.highlights.map((highlight, i) => (
                            <div key={i} className="bg-white rounded-lg p-4 md:p-6 border border-green-100">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                  <TrendingUp className="text-green-600" size={16} />
                                </div>
                                <span className="font-bold text-gray-900">Impact #{i + 1}</span>
                              </div>
                              <p className="text-gray-700 text-sm md:text-base">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {section.type === 'recrutement' && (
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-200">
                      {/* Contenu similaire */}
                    </div>
                  )}

                  {section.type === 'infrastructure' && (
                    <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-purple-200">
                      {/* Contenu similaire */}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Galerie */}
              {article.gallery && article.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-12 md:mb-16"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-3">
                    <Heart className="text-red-500" size={24} />
                    Galerie des Moments Forts
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {article.gallery.map((img, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="relative rounded-lg md:rounded-xl overflow-hidden group cursor-pointer h-32 md:h-48"
                      >
                        <img
                          src={img}
                          alt={`Galerie ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Voir
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Témoignages */}
              {article.testimonials && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-12 md:mb-16"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-3">
                    <UsersIcon className="text-bambe-600" size={24} />
                    Ils en parlent
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {article.testimonials.map((testimonial, i) => (
                      <div key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-bambe-200">
                            <img
                              src={testimonial.image || '/bambe1.jpeg'}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                            <p className="text-bambe-600 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                        <blockquote className="text-gray-700 italic border-l-4 border-bambe-300 pl-4 py-2">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                <span className="text-gray-700 font-bold mr-2">Mots-clés :</span>
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-xs md:text-sm font-medium border border-gray-200 hover:border-bambe-300 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Actions Sociales */}
              <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4 md:gap-6">
                  <button
                    onClick={() => {
                      setIsLiked(!isLiked);
                      setLikes(isLiked ? likes - 1 : likes + 1);
                    }}
                    className={`flex items-center gap-2 ${isLiked ? 'text-red-500' : 'text-gray-700 hover:text-red-500'}`}
                  >
                    <Heart className={isLiked ? 'fill-red-500' : ''} size={20} />
                    <span>{likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 hover:text-bambe-600">
                    <MessageCircle size={20} />
                    <span>Commenter</span>
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 text-gray-700 hover:text-bambe-600"
                  >
                    <Share2 size={20} />
                    <span>Partager</span>
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">Partager sur :</span>
                  <div className="flex gap-2">
                    {[
                      { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700', label: 'Facebook' },
                      { icon: Twitter, color: 'bg-blue-400 hover:bg-blue-500', label: 'Twitter' },
                      { icon: Instagram, color: 'bg-pink-600 hover:bg-pink-700', label: 'Instagram' },
                      { icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800', label: 'LinkedIn' },
                    ].map((social, i) => (
                      <button
                        key={i}
                        className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center text-white`}
                        aria-label={social.label}
                      >
                        <social.icon size={16} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6 md:space-y-8">
                {/* Articles liés */}
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border border-gray-200">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                    <TrendingUp className="text-bambe-600" size={20} />
                    Sur le même thème
                  </h4>
                  
                  <div className="space-y-4 md:space-y-6">
                    {Object.values(detailedContent)
                      .filter(item => item.id !== id)
                      .slice(0, 3)
                      .map(item => (
                        <Link
                          key={item.id}
                          to={`/article/${item.id}`}
                          className="group block"
                        >
                          <div className="flex items-start gap-3 md:gap-4">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0">
                              <img
                                src={item.heroImage}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-bold text-gray-900 group-hover:text-bambe-600 text-sm md:text-base line-clamp-2">
                                {item.title}
                              </h5>
                              <p className="text-xs md:text-sm text-gray-500 mt-1">
                                {item.date}
                              </p>
                              <span className="inline-block mt-2 text-xs font-medium text-bambe-600 bg-bambe-50 px-2 py-1 rounded">
                                {item.category}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>

                  <Link
                    to="/actualites"
                    className="mt-4 md:mt-6 w-full text-center inline-flex items-center justify-center gap-2 text-bambe-600 hover:text-bambe-700 font-medium text-sm md:text-base"
                  >
                    Voir toutes les actualités
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Infos clés */}
                <div className="bg-gradient-to-br from-bambe-50 to-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border border-bambe-100">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                    <Zap className="text-yellow-500" size={20} />
                    Points Clés
                  </h4>
                  
                  <div className="space-y-3 md:space-y-4">
                    {[
                      "Première équipe tchadienne à Garoua",
                      "Visibilité internationale accrue",
                      "Expérience précieuse pour les jeunes",
                      "Reconnaissance médiatique",
                      "Portes ouvertes pour les sponsors",
                      "Inspiration pour la jeunesse"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                        </div>
                        <span className="text-gray-700 text-sm md:text-base">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-bambe-600 to-bambe-700 text-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                    📬 Newsletter AS Bambé
                  </h4>
                  <p className="text-bambe-100 text-sm md:text-base mb-4 md:mb-6">
                    Ne manquez aucun article exclusif. Recevez nos dernières actualités directement.
                  </p>
                  
                  <form className="space-y-3 md:space-y-4">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full px-4 py-2 md:py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-bambe-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-bambe-700 hover:bg-gray-100 font-bold py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
                    >
                      S'abonner gratuitement
                    </button>
                  </form>
                  
                  <p className="text-xs text-bambe-200 mt-3 md:mt-4">
                    Sans spam. Désabonnez-vous à tout moment.
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                    🏆 Soutenez le club
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">
                    Devenez membre officiel et bénéficiez d'avantages exclusifs.
                  </p>
                  
                  <div className="space-y-3 md:space-y-4">
                    <Link
                      to="/contact"
                      className="block w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold py-2 md:py-3 rounded-lg transition-all hover:scale-105 text-sm md:text-base"
                    >
                      Devenir Membre
                    </Link>
                    <Link
                      to="/club"
                      className="block w-full text-center border-2 border-white hover:bg-white/10 text-white font-bold py-2 md:py-3 rounded-lg transition-all hover:scale-105 text-sm md:text-base"
                    >
                      Découvrir le Club
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-900 to-bambe-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <AwardIcon size={48} className="mx-auto mb-6 md:mb-8" />
            
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              L'aventure AS Bambé continue
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Chaque jour, nous écrivons un nouveau chapitre de l'histoire du football tchadien.
              Soyez aux premières loges de cette épopée.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/actualites"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all hover:scale-105 text-sm md:text-base"
              >
                Voir toutes les actualités
              </Link>
              <Link
                to="/"
                className="border-2 border-white hover:bg-white/10 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all hover:scale-105 text-sm md:text-base flex items-center gap-2"
              >
                <Home size={18} />
                Accueil
              </Link>
            </div>

            <div className="mt-8 md:mt-12 pt-8 border-t border-white/20">
              <p className="text-lg italic text-white/70 mb-6">
                "Le football est plus qu'un jeu. C'est une passion qui unit, une histoire qui se construit, 
                une fierté qui grandit. Ensemble, écrivons le prochain chapitre."
              </p>
              <p className="text-white font-bold">— AS Bambé de Moundou</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;