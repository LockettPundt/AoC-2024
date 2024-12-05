import { assertEquals } from 'https://deno.land/std/assert/mod.ts';

import { historianHysteria } from './day_1.ts';
import { splitByNewLine } from '@utils/utils.ts';

Deno.test('Day 1 - part one', () => {
  const data = splitByNewLine('day_1/test_data.txt');
  assertEquals(historianHysteria(data).listDifferences, 11);
});

Deno.test('Day 1 - part two', () => {
  const data = splitByNewLine(`day_1/test_data.txt`);
  assertEquals(historianHysteria(data).listFrequencies, 31);
});
