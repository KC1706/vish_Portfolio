import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="https://www.youtube.com/embed/pXQ90_RJc-U"
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-background/50"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <img 
            src="/attached_assets/LOGO.png" 
            alt="Vish VFX" 
            className="w-64 md:w-96 glow-text"
          />
          <p className="mt-4 text-xl md:text-2xl text-gray-200">Crafting stories through cuts & color</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#featured">
              <Button className="bg-primary hover:bg-accent px-8 py-6 rounded-full font-medium shadow-neon hover:shadow-neon-hover transition-all duration-300">
                <i className="fas fa-play mr-2"></i> Watch Featured
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="border-primary hover:border-accent hover:bg-primary/10 px-8 py-6 rounded-full font-medium transition-all duration-300">
                <i className="fas fa-envelope mr-2"></i> Get in Touch
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
