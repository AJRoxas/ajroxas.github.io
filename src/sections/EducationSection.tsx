import Section from '../components/layout/Section';

const EducationSection = () => {
  return (
    <Section title="// Education">
      <div className="content-box shadow-bright-blue text-center">
        <h3>University of Toronto</h3>
        <p>September 2019 - January 2025</p>
        <p>
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
          <b>Key Courses</b>
          <br />
          Design and Analysis of Data Structures &middot; Human-Computer
          Interaction &middot; Intro to Databases &middot; Intro to Machine
          Learning &middot; Intro to Software Engineering &middot; Machine
          Learning Theory &middot; Software Design &middot; Time Series Analysis
        </p>
      </div>
      <div className="content-box shadow-bright-pink text-center">
        <h3>Neil McNeil High School</h3>
        <p>September 2015 - June 2019</p>
        <p>
          <b>Ontario Secondary School Diploma (OSSD)</b>
        </p>
      </div>
    </Section>
  );
};

export default EducationSection;
