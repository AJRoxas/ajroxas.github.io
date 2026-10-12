import type { Artwork } from '../../constants/art';

const ArtFrame = ({ art }: { art: Artwork }) => {
  return (
    <div className="relative aspect-4/3 s2400:aspect-16/10 overflow-hidden rounded isolate bg-gold after:absolute after:inset-0 after:bg-plum after:mix-blend-lighten after:content-['']">
      <img
        src={art.src}
        srcSet={art.srcSet}
        sizes="(min-width: 2400px) 30vw, (min-width: 768px) 40vw, 92vw"
        width={art.width}
        height={art.height}
        alt={art.alt}
        loading="lazy"
        decoding="async"
        className="size-full object-cover grayscale contrast-125 mix-blend-multiply"
      />
    </div>
  );
};

export default ArtFrame;
