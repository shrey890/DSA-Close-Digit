console.time()
function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals = [];
    for (let i = 0; i < intervals.length; i++) {
        if (mergedIntervals.length > 0 && intervals[i][0] <= mergedIntervals[mergedIntervals.length - 1][1]) {
            mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], intervals[i][1]);
        } else {
            mergedIntervals.push(intervals[i]);
        }
    }
    return mergedIntervals;
}
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const mergedIntervals = mergeIntervals(intervals);
console.log(mergedIntervals);
console.timeEnd()
