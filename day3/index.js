import { getInputText } from "../common/common.js";

(() => {
  const data = getInputText("day3/input.txt");
  const lines = data.split("\n");

  const numbers = [];

  for (let i = 0; i < lines.length; i++) {
    let number = "";
    let numberIndexes = [];

    // scan line by char
    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j];

      // is a number
      if (!isNaN(char)) {
        number += char;
        numberIndexes.push(j);
        // not a number
      } else if (isNaN(char) && number.length > 0) {
        const _number = parseInt(number);
        console.log("number: ", _number, "::", "indexes: ", numberIndexes);
        // scan items around number substring and push to numbers if special char (not a .) is found
        for (let z = numberIndexes[0]; z <= numberIndexes[numberIndexes.length - 1]; z++) {
          // check line above, if not a first line (index === 0)
          if (i > 0) {
            // handle top-left char from the number
            if (j > 0 && lines[i - 1][z - 1] !== ".") {
              numbers.push(_number);
              console.log("Valid number: ", _number);
              break;
            }
            // handle top-right char from the number
            if (j < lines[i - 1].length - 1 && lines[i - 1][z + 1] !== ".") {
              numbers.push(_number);
              console.log("Valid number: ", _number);
              break;
            }
            // handle
            if (lines[i - 1][z] !== ".") {
              numbers.push(_number);
              console.log("Valid number: ", _number);
              break;
            }
          }

          // check line below, if not a last line (index === lines.length - 1)
          if (i < lines.length - 1) {
            // handle down-left char from the number
            if (j > 0 && lines[i + 1][z - 1] !== ".") {
              numbers.push(_number);
              console.log("Valid number: ", _number);
              break;
            }

            // handle down-right char from the number
            if (j < lines[i + 1].length - 1 && lines[i + 1][z + 1] !== ".") {
              numbers.push(_number);
              console.log("Valid number: ", _number);
              break;
            }

            if (lines[i + 1][z] !== ".") {
              numbers.push(_number);
              console.log("Valid number: ", _number);
              break;
            }
          }

          // check a char before, if not a first char
          if (j > 0 && z === 0) {
            if (lines[i][z - 1] !== ".") {
              numbers.push(_number);
              console.log("Valid number: ", _number);
              break;
            }
          }

          // check a char after, if not a last char
          if (j < lines[i].length - 1 && z === numberIndexes[numberIndexes.length - 1]) {
            if (lines[i][z + 1] !== ".") {
              numbers.push(_number);
              console.log("Valid number: ", _number);
              break;
            }
          }
        }

        number = "";
        numberIndexes.length = 0;
      }
    }
  }

  const sumOfPartsNumbers = numbers.reduce((acc, val) => {
    return acc + val;
  });
  console.log("Numbers: ", numbers);
  console.log("Sum of all parts: ", sumOfPartsNumbers);
})();
