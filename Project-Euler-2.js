//This program will solve and simulate a fibonacci series

//Start of Program
console.log("Start of Program");

var x = 1;
var y = 2;
var z = 0;
var sum = 0;

function sumOfEvents(maxNum) {
    while (z <= maxNum) {
        z = x + y;
        x = y;
        y = z;
        if (z % 2 == 0) {
            sum = sum + z;
        }
    }
    return(sum);
}

console.log(sumOfEvents(4000000));