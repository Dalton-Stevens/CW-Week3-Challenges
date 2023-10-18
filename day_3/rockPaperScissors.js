const rps = (p1, p2) => {
  return p1 === p2
    ? "Draw!"
    : `Player ${/rs|sp|pr/.test(p1[0] + p2[0]) ? 1 : 2} won!`;
};

console.log(rps("rock", "scissors"));
console.log(rps("scissors", "rock"));
