import { getInputText } from "../common/common.js";

function getListLine(list, next) {
  return list.filter((item) => {
    const index = item.findIndex((item) => {
      const result = item === next;
      return result;
    });

    return index !== -1;
  })[0];
}

(() => {
  const input = getInputText("day8/input.txt");
  const [navString, nodesString] = input.split("\n\n");
  const list = nodesString
    .split("\n")
    .map((line) => line.split(" = "))
    .map((line) => {
      return [line[0], line[1].replaceAll(/[()]/gm, "").split(", ")];
    });

  let next = "";
  let counter = 0;

  for (let i = 0; i < navString.length; i++) {
    counter++;
    const navigation = navString[i];

    console.log(navigation);

    let index = 0;

    if (navigation === "R") {
      index = 1;
    }

    if (i === 0) {
      next = list[0][1][index];
      continue;
    }

    next = getListLine(list, next)[1][index];

    console.log(next, counter);
  }
})();
