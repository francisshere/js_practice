let sum = 0;

function sumInput() {
    let arr = [];

    while (true) {
        let value = prompt("Enter a number:", 0);

        // Break the loop if the input is not a finite number
        if (value === null || value === "" || !isFinite(value)) 
            {break;} else {
                arr.push(value);

                sum += +value;
                
                console.log(arr);
                console.log(sum);
            }
    }
}

sumInput();