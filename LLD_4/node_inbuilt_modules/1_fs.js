const fs = require("fs");
const path = require("path");

//1. Read, write , update, delete your files

//read a file

let data = fs.readFileSync("f1.txt");

console.log("file->" + data);

//write a file
fs.writeFileSync("f2.txt", "This is my Content");
fs.writeFileSync("f3.txt", "This is my content from f3 file");

//update and append the file
fs.appendFileSync("f1.txt", "This is my Content of updated file");

//delet the file

fs.unlinkSync("f3.txt");

//fs module with directories

//create and delete the directory(folder)

// fs.mkdirSync("myDirectory1");
// fs.mkdirSync("myDirectory2");
// fs.mkdirSync("myDirectory3");
// fs.mkdirSync("myDirectory4");

console.log("creating directory");

// fs.rmdirSync("myDirectory3");
// console.log("deleting directory");

let doesExist = fs.existsSync("myDirectory1");
console.log(doesExist);

//we will do an exercise

//copy a file from srcfolder to destination folder

let srcFile = path.join(__dirname, "f1.txt");

let destDirectoryPath = path.join(__dirname, "myDirectory");

let toBeCopiedFilename = path.basename(srcFile);

console.log(toBeCopiedFilename);

const destPath = path.join(destDirectoryPath, toBeCopiedFilename);
console.log(destPath);

fs.copyFileSync(srcFile, destPath);
fs.unlinkSync(srcFile);
