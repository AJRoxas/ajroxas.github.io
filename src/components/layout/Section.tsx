interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="section-container">
      <h2 className="max-w-s1260">{title}</h2>
      <div className="flex flex-col items-center gap-16">{children}</div>
    </section>
  );
};

export default Section;
