import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const close = () => setIsOpen(false);

    window.addEventListener('scroll', close);

    return () => {
      window.removeEventListener('scroll', close);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex justify-center items-center w-full">
      <div className="absolute inset-0 w-full h-full bg-off-black-90 motion-safe:animate-wipe-in motion-safe:[animation-delay:0.2s]" />
      <div className="relative w-full max-w-s1560 h-fit flex justify-center items-center px-4 md:px-8 motion-safe:animate-fade-in motion-safe:[animation-delay:1.3s]">
        <div className="w-1/2 h-fit flex justify-start items-center">
          <a href="#hero" className="group w-fit h-fit font-sync font-bold text-xl no-underline">
            <span className="text-bright-blue motion-safe:group-hover:animate-ajr-rotate">A</span>
            <span className="text-bright-yellow motion-safe:group-hover:animate-ajr-rotate motion-safe:group-hover:[animation-delay:-0.5s]">J</span>
            <span className="text-bright-pink motion-safe:group-hover:animate-ajr-rotate motion-safe:group-hover:[animation-delay:-1s]">R</span>
          </a>
        </div>

        <div className="w-1/2 h-fit hidden sm:flex justify-end items-center gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="w-fit h-fit">
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
            className="w-fit h-fit font-sync font-bold cursor-pointer"
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
            className={`w-full h-fit bg-off-black-90 flex flex-col justify-start items-center gap-8 py-12 text-lg text-center ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="w-fit h-fit"
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
