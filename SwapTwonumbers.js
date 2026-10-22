function swapTempVariable(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

// Example usage:
console.log(swapTempVariable(5, 10)); // Output: [10, 5]