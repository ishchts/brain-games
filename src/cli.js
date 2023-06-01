import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}`);
};
