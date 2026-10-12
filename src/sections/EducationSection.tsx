import Section from '../components/layout/Section';

const schoolTitle =
  'text-4xl lg:text-5xl xl:text-6xl s2400:text-vw-2.5 text-balance';

const EducationSection = () => {
  return (
    <Section
      id="education"
      title="Education"
      headingClassName="text-vw-10"
      contentClassName="w-full flex flex-col items-center gap-20 text-center s2400:grid s2400:grid-cols-2 s2400:gap-x-20 s2400:items-start s2400:text-left"
    >
      <div>
        <h3 className={schoolTitle}>University of Toronto</h3>
        <p className="mb-5 text-sm uppercase tracking-widest text-gold">
          September 2019 - January 2025
        </p>
        <p className="text-xl">
          <b>
            Honours Bachelor of Science in Statistics
            <br />
            Machine Learning and Data Science Specialist
          </b>
        </p>
        <p>
          <b>Cumulative GPA: 3.59</b>
        </p>
        <p>
          <b className="text-sm uppercase tracking-widest text-gold">
            Key Courses
          </b>
          <br />
          Design and Analysis of Data Structures &middot; Human-Computer
          Interaction &middot; Intro to Databases &middot; Intro to Machine
          Learning &middot; Intro to Software Engineering &middot; Machine
          Learning Theory &middot; Software Design &middot; Time Series Analysis
        </p>
      </div>
      <div>
        <h3 className={schoolTitle}>Neil McNeil High School</h3>
        <p className="mb-5 text-sm uppercase tracking-widest text-gold">
          September 2015 - June 2019
        </p>
        <p className="text-xl">
          <b>Ontario Secondary School Diploma (OSSD)</b>
        </p>
      </div>
    </Section>
  );
};

export default EducationSection;
