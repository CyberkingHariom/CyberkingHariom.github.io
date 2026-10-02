'use client';
import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import GlobeBg from '@/components/GlobeBg';
import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TickerBanner from '@/components/TickerBanner';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.8s ease',
        paddingBottom: 32,
      }}>
        <MatrixRain />
        <GlobeBg />
        <div className="scanline" />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <CapabilitiesSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <TickerBanner />
      </div>
    </>
  );
}
