# fs

- Use callback based aynsc `fs` API's for max performace (both execution time and memory allocation)

## Read file

- Synchronously

  - If char encoding is not specifed returns Buffer.

  ```js
  const fs = require("node:fs");

  // Read file synchronously
  const fileContentBuffer = fs.readFileSync("./file.txt"); // <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64> (hexadecimal representation of binary data)

  const fileContent = fs.readFileSync("./file.txt", "utf-8"); // Hello world
  ```

- Asynchronously

  - Error first callback pattern

    ```js
    // Read file asynchronously via error first callback pattern
    fs.readFile("./file.txt", "utf-8", (error, data) => {
      if (error) {
        console.error(error);
      } else {
        console.log("O/p from async file read :", data);
      }
    });
    console.log("Execute before reading file asynchronously");
    ```

  - Promise based pattern

    ```js
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
    ```

## Write file

- Synchronously

  ```js
  // Write file synchronously
  fs.writeFileSync("./write-file.txt", "Writing hello world synchronously! \n");
  ```

- Asynchronously

  ```js
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
  ```
