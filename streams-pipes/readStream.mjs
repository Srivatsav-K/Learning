import path from "path";
import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "fs";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const readStream = createReadStream(__dirname + "/readStream.txt", "utf-8");
const writeStream = createWriteStream(__dirname + "/writeStream.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log("New chunk received 🚀");
  console.log(chunk);

  writeStream.write(chunk);
  console.log("Data written to file");
});
