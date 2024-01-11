const fs = require("node:fs/promises");

async function readFile() {
  try {
    const fileContent = await fs.readFile("./file.txt", "utf-8");
    console.log(fileContent);
  } catch (e) {
    console.error(e);
  }
}
readFile();

console.log("Execute before reading file asynchronously");
