import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const navItems = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Notre Histoire', href: '#histoire' },
  { name: 'Galerie', href: '#galerie' },
  { name: 'Lieux', href: '#lieux' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    // Delay scroll to allow mobile menu to close first
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
      <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              scrolled ? 'glass-nav shadow-lg py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <button
              onClick={() => scrollToSection('#accueil')}
              className="flex items-center gap-2 group"
          >
          <span className="font-heading text-2xl md:text-3xl text-gold-bright tracking-wide">
            M
          </span>
            <Heart className="w-4 h-4 text-gold fill-gold animate-pulse" />
            <span className="font-heading text-2xl md:text-3xl text-gold-bright tracking-wide">
            R
          </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
                <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="relative font-body text-sm tracking-wide text-foreground/80 hover:text-gold-bright transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
                </button>
            ))}
            <button
                onClick={() => scrollToSection('#contact')}
                className="btn-gold text-sm"
            >
              Laisser une bénédiction
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden glass-nav border-t border-border/30"
              >
                <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                  {navItems.map((item, index) => (
                      <motion.button
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => scrollToSection(item.href)}
                          className="text-left font-body text-lg text-foreground/80 hover:text-gold-bright transition-colors py-2"
                      >
                        {item.name}
                      </motion.button>
                  ))}
                  <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      onClick={() => scrollToSection('#contact')}
                      className="btn-gold text-center mt-2"
                  >
                    Laisser une bénédiction
                  </motion.button>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
  );
};

export default Navigation;
