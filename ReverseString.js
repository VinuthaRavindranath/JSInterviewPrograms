function reverseStringBuiltIn(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseStringBuiltIn("hello")); // Output: "olleh"

function reverseStringManual(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage:
console.log(reverseStringManual("javascript")); // Output: "tpircsavaj"