import { getInputText } from "../common/common.js";

(() => {
  const data = getInputText("day3/input.txt");
  const lines = data.split("\n");

  const numbers = [];

  for (let i = 0; i < lines.length; i++) {
    let number = "";

    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j];

      if (!isNaN(char)) {
        number += char;
      } else if (number > 0) {
        numbers.push(number);
        number = "";
      }
    }
  }

  console.log(numbers);
})();
