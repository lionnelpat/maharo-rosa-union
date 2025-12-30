import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Heart,
  Send,
  MessageCircle,
  Mail,
  Phone,
  ExternalLink,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import confetti from 'canvas-confetti';
import { supabase } from '@/integrations/supabase/client';

const relationships = [
  'Ami(e)',
  'Famille',
  'Collègue',
  'Frère/Sœur en Christ',
  'Autre',
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    relationship: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Insert blessing into database
    const { error } = await supabase.from('blessings').insert({
      name: formData.name.trim(),
      relationship: formData.relationship,
      message: formData.message.trim(),
    });

    if (error) {
      toast({
        title: 'Erreur',
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C9A961', '#D4AF37', '#6B4423', '#E8DDD3'],
    });

    setIsSubmitted(true);
    setIsSubmitting(false);

    toast({
      title: 'Bénédiction envoyée !',
      description: 'Merci pour ce moment de grâce partagé.',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 bg-card">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, hsl(var(--bordeaux)) 1px, transparent 0)',
            backgroundSize: '40px 40px',
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
            Contact
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Restons <span className="text-gold-gradient">Connectés</span>
          </h2>
          <div className="divider-ornament max-w-xs mx-auto">
            <Heart className="w-5 h-5 text-gold fill-gold/30" />
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/221XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="card-wedding flex items-center gap-4 group hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-heading text-foreground">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">
                    +221 XX XXX XX XX
                  </p>
                </div>
              </a>

              <a
                href="mailto:maharo.rosa@email.com"
                className="card-wedding flex items-center gap-4 group hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-gold-bright" />
                </div>
                <div>
                  <h3 className="font-heading text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    maharo.rosa@email.com
                  </p>
                </div>
              </a>

              <div className="card-wedding flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-bordeaux/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-bordeaux" />
                </div>
                <div>
                  <h3 className="font-heading text-foreground">Téléphone</h3>
                  <p className="text-sm text-muted-foreground">
                    +221 XX XXX XX XX
                  </p>
                </div>
              </div>
            </div>

            {/* RSVP Button */}
            <div className="card-wedding p-6 bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20">
              <h3 className="font-heading text-xl text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                Confirmez votre présence
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Merci de nous confirmer votre présence avant le 15 décembre 2025
              </p>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                Remplir le formulaire
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Blessing Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card-wedding p-8">
              <h3 className="font-heading text-2xl text-foreground mb-2 text-center">
                Laissez une Bénédiction
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                Vos vœux et prières nous accompagneront
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-gold" />
                  </div>
                  <h4 className="font-heading text-xl text-foreground mb-2">
                    Merci pour ce moment de grâce !
                  </h4>
                  <p className="text-muted-foreground">
                    Votre bénédiction a été enregistrée avec amour.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body text-sm text-foreground mb-2"
                    >
                      Votre nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-body text-foreground placeholder:text-muted-foreground"
                      placeholder="Entrez votre nom"
                    />
                  </div>

                  {/* Relationship */}
                  <div>
                    <label
                      htmlFor="relationship"
                      className="block font-body text-sm text-foreground mb-2"
                    >
                      Votre relation avec le couple
                    </label>
                    <select
                      id="relationship"
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-body text-foreground"
                    >
                      <option value="">Sélectionnez...</option>
                      {relationships.map((rel) => (
                        <option key={rel} value={rel}>
                          {rel}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-body text-sm text-foreground mb-2"
                    >
                      Votre bénédiction
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      minLength={20}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-body text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Partagez vos vœux, prières et bénédictions pour Maharo et Rosa..."
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Minimum 20 caractères
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer ma bénédiction
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
