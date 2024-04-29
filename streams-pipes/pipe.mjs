import path from "path";
import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "fs";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const readStream = createReadStream(__dirname + "/readStream.txt", "utf-8");
const writeStream = createWriteStream(__dirname + "/pipeStream.txt", "utf-8");

// Pipe the readStream to the writeStream (instead of listening to the on data event this directly writes to the file)
readStream.pipe(writeStream);
