import { getInputText, sum } from "../common/common.js";

(() => {
  const rawInput = getInputText("day2/input.txt");
  const rawLines = rawInput.split("\n");

  let powersSum = 0;

  // loop over games. Number of game will be retrieved via index + 1;
  for (let i = 0; i < rawLines.length; i++) {
    const game = rawLines[i];
    const rawSets = game.split(":")[1];
    const setsGroups = rawSets.split(";");
    const setsNumbers = {};

    // one game set
    for (const setGroup of setsGroups) {
      const rawSet = setGroup.split(",");

      let _colour;
      let _count;

      // one cube
      for (const cubeData of rawSet) {
        const [count, colour] = cubeData.trim().split(" ");
        _count = count.trim();
        _colour = colour.trim();

        if (!Object.prototype.hasOwnProperty.call(setsNumbers, _colour)) {
          setsNumbers[_colour] = [parseInt(_count)];
        } else {
          setsNumbers[_colour].push(parseInt(_count));
        }
      }
    }

    const maxColoursValues = {};

    for (const colour of Object.keys(setsNumbers)) {
      maxColoursValues[colour] = Math.max(...setsNumbers[colour]);
    }

    const setNumsPower = Object.values(maxColoursValues).reduce((acc, val) => {
      return acc * val;
    });

    powersSum += setNumsPower;
  }

  console.log("Sum of powers is: ", powersSum);
})();
