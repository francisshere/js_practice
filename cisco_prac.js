function div(a,b){
    let result = a/b;
    if (result === Infinity){
        throw new RangeError("Cannot divide by 0");
    }
    return result;
}

let numbers = [10, 40, 0, 20, 50];

numbers.forEach(element => {
    try {
    divide = div(1000, element);
    console.log(divide);
 } catch (e) {
    console.log("Error Caught");
}});