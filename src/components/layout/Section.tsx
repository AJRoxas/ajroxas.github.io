import { useInView } from '../../hooks/useInView';

const slideIn = {
  left: 'motion-safe:animate-slide-in-left',
  right: 'motion-safe:animate-slide-in-right',
};

interface SectionProps {
  id: string;
  title: string;
  headingClassName: string;
  from: 'left' | 'right';
  contentClassName: string;
  className?: string;
  last?: boolean;
  children?: React.ReactNode;
}

const Section = ({
  id,
  title,
  headingClassName,
  from,
  contentClassName,
  className = '',
  last = false,
  children,
}: SectionProps) => {
  const { ref, inView } = useInView<HTMLHeadingElement>();

  return (
    // Min height is for the Contact section plus Footer to fill screen height
    <section
      id={id}
      className={`w-full mx-auto ${
        last ? 'min-h-[calc(100svh-4rem-var(--foot-h,120px))]' : 'min-h-svh'
      } py-24 s2400:py-45 px-4 md:px-8 scroll-mt-16 flex flex-col justify-center gap-8 ${className}`}
    >
      <h2
        ref={ref}
        className={`mb-12 ${headingClassName} ${
          inView ? slideIn[from] : 'motion-safe:opacity-0'
        }`}
      >
        {title}
      </h2>

      <div className={contentClassName}>{children}</div>
    </section>
  );
};

export default Section;
