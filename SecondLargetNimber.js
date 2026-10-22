function findSecondLargestManual(arr) {
    if (arr.length < 2) return null;
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    
    return secondLargest;
}

// Example usage:
console.log(findSecondLargestManual([12, 35, 1, 10, 34, 1])); // Output: 34