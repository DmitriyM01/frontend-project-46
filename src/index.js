import fs from 'fs';
import path from 'path';
import _ from 'lodash';

  // функция getData() принимает путь, а возвращает данные из файла по этому пути
const getData = (file) => {
  // функция принимает путь и возвращает его абсолютную версию
  const isAbsolute = (f) => (path.isAbsolute(f) ? f : path.resolve(process.cwd(), (`__fixtures__/${f}`)));

  const data = fs.readFileSync(isAbsolute(file), 'utf-8');
  return data;
};

// функция genDiff принимает пути до файлов, а возвращает различия между данными этих файлов
export default (filepath1, filepath2) => { // это функция genDIff
  const data1 = JSON.parse(getData(filepath1));
  const data2 = JSON.parse(getData(filepath2));

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
