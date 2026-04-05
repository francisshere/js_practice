let fibRec = n => n<2?n:fibRec(n-1) + fibRec(n-2);

console.log(fibRec(4)); // -> 3
console.log(fibRec(7)); // -> 13