function generateFibonacciIterative(n) {
    // if (n <= 0) return [];
    // if (n === 1) return [0];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// Example usage:
console.log(generateFibonacciIterative(5)); // Output: [0, 1, 1, 2, 3]