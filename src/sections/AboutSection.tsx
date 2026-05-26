import Section from '../components/layout/Section';
import SectionContent from '../components/ui/SectionContent';
import SkillBox from '../components/ui/SkillBox';
import SkillGroup from '../components/ui/SkillGroup';
import bash from '../assets/svg/languages/bash.svg';
import c from '../assets/svg/languages/c.svg';
import csharp from '../assets/svg/languages/csharp.svg';
import css from '../assets/svg/languages/css.svg';
import groovy from '../assets/svg/languages/groovy.svg';
import html from '../assets/svg/languages/html.svg';
import java from '../assets/svg/languages/java.svg';
import javascript from '../assets/svg/languages/javascript.svg';
import python from '../assets/svg/languages/python.svg';
import r from '../assets/svg/languages/r.svg';
import sql from '../assets/svg/languages/sql.svg';
import typescript from '../assets/svg/languages/typescript.svg';
import bootstrap from '../assets/svg/frameworks/bootstrap.svg';
import dotnet from '../assets/svg/frameworks/dotnet.svg';
import expressjs from '../assets/svg/frameworks/expressjs.svg';
import jest from '../assets/svg/frameworks/jest.svg';
import less from '../assets/svg/frameworks/less.svg';
import react from '../assets/svg/frameworks/react.svg';
import reactnative from '../assets/svg/frameworks/reactnative.svg';
import selenium from '../assets/svg/frameworks/selenium.svg';
import tailwindcss from '../assets/svg/frameworks/tailwindcss.svg';

const AboutSection = () => {
  return (
    <Section id="about" title="// About">
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
      </SectionContent>
      <div className="max-w-s1260 flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8">
        <SkillGroup title="Languages">
          <SkillBox image={bash} skill="Bash" />
          <SkillBox image={c} skill="C" />
          <SkillBox image={csharp} skill="C#" />
          <SkillBox image={css} skill="CSS" />
          <SkillBox image={groovy} skill="Groovy" />
          <SkillBox image={html} skill="HTML" />
          <SkillBox image={java} skill="Java" />
          <SkillBox image={javascript} skill="JavaScript" />
          <SkillBox image={python} skill="Python" />
          <SkillBox image={r} skill="R" />
          <SkillBox image={sql} skill="SQL" />
          <SkillBox image={typescript} skill="TypeScript" />
        </SkillGroup>
        <SkillGroup title="Frameworks">
          <SkillBox image={bootstrap} skill="Bootstrap" />
          <SkillBox image={dotnet} skill=".NET" />
          <SkillBox image={expressjs} skill="Express.js" />
          <SkillBox image={jest} skill="Jest" />
          <SkillBox image={less} skill="Less" />
          <SkillBox image={react} skill="React" />
          <SkillBox image={reactnative} skill="React Native" />
          <SkillBox image={selenium} skill="Selenium" />
          <SkillBox image={tailwindcss} skill="Tailwind" />
        </SkillGroup>
      </div>
    </Section>
  );
};

export default AboutSection;
