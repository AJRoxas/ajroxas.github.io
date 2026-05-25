import Section from '../components/layout/Section';

const AboutSection = () => {
  return (
    <Section id="about" title="// About">
      <div className="content-box shadow-bright-blue text-center">
        <h3>Hi!</h3>
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
          <a
            href="https://www.linkedin.com/in/aliel-jacob-roxas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/AJRoxas"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <br />
          <a href="mailto:alieljacob.roxas@alumni.utoronto.ca">
            Email: alieljacob.roxas@alumni.utoronto.ca
          </a>
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
