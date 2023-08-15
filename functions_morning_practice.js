
// 1. Write a function that will count the letters of a string and add it to a total. 

const countLettersAndAddTotal = (string) => {
    let stringsWithNoSpaces = string.split(" ").join("");
    return "String => " + string + "\n" + "Number of letters => " +stringsWithNoSpaces.length + "\n";
}

console.log(countLettersAndAddTotal("Today is a good day"))
console.log(countLettersAndAddTotal("I wonder what I should eat today"))
console.log(countLettersAndAddTotal("The Sun is shining and the birds are chirpin"))


// 2. Write a function that will return True or False if a number is divisible by 3 & 5

const isDivisbleByThreeOrFive = (number) => {
    if((number % 3 === 0) && (number % 5 === 0)){
        let confirmationMessage =  number + " is divisible by 3 and 5!";
        return confirmationMessage;
    }else{
        return number + " is not divisble by 3 and 5."
    }
}

console.log(isDivisbleByThreeOrFive(10))
console.log(isDivisbleByThreeOrFive(15))
console.log(isDivisbleByThreeOrFive(20))
console.log(isDivisbleByThreeOrFive(60))

// 3. Vowel Counter: Write a function that takes a string as input and counts the number of vowels (a, e, i, o, u) in it. Add this count to a running total and return the updated total.
const countVowels = (string) => {
    // set number of vowels to return
    let numOfVowels = 0;
    // iterate through the input string
    for(let i = 0; i < string.length; i++){
        // create a vowels array
        const vowels = ['a', 'e', 'i', 'o', 'u']
        // check if each letter in the string is = to any of the vowels in the array
       vowels.forEach((vowel) => {
        if(string[i] !== vowel){
            return;
        }else{
            numOfVowels += 1
        }
       })
    }
    return "The number of vowels in this string is " + numOfVowels;
}
console.log(countVowels('aeiou'));
console.log(countVowels('Supercalifragilisticexpialidocious'));
console.log(countVowels('howManyVowelsAreInThisString?'));

// 4. Even or Odd Checker: Create a function that determines whether a given integer is even or odd. If the number is even, return True; otherwise, return False.

const isNumberEvenOrOdd = (number) => {
    if(number % 2 === 0){
        return number + " is an Even Number - True!"
    }else{
        return number + " is an Odd Number - False!"
    }
}

// 5. Word Reverser: Build a function that takes a sentence (a string containing multiple words) as input and returns the sentence with the order of words reversed.

const reverseAString = (string) => {
    let stringOfReveredLetters = "";
    for(let i = string.length - 1; i >= 0; i--){
        stringOfReveredLetters += string[i]
    }
    let resultMessage = "The reversed string for " + string + " is " + stringOfReveredLetters;
    return resultMessage;
}

console.log(reverseAString('aeiou'));
console.log(reverseAString('Supercalifragilisticexpialidocious'));
console.log(reverseAString('howManyVowelsAreInThisString'));

// 6. Palindrome Detector: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). Return True if it is, and False otherwise.

const checkIfStringIsPalindrome = (string) => {
    // check if the first first letter of the string is equal to the last letter of the string and move the pointer for each toward the middle until we checked all characters
    
    let doStringsMatch = true;
    
    // track the last letter of the string
    let j = string.length - 1;

    // iterate the string moving forward
    for(let i = 0; i < string.length; i++){

        // when iteration goes to the middle, break;
        if(i >= j){
            break;
        }
        if(string[i] !== string[j]){
            doStringsMatch = false;
            break;
        }
        // after loop is done, track the next descending letter
        j--;
    }

    // if all begining and end strings match, return true. Else return false.
    if(doStringsMatch){
        return true;
    }else{
        return false
    }
}
console.log(checkIfStringIsPalindrome("palindrome"));
console.log(checkIfStringIsPalindrome("noon"));
console.log(checkIfStringIsPalindrome("mom"));


// 7.   Longest Word Finder: Create a function that takes a sentence as input and returns the longest word in the sentence.

const findLongestWord = (sentence) => {
    //set result variable to return
    let currentLongestWord = "";
    //make words in sentence into an array
    let sentenceToWordsInArray = sentence.split(' ');
    // loop through each word
    sentenceToWordsInArray.forEach((currentWord) =>{
        // check if current word is longer than the current longest word
        if(currentWord.length > currentLongestWord.length){
            // if so then set the current word to the current longest word
           currentLongestWord = currentWord;
        }
    })
    // return the longest word
    return currentLongestWord;
}

console.log(findLongestWord("which on is the longest word"));
console.log(findLongestWord("these are just some random words, please find the longest word howAboutThisOne"));
