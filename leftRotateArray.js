function rotateLeft(arr, k) {
    k = k % arr.length;
    return [...arr.slice(k), ...arr.slice(0, k)];
}

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateLeft(nums, 2)); // Output: [4, 5, 6, 7, 1, 2, 3]