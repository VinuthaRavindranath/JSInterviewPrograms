function isPalindromeBuiltIn(str) {
    // Normalize string: convert to lowercase and remove non-alphanumeric characters
    const cleaned = str.toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Example usage:
console.log(isPalindromeBuiltIn("racecar")); // Output: true
console.log(isPalindromeBuiltIn("hello"));   // Output: false