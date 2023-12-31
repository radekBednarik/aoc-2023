import { readFileSync } from "fs";

export const getInputText = (path) => {
  try {
    return readFileSync(path, { encoding: "utf-8" });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export const sum = (numbers, initVal) => {
  return numbers.reduce((acc, val) => {
    return acc + val;
  }, initVal);
};

export const printAsParsed = (output) => {
  try {
    console.log(JSON.stringify(output, null, 2));
  } catch (error) {
    console.log(error);
  }
};
