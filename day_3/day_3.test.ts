import { assertEquals } from 'https://deno.land/std/assert/mod.ts';

import { splitByRegex } from '../utils/utils.ts';
import { mullItOver } from './day_3.ts';

Deno.test('Day 3 - part one', () => {
  const data = splitByRegex('day_3/test_data.txt', /mul\((\d+),\s*(\d+)\)/g);
  assertEquals(mullItOver(data), 161);
});
