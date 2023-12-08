import { getInputText } from "../common/common.js";

(() => {
  const input = getInputText("day8/input.txt");
  const [navString, nodesString] = input.split("\n\n");
  const list = nodesString
    .split("\n")
    .map((line) => line.split(" = "))
    .map((line) => {
      return [line[0], line[1].replaceAll(/[()]/gm, "").split(", ")];
    });

  console.log(navString);
  console.log(list);
})();
