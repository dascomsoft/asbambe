import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Trophy, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Clock, 
  MapPin, 
  Users, 
  ChevronRight, 
  ChevronLeft, 
  Filter, 
  Download, 
  Share2, 
  Award, 
  Star, 
  TrendingDown, 
  TrendingUp as TrendingUpIcon,
  Shield,      // Important pour les statistiques des gardiens
  Activity,    // Pour la section statistiques
  Zap,         // Si utilisé pour "Milieux de Terrain"
  Heart        // Si utilisé pour les likes
} from 'lucide-react';
const Resultats = () => {
  const [activeView, setActiveView] = useState('calendrier');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [liveScores, setLiveScores] = useState([]);

  // Données du classement
  const standings = [
    { position: 1, team: "Renaissance FC", played: 15, won: 10, drawn: 3, lost: 2, goalsFor: 28, goalsAgainst: 12, goalDifference: 16, points: 33 },
    { position: 2, team: "AS Bambé", played: 15, won: 9, drawn: 4, lost: 2, goalsFor: 32, goalsAgainst: 14, goalDifference: 18, points: 31 },
    { position: 3, team: "Tourbillon FC", played: 15, won: 8, drawn: 5, lost: 2, goalsFor: 25, goalsAgainst: 15, goalDifference: 10, points: 29 },
    { position: 4, team: "AS CotonTchad", played: 15, won: 8, drawn: 4, lost: 3, goalsFor: 26, goalsAgainst: 18, goalDifference: 8, points: 28 },
    { position: 5, team: "Gazelle FC", played: 15, won: 7, drawn: 5, lost: 3, goalsFor: 22, goalsAgainst: 16, goalDifference: 6, points: 26 },
    { position: 6, team: "Foullah Edifice", played: 15, won: 6, drawn: 5, lost: 4, goalsFor: 20, goalsAgainst: 18, goalDifference: 2, points: 23 },
    { position: 7, team: "AS Moundou", played: 15, won: 5, drawn: 6, lost: 4, goalsFor: 18, goalsAgainst: 17, goalDifference: 1, points: 21 },
    { position: 8, team: "Postel 2000 FC", played: 15, won: 4, drawn: 4, lost: 7, goalsFor: 15, goalsAgainst: 22, goalDifference: -7, points: 16 },
    { position: 9, team: "Elect-Sport", played: 15, won: 3, drawn: 4, lost: 8, goalsFor: 14, goalsAgainst: 25, goalDifference: -11, points: 13 },
    { position: 10, team: "AS Mangalmé", played: 15, won: 2, drawn: 3, lost: 10, goalsFor: 12, goalsAgainst: 30, goalDifference: -18, points: 9 },
    { position: 11, team: "ASOA", played: 15, won: 1, drawn: 5, lost: 9, goalsFor: 10, goalsAgainst: 28, goalDifference: -18, points: 8 },
    { position: 12, team: "AS Koundoul", played: 15, won: 0, drawn: 4, lost: 11, goalsFor: 8, goalsAgainst: 35, goalDifference: -27, points: 4 }
  ];

  // Matchs à venir
  const upcomingMatches = [
    {
      id: 1,
      date: "15 Mars 2024",
      time: "15:00",
      competition: "Championnat National - Journée 16",
      homeTeam: "AS Bambé",
      awayTeam: "Foullah Edifice",
      venue: "Stade Municipal, Moundou",
      status: "À venir",
      importance: "high",
      ticketsAvailable: true
    },
    {
      id: 2,
      date: "22 Mars 2024",
      time: "16:30",
      competition: "Coupe du Tchad - 1/8 finale",
      homeTeam: "AS Bambé",
      awayTeam: "Gazelle FC",
      venue: "Stade Municipal, Moundou",
      status: "À venir",
      importance: "medium",
      ticketsAvailable: true
    },
    {
      id: 3,
      date: "5 Avril 2024",
      time: "15:00",
      competition: "Championnat National - Journée 17",
      homeTeam: "Tourbillon FC",
      awayTeam: "AS Bambé",
      venue: "Stade Idriss Mahamat Ouya, N'Djamena",
      status: "À venir",
      importance: "high",
      ticketsAvailable: false
    },
    {
      id: 4,
      date: "12 Avril 2024",
      time: "16:00",
      competition: "Championnat National - Journée 18",
      homeTeam: "AS Bambé",
      awayTeam: "AS CotonTchad",
      venue: "Stade Municipal, Moundou",
      status: "À venir",
      importance: "high",
      ticketsAvailable: true
    }
  ];

  // Matchs passés
  const pastMatches = [
    {
      id: 1,
      date: "10 Mars 2024",
      competition: "Championnat National - Journée 15",
      homeTeam: "AS Bambé",
      homeScore: 3,
      awayTeam: "AS CotonTchad",
      awayScore: 0,
      status: "Terminé",
      highlights: true,
      stats: {
        possession: 58,
        shots: 14,
        shotsOnTarget: 8,
        corners: 6,
        fouls: 12
      }
    },
    {
      id: 2,
      date: "3 Mars 2024",
      competition: "Championnat National - Journée 14",
      homeTeam: "Renaissance FC",
      homeScore: 1,
      awayTeam: "AS Bambé",
      awayScore: 1,
      status: "Terminé",
      highlights: false,
      stats: {
        possession: 45,
        shots: 9,
        shotsOnTarget: 4,
        corners: 3,
        fouls: 15
      }
    },
    {
      id: 3,
      date: "25 Février 2024",
      competition: "Championnat National - Journée 13",
      homeTeam: "AS Bambé",
      homeScore: 2,
      awayTeam: "Gazelle FC",
      awayScore: 0,
      status: "Terminé",
      highlights: true,
      stats: {
        possession: 62,
        shots: 16,
        shotsOnTarget: 7,
        corners: 8,
        fouls: 10
      }
    },
    {
      id: 4,
      date: "18 Février 2024",
      competition: "Championnat National - Journée 12",
      homeTeam: "Foullah Edifice",
      homeScore: 1,
      awayTeam: "AS Bambé",
      awayScore: 3,
      status: "Terminé",
      highlights: true,
      stats: {
        possession: 52,
        shots: 12,
        shotsOnTarget: 6,
        corners: 5,
        fouls: 14
      }
    },
    {
      id: 5,
      date: "11 Février 2024",
      competition: "Championnat National - Journée 11",
      homeTeam: "AS Bambé",
      homeScore: 4,
      awayTeam: "AS Moundou",
      awayScore: 1,
      status: "Terminé",
      highlights: true,
      stats: {
        possession: 65,
        shots: 18,
        shotsOnTarget: 10,
        corners: 9,
        fouls: 8
      }
    }
  ];

  // Statistiques de l'équipe
  const teamStats = {
    goalsScored: 32,
    goalsConceded: 14,
    cleanSheets: 7,
    avgGoalsPerGame: 2.1,
    avgPossession: 58,
    shotsPerGame: 14.2,
    passAccuracy: 82,
    foulsPerGame: 12.3,
    yellowCards: 18,
    redCards: 1
  };

  // Meilleurs joueurs statistiques
  const topPerformers = [
    { name: "Issa Moussa", stat: "15 buts", icon: <Target className="text-red-500" size={20} /> },
    { name: "Saleh Abakar", stat: "10 passes décisives", icon: <TrendingUpIcon className="text-blue-500" size={20} /> },
    { name: "Mahamat Nour", stat: "7 clean sheets", icon: <Shield className="text-green-500" size={20} /> },
    { name: "Haroun Djibrine", stat: "8 buts, 8 passes", icon: <Star className="text-yellow-500" size={20} /> }
  ];

  // Simuler des scores en direct (pour la démo)
  useEffect(() => {
    const interval = setInterval(() => {
      const liveGames = [
        { home: "Tourbillon FC", homeScore: 1, away: "AS CotonTchad", awayScore: 0, minute: 65 },
        { home: "Gazelle FC", homeScore: 2, away: "Foullah Edifice", awayScore: 1, minute: 72 },
        { home: "Postel 2000 FC", homeScore: 0, away: "AS Moundou", awayScore: 0, minute: 50 }
      ];
      setLiveScores(liveGames);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Mois pour le calendrier
  const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  // Fonction pour déterminer la classe de position
  const getPositionClass = (position) => {
    if (position <= 2) return 'bg-green-50 border-green-200';
    if (position <= 4) return 'bg-blue-50 border-blue-200';
    if (position <= 6) return 'bg-yellow-50 border-yellow-200';
    if (position >= 11) return 'bg-red-50 border-red-200';
    return 'bg-gray-50 border-gray-200';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bambe-900 to-bambe-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Trophy size={18} />
              <span className="font-medium">Saison 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Résultats & Classement
              <span className="block text-yellow-300">Championnat National</span>
            </h1>
            
            <p className="text-xl text-bambe-100 mb-8 max-w-3xl mx-auto">
              Suivez en direct les performances de l'AS Bambé, consultez le classement 
              et ne manquez aucun match de la saison.
            </p>
            
            {/* Stats rapides */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { value: "2ème", label: "Position actuelle" },
                { value: "31", label: "Points" },
                { value: "+18", label: "Différence de buts" },
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
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-20 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {[
              { id: 'calendrier', label: 'Calendrier', icon: <Calendar size={18} /> },
              { id: 'classement', label: 'Classement', icon: <Trophy size={18} /> },
              { id: 'statistiques', label: 'Statistiques', icon: <BarChart3 size={18} /> },
              { id: 'direct', label: 'En Direct', icon: <Clock size={18} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                  activeView === tab.id
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

      {/* Scores en Direct (Bannière) */}
      {activeView !== 'direct' && liveScores.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 text-white"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-bold">EN DIRECT</span>
              </div>
              
              <div className="flex-1 flex justify-center space-x-8 overflow-x-auto">
                {liveScores.map((match, index) => (
                  <div key={index} className="flex items-center space-x-4 whitespace-nowrap">
                    <span className="font-medium">{match.home}</span>
                    <div className="bg-white/20 px-3 py-1 rounded font-bold">
                      {match.homeScore} - {match.awayScore}
                    </div>
                    <span className="font-medium">{match.away}</span>
                    <span className="text-sm opacity-90">{match.minute}'</span>
                  </div>
                ))}
              </div>
              
              <button className="text-sm hover:underline">
                Voir tous les matchs
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Contenu Principal */}
      <div className="container mx-auto px-4 py-8">
        {/* Vue Calendrier */}
        {activeView === 'calendrier' && (
          <div className="space-y-12">
            {/* Contrôles du calendrier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Calendrier des Matchs
                </h2>
                <p className="text-gray-600">Saison 2024 - Championnat National</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedMonth(prev => Math.max(0, prev - 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-lg font-medium min-w-[120px] text-center">
                    {months[selectedMonth]} 2024
                  </span>
                  <button
                    onClick={() => setSelectedMonth(prev => Math.min(11, prev + 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-bambe-600 text-white rounded-lg hover:bg-bambe-700">
                    <Download size={18} />
                    <span>Télécharger</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Share2 size={18} />
                    <span>Partager</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Matchs à Venir */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Calendar className="mr-3 text-green-500" size={24} />
                Prochains Matchs
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingMatches.map((match) => (
                  <div
                    key={match.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 bg-bambe-100 text-bambe-700 rounded-full text-sm font-medium mb-2">
                            {match.competition}
                          </span>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {match.date}
                            </span>
                            <span className="flex items-center">
                              <Clock size={14} className="mr-1" />
                              {match.time}
                            </span>
                          </div>
                        </div>
                        {match.importance === 'high' && (
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                            Match important
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between my-6">
                        <div className="text-center flex-1">
                          <div className="text-lg font-bold">{match.homeTeam}</div>
                          <div className="text-sm text-gray-500 mt-1">Domicile</div>
                        </div>
                        
                        <div className="text-center px-4">
                          <div className="text-2xl font-bold text-gray-900">VS</div>
                          <div className="text-sm text-gray-500 mt-1 flex items-center justify-center">
                            <MapPin size={12} className="mr-1" />
                            {match.venue}
                          </div>
                        </div>
                        
                        <div className="text-center flex-1">
                          <div className="text-lg font-bold">{match.awayTeam}</div>
                          <div className="text-sm text-gray-500 mt-1">Extérieur</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center space-x-2">
                          {match.ticketsAvailable ? (
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                              Billets disponibles
                            </span>
                          ) : (
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                              Billets bientôt
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium">
                            + Calendrier
                          </button>
                          <button className="px-4 py-2 bg-bambe-600 hover:bg-bambe-700 text-white rounded-lg font-medium">
                            Acheter billets
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Matchs Passés */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Clock className="mr-3 text-gray-500" size={24} />
                Matchs Passés
              </h3>
              
              <div className="space-y-4">
                {pastMatches.map((match) => (
                  <div
                    key={match.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-sm text-gray-500">{match.date}</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                              {match.competition}
                            </span>
                            {match.highlights && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                                Résumé disponible
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-center flex-1">
                              <div className="font-bold">{match.homeTeam}</div>
                              <div className="text-sm text-gray-500">Domicile</div>
                            </div>
                            
                            <div className="text-center px-6">
                              <div className="text-3xl font-bold">
                                {match.homeScore} - {match.awayScore}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">{match.status}</div>
                            </div>
                            
                            <div className="text-center flex-1">
                              <div className="font-bold">{match.awayTeam}</div>
                              <div className="text-sm text-gray-500">Extérieur</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-48">
                          <div className="text-sm font-medium text-gray-900 mb-2">Statistiques</div>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center">
                              <div className="font-bold">{match.stats.possession}%</div>
                              <div className="text-gray-500">Possession</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold">{match.stats.shots}</div>
                              <div className="text-gray-500">Tirs</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold">{match.stats.corners}</div>
                              <div className="text-gray-500">Corners</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                          Buts: {match.homeScore > match.awayScore ? match.homeTeam : match.awayTeam}
                        </div>
                        <div className="flex items-center space-x-2">
                          {match.highlights && (
                            <button className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded text-sm">
                              Voir le résumé
                            </button>
                          )}
                          <button className="px-3 py-1 border border-gray-300 hover:bg-gray-50 rounded text-sm">
                            Détails
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button className="px-6 py-3 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium">
                  Voir plus de matchs
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Vue Classement */}
        {activeView === 'classement' && (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Classement Championnat National
                </h2>
                <p className="text-gray-600">Saison 2024 - Mis à jour le 12 Mars 2024</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm">Ligue des Champions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm">Coupe de la Confédération</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-sm">Relégation</span>
                </div>
              </div>
            </motion.div>

            {/* Tableau de classement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">#</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">Équipe</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">MJ</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">V</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">N</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">D</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">BP</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">BC</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">+/-</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">PTS</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">Forme</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {standings.map((team) => (
                      <tr
                        key={team.position}
                        className={`hover:bg-gray-50 ${getPositionClass(team.position)} ${
                          team.team === "AS Bambé" ? 'bg-bambe-50 border-l-4 border-bambe-500' : ''
                        }`}
                      >
                        <td className="py-4 px-6 font-bold">
                          {team.position}
                          {team.position <= 2 && (
                            <Trophy className="inline ml-2 text-yellow-500" size={16} />
                          )}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                            <span className="font-medium">{team.team}</span>
                            {team.team === "AS Bambé" && (
                              <span className="ml-2 px-2 py-1 bg-bambe-100 text-bambe-700 text-xs font-bold rounded">
                                NOTRE ÉQUIPE
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6">{team.played}</td>
                        <td className="py-4 px-6">{team.won}</td>
                        <td className="py-4 px-6">{team.drawn}</td>
                        <td className="py-4 px-6">{team.lost}</td>
                        <td className="py-4 px-6">{team.goalsFor}</td>
                        <td className="py-4 px-6">{team.goalsAgainst}</td>
                        <td className="py-4 px-6 font-bold">
                          {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                        </td>
                        <td className="py-4 px-6 font-bold text-lg">{team.points}</td>
                        <td className="py-4 px-6">
                          <div className="flex space-x-1">
                            {['W', 'D', 'W', 'W', 'L'].map((result, i) => (
                              <div
                                key={i}
                                className={`w-6 h-6 rounded text-xs flex items-center justify-center font-bold ${
                                  result === 'W' ? 'bg-green-500 text-white' :
                                  result === 'D' ? 'bg-yellow-500 text-white' :
                                  'bg-red-500 text-white'
                                }`}
                              >
                                {result}
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-6 border-t border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-sm text-gray-500">Prochain match</div>
                    <div className="font-bold">AS Bambé vs Foullah Edifice</div>
                    <div className="text-sm text-gray-500">15 Mars - 15:00</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Meilleur buteur</div>
                    <div className="font-bold">Issa Moussa</div>
                    <div className="text-sm text-gray-500">15 buts</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Dernier match</div>
                    <div className="font-bold">AS Bambé 3-0 AS CotonTchad</div>
                    <div className="text-sm text-gray-500">10 Mars 2024</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Série actuelle</div>
                    <div className="font-bold">3 victoires</div>
                    <div className="text-sm text-gray-500">Sans défaite</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Vue Statistiques */}
        {activeView === 'statistiques' && (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-900">
                Statistiques de l'AS Bambé
              </h2>
              <p className="text-gray-600">Saison 2024 - Championnat National</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Statistiques Générales */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Buts marqués", value: teamStats.goalsScored, icon: <Target className="text-red-500" /> },
                    { label: "Buts encaissés", value: teamStats.goalsConceded, icon: <Shield className="text-blue-500" /> },
                    { label: "Clean Sheets", value: teamStats.cleanSheets, icon: <Award className="text-green-500" /> },
                    { label: "Buts/match", value: teamStats.avgGoalsPerGame.toFixed(1), icon: <TrendingUp className="text-yellow-500" /> }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl shadow p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Graphiques statistiques */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Performances par Match</h3>
                  <div className="space-y-6">
                    {pastMatches.slice(0, 5).map((match) => (
                      <div key={match.id} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{match.homeTeam} {match.homeScore}-{match.awayScore} {match.awayTeam}</span>
                          <span>{match.date}</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-bambe-600"
                            style={{ width: `${match.stats.possession}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Possession: {match.stats.possession}%</span>
                          <span>Tirs: {match.stats.shots} ({match.stats.shotsOnTarget} cadrés)</span>
                          <span>Corners: {match.stats.corners}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Meilleurs Performeurs */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Meilleurs Performeurs</h3>
                  <div className="space-y-4">
                    {topPerformers.map((player, index) => (
                      <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                          {player.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{player.name}</div>
                          <div className="text-sm text-gray-600">{player.stat}</div>
                        </div>
                        <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-br from-bambe-500 to-bambe-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Statistiques Avancées */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Statistiques Avancées</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Possession moyenne</span>
                      <span className="font-bold">{teamStats.avgPossession}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Précision des passes</span>
                      <span className="font-bold">{teamStats.passAccuracy}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Tirs / match</span>
                      <span className="font-bold">{teamStats.shotsPerGame}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Fautes / match</span>
                      <span className="font-bold">{teamStats.foulsPerGame}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Cartons jaunes</span>
                      <span className="font-bold">{teamStats.yellowCards}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Cartons rouges</span>
                      <span className="font-bold">{teamStats.redCards}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Vue En Direct */}
        {activeView === 'direct' && (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-900">
                Scores en Direct
              </h2>
              <p className="text-gray-600">Suivez les matchs en temps réel - Journée 16</p>
            </motion.div>

            {/* Matchs en Direct */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {liveScores.map((match, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        EN DIRECT
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">{match.minute}'</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <div className="text-lg font-bold">{match.home}</div>
                        <div className="text-sm text-gray-500 mt-1">Domicile</div>
                      </div>
                      
                      <div className="text-center px-6">
                        <div className="text-3xl font-bold">
                          {match.homeScore} - {match.awayScore}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">Score actuel</div>
                      </div>
                      
                      <div className="text-center flex-1">
                        <div className="text-lg font-bold">{match.away}</div>
                        <div className="text-sm text-gray-500 mt-1">Extérieur</div>
                      </div>
                    </div>
                    
                    {/* Minuteur et événements */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Dernier événement: But ({match.minute - 5}')</span>
                        <button className="text-bambe-600 hover:text-bambe-700 font-medium">
                          Voir les événements
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Prochains départs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Prochains Départs</h3>
              <div className="space-y-4">
                {upcomingMatches.slice(0, 2).map((match) => (
                  <div key={match.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Clock className="text-gray-400" size={20} />
                      <div>
                        <div className="font-medium">{match.homeTeam} vs {match.awayTeam}</div>
                        <div className="text-sm text-gray-500">{match.competition}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{match.time}</div>
                      <div className="text-sm text-gray-500">{match.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-bambe-800 to-bambe-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <Trophy size={48} className="mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Suivez les Matchs en Direct
            </h2>
            
            <p className="text-xl text-bambe-100 mb-8">
              Ne manquez aucun match de l'AS Bambé. Recevez les notifications 
              en direct et suivez les résultats minute par minute.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-bambe-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Activer les notifications
              </button>
              <button className="border-2 border-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300">
                Voir le calendrier complet
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resultats;