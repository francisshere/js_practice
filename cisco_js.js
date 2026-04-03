try {
const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.

} catch (err) {
    console.log("Error is: " + err);
}
