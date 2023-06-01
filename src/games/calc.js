import playGame from '../index.js';
import generateNumber from '../utility.js';

const operators = ['+', '-', '*'];
const calculation = (first, last, sign) => {
  switch (sign) {
    case '+':
      return first + last;
    case '-':
      return first - last;
    default:
      return first * last;
  }
};

const gameDescription = 'What is the result of the expression?';

const getGameData = () => {
  const first = generateNumber();
  const last = generateNumber();
  const sign = operators[generateNumber(0, operators.length)];

  const correctAnswer = String(calculation(first, last, sign));
  const question = `${first} ${sign} ${last}`;

  return { question, correctAnswer };
};

export default () => {
  playGame(gameDescription, getGameData);
};
