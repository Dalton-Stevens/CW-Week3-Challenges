const getMiddle = (str) => {
  return str.slice((str.length - 1) / 2, str.length / 2 + 1);
};

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
