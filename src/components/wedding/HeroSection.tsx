import { motion } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';
import coupleHero from '@/assets/hero.jpg';
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
          <span className="inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 font-body text-sm tracking-[0.2em] uppercase text-white">
            Save the Date
          </span>
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-display mb-4 text-white drop-shadow-lg"
        >
          <span>Maharo</span>
          <span className="mx-4 text-white">
            <Heart className="inline w-8 h-8 md:w-12 md:h-12 fill-white/50" />
          </span>
          <span>Rosa</span>
        </motion.h1>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6"
        >
          <p className="font-heading text-xl md:text-2xl text-white drop-shadow-md mb-2">
            3 Janvier 2026
          </p>
          <p className="font-body text-white/90 drop-shadow-md">
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
          className="flex items-center justify-center gap-4 my-8 max-w-md mx-auto"
        >
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <Heart className="w-5 h-5 text-white fill-white/30" />
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </motion.div>

        {/* Bible Verse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <blockquote className="relative py-8 px-6 italic text-center font-heading text-white/90 text-lg md:text-xl drop-shadow-md">
            <span className="absolute top-0 left-4 text-6xl opacity-30 text-white">"</span>
            En toute humilité et douceur, avec patience, supportez-vous les uns
            les autres dans l'amour.
            <span className="absolute bottom-0 right-4 text-6xl opacity-30 text-white">"</span>
          </blockquote>
          <cite className="block mt-4 font-body text-sm text-white/80 tracking-wide drop-shadow-md">
            — Éphésiens 4:2
          </cite>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToStory}
          className="btn-gold group text-white"
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
