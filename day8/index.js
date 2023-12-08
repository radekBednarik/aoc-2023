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

  let next = "";

  for (let i = 0; i < navString.length; i++) {
    const navigation = navString[i];
    console.log(navigation);
    let index = 0;

    if (navigation === "R") {
      index = 1;
    }

    if (i === 0) {
      next = list[0][1][index];
      console.log(next);
      continue;
    }

    next =
      list[
        list.filter((item) => {
          const index = item.findIndex((item) => {
            return item === next;
          });

          return index !== -1;
        })
      ];

    console.log(next);
  }
})();
