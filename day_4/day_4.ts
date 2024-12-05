const XMAS = 'XMAS';
const XMAS_REVERSE = 'SAMX';
export const ceresSearch = (input: string[]) => {
  return input.reduce((total, row, rowIndex) => {
    return (
      total +
      row.split('').reduce((rowCount, _, index) => {
        if (checkBackwards(rowIndex, index, input)) {
          rowCount++;
        }
        rowCount += getVerticalTotals(rowIndex, index, input);
        rowCount += getHorizontalTotals(rowIndex, index, input);

        return rowCount;
      }, 0)
    );
  }, 0);
};

const checkBackwards = (
  rowNumber: number,
  rowIndex: number,
  input: string[]
) => {
  const result = input[rowNumber].slice(rowIndex - 3, rowIndex + 1);
  return result === XMAS_REVERSE || result === XMAS;
};

const getVerticalTotals = (
  rowNumber: number,
  rowIndex: number,
  input: string[]
): number => {
  const results: string[] = [];
  results.push(
    input[rowNumber][rowIndex] +
      (input?.[rowNumber - 1]?.[rowIndex] ?? '') +
      (input?.[rowNumber - 2]?.[rowIndex] ?? '') +
      (input?.[rowNumber - 3]?.[rowIndex] ?? '')
  );
  return results.reduce((total, result) => {
    if (result === XMAS || result === XMAS_REVERSE) {
      total++;
    }
    return total;
  }, 0);
};

const getHorizontalTotals = (
  rowNumber: number,
  rowIndex: number,
  input: string[]
): number => {
  const results: string[] = [];
  // * top left
  results.push(
    input[rowNumber][rowIndex] +
      (input?.[rowNumber - 1]?.[rowIndex - 1] ?? '') +
      (input?.[rowNumber - 2]?.[rowIndex - 2] ?? '') +
      (input?.[rowNumber - 3]?.[rowIndex - 3] ?? '')
  );

  // * top right
  results.push(
    input[rowNumber][rowIndex] +
      (input?.[rowNumber - 1]?.[rowIndex + 1] ?? '') +
      (input?.[rowNumber - 2]?.[rowIndex + 2] ?? '') +
      (input?.[rowNumber - 3]?.[rowIndex + 3] ?? '')
  );

  return results.reduce((total, result) => {
    if (result === XMAS || result === XMAS_REVERSE) {
      total++;
    }
    return total;
  }, 0);
};
