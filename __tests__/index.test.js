import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import result from '../__fixtures__/result.js';
// import { resultOne } from '../__fixtures__/result.js';

// test('plain json', () => {
//     expect(genDiff('fPlain1.json', 'fPLain2.json')).toBe(resultOne);
// });
// тесты на вложенных структурах у меня валятся на ключе с пустым свойством,
//  потому что функция мейкстайлиш автоматически после двоеточия добавляет пробел перед свойством,
// а если такового нет, тьо выходит что в свойстве у меня просто стоит пробел
test('json', () => {
    expect(genDiff('f1.json', 'f2.json')).toBe(result);
});

test('yaml', () => {
    expect(genDiff('f1.yaml', 'f2.yaml')).toBe(result);
});

test('yml', () => {
    expect(genDiff('f1.yml', 'f2.yml')).toBe(result);
});
