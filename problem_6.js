/* Given an array of numbers, return the second largest unique number. If there are fewer than two unique numbers in the array, return null.

Example 1
Input: numbers = [10,5,20,5,15]

Output: 15

Example 2
Input: numbers = [3,3,3]

Output: null

Constraints
The input `numbers` will be an array of integers.
The array can contain positive, negative, or zero values.
The array length will be between 0 and 1000.

Hints
Hint 1. How can you efficiently get only the unique numbers from the array?
Hint 2. Once you have the unique numbers, what's the best way to find the largest and second largest?
Hint 3. Consider edge cases: what if the array is empty, or only has one unique number? */



function findSecondLargestUnique(numbers) {
    let uniqueSet = new Set(numbers);
    let uniqueNumbers = Array.from(uniqueSet);

    if (uniqueNumbers.length < 2) {
        return null;
    }

    uniqueNumbers.sort(function(a, b) {
        return b - a;
    });

    return uniqueNumbers[1];
}