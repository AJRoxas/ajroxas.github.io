import WelcomeBox from '../components/ui/WelcomeBox';
import TitleGenerator from '../components/ui/TitleGenerator';
import { useState } from 'react';
import { generateRandomNumberFromArray } from '../utils/numberGenerator';

const Hero = () => {
  const welcomeBoxBackgroundImages = ['bg-0', 'bg-1', 'bg-2', 'bg-3'];
  const backgroundImages = [
    'from-bright-pink',
    'from-bright-purple',
    'from-bright-blue',
    'from-bright-yellow',
  ];

  const [id] = useState(() =>
    generateRandomNumberFromArray(backgroundImages.length),
  );

  return (
    <section
      id="hero"
      className={`h-hdh min-h-87 mb-16 bg-linear-to-b/shorter ${backgroundImages[id]} to-off-black flex flex-col justify-center items-center gap-4`}
    >
      <WelcomeBox backgroundImage={welcomeBoxBackgroundImages[id]} />
      <TitleGenerator />
    </section>
  );
};

export default Hero;
