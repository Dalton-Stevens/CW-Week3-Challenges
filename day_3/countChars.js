const count = (str) => {
  let count = {};

  str.split("").forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });

  return count;
};

console.log(count("a"));
console.log(count("ab"));
console.log(count("aba"));
