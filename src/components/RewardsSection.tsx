import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Zap, Crown, Gift } from 'lucide-react';

const tiers = [
  {
    icon: Zap,
    name: 'Green',
    points: '0 – 149',
    perks: ['Free birthday drink', 'Member pricing', 'Early access to seasonal drops'],
    color: 'border-emerald-600/40',
    iconColor: 'text-emerald-400',
    bg: 'bg-emerald-900/20',
  },
  {
    icon: Trophy,
    name: 'Gold',
    points: '150 – 399',
    perks: ['Everything in Green', 'Free drink every 10 purchases', 'Exclusive merch discounts'],
    color: 'border-amber-500/40',
    iconColor: 'text-amber-400',
    bg: 'bg-amber-900/20',
  },
  {
    icon: Crown,
    name: 'Velora Black',
    points: '400+',
    perks: ['Everything in Gold', 'Free drink weekly', 'Priority service', 'Private tasting events'],
    color: 'border-foreground/20',
    iconColor: 'text-foreground',
    bg: 'bg-foreground/5',
  },
];

const RewardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="rewards" className="relative py-32 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Gift className="w-4 h-4" />
            Rewards Program
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Sip More, Earn More
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every purchase earns you points. Unlock tiers, earn perks, and get closer to your perfect cup — on us.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-xl border ${tier.color} ${tier.bg} p-6 hover:scale-[1.02] transition-transform duration-300`}
            >
              <tier.icon className={`w-10 h-10 ${tier.iconColor} mb-4`} />
              <h3 className="font-display text-2xl font-bold mb-1">{tier.name}</h3>
              <p className="text-muted-foreground text-sm mb-5">{tier.points} points</p>
              <ul className="space-y-2">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-primary mt-0.5">✦</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
