import _ from 'lodash';

const stringify = (node, depth = 1) => {
  if (!_.isObject(node)) {
    return `${node}`;
  }

  const indent = '    ';
  const currentIndent = indent.repeat(depth);
  const indentForBracket = indent.repeat(depth - 1);

  const lines = Object
  .entries(node)
  .map(([key, val]) => `${currentIndent}${key}: ${stringify(val, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${indentForBracket}}`,
  ].join('\n');
};

const makeStylish = (AST, depth = 1) => {
  const indent = '    ';
  const currentIndent = indent.repeat(depth - 1);
  const indentForBracket = indent.repeat(depth - 1);

    const result = ['{'];
    AST.map((element) => {
        switch (element.status) {
          case 'nested':
            result.push(`${currentIndent}    ${element.key}: ${makeStylish(element.value, depth + 1)}`);
            break;
          case 'changed':
            result.push(`${currentIndent}  - ${element.key}: ${stringify(element.value[0], depth + 1)}\n${currentIndent}  + ${element.key}: ${stringify(element.value[1], depth + 1)}`);
            break;
          case 'unchanged':
            result.push(`${currentIndent}    ${element.key}: ${stringify(element.value, depth + 1)}`);
            break;
          case 'added':
            result.push(`${currentIndent}  + ${element.key}: ${stringify(element.value, depth + 1)}`);
            break;
          default:
            result.push(`${currentIndent}  - ${element.key}: ${stringify(element.value, depth + 1)}`);
        }
        return true;
    });
    result.push(`${indentForBracket}}`);
    return result.join('\n');
};

export default makeStylish;

// import makeAST from "../makeAST.js";
// import parser from "../parsers.js";

// const data11 = parser('../__fixtures__/f1.json');
// const data21 = parser('../__fixtures__/f2.json');
// const oo = makeAST(data11, data21);
// console.log(makeStylish(oo));
