import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Services from '../components/Services';
import SuccessStories from '../components/SuccessStories';
import Work from '../components/Work';
import Approach from '../components/Approach';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gray-950 text-gray-200 selection:bg-primary-500/20 font-sans">
        <Header 
          isScrolled={isScrolled} 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
        <Hero />
        <SocialProof />
        <Services />
        <SuccessStories />
        <Work />
        <Approach />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}