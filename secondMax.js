// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

// Solution:

function secondMax (arr) {
    arr.sort((a, b) => b - a);
    arr[0] !== arr[1] ? console.log(arr[1]) : console.log(arr[2]);
}

secondMax([12, 35, 1, 10, 34, 1]);

