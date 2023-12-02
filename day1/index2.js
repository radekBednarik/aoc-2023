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
    const nums = ["", ""];
    let leftChars = "";
    let rightChars = "";
    let _rightChars = "";

    for (let i = 0; i < line.length; i++) {
      const lIndex = i;
      const rIndex = line.length - 1 - i;

      leftChars += line[lIndex];
      rightChars += line[rIndex];
      _rightChars = rightChars.split("").reverse().join("");

      console.log("leftChars: ", leftChars);
      console.log("rightChars: ", _rightChars);

      for (let key of keys) {
        if (leftChars.includes(key) && nums[0] === "") {
          nums[0] = spelledNumbers[key];
        }

        if (_rightChars.includes(key) && nums[1] === "") {
          nums[1] = spelledNumbers[key];
        }
      }

      if (!isNaN(line[lIndex]) && nums[0] === "") {
        nums[0] = line[lIndex];
      }

      if (!isNaN(line[rIndex]) && nums[1] === "") {
        nums[1] = line[rIndex];
      }

      if (nums[0].length > 0 && nums[1].length > 0) {
        numbers.push(sum(nums, ""));
        break;
      }
    }

    console.log("nums: ", nums);
  }

  console.log("numbers:", numbers);

  const total = numbers.reduce((acc, val) => {
    return acc + parseInt(val);
  }, 0);

  console.log(total);
})();
