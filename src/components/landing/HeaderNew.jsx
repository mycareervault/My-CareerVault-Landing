import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const HeaderNew = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenu(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ opacity: 0.8 }} 
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/logo.svg" alt="CareerVault" className="h-10" />
          </motion.div>

          <nav className="hidden md:flex items-center space-x-10">
            {[
              { label: 'How it Works', id: 'how-it-works' },
              { label: 'Features', id: 'features' },
              { label: 'Security', id: 'security' },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -1 }}
                className="text-base font-normal text-gray-700 hover:text-[#4c6dfe] transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 font-normal text-base">
              Sign In
            </Button>
            <Button className="bg-[#4c6dfe] hover:bg-[#3d5ce6] text-white font-medium text-base px-6">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pt-6 pb-6 space-y-4 border-t border-gray-200 mt-4"
          >
            {[
              { label: 'How it Works', id: 'how-it-works' },
              { label: 'Features', id: 'features' },
              { label: 'Security', id: 'security' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-[#4c6dfe] font-normal text-base"
              >
                {item.label}
              </button>
            ))}
            <Button className="w-full bg-[#4c6dfe] text-white font-medium text-base">
              Get Started
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default HeaderNew;
