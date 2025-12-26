import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Users, Target, Heart, Award, Star, Flag, Building } from 'lucide-react';

const Club = () => {
  // Histoire du club
  const history = [
    {
      year: "1994",
      title: "Fondation du Club",
      description: "Création de l'Association Sportive Bambé à Moundou par un groupe de passionnés de football.",
      icon: <Calendar className="text-bambe-600" size={24} />
    },
    {
      year: "2001",
      title: "Première Ascension",
      description: "Accession en Première Division du Championnat Tchadien après des années en D2 régionale.",
      icon: <Trophy className="text-bambe-600" size={24} />
    },
    {
      year: "2005",
      title: "Centre de Formation",
      description: "Ouverture officielle du centre de formation des jeunes, devenu référence au sud du Tchad.",
      icon: <Users className="text-bambe-600" size={24} />
    },
    {
      year: "2018",
      title: "Rénovation du Stade",
      description: "Modernisation du Stade Municipal avec l'installation de nouveaux vestiaires et tribunes.",
      icon: <Building className="text-bambe-600" size={24} />
    },
    {
      year: "2022",
      title: "Finale Historique",
      description: "Première finale de Coupe du Tchad, marquant l'apogée du travail de plusieurs décennies.",
      icon: <Award className="text-bambe-600" size={24} />
    },
    {
      year: "2024",
      title: "Nouvelle Ère",
      description: "Lancement du projet de professionnalisation complète du club.",
      icon: <Target className="text-bambe-600" size={24} />
    }
  ];

  // Palmarès
  const achievements = [
    {
      title: "Championnat National",
      items: [
        "3ème place - Saison 2023",
        "4ème place - Saison 2022",
        "5ème place - Saison 2021",
        "Vice-champion D2 - 2001"
      ]
    },
    {
      title: "Coupe du Tchad",
      items: [
        "Finaliste - Édition 2022",
        "Demi-finaliste - Édition 2021",
        "Quart de finaliste - Édition 2020, 2019"
      ]
    },
    {
      title: "Tournois Régionaux",
      items: [
        "Vainqueur Coupe du Logone - 2019, 2021",
        "Finaliste Tournoi Inter-régional - 2020",
        "Vainqueur Tournoi de l'Amitié - 2018"
      ]
    },
    {
      title: "Distinctions Individuelles",
      items: [
        "Meilleur joueur du championnat - 2023",
        "Meilleur buteur - Saison 2022",
        "Meilleur gardien - Saison 2021",
        "Prix du fair-play - 2020, 2023"
      ]
    }
  ];

  // Valeurs du club
  const values = [
    {
      title: "Excellence Sportive",
      description: "Recherche permanente de la performance technique et tactique",
      icon: <Star className="text-yellow-500" size={24} />
    },
    {
      title: "Formation des Jeunes",
      description: "Développement des talents locaux pour l'avenir du football tchadien",
      icon: <Users className="text-blue-500" size={24} />
    },
    {
      title: "Engagement Communautaire",
      description: "Le club au service de la jeunesse et du développement de Moundou",
      icon: <Heart className="text-red-500" size={24} />
    },
    {
      title: "Intégrité",
      description: "Respect des règles, fair-play et éthique sportive",
      icon: <Flag className="text-green-500" size={24} />
    }
  ];

  // Structure du club
  const structure = [
    { role: "Président", name: "M. Adoum Yacoub" },
    { role: "Vice-président", name: "M. Mahamat Saleh" },
    { role: "Directeur Sportif", name: "M. Khamis Moussa" },
    { role: "Trésorier", name: "Mme. Fatimé Abderamane" },
    { role: "Responsable Communication", name: "M. Hassan Djibrine" },
    { role: "Coordinateur Jeunes", name: "M. Idriss Ali" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Version simplifiée */}
      <section className="relative bg-gradient-to-br from-bambe-900 to-bambe-700 text-white overflow-hidden">
        {/* Pattern simple au lieu du SVG complexe */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Trophy size={18} />
              <span className="font-medium">Notre Histoire</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              L'Association Sportive
              <span className="block text-yellow-300">Bambé de Moundou</span>
            </h1>
            
            <p className="text-xl text-bambe-100 mb-8 max-w-3xl">
              Plus qu'un club de football, une institution au service du développement 
              sportif et social du Logone Occidental depuis 1994.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin size={20} />
                <span>Stade Municipal de Moundou</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar size={20} />
                <span>Fondé en 1994</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users size={20} />
                <span>150+ jeunes formés</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Histoire Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Parcours
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              30 ans d'histoire, de passion et d'engagement pour le football tchadien
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bambe-200"></div>
            
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Point sur la ligne */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-bambe-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Contenu */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="mr-3">{item.icon}</div>
                      <span className="text-2xl font-bold text-bambe-600">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Espace vide pour l'alignement */}
                <div className="w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Palmarès */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-bambe-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-bambe-100 text-bambe-700 rounded-full px-6 py-2 mb-4">
              <Award size={20} />
              <span className="font-bold">Nos Réalisations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Palmarès & Distinctions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un héritage de performances et de reconnaissance dans le football tchadien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-bambe-600 to-bambe-700 p-6">
                  <h3 className="text-xl font-bold text-white text-center">{category.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-bambe-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs du Club */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident nos actions et notre vision du football
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl flex items-center justify-center shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure & Infrastructures */}
      <section className="py-16 bg-gradient-to-br from-bambe-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Structure du Club */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Direction & Organisation
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {structure.map((person, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-bambe-500 to-bambe-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{person.name}</div>
                        <div className="text-sm text-bambe-600">{person.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Infrastructures */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nos Infrastructures
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-bambe-600 to-bambe-700 text-white rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Building size={24} className="mr-3" />
                    <h3 className="text-xl font-bold">Stade Municipal de Moundou</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Capacité : 10,000 spectateurs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Terrain synthétique FIFA Quality Pro</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Vestiaires modernisés en 2018</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Éclairage nocturne installé en 2020</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users size={24} className="mr-3 text-bambe-600" />
                    <h3 className="text-xl font-bold text-gray-900">Centre de Formation</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Le centre forme chaque année 50 jeunes joueurs âgés de 12 à 18 ans, 
                    combinant éducation scolaire et excellence sportive.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-bambe-600">3</div>
                      <div className="text-sm text-gray-500">Terrains d'entraînement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-bambe-600">15</div>
                      <div className="text-sm text-gray-500">Éducateurs diplômés</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Future */}
      <section className="py-20 bg-gradient-to-r from-bambe-800 to-bambe-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <Target size={48} className="mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre Vision pour l'Avenir
            </h2>
            
            <p className="text-xl text-bambe-100 mb-8">
              Professionnalisation complète du club, développement des infrastructures, 
              et consolidation de notre position parmi l'élite du football tchadien.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { goal: "Championnat National", timeline: "2025" },
                { goal: "Participation Continentale", timeline: "2026" },
                { goal: "Académie Internationale", timeline: "2027" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">{item.goal}</div>
                  <div className="text-bambe-300">Objectif {item.timeline}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Club;