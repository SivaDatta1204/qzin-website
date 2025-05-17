import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Items");

  const categories = [
    "All Items",
    "Fast Food",
    "Healthy",
    "Pizza",
    "Desserts",
    "Beverages",
    "Indian",
    "Chinese",
  ];

  const foodItems = [
    {
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Classic Burger",
      description: "With cheese and fries",
      price: "₹199",
    },
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Pepperoni Pizza",
      description: "Medium, 8 slices",
      price: "₹349",
    },
    {
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Veggie Salad Bowl",
      description: "Fresh and healthy",
      price: "₹179",
    },
    {
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Spicy Ramen Bowl",
      description: "Authentic flavor",
      price: "₹249",
    },
  ];

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-4">Explore Our <span className="text-primary">Menu</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover a wide variety of delicious meals ready to be delivered to you in minutes.</p>
        </motion.div>
        
        {/* Categories */}
        <motion.div 
          className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "rounded" : "rounded-outline"}
              className={`whitespace-nowrap ${activeCategory === category ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        {/* Food Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {foodItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-medium text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            variant="rounded" 
            size="lg"
            onClick={() => scrollToSection('download')}
          >
            View Full Menu in App
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
