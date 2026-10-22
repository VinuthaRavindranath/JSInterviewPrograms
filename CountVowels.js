function countVowelsManual(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countVowelsManual("JavaScript")); // Output: 3



function countVowels(word) {
    let vowels = 'aeiou';
    let counts = {}; // Use an object to store counts for each vowel

    for (let i = 0; i < word.length; i++) {
        let char = word[i].toLowerCase(); // Handle uppercase letters too
        
        if (vowels.includes(char)) {
            // If the vowel already exists in our object, add 1. Otherwise, start at 1.
            counts[char] = (counts[char] || 0) + 1;
        }
    }
    
    return counts;
}

console.log(countVowels('experience'));