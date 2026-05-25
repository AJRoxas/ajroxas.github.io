interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="section-container">
      <div className="flex justify-center">
        <h2 className="max-w-s1080">{title}</h2>
      </div>
      <div className="flex flex-col items-center gap-8">{children}</div>
    </section>
  );
};

export default Section;
