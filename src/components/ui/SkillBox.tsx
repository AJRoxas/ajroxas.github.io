const SkillBox = ({ image, skill }: { image: string; skill: string }) => {
  return (
    <div className="max-w-30 flex justify-center items-center gap-2"> 
      <img src={image} alt={`${skill} logo`} className="w-8 h-8" />
      <span className="text-off-black text-sm font-bold">{skill}</span>
    </div>
  );
};  

export default SkillBox;