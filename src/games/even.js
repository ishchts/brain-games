import playGame from '../index.js';
import generateNumber from '../utility.js';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if a number is even, otherwise answer "no".';

const getGameData = () => {
  const question = generateNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  playGame(gameDescription, getGameData);
};
