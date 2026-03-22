import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const drinks = [
  {
    name: 'Iced Velora Latte',
    description: 'Silky espresso over cold milk with our signature velvet foam',
    price: '$5.90',
    tag: 'Best Seller',
    color: 'from-amber-900/40 to-amber-700/20',
    img: '/images/coffe-removebg-preview.png',
  },
  {
    name: 'Caramel Cloud Frappe',
    description: 'Blended caramel, espresso and ice topped with whipped cloud cream',
    price: '$6.50',
    tag: 'New',
    color: 'from-orange-900/40 to-yellow-800/20',
    img: '/images/cafe2.webp',
  },
  {
    name: 'Mocha Midnight Swirl',
    description: 'Dark chocolate meets bold espresso in a velvety midnight blend',
    price: '$6.20',
    tag: 'Popular',
    color: 'from-stone-900/60 to-stone-700/20',
    img: '/images/cafe1.jpeg',
  },
  {
    name: 'Vanilla Cold Brew',
    description: '18-hour steeped cold brew infused with Madagascar vanilla',
    price: '$5.50',
    tag: null,
    color: 'from-yellow-900/30 to-amber-800/10',
    img: '/images/cafe3.jpeg',
  },
  {
    name: 'Matcha Forest Latte',
    description: 'Ceremonial grade matcha whisked with oat milk and honey',
    price: '$6.00',
    tag: 'Seasonal',
    color: 'from-emerald-900/40 to-green-800/20',
    img: '/images/Matcha Forest Latte.jpeg',
  },
  {
  name: 'French Matcha Forêt',
  description: 'Matcha de qualité cérémoniale fouetté avec du lait d’avoine et une touche de miel',
  price: '6,00 €',
  tag: 'Saisonnier',
  color: 'from-emerald-900/40 to-green-800/20',
  img: '/images/cafeFrench.jpeg',
},
  {
    name: 'Espresso Tonic',
    description: 'Double shot espresso poured over sparkling tonic water with citrus',
    price: '$5.70',
    tag: null,
    color: 'from-zinc-900/50 to-zinc-700/20',
    img: '/images/Espresso_Tonic.webp',
  },{
    name: 'La Gabonaise-REGAB',
    description: 'Canette fraîche de REGAB 60 cl',
    price: '$5.70',
    tag: null,
    color: 'from-zinc-900/50 to-zinc-700/20',
    img: '/images/regab.jpeg',
  },

  {
    name: 'Soda -gazouse',
    description: 'Canette fraîche de jus 30 cl',
    price: '$5.70',
    tag: null,
    color: 'from-zinc-900/50 to-zinc-700/20',
    img: '/images/soda.jpeg',
  },
  {
    name: 'Eau minerale',
    description: 'Eau en bouteille fraîche de jus 1 L, 0.5 L et 30 cl',
    price: '$5.70',
    tag: null,
    color: 'from-zinc-900/50 to-zinc-700/20',
    img: '/images/eau1.jpeg',
  },
  {
    name: 'Jus de fruits',
    description: 'Verre de jus de fruits frais et naturel',
    price: '$5.70',
    tag: null,
    color: 'from-zinc-900/50 to-zinc-700/20',
    img: '/images/fruitJus.jpeg',
  },
{
    name: 'Gateau Exotic',
    description: 'Tranches de gâteau exotique à base de fruits tropicaux, chocolat, vanille et fraise parfait pour accompagner votre café.',
    price: '$5.70',
    tag: null,
    color: 'from-zinc-900/50 to-zinc-700/20',
    img: '/images/desert1.webp',
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="menu" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">
            Créations signature
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Conçu pour vous
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Chaque boisson est un chef-d’œuvre mêlant des origines rares à des techniques innovantes
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {drinks.map((drink, i) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >

              {/* IMAGE + GRADIENT */}
              <div className={`h-44 relative overflow-hidden`}>
                
                {/* IMAGE */}
                {drink.img && (
                  <img
                    src={drink.img}
                    alt={drink.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* OVERLAY GRADIENT (garde ton style) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${drink.color}`} />

                {/* EFFETS DESIGN */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="w-20 h-20 rounded-full bg-foreground/5 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute w-32 h-32 rounded-full bg-foreground/3 -top-8 -right-8 group-hover:translate-x-2 transition-transform duration-700" />
                </div>

                {/* TAG */}
                {drink.tag && (
                  <span className="absolute top-3 right-3 z-20 bg-primary/90 text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                    {drink.tag}
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-lg font-semibold leading-tight">
                    {drink.name}
                  </h3>
                  <span className="text-primary font-bold font-body text-lg ml-2 shrink-0">
                    {drink.price}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {drink.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>

                  <button className="text-sm font-semibold text-primary hover:underline active:scale-[0.97] transition-all">
                    choisir →
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;