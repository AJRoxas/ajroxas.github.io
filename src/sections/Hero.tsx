import WelcomeBox from '../components/ui/WelcomeBox';
import TitleGenerator from '../components/ui/TitleGenerator';
import { useState } from 'react';
import { generateRandomNumberFromArray } from '../utils/numberGenerator';

const Hero = () => {
  const welcomeBoxBackgroundImages = ['bg-0', 'bg-1', 'bg-2', 'bg-3'];
  const backgroundImages = ['pink', 'purple', 'blue', 'yellow'];

  const [id] = useState(() =>
    generateRandomNumberFromArray(backgroundImages.length),
  );

  return (
    <section
      className={`h-hdh min-h-87 bg-linear-to-b/shorter from-bright-${backgroundImages[id]} to-off-black w-dvw flex flex-col justify-center items-center gap-4`}
    >
      <WelcomeBox backgroundImage={welcomeBoxBackgroundImages[id]} />
      <TitleGenerator />
    </section>
  );
};

export default Hero;
