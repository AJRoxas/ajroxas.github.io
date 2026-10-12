import { useEffect, useRef } from 'react';
import Logo from '../ui/Logo';

const Footer = () => {
  const ref = useRef<HTMLElement>(null);

  // Sets Footer height for Contact to fill height of screen
  useEffect(() => {
    const footer = ref.current;
    if (!footer) return;

    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        '--foot-h',
        `${footer.offsetHeight}px`,
      );
    });

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      className="w-full flex flex-wrap justify-between items-center gap-x-8 gap-y-4 px-4 md:px-8 pt-10 pb-12 text-sm"
    >
      <Logo className="text-3xl" />
      <span className="relative w-fit h-fit motion-safe:animate-fade-in motion-safe:[animation-delay:1.3s]">
        &copy; 2026-Present <span className="text-bright-blue">A</span>liel{' '}
        <span className="text-bright-yellow">J</span>acob{' '}
        <span className="text-bright-pink">R</span>oxas :) &middot;{' '}
        <a
          href="https://ajroxas.github.io/portfolio-v1/"
          aria-label="v1, the first version of this site"
        >
          v1
        </a>
      </span>
      <span>
        Art: Rick Guidice and Don Davis, NASA Ames Research Center, 1975-78
      </span>
    </footer>
  );
};

export default Footer;
