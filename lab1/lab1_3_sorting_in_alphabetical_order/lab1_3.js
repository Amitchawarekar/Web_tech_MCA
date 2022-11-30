// take input
const string =prompt('Enter a sentence: ');
 
// converting to an array
let l_words = string.toLowerCase();
let words = l_words.split(' ');
 
 // sort the array elements
words.sort();
// display the sorted words
console.log('The sorted words are:');
 
for (const element of words) {
  console.log(element);
}
