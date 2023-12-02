import { getInputText, sum } from "../common/common.js";

(() => {
  const rawInput = getInputText("day1/input.txt");
  const lines = rawInput.split("\n");
  const spelledNumbers = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  const keys = Object.keys(spelledNumbers);

  const numbers = [];

  for (const line of lines) {
    const nums = [];
    let chars = "";

    for (const char of line) {
      chars += char;

      for (const key of keys) {
        if (chars.includes(key)) {
          if (nums.length < 2) {
            nums.push(spelledNumbers[key]);
            chars = "";
            break;
          } else if (nums.length === 2) {
            nums[1] = spelledNumbers[key];
            chars = "";
            break;
          }
        }
      }

      if (!isNaN(char)) {
        chars = "";
        if (nums.length < 2) {
          nums.push(char);
        } else if (nums.length === 2) {
          nums[1] = char;
        }
      }
    }

    if (nums.length === 1) {
      nums.push(nums[0]);
    }

    numbers.push(
      nums.reduce((acc, val) => {
        return acc + val;
      }, "")
    );

    console.log("==========");
    console.log("line: ", line, "::", "nums: ", nums);
    console.log("=========");
  }

  console.log("NUMBERS: ", numbers);

  const total = numbers.reduce((acc, val) => {
    return acc + parseInt(val);
  }, 0);

  console.log("TOTAL: ", total);
})();
