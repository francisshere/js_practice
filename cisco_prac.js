let numbers = [50, 10, 40, 30, 20];

let compareNum = (a,b) => {
    let retVal = (a < b) ? 1 : -1;
    return retVal
}

let sorted = numbers.sort(compareNum);
console.log(sorted); // [10, 20, 30, 40, 50]


