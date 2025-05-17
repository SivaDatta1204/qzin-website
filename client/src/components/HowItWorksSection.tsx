import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Download the App",
      description: "Get the Qzin app from App Store or Google Play Store on your smartphone.",
    },
    {
      number: 2,
      title: "Select Your Food",
      description: "Browse our extensive menu and select items that satisfy your cravings.",
    },
    {
      number: 3,
      title: "Enjoy Quick Delivery",
      description: "Your order arrives hot and fresh at your doorstep in just 10 minutes.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-4">How Qzin <span className="text-primary">Works</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Three simple steps to get delicious food delivered to your doorstep in just 10 minutes.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute top-0 right-0 md:left-full md:top-1/2 md:-translate-y-1/2 md:w-24 hidden md:block">
                  <ArrowRight className="text-primary/30 h-8 w-8" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1570168215822-ef7817e4fa93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Quick food delivery service" 
            className="rounded-xl shadow-xl mx-auto max-w-full md:max-w-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
