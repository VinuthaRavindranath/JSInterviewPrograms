function mergeIntervals(intervals) {
    if (!intervals || intervals.length <= 1) return intervals;

    // Step 1: Sort intervals based on their start times
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = merged[merged.length - 1];

        // If the current interval overlaps with the last merged one, merge them
        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // Otherwise, add it as a separate interval
            merged.push(currentInterval);
        }
    }

    return merged;
}

// Example usage:
const input = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(input)); 
// Output: [[1, 6], [8, 10], [15, 18]]