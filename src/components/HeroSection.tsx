import { motion } from 'framer-motion';
import HeroScene from './3d/HeroScene';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-[1]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
         Café artisanal de qualité supérieure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-6"
        >
          VELORA
          <br />
          <span className="text-gradient">COFFEE Libreville</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-10 font-body leading-relaxed"
        >
          Où chaque tasse raconte une histoire. Approvisionné de manière 
          éthique, torréfié avec maîtrise, préparé avec intention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:brightness-110 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/25"
          >
            Découvrir le menu
          </a>
          <a
            href="#about"
            className="border border-foreground/20 text-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:bg-foreground/5 active:scale-[0.97] transition-all duration-200"
          >
            Notre histoire
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
