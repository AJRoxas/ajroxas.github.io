import Section from '../components/layout/Section';
import ActivityContent from '../components/ui/ActivityContent';

const ProjectsSection = () => {
  return (
    <Section id="projects" title="// Projects">
      <ActivityContent
        className="shadow-bright-purple"
        heading="Fitbook"
        subheading="Introduction to Software Engineering, University of Toronto"
        duration="May 2023 - August 2023"
        responsibilities={[
          'Built a fitness social media app with workout and progress tracking using React Native for iOS and Android.',
          'Implemented a RESTful API with Node.js, Express.js, and Mongoose to connect to a MongoDB database.',
        ]}
      />
    </Section>
  );
};

export default ProjectsSection;
