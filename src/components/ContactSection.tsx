import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Instagram, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Entrez en contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">Dites bonjour !</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Des questions, une demande de traiteur, ou simplement envie de parler café ? Nous serions ravis de vous entendre.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
<motion.form
  action="https://formspree.io/f/mgonbqkj"
  method="POST"
  initial={{ opacity: 0, x: -24, filter: 'blur(4px)' }}
  animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
  className="lg:col-span-3 space-y-5"
>
  <div className="grid sm:grid-cols-2 gap-5">
    <input
      required
      type="text"
      name="name"
      placeholder="Nom"
      className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
    />
    <input
      required
      type="email"
      name="email"
      placeholder="Email"
      className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
    />
  </div>

  <input
    type="text"
    name="subject"
    placeholder="Objet du message"
    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
  />

  <textarea
    required
    name="message"
    rows={5}
    placeholder="Écrire message..."
    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
  />

  <button
    type="submit"
    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
  >
    <Send className="w-4 h-4" />
    Envoyer le message
  </button>
</motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 24, filter: 'blur(4px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="font-display text-lg font-semibold mb-3">Email</h3>
              <a href="mailto:hello@veloracoffee.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                hello@veloracoffee.com
              </a>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-3">Suivez-nous</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all active:scale-95">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all active:scale-95">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-2">Heures ouvrables</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                lundi – samedi: 6H:00 – 22H:00
                <br />
                dimanche: 7H:00 – 18H:00
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
