const SectionContent = ({
  title,
  reverse,
  children,
}: {
  title: string;
  reverse?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className={`flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 max-w-s1560 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <h3 className="text-center word-break">{title}</h3>
      <div className="content-box">{children}</div>
    </div>
  );
};

export default SectionContent;
