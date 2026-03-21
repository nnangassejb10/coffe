import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Mountain, HandHeart } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Ethically Sourced',
    desc: 'Direct partnerships with farmers in Colombia, Ethiopia, and Guatemala. Fair wages, sustainable practices.',
  },
  {
    icon: Mountain,
    title: 'Small Batch Roasted',
    desc: 'Every bean is roasted in micro-batches at our atelier, ensuring peak flavor and freshness in every cup.',
  },
  {
    icon: HandHeart,
    title: 'Community First',
    desc: '3% of every purchase funds clean water projects in the coffee-growing regions we partner with.',
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
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Our Story</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-[1.1]">
              Born from a Love
              <br />
              of <span className="text-gradient">Craft</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Velora Coffee began in 2018 as a small roastery in Portland. We believed great coffee
              wasn't just about the bean — it was about the journey from soil to sip. Every origin
              we source, every roast profile we develop, is driven by deep respect for the hands
              that grew it and the palates that savor it.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, with four locations and a dedicated online community, we remain committed to
              the same vision: extraordinary coffee, made with intention.
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
