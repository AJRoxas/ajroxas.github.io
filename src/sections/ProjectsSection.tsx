import Section from '../components/layout/Section';
import ActivityContent from '../components/ui/ActivityContent';
import { workExperiences } from '../constants/workExperiences';
import { projects } from '../constants/projects';

const ProjectsSection = () => {
  const workExperiencesLength = workExperiences?.length || 0;

  return (
    <Section id="projects" title="// Projects">
      {projects.map((project, index) => (
        <ActivityContent
          key={index}
          reverse={(workExperiencesLength + index) % 2 === 0}
          title={project.project}
          subtitle={project.projectType}
          duration={project.duration}
          responsibilities={project.description}
        />
      ))}
    </Section>
  );
};

export default ProjectsSection;
