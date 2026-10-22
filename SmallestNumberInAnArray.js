function findSmallestManual(arr) {
    if (arr.length === 0) return null;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Example usage:
console.log(findSmallestManual([10, 45, 2, 89, 33])); // Output: 2