import { getInputText } from "../common/common.js";

const parseDataLine = (line) => {
  return parseInt(
    line
      .split(":")[1]
      .trim()
      .split(" ")
      .filter((item) => {
        return item !== "";
      })
      .reduce((acc, val) => {
        return acc + val;
      }),
  );
};

const computeAcceleration = (timePressed, accRatio = 1) => {
  return timePressed * accRatio;
};

const computeDistance = (timePressed, maxTime) => {
  const acc = computeAcceleration(timePressed);
  return acc * (maxTime - timePressed);
};

(() => {
  const input = getInputText("day6/input.txt");
  const [times, distances] = input.split("\n");
  const time = parseDataLine(times);
  const recordDistance = parseDataLine(distances);

  let raceWinCount = 0;

  for (let i = 0; i <= time; i++) {
    const distance = computeDistance(i, time);

    if (distance > recordDistance) {
      raceWinCount++;
    }
  }

  console.log("Part II result: ", raceWinCount);
})();
