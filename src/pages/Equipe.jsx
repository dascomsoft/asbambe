import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Target, Shield, Award, Crosshair, Zap, Heart, Star, Calendar, Flag, Target as TargetIcon, UserCheck } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Equipe = () => {

    useEffect(() =>{
      window.scrollTo(0,0)
     },[])

  const [activeTab, setActiveTab] = useState('joueurs');

  // Effectif principal
  const players = {
    gardiens: [
      { id: 1, name: "Mahamat Nour", number: 1, age: 28, nationality: "🇹🇩 Tchad", matches: 45, cleanSheets: 18, position: "Gardien" },
      { id: 2, name: "Abakar Souleymane", number: 16, age: 22, nationality: "🇹🇩 Tchad", matches: 12, cleanSheets: 4, position: "Gardien" },
      { id: 3, name: "Moussa Idriss", number: 30, age: 19, nationality: "🇹🇩 Tchad", matches: 3, cleanSheets: 1, position: "Gardien" }
    ],
    defenseurs: [
      { id: 4, name: "Abderamane Ali (C)", number: 4, age: 26, nationality: "🇹🇩 Tchad", matches: 120, goals: 8, position: "Défenseur central" },
      { id: 5, name: "Hassan Youssouf", number: 3, age: 24, nationality: "🇹🇩 Tchad", matches: 85, goals: 3, position: "Arrière gauche" },
      { id: 6, name: "Djibrine Mahamat", number: 5, age: 25, nationality: "🇹🇩 Tchad", matches: 92, goals: 5, position: "Défenseur central" },
      { id: 7, name: "Khalil Ibrahim", number: 2, age: 27, nationality: "🇹🇩 Tchad", matches: 78, goals: 2, position: "Arrière droit" },
      { id: 8, name: "Youssouf Adoum", number: 15, age: 21, nationality: "🇹🇩 Tchad", matches: 25, goals: 1, position: "Défenseur" }
    ],
    milieux: [
      { id: 9, name: "Haroun Djibrine", number: 8, age: 24, nationality: "🇹🇩 Tchad", matches: 95, goals: 22, assists: 18, position: "Milieu offensif" },
      { id: 10, name: "Adam Moussa", number: 6, age: 29, nationality: "🇹🇩 Tchad", matches: 150, goals: 15, assists: 25, position: "Milieu défensif" },
      { id: 11, name: "Saleh Abakar", number: 10, age: 23, nationality: "🇹🇩 Tchad", matches: 68, goals: 12, assists: 20, position: "Milieu central" },
      { id: 12, name: "Mahamet Ali", number: 14, age: 22, nationality: "🇹🇩 Tchad", matches: 42, goals: 5, assists: 8, position: "Milieu gauche" },
      { id: 13, name: "Oumar Youssouf", number: 18, age: 20, nationality: "🇹🇩 Tchad", matches: 28, goals: 3, assists: 6, position: "Milieu droit" }
    ],
    attaquants: [
      { id: 14, name: "Issa Moussa", number: 9, age: 25, nationality: "🇹🇩 Tchad", matches: 88, goals: 45, assists: 12, position: "Avant-centre" },
      { id: 15, name: "Moussa Abakar", number: 7, age: 26, nationality: "🇹🇩 Tchad", matches: 102, goals: 38, assists: 25, position: "Ailier gauche" },
      { id: 16, name: "Ahmat Djibrine", number: 11, age: 23, nationality: "🇹🇩 Tchad", matches: 75, goals: 28, assists: 18, position: "Ailier droit" },
      { id: 17, name: "Adoum Haroun", number: 19, age: 21, nationality: "🇹🇩 Tchad", matches: 35, goals: 15, assists: 8, position: "Attaquant" }
    ]
  };

  // Staff technique
  const technicalStaff = [
    { id: 1, name: "Khalil Ibrahim", role: "Entraîneur Principal", experience: "10 ans", speciality: "Tactique" },
    { id: 2, name: "Moussa Abakar", role: "Entraîneur Adjoint", experience: "8 ans", speciality: "Préparation physique" },
    { id: 3, name: "Mahamat Saleh", role: "Entraîneur des Gardiens", experience: "12 ans", speciality: "Technique gardien" },
    { id: 4, name: "Youssouf Adoum", role: "Analyste Vidéo", experience: "5 ans", speciality: "Analyse tactique" },
    { id: 5, name: "Fatimé Abderamane", role: "Préparatrice Mentale", experience: "6 ans", speciality: "Psychologie sportive" }
  ];

  // Staff médical
  const medicalStaff = [
    { id: 1, name: "Dr. Hassan Djibrine", role: "Médecin du Club", experience: "15 ans", speciality: "Traumatologie" },
    { id: 2, name: "M. Idriss Ali", role: "Kinésithérapeute", experience: "8 ans", speciality: "Rééducation" },
    { id: 3, name: "Mme. Amina Mahamat", role: "Nutritionniste", experience: "6 ans", speciality: "Diététique sportive" }
  ];

  // Position colors
  const positionColors = {
    "Gardien": "bg-blue-100 text-blue-800",
    "Défenseur": "bg-green-100 text-green-800",
    "Milieu": "bg-yellow-100 text-yellow-800",
    "Attaquant": "bg-red-100 text-red-800"
  };

  const getPositionColor = (position) => {
    if (position.includes("Gardien")) return positionColors.Gardien;
    if (position.includes("Défenseur")) return positionColors.Défenseur;
    if (position.includes("Milieu")) return positionColors.Milieu;
    if (position.includes("Attaquant")) return positionColors.Attaquant;
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      
{/*       
      
      
      <section className="relative bg-gradient-to-br from-bambe-900 to-bambe-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Users size={18} />
              <span className="font-medium">Effectif 2024</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Notre Équipe
              <span className="block text-yellow-300">Première & Staff</span>
            </h1>

            <p className="text-xl text-bambe-100 mb-8 max-w-3xl mx-auto">
              Découvrez les joueurs, l'encadrement technique et les statistiques
              de l'AS Bambé pour la saison 2024.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { value: "23", label: "Joueurs professionnels" },
                { value: "8", label: "Membres du staff" },
                { value: "15", label: "Matchs joués" },
                { value: "9", label: "Victoires" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-sm text-bambe-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}



      <section className="relative bg-gradient-to-br from-bambe-900/95 to-bambe-700/90 text-white overflow-hidden min-h-[70vh] flex items-center">
  {/* Background image pour la section Équipe */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style={{ backgroundImage: `url('/bambe8.jpeg')` }}
  >
    {/* Overlay pour améliorer la lisibilité */}
    <div className="absolute inset-0 bg-gradient-to-br from-bambe-900/80 via-bambe-800/75 to-bambe-700/70"></div>
    
    {/* Effet de texture subtile */}
    <div className="absolute inset-0 opacity-15">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 60%),
                         radial-gradient(circle at 70% 60%, rgba(255,255,255,0.1) 0%, transparent 60%)`
      }}></div>
    </div>
  </div>
  
  <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/30 shadow-lg"
      >
        <Users size={18} className="text-yellow-300" />
        <span className="font-medium text-white">Effectif 2024</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
      >
        Notre Équipe
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="block text-yellow-300 mt-2 text-2xl md:text-3xl lg:text-4xl"
        >
          Première & Staff
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4 font-medium"
      >
        Découvrez les joueurs, l'encadrement technique et les statistiques
        de l'AS Bambé pour la saison 2024.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto px-4"
      >
        {[
          { value: "23", label: "Joueurs professionnels", icon: "👤" },
          { value: "8", label: "Membres du staff", icon: "👔" },
          { value: "15", label: "Matchs joués", icon: "⚽" },
          { value: "9", label: "Victoires", icon: "🏆" }
        ].map((stat, index) => (
          <div 
            key={index} 
            className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">{stat.value}</div>
            <div className="text-sm text-white/80 font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Boutons d'action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
      >
        <Link
          to="/equipe/joueurs"
          className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px] transform hover:scale-105"
        >
          <span>Voir les Joueurs</span>
          <Users className="group-hover:scale-110 transition-transform" size={18} />
        </Link>
        <Link
          to="/equipe/staff"
          className="group border-2 border-white hover:bg-white/20 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg backdrop-blur-md transition-all w-full sm:w-auto min-w-[200px] transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <span>Le Staff Technique</span>
          <Users className="group-hover:scale-110 transition-transform" size={18} />
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Navigation Tabs */}
      <section className="sticky top-20 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {[
              { id: 'joueurs', label: 'Joueurs', icon: <Users size={18} /> },
              { id: 'technique', label: 'Staff Technique', icon: <Target size={18} /> },
              { id: 'medical', label: 'Staff Médical', icon: <Heart size={18} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium whitespace-nowrap transition-colors ${activeTab === tab.id
                    ? 'text-bambe-600 border-b-2 border-bambe-600'
                    : 'text-gray-600 hover:text-bambe-500'
                  }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Joueurs Section */}
      {activeTab === 'joueurs' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Effectif Principal
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Les joueurs professionnels de l'AS Bambé pour la saison 2024
              </p>
            </motion.div>

            {/* Gardiens */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="mr-3 text-blue-500" size={24} />
                Gardiens
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.gardiens.map((player) => (
                  <div
                    key={player.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{player.name}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-gray-500">{player.nationality}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{player.age} ans</span>
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-bambe-600">#{player.number}</div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Matchs joués</span>
                          <span className="font-semibold">{player.matches}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Clean Sheets</span>
                          <span className="font-semibold">{player.cleanSheets}</span>
                        </div>
                        <div className="mt-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPositionColor(player.position)}`}>
                            {player.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Défenseurs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="mr-3 text-green-500" size={24} />
                Défenseurs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.defenseurs.map((player) => (
                  <div
                    key={player.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{player.name}</div>
                          {player.id === 4 && (
                            <span className="inline-block mt-1 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded">
                              CAPITAINE
                            </span>
                          )}
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-gray-500">{player.nationality}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{player.age} ans</span>
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-bambe-600">#{player.number}</div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Matchs joués</span>
                          <span className="font-semibold">{player.matches}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Buts marqués</span>
                          <span className="font-semibold">{player.goals}</span>
                        </div>
                        <div className="mt-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPositionColor(player.position)}`}>
                            {player.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Milieux */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="mr-3 text-yellow-500" size={24} />
                Milieux de Terrain
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.milieux.map((player) => (
                  <div
                    key={player.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{player.name}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-gray-500">{player.nationality}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{player.age} ans</span>
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-bambe-600">#{player.number}</div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Matchs joués</span>
                          <span className="font-semibold">{player.matches}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-gray-600 text-sm">Buts</div>
                            <div className="font-semibold">{player.goals}</div>
                          </div>
                          <div>
                            <div className="text-gray-600 text-sm">Passes dé.</div>
                            <div className="font-semibold">{player.assists}</div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPositionColor(player.position)}`}>
                            {player.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Attaquants */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TargetIcon className="mr-3 text-red-500" size={24} />
                Attaquants
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.attaquants.map((player) => (
                  <div
                    key={player.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{player.name}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-gray-500">{player.nationality}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{player.age} ans</span>
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-bambe-600">#{player.number}</div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Matchs joués</span>
                          <span className="font-semibold">{player.matches}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-gray-600 text-sm">Buts</div>
                            <div className="font-semibold">{player.goals}</div>
                          </div>
                          <div>
                            <div className="text-gray-600 text-sm">Passes dé.</div>
                            <div className="font-semibold">{player.assists}</div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPositionColor(player.position)}`}>
                            {player.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Staff Technique */}
      {activeTab === 'technique' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Staff Technique
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Les experts qui préparent et encadrent l'équipe première
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {technicalStaff.map((member) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-bambe-500 to-bambe-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-bambe-600 font-medium">{member.role}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Expérience</span>
                        <span className="font-semibold">{member.experience}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Spécialité</span>
                        <span className="font-semibold">{member.speciality}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <UserCheck size={16} className="mr-2" />
                        Membre du staff depuis {2024 - member.id} ans
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Staff Médical */}
      {activeTab === 'medical' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Staff Médical
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Les professionnels de santé qui veillent sur la condition physique des joueurs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {medicalStaff.map((member) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Heart className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-blue-600 font-medium">{member.role}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-gray-600">Expérience</span>
                        <span className="font-semibold">{member.experience}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-gray-600">Spécialité</span>
                        <span className="font-semibold">{member.speciality}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-bambe-800 to-bambe-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Suivez l'Équipe en Direct
            </h2>

            <p className="text-xl text-bambe-100 mb-8">
              Ne manquez aucun match de l'AS Bambé. Suivez les résultats en direct
              et recevez les dernières nouvelles sur l'équipe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-bambe-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Prochains Matchs
              </button>
              <button className="border-2 border-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300">
                Résultats en Direct
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Equipe;