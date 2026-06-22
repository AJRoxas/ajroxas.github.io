import TitleGenerator from '../components/ui/TitleGenerator';
import { useState } from 'react';
import { generateRandomNumberFromArray } from '../utils/numberGenerator';

const Hero = () => {
  const heroBackgroundImages = ['bg-hero-0', 'bg-hero-1', 'bg-hero-2' ];

  const [id] = useState(() =>
    generateRandomNumberFromArray(heroBackgroundImages.length),
  );

  return (
    <section
      id="hero"
      className={`h-dvh min-h-87 mb-16 ${heroBackgroundImages[id]} bg-center bg-cover flex flex-col justify-center items-center`}
    >
      <div className="relative w-full h-fit">
        <div className="absolute inset-0 w-full h-full bg-off-black-90 origin-left motion-safe:animate-band-in motion-safe:[animation-delay:0.4s]" />
        <div className="relative pt-2 motion-safe:animate-fade-in motion-safe:[animation-delay:1.3s]">
          <h1 className="text-center my-4">
            Aliel Jacob Roxas
          </h1>
          <TitleGenerator startDelayMs={1300} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
