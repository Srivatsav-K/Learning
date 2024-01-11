# Character sets and encoding

- Any character will be converted to it's unicode value and then to binary using char encoding such as utf-8 (8 bit binary representation of a decimal).

## Character code

- Numeric representation of any character. ex:

  ```js
  "V".charCodeAt(); // 86 (unicode representatoin of "V" is 86)
  ```

## Character sets

- Character sets are predefined lists of characters represented by numbers. They define what number should be given to a character.

- Ex. Unicode and ASCII

## Character encoding

- Character encoding dicatates how to represent a number in a character set as a binary data before it can be stored in a computer (How many bits to use to represent a number)

- Ex. UTF-8 (states that chars should be encoded in bytes(8 bits)). Ex . 4 => 00000100
