function div(a,b){
    let result = a/b;
    if (result === Infinity){
        throw new RangeError("Cannot divide by 0");
    }
    return result;
}

console.log(div(4, 2)); // -> 2
console.log(div(4, 0)); // -> Uncaught RangeError: Can’t divide by 0