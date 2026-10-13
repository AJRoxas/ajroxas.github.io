import type { Artwork } from '../../constants/art';
import SectionContent from './SectionContent';

interface ActivityContentProps {
  index: number;
  title: string;
  subtitle: string;
  duration: string;
  responsibilities: string[];
  art: Artwork;
  reverse?: boolean;
  link?: { label: string; href: string; text: string };
}

const ActivityContent = ({
  index,
  title,
  subtitle,
  duration,
  responsibilities,
  art,
  reverse,
  link,
}: ActivityContentProps) => {
  return (
    <SectionContent title={title} index={index} art={art} reverse={reverse}>
      <p className="mt-0">
        <b className="text-xl">{subtitle}</b>
        <br />
        <span className="text-sm uppercase tracking-widest text-gold">
          {duration}
        </span>
      </p>
      <ul className="mt-5 space-y-3">
        {responsibilities.map((resp) => (
          <li key={resp}>{resp}</li>
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
