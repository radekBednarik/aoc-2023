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

function navigate(navString, list, finalNode, next, counter, firstIndex) {
  for (let i = 0; i < navString.length; i++) {
    counter++;

    const navigation = navString[i];

    let index = 0;

    if (navigation === "R") {
      index = 1;
    }

    if (i === 0) {
      next = list[firstIndex][1][index];
      continue;
    }

    const listLine = getListLine(list, next);
    next = listLine[1][index];

    if (finalNode === next) {
      return [next, counter];
    }

    if (i === navString.length - 1) {
      const listLineIndex = list.findIndex((item) => {
        const result = JSON.stringify(item) === JSON.stringify(listLine);
        return result;
      });

      navigate(navString, list, finalNode, next, counter, listLineIndex);
    }
  }
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
  const finalNode = list[list.length - 1][0];

  let next = "";
  let counter = 0;
  const firstIndex = 0;

  const [_node, _counter] = navigate(navString, list, finalNode, next, counter, firstIndex);

  console.log("Part II: ", _node, _counter);
})();
