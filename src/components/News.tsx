import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Clock, ChevronRight, Gamepad2, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const News = () => {
  const news = [
    {
      id: 1,
      title: "Mise à jour Majeure : Nouvelles Entités Cosmiques",
      excerpt: "Découvrez trois nouvelles entités terrifiantes avec des pouvoirs uniques. L'update \"Void Hunters\" apporte également de nouvelles cartes et mécaniques de jeu.",
      date: "2025-01-15",
      category: "Mise à jour",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=300&fit=crop&crop=center",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Tournoi Communautaire : Cosmic Championship 2025",
      excerpt: "Participez au plus grand tournoi Cosmic Fear avec 50 000€ de prix à gagner. Inscriptions ouvertes jusqu'au 31 janvier.",
      date: "2025-01-12",
      category: "Esport",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=300&fit=crop&crop=center",
      readTime: "5 min"
    },
    {
      id: 3,
      title: "Optimisations Performances et Corrections de Bugs",
      excerpt: "Une série d'améliorations techniques pour une expérience de jeu plus fluide. Correction des problèmes de connexion en multijoueur.",
      date: "2025-01-08",
      category: "Patch",
      image: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=600&h=300&fit=crop&crop=center",
      readTime: "2 min"
    }
  ];

  const updates = [
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      title: "Nouveau Mode de Jeu",
      description: "Mode Raid : 8 joueurs contre 2 entités",
      status: "Bientôt disponible"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Système de Clan",
      description: "Créez des alliances et participez à des événements exclusifs",
      status: "En développement"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Ray Tracing",
      description: "Support RTX pour des effets de lumière ultra-réalistes",
      status: "Version bêta"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Mise à jour":
        return "bg-blue-900/30 text-blue-300 border-blue-700";
      case "Esport":
        return "bg-purple-900/30 text-purple-300 border-purple-700";
      case "Patch":
        return "bg-green-900/30 text-green-300 border-green-700";
      default:
        return "bg-gray-900/30 text-gray-300 border-gray-700";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-red-900/30 text-red-300 border-red-700">
            Actualités & Mises à jour
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Restez Connecté avec
            <br />
            <span className="text-red-400">Cosmic Fear</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez les dernières nouvelles, mises à jour et événements 
            de l'univers Cosmic Fear.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {news.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-red-900/50 transition-all duration-300 overflow-hidden group">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">
                        <div className="h-48 md:h-full md:w-64 relative overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40"></div>
                        </div>
                      </div>
                      <CardContent className="p-6 flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className={getCategoryColor(article.category)}>
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-gray-400 text-sm gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(article.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {article.readTime}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
                          {article.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <Button variant="ghost" className="text-red-400 hover:text-red-300 p-0">
                          Lire la suite
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">À Venir</h3>
                  <div className="space-y-4">
                    {updates.map((update, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                        <div className="p-2 bg-red-900/30 rounded-lg text-red-400 flex-shrink-0">
                          {update.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-sm mb-1">{update.title}</h4>
                          <p className="text-gray-400 text-xs mb-2">{update.description}</p>
                          <Badge variant="outline" className="border-red-700 text-red-300 text-xs">
                            {update.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-800/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Communauté</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400">12,547</div>
                      <div className="text-sm text-gray-400">Joueurs en ligne</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">847</div>
                      <div className="text-sm text-gray-400">Parties en cours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">95%</div>
                      <div className="text-sm text-gray-400">Avis positifs</div>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">
                    Rejoindre la Communauté
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;