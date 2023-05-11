import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';

const getExtension = (filename) => path.extname(filename);

const getName = (filename) => path.basename(filename);

const parser = (file) => {
    const name = getName(file);
    const extension = getExtension(name);
    console.log(`Расширение - ${extension}`);
    const normalizePath = path.resolve(process.cwd(), (`__fixtures__/${name}`));
    console.log(`Путь - ${normalizePath}`);
    return extension !== '.json' ? yaml.load(fs.readFileSync(normalizePath, 'utf-8')) : JSON.parse(fs.readFileSync(normalizePath, 'utf-8'));
};

export default parser;
