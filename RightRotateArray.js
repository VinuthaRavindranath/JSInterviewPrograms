function rotateRight(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0,- k)];
}

const nums = [1, 2, 3, 4, 5];
console.log(rotateRight(nums, 2)); 
// Output: [4, 5, 1, 2, 3]