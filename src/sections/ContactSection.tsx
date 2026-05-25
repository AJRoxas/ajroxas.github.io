import Section from '../components/layout/Section';

const ContactSection = () => {
  return (
    <Section id="contact" title="// Contact">
      <div className="content-box shadow-bright-teal text-center">
        <h3>Email</h3>
        <p>
          <a href="mailto:alieljacob.roxas@alumni.utoronto.ca">
            alieljacob.roxas@alumni.utoronto.ca
          </a>
        </p>
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
    </Section>
  );
};

export default ContactSection;
