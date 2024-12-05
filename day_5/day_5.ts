export const printQueue = (input: string[]) => {
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

  return pageUpdates.reduce((acc, updates) => {
    return acc + getPageUpdateValue(updates, pageOrderRuleMap);
  }, 0);
};

const getPageUpdateValue = (
  updates: number[],
  map: Record<number, number[]>
) => {
  if (
    updates.every((page, index, arr) => {
      return (map[page] ?? []).every(
        (order) => arr.indexOf(order) > index || arr.indexOf(order) === -1
      );
    })
  ) {
    return updates[Math.floor(updates.length / 2)];
  }
  return 0;
};
