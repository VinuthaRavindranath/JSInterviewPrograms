//Using JavaScript filter() and includes()


function findCommonElementsFilter(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

// Example usage:
console.log(findCommonElementsFilter([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); 
// Output: [3, 4, 5]