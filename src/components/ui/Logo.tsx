interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <a
      href="#hero"
      className={`group w-fit h-fit display leading-none tracking-wide no-underline ${className}`}
    >
      <span className="text-bright-blue motion-safe:group-hover:animate-ajr-rotate">
        A
      </span>
      <span className="text-bright-yellow motion-safe:group-hover:animate-ajr-rotate motion-safe:group-hover:[animation-delay:-0.5s]">
        J
      </span>
      <span className="text-bright-pink motion-safe:group-hover:animate-ajr-rotate motion-safe:group-hover:[animation-delay:-1s]">
        R
      </span>
    </a>
  );
};

export default Logo;
