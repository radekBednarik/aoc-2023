import { getInputText } from "../common/common.js";

const mapStrength = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

const strengthOfHand = (hand) => {
  const _map = {};

  for (const card of hand) {
    if (!Object.prototype.hasOwnProperty.call(_map, card)) {
      _map[card] = 1;
      continue;
    }

    _map[card]++;
  }

  const cardsTypes = Object.keys(_map);
  const cardsTypesCounts = Object.values(_map);

  // strongest
  if (cardsTypes.length === 1) {
    return 7;
  }
  // weakest
  if (cardsTypes.length === 5) {
    return 1;
  }
  // four of kind
  if (cardsTypes.length === 2 && cardsTypesCounts.includes(4)) {
    return 6;
  }
  // full house
  if (cardsTypes.length === 2 && cardsTypesCounts.includes(3) && cardsTypesCounts.includes(2)) {
    return 5;
  }
  // three of kind
  if (
    cardsTypes.length === 3 &&
    cardsTypesCounts.filter((item) => item === 3).length === 1 &&
    cardsTypesCounts.filter((item) => item === 1).length === 2
  ) {
    return 4;
  }
  // two pairs
  if (cardsTypes.length === 3 && cardsTypesCounts.filter((item) => item === 2).length === 2) {
    return 3;
  }
  // one pair
  if (
    cardsTypes.length === 4 &&
    cardsTypesCounts.filter((item) => item === 2).length === 1 &&
    cardsTypesCounts.filter((item) => item === 1).length === 3
  ) {
    return 2;
  }
};

(() => {
  const input = getInputText("day7/input.txt");
  const plays = input
    .split("\n")
    .map((line) => {
      return line.split(" ");
    })
    .map((pair) => {
      return [pair[0], parseInt(pair[1].trim())];
    });

  const sorted = plays.toSorted((a, b) => {
    const aHand = strengthOfHand(a[0]);
    const bHand = strengthOfHand(b[0]);

    // not the same strenght
    if (aHand !== bHand) {
      return aHand - bHand;
    }

    // same strenght
    for (let i = 0; i < a[0].length; i++) {
      const aStrength = mapStrength[a[0][i]];
      const bStrength = mapStrength[b[0][i]];

      if (aStrength !== bStrength) {
        return aStrength - bStrength;
      }
    }
  });

  let sum = 0;

  sorted.forEach((play, index) => {
    sum += play[1] * (index + 1);
  });

  console.log("Part I: ", sum);
})();
