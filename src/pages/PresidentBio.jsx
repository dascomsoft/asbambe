import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Trophy, Globe, Heart, Calendar, MapPin, Mail, Phone, Award, Target, Users as UsersIcon, Star } from 'lucide-react';

const PresidentBio = () => {
  const presidentData = {
    name: 'Rangar Masra Abel',
    title: 'Président de l\'AS Bambé de Moundou',
    birthPlace: 'Moundou, Logone Occidental, Tchad',
    birthDate: 'Années 1980',
    education: 'Études supérieures en gestion et développement',
    languages: 'Français, Arabe tchadien, Russe (apprentissage)',
    
    keyAchievements: [
      { 
        year: '2024', 
        title: 'Élection à la présidence',
        desc: 'Élu président de l\'AS Bambé, menant le club à sa première participation internationale au tournoi FOU de FOOT au Cameroun en tant que seul représentant tchadien.' 
      },
      { 
        year: 'Février 2024', 
        title: 'Partenariat stratégique',
        desc: 'Rencontre avec l\'ambassadeur de Russie au Tchad pour des partenariats éducatifs et sportifs, incluant des centres de langue russe à Moundou, Sarh et Abéché.' 
      },
      { 
        year: '2025', 
        title: 'Consolidation du club',
        desc: 'Consolidation du club en Ligue provinciale du Logone Occidental, avec focus sur la formation des jeunes talents et développement de partenariats internationaux.' 
      },
      { 
        year: 'Projets en cours', 
        title: 'Vision future',
        desc: 'Promotion du football comme outil de développement communautaire, visant des échanges avec clubs russes et développement des infrastructures sportives.' 
      }
    ],
    
    professionalBackground: [
      'Entrepreneur et leader associatif depuis 2010',
      'Expert en développement communautaire et jeunesse',
      'Initiateur de projets éducatifs innovants',
      'Spécialiste en partenariats internationaux'
    ],
    
    quotes: [
      '"Le football n\'est pas seulement un sport, c\'est un pont vers l\'avenir pour notre jeunesse tchadienne."',
      '"Notre mission va au-delà du terrain : former des citoyens responsables et offrir des opportunités."',
      '"Chaque match est une occasion de montrer le talent et la détermination de notre région."'
    ],
    
    contactInfo: {
      email: 'president@asbambe.td',
      phone: '+235 66 XX XX XX',
      location: 'Stade Municipal de Moundou, Logone Occidental'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bambe-900/90 via-bambe-700/80 to-bambe-600/60 z-10"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30"></div>
          <img
            src="/bambe3.jpeg" // Photo du président
            alt="Rangar Masra Abel - Président AS Bambé"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-20 text-center px-6 max-w-5xl"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-8 py-3 mb-6">
              <User className="text-yellow-300" size={24} />
              <span className="text-lg font-bold text-white">Président du Club</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl">
            {presidentData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-8">
            {presidentData.title}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin size={18} className="text-yellow-300" />
              <span>{presidentData.birthPlace}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Calendar size={18} className="text-yellow-300" />
              <span>{presidentData.birthDate}</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-10 py-4 rounded-xl text-lg shadow-2xl transition-all transform hover:scale-105"
          >
            <Mail size={20} />
            Contacter le président
          </Link>
        </motion.div>
      </section>

      {/* Biographie complète */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
            >
              {/* En-tête */}
              <div className="bg-gradient-to-r from-bambe-700 to-bambe-600 text-white p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <User size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Biographie complète</h2>
                    <p className="text-bambe-200">Le parcours d'un visionnaire</p>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <UsersIcon className="text-bambe-600" size={24} />
                        Parcours personnel
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Rangar Masra Abel, né à Moundou dans la région du Logone Occidental, est un leader visionnaire qui allie passion pour le sport et engagement communautaire. Originaire d'une ville dynamique connue pour son industrie cotonnière et sa brasserie Gala, il a grandi au cœur des défis du sud tchadien.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Award className="text-yellow-500" size={24} />
                        Formation et compétences
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-bambe-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">{presidentData.education}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-bambe-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">{presidentData.languages}</span>
                        </li>
                        {presidentData.professionalBackground.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-bambe-500 rounded-full mt-2"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Target className="text-green-500" size={24} />
                        Vision et mission
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Entrepreneur et éducateur, Rangar a consacré sa carrière à la jeunesse tchadienne. Avant de présider l'AS Bambé, il a initié des projets éducatifs innovants. Sa rencontre avec l'ambassadeur de Russie au Tchad a marqué un tournant, favorisant des partenariats pour des bourses et échanges sportifs.
                      </p>
                    </div>

                    {/* Citations */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900">Citations marquantes</h4>
                      {presidentData.quotes.map((quote, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border-l-4 border-yellow-400"
                        >
                          <p className="text-gray-800 italic">"{quote}"</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline des accomplissements */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-4">
              <Trophy className="text-bambe-600" size={48} />
              Parcours et accomplissements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les moments clés qui ont façonné la vision et le leadership
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-bambe-500 to-bambe-600 hidden md:block"></div>

            {presidentData.keyAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pl-12' : 'md:pl-1/2 md:pr-12'}`}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-bambe-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                <div className={`bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-bambe-500 to-bambe-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-bambe-600">{achievement.year}</div>
                      <div className="text-lg font-semibold text-gray-900">{achievement.title}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{achievement.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact et vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-bambe-700 to-bambe-600 text-white rounded-3xl p-10 shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <Mail size={32} className="text-yellow-300" />
                Contact & Informations
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-yellow-300 mt-1" size={20} />
                  <div>
                    <div className="text-sm text-bambe-200">Email professionnel</div>
                    <div className="text-lg font-medium">{presidentData.contactInfo.email}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-yellow-300 mt-1" size={20} />
                  <div>
                    <div className="text-sm text-bambe-200">Téléphone</div>
                    <div className="text-lg font-medium">{presidentData.contactInfo.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-yellow-300 mt-1" size={20} />
                  <div>
                    <div className="text-sm text-bambe-200">Lieu de travail</div>
                    <div className="text-lg font-medium">{presidentData.contactInfo.location}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/20">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 w-full bg-white text-bambe-700 hover:bg-gray-100 font-bold py-4 rounded-xl text-lg transition-all"
                >
                  <Mail size={20} />
                  Envoyer un message
                </Link>
              </div>
            </motion.div>

            {/* Vision future */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-200"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <Globe className="text-green-500" size={32} />
                Vision pour l'avenir
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Développement sportif</h4>
                    <p className="text-gray-700">Modernisation des infrastructures et formation des jeunes talents</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <UsersIcon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Engagement communautaire</h4>
                    <p className="text-gray-700">Utiliser le football comme outil de cohésion sociale et développement</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="text-yellow-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Partenariats internationaux</h4>
                    <p className="text-gray-700">Renforcer les échanges avec clubs africains et internationaux</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                <p className="text-gray-800 font-medium">
                  "Notre objectif est de faire de l'AS Bambé un modèle de club professionnel en Afrique centrale, tout en restant ancré dans nos valeurs et notre communauté."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/bambe5.jpeg" 
            alt="Supporters AS Bambé" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <Heart size={64} className="mx-auto mb-8 text-yellow-300" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Soutenez la vision du président
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Rejoignez Rangar Masra Abel dans sa mission pour élever le football tchadien et créer des opportunités pour la jeunesse.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-12 py-6 rounded-xl text-lg shadow-2xl transition-all transform hover:scale-105"
            >
              Participer aux projets
            </Link>
            <Link
              to="/club"
              className="border-2 border-white hover:bg-white/10 font-bold px-12 py-6 rounded-xl text-lg transition-all"
            >
              Découvrir le club
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PresidentBio;