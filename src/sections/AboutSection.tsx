import Section from '../components/layout/Section';
import TitleGenerator from '../components/ui/TitleGenerator';

const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About"
      from="left"
      headingClassName="text-vw-16 s2400:text-vw-8.5"
      className="text-center s2400:grid s2400:grid-cols-2 s2400:gap-x-35 s2400:items-center s2400:text-left"
      contentClassName="mx-auto s2400:mx-0 max-w-s720 s2400:max-w-none flex flex-col items-center s2400:items-start"
    >
      <p className="text-xl lg:text-2xl s1440:text-3xl font-medium">
        Hi there, you can call me Jacob! I'm a full-stack software
        developer, currently working as a Software Development Engineer at
        Amazon.
      </p>
      <p>
        As long as I remember I always loved creating things! This led me to
        trying out Computer Science in high school, and eventually graduating as
        a Data Science Specialist at the University of Toronto in 2025.
      </p>
      <p>
        My past experiences have allowed me to demonstrate my ability to learn
        quickly and show a keen sense of detail. I primarily have a proficiency
        in full-stack development, but I also have experience in quality
        assurance, as well as data analysis, machine learning, and designing
        data structures.
      </p>
      <p className="flex flex-wrap justify-center s2400:justify-start gap-x-8 text-base font-semibold uppercase tracking-wider">
        <a
          href="https://www.linkedin.com/in/aliel-jacob-roxas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AJRoxas"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1x1r2FG42kRQQm3Hn5douxDl4ilk1h-wH/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </p>
      <TitleGenerator startDelayMs={1300} />
    </Section>
  );
};

export default AboutSection;
