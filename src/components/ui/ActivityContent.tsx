import SectionContent from './SectionContent';

interface ActivityContentProps {
  title: string;
  subtitle: string;
  duration: string;
  responsibilities: string[];
  reverse?: boolean;
  link?: { label: string; href: string; text: string };
}

const ActivityContent = ({
  title,
  subtitle,
  duration,
  responsibilities,
  reverse,
  link,
}: ActivityContentProps) => {
  return (
    <SectionContent title={title} reverse={reverse}>
      <p>
        <b>
          {subtitle}
          <br />
          {duration}
        </b>
      </p>
      <ul>
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
      {link && (
        <p>
          <b>{link.label}: </b>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        </p>
      )}
    </SectionContent>
  );
};

export default ActivityContent;
