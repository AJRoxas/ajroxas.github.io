import Section from '../components/layout/Section';

const ContactSection = () => {
  return (
    <Section
      id="contact"
      title="Contact"
      from="left"
      headingClassName="text-vw-12"
      contentClassName="flex flex-col gap-7 s2400:flex-row s2400:items-baseline s2400:justify-between"
      last
    >
      <a
        href="mailto:alieljacob.roxas@alumni.utoronto.ca"
        className="text-lg sm:text-3xl md:text-4xl lg:text-5xl s2400:text-7xl font-semibold tracking-tight decoration-2 lg:decoration-4 lg:underline-offset-8"
      >
        alieljacob.roxas@alumni.utoronto.ca
      </a>
      <p className="flex flex-wrap gap-x-8 text-base font-semibold uppercase tracking-wider">
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
    </Section>
  );
};

export default ContactSection;
