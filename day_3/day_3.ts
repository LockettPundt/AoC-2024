export const mullItOver = (input: string[]) => {
  const sum = input.reduce((acc, curr) => {
    const [a, b] = curr.split('(')[1].split(')')[0].split(',').map(Number);

    return acc + a * b;
  }, 0);
  return sum;
};
