import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatNBRORepresents from "@/components/WhatNBRORepresents";
import ProblemsSolved from "@/components/ProblemsSolved";
import AudiencePersonas from "@/components/AudiencePersonas";
import CoreFeatures from "@/components/CoreFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhatNBRORepresents />
        <ProblemsSolved />
        <AudiencePersonas />
        <CoreFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
