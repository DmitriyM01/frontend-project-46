import makeStylish from './stylish.js';
import makePlain from './plain.js';

export default (tree, format) => {
    switch (format) {
        case 'stylish':
            return makeStylish(tree);
        case 'plain':
            return makePlain(tree);
        default:
            throw new Error('введите корректный формат');
    }
};
