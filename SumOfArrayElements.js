function sumArrayManual(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
console.log(sumArrayManual([10, 20, 30])); // Output: 60