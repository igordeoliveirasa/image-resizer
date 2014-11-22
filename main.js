#!/usr/bin/env node

var ap = require('argparser').files(0).nums("w", "h").vals(1).parse();
var src_path = ap.arg(0)
var dst_path = ap.arg(1)
var width = ap.opt("w")
var height = ap.opt("h")

var resizer = require("./resize_image")
resizer.resize(src_path, dst_path, width, height)
