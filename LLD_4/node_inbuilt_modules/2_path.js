const path = require("path");

//I want to get the extnsion of a file

//f1.txt , song.mp3, video.mp4

const extension = path.extname(
  "C:UsersUserDesktopFullStack_projectFullStackLLD_4\node_inbuilt_modules\f1.txt"
);
console.log(__dirname);
const baseName = path.basename(path.join(__dirname, "f1.txt"));

console.log(path.join(__dirname, "f1.txt"));

console.log(extension);
console.log(baseName);
