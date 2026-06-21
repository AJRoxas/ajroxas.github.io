import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import EducationSection from './sections/EducationSection';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Navbar from './components/layout/Navbar';
import ProjectsSection from './sections/ProjectsSection';
import WorkSection from './sections/WorkSection';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mb-32">
       <Hero />
        <div className="flex flex-col justify-center items-center gap-4">
          <AboutSection />
          <WorkSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
