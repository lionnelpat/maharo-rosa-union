import Navigation from '@/components/wedding/Navigation';
import HeroSection from '@/components/wedding/HeroSection';
import StorySection from '@/components/wedding/StorySection';
import GallerySection from '@/components/wedding/GallerySection';
import PlacesSection from '@/components/wedding/PlacesSection';
import GiftsSection from '@/components/wedding/GiftsSection';
import ContactSection from '@/components/wedding/ContactSection';
import TestimonialsSection from '@/components/wedding/TestimonialsSection';
import Footer from '@/components/wedding/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <StorySection />
        <GallerySection />
        <PlacesSection />
        <GiftsSection />
        <ContactSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
