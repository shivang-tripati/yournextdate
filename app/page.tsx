import Image from "next/image";

import Navbar from '@/components/navbar';
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/feature-section";
import HowItWorksSection from "@/components/how-it-works-section";
import TestimonialsSection from "@/components/testimonial-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex bg-white min-w-min min-h-screen flex-col justify-between">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
