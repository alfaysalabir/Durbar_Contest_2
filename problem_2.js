/* Given a sentence where words are separated by spaces, convert it into camelCase format. The first word of the resulting string should start with a lowercase letter, and all subsequent words should start with an uppercase letter. All other letters should be lowercase, and there should be no spaces.

Example 1
Input: sentence = "hello world"

Output: "helloWorld"

Example 2
Input: sentence = "java script is fun"

Output: "javaScriptIsFun"

Constraints
The input `sentence` will be a string.
Words will be separated by one or more spaces.
The input may contain leading or trailing spaces.

Hints
Hint 1. Consider how to split the string into individual words.
Hint 2. Think about how to handle the first word differently from subsequent words.
Hint 3. Look into string methods like `toLowerCase()`, `toUpperCase()`, `charAt()`, `slice()`, `trim()`, and `split()`. */


function convertToCamelCase(sentence) {
    let trimmedSentence = sentence.trim();
    let words = trimmedSentence.split(/\s+/);
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();

        if (i === 0) {
            result += word;
        }
        else {
            let firstLetter = word.charAt(0).toUpperCase();
            let restOfWord = word.slice(1);
            result += firstLetter + restOfWord;
        }
    }
    return result;
}