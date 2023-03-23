import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import result from '../__fixtures__/result.js';

test('should be working', () => {
    expect(genDiff('f1.json', 'f2.json')).toBe(result);
    expect(genDiff('f1.json', 'f2.json')).toBe(result);
});
