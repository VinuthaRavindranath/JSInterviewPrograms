function removeDuplicatesManual(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

// Example usage:
console.log(removeDuplicatesManual([10, 20, 10, 30, 20, 40])); // Output: [10, 20, 30, 40]