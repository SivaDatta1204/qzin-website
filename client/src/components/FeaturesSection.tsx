import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Utensils, Smartphone } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Ultra-Fast Delivery",
      description: "Get your favorite food delivered in just 10 minutes. No more waiting or cold meals.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: <Utensils className="h-6 w-6 text-secondary" />,
      title: "Quality Cuisine",
      description: "Restaurant-quality dishes prepared by expert chefs using the freshest ingredients.",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-accent" />,
      title: "Easy Ordering",
      description: "User-friendly app interface makes ordering your favorite food quick and simple.",
      bgColor: "bg-accent/10",
      iconColor: "text-accent",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-4">Why Choose <span className="text-primary">Qzin</span>?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience lightning-fast delivery with quality that exceeds expectations. Food that's hot, fresh, and at your door before you know it.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-light p-6 rounded-xl hover:shadow-md transition-shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`${feature.bgColor} w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
