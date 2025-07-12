import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Zap, Eye, Gamepad2, Shield, Skull } from 'lucide-react';
import { motion } from 'framer-motion';

const GameFeatures = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multijoueur Asymétrique",
      description: "Survivants contre Entité Cosmique. Chaque partie est unique avec des rôles complètement différents.",
      badge: "4-8 Joueurs"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Horreur Psychologique",
      description: "Atmosphère oppressante et terrifiante. L'obscurité cache des secrets que vous préféreriez ignorer.",
      badge: "Terreur Pure"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Action Intense",
      description: "Combat rapide et stratégique. Chaque décision peut être votre dernière dans ce cauchemar cosmique.",
      badge: "Rythme Effréné"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Mécaniques Innovantes",
      description: "Système de santé mentale, corruption cosmique, et pouvoirs surnaturels uniques à maîtriser.",
      badge: "Nouveauté"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Équipements Tactiques",
      description: "Armes improvisées, objets de protection, et gadgets technologiques pour survivre à l'impossible.",
      badge: "Survie"
    },
    {
      icon: <Skull className="w-8 h-8" />,
      title: "Entités Cosmiques",
      description: "Affrontez des créatures venues d'autres dimensions avec leurs propres règles et faiblesses.",
      badge: "Lovecraftien"
    }
  ];

  return (
    <section id="game" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-red-900/30 text-red-300 border-red-700">
            Caractéristiques du Jeu
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Une Expérience d'Horreur
            <br />
            <span className="text-red-400">Sans Précédent</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez un gameplay révolutionnaire qui mélange horreur cosmique, 
            action intense et coopération stratégique dans un univers terrifiant.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-red-900/50 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg text-red-400 group-hover:from-red-800/40 group-hover:to-red-700/30 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <Badge variant="outline" className="border-red-700 text-red-300 text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Game Modes Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Modes de Jeu</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Différentes façons de vivre la terreur cosmique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-800/50">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-white mb-4">Mode Survivant</h4>
                <p className="text-gray-300 mb-4">
                  Travaillez en équipe pour échapper aux entités cosmiques. Résolvez des énigmes, 
                  trouvez des objets et survivez ensemble dans un monde hostile.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• 4-6 Survivants par partie</li>
                  <li>• Objectifs coopératifs</li>
                  <li>• Gestion de la santé mentale</li>
                  <li>• Système de craft et ressources</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-800/50">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-white mb-4">Mode Entité</h4>
                <p className="text-gray-300 mb-4">
                  Incarnez une puissante entité cosmique et traquez les survivants. 
                  Utilisez des pouvoirs surnaturels pour semer la terreur.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• 1-2 Entités par partie</li>
                  <li>• Pouvoirs cosmiques uniques</li>
                  <li>• Capacités de téléportation</li>
                  <li>• Manipulation de l'environnement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GameFeatures;