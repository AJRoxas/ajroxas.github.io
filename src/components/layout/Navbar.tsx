import { useEffect, useState } from 'react';
import Logo from '../ui/Logo';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

// Shared underline (loading-bar) styles. The "on" classes drive it for the
// active section; the hover: variants drive the same effect on hover.
const underlineBase =
  "relative w-fit h-fit text-sm font-semibold uppercase tracking-widest no-underline after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:bg-[linear-gradient(to_right,var(--color-bright-blue)_0_25%,var(--color-bright-pink)_25%_50%,var(--color-bright-yellow)_50%_75%,var(--color-bright-blue)_75%_100%)] after:bg-size-[400%_100%] motion-reduce:after:bg-none motion-reduce:after:bg-cream after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100 motion-safe:hover:after:animate-underline-slide hover:after:[animation-delay:0.3s]";
const underlineOn =
  'after:scale-x-100 motion-safe:after:animate-underline-slide after:[animation-delay:0.3s]';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const close = () => setIsOpen(false);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    window.addEventListener('scroll', close);
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: '-64px 0px 0px 0px' },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  // Mark the link active whose section crosses the vertical center of the
  // viewport. When none does (e.g. on the hero), no link is active.
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const centered = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const href = `#${entry.target.id}`;
          if (entry.isIntersecting) centered.add(href);
          else centered.delete(href);
        });

        setActiveHref(
          links.find((link) => centered.has(link.href))?.href ?? '',
        );
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex justify-center items-center w-full">
      <div
        className={`absolute inset-0 w-full h-full bg-night/90 transition-opacity duration-400 ease-out-expo motion-reduce:transition-none ${
          solid || isOpen ? '' : 'opacity-0'
        }`}
      />
      <div className="relative w-full h-fit flex justify-center items-center px-4 md:px-8 motion-safe:animate-fade-in motion-safe:[animation-delay:0.6s]">
        <div className="w-1/2 h-fit flex justify-start items-center">
          <Logo className="text-2xl" />
        </div>

        <div className="w-1/2 h-fit hidden sm:flex justify-end items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${underlineBase} ${
                activeHref === link.href ? underlineOn : 'after:scale-x-0'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="w-1/2 h-fit flex sm:hidden justify-end items-center">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
            className="w-fit h-fit text-sm font-semibold uppercase tracking-widest cursor-pointer"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-16 z-40 sm:hidden ${
          isOpen ? '' : 'pointer-events-none'
        }`}
      >
        <div onClick={() => setIsOpen(false)} className="absolute inset-0" />
        <div className="absolute top-0 left-0 right-0 h-fit overflow-hidden">
          <div
            id="mobile-menu"
            inert={!isOpen}
            className={`w-full h-fit flex flex-col justify-start items-center gap-8 py-12 text-lg font-semibold uppercase tracking-widest text-center transition duration-400 ease-out-expo motion-reduce:transition-none ${
              isOpen ? 'translate-y-0 bg-night/90' : '-translate-y-full'
            }`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="w-fit h-fit no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
