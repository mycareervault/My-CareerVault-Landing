import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroNew from '../components/landing/HeroNew';
import BeforeAfter from '../components/landing/BeforeAfter';
import HowItWorks from '../components/landing/HowItWorks';
import FeaturesGrid from '../components/landing/FeaturesGrid';
import AIFeatures from '../components/landing/AIFeatures';
import SecurityBanner from '../components/landing/SecurityBanner';
import CTASection from '../components/landing/CTASection';
import FooterNew from '../components/landing/FooterNew';
import HeaderNew from '../components/landing/HeaderNew';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-up').forEach((elem) => {
        gsap.fromTo(
          elem,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <HeaderNew />
      <HeroNew />
      <AIFeatures />
      <BeforeAfter />
      <div id="security">
        <SecurityBanner />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="features">
        <FeaturesGrid />
      </div>
      <CTASection />
      <FooterNew />
    </div>
  );
};

export default Landing;
