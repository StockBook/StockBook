console.log('Starting app.js');

const fs = require('fs');

const _ = require('lodash');

const yargs = reuqire('yargs');
const argv = yargs.argv;

var command = process.argv[2];

if(command ==='add'){
    console.log('Add new note');
}else if(command === 'list'){
    console.log('listing all notes');
}else{
    console.log('Command not regnized');
}