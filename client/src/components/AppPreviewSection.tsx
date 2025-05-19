import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Apple, Play } from 'lucide-react';

const AppPreviewSection: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-4 w-4 text-primary" />,
      title: "Lightning Fast Delivery",
      description: "Your food arrives in just 10 minutes, guaranteed!",
    },
    {
      icon: <MapPin className="h-4 w-4 text-primary" />,
      title: "Live Order Tracking",
      description: "Track your order in real-time from kitchen to doorstep.",
    },
    {
      icon: <Percent className="h-4 w-4 text-primary" />,
      title: "Exclusive App Offers",
      description: "Enjoy special discounts and promotions only available on our app.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold font-poppins mb-4">Experience the <span className="text-primary">Fastest</span> Food Delivery App</h2>
            <p className="text-gray-600 mb-6">Our app is designed for speed and convenience. Browse, order, and track your food all in one place.</p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://apps.apple.com/in/app/qzin/id6744155290" target="_blank" rel="noopener noreferrer">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style={{ height: '48px' }} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.qzinapp.ordering&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '48px' }} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Qzin food delivery app interface" 
              className="rounded-3xl shadow-2xl max-w-xs float-animation"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
