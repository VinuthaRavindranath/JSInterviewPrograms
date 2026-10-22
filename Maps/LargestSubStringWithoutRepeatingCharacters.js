function getLongestSubstringDetails(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;
    let startIdx = 0; // Tracks where the longest valid window begins

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);

        // If this window is the longest so far, update length and record start position
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            startIdx = left;
        }
    }
 
    return {
        length: maxLength,
        substring: s.substring(startIdx, startIdx + maxLength)
    };
}

console.log(getLongestSubstringDetails("abcabcbb")); 
// Output: { length: 3, substring: "abc" }