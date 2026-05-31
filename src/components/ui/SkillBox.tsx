const SkillBox = ({ image, skill }: { image: string; skill: string }) => {
  return (
    <div className="min-h-12 px-2 flex justify-center items-center gap-2"> 
      <img src={image} alt={`${skill} logo`} className="w-8 h-8" />
      <span className="text-off-black text-center text-sm font-bold">{skill}</span>
    </div>
  );
};  

export default SkillBox;