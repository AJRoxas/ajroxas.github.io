import Section from '../components/layout/Section';
import ActivityContent from '../components/ui/ActivityContent';
import { workExperiences } from '../constants/workExperiences';
import { projects } from '../constants/projects';

const ProjectsSection = () => {
  const workExperiencesLength = workExperiences?.length || 0;

  return (
    <Section
      id="projects"
      title="Projects"
      headingClassName="text-vw-11"
      contentClassName="w-full flex flex-col s2400:flex-row s2400:justify-center gap-24 s2400:gap-20"
    >
      {projects.map((project, index) => (
        <ActivityContent
          key={index}
          index={index}
          reverse={(workExperiencesLength + index) % 2 === 1}
          title={project.project}
          subtitle={project.projectType}
          duration={project.duration}
          responsibilities={project.description}
          art={project.art}
          link={project.link}
        />
      ))}
    </Section>
  );
};

export default ProjectsSection;
