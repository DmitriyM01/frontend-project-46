import makeAST from './makeAST.js';
import parser from './parsers.js';
import formatter from './formatters/index.js';

// функция genDiff принимает пути до файлов, а возвращает различия между данными этих файлов
const genDIff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parser(filepath1);
  const data2 = parser(filepath2);

  const AST = makeAST(data1, data2);
  return formatter(AST, format);
};

export default genDIff;
