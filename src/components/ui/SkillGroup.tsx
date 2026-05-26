const SkillGroup = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-off-white text-off-black rounded-md p-4 max-w-s360 md:max-w-s720">
      <div className="text-center text-lg">
        <b>{title}</b>
      </div>
      <div className="mt-4 my-2 grid grid-cols-2 lg:grid-cols-3 gap-2">
        {children}
      </div>
    </div>
  );
};

export default SkillGroup;
