import { assertEquals } from 'https://deno.land/std/assert/mod.ts';

import { splitByNewLine } from '../utils/utils.ts';
import { redNosedReports } from './day_2.ts';

Deno.test('Day 2 - part one', () => {
  const data = splitByNewLine('day_2/test_data.txt');
  assertEquals(redNosedReports(data).numberOfReportsWithNoErrors, 2);
});

Deno.test('Day 2 - part two', () => {
  const data = splitByNewLine(`day_2/test_data.txt`);
  const result = redNosedReports(data);
  assertEquals(result.numberOfReportsWithOneOrNoErrors, 4);
});
