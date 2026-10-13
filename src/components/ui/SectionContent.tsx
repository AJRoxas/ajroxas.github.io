import type { Artwork } from '../../constants/art';
import ArtFrame from './ArtFrame';

const SectionContent = ({
  title,
  index,
  art,
  reverse,
  children,
}: {
  title: string;
  index: number;
  art: Artwork;
  reverse?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full s2400:basis-1/3">
      <div
        className={`flex items-baseline gap-4 md:gap-6 mb-8 md:mb-10 ${
          reverse
            ? 'md:flex-row-reverse md:text-right s2400:flex-row s2400:text-left'
            : ''
        }`}
      >
        <span className="text-lg font-bold tracking-widest text-gold">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl s1440:text-8xl s2400:text-vw-1.75 text-balance">
          {title}
        </h3>
      </div>
      <div
        className={`flex flex-col md:flex-row s2400:flex-col gap-8 md:gap-14 s2400:gap-8 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        <figure className="md:w-5/12 s2400:w-full shrink-0 flex flex-col gap-3">
          <ArtFrame art={art} />
          <figcaption className="text-xs text-gold">
            <b className="text-cream">{art.title}</b> &middot; {art.artist}{' '}
            &middot; NASA Ames, {art.year}
          </figcaption>
        </figure>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
};

export default SectionContent;