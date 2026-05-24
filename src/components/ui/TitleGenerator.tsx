import { useState } from "react";
import { generateRandomNumberFromArray } from "../../utils/numberGenerator";

const TitleGenerator = () => {
   
  const titles = [
    'Software Developer',
    'Data Science + Statistics',
    'QA Engineer',
    'Heat Fan',
    'Raptors Fan',
    'Sports Spectator',
    "Gotta catch 'em all!",
    'Movie Buff',
    'Home Cook',
    'Gamer',
    'Former youngest person',
    'Totally Human :)',
    'TCG Player',
    'Punk Rocker',
    'Music Fan',
    "It's time to D-D-D-D-DUEL!"
  ];

  const [id] = useState(() => generateRandomNumberFromArray(titles.length));

  return (
    <>
      <p className="h-8 text-center text-2xl">
        {titles[id]}
      </p>
    </>
  );
};

export default TitleGenerator;
