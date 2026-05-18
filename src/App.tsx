import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import EducationSection from './sections/EducationSection';
import Hero from './sections/Hero';
import ProjectsSection from './sections/ProjectsSection';
import WorkSection from './sections/WorkSection';

const App = () => {
  return (
    <>
      <main className="mb-16">
       <Hero />
        <div className="flex flex-col justify-center items-center gap-4">
          <AboutSection />
          <WorkSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 h-16 flex justify-center items-center w-full bg-off-black border-t-2">
        &copy; 2026-Present Aliel Jacob Roxas :)
      </footer>
    </>
  );
};

export default App;
