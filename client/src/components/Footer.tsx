import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';
import qzinLogo from '../assets/qzin-logo.jpeg';

const Footer: React.FC = () => {
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-4 w-4" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="h-4 w-4" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="h-4 w-4" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-4 w-4" />, href: "#" },
  ];

  return (
    <footer className="bg-[#212529] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <img 
                src={qzinLogo} 
                alt="Qzin Logo" 
                className="h-12 w-auto mr-2 rounded-md" 
              />
            </div>
            <p className="text-gray-400 max-w-xs">Food delivery at lightning speed. Your favorite meals delivered in just 10 minutes.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4 justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Qzin. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
