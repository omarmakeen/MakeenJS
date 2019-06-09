// --- Directions
// Given string, return a new string with the reversed order of characters
// --- Examples
//  reverse('abcde') === 'edcba'
//  reverse('hello') === 'olleh'


function reverse(str) {

    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}


// solution #2
// function reverse(str) {
//     return str.split('').reduce((rev, char) => {
//         return char + rev
//     }, '')
// }


// solution #1
// function reverse(str) {
//  return str.split('').reverse().join('');
// }

const reversed = reverse('abcde');
console.log(reversed);
module.exports = reverse;