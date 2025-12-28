import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import coupleStory from '@/assets/hero.png';
import coupleStory2 from '@/assets/hero.png';

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="histoire"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-beige-dark/30 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold-bright font-body text-sm tracking-widest uppercase mb-4">
            Notre Histoire
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Un Chemin Tracé par la{' '}
            <span className="text-gold-gradient">Providence Divine</span>
          </h2>
          <div className="divider-ornament max-w-xs mx-auto">
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
        </motion.div>

        {/* Story Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={coupleStory}
                  alt="Maharo et Rosa - Notre rencontre"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/30 to-transparent" />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="font-body text-foreground/80 leading-relaxed">
                C'est dans le cadre bienveillant de l'Église Évangélique de
                Dakar que Maharo et Rosa se sont rencontrés, il y a plusieurs
                années. Unis par leur foi commune et leur engagement au sein de
                la communauté chrétienne, ils ont appris à se connaître à
                travers les activités de l'église, les moments de prière et de
                partage.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                Au fil du temps, une complicité profonde s'est tissée entre eux,
                fondée sur des valeurs partagées : l'amour du prochain, la
                compassion, et le désir de servir Dieu ensemble.
              </p>
              <blockquote className="pl-4 border-l-4 border-gold italic text-muted-foreground font-heading">
                "Car Dieu a dit : Il n'est pas bon que l'homme soit seul"
                <cite className="block mt-2 text-sm text-gold-bright not-italic">
                  — Genèse 2:18
                </cite>
              </blockquote>
            </motion.div>
          </div>

          {/* Second Row - Reversed */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 order-2 md:order-1"
            >
              <p className="font-body text-foreground/80 leading-relaxed">
                Aujourd'hui, Maharo et Rosa sont heureux de vous inviter à
                célébrer leur union devant Dieu et devant les hommes. Ce mariage
                est l'aboutissement d'un chemin de foi, d'amour et
                d'apprentissage mutuel.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                Entourés de leurs familles et de leur communauté chrétienne, ils
                s'engagent à bâtir un foyer ancré dans les valeurs de l'Évangile
                : la patience, la bonté, la fidélité et l'amour inconditionnel.
              </p>
              <div className="flex items-center gap-3 text-gold-bright">
                <Heart className="w-5 h-5 fill-gold" />
                <span className="font-heading text-lg">
                  Unis dans la foi, l'amour et l'espérance
                </span>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative order-1 md:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={coupleStory2}
                  alt="Maharo et Rosa - Notre amour"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent" />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-bordeaux/30 rounded-2xl -z-10" />
            </motion.div>
          </div>

          {/* Closing Verse */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <blockquote className="verse-block text-foreground/80 text-lg max-w-2xl mx-auto">
              Que chacun aime son prochain comme lui-même
            </blockquote>
            <cite className="block mt-4 font-body text-sm text-gold-bright tracking-wide">
              — Matthieu 22:39
            </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
