const numbers = [1, 2, 3, 4, 5];

// Push
numbers.push(6); 
// console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// Pop
numbers.pop();
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Unshift
numbers.unshift(0);
// console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]

// Shift
numbers.shift();
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Map
numbers.map(number => number * number);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Reduce
numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15

// Filter
numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// Some
numbers.some(number => number % 2 === 0);
// console.log(hasEvenNumber); // Output: true

// Every
numbers.every(number => number % 2 === 0);
// console.log(allEvenNumbers); // Output: false

// Find
numbers.find(number => number % 2 === 0);
// console.log(firstEvenNumber); // Output: 2

//Spread Operator
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];
const finalNums = [...nums, ...nums2];
// console.log(finalNums);

// Rest Operator
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(first, second, rest); // Output: 1, 2, [3, 4, 5]

(...numbers) => {
      return  numbers;
}

// console.log(sum2(nums, nums2, finalNums))

//Concat Operator
nums.concat(nums2, finalNums);
// console.log(newNums);

const arr = ['apple', 'banana', 'orange'];
//Slice method
arr.slice(1,2);
// console.log(newArr); 

// Splice Method
arr.splice(1, 1, 'grape', 'kiwi')


// Fill
const newArr = [1, 2, 3, 4, 5];
newArr.fill(0, 1);
// console.log(newArr);

//FindIndex
const index = newArr.findIndex(num => num % 2 === 0);
// console.log(index);

// Flat
const numArr = [1, 2, [3, 4, [5, 6]]];
const flatArr = numArr.flat(2);
// console.log(flatArr);

//Reverse
nums.reverse();
// console.log(nums);

//Sort
const unsorted = [5, 2, 9, 1, 7, 3, 15, 4, 8, 12];
unsorted.sort((a, b) => b - a);
// console.log(unsorted);




