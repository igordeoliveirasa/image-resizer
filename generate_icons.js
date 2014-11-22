#!/usr/bin/env node

var resizer = require("./resize_image");

var ap = require('argparser').files(0).nonvals("ios", "android").parse();

var src_path = ap.arg(0);
var ios = ap.opt("ios");
var android = ap.opt("android");

if (ios) {
  var prefix = "ios_icon_";
  resizer.resize(src_path, "./" + prefix + "iPhone_6_Plus_180x180_@3x.png", 180, 180)
  resizer.resize(src_path, "./" + prefix + "iPhone_6_And_5_120x120_@2x.png", 120, 120)
  resizer.resize(src_path, "./" + prefix + "iPhone_4s_120x120_@2x.png", 120, 120)
  resizer.resize(src_path, "./" + prefix + "iPad_And_iPad_Mini_152x152_@2x.png", 152, 152)
  resizer.resize(src_path, "./" + prefix + "iPad2_And_iPad_Mini_76x76_@1x.png", 76, 76)
  resizer.resize(src_path, "./" + prefix + "Apple_Store_1024x1024.png", 1024, 1024)
}
