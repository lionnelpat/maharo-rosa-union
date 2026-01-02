import { Heart, Church } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        {/* Church Logo/Mention */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Church className="w-5 h-5 text-gold-light" />
          <span className="font-heading text-lg text-gold-light">
            Église Évangélique de Dakar
          </span>
        </div>

        {/* Couple Names */}
        <p className="font-heading text-2xl text-cream mb-2">
          Maharo{' '}
          <Heart className="inline w-4 h-4 text-gold fill-gold mx-1" /> Rosa
        </p>

        {/* Date */}
        <p className="text-gold-light/80 text-sm mb-6">3 Janvier 2026</p>

        {/* Divider */}
        <div className="w-24 h-px bg-gold/30 mx-auto mb-6" />

        {/* Bible Verse */}
        <p className="italic text-cream/70 text-sm max-w-md mx-auto mb-6">
          "L'amour est patient, l'amour est serviable, il ne cherche pas son
          intérêt"
          <span className="block mt-1 text-gold-light/70"> — 1 Corinthiens 13:4-5 </span>
        </p>

        {/* Copyright */}
        <p className="text-cream/50 text-xs">
          © 2025 - Créé avec amour pour Maharo & Rosa By <a href="mailto:business.modeltech@gmail.com">Model Technologie</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
