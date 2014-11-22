#!/usr/bin/env node

var gm = require('gm');

module.exports = {
  resize: function resize(src_image, dst_image, width, height) {

    console.log("Resizing image: " + src_image);
    console.log("New Width: " + width);
    console.log("New Height: " + height);
    console.log("Saving at: " + dst_image);

    gm(src_image)
    .options({imageMagick: true})
    .resize(width, height)
      .autoOrient()
      .write(dst_image, function (err) {
          if (!err) console.log('Done!');
      });
  }
}
