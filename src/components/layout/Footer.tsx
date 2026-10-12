const Footer = () => {
  return (
    <footer className="h-16 flex justify-center items-center w-full">
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
    </footer>
  );
};

export default Footer;
