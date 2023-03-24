import _ from 'lodash';
import getData from './parsers.js';

// функция genDiff принимает пути до файлов, а возвращает различия между данными этих файлов
export default (filepath1, filepath2) => { // это функция genDIff
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortedKeys = _.union(keys1, keys2).sort();

  let result = ['{'];
  sortedKeys.map((key) => {
    if (!Object.hasOwn(data2, key)) {
      result.push(`  - ${key}: ${data1[key]}`);
    } else if (!Object.hasOwn(data1, key)) {
      result.push(`  + ${key}: ${data2[key]}`);
    } else if (data1[key] === data2[key]) {
      result.push(`    ${key}: ${data1[key]}`);
    } else if (data1[key] !== data2[key]) {
      result.push(`  - ${key}: ${data1[key]}`);
      result.push(`  + ${key}: ${data2[key]}`);
    }
    return result;
  });
    result.push('}');
    result = result.join('\n');
    return result;
};
