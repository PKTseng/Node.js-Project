// 起手式
const fs = require("fs");

// 測試 node 是否可以執行
// const hello = "Hello world";
// console.log(hello);

// 執行這個檔案
// const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
// console.log(textIn);

// 新增檔案
// const textOut = `this is a text file : ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./starter/txt/output.txt", textOut);
// console.log("File written !!");

// callback hell
fs.readFileSync("./starter/txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR!!");
  console.log(data1);
  fs.readFileSync("./starter/txt/append.txt", "utf-8", (err, data2) => {
    console.log(data2);
  });
});
