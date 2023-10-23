const reverseSeq = (n) => {
  let arr = [];

  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }

  return arr;
};

console.log(reverseSeq(5));
console.log(reverseSeq(3));
console.log(reverseSeq(18));
