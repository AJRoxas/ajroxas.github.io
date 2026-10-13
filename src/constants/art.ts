import doubleCylinder1600 from '../assets/art/ac75-1085_double-cylinder-exterior_guidice-1600.webp';
import doubleCylinder2400 from '../assets/art/ac75-1085_double-cylinder-exterior_guidice-2400.webp';
import doubleCylinder3200 from '../assets/art/ac75-1085_double-cylinder-exterior_guidice-3200.webp';
import torusCutaway600 from '../assets/art/ac75-1086-1_toroidal-colonies-cutaway_guidice-600.webp';
import torusCutaway1200 from '../assets/art/ac75-1086-1_toroidal-colonies-cutaway_guidice-1200.webp';
import agriculture600 from '../assets/art/ac78-0330-4_agricultural-modules-cutaway_guidice-600.webp';
import agriculture1200 from '../assets/art/ac78-0330-4_agricultural-modules-cutaway_guidice-1200.webp';
import torusRim600 from '../assets/art/ac75-1886_torus-rim-construction_davis-600.webp';
import torusRim1200 from '../assets/art/ac75-1886_torus-rim-construction_davis-1200.webp';
import cylinderInterior600 from '../assets/art/ac75-1086_cylinder-interior-windows_guidice-600.webp';
import cylinderInterior1200 from '../assets/art/ac75-1086_cylinder-interior-windows_guidice-1200.webp';
import bernalInterior600 from '../assets/art/ac76-0628_bernal-sphere-interior-flight_guidice-600.webp';
import bernalInterior1200 from '../assets/art/ac76-0628_bernal-sphere-interior-flight_guidice-1200.webp';


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

export const torusCutaway: Artwork = {
  title: 'Toroidal colonies, cutaway view',
  artist: 'Rick Guidice',
  year: 1975,
  src: torusCutaway1200,
  srcSet: `${torusCutaway600} 600w, ${torusCutaway1200} 1200w`,
  width: 1200,
  height: 947,
  alt: 'Painting of a ring-shaped space colony cut open to show terraced homes, gardens and fields inside',
};

export const agriculture: Artwork = {
  title: 'Agricultural modules in cutaway view',
  artist: 'Rick Guidice',
  year: 1978,
  src: agriculture1200,
  srcSet: `${agriculture600} 600w, ${agriculture1200} 1200w`,
  width: 1200,
  height: 809,
  alt: 'Painting of a curved space-colony ring with farming modules cut open to show crops and livestock',
};

export const torusRim: Artwork = {
  title: 'Construction along the torus rim',
  artist: 'Don Davis',
  year: 1975,
  src: torusRim1200,
  srcSet: `${torusRim600} 600w, ${torusRim1200} 1200w`,
  width: 1200,
  height: 946,
  alt: 'Painting of astronauts and a crew pod assembling panels along the rim of a giant ring colony in space',
};

export const cylinderInterior: Artwork = {
  title: 'Cylinder interior, looking out through large windows',
  artist: 'Rick Guidice',
  year: 1975,
  src: cylinderInterior1200,
  srcSet: `${cylinderInterior600} 600w, ${cylinderInterior1200} 1200w`,
  width: 1200,
  height: 945,
  alt: 'Painting of green valleys and a river inside a huge cylinder, with long window strips and the sun overhead',
};

export const bernalInterior: Artwork = {
  title: 'Bernal sphere interior, including human-powered flight',
  artist: 'Rick Guidice',
  year: 1976,
  src: bernalInterior1200,
  srcSet: `${bernalInterior600} 600w, ${bernalInterior1200} 1200w`,
  width: 1200,
  height: 892,
  alt: 'Painting of the inside of a spherical colony: a town curving overhead, a person flying an orange glider, and a crowd at a picnic',
};

