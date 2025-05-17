import React, { useState } from 'react';
import { scrollToSection } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold font-poppins">
            <span className="text-primary">Q</span><span className="text-secondary">zin</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => handleNavClick('features')} className="font-medium hover:text-primary transition-colors">Features</button>
          <button onClick={() => handleNavClick('how-it-works')} className="font-medium hover:text-primary transition-colors">How It Works</button>
          <button onClick={() => handleNavClick('menu')} className="font-medium hover:text-primary transition-colors">Menu</button>
          <button onClick={() => handleNavClick('testimonials')} className="font-medium hover:text-primary transition-colors">Testimonials</button>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => handleNavClick('download')}
            variant="rounded"
            size="default"
            className="hidden md:flex"
          >
            Download App
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
          <nav className="flex flex-col space-y-3">
            <button onClick={() => handleNavClick('features')} className="font-medium hover:text-primary transition-colors py-2">Features</button>
            <button onClick={() => handleNavClick('how-it-works')} className="font-medium hover:text-primary transition-colors py-2">How It Works</button>
            <button onClick={() => handleNavClick('menu')} className="font-medium hover:text-primary transition-colors py-2">Menu</button>
            <button onClick={() => handleNavClick('testimonials')} className="font-medium hover:text-primary transition-colors py-2">Testimonials</button>
            <Button 
              onClick={() => handleNavClick('download')} 
              variant="rounded" 
              size="default" 
              className="w-full mt-2"
            >
              Download App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
