import path from "path";
import { createReadStream } from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const readStream = createReadStream(__dirname + "/readStream.txt", "utf-8");

  readStream.pipe(res);

  res.on("finish", () => {
    // response complete, no need to keep the stream open
    readStream.destroy();
  });
});

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
