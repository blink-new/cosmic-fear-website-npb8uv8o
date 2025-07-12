import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Gamepad2, MessageCircle, Twitter, Youtube, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Gamepad2 className="w-5 h-5" />, label: "Steam", href: "#" },
    { icon: <MessageCircle className="w-5 h-5" />, label: "Discord", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "#" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "#" },
  ];

  const footerLinks = {
    game: {
      title: "Jeu",
      links: [
        { name: "Télécharger", href: "#" },
        { name: "Configuration Système", href: "#" },
        { name: "Guide du Débutant", href: "#" },
        { name: "Modes de Jeu", href: "#" },
      ]
    },
    community: {
      title: "Communauté",
      links: [
        { name: "Forums", href: "#" },
        { name: "Discord", href: "#" },
        { name: "Reddit", href: "#" },
        { name: "Créateurs de Contenu", href: "#" },
      ]
    },
    support: {
      title: "Support",
      links: [
        { name: "Centre d'Aide", href: "#" },
        { name: "Signaler un Bug", href: "#" },
        { name: "Contact", href: "#" },
        { name: "FAQ", href: "#" },
      ]
    },
    company: {
      title: "Studio",
      links: [
        { name: "À Propos", href: "#" },
        { name: "Carrières", href: "#" },
        { name: "Presse", href: "#" },
        { name: "Partenaires", href: "#" },
      ]
    }
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
              COSMIC FEAR
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Plongez dans l'horreur cosmique ultime. Un jeu multijoueur asymétrique 
              qui redéfinit le genre survival horror.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 text-gray-400 hover:text-red-400 hover:bg-red-900/20 transition-all duration-300"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-900/30 rounded-xl p-8 mb-12">
          <div className="max-w-md mx-auto text-center">
            <Mail className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">
              Restez Informé
            </h4>
            <p className="text-gray-400 mb-6">
              Recevez les dernières actualités et mises à jour de Cosmic Fear directement dans votre boîte mail.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-200"
              />
              <Button className="bg-red-600 hover:bg-red-700 px-6">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            © 2025 Cosmic Fear Studio. Tous droits réservés.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
              Conditions d'Utilisation
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
              Mentions Légales
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>

        {/* Age Rating */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-800/50 px-4 py-2 rounded-lg">
            <div className="w-12 h-12 bg-red-600 text-white font-bold text-lg flex items-center justify-center rounded">
              M
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">Mature 17+</div>
              <div className="text-gray-400 text-xs">Violence Intense, Contenu Horrifique</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;