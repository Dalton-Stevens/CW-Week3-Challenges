const basicOp = (operator, value1, value2) => {
  if (operator === "+") {
    return value1 + value2;
  } else if (operator === "-") {
    return value1 - value2;
  } else if (operator === "*") {
    return value1 * value2;
  } else if (operator === "/") {
    return value1 / value2;
  } else {
    return 0;
  }
};

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 4, 7));
console.log(basicOp("*", 4, 7));
console.log(basicOp("/", 49, 7));
