import { assertEquals } from 'https://deno.land/std/assert/mod.ts';

import { splitByNewLine } from '@utils/utils.ts';
import { printQueue } from './day_5.ts';

Deno.test('Day 5 - part one', () => {
  const data = splitByNewLine('day_5/test_data.txt');
  assertEquals(printQueue(data).correctUpdateValue, 143);
});

Deno.test('Day 5 - part two', () => {
  const data = splitByNewLine('day_5/test_data.txt');
  assertEquals(printQueue(data).incorrectUpdateValue, 123);
});
