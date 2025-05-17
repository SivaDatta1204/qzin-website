import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold font-poppins leading-tight mb-4">
              Delicious Food <br />
              <span className="text-primary">Delivered in</span> 
              <div className="inline-block bg-accent rounded-lg px-2 py-1 text-dark ml-2">
                <span className="count-down">10</span> Mins
              </div>
            </h1>
            
            <p className="text-lg mb-8 text-gray-600 max-w-lg">
              Satisfy your cravings instantly with Qzin. We deliver restaurant-quality meals to your doorstep in just 10 minutes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="rounded-black" size="xl" className="flex items-center gap-2">
                <Apple className="h-6 w-6" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </Button>
              
              <Button variant="rounded-black" size="xl" className="flex items-center gap-2">
                <Play className="h-6 w-6" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Get it on</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Smartphone with food delivery app open showing delicious meal options */}
            <img 
              src="https://images.unsplash.com/photo-1512149673953-1e251807ec7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Smartphone with Qzin food delivery app" 
              className="float-animation relative z-10 rounded-3xl shadow-2xl mx-auto" 
              style={{ maxWidth: "300px" }}
            />
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 bg-accent w-12 h-12 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 bg-secondary w-8 h-8 rounded-full opacity-70 animate-bounce"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats bar */}
      <div className="container mx-auto px-4 mt-16">
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">10</p>
            <p className="text-sm text-gray-600">Minute Delivery</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">1000+</p>
            <p className="text-sm text-gray-600">Menu Items</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-sm text-gray-600">Locations</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">4.8</p>
            <p className="text-sm text-gray-600">App Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
