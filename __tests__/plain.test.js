import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const result = fs.readFileSync(path.resolve(process.cwd(), ('__fixtures__/resultPlain.txt')), 'utf-8');
test('jsonPlain', () => {
    expect(genDiff('f1.json', 'f2.json', 'plain')).toEqual(result);
});
