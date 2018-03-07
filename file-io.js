#!/usr/bin/env node

const fs = require('fs');
try{
  let data = fs.readFileSync('./file.json', 'utf8');
  process.stdout.write(data+"\n");
}catch(error){
  process.stdout.write(error+"\n");

}
