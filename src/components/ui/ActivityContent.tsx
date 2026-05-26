import SectionContent from './SectionContent';

interface ActivityContentProps {
  title: string;
  subtitle: string;
  duration: string;
  responsibilities: string[];
  reverse?: boolean;
}

const ActivityContent = ({
  title,
  subtitle,
  duration,
  responsibilities,
  reverse,
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
    </SectionContent>
  );
};

export default ActivityContent;
