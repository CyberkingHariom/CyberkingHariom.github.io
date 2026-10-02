'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';

export default function Home() {
  return (
    <>
      <MatrixRain />
      <div className="scanline" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
