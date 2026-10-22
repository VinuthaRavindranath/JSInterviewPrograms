function isAnagram(strA, strB) {
 
let sortedA = strA.split("").sort().join("");
let sortedB = strB.split("").sort().join("");

return sortedA === sortedB;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("act", "cat"));
console.log(isAnagram("hello", "world"));