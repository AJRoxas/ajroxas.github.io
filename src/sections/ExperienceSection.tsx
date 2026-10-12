import Section from '../components/layout/Section';
import ActivityContent from '../components/ui/ActivityContent';
import { workExperiences } from '../constants/workExperiences';

const ExperienceSection = () => {
  return (
    <Section id="experience" title="Experience">
      {workExperiences.map((experience, index) => (
        <ActivityContent
          key={index}
          reverse={index % 2 === 0}
          title={experience.company}
          subtitle={experience.position}
          duration={experience.duration}
          responsibilities={experience.responsibilities}
        />
      ))}
    </Section>
  );
};

export default ExperienceSection;
