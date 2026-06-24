const SkillGroup = ({
  title,
  children,
  className = '',
  style,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={style}
      className={`bg-off-white/90 text-off-black rounded-md p-4 md:max-w-s720 motion-safe:hover:scale-105 ${className}`}
    >
      <div className="text-center text-xl font-sync font-bold">
        <b>{title}</b>
      </div>
      <div className="mt-4 my-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {children}
      </div>
    </div>
  );
};

export default SkillGroup;
