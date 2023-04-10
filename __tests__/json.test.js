import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const result = fs.readFileSync(path.resolve(process.cwd(), ('__fixtures__/result.json')), 'utf-8');

test('json', () => {
    expect(genDiff('f1.json', 'f2.json', 'json')).toBe(result);
});
