function firstUniqCharAndValue(s) {
    let map = new Map();
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return { index: i, char: s[i] };
        }
    }
    return null; // Returns null if no unique character exists
}

console.log(firstUniqCharAndValue("loveleetcode")); 
// Output: { index: 2, char: 'v' }