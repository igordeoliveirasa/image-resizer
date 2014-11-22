#!/usr/bin/env node

var resizer = require("./resize_image");

var ap = require('argparser').files(0).nonvals("ios", "android").parse();

var src_path = ap.arg(0);
var ios = ap.opt("ios");
var android = ap.opt("android");

if (ios) {
  var prefix = "ios_screenshot_";
  resizer.resize(src_path, "./" + prefix + "iPhone_6_Plus_1242x2208.png", 1242, 2208)
  resizer.resize(src_path, "./" + prefix + "iPhone_6_750x1334.png", 750, 1334)
  resizer.resize(src_path, "./" + prefix + "iPhone_5_And_5s_640x1136.png", 640, 1136)
  resizer.resize(src_path, "./" + prefix + "iPhone_4_And_4s_640x920.png", 640, 920)
  resizer.resize(src_path, "./" + prefix + "iPad_iPad_2_iPad_Mini_1024x768.png", 1024, 768)
  resizer.resize(src_path, "./" + prefix + "iPad_Air_iPad_Mini_Retina_2048x1536.png", 2048, 1536)
}
