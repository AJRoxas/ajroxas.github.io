interface SectionProps {
  title: string;
  children?: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="section-container">
      <h2>{title}</h2>
      <div className="w-full flex flex-col items-center gap-8">{children}</div>
    </section>
  );
};

export default Section;
