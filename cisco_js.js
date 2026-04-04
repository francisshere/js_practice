let n = Number(prompt("Enter an initial number: "));
let n2 = Number(prompt("Enter the final number: "));

if (n < n2){
    console.log("Wrong inputs");
} else {
    do {
        console.log(n);
        n -= 10;
    } while (n > -1);
}
