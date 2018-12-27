// Inputs: 'string of letters' and an array of words
// sort the given string
// create result array
// make a copy of the given array
    // go through each word in the array
        // sort it
        // if it is equal to the given string
        // push that i at original array


function findAnagram (string, array) {
    let givenString = string.split('').sort().join('');
    const results = [];
    const copyOfGivenArray = array.slice();

    for ( let i = 0; i < copyOfGivenArray.length; i ++) {
        debugger;
        let newTest = copyOfGivenArray[i].split('').sort().join('');

        if (newTest == givenString) {
            results.push(array[i]);
        }
    }
    console.log(givenString);
    return results;
}

findAnagram('abba', ['baba', 'bcdc', 'baab', 'dode']);