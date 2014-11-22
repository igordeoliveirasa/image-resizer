#!/usr/bin/env node

var gm = require('gm');
var ap = require('argparser').files(0).nums("w", "h").vals(1).parse();

var src_path = ap.arg(0)
var dst_path = ap.arg(1)
var width = ap.opt("w")
var height = ap.opt("h")


function resize(src_image, dst_image, width, height) {

  console.log("Resizing image: " + src_image);
  console.log("New Width: " + width);
  console.log("New Height: " + height);
  console.log("Saving at: " + dst_image);

  gm(src_image)
  .resize(width, height)
    .autoOrient()
    .write(dst_image, function (err) {
        if (!err) console.log(' hoora! ');
    });
}

function main(src, dst, width, height) {
  resize(src, dst, width, height)
}

main(src_path, dst_path, width, height)
