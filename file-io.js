#!/usr/bin/env node

const fs = require('fs');

fs.readFile('./file.json', 'utf8', (error, data)=>{
  // console.log(data);
  process.stdout.write(data+"\n");
});