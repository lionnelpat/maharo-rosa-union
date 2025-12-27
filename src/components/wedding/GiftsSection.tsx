import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Gift,
  Refrigerator,
  UtensilsCrossed,
  Bed,
  Lamp,
  Armchair,
  Bath,
  BookOpen,
  Heart,
  Users,
  MessageCircle,
} from 'lucide-react';

const gifts = [
  {
    id: 1,
    icon: Refrigerator,
    name: 'Réfrigérateur',
    description: 'Pour conserver les provisions du foyer',
    interested: 2,
    category: 'Électroménager',
  },
  {
    id: 2,
    icon: UtensilsCrossed,
    name: 'Service de table',
    description: 'Vaisselle complète pour recevoir la famille',
    interested: 4,
    category: 'Vaisselle',
  },
  {
    id: 3,
    icon: Bed,
    name: 'Parure de lit',
    description: 'Linge de maison de qualité',
    interested: 1,
    category: 'Linge de maison',
  },
  {
    id: 4,
    icon: Lamp,
    name: 'Lampes décoratives',
    description: 'Pour illuminer notre intérieur',
    interested: 0,
    category: 'Décoration',
  },
  {
    id: 5,
    icon: Armchair,
    name: 'Fauteuils de salon',
    description: 'Mobilier pour accueillir nos invités',
    interested: 3,
    category: 'Mobilier',
  },
  {
    id: 6,
    icon: Bath,
    name: 'Ensemble salle de bain',
    description: 'Serviettes et accessoires',
    interested: 0,
    category: 'Salle de bain',
  },
  {
    id: 7,
    icon: BookOpen,
    name: 'Bible d\'étude',
    description: 'Ressources spirituelles pour notre foyer',
    interested: 5,
    category: 'Livres',
  },
  {
    id: 8,
    icon: UtensilsCrossed,
    name: 'Cuisinière à gaz',
    description: 'Pour préparer de bons repas',
    interested: 1,
    category: 'Électroménager',
  },
];

const GiftsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedGift, setSelectedGift] = useState<number | null>(null);

  return (
    <section id="cadeaux" ref={ref} className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-beige-dark/20 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold-bright font-body text-sm tracking-widest uppercase mb-4">
            Liste de mariage
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Soutenir Notre <span className="text-gold-gradient">Union</span>
          </h2>
          <div className="divider-ornament max-w-xs mx-auto mb-6">
            <Gift className="w-5 h-5 text-gold" />
          </div>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Maharo et Rosa remercient chaleureusement tous ceux qui souhaitent
            les soutenir en cette occasion. Les dons seront utilisés comme
            contribution à une œuvre de bienfaisance, prolongeant ainsi la
            bénédiction reçue au sein de notre communauté chrétienne.
          </p>
        </motion.div>

        {/* Bible Verse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto mb-12 text-center"
        >
          <blockquote className="italic text-bordeaux/80 font-heading text-lg">
            "Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni
            contrainte ; car Dieu aime celui qui donne avec joie."
          </blockquote>
          <cite className="block mt-2 text-sm text-gold-bright">
            — 2 Corinthiens 9:7
          </cite>
        </motion.div>

        {/* Gifts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto mb-12">
          {gifts.map((gift, index) => {
            const Icon = gift.icon;
            const isSelected = selectedGift === gift.id;

            return (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedGift(isSelected ? null : gift.id)}
                className={`card-wedding cursor-pointer group ${
                  isSelected ? 'ring-2 ring-gold shadow-lg' : ''
                }`}
              >
                {/* Category Badge */}
                <span className="inline-block px-2 py-0.5 rounded-full bg-gold/10 text-gold-bright text-xs mb-3">
                  {gift.category}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-gold-bright" />
                </div>

                {/* Name */}
                <h3 className="font-heading text-lg text-foreground mb-2">
                  {gift.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {gift.description}
                </p>

                {/* Interested Counter */}
                {gift.interested > 0 && (
                  <div className="flex items-center gap-2 text-sm text-bordeaux">
                    <Users className="w-4 h-4" />
                    <span>
                      {gift.interested} personne{gift.interested > 1 ? 's' : ''}{' '}
                      intéressée{gift.interested > 1 ? 's' : ''}
                    </span>
                  </div>
                )}

                {/* Expanded Content */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-border"
                  >
                    <a
                      href="https://wa.me/221XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 btn-gold w-full text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contactez-nous
                    </a>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* How to Contribute */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="card-wedding p-8">
            <Heart className="w-10 h-10 text-gold mx-auto mb-4 fill-gold/30" />
            <h3 className="font-heading text-xl text-foreground mb-4">
              Comment contribuer ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Pour coordonner votre contribution, n'hésitez pas à contacter
              directement le couple via WhatsApp ou par email. Nous vous
              remercions pour votre générosité et votre amour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/221XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="inline w-4 h-4 mr-2" />
                WhatsApp
              </a>
              <a
                href="mailto:maharo.rosa@email.com"
                className="btn-outline-gold"
              >
                Envoyer un email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftsSection;
