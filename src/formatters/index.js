import makeStylish from './stylish.js';

export default (tree, format) => {
    switch (format) {
        case 'stylish':
            return makeStylish(tree);
        default:
            throw new Error('введите корректный формат');
    }
};
