import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import MenuSection from '@/components/MenuSection';
import AppPreviewSection from '@/components/AppPreviewSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Qzin - Food Delivery in 10 Minutes</title>
        <meta name="description" content="Qzin delivers restaurant-quality meals to your doorstep in just 10 minutes. Download our app today and satisfy your cravings instantly!" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <MenuSection />
          <AppPreviewSection />
          <TestimonialsSection />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
