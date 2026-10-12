import doubleCylinder1600 from '../assets/art/ac75-1085_double-cylinder-exterior_guidice-1600.webp';
import doubleCylinder2400 from '../assets/art/ac75-1085_double-cylinder-exterior_guidice-2400.webp';
import doubleCylinder3200 from '../assets/art/ac75-1085_double-cylinder-exterior_guidice-3200.webp';

export interface Artwork {
  title: string;
  artist: string;
  year: number;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
}

export const heroArt: Artwork = {
  title: 'Exterior view of a double cylinder colony',
  artist: 'Rick Guidice',
  year: 1975,
  src: doubleCylinder3200,
  srcSet: `${doubleCylinder1600} 1600w, ${doubleCylinder2400} 2400w, ${doubleCylinder3200} 3200w`,
  width: 3200,
  height: 2339,
  alt: '',
};
