import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Apple, Play } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold font-poppins mb-4">Download Qzin App Today</h2>
            <p className="mb-8 max-w-md">Join thousands of food lovers who enjoy delicious meals delivered in just 10 minutes. Download the Qzin app now!</p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://apps.apple.com/in/app/qzin/id6744155290" target="_blank" rel="noopener noreferrer">
                <Button variant="rounded-white" size="xl" className="flex items-center gap-2">
                  <Apple className="h-6 w-6" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download on the</span>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </Button>
              </a>
              
              <a href="https://play.google.com/store/apps/details?id=com.qzinapp.ordering&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                <Button variant="rounded-white" size="xl" className="flex items-center gap-2">
                  <Play className="h-6 w-6" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Get it on</span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Quick food delivery concept with smartphone and food */}
            <img 
              src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Qzin food delivery app on smartphone" 
              className="rounded-3xl shadow-2xl mx-auto relative z-10 max-w-xs md:max-w-sm"
            />
            
            {/* Decorative elements */}
            <div className="absolute top-1/3 right-1/4 bg-white/20 w-20 h-20 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/3 left-1/4 bg-accent/20 w-32 h-32 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
