interface SectionProps {
  title: string;
  children?: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="section-container">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
