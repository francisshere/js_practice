try {
    let someNumber = 10;
    someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function
} catch (err) {
    console.log("Error is: " + err);
}
