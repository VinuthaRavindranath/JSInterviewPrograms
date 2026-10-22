function twoSum(nums, target) {
    const seen = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // If the complement exists in our map, we found our pair!
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        
        // Otherwise, store the current number and its index
        seen.set(nums[i], i);
    }
    
    return []; // Return empty if no pair exists
}

const nums = [6, 8, 11, 6, 7, 18];
const target = 17;

console.log(twoSum(nums, target)); 
// Output: [0, 2] (because nums[0] = 6 and nums[2] = 11, and 6 + 11 = 17)