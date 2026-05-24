interface WelcomeBoxProps {
  backgroundImage: string
}
const WelcomeBox = ({ backgroundImage }: WelcomeBoxProps) => {
  return (
    <div
      className={`h-75 w-75 ${backgroundImage} bg-cover border-4 border-off-white flex justify-center items-center`}
    >
      <div className="h-65 w-65 font-sync font-bold text-off-white text-center text-5xl bg-off-black/50 flex flex-col justify-center gap-6 items-center">
        <div>Aliel</div>
        <div>Jacob</div>
        <div>Roxas</div>
      </div>
    </div>
  );
};

export default WelcomeBox;
