function findLargestLoop(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage:
console.log(findLargestLoop([4, 9, 2, 55, 12])); // Output: 55