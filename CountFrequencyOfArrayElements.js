function countElementFrequencyMap(arr) {
    const frequencyMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }
    return frequencyMap;
}

// Example usage:
const result = countElementFrequencyMap([1, 2, 2, 3, 3, 3, 4]);
console.log(result); 
// Output: Map(4) { 1 => 1, 2 => 2, 3 => 3, 4 => 1 }