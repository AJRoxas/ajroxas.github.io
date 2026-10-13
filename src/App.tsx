import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import EducationSection from './sections/EducationSection';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Navbar from './components/layout/Navbar';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
