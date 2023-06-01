import playGame from '../index.js';
import generateNumber from '../utility.js';

const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const length = 10;
  const range = generateNumber(2, 10);
  const progression = [];
  const begin = generateNumber(5, 50);

  for (let i = 0; i < length; i += 1) {
    progression.push(begin + range * i);
  }

  const hiddenNumIndex = generateNumber(0, length - 1);
  const correctAnswer = progression[hiddenNumIndex].toString();

  progression[hiddenNumIndex] = ' .. ';

  const question = progression.join(' ');

  return { question, correctAnswer };
};

export default () => {
  playGame(gameDescription, getGameData);
};
