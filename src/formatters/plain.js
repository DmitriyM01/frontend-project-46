import _ from 'lodash';

const formaredResult = (result) => result.filter((el) => el !== '');

const stringify = (value) => {
    if (_.isPlainObject(value)) {
      return '[complex value]';
    }
    return typeof value === 'string' ? `'${value}'` : value;
};

const makePlain = (tree) => {
  const iter = (node, name = '') => {
      const currentName = `${name} ${node.key}`.trim().split(' ').join('.');
      switch (node.status) {
        case 'root':
          return node.children.map((child) => iter(child, ''));
        case 'nested':
          return node.children.map((child) => iter(child, currentName));
        case 'deleted':
          return `Property '${currentName}' was removed`;
        case 'added':
          return `Property '${currentName}' was added with value: ${stringify(node.value)}`;
        case 'changed':
          return `Property '${currentName}' was updated. From ${stringify(node.value[0])} to ${stringify(node.value[1])}`;
        case 'unchanged':
          return '';
        default:
          throw new Error(`unknown file status ${node.status}`);
      }
    };
    return formaredResult(iter(tree).flat(Infinity)).join('\n');
};

// import makeAST from "../makeAST.js";
// import parser from "../parsers.js";

// const data11 = parser('../__fixtures__/f1.json');
// const data21 = parser('../__fixtures__/f2.json');
// const oo = makeAST(data11, data21);
// // console.log(oo);
// console.log(makePlain(oo));

export default makePlain;
