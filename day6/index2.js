import { getInputText } from "../common/common.js";

(() => {
  const input = getInputText("day6/input.txt");
  const [times, distances] = input.split("\n");
  const time = parseInt(
    times
      .split(":")[1]
      .trim()
      .split(" ")
      .filter((time) => {
        return time !== "";
      })
      .reduce((acc, val) => {
        return acc + val;
      }),
  );

  const recordDistance = parseInt(
    distances
      .split(":")[1]
      .trim()
      .split(" ")
      .filter((dist) => {
        return dist !== "";
      })
      .reduce((acc, val) => {
        return acc + val;
      }),
  );

  const computeAcceleration = (timePressed, accRatio = 1) => {
    return timePressed * accRatio;
  };

  const computeDistance = (timePressed, maxTime) => {
    const acc = computeAcceleration(timePressed);
    return acc * (maxTime - timePressed);
  };

  let raceWinCount = 0;

  for (let i = 0; i <= time; i++) {
    const distance = computeDistance(i, time);

    if (distance > recordDistance) {
      raceWinCount++;
    }
  }

  console.log("Part II result: ", raceWinCount);
})();
