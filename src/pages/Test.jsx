import Audience from '../components/landing/Audience';
import CTA from '../components/landing/CTA';
import Features from '../components/landing/Features';
import Footer from '../components/landing/Footer';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import Pricing from '../components/landing/Pricing';
import Problem from '../components/landing/Problem';
import Security from '../components/landing/Security';
import Testimonials from '../components/landing/Testimonials';
import WhyChoose from '../components/landing/WhyChoose';

const Test = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Problem />
      <Audience />
      <WhyChoose />
      <Features />
      <Security />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Test;
