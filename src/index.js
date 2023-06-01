import readlineSync from 'readline-sync';

const numberOfRounds = 3;
export default (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);
  const startGame = () => {
    for (let i = 0; i < numberOfRounds; i += 1) {
      const gameData = getGameData();
      const { question, correctAnswer } = gameData;
      console.log(`Question: ${question}`);

      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };

  startGame();
};
