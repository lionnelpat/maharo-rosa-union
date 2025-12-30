import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import coupleHero from '@/assets/marosa.jpeg';
import coupleStory from '@/assets/marosa-1.jpeg';
import coupleStory2 from '@/assets/marosa-2.jpeg';
import coupleStory3 from '@/assets/marosa-3.jpeg';
import coupleStory4 from '@/assets/marosa-4.jpeg';
import coupleStory5 from '@/assets/marosa-5.jpeg';

const galleryImages = [
  { src: coupleHero, alt: 'Maharo et Rosa - Portrait', caption: 'Notre amour' },
  { src: coupleStory, alt: 'Maharo et Rosa - Moment complice', caption: 'Moments de bonheur' },
  { src: coupleStory2, alt: 'Maharo et Rosa - Ensemble', caption: 'Ensemble pour toujours' },
  { src: coupleStory3, alt: 'Maharo et Rosa - Ensemble', caption: 'Ensemble pour toujours' },
  { src: coupleStory4, alt: 'Maharo et Rosa - Ensemble', caption: 'Ensemble pour toujours' },
  { src: coupleStory5, alt: 'Maharo et Rosa - Ensemble', caption: 'Ensemble pour toujours' },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <section id="galerie" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold-bright text-sm tracking-widest uppercase mb-4">
            Souvenirs
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Notre <span className="text-gold-gradient">Galerie</span>
          </h2>
          <div className="divider-ornament max-w-xs mx-auto">
            <Heart className="w-4 h-4 text-gold fill-gold/30" />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-heading text-lg text-foreground">{image.caption}</p>
              </div>
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Upload hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-muted-foreground text-sm"
        >
          Plus de photos à venir...
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 z-10 p-3 rounded-full bg-muted/50 hover:bg-gold/20 transition-colors"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-8 h-8 text-foreground" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="font-heading text-xl text-gold-bright">
                  {galleryImages[selectedIndex].caption}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {selectedIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 z-10 p-3 rounded-full bg-muted/50 hover:bg-gold/20 transition-colors"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-8 h-8 text-foreground" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
