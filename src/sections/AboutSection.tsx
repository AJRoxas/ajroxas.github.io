import Section from '../components/layout/Section';
import SectionContent from '../components/ui/SectionContent';

const AboutSection = () => {
  return (
    <Section id="about" title="About">
      <SectionContent title="Hi There!">
        <p>
          I’m Aliel Jacob Roxas! I’m a full-stack software developer, currently
          working as a Software Development Engineer at Amazon.
        </p>
        <p>
          {' '}
          As long as I remember I always loved creating things! This lead me to
          trying out Computer Science in high school, and eventually graduating
          as a Data Science Specialist at the University of Toronto in 2025.
        </p>
        <p>
          My past experiences have allowed me to demonstrate my ability to learn
          quickly and show a keen sense of detail. I primarily have a
          proficiency in full-stack development, but I also have experience in
          quality assurance, as well as data analysis, machine learning, and
          designing data structures.
        </p>
        <p>
          <b>LinkedIn: </b>
          <a
            href="https://www.linkedin.com/in/aliel-jacob-roxas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            /in/aliel-jacob-roxas/
          </a>
          <br />
          <b>GitHub: </b>
          <a
            href="https://github.com/AJRoxas"
            target="_blank"
            rel="noopener noreferrer"
          >
            AJRoxas
          </a>
          <br />
          <b>Email: </b>
          <a href="mailto:alieljacob.roxas@alumni.utoronto.ca">
            alieljacob.roxas@alumni.utoronto.ca
          </a>
          <br />
          <b>Resume: </b>
          <a
            href="https://drive.google.com/file/d/1x1r2FG42kRQQm3Hn5douxDl4ilk1h-wH/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Drive
          </a>
        </p>
      </SectionContent>
    </Section>
  );
};

export default AboutSection;
