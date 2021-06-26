import readlineSync from 'readline-sync';

export const brainEvenLogic = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && randomNumber % 2 === 0) {
      console.log('Correct!');
    } else if (answer === 'no' && randomNumber % 2 >= 1) {
      console.log('Correct!');
    } else {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export default brainEvenLogic;
