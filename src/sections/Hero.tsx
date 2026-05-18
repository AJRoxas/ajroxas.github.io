import WelcomeBox from "../components/ui/WelcomeBox";
import TitleGenerator from "../components/ui/TitleGenerator";

const Hero = () => { 
  return (
    <section className="h-hdh min-h-87 flex flex-col justify-center items-center gap-4">
      <WelcomeBox />
      <TitleGenerator />
    </section>
  );
} 

export default Hero;