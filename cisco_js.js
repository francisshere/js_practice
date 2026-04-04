let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];


// orig
numbers.forEach(element => {
    console.log(element);
});


// even
numbers.forEach(element => {
    if ((element % 2) === 0){
        console.log(element);
    }
});


//larger than 10, smaller than 60
numbers.forEach(element => {
    if (element >  10 && element < 60){
        console.log(element);
    }
});