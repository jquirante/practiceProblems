// Input: a four digit number
// check if the four digit number is a valid input
// If its a valid input
    // reorder the number from ascending to descending. set this equal to var bigValue
    // reorder the number from descending to ascending. set this equal to var smallValue
        // If the result is equal to 6174 stop
            // else loop again


function kaprekarsConstant(input) {
    if (checkValidInput(input) !== true) {
        return 'Please enter a valid input';
    }

    const resultsArray = [];
    let test;
    let counter = null;

    while (test !== 6174) {
        var ascending = input.toString().split('').sort().join('');
        var descending = input.toString().split('').sort((a,b) => {return b - a}).join('');

        test = descending - ascending
        resultsArray.push(test);
        input = test;
        counter++
    }

    return counter;

}

function checkValidInput(input) {
    const characterCount = {}

    let inputCopy = input.toString().slice();

    for ( var i = 0; i < inputCopy.length; i++) {
        if (characterCount[inputCopy.charAt(i)] === undefined) {
            characterCount[inputCopy.charAt(i)] = 1;
        } else {
            characterCount[inputCopy.charAt(i)]++;
            if (characterCount[inputCopy.charAt(i)]  > 2) {
                return false
            }
        }
    }

    return true
        
}

console.log(kaprekarsConstant(3254))
console.log(kaprekarsConstant(1112))