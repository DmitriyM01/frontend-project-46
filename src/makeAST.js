import _ from 'lodash';
// import parser from './parsers.js';

const makeChildren = (data1, data2) => {
    const keysOne = Object.keys(data1);
    const keysTwo = Object.keys(data2);
    const uniqKeys = _.union(keysOne, keysTwo).sort();
    const children = uniqKeys.map((key) => {
      if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
        return { status: 'nested', key, children: makeChildren(data1[key], data2[key]) };
      }
      if (!Object.hasOwn(data1, key)) {
          return { status: 'added', key, value: data2[key] };
      }
      if (data1[key] === data2[key]) {
          return { status: 'unchanged', key, value: data2[key] };
      }
      if (!Object.hasOwn(data2, key)) {
          return { status: 'deleted', key, value: data1[key] };
      }
      if (data1[key] !== data2[key]) {
          return { status: 'changed', key, value: [data1[key], data2[key]] };
      }
      return true;
    });
    return children;
};

const makeAST = (path1, path2) => ({ status: 'root', children: makeChildren(path1, path2) });

// const data11 = parser('../__fixtures__/f1.json');
// const data21 = parser('../__fixtures__/f2.json');
// const oo = makeAST(data11, data21);
// console.log(oo);

export default makeAST;
