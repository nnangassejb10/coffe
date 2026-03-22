import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  {
    name: 'Velora Downtown',
    address: '128 Pearl District Blvd, Portland, OR 97209',
    hours: 'Mon–Sat 6am–8pm · Sun 7am–6pm',
    phone: '(503) 555-0182',
  },
  {
    name: 'Velora Eastside',
    address: '742 Hawthorne Ave, Portland, OR 97214',
    hours: 'Mon–Fri 6:30am–7pm · Weekends 7am–5pm',
    phone: '(503) 555-0247',
  },
  {
    name: 'Velora coffe Libreville',
    address: '15 Bord de mer entrée sabilière, Libreville-Gabon, V - 5',
    hours: 'Lundi-Dimanche 7H:00–22H:00',
    phone: '(241) 07-0319XXXX',
  },
  {
    name: 'Velora Roastery la Tunisienne',
    address: '1901 Aouina, Tunis-Tunisie, OR 97210',
    hours: 'Tours: Sat 10am & 2pm',
    phone: '(216) 555-0401',
  },
];

const LocationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="locations" className="relative py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Trouvez-nous</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">Nos Emplacements</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Quatre espaces uniques, un engagement constant envers la qualité.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-400"
            >
              <h3 className="font-display text-xl font-semibold mb-4">{loc.name}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {loc.address}
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {loc.hours}
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {loc.phone}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
