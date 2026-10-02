'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import BootSequence from '@/components/BootSequence';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CyberWarViz from '@/components/CyberWarViz';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import ServicesSection from '@/components/ServicesSection';
import ToolsSection from '@/components/ToolsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CaseworkSection from '@/components/CaseworkSection';
import CertsSection from '@/components/CertsSection';
import FeedbackSection from '@/components/FeedbackSection';
import TeamSection from '@/components/TeamSection';
import IndiaSection from '@/components/IndiaSection';
import NewsSection from '@/components/NewsSection';
import SocialSection from '@/components/SocialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if already booted in this session
    const alreadyBooted = sessionStorage.getItem('tci_booted');
    if (alreadyBooted) {
      setBooted(true);
    }
  }, []);

  const handleBootComplete = () => {
    setBooted(true);
    sessionStorage.setItem('tci_booted', '1');
  };

  if (!mounted) return null;

  return (
    <>
      <CustomCursor />

      {/* Digital noise overlay */}
      <div className="noise pointer-events-none" />

      {/* Boot sequence */}
      {!booted && <BootSequence onComplete={handleBootComplete} />}

      {/* Main site */}
      <div
        style={{
          opacity: booted ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <Navbar />

        <main>
          {/* Hero */}
          <HeroSection />

          {/* Cyber War Visualization */}
          <CyberWarViz />

          {/* About */}
          <AboutSection />

          {/* My Work / Capabilities */}
          <WorkSection />

          {/* Services (What I Can Help With) */}
          <ServicesSection />

          {/* Tools Arsenal */}
          <ToolsSection />

          {/* Projects / Builds */}
          <ProjectsSection />

          {/* Casework */}
          <CaseworkSection />

          {/* Certifications */}
          <CertsSection />

          {/* Feedback */}
          <FeedbackSection />

          {/* Team */}
          <TeamSection />

          {/* India Section */}
          <IndiaSection />

          {/* Cyber News */}
          <NewsSection />

          {/* Social Media */}
          <SocialSection />

          {/* Contact */}
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
