import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import result from '../__fixtures__/result.js';

test('json', () => {
    expect(genDiff('f1.json', 'f2.json')).toBe(result);
});

test('yaml', () => {
    expect(genDiff('f1.yaml', 'f2.yaml')).toBe(result);
});

test('yml', () => {
    expect(genDiff('f1.yml', 'f2.yml')).toBe(result);
});
