# Streams and buffers

## Streams

- A stream is sequence of data that is being moved from one point to an other over time

- Ex.

  - A stream of data over the internet being moved from one computer to the another
  - A stream of data being transferred from one file to another within the same computer

- We process streams of data as they arrive instead of waiting for the entire data to be available
  - while watching a video, the data arrives in chunks and we watch in chunks while the rest of the data arrives over time.
  - While transferring file contents we dont wait for the entire file to be saved in temporary memory before copying it into another location. We transfer in chunks.

## Buffers

### Analogy

- Consider a rollercoaster which has a seating capacity of 30,

  **Scenario 1**:

  100 - people arrive
  30 - accommodated
  70 - In queue (waiting)

  **Scenario 2**:

  1 - person arrives

  Wait for atleast 10 to start the ride

- This waiting area can be considered as a buffer ( wait for the chunk of data to be filled in the buffer before starting to process)

- Node cannot control the pace at which data arrives in the stream, it can only decide when is the right time to send the data for processing

- If there is data already processed or too little data to process, node puts the arriving data in a buffer.

- It is a intentionally small area that node maintains in the runtime to process a stream of data

Ex. While streaming a video,

- if internet is fast, the speed of the stream is fast, buffer gets filled up quickly and is sent for processing
- if internet is slow, after processing the first chunk of data that arrived, video will show **_Buffering_**, which indicates it is waiting for more data to arrive. Once the buffer is filled up and the data is processed, the video player starts playing the video. While the video is playing more data will continue to arrive and wait in the buffer.

### Relationship between Buffer and binary data, charsets, encoding

```js
const { Buffer } = require("node:buffer");

const buffer = Buffer.from("sri", "utf-8"); // If encoding is not provided(2nd arg), it deafults to utf-8.

console.log(buffer.toJSON()); // { type: 'Buffer', data: [ 115, 114, 105 ] } (data array contains the  unicode representation for each letter)

console.log(buffer.toString()); // "sri"

console.log(buffer); // <Buffer 73 72 69> (binary representation of unicode for "sri" in hexadecimal(o/p is shown in hex beacause binary will be too large to show in terminal) )
/* 
  "s" - string
  115 - unicode
  73 - hex
  1110011 - binary
*/
const hex = 73;
const decimal = parseInt(hex, 16); // 115
const binary = decimal.toString(2); //1110011
```
