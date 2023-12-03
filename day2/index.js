import { getInputText, sum } from "../common/common.js";

(() => {
  const rawInput = getInputText("day2/input.txt");
  const rawLines = rawInput.split("\n");
  const cubesInBag = {
    red: 12,
    green: 13,
    blue: 14,
  };

  let gamesCounter = 0;

  // loop over games. Number of game will be retrieved via index + 1;
  for (let i = 0; i < rawLines.length; i++) {
    const gameNumber = i + 1;
    const game = rawLines[i];
    const rawSets = game.split(":")[1];
    const setsGroups = rawSets.split(";");
    const setResults = [];

    // one game set
    for (const setGroup of setsGroups) {
      const rawSet = setGroup.split(",");
      const set = {};
      const colourResults = {};

      let _colour;
      let _count;

      // one cube
      for (const cubeData of rawSet) {
        const [count, colour] = cubeData.trim().split(" ");
        _count = count.trim();
        _colour = colour.trim();

        // add set colour count
        if (!Object.prototype.hasOwnProperty.call(set, _colour)) {
          set[_colour] = parseInt(_count);
        } else {
          set[_colour] += parseInt(_count);
        }
        // verify, that results for each colour is within bound, or not
        if (set[_colour] <= cubesInBag[_colour]) {
          colourResults[_colour] = true;
        } else {
          colourResults[_colour] = false;
        }
      }
      // check colour result for whole set
      if (
        Object.values(colourResults).every((result) => {
          return result === true;
        })
      ) {
        setResults.push(true);
      } else {
        setResults.push(false);
      }
    }

    // if colour counts for whole game set is within bounds
    // increment games IDs counter
    if (
      setResults.every((result) => {
        return result === true;
      })
    ) {
      gamesCounter += gameNumber;
    }
  }

  console.log("Sum of games IDs: ", gamesCounter);
})();
