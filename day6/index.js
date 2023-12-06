import { getInputText } from "../common/common.js";

(() => {
  const input = getInputText("day6/input.txt");
  const [times, distances] = input.split("\n");
  const timeVals = times
    .split(":")[1]
    .trim()
    .split(" ")
    .filter((time) => {
      return time !== "";
    })
    .map((time) => {
      return parseInt(time.trim());
    });

  const distanceVals = distances
    .split(":")[1]
    .trim()
    .split(" ")
    .filter((dist) => {
      return dist !== "";
    })
    .map((dist) => {
      return parseInt(dist.trim());
    });

  const computeAcceleration = (timePressed, accRatio = 1) => {
    return timePressed * accRatio;
  };

  const computeDistance = (timePressed, maxTime) => {
    const acc = computeAcceleration(timePressed);
    return acc * (maxTime - timePressed);
  };

  let winCounts = [];

  for (let a = 0; a < timeVals.length; a++) {
    let raceWinCount = 0;

    const time = timeVals[a];
    const recordDistance = distanceVals[a];

    for (let i = 0; i <= time; i++) {
      const distance = computeDistance(i, time);

      if (distance > recordDistance) {
        raceWinCount++;
      }
    }

    winCounts.push(raceWinCount);
  }

  const result = winCounts.reduce((acc, val) => {
    return acc * val;
  });

  console.log("Part I result: ", result);
})();
