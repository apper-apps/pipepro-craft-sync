import React from "react";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import AboutSection from "@/components/organisms/AboutSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;