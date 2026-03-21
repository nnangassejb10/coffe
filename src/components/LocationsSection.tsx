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
    name: 'Velora Waterfront',
    address: '15 SW Naito Pkwy, Portland, OR 97204',
    hours: 'Daily 7am–9pm',
    phone: '(503) 555-0319',
  },
  {
    name: 'Velora Roastery & Lab',
    address: '1901 NW Industrial Way, Portland, OR 97210',
    hours: 'Tours: Sat 10am & 2pm',
    phone: '(503) 555-0401',
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
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Find Us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">Our Locations</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Four unique spaces, one unwavering commitment to quality.
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
