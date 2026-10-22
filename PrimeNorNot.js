function isPrimeBasic(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isPrimeBasic(17)); // Output: true
console.log(isPrimeBasic(10)); // Output: false