import { useEffect, useState } from 'react';
import {
  generateRandomNumber,
  generateRandomNumberFromArray,
} from '../../utils/numberGenerator';

const titles = [
  'Software Developer',
  'Stats Grad',
  'Data Sci & ML Specialist',
  'UofT Grad',
  'QA Engineer',
  'Heat Lifer',
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

    // Jitter the per-keystroke speed so it feels hand-typed (deleting is faster)
    const keystrokeMs = isReversed
      ? generateRandomNumber(70, 30)
      : generateRandomNumber(110, 45);

    timeout = setTimeout(() => {
      setCurrentTitle((previousTitle) => {
        if (isReversed && previousTitle.length > 0) {
          return previousTitle.substring(0, previousTitle.length - 1);
        }

        if (!isReversed && previousTitle.length < fullTitle.length) {
          return fullTitle.substring(0, previousTitle.length + 1);
        }

        // Pick a new title, never repeating the one that just finished
        let nextId = generateRandomNumberFromArray(titles.length);
        if (nextId === currentTitleId) {
          nextId = (nextId + 1) % titles.length;
        }

        setIsReversed(false);
        setCurrentTitleId(nextId);

        return titles[nextId].substring(0, 1);
      });
    }, keystrokeMs);

    return () => clearTimeout(timeout);
  }, [currentTitleId, currentTitle.length, isReversed]);

  return (
    <p className="h-8 text-center text-2xl">
      {currentTitle}
      <span className="animate-blink">|</span>
    </p>
  );
};

export default TitleGenerator;
