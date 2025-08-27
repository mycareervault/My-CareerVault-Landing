import { HeroText } from './components/HeroText/HeroText';
import { FeaturesCards } from './components/FeaturesCards/FeaturesCards';
import { ComingSoon } from './components/ComingSoon/ComingSoon';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'My CareerVault';
  }, []);

  return (
    <>
      <HeroText />
      
      {/* Visual Divider */}
      <div style={{ 
        width: '90%', 
        height: '2px', 
        background: 'linear-gradient(90deg, transparent 0%, var(--mantine-color-primary-0) 50%, transparent 100%)',
        margin: '60px auto',
        maxWidth: '800px'
      }} />
      
      <FeaturesCards />
      
      {/* Visual Divider */}
      <div style={{ 
        width: '90%', 
        height: '2px', 
        background: 'linear-gradient(90deg, transparent 0%, var(--mantine-color-primary-0) 50%, transparent 100%)',
        margin: '60px auto',
        maxWidth: '800px'
      }} />
      
      <ComingSoon />
    </>
  );
}
