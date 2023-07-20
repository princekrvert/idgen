#!/usr/bin/env node
//Author Prince Kumar 
//date 20 july 2023
// all import goes here 
let axios = require("axios");
const { Command } = require('commander');
const program = new Command();

program
  .name('Idgen')
  .description('A fake id generator')
  .version('1.0.0');

  program
  .option('-o, --output [string]', 'Save the outpur into a file');

program.parse(process.argv);
const options = program.opts();
// NOw ask the series of questions from the user..
console.log("This tool is under devlopment..");

