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
      <div className="w-full pt-2 h-fit bg-off-black">
        <h1 className="text-center my-4">
          Aliel Jacob Roxas
        </h1>
        <TitleGenerator />
      </div>
    </section>
  );
};

export default Hero;
