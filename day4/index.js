import { getInputText } from "../common/common.js";

(() => {
  const input = getInputText("day4/input.txt");
  const lines = input.split("\n");

  let totalPoints = 0;

  for (let i = 0; i < lines.length; i++) {
    const inputNumbers = lines[i].split(":")[1];
    const numbersGroup = inputNumbers.split("|");
    // prep the numbers to arrays of ints
    const winningNumbers = numbersGroup[0]
      .trim()
      .split(" ")
      .filter((item) => {
        return item !== "";
      })
      .map((item) => {
        return parseInt(item.trim());
      });
    const ownedNumbers = numbersGroup[1]
      .trim()
      .split(" ")
      .filter((item) => {
        return item !== "";
      })
      .map((item) => {
        return parseInt(item.trim());
      });

    let cardPoints = 0;

    for (const number of ownedNumbers) {
      if (winningNumbers.includes(number)) {
        if (cardPoints === 0) {
          cardPoints += 1;
        } else {
          cardPoints = cardPoints * 2;
        }
      }
    }

    console.log(`card no. ${i} has total of ${cardPoints} points`);

    totalPoints += cardPoints;
  }

  console.log("Total points: ", totalPoints);
})();
