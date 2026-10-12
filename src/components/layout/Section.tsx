import { useInView } from '../../hooks/useInView';

interface SectionProps {
  id: string;
  title: string;
  contentClassName: string;
  className?: string;
  last?: boolean;
  children?: React.ReactNode;
}

const Section = ({
  id,
  title,
  contentClassName,
  className = '',
  last = false,
  children,
}: SectionProps) => {
  const { ref, inView } = useInView();

  return (
    // Min height is for the Contact section plus Footer to fill screen height
    <section
      ref={ref}
      id={id}
      className={`w-full max-w-s1560 mx-auto ${
        last ? 'min-h-[calc(100svh-4rem-var(--foot-h,120px))]' : 'min-h-svh'
      } py-8 px-4 md:px-8 scroll-mt-16 flex flex-col justify-center items-center gap-8 ${className} ${
        inView ? 'motion-safe:animate-fade-up' : 'motion-safe:opacity-0'
      }`}
    >
      <h2 className="max-w-s1260 text-center mb-12">{title}</h2>
      <div className={contentClassName}>{children}</div>
    </section>
  );
};

export default Section;
