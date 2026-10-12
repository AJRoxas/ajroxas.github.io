import { heroArt } from '../constants/art';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden h-211 sm:h-285 s2400:h-360 min-h-svh mb-16 flex flex-col justify-end s2400:justify-center px-4 md:px-8 pb-6 sm:pb-7 s2400:pb-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-3/4 sm:h-2/3 s2400:left-auto s2400:w-2/3 s2400:h-full overflow-hidden"
      >
        <img
          src={heroArt.src}
          srcSet={heroArt.srcSet}
          sizes="(min-width: 2400px) 67vw, (max-width: 639px) 220vw, 100vw"
          width={heroArt.width}
          height={heroArt.height}
          alt={heroArt.alt}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-right sm:object-center motion-safe:animate-settle"
        />
        <div className="absolute inset-0 bg-hero-fade s2400:bg-hero-fade-wide" />
      </div>

      <h1 className="relative z-10 flex flex-col">
        <span className="self-start overflow-hidden">
          <span className="block motion-safe:animate-rise">Aliel</span>
        </span>
        <span className="self-end s2400:self-start s2400:ml-vw-13 text-gold overflow-hidden">
          <span className="block motion-safe:animate-rise motion-safe:[animation-delay:0.1s]">
            Jacob
          </span>
        </span>
        <span className="self-start overflow-hidden">
          <span className="block motion-safe:animate-rise motion-safe:[animation-delay:0.2s]">
            Roxas
          </span>
        </span>
      </h1>
      <p className="relative z-10 mt-5 text-xs text-gold s2400:absolute s2400:right-8 s2400:bottom-6 s2400:m-0">
        {heroArt.title} &middot; {heroArt.artist} &middot; NASA Ames Research
        Center, {heroArt.year}
      </p>
    </section>
  );
};

export default Hero;
