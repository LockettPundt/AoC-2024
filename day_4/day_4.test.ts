import { assertEquals } from 'https://deno.land/std/assert/mod.ts';

import { splitByNewLine } from '@utils/utils.ts';
import { ceresSearch } from './day_4.ts';

Deno.test('Day 4 - part one', () => {
  const data = splitByNewLine('day_4/test_data.txt');
  assertEquals(ceresSearch(data).xmasResults, 18);
});

Deno.test('Day 4 - part two', () => {
  const data = splitByNewLine('day_4/test_data.txt');
  assertEquals(ceresSearch(data).masResults, 9);
});
