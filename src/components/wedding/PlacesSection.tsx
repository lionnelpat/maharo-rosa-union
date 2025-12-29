import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FileText,
  Church,
  Wine,
  MapPin,
  Clock,
  ExternalLink,
} from 'lucide-react';

const places = [
  {
    id: 'mairie',
    icon: FileText,
    title: 'Mariage Civil',
    time: '10h00',
    venue: 'Centre principal d\'État Civil de Grand Dakar',
    address: 'Avenue Cheikh Anta Diop, Dakar, Sénégal',
    mapUrl: 'https://maps.app.goo.gl/8auncsBSDSoQ4mdz8',
    accentColor: 'gold',
    delay: 0,
  },
  {
    id: 'eglise',
    icon: Church,
    title: 'Bénédiction Nuptiale',
    time: '14h30',
    venue: 'Église Évangélique de Dakar',
    address: 'Zone B, Dakar, Sénégal',
    mapUrl: 'https://maps.app.goo.gl/w9yXPEeu2jheGgtUA',
    accentColor: 'gold',
    verse: 'Que le Seigneur bénisse cette union',
    delay: 0.2,
  },
  {
    id: 'reception',
    icon: Wine,
    title: 'Cocktail & Réception',
    time: '',
    venue: 'Centre Socio-Culturel Point E',
    address: 'Point E, Dakar, Sénégal',
    mapUrl: 'https://maps.app.goo.gl/19Z9ixxNhxEo5LVm8',
    accentColor: 'gold-bright',
    delay: 0.4,
  },
];

const PlacesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="lieux"
      ref={ref}
      className="relative py-20 md:py-32 bg-card"
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold-bright font-body text-sm tracking-widest uppercase mb-4">
            Où nous retrouver
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Les <span className="text-gold-gradient">Moments Importants</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Trois étapes pour célébrer notre union dans la joie et la grâce divine
          </p>
        </motion.div>

        {/* Places Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {places.map((place) => {
            const Icon = place.icon;
            return (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: place.delay }}
                className="group"
              >
                <div className="card-wedding h-full flex flex-col text-center hover:shadow-xl transition-all duration-500">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      place.accentColor === 'bordeaux'
                        ? 'bg-bordeaux/10 text-bordeaux'
                        : 'bg-gold/10 text-gold-bright'
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                    {place.title}
                  </h3>

                  {/* Time */}
                  <div className="flex items-center justify-center gap-2 text-gold-bright mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-body font-semibold">{place.time}</span>
                  </div>

                  {/* Venue */}
                  <p className="font-heading text-foreground/90 mb-2">
                    {place.venue}
                  </p>

                  {/* Address */}
                  <div className="flex items-start justify-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{place.address}</span>
                  </div>

                  {/* Verse (if exists) */}
                  {place.verse && (
                    <p className="italic text-bordeaux/80 text-sm mb-4 px-2">
                      "{place.verse}"
                    </p>
                  )}

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Map Link */}
                  <a
                    href={place.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 mt-4 py-2 px-4 rounded-full text-sm font-body transition-all duration-300 ${
                      place.accentColor === 'bordeaux'
                        ? 'bg-bordeaux/10 text-bordeaux hover:bg-bordeaux/20'
                        : 'bg-gold/10 text-gold-bright hover:bg-gold/20'
                    }`}
                  >
                    <span>Voir sur Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-between relative">
            {/* Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-bordeaux to-gold-bright -translate-y-1/2" />

            {/* Dots */}
            {['10h00', '12h00', '14h30'].map((time, index) => (
              <div key={time} className="relative z-10 text-center">
                <div
                  className={`w-4 h-4 rounded-full mx-auto mb-2 ${
                    index === 1 ? 'bg-bordeaux' : 'bg-gold'
                  }`}
                />
                <span className="font-body text-sm text-muted-foreground">
                  {time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacesSection;
