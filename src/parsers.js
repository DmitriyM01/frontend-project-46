import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';

const getExtension = (filename) => path.extname(filename);

const getName = (filename) => path.basename(filename);

const getData = (file) => {
    const name = getName(file);
    const extension = getExtension(name);
    const p = path.resolve(process.cwd(), (`__fixtures__/${file}`));
    return extension !== '.json' ? yaml.load(fs.readFileSync(p, 'utf-8')) : JSON.parse(fs.readFileSync(p, 'utf-8'));
};

export default getData;

// const f = 'f2.json';
// console.log(getData(f));
// console.log(typeof(getData(f)));
