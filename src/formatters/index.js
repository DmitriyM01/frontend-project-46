import makeStylish from './stylish.js';
import makePlain from './plain.js';
import makeJSON from './json.js';

export default (tree, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    case 'json':
      return makeJSON(tree);
    default:
      throw new Error('введите корректный формат');
  }
};
