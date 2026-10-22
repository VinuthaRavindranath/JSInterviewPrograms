function countCharacterFrequency(str) {
    const frequency = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
    }
    return frequency;
}

// Example usage:
console.log(countCharacterFrequency("hello")); 
// Output: { h: 1, e: 1, l: 2, o: 1 }