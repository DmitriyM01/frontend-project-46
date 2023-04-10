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

const makeStylish = (tree) => {
  const iter = (node, depth = 1) => {
    const indent = '    ';
    const currentIndent = indent.repeat(depth - 1);
      switch (node.status) {
        case 'root':
          return `{${node.children.map((child) => iter(child)).join('')}\n}`;
        case 'nested':
          return `\n${currentIndent}    ${node.key}: {${node.children.map((child) => iter(child, depth + 1)).join('')}\n    ${currentIndent}}`;
        case 'changed':
          return `\n${currentIndent}  - ${node.key}: ${stringify(node.value[0], depth + 1)}\n${currentIndent}  + ${node.key}: ${stringify(node.value[1], depth + 1)}`;
        case 'unchanged':
          return `\n${currentIndent}    ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'added':
          return `\n${currentIndent}  + ${node.key}: ${stringify(node.value, depth + 1)}`;
        default:
          return `\n${currentIndent}  - ${node.key}: ${stringify(node.value, depth + 1)}`;
      }
  };
    return iter(tree);
};

export default makeStylish;
