import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Play, Image, Video, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Media = () => {
  const [activeTab, setActiveTab] = useState('screenshots');

  const screenshots = [
    {
      id: 1,
      title: "Exploration Spatiale",
      description: "Naviguez dans des environnements cosmiques terrifiant",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=450&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Rencontre Alien",
      description: "Face à l'inconnu dans l'obscurité de l'espace",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=450&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Station Abandonnée",
      description: "Explorez des structures mystérieuses à la dérive",
      image: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=800&h=450&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Équipe de Survivants",
      description: "La coopération est la clé de la survie",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop&crop=center"
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Bande-annonce Officielle",
      description: "Découvrez l'univers terrifiant de Cosmic Fear",
      thumbnail: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=450&fit=crop&crop=center",
      duration: "2:34"
    },
    {
      id: 2,
      title: "Gameplay Survivant",
      description: "Regardez une partie complète en mode survivant",
      thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=450&fit=crop&crop=center",
      duration: "15:42"
    },
    {
      id: 3,
      title: "Guide Entité Cosmique",
      description: "Apprenez à jouer en tant qu'entité terrifiante",
      thumbnail: "https://images.unsplash.com/photo-1446776851291-17dd22d2b13a?w=800&h=450&fit=crop&crop=center",
      duration: "8:15"
    }
  ];

  const tabs = [
    { id: 'screenshots', label: 'Captures d\'écran', icon: <Image className="w-4 h-4" /> },
    { id: 'videos', label: 'Vidéos', icon: <Video className="w-4 h-4" /> },
    { id: 'audio', label: 'Bande sonore', icon: <Volume2 className="w-4 h-4" /> }
  ];

  return (
    <section id="media" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-red-900/30 text-red-300 border-red-700">
            Galerie Multimédia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Immergez-vous dans
            <br />
            <span className="text-red-400">l'Univers Cosmic Fear</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez les visuels époustouflants, les bandes-annonces exclusives et 
            la bande sonore envoûtante qui donnent vie à ce cauchemar cosmique.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 p-1 rounded-xl border border-gray-800">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`px-6 py-3 mx-1 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Screenshots Tab */}
        {activeTab === 'screenshots' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-red-900/50 transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        <Image className="w-4 h-4 mr-2" />
                        Voir en grand
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{screenshot.title}</h3>
                    <p className="text-gray-400">{screenshot.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-red-900/50 transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button size="lg" className="bg-red-600/90 hover:bg-red-700 text-white rounded-full p-4">
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-black/70 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                    <p className="text-gray-400 text-sm">{video.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Audio Tab */}
        {activeTab === 'audio' && (
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Bande Sonore Officielle</h3>
                  <p className="text-gray-400">
                    Une atmosphère sonore envoûtante composée spécialement pour intensifier 
                    votre expérience de terreur cosmique.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Into the Void - Thème Principal",
                    "Whispers in Space - Ambiance Survivant", 
                    "Cosmic Entity - Thème de l'Entité",
                    "Last Hope - Musique de Victoire",
                    "Endless Terror - Défaite des Survivants"
                  ].map((track, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                          <Volume2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{track}</div>
                          <div className="text-gray-400 text-sm">
                            {Math.floor(Math.random() * 3) + 2}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Media;