var mooncatparser = require("../mooncatparser");

var catId = "0xff09000ca7";
var data = mooncatparser.getImageData(catId);
var info = mooncatparser.getInfo(catId);

console.log(info);
console.log(data);