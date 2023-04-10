#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

// исполняемый файл
const program = new Command();

program
  .name('gendiff')
  .usage('[option] <filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2, program.opts().format));
  });

program.parse();
