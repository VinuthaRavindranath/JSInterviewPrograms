function reverseWordsManual(sentence) {
    const words = sentence.trim().split(/\s+/);
    let reversedArray = [];
    
    for (let i = words.length - 1; i >= 0; i--) {
        reversedArray.push(words[i]);
    }
    
    return reversedArray.join(' ');
}

// Example usage:
console.log(reverseWordsManual("the sky is blue")); 
// Output: "blue is sky the"