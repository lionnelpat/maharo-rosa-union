import { motion } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';
import coupleHero from '@/assets/couple-hero.jpg';
import CountdownTimer from './CountdownTimer';
const HeroSection = () => {
  const scrollToStory = () => {
    const element = document.querySelector('#histoire');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={coupleHero}
          alt="Maharo et Rosa"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Save the Date Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/40 font-body text-sm tracking-[0.2em] uppercase text-gold-bright">
            Save the Date
          </span>
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-display mb-4 text-foreground"
        >
          <span className="text-gold-gradient">Maharo</span>
          <span className="mx-4 text-gold">
            <Heart className="inline w-8 h-8 md:w-12 md:h-12 fill-gold/50" />
          </span>
          <span className="text-gold-gradient">Rosa</span>
        </motion.h1>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6"
        >
          <p className="font-heading text-xl md:text-2xl text-foreground/90 mb-2">
            3 Janvier 2026
          </p>
          <p className="font-body text-muted-foreground">
            Église Évangélique de Dakar
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <div className="mb-8">
          <CountdownTimer />
        </div>

        {/* Ornament Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="divider-ornament max-w-md mx-auto mb-8"
        >
          <Heart className="w-5 h-5 text-gold fill-gold/30" />
        </motion.div>

        {/* Bible Verse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <blockquote className="verse-block text-foreground/80 text-lg md:text-xl">
            En toute humilité et douceur, avec patience, supportez-vous les uns
            les autres dans l'amour.
          </blockquote>
          <cite className="block mt-4 font-body text-sm text-gold-bright tracking-wide">
            — Éphésiens 4:2
          </cite>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToStory}
          className="btn-gold group"
        >
          Découvrir notre histoire
          <ChevronDown className="inline ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
