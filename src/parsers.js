import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';

const getExtension = (filename) => path.extname(filename);

const getName = (filename) => path.basename(filename);

const parser = (file) => {
    const name = getName(file);
    const extension = getExtension(name);
    const normalizePath = path.resolve(process.cwd(), (`__fixtures__/${name}`));
    return extension !== '.json' ? yaml.load(fs.readFileSync(normalizePath, 'utf-8')) : JSON.parse(fs.readFileSync(normalizePath, 'utf-8'));
};

console.log(parser('f1.json'));

export default parser;
