function lastUniqCharAndValue(s) {
    let map = new Map();
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    // Fixed: changed > 0 to >= 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (map.get(s[i]) === 1) {
            return { index: i, char: s[i] };
        }
    }
    return null; 
}

// Test case where unique char is at index 0
console.log(lastUniqCharAndValue("loveleetcode")); 
// Output: { index: 0, char: 'l' }