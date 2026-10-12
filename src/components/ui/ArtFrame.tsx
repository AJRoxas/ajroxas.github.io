import type { Artwork } from '../../constants/art';
import { useInView } from '../../hooks/useInView';

const sizes = '(min-width: 2400px) 30vw, (min-width: 768px) 40vw, 92vw';

const ArtFrame = ({ art }: { art: Artwork }) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="aspect-4/3 s2400:aspect-16/10 overflow-hidden rounded"
    >
      <div
        className={`relative size-full ${
          inView ? 'motion-safe:animate-rise' : 'motion-safe:opacity-0'
        }`}
      >
        <img
          src={art.src}
          srcSet={art.srcSet}
          sizes={sizes}
          width={art.width}
          height={art.height}
          alt={art.alt}
          loading="lazy"
          decoding="async"
          className={`size-full object-cover motion-safe:transition-transform motion-safe:duration-16000 motion-safe:ease-linear ${
            inView ? 'motion-safe:scale-107' : ''
          }`}
        />
        <div
          aria-hidden="true"
          className={`absolute inset-0 isolate bg-gold after:absolute after:inset-0 after:bg-plum after:mix-blend-lighten after:content-[''] transition-opacity duration-1400 delay-300 motion-reduce:transition-none ${
            inView ? 'opacity-0' : ''
          }`}
        >
          <img
            src={art.src}
            srcSet={art.srcSet}
            sizes={sizes}
            width={art.width}
            height={art.height}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover grayscale contrast-125 mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};

export default ArtFrame;
