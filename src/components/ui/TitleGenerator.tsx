import { useEffect, useState } from 'react';
import { generateRandomNumberFromArray } from '../../utils/numberGenerator';

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
  "It's time to D-D-D-D-DUEL!",
];

const TitleGenerator = () => {
  const [startingId] = useState(() =>
    generateRandomNumberFromArray(titles.length),
  );

  const [currentTitleId, setCurrentTitleId] = useState(startingId);

  const [currentTitle, setCurrentTitle] = useState(
    titles[startingId].substring(0, 1),
  );

  const [isReversed, setIsReversed] = useState(false);

  const animationLengthMs = 75;
  const pauseMs = 500;

  useEffect(() => {
    const fullTitle = titles[currentTitleId];

    let timeout: ReturnType<typeof setTimeout>;

    // Pause before deleting
    if (!isReversed && currentTitle.length === fullTitle.length) {
      timeout = setTimeout(() => {
        setIsReversed(true);
      }, pauseMs);

      return () => clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      setCurrentTitle((previousTitle) => {
        if (isReversed && previousTitle.length > 0) {
          return previousTitle.substring(0, previousTitle.length - 1);
        }

        if (!isReversed && previousTitle.length < fullTitle.length) {
          return fullTitle.substring(0, previousTitle.length + 1);
        }

        const nextId = generateRandomNumberFromArray(titles.length)

        setIsReversed(false);
        setCurrentTitleId(nextId);

        return titles[nextId].substring(0, 1);
      });
    }, animationLengthMs);

    return () => clearTimeout(timeout);
  }, [currentTitleId, currentTitle.length, isReversed]);

  return <p className="h-8 text-center text-2xl">{currentTitle}|</p>;
};

export default TitleGenerator;
