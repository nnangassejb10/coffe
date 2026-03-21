import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import RewardsSection from '@/components/RewardsSection';
import LocationsSection from '@/components/LocationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <RewardsSection />
      <LocationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
