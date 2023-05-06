import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';

const getExtension = (filename) => path.extname(filename);

const getName = (filename) => path.basename(filename);

const parser = (file) => {
    const name = getName(file);
    const extension = getExtension(name);
    // const p = path.resolve(process.cwd(), (`__fixtures__/${file}`));
    return extension !== '.json' ? yaml.load(fs.readFileSync(file, 'utf-8')) : JSON.parse(fs.readFileSync(file, 'utf-8'));
};

export default parser;
