function fibRec(n){
    return n<2?n:fibRec(n-1) + fibRec(n-2);
}

console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13