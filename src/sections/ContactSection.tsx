import Section from '../components/layout/Section';

const ContactSection = () => {
  return (
    <Section id="contact" title="// Contact">
      <div className="max-w-s1560 flex flex-col justify-center items-center">
        <div className="content-box text-center">
          <h3>Email</h3>
          <p>
            <a href="mailto:alieljacob.roxas@alumni.utoronto.ca">
              alieljacob.roxas@alumni.utoronto.ca
            </a>
          </p>
        </div>
        <div className="content-box text-center">
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/aliel-jacob-roxas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              /in/aliel-jacob-roxas/
            </a>
          </p>
        </div>
        <div className="content-box text-center">
          <h3>GitHub</h3>
          <p>
            <a
              href="https://github.com/AJRoxas"
              target="_blank"
              rel="noopener noreferrer"
            >
              AJRoxas
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
