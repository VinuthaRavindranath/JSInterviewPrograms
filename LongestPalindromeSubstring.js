function longestPalindrome(s) {
    if (!s || s.length === 0) return "";

    // Step 1: Preprocess string to handle odd/even palindromes uniformly
    // e.g., "abba" becomes "^#a#b#b#a#$"
    let t = "^";
    for (let i = 0; i < s.length; i++) {
        t += "#" + s[i];
    }
    t += "#$";

    const n = t.length;
    const p = new Array(n).fill(0); // P[i] stores the radius of palindrome centered at i
    let center = 0, right = 0;
    let maxLen = 0, centerIndex = 0;

    for (let i = 1; i < n - 1; i++) {
        const mirror = 2 * center - i; // Get mirror index of i with respect to center

        if (right > i) {
            p[i] = Math.min(right - i, p[mirror]);
        }

        // Attempt to expand the palindrome centered at i
        while (t[i + 1 + p[i]] === t[i - 1 - p[i]]) {
            p[i]++;
        }

        // If palindrome centered at i expands past right boundary, adjust center and right bound
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }

        // Track the maximum length palindrome found
        if (p[i] > maxLen) {
            maxLen = p[i];
            centerIndex = i;
        }
    }

    // Extract the longest palindrome from the original string
    const start = Math.floor((centerIndex - maxLen) / 2);
    return s.substring(start, start + maxLen);
}

// Example usage:
console.log(longestPalindrome("babad")); // Output: "bab" (or "aba")
console.log(longestPalindrome("cbbd"));  // Output: "bb"