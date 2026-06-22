const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-16 flex justify-center items-center w-full">
      <div className="absolute inset-0 w-full h-full bg-off-black-90 motion-safe:animate-wipe-in motion-safe:[animation-delay:0.7s]" />
      <span className="relative w-fit h-fit motion-safe:animate-fade-in motion-safe:[animation-delay:1.3s]">
        &copy; 2026-Present <span className="text-bright-blue">A</span>liel{' '}
        <span className="text-bright-yellow">J</span>acob{' '}
        <span className="text-bright-pink">R</span>oxas :)
      </span>
    </footer>
  );
};

export default Footer;
