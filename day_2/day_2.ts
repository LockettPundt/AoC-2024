export const redNosedReports = (
  input: string[]
): {
  numberOfReportsWithNoErrors: number;
  numberOfReportsWithOneOrNoErrors: number;
} => {
  const reports = input.map((report) => report.split(' ').map(Number));

  const safeReports = reports.reduce(
    (
      obj: { reportsWithNoErrors: number; reportsWithOneError: number },
      report
    ) => {
      const reportIsValid = isValidReport(report);

      if (reportIsValid) {
        obj.reportsWithNoErrors++;
      } else {
        for (let index = 0; index < report.length; index++) {
          const newArr = report.toSpliced(index, 1);
          const updatedReportIsValid = isValidReport(newArr);
          if (updatedReportIsValid) {
            obj.reportsWithOneError++;
            break;
          }
        }
      }
      return obj;
    },
    {
      reportsWithNoErrors: 0,
      reportsWithOneError: 0,
    }
  );

  return {
    numberOfReportsWithNoErrors: safeReports.reportsWithNoErrors,
    numberOfReportsWithOneOrNoErrors:
      safeReports.reportsWithOneError + safeReports.reportsWithNoErrors,
  };
};

const isValidReport = (report: number[]): boolean => {
  return report.every((num, index, arr) => {
    if (index > 0) {
      const currentArray = arr.slice(0, index + 1);
      if (
        !isWithinRange(Math.abs(num - arr[index - 1])) ||
        !(isAllAscending(currentArray) || isAllDescending(currentArray))
      ) {
        return false;
      }
    }
    return true;
  });
};

const isWithinRange = (num: number): boolean => {
  return num > 0 && num <= 3;
};

const isAllAscending = (arr: number[]): boolean => {
  return arr.every((num, index, arr) => {
    if (index > 0) {
      return num > arr[index - 1];
    }
    return true;
  });
};

const isAllDescending = (arr: number[]): boolean => {
  return arr.every((num, index, arr) => {
    if (index > 0) {
      return num < arr[index - 1];
    }
    return true;
  });
};
