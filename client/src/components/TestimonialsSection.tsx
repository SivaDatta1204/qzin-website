import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5,
      comment: "I was skeptical about the 10-minute delivery promise, but Qzin proved me wrong! Food arrived hot and fresh exactly as promised. This app is a game-changer!",
      foodOrdered: "Paneer Butter Masala",
    },
    {
      name: "Rahul Patel",
      location: "Bangalore",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.5,
      comment: "As a busy professional, Qzin has changed my lunch routine. The selection is great, delivery is super fast, and the food quality is excellent. Highly recommend!",
      foodOrdered: "Chicken Biryani",
    },
    {
      name: "Ananya Gupta",
      location: "Delhi",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5,
      comment: "The variety of food options is impressive. From healthy salads to indulgent desserts, Qzin has it all. And getting it delivered in just 10 minutes is the cherry on top!",
      foodOrdered: "Veggie Salad Bowl",
    },
    {
      name: "Vikram Singh",
      location: "Pune",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5,
      comment: "Qzin has completely transformed how I order food. The app is intuitive, delivery is lightning fast, and the food is always delicious. My friends are all switching to Qzin now!",
      foodOrdered: "Butter Chicken",
    },
    {
      name: "Meera Kapoor",
      location: "Hyderabad",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.5,
      comment: "The 10-minute delivery is perfect for my busy lifestyle. I love that I can get restaurant-quality food delivered so quickly without compromising on taste or freshness.",
      foodOrdered: "Vegetable Fried Rice",
    },
  ];

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    if (autoplay) setAutoplay(false);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    if (autoplay) setAutoplay(false);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400 h-5 w-5" />);
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 h-5 w-5">
          <defs>
            <linearGradient id="half" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#FACC15" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half)" stroke="none" />
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" fill="none" />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="text-yellow-400 h-5 w-5" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-4">What Our <span className="text-orange-500">Customers</span> Say</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Join thousands of satisfied customers who rely on Qzin for their daily meals.</p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon as background */}
          <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 opacity-10">
            <Quote className="w-32 h-32 text-orange-500" />
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden min-h-[24rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-orange-200 flex-shrink-0">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={`${testimonials[activeIndex].name} profile`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-orange-500">{testimonials[activeIndex].name}</h3>
                    <p className="text-gray-500 text-sm">{testimonials[activeIndex].location}</p>
                    <div className="flex mt-2 justify-center md:justify-start">
                      {renderStars(testimonials[activeIndex].rating)}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">Ordered:</span> {testimonials[activeIndex].foodOrdered}
                    </div>
                  </div>
                </div>
                
                <blockquote className="italic text-gray-700 text-lg md:text-xl relative">
                  <span className="text-orange-500 text-4xl absolute top-0 left-0">"</span>
                  <p className="pl-8 pr-4">
                    {testimonials[activeIndex].comment}
                  </p>
                  <span className="text-orange-500 text-4xl absolute bottom-0 right-0">"</span>
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 rounded-full"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 rounded-full"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-orange-500 w-8' : 'bg-orange-300'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  if (autoplay) setAutoplay(false);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
