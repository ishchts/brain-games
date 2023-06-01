import playGame from '../index.js';
import generateNumber from '../utility.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let count = 2; count <= Math.sqrt(number); count += 1) {
    if (number % count === 0) {
      return false;
    }
  }
  return number > 1;
};

const getGameData = () => {
  const question = generateNumber(2, 499);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  playGame(gameDescription, getGameData);
};
