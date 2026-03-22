import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Mountain, HandHeart } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Approvisionnement éthique',
    desc: 'Des partenariats directs avec des producteurs en Colombie, Éthiopie et Guatemala. Des rémunérations équitables et des pratiques durables.',
  },
  {
    icon: Mountain,
    title: 'Torréfaction en petites quantités',
    desc: 'Chaque grain est torréfié en micro-lots dans notre atelier, garantissant une saveur optimale et une fraîcheur exceptionnelle dans chaque tasse.',
  },
  {
    icon: HandHeart,
    title: 'La communauté d’abord',
    desc: '3 % de chaque achat finance des projets d’accès à l’eau potable dans les régions productrices de café avec lesquelles nous collaborons.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="relative py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Notre histoire</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-[1.1]">
              Né d’une passion
              <br />
              d' <span className="text-gradient">Artisanat</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Velora Coffee a vu le jour en 2018 comme une petite torréfaction à Tunis. Nous croyions que le grand café ne se résumait 
              pas au grain mais à tout le parcours, de la terre à la tasse. Chaque origine que nous sélectionnons, chaque profil de torréfaction 
              que nous développons, est guidé par un profond respect pour 
              les mains qui le cultivent et les palais qui l’apprécient.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aujourd’hui, avec quatre établissements et une communauté en ligne engagée, nous restons fidèles à la même vision : un café d’exception, 
              préparé avec intention.on.
            </p>
          </motion.div>

          {/* Right — Values */}
          <div className="space-y-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
                animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 p-5 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-400"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
