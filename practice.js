// Input: a four digit number
// check if the four digit number is a valid input
// If its a valid input
    // reorder the number from ascending to descending. set this equal to var bigValue
    // reorder the number from descending to ascending. set this equal to var smallValue
        // If the result is equal to 6174 stop
            // else loop again


function kaprekarsConstant(input) {
    
    
}

function orderInput(input) {
    input = input.toString().sort();
    return input;

}

console.log(orderInput(3524));

console.log(kaprekarsConstant(3524));