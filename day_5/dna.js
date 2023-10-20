const DNAStrand = (dna) => {
  let obj = { A: "T", T: "A", C: "G", G: "C" };

  return dna.replace(/./g, (e) => obj[e]);
};

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));
