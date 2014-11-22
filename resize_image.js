#!/usr/bin/env node

var gm = require('gm');

function resize(imagePath, width, height) {

  gm(imagePath)
  .resize(width, height)
    .autoOrient()
    .write(writeStream, function (err) {
        if (!err) console.log(' hoora! ');
    });
}

function main(args) {
  console.log(args)
}
