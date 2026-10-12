import { useState } from 'react';
import { generateRandomNumberFromArray } from '../utils/numberGenerator';

const Hero = () => {
  const heroBackgroundImages = ['bg-hero-0', 'bg-hero-1', 'bg-hero-2'];

  const [id] = useState(() =>
    generateRandomNumberFromArray(heroBackgroundImages.length),
  );

  return (
    <section
      id="hero"
      className={`h-dvh min-h-87 mb-16 ${heroBackgroundImages[id]} bg-center bg-cover flex flex-col justify-end px-4 md:px-8 pb-8`}
    >
      <h1 className="flex flex-col">
        <span className="self-start">Aliel</span>
        <span className="self-end">Jacob</span>
        <span className="self-start">Roxas</span>
      </h1>
    </section>
  );
};

export default Hero;
