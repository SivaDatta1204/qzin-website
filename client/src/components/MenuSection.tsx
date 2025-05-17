import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MenuSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        if (!canScrollRight) {
          // Reset to beginning when we reach the end
          carouselRef.current.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        } else {
          // Continue scrolling right
          const { clientWidth } = carouselRef.current;
          const scrollAmount = clientWidth * 0.4; // Smaller increment for smoother scrolling
          carouselRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
          });
        }
      }
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, [canScrollRight]);

  const foodItems = [
    {
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Classic Burger",
      description: "With cheese and fries",
    },
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Pepperoni Pizza",
      description: "Medium, 8 slices",
    },
    {
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Veggie Salad Bowl",
      description: "Fresh and healthy",
    },
    {
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Spicy Ramen Bowl",
      description: "Authentic flavor",
    },
    {
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Crispy Chicken Burger",
      description: "With spicy sauce",
    },
    {
      image: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Sushi Platter",
      description: "Assorted flavors",
    },
    {
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Paneer Tikka",
      description: "Spicy Indian delicacy",
    },
    {
      image: "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350&q=80",
      name: "Noodle Bowl",
      description: "With veggies and sauce",
    },
  ];

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="menu" className="py-16 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-4">Explore Our <span className="text-orange-500">Menu</span></h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Discover a wide variety of delicious meals ready to be delivered to you in minutes.</p>
        </motion.div>
        
        <div className="relative">
          {/* Carousel Navigation Buttons */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 md:-left-5">
            <Button
              variant="rounded"
              size="icon"
              className={`bg-white text-orange-500 shadow-lg ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/90'}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 md:-right-5">
            <Button
              variant="rounded"
              size="icon"
              className={`bg-white text-orange-500 shadow-lg ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/90'}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Food Items Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 pt-2 px-2 -mx-2"
            onScroll={handleScroll}
          >
            {foodItems.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex-shrink-0"
                style={{ width: 'calc(100% / 1.2)', maxWidth: '300px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-orange-500">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="bg-orange-500 hover:bg-orange-600"
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
