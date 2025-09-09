import { Button } from "@/components/ui/button";
import heroImage from "@/assets/secret-lake-hero.jpg";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          The Secret
          <span className="block text-nature-accent">Lake</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Unlock true relaxation at Dolmen Lodge. Luxury lakeside retreat with private hot tub and breathtaking Irish countryside views.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToBooking}
            className="bg-nature-primary hover:bg-nature-primary/90 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Book Dolmen Lodge
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white/80 text-white hover:bg-white hover:text-nature-primary px-8 py-6 text-lg font-semibold transition-all duration-300"
          >
            View Gallery
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;