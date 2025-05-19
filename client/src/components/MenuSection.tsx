import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const MenuSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Auto-scroll for desktop carousel
  useEffect(() => {
    if (isMobile) return; // Don't auto-scroll on mobile
    
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
  }, [canScrollRight, isMobile]);

  // Auto-scroll for mobile carousel
  useEffect(() => {
    if (!isMobile) return; // Only auto-scroll on mobile
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % foodItems.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile, foodItems.length]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (isMobile) {
      // For mobile view, update the active index
      if (direction === 'left') {
        setActiveIndex((prev) => (prev - 1 + foodItems.length) % foodItems.length);
      } else {
        setActiveIndex((prev) => (prev + 1) % foodItems.length);
      }
    } else if (carouselRef.current) {
      // For desktop view, scroll the carousel
      const { clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="menu" className="py-16 bg-gradient-to-b from-[#03d8c3]/10 to-[#007d8a]/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-4">Explore Our <span className="text-primary">Menu</span></h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Discover a wide variety of delicious meals ready to be delivered to you in minutes.</p>
        </motion.div>
        
        {/* Mobile Carousel (Card Style) */}
        {isMobile && (
          <div className="relative px-4 pb-12">
            {/* Mobile Navigation Buttons - Absolute positioned over the card */}
            <div className="absolute z-20 w-full flex justify-between px-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <Button
                variant="rounded"
                size="icon"
                className="bg-white/80 backdrop-blur-sm text-primary shadow-lg pointer-events-auto"
                onClick={() => scroll('left')}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="rounded"
                size="icon"
                className="bg-white/80 backdrop-blur-sm text-primary shadow-lg pointer-events-auto"
                onClick={() => scroll('right')}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Mobile Card Carousel */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="aspect-[4/3] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={foodItems[activeIndex].image} 
                      alt={foodItems[activeIndex].name} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-bold">{foodItems[activeIndex].name}</h3>
                      <p className="text-sm text-white/80">{foodItems[activeIndex].description}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Mobile Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {foodItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-primary w-6' : 'bg-primary/30'
                  }`}
                  aria-label={`View menu item ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Mobile View All Button */}
            <div className="mt-5 text-center">
              <Button
                variant="ghost"
                className="text-primary font-medium"
                onClick={() => scrollToSection('download')}
              >
                <span>See more dishes</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Desktop Carousel */}
        {!isMobile && (
          <div className="relative">
            {/* Desktop Carousel Navigation Buttons */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 md:-left-5">
              <Button
                variant="rounded"
                size="icon"
                className={`bg-white text-primary shadow-lg ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/90'}`}
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
                className={`bg-white text-primary shadow-lg ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/90'}`}
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Desktop Food Items Carousel */}
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 pt-2 px-2 -mx-2"
              onScroll={handleScroll}
            >
              {foodItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex-shrink-0"
                  style={{ width: 'calc(100% / 3.3)', maxWidth: '300px', minWidth: '250px' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-primary">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Desktop View Full Menu Button */}
        {!isMobile && (
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
              className="bg-primary hover:bg-primary/80"
              onClick={() => scrollToSection('download')}
            >
              View Full Menu in App
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
