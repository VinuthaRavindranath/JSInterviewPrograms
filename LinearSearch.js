function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Returns the index of the target
        }
    }
    return -1; // Returns -1 if the target is not found
}

const numbers = [10, 23, 45, 70, 11, 15];
console.log(linearSearch(numbers, 70)); // Output: 3
console.log(linearSearch(numbers, 99)); // Output: -1