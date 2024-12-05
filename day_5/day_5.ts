export const printQueue = (
  input: string[]
): {
  correctUpdateValue: number;
  incorrectUpdateValue: number;
} => {
  const splitIndex = input.indexOf('');
  const [pageOrderRules, pageUpdates] = [
    input.slice(0, splitIndex).map((rules) => rules.split('|').map(Number)),
    input
      .slice(splitIndex + 1)
      .map((updates) => updates.split(',').map(Number)),
  ];

  const pageOrderRuleMap = pageOrderRules.reduce(
    (acc: Record<number, number[]>, [page, order]) => {
      (acc[page] ??= []).push(order);
      return acc;
    },
    {}
  );

  return pageUpdates.reduce(
    (
      obj,
      updates
    ): {
      correctUpdateValue: number;
      incorrectUpdateValue: number;
    } => {
      obj.correctUpdateValue += getPageUpdateValue(updates, pageOrderRuleMap);
      obj.incorrectUpdateValue += getIncorrectUpdateValue(
        updates,
        pageOrderRuleMap
      );
      return obj;
    },
    {
      correctUpdateValue: 0,
      incorrectUpdateValue: 0,
    }
  );
};

const getPageUpdateValue = (
  updates: number[],
  map: Record<number, number[]>
) => {
  if (isUpdateArrayCorrect(updates, map)) {
    return updates[Math.floor(updates.length / 2)];
  }
  return 0;
};

const getIncorrectUpdateValue = (
  updates: number[],
  map: Record<number, number[]>
) => {
  if (!isUpdateArrayCorrect(updates, map)) {
    const sortedUpdates = updates.reduce((sortedUpdates) => {
      sortedUpdates.sort((a, b) => {
        const orderingA = map[a] ?? [];
        const orderingB = map[b] ?? [];
        if (orderingA.includes(b)) {
          return -1;
        } else if (orderingB.includes(a)) {
          return 1;
        }
        return 0;
      });
      return sortedUpdates;
    }, updates);
    return sortedUpdates[Math.floor(sortedUpdates.length / 2)];
  }
  return 0;
};

const isUpdateArrayCorrect = (
  updates: number[],
  map: Record<number, number[]>
) => {
  return updates.every((page, index, arr) => {
    return (map[page] ?? []).every(
      (order) => arr.indexOf(order) > index || arr.indexOf(order) === -1
    );
  });
};
