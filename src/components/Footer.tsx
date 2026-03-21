import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-primary" />
            <span className="font-display text-base font-bold tracking-wider">
              VELORA <span className="text-primary">COFFEE</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {['Home', 'Menu', 'About', 'Rewards', 'Locations', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Velora Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
