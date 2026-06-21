interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section
      id={id}
      className="w-full max-w-s1560 py-8 px-4 md:px-8 scroll-mt-16 flex flex-col items-center gap-8"
    >
      <h2 className="max-w-s1260 text-center mb-12">{title}</h2>
      <div className="flex flex-col items-center gap-12">{children}</div>
    </section>
  );
};

export default Section;
