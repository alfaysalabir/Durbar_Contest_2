/* Given an array of integers, return an object containing the count of even and odd numbers.

Example 1
Input: numbers = [1,2,3,4,5]

Output: {"even":2,"odd":3}

Example 2
Input: numbers = [10,20,30]

Output: {"even":3,"odd":0}

Constraints
The input array `numbers` will contain only integers.
The length of the `numbers` array will be between 0 and 1000. */


function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        if (num % 2 === 0) {
            evenCount++;
        }
        else {
            oddCount++;
        }
    }

    return { even: evenCount, odd: oddCount };
}