import { useInView } from '../../hooks/useInView';

interface SectionProps {
  id: string;
  title: string;
  contentClassName: string;
  children?: React.ReactNode;
}

const Section = ({ id, title, contentClassName, children }: SectionProps) => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id={id}
      className={`w-full max-w-s1560 py-8 px-4 md:px-8 scroll-mt-16 flex flex-col items-center gap-8 ${
        inView ? 'motion-safe:animate-fade-up' : 'motion-safe:opacity-0'
      }`}
    >
      <h2 className="max-w-s1260 text-center mb-12">{title}</h2>
      <div className={contentClassName}>{children}</div>
    </section>
  );
};

export default Section;
