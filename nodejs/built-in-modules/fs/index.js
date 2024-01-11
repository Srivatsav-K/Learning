const fs = require("node:fs");

// Read file synchronously
const fileContentBuffer = fs.readFileSync("./file.txt"); // If char encoding is not specifed returns Buffer.
console.log("fileContentBuffer :", fileContentBuffer); // <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64> (hexadecimal representation of binary data)
const convertBufferToText = () => {
  let content = "";
  fileContentBuffer.forEach((unicode) => {
    content += String.fromCharCode(unicode);
  });
  return content;
};
console.log("convertBufferToText :", convertBufferToText()); // Hello world

const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log("O/p from sync file read :", fileContent); // Hello world

// Read file asynchronously via error first callback pattern
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log("O/p from async file read :", data);
  }
});
console.log("Execute before reading file asynchronously");

//-------------------------------------------------------------------------------

// Write file synchronously
fs.writeFileSync("./write-file.txt", "Writing hello world synchronously! \n");

// Write file asynchronously
fs.writeFile(
  "./write-file.txt",
  "Writing hello world asynchronously! \n",
  { flag: "a" }, // By default overwrites the file, if we want to append to the file add this flag in the options
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Async write to file successs");
    }
  }
);

console.log("Execute before writing to file asynchronously");
