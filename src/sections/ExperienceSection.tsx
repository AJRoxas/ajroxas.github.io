import Section from '../components/layout/Section';
import ActivityContent from '../components/ui/ActivityContent';
import { workExperiences } from '../constants/workExperiences';

const ExperienceSection = () => {
  return (
    <Section
      id="experience"
      title="Experience"
      from="right"
      headingClassName="text-vw-9"
      contentClassName="w-full flex flex-col s2400:flex-row s2400:justify-center gap-24 s2400:gap-20"
    >
      {workExperiences.map((experience, index) => (
        <ActivityContent
          key={index}
          index={index}
          reverse={index % 2 === 1}
          title={experience.company}
          subtitle={experience.position}
          duration={experience.duration}
          responsibilities={experience.responsibilities}
          art={experience.art}
        />
      ))}
    </Section>
  );
};

export default ExperienceSection;
