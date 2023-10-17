const doubleChar = (str) => {
  return str
    .split("")
    .map((char) => char + char)
    .join("");
};

console.log(doubleChar("abcd"));
console.log(doubleChar("Adidas"));
console.log(doubleChar("1337"));
