export const historianHysteria = (
  input: string[]
): { listDifferences: number; listFrequencies: number } => {
  const [leftList, rightList] = getLists(input).map((list) =>
    list.sort((a, b) => a - b)
  );
  const frequency = getFrequencyMap(leftList, rightList);
  const listDifferences = leftList.reduce((acc, current, index) => {
    const currentRight = rightList[index];
    return acc + Math.abs(current - currentRight);
  }, 0);

  const listFrequencies = leftList.reduce((acc, current) => {
    const frequencyCount = frequency[current];
    return acc + current * frequencyCount;
  }, 0);

  return {
    listDifferences,
    listFrequencies,
  };
};

const getLists = (input: string[]): number[][] => {
  return input.reduce(
    (listsArr: number[][], current: string) => {
      const [left, right] = listsArr;
      const numbers = current.split(' ');
      left.push(Number(numbers[0]));
      right.push(Number(numbers.slice(-1)));
      return listsArr;
    },
    [[], []]
  );
};

const getFrequencyMap = (
  listOne: number[],
  listTwo: number[]
): Record<number, number> => {
  return listOne.reduce((obj: Record<number, number>, num) => {
    if (obj[num] === undefined) {
      obj[num] = listTwo.filter((arrTwoNum) => num === arrTwoNum).length;
    }
    return obj;
  }, {});
};
