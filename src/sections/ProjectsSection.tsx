import Section from '../components/layout/Section';
import ActivityContent from '../components/ui/ActivityContent';

const ProjectsSection = () => {
  return (
    <Section id="projects" title="// Projects">
      <ActivityContent
        title="Personal Portfolio"
        subtitle="Personal Project - This Website!"
        duration="February 2026 - Present"
        responsibilities={[
          'Designed and created a personal portfolio in the React framework to showcase qualifications and skills',
          'Implemented and automated deployment workflows using Docker and GitHub Pages',
        ]}
      />
      <ActivityContent
        reverse={true}
        title="Fitbook"
        subtitle="University Project"
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
