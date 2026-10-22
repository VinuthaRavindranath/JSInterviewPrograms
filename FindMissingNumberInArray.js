function findMissingNumberSet(arr, n) {
    const numSet = new Set(arr);
    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }
    return null;
}

// Example usage:
console.log(findMissingNumberSet([2, 1, 5, 3], 5)); // Output: 4